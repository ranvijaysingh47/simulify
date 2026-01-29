import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Redox extends Simulation {
    private progress: number = 0;
    private running: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        // Zn(s) + Cu2+(aq) -> Zn2+(aq) + Cu(s)
        this.addControl('button', 'Start', {}, () => this.running = true);
        this.addControl('button', 'Reset', {}, () => { this.progress = 0; this.running = false; });
    }

    update() {
        if (this.running && this.progress < 100) this.progress += 0.5;
        this.updateData(`Reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\nProgress: ${this.progress.toFixed(0)}%\nElectrons transferred from Zn to Cu²⁺`);
    }

    draw() {
        // Beaker
        this.ctx.fillStyle = `rgb(200, 200, ${255 - this.progress * 2})`; // Blue fades to clear
        this.ctx.fillRect(300, 200, 200, 250);
        this.ctx.strokeRect(300, 200, 200, 250);

        // Zinc Stick
        this.ctx.fillStyle = 'gray';
        this.ctx.fillRect(350, 150, 30, 200);

        // Overlay decay
        if (this.progress > 0) {
            this.ctx.fillStyle = '#333';
            for (let i = 0; i < this.progress; i++) {
                this.ctx.fillRect(350 + Math.random() * 30, 150 + Math.random() * 200, 2, 2);
            }
        }

        // Copper depositing
        if (this.progress > 0) {
            this.ctx.fillStyle = '#B87333'; // Copper
            this.ctx.fillRect(345, 150, 5, 200 * (this.progress / 100)); // Coating
            this.ctx.fillRect(380, 150, 5, 200 * (this.progress / 100));
            // Sediment
            this.ctx.fillRect(320, 440, 160, this.progress / 5);
        }
    }
}
