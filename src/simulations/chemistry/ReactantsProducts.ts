import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class ReactantsProducts extends Simulation {
    private h2: number = 2;
    private o2: number = 1;
    private products: { water: number, h2: number, o2: number } = { water: 0, h2: 0, o2: 0 };

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'H2 Amount', { min: 0, max: 10, step: 1, value: 2 }, v => this.h2 = v);
        this.addControl('slider', 'O2 Amount', { min: 0, max: 10, step: 1, value: 1 }, v => this.o2 = v);
    }

    update() {
        // Reaction: 2 H2 + 1 O2 -> 2 H2O
        const possibleReactions = Math.min(Math.floor(this.h2 / 2), Math.floor(this.o2 / 1));
        const waterProduced = possibleReactions * 2;

        const h2Left = this.h2 - (possibleReactions * 2);
        const o2Left = this.o2 - (possibleReactions * 1);

        this.products = { water: waterProduced, h2: h2Left, o2: o2Left };

        this.updateData(`Reaction: 2 H2 + O2 → 2 H2O\n\nMade: ${waterProduced} Water\nLeftover: ${h2Left} H2, ${o2Left} O2`);
    }

    draw() {
        this.ctx.fillStyle = '#333';
        this.ctx.font = '20px Arial';

        // Before
        this.ctx.fillText("Reactants (Start)", 100, 100);
        this.drawRow(this.h2, 100, 150, 'H2');
        this.drawRow(this.o2, 100, 250, 'O2');

        // Arrow
        this.ctx.font = '40px Arial';
        this.ctx.fillText("→", 380, 200);

        // After
        this.ctx.font = '20px Arial';
        this.ctx.fillText("Products & Leftovers", 500, 100);
        this.drawRow(this.products.water, 500, 150, 'H2O');

        this.ctx.fillText("Leftovers:", 500, 250);
        this.drawRow(this.products.h2, 500, 300, 'H2');
        this.drawRow(this.products.o2, 650, 300, 'O2');
    }

    drawRow(count: number, x: number, y: number, type: string) {
        for (let i = 0; i < count; i++) {
            const cx = x + (i % 5) * 40;
            const cy = y + Math.floor(i / 5) * 40;

            if (type === 'H2') {
                this.drawSphere(cx - 5, cy, 5, '#aaa');
                this.drawSphere(cx + 5, cy, 5, '#aaa');
            } else if (type === 'O2') {
                this.drawSphere(cx - 6, cy, 6, 'red');
                this.drawSphere(cx + 6, cy, 6, 'red');
            } else if (type === 'H2O') {
                this.drawSphere(cx, cy, 6, 'red');
                this.drawSphere(cx - 6, cy + 5, 4, '#aaa');
                this.drawSphere(cx + 6, cy + 5, 4, '#aaa');
            }
        }
    }

    reset() {
        this.h2 = 2;
        this.o2 = 1;
    }
}
