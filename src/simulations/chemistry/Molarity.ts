import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Molarity extends Simulation {
    private solute: number = 0.5; // moles
    private vol: number = 0.5; // liters
    private opacity: number = 0.25;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Solute (mol)', { min: 0.1, max: 2, step: 0.1, value: 0.5 }, v => this.solute = v);
        this.addControl('slider', 'Volume (L)', { min: 0.2, max: 1, step: 0.1, value: 0.5 }, v => this.vol = v);
    }

    update() {
        const molarity = this.solute / this.vol;
        this.updateData(`Molarity: ${molarity.toFixed(2)} M (mol/L)\nColor saturation increases with concentration.`);
        this.opacity = Math.min(1, molarity / 2); // Max color at 2M
    }

    draw() {
        // Beaker
        const bx = 300, by = 450, w = 200, h = 350;
        const liquidH = h * this.vol;

        // Liquid
        this.ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
        this.ctx.fillRect(bx, by - liquidH, w, liquidH);

        // Outline
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(bx, by - h, w, h);

        // Fill text water
        this.ctx.fillStyle = '#333';
        this.ctx.fillText(`${this.vol.toFixed(1)} L`, bx + w + 10, by - liquidH);

        // Particles (visual flair)
        const particles = Math.floor(this.solute * 20);
        this.ctx.fillStyle = 'white';
        for (let i = 0; i < particles; i++) {
            // Pseudorandom static positions based on i
            // We use simple math to keep them "static" but random-looking without storing state
            const seed = i * 123.45;
            const px = bx + 10 + (Math.abs(Math.sin(seed)) * (w - 20));

            // Height constrained to liquid
            // We need them distributed in the liquid volume
            const py = by - 10 - (Math.abs(Math.cos(seed * 2)) * (liquidH - 20));

            if (py > by - liquidH) {
                this.drawSphere(px, py, 2, 'white');
            }
        }
    }

    reset() {
        this.solute = 0.5;
        this.vol = 0.5;
    }
}
