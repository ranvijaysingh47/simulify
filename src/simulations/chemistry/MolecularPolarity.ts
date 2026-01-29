import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class MolecularPolarity extends Simulation {
    private electronegativityA = 2.1;
    private electronegativityB = 2.1;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('slider', 'Electronegativity A', { min: 0.7, max: 4.0, step: 0.1, value: 2.1 }, (v) => this.electronegativityA = v);
        addControl('slider', 'Electronegativity B', { min: 0.7, max: 4.0, step: 0.1, value: 2.1 }, (v) => this.electronegativityB = v);
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        const diff = this.electronegativityB - this.electronegativityA;
        const dipole = Math.abs(diff);

        // Draw Bond
        this.ctx.strokeStyle = '#94a3b8';
        this.ctx.lineWidth = 10;
        this.ctx.beginPath();
        this.ctx.moveTo(300, 300);
        this.ctx.lineTo(500, 300);
        this.ctx.stroke();

        // Atom A
        // Size correlates slightly? No, usually EN correlates explicitly with inverse size roughly but simplistic here

        // Actually, let's visualize partial charge with color

        const chargeA = -diff * 0.5; // If B is higher (diff > 0), B is negative, A is positive
        const colorA = this.getChargeColor(chargeA);
        const colorB = this.getChargeColor(-chargeA);

        this.drawAtom(300, 300, 60, "A", this.electronegativityA.toFixed(1), colorA);
        this.drawAtom(500, 300, 60, "B", this.electronegativityB.toFixed(1), colorB);

        // Dipole Arrow
        if (dipole > 0.1) {
            this.drawDipoleArrow(400, 200, dipole, diff > 0);
        }

        let character = "Nonpolar Covalent";
        if (dipole > 0.4) character = "Polar Covalent";
        if (dipole > 1.7) character = "Ionic";

        this.ctx.fillStyle = '#334155';
        this.ctx.font = '20px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Difference: ${dipole.toFixed(1)}`, 400, 450);
        this.ctx.font = 'bold 24px Inter';
        this.ctx.fillText(character, 400, 500);
    }

    drawAtom(x: number, y: number, r: number, label: string, val: string, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 20px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(label, x, y - 10);
        this.ctx.font = '16px Inter';
        this.ctx.fillText(val, x, y + 15);
    }

    getChargeColor(q: number): string {
        // q positive = blue, q negative = red
        // q ranges roughly -2 to +2 max
        const intensity = Math.min(1, Math.abs(q) / 1.5);
        if (q > 0) {
            // Blue
            return `rgba(59, 130, 246, ${0.2 + intensity * 0.8})`;
        } else {
            // Red
            return `rgba(239, 68, 68, ${0.2 + intensity * 0.8})`;
        }
    }

    drawDipoleArrow(x: number, y: number, mag: number, right: boolean) {
        const len = 50 + mag * 50;
        this.ctx.save();
        this.ctx.translate(x, y);
        if (!right) this.ctx.scale(-1, 1);

        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 3;

        // Arrow body
        this.ctx.beginPath();
        this.ctx.moveTo(-len / 2, 0);
        this.ctx.lineTo(len / 2, 0);
        this.ctx.stroke();

        // Cross at positive end (left)
        this.ctx.beginPath();
        this.ctx.moveTo(-len / 2, -10);
        this.ctx.lineTo(-len / 2, 10);
        this.ctx.stroke();

        // Head
        this.ctx.beginPath();
        this.ctx.moveTo(len / 2, 0);
        this.ctx.lineTo(len / 2 - 10, -10);
        this.ctx.lineTo(len / 2 - 10, 10);
        this.ctx.fill();

        this.ctx.restore();
    }
}
