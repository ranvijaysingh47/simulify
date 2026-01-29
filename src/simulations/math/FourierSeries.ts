import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class FourierSeries extends Simulation {
    private time: number = 0;
    private wave: number[] = [];
    private n: number = 5; // number of circles
    private waveType: 'square' | 'saw' = 'square';

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Iterations (N)', { min: 1, max: 20, step: 1, value: 5 }, v => { this.n = v; this.wave = []; });
        this.addControl('button', 'Square Wave', {}, () => { this.waveType = 'square'; this.wave = []; });
        this.addControl('button', 'Sawtooth Wave', {}, () => { this.waveType = 'saw'; this.wave = []; });
    }

    update() {
        this.time += 0.05;
        this.updateData(`Approximating: ${this.waveType.toUpperCase()} Wave\nCircles: ${this.n}`);
    }

    draw() {
        let x = 200;
        let y = this.height / 2;

        for (let i = 0; i < this.n; i++) {
            let prevx = x;
            let prevy = y;

            let n, radius;

            if (this.waveType === 'square') {
                n = i * 2 + 1; // 1, 3, 5...
                radius = 75 * (4 / (n * Math.PI));
            } else { // saw
                n = i + 1; // 1, 2, 3...
                radius = 75 * (2 / (n * Math.PI)) * (Math.pow(-1, n));
            }

            x += radius * Math.cos(n * this.time);
            y += radius * Math.sin(n * this.time);

            // Circle
            this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            this.ctx.beginPath();
            this.ctx.arc(prevx, prevy, Math.abs(radius), 0, Math.PI * 2);
            this.ctx.stroke();

            // Radius line
            this.ctx.strokeStyle = '#333';
            this.ctx.beginPath();
            this.ctx.moveTo(prevx, prevy);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }

        // Horizontal connection
        this.wave.unshift(y);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(450, y);
        this.ctx.strokeStyle = '#999';
        this.ctx.setLineDash([5, 5]);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Wave
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#E91E63';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < this.wave.length; i++) {
            this.ctx.lineTo(i + 450, this.wave[i]);
        }
        this.ctx.stroke();

        if (this.wave.length > 500) {
            this.wave.pop();
        }
    }

    reset() {
        this.wave = [];
        this.time = 0;
    }
}
