import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Isotopes extends Simulation {
    private protons: number = 6; // Carbon
    private neutrons: number = 6;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('button', 'Add Neutron', {}, () => {
            this.neutrons++;
        });
        this.addControl('button', 'Remove Neutron', {}, () => {
            if (this.neutrons > 0) this.neutrons--;
        });
    }

    update() {
        const mass = this.protons + this.neutrons;
        const name = "Carbon";
        let stable = "Stable";

        if (this.neutrons < 5 || this.neutrons > 8) stable = "Unstable";

        this.updateData(`Mass Number: ${mass}\nStatus: ${stable}\nElement: ${name}`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        // Nucleus
        for (let i = 0; i < this.protons; i++) {
            const angle = (i / this.protons) * Math.PI * 2;
            this.drawParticle(cx + Math.cos(angle) * 15, cy + Math.sin(angle) * 15, 'red', 'P');
        }
        for (let i = 0; i < this.neutrons; i++) {
            const angle = (i / this.neutrons) * Math.PI * 2 + 1;
            this.drawParticle(cx + Math.cos(angle) * 15, cy + Math.sin(angle) * 15, 'gray', 'N');
        }

        // Electrons (cloud)
        this.ctx.strokeStyle = 'rgba(0,0,255,0.3)';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 100, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    drawParticle(x: number, y: number, color: string, label: string) {
        this.drawSphere(x, y, 10, color);
        this.ctx.fillStyle = 'white';
        this.ctx.font = '10px Arial';
        this.ctx.fillText(label, x - 3, y + 3);
    }

    reset() {
        this.neutrons = 6;
    }
}
