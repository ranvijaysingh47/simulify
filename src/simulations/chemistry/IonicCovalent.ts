import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class IonicCovalent extends Simulation {
    private type: 'ionic' | 'covalent' = 'ionic';
    private frame: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('button', 'Ionic (NaCl)', {}, () => this.type = 'ionic');
        this.addControl('button', 'Covalent (H2)', {}, () => this.type = 'covalent');
    }

    update() {
        this.frame++;
        this.updateData(`Bond Type: ${this.type === 'ionic' ? 'Ionic (Transfer)' : 'Covalent (Sharing)'}\nElectrons are ${this.type === 'ionic' ? 'transferred' : 'shared'}.`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        if (this.type === 'ionic') {
            // Na + Cl -> Na+ Cl-
            this.drawAtom(cx - 60, cy, 'orange', 40, 'Na');
            this.drawAtom(cx + 60, cy, 'green', 50, 'Cl');

            // Electron transfer animation
            const progress = (Math.sin(this.frame * 0.05) + 1) / 2; // 0 to 1
            const ex = cx - 60 + 40 + progress * 80;
            const ey = cy;

            if (progress > 0.9) {
                // Transferred
                this.ctx.fillStyle = 'black'; this.ctx.fillText("+", cx - 60, cy - 50);
                this.ctx.fillText("-", cx + 60, cy - 60);
            }

            this.ctx.fillStyle = 'blue';
            this.ctx.beginPath(); this.ctx.arc(ex, ey, 5, 0, Math.PI * 2); this.ctx.fill();

        } else {
            // H - H
            this.drawAtom(cx - 30, cy, '#ccc', 30, 'H');
            this.drawAtom(cx + 30, cy, '#ccc', 30, 'H');

            // Shared electrons orbiting both
            const t = this.frame * 0.1;
            // Figure 8 orbit
            const ex = cx + Math.cos(t) * 40;
            const ey = cy + Math.sin(2 * t) * 20;

            this.ctx.fillStyle = 'blue';
            this.ctx.beginPath(); this.ctx.arc(ex, ey, 5, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.beginPath(); this.ctx.arc(cx - Math.cos(t) * 40, cy - Math.sin(2 * t) * 20, 5, 0, Math.PI * 2); this.ctx.fill();
        }
    }

    drawAtom(x: number, y: number, color: string, r: number, label: string) {
        this.drawSphere(x, y, r, color);
        this.ctx.fillStyle = 'white';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(label, x - 10, y + 5);
    }
}
