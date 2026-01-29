import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Concentration extends Simulation {
    private soluteAmount: number = 0.5;
    private volume: number = 0.5;
    // private sourceIntensity: number = 1.0; // Unused for now

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Solute Amount', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.soluteAmount = v);
        this.addControl('slider', 'Solution Vol', { min: 0.2, max: 1.0, step: 0.1, value: 0.5 }, v => this.volume = v);
    }

    update() {
        const concentration = this.soluteAmount / this.volume;
        // Beer's Law: A = ebc. Transmittance T = 10^-A
        const absorbance = concentration * 0.5;
        const transmittance = Math.pow(10, -absorbance);

        this.updateData(`Concentration: ${concentration.toFixed(2)} mol/L\nTransmittance: ${(transmittance * 100).toFixed(1)}%\nAbsorbance: ${absorbance.toFixed(2)}`);
    }

    draw() {
        const bx = 350, by = 400, w = 100, h = 200;

        // Light Source
        this.ctx.fillStyle = '#FB8C00';
        this.ctx.beginPath();
        this.ctx.moveTo(100, 300);
        this.ctx.lineTo(150, 270);
        this.ctx.lineTo(150, 330);
        this.ctx.fill();

        // Beam entering
        this.ctx.fillStyle = `rgba(255, 0, 0, 1)`; // Pure red light
        this.ctx.fillRect(150, 290, 200, 20); // to beaker

        // Beaker Liquid
        const cVal = Math.min(1, (this.soluteAmount / this.volume) / 2);
        this.ctx.fillStyle = `rgba(200, 0, 0, ${cVal})`;
        this.ctx.fillRect(bx, by - h, w, h);
        this.ctx.strokeStyle = '#333';
        this.ctx.strokeRect(bx, by - h, w, h);

        // Beam exiting
        const trans = Math.pow(10, -(this.soluteAmount / this.volume * 0.5));
        this.ctx.fillStyle = `rgba(255, 0, 0, ${trans})`;
        this.ctx.fillRect(bx + w, 290, 150, 20);

        // Detector
        this.ctx.fillStyle = '#555';
        this.ctx.fillRect(bx + w + 150, 270, 40, 60);
        this.ctx.fillStyle = '#000';
        this.ctx.fillText(`${(trans * 100).toFixed(0)}%`, bx + w + 155, 305);
    }

    reset() {
        this.soluteAmount = 0.5;
        this.volume = 0.5;
    }
}
