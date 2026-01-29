import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class MassSpectrometry extends Simulation {
    private magneticField = 5;
    private particles: { x: number, y: number, vx: number, vy: number, mass: number, active: boolean }[] = [];
    private detectorHits: number[] = new Array(100).fill(0);

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('slider', 'Magnetic Field', { min: 1, max: 10, value: 5, step: 0.1 }, (v) => this.magneticField = v);
        addControl('button', 'Fire Ion Beam', {}, () => this.fireParticles());
        addControl('button', 'Clear Detector', {}, () => this.detectorHits.fill(0));
    }

    fireParticles() {
        // Isotope mix: mostly mass 20, some 22
        for (let i = 0; i < 10; i++) {
            this.particles.push({
                x: 50,
                y: 300,
                vx: 5,
                vy: 0,
                mass: Math.random() > 0.8 ? 22 : 20,
                active: true
            });
        }
    }

    update() {
        this.particles.forEach(p => {
            if (!p.active) return;

            // Lorentz force F = qvB (simplified)
            // a = F/m = (v*B)/m
            // acceleration perpendicular to velocity
            // Simpler: assume circular motion radius r = (mv)/(qB)
            // Just deflect vy based on B and m

            const force = (p.vx * this.magneticField) / p.mass;
            p.vy += force * 0.5; // Deflect down/up

            p.x += p.vx;
            p.y += p.vy;

            // Detector collision
            if (p.x > 700) {
                p.active = false;
                const detectorIndex = Math.floor(Math.max(0, Math.min(99, (p.y / 600) * 100)));
                this.detectorHits[detectorIndex]++;
            }
        });

        // Clean up
        this.particles = this.particles.filter(p => p.x < 800 && p.y > 0 && p.y < 600);

        this.updateData(`Magnetic Field: ${this.magneticField} Tesla\nActive Ions: ${this.particles.length}`);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw Magnet Region
        this.ctx.fillStyle = 'rgba(203, 213, 225, 0.3)';
        this.ctx.fillRect(150, 100, 400, 400);
        this.ctx.strokeStyle = '#94a3b8';
        this.ctx.strokeRect(150, 100, 400, 400);
        this.ctx.fillStyle = '#64748b';
        this.ctx.fillText("Magnetic Field Region", 300, 130);

        // Draw Source
        this.ctx.fillStyle = '#334155';
        this.ctx.fillRect(0, 280, 50, 40);

        // Draw Particles
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.mass / 5, 0, Math.PI * 2);
            this.ctx.fillStyle = p.mass === 20 ? '#3b82f6' : '#ef4444';
            this.ctx.fill();
        });

        // Detector
        this.ctx.fillStyle = '#1e293b';
        this.ctx.fillRect(700, 50, 20, 500);

        // Graph of hits
        this.ctx.fillStyle = '#10b981';
        this.detectorHits.forEach((hits, i) => {
            if (hits > 0) {
                const y = (i / 100) * 600;
                this.ctx.fillRect(725, y, hits * 2, 5);
            }
        });
    }
}
