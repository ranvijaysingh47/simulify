import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

export class WaveInterference extends Simulation {
    private time: number = 0;
    private frequency: number = 0.2;
    private sources: Vector2[] = [];
    private mode: 'single' | 'double' = 'single';

    private res: number = 8;
    private cols: number = 0;
    private rows: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.sources = [new Vector2(this.width / 2, this.height / 2)];
        this.cols = Math.ceil(this.width / this.res);
        this.rows = Math.ceil(this.height / this.res);

        this.addControl('slider', 'Frequency', { min: 0.1, max: 0.5, step: 0.05, value: 0.2 }, v => this.frequency = v);
        this.addControl('button', 'Single Source', {}, () => {
            this.mode = 'single';
            this.sources = [new Vector2(this.width / 2, this.height / 2)];
        });
        this.addControl('button', 'Two Sources', {}, () => {
            this.mode = 'double';
            this.sources = [
                new Vector2(this.width / 2 - 100, this.height / 2),
                new Vector2(this.width / 2 + 100, this.height / 2)
            ];
        });
    }

    update() {
        this.time++;
        this.updateData(`Mode: ${this.mode}\nFrequency: ${this.frequency}`);
    }

    draw() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const px = x * this.res;
                const py = y * this.res;

                let val = 0;
                for (let s of this.sources) {
                    const d = Math.sqrt((px - s.x) ** 2 + (py - s.y) ** 2);
                    val += Math.sin(d * 0.05 - this.time * this.frequency);
                }

                const intensity = (val / this.sources.length + 1) / 2;
                const c = Math.floor(intensity * 255);
                this.ctx.fillStyle = `rgb(0, ${Math.floor(c * 0.8)}, ${c})`;
                this.ctx.fillRect(px, py, this.res, this.res);
            }
        }

        this.ctx.fillStyle = 'yellow';
        this.sources.forEach(s => {
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, 5, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    reset() {
        this.time = 0;
    }
}
