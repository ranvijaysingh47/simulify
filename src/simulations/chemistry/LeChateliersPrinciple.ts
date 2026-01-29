import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class LeChateliersPrinciple extends Simulation {
    private no2_conc = 5; // Brown
    private n2o4_conc = 5; // Colorless
    private temp = 25; // Exothermic: 2NO2 <-> N2O4 + Heat
    private pressure = 1;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('button', 'Add NO2 (Reactant)', {}, () => this.perturb('no2'));
        addControl('button', 'Increase Pressure', {}, () => this.perturb('pressure+'));
        addControl('button', 'Decrease Pressure', {}, () => this.perturb('pressure-'));
        addControl('slider', 'Temperature', { min: 0, max: 100, value: 25 }, (v) => this.temp = v);
    }

    perturb(type: string) {
        if (type === 'no2') this.no2_conc += 5;
        if (type === 'pressure+') this.pressure += 0.5;
        if (type === 'pressure-') this.pressure = Math.max(0.5, this.pressure - 0.5);
    }

    update() {
        // Equilibrium Logic:
        // K = [N2O4] / [NO2]^2
        // Exothermic -> Heat is product.
        // Increase Temp -> Shift Left (More NO2)
        // Increase Pressure -> Shift to side with fewer moles (Right: 1 mole N2O4 vs 2 moles NO2) -> More N2O4

        let targetRatio = 1.0;

        // Temp effect
        // Higher temp = Less N2O4 (shift left)
        targetRatio *= (100 - this.temp) / 50;

        // Pressure effect
        // Higher pressure = More N2O4 (shift right)
        targetRatio *= this.pressure;

        // Kinetics approach to equilibrium
        // Rate forward = kF * [NO2]^2
        // Rate reverse = kR * [N2O4]

        const kF = 0.01 * this.pressure;
        const kR = 0.01 * (this.temp / 25);

        const forward = kF * this.no2_conc * this.no2_conc;
        const reverse = kR * this.n2o4_conc;

        const net = forward - reverse;

        this.no2_conc -= net;
        this.n2o4_conc += net;

        // Clamp
        if (this.no2_conc < 0) this.no2_conc = 0;
        if (this.n2o4_conc < 0) this.n2o4_conc = 0;
        this.no2_conc = Math.min(20, this.no2_conc); // Cap

        this.updateData(`NO2 (Brown): ${this.no2_conc.toFixed(2)} M\nN2O4 (Clear): ${this.n2o4_conc.toFixed(2)} M`);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw Syringe/Container
        const h = 400 / this.pressure; // Volume inversely proportional to pressure
        const yTop = 500 - h;

        // Gas Color
        // NO2 is brown. Intensity prop to conc.
        const intensity = Math.min(1, this.no2_conc / 10);
        this.ctx.fillStyle = `rgba(165, 42, 42, ${intensity})`; // Brown
        this.ctx.fillRect(300, yTop, 200, h);

        this.ctx.strokeRect(300, yTop, 200, h); // Container walls

        // Piston
        this.ctx.fillStyle = '#cbd5e1';
        this.ctx.fillRect(280, yTop - 20, 240, 20); // Plunger head
        this.ctx.fillRect(390, yTop - 120, 20, 100); // Rod

        // Molecules
        const gasCount = Math.floor(this.no2_conc) + Math.floor(this.n2o4_conc);
        for (let i = 0; i < Math.min(50, gasCount * 2); i++) {
            const px = 300 + Math.random() * 200;
            const py = yTop + Math.random() * h;

            // Check if it should be NO2 or N2O4 based on ratio
            const isNO2 = Math.random() < (this.no2_conc / (this.no2_conc + this.n2o4_conc));

            if (isNO2) {
                this.ctx.fillStyle = '#ef4444'; // Red dot for NO2
                this.ctx.beginPath(); this.ctx.arc(px, py, 3, 0, Math.PI * 2); this.ctx.fill();
            } else {
                this.ctx.fillStyle = '#3b82f6'; // Blue dot for N2O4
                // Double dot
                this.ctx.beginPath(); this.ctx.arc(px, py, 3, 0, Math.PI * 2); this.ctx.fill();
                this.ctx.beginPath(); this.ctx.arc(px + 4, py, 3, 0, Math.PI * 2); this.ctx.fill();
            }
        }

        // Reaction Equation
        this.ctx.fillStyle = '#0f172a';
        this.ctx.font = 'bold 20px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("2 NO₂ (Brown)  ⇌  N₂O₄ (Colorless) + Heat", 400, 100);
    }
}
