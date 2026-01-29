import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Equilibrium extends Simulation {
    private countA: number = 50;
    private countB: number = 50;
    private kFwd: number = 0.05;
    private kRev: number = 0.02;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('button', 'Add A', {}, () => this.countA += 20);
        this.addControl('button', 'Add B', {}, () => this.countB += 20);
        this.addControl('slider', 'Shift Right (Heat)', { min: 0.01, max: 0.2, step: 0.01, value: 0.05 }, v => this.kFwd = v);
    }

    update() {
        const rateFwd = this.countA * this.kFwd;
        const rateRev = this.countB * this.kRev;

        if (Math.random() < rateFwd && this.countA > 0) { this.countA--; this.countB++; }
        if (Math.random() < rateRev && this.countB > 0) { this.countB--; this.countA++; }

        const q = this.countB / (this.countA || 1);
        const k = this.kFwd / this.kRev;

        this.updateData(`A (Blue): ${this.countA} | B (Red): ${this.countB}\nRatio Q: ${q.toFixed(2)} (Target K ~${k.toFixed(2)})`);
    }

    draw() {
        this.ctx.strokeRect(100, 200, 250, 300);
        this.ctx.strokeRect(450, 200, 250, 300);

        this.ctx.fillStyle = '#000';
        this.ctx.font = '30px Arial';
        this.ctx.fillText("⇌", 390, 350);

        this.drawParticles(this.countA, 100, 200, 250, 300, 'blue');
        this.drawParticles(this.countB, 450, 200, 250, 300, 'red');
    }

    drawParticles(n: number, x: number, y: number, w: number, h: number, c: string) {
        for (let i = 0; i < n; i++) {
            const px = x + Math.random() * w;
            const py = y + Math.random() * h;
            this.drawSphere(px, py, 4, c);
        }
    }
}
