import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

interface Metal {
    name: string;
    workFunction: number; // eV
    color: string;
}

const METALS: Metal[] = [
    { name: 'Sodium', workFunction: 2.28, color: '#d1d5db' },    // Silver-ish
    { name: 'Zinc', workFunction: 4.33, color: '#9ca3af' },      // Grey
    { name: 'Copper', workFunction: 4.70, color: '#d97706' },    // Orange-ish
    { name: 'Platinum', workFunction: 6.35, color: '#e5e7eb' },  // White-silver
    { name: 'Calcium', workFunction: 2.90, color: '#9ca3af' },   // Grey
    { name: 'Magnesium', workFunction: 3.66, color: '#d1d5db' }  // Silver
];

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    active: boolean;
    type: 'photon' | 'electron';
    color?: string;
}

export class Photoelectric extends Simulation {
    // Physics Parameters
    private wavelength = 400; // nm
    private intensity = 50;   // %
    private voltage = 0;      // Volts (-8 to +8)
    private currentMetal = METALS[0];

    // Simulation State
    private particles: Particle[] = [];
    private photocurrent = 0;
    private lastPhotonTime = 0;

    private CATHODE_x = 200;
    private ANODE_x = 600;
    private PLATE_y = 300;
    private PLATE_h = 150;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        // Metal Selection
        addControl('select', 'Target Metal', {
            options: METALS.map(m => m.name)
        }, (val) => {
            this.currentMetal = METALS.find(m => m.name === val) || METALS[0];
            this.particles = []; // Clear particles on change
        });

        // Wavelength Slider
        addControl('slider', 'Wavelength (nm)', { min: 100, max: 850, step: 10, value: 400 }, (v) => {
            this.wavelength = v;
        });

        // Intensity Slider
        addControl('slider', 'Intensity (%)', { min: 0, max: 100, step: 1, value: 50 }, (v) => {
            this.intensity = v;
        });

        // Voltage Slider (Battery)
        addControl('slider', 'Battery Voltage (V)', { min: -8, max: 8, step: 0.1, value: 0 }, (v) => {
            this.voltage = v;
        });
    }

    update() {
        const time = Date.now();

        // 1. Spawn Photons based on Intensity
        // Higher intensity = more photons per second
        const spawnRate = 1000 / (1 + this.intensity * 0.5); // ms between photons
        if (time - this.lastPhotonTime > spawnRate && this.intensity > 0) {
            this.spawnPhoton();
            this.lastPhotonTime = time;
        }

        // 2. Update Particles
        let electronsReachingAnode = 0;

        this.particles.forEach(p => {
            if (!p.active) return;

            // Move
            p.x += p.vx;
            p.y += p.vy;

            if (p.type === 'photon') {
                // Photon hits Cathode
                if (p.x >= this.CATHODE_x && p.y >= this.PLATE_y && p.y <= this.PLATE_y + this.PLATE_h) {
                    p.active = false;
                    this.tryEjectElectron(p.y);
                }
                // Out of bounds cleanup
                if (p.x > this.width || p.y > this.height || p.y < 0) p.active = false;
            }
            else if (p.type === 'electron') {
                // Apply Electric Field Acceleration
                // F = qE, E = V/d
                // a = F/m.  Let's simplify units.
                // Positive Voltage (Reverse Bias actually usually retards... wait.)
                // In standard convention: Positive Voltage on Anode ATTRACTS electrons.
                // Negative Voltage on Anode REPELS electrons (Retarding Potential).

                // If voltage > 0, ax is positive (accelerate right)
                // If voltage < 0, ax is negative (decelerate/turn back)
                const accel = (this.voltage * 0.05); // Tuning factor
                p.vx += accel;

                // Check collisions
                // 1. Hit Anode (Success)
                if (p.x >= this.ANODE_x) {
                    p.active = false;
                    electronsReachingAnode++;
                }
                // 2. Hit Cathode (Returned/Turned back)
                else if (p.x <= this.CATHODE_x) {
                    p.active = false;
                }
                // 3. Hit walls
                else if (p.y < 0 || p.y > this.height) {
                    p.active = false;
                }
            }
        });

        // Cleanup empty particles
        this.particles = this.particles.filter(p => p.active);

        // 3. Update Current
        // Smoothing factor for display
        this.photocurrent = this.photocurrent * 0.9 + electronsReachingAnode * 0.1;

        // 4. Update Stats Text
        const photonEnergy = 1240 / this.wavelength;
        const kemax = Math.max(0, photonEnergy - this.currentMetal.workFunction);

        this.updateData(
            `Photon Energy: ${photonEnergy.toFixed(2)} eV\n` +
            `Work Function: ${this.currentMetal.workFunction.toFixed(2)} eV\n` +
            `KE Max: ${kemax.toFixed(2)} eV\n` +
            `Current: ${(this.photocurrent * 10).toFixed(1)} µA`
        );
    }

    spawnPhoton() {
        const y = this.PLATE_y + Math.random() * this.PLATE_h;
        // Start from light source (top left ish)
        // Let's make them come from a lamp at top-center-left
        const startX = 100;
        const startY = 100;

        // Calculate velocity vector towards a random point on cathode
        const targetX = this.CATHODE_x;
        const targetY = y;
        const dx = targetX - startX;
        const dy = targetY - startY;
        const dist = Math.hypot(dx, dy);
        const speed = 8;

        this.particles.push({
            x: startX,
            y: startY,
            vx: (dx / dist) * speed,
            vy: (dy / dist) * speed,
            active: true,
            type: 'photon',
            color: this.getWavelengthColor(this.wavelength)
        });
    }

    tryEjectElectron(y: number) {
        // Physics Check
        const photonEnergy = 1240 / this.wavelength; // eV
        const workFunction = this.currentMetal.workFunction;

        if (photonEnergy > workFunction) {
            // Eject!
            const ke = photonEnergy - workFunction; // eV
            // Velocity magnitude proportional to sqrt(KE)
            const speed = Math.sqrt(ke) * 2; // Tuning factor

            // Random spread angle (-45 to 45 degrees)
            const angle = (Math.random() - 0.5) * Math.PI / 2;

            this.particles.push({
                x: this.CATHODE_x + 5, // Just off the plate
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                active: true,
                type: 'electron'
            });
        }
    }

    draw() {
        this.ctx.fillStyle = '#1e293b'; // Dark Lab Background
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw Vacuum Tube (Glass)
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.roundRect(150, 200, 500, 350, 50);
        this.ctx.stroke();

        // Draw Cathode (Metal Target) - Left
        this.ctx.fillStyle = this.currentMetal.color;
        this.ctx.fillRect(this.CATHODE_x - 10, this.PLATE_y, 20, this.PLATE_h);
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '12px Inter';
        this.ctx.fillText(this.currentMetal.name, this.CATHODE_x - 15, this.PLATE_y - 10);

        // Draw Anode (Collector) - Right
        this.ctx.fillStyle = '#9ca3af'; // Generic metal
        this.ctx.fillRect(this.ANODE_x - 10, this.PLATE_y, 20, this.PLATE_h);

        // Draw Circuit Wires
        this.ctx.strokeStyle = '#64748b'; // Wire color
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        // Wire from Cathode bottom
        this.ctx.moveTo(this.CATHODE_x, this.PLATE_y + this.PLATE_h);
        this.ctx.lineTo(this.CATHODE_x, 600); // Down
        this.ctx.lineTo(this.ANODE_x, 600);   // Across bottom
        this.ctx.lineTo(this.ANODE_x, this.PLATE_y + this.PLATE_h); // Up to Anode
        this.ctx.stroke();

        // Draw Battery in the wire
        this.drawBattery(400, 600, this.voltage);

        // Draw Ammeter in calculation overlay or wire
        this.drawAmmeter(550, 600, this.photocurrent);

        // Draw Lamp
        this.drawLamp(100, 100);

        // Draw Particles
        this.particles.forEach(p => {
            if (p.type === 'photon') {
                this.ctx.fillStyle = p.color || 'yellow';
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
                this.ctx.fill();
                // Trail
                this.ctx.strokeStyle = p.color || 'yellow';
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x - p.vx * 3, p.y - p.vy * 3);
                this.ctx.lineTo(p.x, p.y);
                this.ctx.stroke();
            } else {
                // Electron
                this.ctx.fillStyle = '#3b82f6'; // Blue electron
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }
        });
    }

    drawLamp(x: number, y: number) {
        // Lamp body
        this.ctx.fillStyle = '#475569';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x - 20, y - 40);
        this.ctx.lineTo(x + 20, y - 40);
        this.ctx.fill();

        // Glow
        if (this.intensity > 0) {
            const glowColor = this.getWavelengthColor(this.wavelength);
            const grad = this.ctx.createRadialGradient(x, y, 5, x, y, 40);
            grad.addColorStop(0, glowColor);
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            this.ctx.fillStyle = grad;
            this.ctx.beginPath();
            this.ctx.arc(x, y, 40, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawBattery(x: number, y: number, volts: number) {
        // Battery Symbol
        this.ctx.fillStyle = '#1e293b'; // Cover wire
        this.ctx.fillRect(x - 30, y - 15, 60, 30);

        this.ctx.fillStyle = '#cbd5e1'; // Terminals
        this.ctx.font = 'bold 16px monospace';
        this.ctx.textAlign = 'center';

        if (volts >= 0) {
            // Normal: + on Right
            // Long bar right, short left
            this.ctx.fillRect(x + 5, y - 10, 2, 20); // Pos
            this.ctx.fillRect(x - 5, y - 5, 2, 10);  // Neg
            this.ctx.fillText("+", x + 15, y + 5);
        } else {
            // Reversed: + on Left
            this.ctx.fillRect(x - 5, y - 10, 2, 20); // Pos
            this.ctx.fillRect(x + 5, y - 5, 2, 10);  // Neg
            this.ctx.fillText("+", x - 15, y + 5);
        }

        this.ctx.fillStyle = volts > 0 ? '#10b981' : (volts < 0 ? '#ef4444' : '#64748b');
        this.ctx.fillText(`${volts.toFixed(1)}V`, x, y + 25);
    }

    drawAmmeter(x: number, y: number, current: number) {
        // Circle meter
        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 25, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = '#000';
        this.ctx.font = 'bold 10px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${(current * 10).toFixed(1)}µA`, x, y + 4);
    }

    getWavelengthColor(nm: number): string {
        if (nm < 400) return '#a855f7'; // UV/Violet
        if (nm < 450) return '#3b82f6'; // Blue
        if (nm < 500) return '#06b6d4'; // Cyan
        if (nm < 570) return '#22c55e'; // Green
        if (nm < 600) return '#eab308'; // Yellow
        if (nm < 650) return '#f97316'; // Orange
        return '#ef4444'; // Red/IR
    }
}
