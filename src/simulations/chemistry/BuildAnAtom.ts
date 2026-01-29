import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class BuildAnAtom extends Simulation {
    private p: number = 1; // H
    private n: number = 0;
    private e: number = 1;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Protons', { min: 1, max: 10, step: 1, value: 1 }, v => this.p = v);
        this.addControl('slider', 'Neutrons', { min: 0, max: 12, step: 1, value: 0 }, v => this.n = v);
        this.addControl('slider', 'Electrons', { min: 0, max: 10, step: 1, value: 1 }, v => this.e = v);
    }

    update() {
        const elements = ["", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"];
        const el = elements[this.p] || "Unknown";
        const charge = this.p - this.e;
        const mass = this.p + this.n;

        const ion = charge === 0 ? "Neutral Atom" : (charge > 0 ? `+${charge} Ion` : `${charge} Ion`);

        this.updateData(`Element: ${el}\nNet Charge: ${charge}\nMass Number: ${mass}\nType: ${ion}`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        // Nucleus
        const totalNuc = this.p + this.n;
        for (let i = 0; i < totalNuc; i++) {
            const r = Math.sqrt(i) * 8;
            const a = i * 2.4;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;
            const color = i < this.p ? 'red' : 'gray';
            this.drawSphere(x, y, 8, color);
        }

        // Electron Shells (Bohr model)
        const shells = [2, 8, 18];
        let eRem = this.e;

        shells.forEach((cap, idx) => {
            if (eRem <= 0) return;
            const count = Math.min(eRem, cap);
            eRem -= count;

            const radius = 60 + idx * 40;
            this.ctx.strokeStyle = '#aaa';
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            this.ctx.stroke();

            for (let i = 0; i < count; i++) {
                const a = (Math.PI * 2 * i) / count;
                this.drawSphere(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius, 5, 'blue');
            }
        });
    }

    reset() {
        this.p = 1; this.n = 0; this.e = 1;
    }
}
