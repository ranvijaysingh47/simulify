import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class RadioactiveDating extends Simulation {
    private c14 = 100;
    private age = 0;
    private isBuried = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('button', 'Bury Tree (Stop Intake)', {}, () => this.isBuried = true);
        addControl('slider', 'Years Passed', { min: 0, max: 20000, value: 0 }, (v) => {
            if (this.isBuried) {
                this.age = v;
                // Half life of C14 is 5730 years
                this.c14 = 100 * Math.pow(0.5, this.age / 5730);
            }
        });
        addControl('button', 'Reset', {}, () => { this.isBuried = false; this.age = 0; this.c14 = 100; });
    }

    update() {
        this.updateData(this.isBuried
            ? `Age: ${this.age} years\nC-14 Remaining: ${this.c14.toFixed(1)}%`
            : "Organism Alive: C-14 Constant (100%)");
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Ground
        this.ctx.fillStyle = '#78350f';
        this.ctx.fillRect(0, 400, this.width, 200);

        // Tree / Fossil
        if (!this.isBuried) {
            // Alive Tree
            this.ctx.fillStyle = '#22c55e';
            this.ctx.beginPath(); this.ctx.moveTo(400, 200); this.ctx.lineTo(350, 400); this.ctx.lineTo(450, 400); this.ctx.fill();
            this.ctx.fillStyle = '#5c4033';
            this.ctx.fillRect(390, 400, 20, 50);
        } else {
            // Buried Log
            this.ctx.fillStyle = '#5c4033';
            this.ctx.save();
            this.ctx.translate(400, 500);
            this.ctx.rotate(Math.PI / 4);
            this.ctx.fillRect(-10, -50, 20, 100);
            this.ctx.restore();
        }

        // C-14 Meter
        this.ctx.fillStyle = '#334155';
        this.ctx.fillRect(600, 200, 50, 200);
        this.ctx.fillStyle = '#ef4444'; // C14
        const h = this.c14 * 2;
        this.ctx.fillRect(600, 400 - h, 50, h);

        this.ctx.fillStyle = '#0f172a';
        this.ctx.fillText("C-14 Level", 600, 420);
    }
}
