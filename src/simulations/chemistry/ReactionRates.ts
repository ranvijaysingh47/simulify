import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    type: 'A' | 'B';
}

export class ReactionRates extends Simulation {
    private temp: number = 300;
    private particles: Particle[] = [];
    private products: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: Math.random() * 400 + 200, y: Math.random() * 300 + 100,
                vx: Math.random() - 0.5, vy: Math.random() - 0.5,
                type: 'A'
            });
        }

        this.addControl('slider', 'Temperature', { min: 100, max: 1000, step: 10, value: 300 }, v => this.temp = v);
        this.addControl('button', 'Reset', {}, () => { this.products = 0; this.particles.forEach(p => p.type = 'A'); });
    }

    update() {
        const speed = this.temp * 0.005;
        this.particles.forEach(p => {
            p.x += p.vx * speed;
            p.y += p.vy * speed;

            if (p.x < 200 || p.x > 600) p.vx *= -1;
            if (p.y < 100 || p.y > 400) p.vy *= -1;
        });

        // Collide
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                if (dist < 10) {
                    if (p1.type === 'A' && p2.type === 'A' && Math.random() < (this.temp / 2000)) {
                        p1.type = 'B'; p2.type = 'B';
                        this.products += 2;
                    }
                }
            }
        }

        this.updateData(`Temp: ${this.temp}K\nProducts Found: ${this.products}`);
    }

    draw() {
        this.ctx.strokeRect(200, 100, 400, 300);
        this.particles.forEach(p => {
            this.drawSphere(p.x, p.y, 5, p.type === 'A' ? 'red' : 'blue');
        });

        this.ctx.fillStyle = 'red'; this.ctx.fillText("Reactant (A)", 200, 430);
        this.ctx.fillStyle = 'blue'; this.ctx.fillText("Product (B)", 350, 430);
    }
}
