import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Blackbody extends Simulation {
    private temp: number = 3000;
    private color: string = '#330000';

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('slider', 'Temperature (K)', { min: 1000, max: 10000, step: 100, value: 3000 }, v => this.temp = v);
    }

    update() {
        const lambdaMax = 2898000 / this.temp; // nm
        let color = '#330000';
        if (this.temp > 2000) color = '#FF3300';
        if (this.temp > 4000) color = '#FFCC00';
        if (this.temp > 6000) color = '#FFFFFF';
        if (this.temp > 8000) color = '#CCCCFF';
        this.color = color;

        this.updateData(`Temp: ${this.temp}K\nPeak Wavelength: ${lambdaMax.toFixed(0)} nm\nApproximated Color: ${color}`);
    }

    draw() {
        const gx = 100, gy = 500, gw = 600, gh = 400;
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx + gw, gy);
        this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx, gy - gh);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 4;

        for (let x = 0; x < gw; x += 10) {
            // Unscaled distribution
            const peakX = (2898000 / this.temp - 100) / 2000 * gw;
            const height = (this.temp / 10000) * gh;
            const width = 100 + (10000 / this.temp) * 50;

            const y = height * Math.exp(-Math.pow(x - peakX, 2) / (2 * width * width));
            const sy = gy - y;

            if (x === 0) this.ctx.moveTo(gx + x, sy); else this.ctx.lineTo(gx + x, sy);
        }
        this.ctx.stroke();

        this.ctx.shadowBlur = 50; this.ctx.shadowColor = this.color;
        this.drawSphere(600, 150, 40, this.color);
        this.ctx.shadowBlur = 0;
    }
}
