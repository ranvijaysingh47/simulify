import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class VaporPressure extends Simulation {
    private temp = 300; // Kelvin
    private particles: { x: number, y: number, vx: number, vy: number, state: 'liquid' | 'gas' }[] = [];
    private pressure = 0;
    private liquidLevel = 450;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('slider', 'Temperature (K)', { min: 200, max: 400, step: 1, value: 300 }, (v) => this.temp = v);

        // Init particles
        for (let i = 0; i < 200; i++) {
            this.particles.push({
                x: Math.random() * (this.width - 100) + 50,
                y: Math.random() * 100 + this.liquidLevel,
                vx: (Math.random() - 0.5),
                vy: (Math.random() - 0.5),
                state: 'liquid'
            });
        }
    }

    update() {
        const speedFactor = this.temp / 300;
        const escapeProb = (this.temp - 250) * 0.0001; // Prob to turn to gas
        const condenseProb = 0.01; // Prob to turn back to liquid when hitting surface

        let pressureHits = 0;

        this.particles.forEach(p => {
            // Move
            p.x += p.vx * speedFactor;
            p.y += p.vy * speedFactor;

            // Boundaries
            if (p.x < 50 || p.x > this.width - 50) p.vx *= -1;

            // Lid (Top)
            if (p.y < 100) {
                p.y = 100;
                p.vy *= -1;
                if (p.state === 'gas') pressureHits++;
            }
            // Floor
            if (p.y > this.height - 50) {
                p.y = this.height - 50;
                p.vy *= -1;
            }

            // State changes
            if (p.state === 'liquid') {
                // Keep in liquid area mostly
                if (p.y < this.liquidLevel) {
                    // Trying to escape surface
                    if (Math.random() < escapeProb) {
                        p.state = 'gas'; // Free!
                    } else {
                        p.y = this.liquidLevel;
                        p.vy *= -1; // Bounce back down
                    }
                }
                // Damping in liquid
                p.vx *= 0.95;
                p.vy *= 0.95;
                p.vy += 0.1; // Gravity
            } else {
                // Gas state
                p.vy += 0.02; // Slight gravity

                // Hitting liquid surface from above
                if (p.y > this.liquidLevel) {
                    if (Math.random() < condenseProb) {
                        p.state = 'liquid';
                    } else {
                        p.y = this.liquidLevel;
                        p.vy *= -1; // Bounce off surface
                    }
                }
            }

            // Random thermal motion kicks
            p.vx += (Math.random() - 0.5) * 0.2 * speedFactor;
            p.vy += (Math.random() - 0.5) * 0.2 * speedFactor;
        });

        // Smoothing pressure reading
        this.pressure = this.pressure * 0.95 + pressureHits * 0.05 * 10; // Scale up for display
        this.updateData(`Temperature: ${this.temp} K\nPressure: ${this.pressure.toFixed(1)} atm\nGas Particles: ${this.particles.filter(p => p.state === 'gas').length}`);
    }

    draw() {
        this.ctx.fillStyle = '#f1f5f9';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Container
        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(50, 100, this.width - 100, this.height - 150);

        // Liquid Line
        this.ctx.fillStyle = 'rgba(59, 130, 246, 0.2)'; // Light blue water
        this.ctx.fillRect(50, this.liquidLevel, this.width - 100, (this.height - 50) - this.liquidLevel);

        // Particles
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.state === 'gas' ? 3 : 4, 0, Math.PI * 2);
            this.ctx.fillStyle = p.state === 'gas' ? '#ef4444' : '#3b82f6'; // Red gas, Blue liquid
            this.ctx.fill();
        });

        // Pressure Gauge
        this.drawGauge(this.width - 80, 80, this.pressure);

        // Heater
        this.ctx.fillStyle = this.getHeaterColor(this.temp);
        this.ctx.fillRect(45, this.height - 45, this.width - 90, 20);
        this.ctx.fillStyle = '#0f172a';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("HEATER", this.width / 2, this.height - 30);
    }

    getHeaterColor(k: number): string {
        // Map 200-400 to Blue-Red
        const t = (k - 200) / 200;
        const r = Math.floor(t * 255);
        const b = Math.floor((1 - t) * 255);
        return `rgb(${r}, 0, ${b})`;
    }

    drawGauge(x: number, y: number, val: number) {
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 40, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Needle
        const angle = Math.PI * 0.75 + (Math.min(val, 100) / 100) * (Math.PI * 1.5);
        const dx = Math.cos(angle) * 30;
        const dy = Math.sin(angle) * 30;

        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + dx, y + dy);
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.fillStyle = 'black';
        this.ctx.font = '10px Inter';
        this.ctx.fillText('PRESSURE', x, y + 15);
    }
}
