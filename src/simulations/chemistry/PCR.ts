import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class PCR extends Simulation {
    private strands = 1;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        addControl('button', 'Cycle (Heat -> Cool -> Warm)', {}, () => this.cycle());
        this.updateData(`DNA Copies: ${this.strands}`);
    }

    cycle() {
        this.strands *= 2;
        this.updateData(`Cycle Complete. DNA Doubled to ${this.strands}`);
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Visualize exponential growth
        const vizCount = Math.min(32, this.strands);
        const startX = 100;
        const startY = 100;

        for (let i = 0; i < vizCount; i++) {
            const row = Math.floor(i / 4);
            const col = i % 4;

            this.drawHelix(startX + col * 150, startY + row * 80);
        }

        if (this.strands > 32) {
            this.ctx.fillStyle = 'black';
            this.ctx.fillText(`+ ${this.strands - 32} more ...`, 400, 550);
        }
    }

    drawHelix(x: number, y: number) {
        this.ctx.strokeStyle = '#ef4444';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.bezierCurveTo(x + 20, y - 20, x + 80, y + 20, x + 100, y);
        this.ctx.stroke();

        this.ctx.strokeStyle = '#3b82f6';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + 10);
        this.ctx.bezierCurveTo(x + 20, y + 30, x + 80, y - 10, x + 100, y + 10);
        this.ctx.stroke();
    }
}
