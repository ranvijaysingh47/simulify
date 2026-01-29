import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

interface Ball {
    pos: Vector2;
    vel: Vector2;
    path: Vector2[];
    time: number;
}

export class ProjectileMotion extends Simulation {
    private angle: number = 45;
    private speed: number = 15;
    private gravity: number = 9.8;
    private showVectors: boolean = true;

    private balls: Ball[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Angle', { min: 0, max: 90, step: 1, value: 45 }, (v) => this.angle = v);
        this.addControl('slider', 'Initial Speed', { min: 5, max: 30, step: 1, value: 15 }, (v) => this.speed = v);
        this.addControl('slider', 'Gravity', { min: 1, max: 20, step: 0.5, value: 9.8 }, (v) => this.gravity = v);
        this.addControl('checkbox', 'Show Vectors', { checked: true }, (v) => this.showVectors = v);
        this.addControl('button', 'Fire Cannon', {}, () => this.fire());
    }

    fire() {
        const rad = this.angle * Math.PI / 180;
        const vx = Math.cos(rad) * this.speed;
        const vy = -Math.sin(rad) * this.speed; // Canvas Y is down

        this.balls.push({
            pos: new Vector2(50, this.height - 50),
            vel: new Vector2(vx, vy),
            path: [],
            time: 0
        });
    }

    update() {
        const dt = 0.1; // Delta time step

        this.balls.forEach((ball) => {
            // Store path
            if (ball.time % 2 < 1) { // Optimize path points
                ball.path.push(ball.pos.copy());
            }
            ball.time++;

            // Physics
            ball.vel.y += (this.gravity * dt);
            ball.pos = ball.pos.add(ball.vel.mult(dt));

            // Ground collision
            if (ball.pos.y > this.height - 10) {
                ball.pos.y = this.height - 10;
                ball.vel.y *= -0.6; // Bounce with damping
                ball.vel.x *= 0.8; // Friction

                if (Math.abs(ball.vel.y) < 1) ball.vel.y = 0;
                if (Math.abs(ball.vel.x) < 0.1) ball.vel.x = 0;
            }
        });

        // Cleanup stopped balls
        if (this.balls.length > 5) this.balls.shift();

        // Data
        const lastBall = this.balls[this.balls.length - 1];
        if (lastBall) {
            const h = Math.max(0, (this.height - 50 - lastBall.pos.y) / 10).toFixed(1);
            const d = ((lastBall.pos.x - 50) / 10).toFixed(1);
            const v = lastBall.vel.mag().toFixed(1);
            this.updateData(`Height: ${h}m | Distance: ${d}m | Velocity: ${v}m/s`);
        } else {
            this.updateData('Ready to fire!');
        }
    }

    draw() {
        // Cannon
        this.ctx.fillStyle = '#444';
        const cannonBase = new Vector2(50, this.height - 50);

        this.ctx.save();
        this.ctx.translate(cannonBase.x, cannonBase.y);
        this.ctx.rotate(-this.angle * Math.PI / 180);
        this.ctx.fillRect(0, -10, 60, 20);
        this.ctx.restore();

        // Base
        this.ctx.beginPath();
        this.ctx.arc(50, this.height - 50, 20, 0, Math.PI * 2);
        this.ctx.fill();

        // Balls
        this.balls.forEach(ball => {
            // Path
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            if (ball.path.length > 0) {
                this.ctx.moveTo(ball.path[0].x, ball.path[0].y);
                for (let p of ball.path) this.ctx.lineTo(p.x, p.y);
            }
            this.ctx.stroke();

            // Ball
            this.drawSphere(ball.pos.x, ball.pos.y, 8, '#FF6C00');

            // Vectors
            if (this.showVectors && ball.vel.mag() > 1) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = 'green';
                this.ctx.moveTo(ball.pos.x, ball.pos.y);
                this.ctx.lineTo(ball.pos.x + ball.vel.x * 5, ball.pos.y + ball.vel.y * 5);
                this.ctx.stroke();
            }
        });

        // Ground
        this.ctx.fillStyle = '#8bc34a';
        this.ctx.fillRect(0, this.height - 10, this.width, 10);
    }

    reset() {
        this.balls = [];
    }
}
