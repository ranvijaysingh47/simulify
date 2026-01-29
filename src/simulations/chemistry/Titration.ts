import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Titration extends Simulation {
    private addedBase: number = 0;
    private ph: number = 1;
    private bg: string = 'rgba(255,255,255,0.1)';

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('slider', 'Add Base (mL)', { min: 0, max: 50, step: 0.1, value: 0 }, v => this.addedBase = v);
    }

    update() {
        // Curve fit
        const ph = 1 + 12 / (1 + Math.exp(-(this.addedBase - 25) * 2));
        this.ph = ph;

        let color = 'clear';
        if (ph > 8) color = 'pink';

        this.updateData(`Added Base: ${this.addedBase.toFixed(1)} mL\npH: ${this.ph.toFixed(2)}\nIndicator: Phenolphthalein (${color})`);
        this.bg = color === 'pink' ? 'rgba(255, 192, 203, 0.5)' : 'rgba(255,255,255,0.1)';
    }

    draw() {
        // Burette
        this.ctx.strokeStyle = '#333';
        this.ctx.strokeRect(390, 50, 20, 200);
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(391, 51 + (this.addedBase * 2), 18, 198 - (this.addedBase * 2));

        // Flask
        this.ctx.fillStyle = this.bg;
        this.ctx.beginPath();
        this.ctx.moveTo(380, 260);
        this.ctx.lineTo(350, 400);
        this.ctx.lineTo(450, 400);
        this.ctx.lineTo(420, 260);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Drop
        if (this.addedBase > 0 && Math.random() > 0.5) {
            this.drawSphere(400, 255, 3, 'white');
        }

        // Graph (mini)
        this.ctx.strokeRect(50, 100, 200, 200);
        this.ctx.strokeStyle = 'red';
        this.ctx.beginPath();
        for (let x = 0; x <= 50; x++) {
            const cx = 50 + x * 4;
            const cph = 1 + 12 / (1 + Math.exp(-(x - 25) * 2));
            const cy = 300 - (cph / 14) * 200;
            if (x === 0) this.ctx.moveTo(cx, cy); else this.ctx.lineTo(cx, cy);
        }
        this.ctx.stroke();

        // Current point
        const px = 50 + this.addedBase * 4;
        const py = 300 - (this.ph / 14) * 200;
        this.drawSphere(px, py, 4, 'blue');
    }
}
