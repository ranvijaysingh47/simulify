import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

interface Pendulum {
    length: number;
    angle: number;
    freq: number;
    color: string;
}

export class PendulumWave extends Simulation {
    private pendulums: Pendulum[] = [];
    private numPendulums: number = 12;
    private time: number = 0;
    private speed: number = 0.5;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.initPendulums();

        this.addControl('slider', 'Speed', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.speed = v);
        this.addControl('slider', 'Count', { min: 5, max: 20, step: 1, value: 12 }, v => {
            this.numPendulums = v;
            this.initPendulums();
        });
    }

    initPendulums() {
        this.pendulums = [];
        const k = 10000;
        for (let i = 0; i < this.numPendulums; i++) {
            const freq = 10 + i;
            const len = k / (freq * freq);
            this.pendulums.push({
                length: len * 8, // scale for visual
                angle: Math.PI / 4,
                freq: freq,
                color: `hsl(${i * 360 / this.numPendulums}, 70%, 50%)`
            });
        }
    }

    update() {
        this.time += 0.05 * this.speed;
        this.pendulums.forEach(p => {
            p.angle = (Math.PI / 4) * Math.cos(this.time * p.freq * 0.05);
        });
        this.updateData(`Time: ${this.time.toFixed(1)} s`);
    }

    draw() {
        const origin = new Vector2(this.width / 2, 50);

        this.ctx.lineWidth = 2;
        this.pendulums.forEach(p => {
            const x = origin.x + Math.sin(p.angle) * p.length;
            const y = origin.y + Math.cos(p.angle) * p.length;

            this.ctx.beginPath();
            this.ctx.strokeStyle = '#ccc';
            this.ctx.moveTo(origin.x, origin.y);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();

            this.drawSphere(x, y, 10, p.color);
        });
    }

    reset() {
        this.time = 0;
    }
}
