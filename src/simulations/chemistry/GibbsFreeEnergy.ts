import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class GibbsFreeEnergy extends Simulation {
    private enthalpy = -100; // Delta H (kJ/mol)
    private entropy = 0.1; // Delta S (kJ/mol*K)
    private temp = 300; // K

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('slider', 'Enthalpy (ΔH)', { min: -500, max: 500, value: -100 }, (v) => this.enthalpy = v);
        addControl('slider', 'Entropy (ΔS)', { min: -0.5, max: 0.5, step: 0.01, value: 0.1 }, (v) => this.entropy = v);
        addControl('slider', 'Temperature (T)', { min: 0, max: 1000, value: 300 }, (v) => this.temp = v);
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        const deltaG = this.enthalpy - (this.temp * this.entropy);
        const spontaneity = deltaG < 0 ? "Spontaneous" : "Non-Spontaneous";

        // Draw Equation
        this.ctx.fillStyle = '#1e293b';
        this.ctx.font = 'bold 30px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("ΔG = ΔH - TΔS", 400, 100);

        // Values
        this.ctx.font = '20px monospace';
        this.ctx.fillText(`${deltaG.toFixed(1)} = ${this.enthalpy} - (${this.temp} * ${this.entropy.toFixed(3)})`, 400, 150);

        // Result Box
        this.ctx.fillStyle = deltaG < 0 ? '#22c55e' : '#ef4444';
        this.ctx.fillRect(200, 200, 400, 100);
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 36px Inter';
        this.ctx.fillText(spontaneity, 400, 260);

        // Graph visualization?
        // Maybe a bar chart comparing H and TS terms
        const center = 400;
        const scale = 0.5;
        const baseline = 450;

        // ΔH Bar
        this.ctx.fillStyle = '#3b82f6';
        const hHeight = this.enthalpy * scale;
        this.ctx.fillRect(center - 150, baseline, 80, -hHeight);
        this.ctx.fillStyle = '#0f172a';
        this.ctx.font = '16px Inter';
        this.ctx.fillText("ΔH", center - 110, baseline + 20);

        // TΔS Bar
        this.ctx.fillStyle = '#f59e0b';
        const tsHeight = (this.temp * this.entropy) * scale;
        this.ctx.fillRect(center + 50, baseline, 80, -tsHeight);
        this.ctx.fillStyle = '#0f172a';
        this.ctx.fillText("TΔS", center + 90, baseline + 20);

        this.ctx.strokeStyle = '#94a3b8';
        this.ctx.beginPath(); this.ctx.moveTo(100, baseline); this.ctx.lineTo(700, baseline); this.ctx.stroke();
    }
}
