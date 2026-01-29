import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Resonance extends Simulation {
    private stage = 0; // 0 = Structure 1, 1 = Structure 2, 2 = Hybrid

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('button', 'Resonance Structure 1', {}, () => { this.stage = 0; this.updateData('Double Bond on Left Ozone'); });
        addControl('button', 'Resonance Structure 2', {}, () => { this.stage = 1; this.updateData('Double Bond on Right Ozone'); });
        addControl('button', 'Hybrid Structure', {}, () => { this.stage = 2; this.updateData('Delocalized Electrons (1.5 Bond Order)'); });

        this.updateData('Ozone (O3) Molecule Resonance');
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // O - O - O with 120 deg
        const cx = 400, cy = 200;
        const leftX = 300, leftY = 350;
        const rightX = 500, rightY = 350;

        this.drawAtom(cx, cy, "O");
        this.drawAtom(leftX, leftY, "O");
        this.drawAtom(rightX, rightY, "O");

        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 4;
        this.ctx.lineCap = 'round';

        if (this.stage === 0) {
            // Left Double, Right Single
            this.drawDoubleBond(leftX, leftY, cx, cy);
            this.drawSingleBond(rightX, rightY, cx, cy);
        } else if (this.stage === 1) {
            // Left Single, Right Double
            this.drawSingleBond(leftX, leftY, cx, cy);
            this.drawDoubleBond(rightX, rightY, cx, cy);
        } else {
            // Hybrid (1.5 everywhere)
            this.drawHybridBond(leftX, leftY, cx, cy);
            this.drawHybridBond(rightX, rightY, cx, cy);
        }
    }

    drawAtom(x: number, y: number, label: string) {
        this.ctx.fillStyle = '#ef4444';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 30, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 24px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(label, x, y);
    }

    drawSingleBond(x1: number, y1: number, x2: number, y2: number) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    drawDoubleBond(x1: number, y1: number, x2: number, y2: number) {
        // Draw two lines with offset
        const dx = x2 - x1;
        const dy = y2 - y1;
        const d = Math.hypot(dx, dy);
        const nx = -dy / d * 6;
        const ny = dx / d * 6;

        this.ctx.beginPath();
        this.ctx.moveTo(x1 + nx, y1 + ny);
        this.ctx.lineTo(x2 + nx, y2 + ny);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x1 - nx, y1 - ny);
        this.ctx.lineTo(x2 - nx, y2 - ny);
        this.ctx.stroke();
    }

    drawHybridBond(x1: number, y1: number, x2: number, y2: number) {
        // Solid line + Dotted line
        this.drawSingleBond(x1, y1, x2, y2);

        // Dotted
        const dx = x2 - x1;
        const dy = y2 - y1;
        const d = Math.hypot(dx, dy);
        const nx = -dy / d * 10;
        const ny = dx / d * 10;

        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x1 + nx, y1 + ny);
        this.ctx.lineTo(x2 + nx, y2 + ny);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }
}
