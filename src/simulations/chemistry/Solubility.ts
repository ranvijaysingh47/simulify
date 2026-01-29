import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Solubility extends Simulation {
    private saltAmount = 0;
    private dissolved = 0;
    private precipitate = 0;
    private ksp = 100; // Arbitrary saturation limit

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('button', 'Add Salt (NaCl)', {}, () => this.addSalt());
        addControl('button', 'Reset', {}, () => this.reset());
    }

    addSalt() {
        this.saltAmount += 20;
    }

    reset() {
        this.saltAmount = 0;
        this.dissolved = 0;
        this.precipitate = 0;
    }

    update() {
        // Simple solubility logic
        if (this.saltAmount > this.ksp) {
            this.dissolved = this.ksp;
            this.precipitate = this.saltAmount - this.ksp;
        } else {
            this.dissolved = this.saltAmount;
            this.precipitate = 0;
        }

        const type = this.precipitate > 0 ? "SATURATED (Precipitate forms)" : "UNSATURATED (All dissolved)";
        this.updateData(`Total Salt: ${this.saltAmount}g\nStatus: ${type}`);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Beaker
        this.ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
        this.ctx.fillRect(300, 200, 200, 300); // Water
        this.ctx.strokeStyle = '#334155';
        this.ctx.strokeRect(300, 200, 200, 300);

        // Dissolved Ions
        const ions = Math.min(100, this.dissolved);
        for (let i = 0; i < ions; i++) {
            const x = 310 + (Math.sin(i * 132) * 90 + 90);
            const y = 220 + (Math.cos(i * 43) * 140 + 140);
            this.ctx.fillStyle = '#94a3b8';
            this.ctx.beginPath(); this.ctx.arc(x, y, 3, 0, Math.PI * 2); this.ctx.fill();
        }

        // Precipitate pile
        if (this.precipitate > 0) {
            this.ctx.fillStyle = 'white';
            const pileHeight = Math.min(50, this.precipitate);
            this.ctx.beginPath();
            this.ctx.moveTo(310, 500);
            this.ctx.quadraticCurveTo(400, 500 - pileHeight, 490, 500);
            this.ctx.fill();
        }

        if (this.precipitate > 0) {
            this.ctx.fillStyle = '#ef4444';
            this.ctx.font = "bold 20px Inter";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Precipitate!", 400, 480);
        }
    }
}
