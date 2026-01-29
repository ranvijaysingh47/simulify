import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2, Physics } from '../../core/Physics';

interface Ball {
    pos: Vector2;
    vel: Vector2;
    radius: number;
    color: string;
    mass: number;
}

export class BouncingBalls extends Simulation {
    private balls: Ball[] = [];
    private gravity: number = 0.5;
    private friction: number = 0.99;
    private bounciness: number = 0.8;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        for (let i = 0; i < 5; i++) this.addBall();

        this.addControl('slider', 'Gravity', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.gravity = v);
        this.addControl('slider', 'Bounciness', { min: 0.1, max: 1.2, step: 0.1, value: 0.8 }, v => this.bounciness = v);
        this.addControl('button', 'Add Ball', {}, () => this.addBall());
    }

    addBall() {
        this.balls.push({
            pos: new Vector2(Math.random() * this.width, Math.random() * (this.height / 2)),
            vel: new Vector2((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
            radius: 15 + Math.random() * 10,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
            mass: 1 // simplified
        });
    }

    update() {
        this.balls.forEach(b => {
            b.vel.y += this.gravity;
            b.vel = b.vel.mult(this.friction);
            b.pos = b.pos.add(b.vel);

            // Walls
            if (b.pos.x < b.radius) { b.pos.x = b.radius; b.vel.x *= -this.bounciness; }
            if (b.pos.x > this.width - b.radius) { b.pos.x = this.width - b.radius; b.vel.x *= -this.bounciness; }
            if (b.pos.y > this.height - b.radius) { b.pos.y = this.height - b.radius; b.vel.y *= -this.bounciness; }
            if (b.pos.y < b.radius) { b.pos.y = b.radius; b.vel.y *= -this.bounciness; }
        });

        // Simple Circle Collision
        for (let i = 0; i < this.balls.length; i++) {
            for (let j = i + 1; j < this.balls.length; j++) {
                const b1 = this.balls[i];
                const b2 = this.balls[j];
                const dist = b1.pos.dist(b2.pos);
                if (dist < b1.radius + b2.radius) {
                    Physics.resolveElasticCollision(b1, b2);
                    // Separate to prevent sticking
                    const overlap = (b1.radius + b2.radius - dist) / 2;
                    const dir = b2.pos.sub(b1.pos).normalize();
                    b1.pos = b1.pos.sub(dir.mult(overlap));
                    b2.pos = b2.pos.add(dir.mult(overlap));
                }
            }
        }

        const totalKE = this.balls.reduce((acc, b) => acc + 0.5 * b.mass * b.vel.magSq(), 0).toFixed(0);
        this.updateData(`Total Kinetic Energy: ${totalKE} J\nCounts: ${this.balls.length}`);
    }

    draw() {
        this.balls.forEach(b => {
            this.drawSphere(b.pos.x, b.pos.y, b.radius, b.color);
        });
    }

    reset() {
        this.balls = [];
        for (let i = 0; i < 5; i++) this.addBall();
    }
}
