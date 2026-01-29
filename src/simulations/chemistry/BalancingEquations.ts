import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class BalancingEquations extends Simulation {
    private n2: number = 1;
    private h2: number = 1;
    private nh3: number = 1;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'N2', { min: 0, max: 5, step: 1, value: 1 }, v => this.n2 = v);
        this.addControl('slider', 'H2', { min: 0, max: 5, step: 1, value: 1 }, v => this.h2 = v);
        this.addControl('slider', 'NH3', { min: 0, max: 5, step: 1, value: 1 }, v => this.nh3 = v);
    }

    update() {
        const nLeft = this.n2 * 2;
        const hLeft = this.h2 * 2;
        const nRight = this.nh3 * 1;
        const hRight = this.nh3 * 3;

        const isBalanced = (nLeft === nRight) && (hLeft === hRight) && (this.n2 > 0 && this.h2 > 0 && this.nh3 > 0);

        this.updateData(
            `N: ${nLeft} vs ${nRight} | H: ${hLeft} vs ${hRight}\n` +
            (isBalanced ? "BALANCED! 🎉" : "Not Balanced")
        );
    }

    draw() {
        // Visualize molecules
        this.drawMolecules(this.n2, 200, 200, 'N2');
        this.drawMolecules(this.h2, 200, 350, 'H2');

        // Arrow
        this.ctx.fillStyle = '#333';
        this.ctx.font = '40px Arial';
        this.ctx.fillText("→", 380, 300);

        this.drawMolecules(this.nh3, 500, 275, 'NH3');
    }

    drawMolecules(count: number, x: number, y: number, type: string) {
        for (let i = 0; i < count; i++) {
            const offsetX = (i % 3) * 50;
            const offsetY = Math.floor(i / 3) * 50;
            const cx = x + offsetX;
            const cy = y + offsetY;

            if (type === 'N2') { // 2 blue
                this.drawSphere(cx - 10, cy, 10, 'blue');
                this.drawSphere(cx + 10, cy, 10, 'blue');
            } else if (type === 'H2') { // 2 white/gray
                this.drawSphere(cx - 8, cy, 8, '#ccc');
                this.drawSphere(cx + 8, cy, 8, '#ccc');
            } else if (type === 'NH3') { // 1 blue, 3 white
                this.drawSphere(cx, cy, 12, 'blue');
                this.drawSphere(cx - 10, cy + 10, 8, '#ccc');
                this.drawSphere(cx + 10, cy + 10, 8, '#ccc');
                this.drawSphere(cx, cy - 12, 8, '#ccc');
            }
        }

        this.ctx.fillStyle = '#000';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`${count} ${type}`, x, y + 80);
    }

    reset() {
        this.n2 = 1; this.h2 = 1; this.nh3 = 1;
    }
}
