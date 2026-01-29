import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

interface Particle {
    pos: Vector2;
    vel: Vector2;
    radius: number;
}

export class GasLaws extends Simulation {
    private particles: Particle[] = [];
    private temperature: number = 300; // Kelvin
    private volume: number = 500; // Width of box
    private pressure: number = 0;

    // Sim constraints
    private boxHeight: number = 400;
    private particleCount: number = 50;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.initParticles();

        this.addControl('slider', 'Temperature (K)', { min: 100, max: 1000, step: 10, value: 300 }, v => {
            this.temperature = v;
            this.updateSpeed();
        });
        this.addControl('slider', 'Volume', { min: 200, max: 700, step: 10, value: 500 }, v => this.volume = v);
        this.addControl('slider', 'Particles', { min: 10, max: 200, step: 10, value: 50 }, v => {
            this.particleCount = v;
            this.initParticles();
        });
    }

    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                pos: new Vector2(Math.random() * this.volume, Math.random() * this.boxHeight),
                vel: new Vector2(Math.random() - 0.5, Math.random() - 0.5).normalize(),
                radius: 3
            });
        }
        this.updateSpeed();
    }

    updateSpeed() {
        // v proportional to sqrt(T)
        // Adjust multiplier for visual comfort
        const speed = Math.sqrt(this.temperature) * 0.2;
        this.particles.forEach(p => {
            if (p.vel.mag() === 0) p.vel = new Vector2(Math.random() - 0.5, Math.random() - 0.5);
            p.vel = p.vel.normalize().mult(speed);
        });
    }

    update() {
        let wallCollisions = 0;
        const dt = 1;

        this.particles.forEach(p => {
            p.pos = p.pos.add(p.vel.mult(dt));

            if (p.pos.x < p.radius) { p.pos.x = p.radius; p.vel.x *= -1; wallCollisions++; }
            if (p.pos.x > this.volume - p.radius) { p.pos.x = this.volume - p.radius; p.vel.x *= -1; wallCollisions++; }
            if (p.pos.y < p.radius) { p.pos.y = p.radius; p.vel.y *= -1; wallCollisions++; }
            if (p.pos.y > this.boxHeight - p.radius) { p.pos.y = this.boxHeight - p.radius; p.vel.y *= -1; wallCollisions++; }
        });

        // Pressure ~ collisions per frame / volume (simplified)
        const instantaneousPressure = (wallCollisions * this.temperature) / this.volume;
        this.pressure = this.pressure * 0.9 + instantaneousPressure * 0.1;

        this.updateData(`Pressure: ${this.pressure.toFixed(2)} atm\nPV = ${(this.pressure * this.volume).toFixed(0)} | nRT = ${(this.particleCount * this.temperature * 0.05).toFixed(0)}`);
    }

    draw() {
        // Box
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(0, 0, this.volume, this.boxHeight);
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(0, 0, this.volume, this.boxHeight);

        // Particles
        this.particles.forEach(p => {
            this.drawSphere(p.pos.x, p.pos.y, p.radius, '#E91E63');
        });

        // Volume Handle
        this.ctx.fillStyle = '#666';
        this.ctx.fillRect(this.volume, 0, 10, this.boxHeight);

        // Sim is 800x600, center if small
        // Handled by canvas transform usually, but here we draw at 0,0
    }

    reset() {
        this.volume = 500;
        this.initParticles();
    }
}
