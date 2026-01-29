import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Chromatography extends Simulation {
    private progress: number = 0;
    private running: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('button', 'Start Elution', {}, () => this.running = true);
        this.addControl('button', 'Reset', {}, () => { this.running = false; this.progress = 0; });
    }

    update() {
        if (this.running && this.progress < 500) this.progress += 1;
        this.updateData(`Separation based on affinity to stationary vs mobile phase.`);
    }

    draw() {
        // Paper strip
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(350, 50, 100, 500);
        this.ctx.strokeStyle = '#ccc';
        this.ctx.strokeRect(350, 50, 100, 500);

        // Solvent front
        const solventY = 550 - this.progress;
        this.ctx.fillStyle = 'rgba(200,200,255,0.3)';
        this.ctx.fillRect(350, solventY, 100, 550 - solventY);

        // Spot Start
        const startY = 500;

        const yBlue = startY - this.progress * 0.3;
        const yRed = startY - this.progress * 0.6;
        const yYel = startY - this.progress * 0.9;

        this.drawSphere(400, yBlue, 8, 'blue');
        this.drawSphere(400, yRed, 8, 'red');
        this.drawSphere(400, yYel, 8, 'orange');

        // Beaker liquid
        this.ctx.fillStyle = 'lightblue';
        this.ctx.fillRect(250, 520, 300, 100);
    }
}
