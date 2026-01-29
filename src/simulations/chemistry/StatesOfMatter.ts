import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

interface Particle {
    pos: Vector2;
    vel: Vector2;
    color: string;
}

export class StatesOfMatter extends Simulation {
    private temp: number = 50;
    private particles: Particle[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        for (let i = 0; i < 40; i++) {
            this.particles.push({
                pos: new Vector2(Math.random() * 400 + 200, Math.random() * 300 + 200),
                vel: new Vector2(0, 0),
                color: 'purple'
            });
        }

        this.addControl('slider', 'Temperature (Heat)', { min: 10, max: 300, step: 1, value: 50 }, v => this.temp = v);
        this.addControl('button', 'Solid (Neon)', {}, () => this.temp = 20);
        this.addControl('button', 'Liquid', {}, () => this.temp = 100);
        this.addControl('button', 'Gas', {}, () => this.temp = 250);
    }

    update() {
        let interactionRange = 0;
        let attraction = 0;

        if (this.temp < 50) { // Solid
            attraction = 0.5;
            interactionRange = 25;
        } else if (this.temp < 150) { // Liquid
            attraction = 0.05;
            interactionRange = 30;
        } else { // Gas
            attraction = 0;
        }

        const speed = this.temp * 0.02;

        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];

            p1.vel.x += (Math.random() - 0.5) * speed;
            p1.vel.y += (Math.random() - 0.5) * speed;
            p1.vel = p1.vel.mult(0.9);

            if (this.temp < 150) p1.vel.y += 0.2; // Gravity

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dist = p1.pos.dist(p2.pos);
                if (dist < 20) {
                    const force = p1.pos.sub(p2.pos).normalize().mult(1);
                    p1.vel = p1.vel.add(force);
                    p2.vel = p2.vel.sub(force);
                } else if (dist < interactionRange) {
                    const force = p2.pos.sub(p1.pos).normalize().mult(attraction);
                    p1.vel = p1.vel.add(force);
                    p2.vel = p2.vel.sub(force);
                }
            }

            p1.pos = p1.pos.add(p1.vel);
            if (p1.pos.x < 200) { p1.pos.x = 200; p1.vel.x *= -1; }
            if (p1.pos.x > 600) { p1.pos.x = 600; p1.vel.x *= -1; }
            if (p1.pos.y > 500) { p1.pos.y = 500; p1.vel.y *= -1; }
            if (p1.pos.y < 100) { p1.pos.y = 100; p1.vel.y *= -1; }
        }

        let phase = "Solid";
        if (this.temp > 80) phase = "Liquid";
        if (this.temp > 200) phase = "Gas";

        this.updateData(`Temperature: ${this.temp} K\nPhase: ${phase}`);
    }

    draw() {
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(200, 100, 400, 400);

        this.particles.forEach(p => {
            this.drawSphere(p.pos.x, p.pos.y, 8, p.color);
        });

        this.ctx.fillStyle = '#eee';
        this.ctx.fillRect(50, 100, 30, 400);
        const h = Math.min(400, this.temp);
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(55, 100 + (400 - h), 20, h);
    }
}
