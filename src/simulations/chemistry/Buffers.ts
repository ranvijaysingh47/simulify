import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Buffers extends Simulation {
    private ph = 7.0;
    private bufferCapacity = 0; // 0 = water, 1 = strong buffer
    // Removed unused addedAcid/addedBase
    private solutionColor = '#ecfccb';

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('button', 'Solution: Pure Water', {}, () => this.setSolution(0));
        addControl('button', 'Solution: Weak Buffer', {}, () => this.setSolution(0.5));
        addControl('button', 'Solution: Strong Buffer', {}, () => this.setSolution(1.0));

        addControl('button', 'Add Acid (HCl)', {}, () => this.addReagent(-1));
        addControl('button', 'Add Base (NaOH)', {}, () => this.addReagent(1));
        addControl('button', 'Reset', {}, () => this.reset());
    }

    setSolution(capacity: number) {
        this.bufferCapacity = capacity;
        this.reset();
        this.updateData('Solution Changed');
    }

    addReagent(type: number) {
        // type: -1 for acid, 1 for base.
        // Change in pH depends on buffer capacity
        // Without buffer: change is large.
        // With buffer: change is small, until capacity broken.

        const delta = type * 0.5; // Base hypothetical change
        const resistance = 1 + this.bufferCapacity * 10;

        const actualChange = delta / resistance;

        this.ph += actualChange;
        this.ph = Math.max(0, Math.min(14, this.ph));

        this.updateVisuals();
    }

    reset() {
        this.ph = 7.0;
        this.updateVisuals();
    }

    updateVisuals() {
        // Color map based on Universal Indicator
        if (this.ph < 3) this.solutionColor = '#ef4444'; // Red
        else if (this.ph < 5) this.solutionColor = '#f97316'; // Orange
        else if (this.ph < 6) this.solutionColor = '#eab308'; // Yellow
        else if (this.ph < 8) this.solutionColor = '#84cc16'; // Green
        else if (this.ph < 10) this.solutionColor = '#06b6d4'; // Blueish
        else this.solutionColor = '#3b82f6'; // Purple/Blue

        this.updateData(`pH: ${this.ph.toFixed(2)}\nBuffer Strength: ${this.bufferCapacity * 100}%`);
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Beaker
        this.ctx.fillStyle = this.solutionColor;
        this.ctx.fillRect(300, 300, 200, 250);
        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(300, 300, 200, 250);

        // pH Meter
        this.ctx.fillStyle = '#1e293b';
        this.ctx.fillRect(350, 100, 100, 150); // Body
        this.ctx.fillStyle = '#cbd5e1';
        this.ctx.fillRect(390, 250, 20, 100); // Probe

        // Screen
        this.ctx.fillStyle = '#84cc16'; // LCD Green
        this.ctx.fillRect(360, 120, 80, 40);
        this.ctx.fillStyle = '#000';
        this.ctx.font = 'bold 24px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.ph.toFixed(2), 400, 148);

        this.ctx.fillStyle = '#64748b';
        this.ctx.font = '16px Inter';
        this.ctx.fillText(this.getBufferName(), 400, 580);
    }

    getBufferName() {
        if (this.bufferCapacity === 0) return "Pure Water (No Resistance)";
        if (this.bufferCapacity === 0.5) return "Acetate Buffer (Low Capacity)";
        return "Phosphate Buffer (High Capacity)";
    }
}
