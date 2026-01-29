import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class ProteinFolding extends Simulation {
    private aminoAcids: { type: 'polar' | 'nonpolar', x: number, y: number }[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        addControl('button', 'Add Polar (Blue)', {}, () => this.add('polar'));
        addControl('button', 'Add Non-Polar (Orange)', {}, () => this.add('nonpolar'));
        addControl('button', 'Fold (Simulate Water)', {}, () => this.fold());
        this.updateData("Build Chain then Fold");
    }

    add(t: 'polar' | 'nonpolar') {
        const last = this.aminoAcids[this.aminoAcids.length - 1];
        const x = last ? last.x + 30 : 100;
        const y = 300;
        this.aminoAcids.push({ type: t, x, y });
    }

    fold() {
        // Simple logic: Bunch non-polar in center, polar outside
        const center = { x: 400, y: 300 };
        this.aminoAcids.forEach((aa, i) => {
            if (aa.type === 'nonpolar') {
                // Move towards center
                aa.x = center.x + (Math.random() - 0.5) * 40;
                aa.y = center.y + (Math.random() - 0.5) * 40;
            } else {
                // Move outside
                const angle = (i / this.aminoAcids.length) * Math.PI * 2;
                aa.x = center.x + Math.cos(angle) * 80;
                aa.y = center.y + Math.sin(angle) * 80;
            }
        });
        this.updateData("Folded: Hydrophobic Effect pushes non-polar inside.");
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Connections
        if (this.aminoAcids.length > 1) {
            this.ctx.strokeStyle = '#475569';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(this.aminoAcids[0].x, this.aminoAcids[0].y);
            this.aminoAcids.forEach(a => this.ctx.lineTo(a.x, a.y));
            this.ctx.stroke();
        }

        // Beads
        this.aminoAcids.forEach(a => {
            this.ctx.fillStyle = a.type === 'polar' ? '#3b82f6' : '#f97316';
            this.ctx.beginPath(); this.ctx.arc(a.x, a.y, 12, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.stroke();
        });
    }
}
