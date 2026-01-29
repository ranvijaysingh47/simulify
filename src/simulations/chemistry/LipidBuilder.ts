import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class LipidBuilder extends Simulation {
    private head = { x: 400, y: 300, type: 'hydrophilic' };
    private tails: { points: { x: number, y: number }[] }[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        addControl('button', 'Add Fatty Acid Tail', {}, () => this.addTail());
        addControl('button', 'Clear', {}, () => this.tails = []);
        this.updateData("Build a Phospholipid");
    }

    addTail() {
        if (this.tails.length >= 2) return;
        const pts = [];
        let startX = this.tails.length === 0 ? 390 : 410;
        let startY = 320;
        for (let i = 0; i < 10; i++) {
            pts.push({ x: startX + Math.sin(i) * 5, y: startY + i * 15 });
        }
        this.tails.push({ points: pts });
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Head
        this.ctx.fillStyle = '#3b82f6';
        this.ctx.beginPath(); this.ctx.arc(this.head.x, this.head.y, 20, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("PO4", this.head.x, this.head.y);

        // Tails
        this.ctx.strokeStyle = '#eab308';
        this.ctx.lineWidth = 6;
        this.tails.forEach(t => {
            this.ctx.beginPath();
            this.ctx.moveTo(t.points[0].x, t.points[0].y - 20); // Connect to head
            t.points.forEach(p => this.ctx.lineTo(p.x, p.y));
            this.ctx.stroke();
        });

        this.ctx.fillStyle = '#0f172a';
        this.ctx.font = '20px Inter';
        this.ctx.fillText("Phospholipid: Hydrophilic Head + Hydrophobic Tails", 400, 100);
    }
}
