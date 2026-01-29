import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class GasDiffusion extends Simulation {
    private started: boolean = false;
    private nh3Pos: number = 0;
    private hclPos: number = 100;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('button', 'Start', {}, () => this.started = true);
        this.addControl('button', 'Reset', {}, () => { this.started = false; this.nh3Pos = 0; this.hclPos = 100; });
    }

    update() {
        if (this.started) {
            if (this.nh3Pos < this.hclPos) {
                this.nh3Pos += 0.5 * Math.sqrt(36.5 / 17); // Rate prop to 1/sqrt(M)
                this.hclPos -= 0.5 * 1; // Base rate
            }
        }
        this.updateData(`Graham's Law: Rate ∝ 1/√M\nNH3 (lighter) moves faster than HCl (heavier).\nWhite ring forms where they meet.`);
    }

    draw() {
        // Glass tube
        this.ctx.fillStyle = '#eee';
        this.ctx.fillRect(100, 250, 600, 40);
        this.ctx.strokeStyle = '#999';
        this.ctx.strokeRect(100, 250, 600, 40);

        // Cotton plugs
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath(); this.ctx.arc(100, 270, 20, 0, Math.PI * 2); this.ctx.fill(); // NH3
        this.ctx.beginPath(); this.ctx.arc(700, 270, 20, 0, Math.PI * 2); this.ctx.fill(); // HCl

        this.ctx.fillStyle = 'black';
        this.ctx.fillText("NH3 (17g/mol)", 50, 275);
        this.ctx.fillText("HCl (36.5g/mol)", 710, 275);

        // Gases diffusing
        if (this.started) {
            this.ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
            this.ctx.fillRect(100, 250, this.nh3Pos * 6, 40);

            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
            this.ctx.fillRect(100 + this.hclPos * 6, 250, (100 - this.hclPos) * 6, 40);

            // Meeting point
            if (Math.abs((100 + this.hclPos * 6) - (100 + this.nh3Pos * 6)) < 5) {
                this.ctx.fillStyle = 'white';
                this.ctx.fillRect(100 + this.nh3Pos * 6, 250, 10, 40);
                this.ctx.fillStyle = 'black';
                this.ctx.fillText("NH4Cl Solid Formed", 100 + this.nh3Pos * 6 - 50, 320);
            }
        }
    }
}
