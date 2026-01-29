import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class IntermolecularForces extends Simulation {
    private temp = 100;
    private forceType: 'dispersion' | 'dipole' | 'hydrogen' = 'dispersion';
    private particles: { x: number, y: number, vx: number, vy: number }[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: Math.random() * 700 + 50,
                y: Math.random() * 500 + 50,
                vx: (Math.random() - 0.5),
                vy: (Math.random() - 0.5)
            });
        }

        addControl('slider', 'Temperature', { min: 10, max: 500, value: 100 }, (v) => this.temp = v);
        addControl('button', 'London Dispersion (Weak)', {}, () => this.setForce('dispersion'));
        addControl('button', 'Dipole-Dipole (Medium)', {}, () => this.setForce('dipole'));
        addControl('button', 'Hydrogen Bond (Strong)', {}, () => this.setForce('hydrogen'));
    }

    setForce(t: any) {
        this.forceType = t;
        this.updateData(`Force: ${t.toUpperCase()}. Strength determines state at current Temp.`);
    }

    update() {
        const speed = this.temp * 0.01;
        // Attraction strength
        let attraction = 0.01;
        if (this.forceType === 'dipole') attraction = 0.05;
        if (this.forceType === 'hydrogen') attraction = 0.15;

        this.particles.forEach((p, i) => {
            // Move
            p.x += p.vx * speed;
            p.y += p.vy * speed;

            // Bounds
            if (p.x < 20 || p.x > this.width - 20) p.vx *= -1;
            if (p.y < 20 || p.y > this.height - 20) p.vy *= -1;

            // Interact with neighbors (clustering)
            this.particles.forEach((other, j) => {
                if (i === j) return;
                const dx = other.x - p.x;
                const dy = other.y - p.y;
                const d = Math.max(10, Math.hypot(dx, dy));

                if (d < 100) {
                    // Attract towards neighbor if slow enough (bonding)
                    // If Temp is high, kinetic energy overcomes attraction
                    // Simplified flocking-like behavior
                    p.vx += (dx / d) * attraction;
                    p.vy += (dy / d) * attraction;
                }

                // Repel if too close
                if (d < 20) {
                    p.vx -= (dx / d) * 0.5;
                    p.vy -= (dy / d) * 0.5;
                }
            });

            // Damping (friction)
            p.vx *= 0.98;
            p.vy *= 0.98;
        });
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);

            if (this.forceType === 'dispersion') this.ctx.fillStyle = '#94a3b8'; // Grey (He)
            else if (this.forceType === 'dipole') this.ctx.fillStyle = '#f59e0b'; // Amber (HCl)
            else this.ctx.fillStyle = '#3b82f6'; // Blue (H2O)

            this.ctx.fill();
        });

        // Connections (Transient bonds)
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = this.forceType === 'hydrogen' ? '#ef4444' : '#cbd5e1';

        this.particles.forEach((p, i) => {
            this.particles.forEach((other, j) => {
                if (i >= j) return;
                const d = Math.hypot(p.x - other.x, p.y - other.y);
                if (d < 60) {
                    const alpha = 1 - (d / 60);
                    this.ctx.globalAlpha = alpha;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            });
        });
        this.ctx.globalAlpha = 1.0;
    }
}
