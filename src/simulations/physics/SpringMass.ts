import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

export class SpringMass extends Simulation {
    private massPos: Vector2;
    private anchor: Vector2;
    private velocity: Vector2;
    private k: number = 0.5;
    private mass: number = 20;
    private restLength: number = 200;
    private damping: number = 0.98;
    private isDragging: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.massPos = new Vector2(this.width / 2, 200);
        this.anchor = new Vector2(this.width / 2, 50);
        this.velocity = new Vector2(0, 0);

        this.addControl('slider', 'Spring Stiffness (k)', { min: 0.1, max: 2, step: 0.1, value: 0.5 }, v => this.k = v);
        this.addControl('slider', 'Mass', { min: 5, max: 50, step: 1, value: 20 }, v => this.mass = v);
        this.addControl('slider', 'Damping', { min: 0.9, max: 1.0, step: 0.001, value: 0.98 }, v => this.damping = v);

        this.canvas.addEventListener('mousedown', this.handleInput.bind(this));
        this.canvas.addEventListener('mouseup', () => this.isDragging = false);
        this.canvas.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                const rect = this.canvas.getBoundingClientRect();
                this.massPos.x = e.clientX - rect.left;
                this.massPos.y = e.clientY - rect.top;
                this.velocity = new Vector2(0, 0);
            }
        });
    }

    handleInput(e: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        const mouse = new Vector2(e.clientX - rect.left, e.clientY - rect.top);
        if (mouse.dist(this.massPos) < 25) {
            this.isDragging = true;
        }
    }

    update() {
        if (!this.isDragging) {
            const force = Vector2.sub(this.massPos, this.anchor);
            const x = force.mag() - this.restLength;
            force.normalize(); // This modifies 'force' if it were method, but our normalize returns new.
            // Wait, Vector2.normalize() returns new vector.
            // My implementation: return this.div(m) -> which returns new Vector2.
            // So `force.normalize()` does NOT modify `force`. 

            // Correction:
            const dir = Vector2.sub(this.massPos, this.anchor).normalize();

            // Spring force F = -kx
            const springForce = dir.mult(-1 * this.k * x);

            const gravityForce = new Vector2(0, this.mass * 0.5);
            const totalForce = springForce.add(gravityForce);
            const acc = totalForce.div(this.mass);

            this.velocity = this.velocity.add(acc);
            this.velocity = this.velocity.mult(this.damping);
            this.massPos = this.massPos.add(this.velocity);
        }

        const energy = (0.5 * this.k * Math.pow(this.massPos.dist(this.anchor) - this.restLength, 2)).toFixed(1);
        this.updateData(`Potential Energy: ${energy} J\nDisplacement: ${(this.massPos.y - this.anchor.y).toFixed(0)}`);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#555';
        this.ctx.lineWidth = 4;

        const numCoils = 15;
        const dist = this.massPos.dist(this.anchor);
        const dir = this.massPos.sub(this.anchor).normalize();
        const perp = new Vector2(-dir.y, dir.x);

        this.ctx.moveTo(this.anchor.x, this.anchor.y);
        for (let i = 0; i <= numCoils; i++) {
            const p = i / numCoils;
            const noise = (i % 2 === 0 ? 15 : -15);
            if (i === 0 || i === numCoils) {
                const pos = this.anchor.add(dir.mult(dist * p));
                this.ctx.lineTo(pos.x, pos.y);
            } else {
                const pos = this.anchor.add(dir.mult(dist * p)).add(perp.mult(noise));
                this.ctx.lineTo(pos.x, pos.y);
            }
        }
        this.ctx.stroke();

        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(this.anchor.x - 20, this.anchor.y - 10, 40, 10);

        this.drawSphere(this.massPos.x, this.massPos.y, 25, this.isDragging ? '#ff9800' : '#4caf50');
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`${this.mass}kg`, this.massPos.x - 10, this.massPos.y + 5);
    }

    reset() {
        this.massPos = new Vector2(this.width / 2, 250);
        this.velocity = new Vector2(0, 0);
    }
}
