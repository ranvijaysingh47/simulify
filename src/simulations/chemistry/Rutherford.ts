import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    deflected: boolean;
}

export class Rutherford extends Simulation {
    private particles: Particle[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.setup();
        this.addControl('button', 'Reset', {}, () => this.setup());
    }

    setup() {
        this.particles = [];
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * -1000,
                y: 200 + Math.random() * 200,
                vx: 10, vy: 0,
                deflected: false
            });
        }
    }

    update() {
        const nx = 400, ny = 300;

        this.particles.forEach(p => {
            const dx = p.x - nx;
            const dy = p.y - ny;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);

            if (dist < 100 && dist > 5) {
                const f = 1000 / distSq;
                const fx = (dx / dist) * f;
                const fy = (dy / dist) * f;
                p.vx += fx;
                p.vy += fy;
            }

            p.x += p.vx;
            p.y += p.vy;

            if (p.x > 800 || p.y < 0 || p.y > 600) {
                p.x = -50;
                p.y = 200 + Math.random() * 200;
                p.vx = 10; p.vy = 0;
            }
        });

        this.updateData(`Gold Nucleus (+) repels Alpha Particles (+)\nMost pass through, some deflect.`);
    }

    draw() {
        this.drawSphere(400, 300, 10, 'gold');
        this.ctx.fillStyle = 'black'; this.ctx.fillText("+", 396, 304);

        this.particles.forEach(p => {
            if (p.x > 0 && p.x < 800) {
                this.drawSphere(p.x, p.y, 3, 'red');
            }
        });
    }
}
