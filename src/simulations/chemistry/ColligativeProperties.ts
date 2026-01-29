import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class ColligativeProperties extends Simulation {
    private solute: number = 0;
    private temp: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('slider', 'Solute Added (Salt)', { min: 0, max: 20, step: 1, value: 0 }, v => this.solute = v);
        this.addControl('slider', 'Temperature', { min: -20, max: 20, step: 1, value: 0 }, v => this.temp = v);
    }

    update() {
        const fp = 0 - (this.solute * 1.0);
        let state = "Liquid";
        if (this.temp <= fp) state = "Solid (Ice)";
        this.updateData(`Freezing Point: ${fp.toFixed(1)}°C\nCurrent Temp: ${this.temp}°C\nState: ${state}`);
    }

    draw() {
        const cx = 400, cy = 300, w = 300, h = 300;
        this.ctx.fillStyle = '#E3F2FD';
        this.ctx.fillRect(cx - w / 2, cy - h / 2, w, h);

        // Solute dots
        for (let i = 0; i < this.solute * 5; i++) {
            this.drawSphere(cx - w / 2 + Math.random() * w, cy - h / 2 + Math.random() * h, 2, 'black');
        }

        // Ice structure if solid
        const fp = 0 - (this.solute * 1.0);
        if (this.temp <= fp) {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            this.ctx.font = '40px Arial';
            this.ctx.fillText("❄️", 380, 300);
            this.ctx.fillText("ICE", 370, 350);
        } else {
            this.ctx.fillStyle = 'rgba(0,0,255,0.1)';
            this.ctx.fillText("💧", 380, 300);
        }
    }
}
