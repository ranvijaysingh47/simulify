import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class FractalTree extends Simulation {
    private angle: number = 25;
    private depth: number = 10;
    private branchRatio: number = 0.67;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Angle', { min: 0, max: 90, step: 1, value: 25 }, v => this.angle = v);
        this.addControl('slider', 'Depth', { min: 1, max: 12, step: 1, value: 10 }, v => this.depth = v);
        this.addControl('slider', 'Branch Ratio', { min: 0.5, max: 0.8, step: 0.01, value: 0.67 }, v => this.branchRatio = v);
    }

    update() {
        this.updateData(`Angle: ${this.angle}°\nBranch Ratio: ${this.branchRatio}\nDepth: ${this.depth}`);
    }

    draw() {
        this.ctx.strokeStyle = '#fff';
        this.ctx.translate(this.width / 2, this.height);
        this.branch(150, this.depth);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset Identity
    }

    branch(len: number, depth: number) {
        this.ctx.lineWidth = depth;
        // Color transition logic
        this.ctx.strokeStyle = depth > 4 ? '#5D4037' : '#4CAF50';

        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -len);
        this.ctx.stroke();

        this.ctx.translate(0, -len);

        if (depth > 0) {
            this.ctx.save();
            this.ctx.rotate(this.angle * Math.PI / 180);
            this.branch(len * this.branchRatio, depth - 1);
            this.ctx.restore();

            this.ctx.save();
            this.ctx.rotate(-this.angle * Math.PI / 180);
            this.branch(len * this.branchRatio, depth - 1);
            this.ctx.restore();
        }
    }

    reset() {
        this.angle = 25;
        this.depth = 10;
    }
}
