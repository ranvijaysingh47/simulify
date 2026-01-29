import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class ElectronDiffraction extends Simulation {
    private time = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.updateData("Electron Wave Diffraction (Simplified)");
    }

    update() {
        this.time += 0.1;
        // Simple interference pattern Calc
        // Screen at right. Two slits at center-ish.
        // I = |ψ1 + ψ2|^2

        // This is a static visualization of the result graph usually?
        // Let's animate the wave hitting the screen.
    }

    draw() {
        this.ctx.fillStyle = '#0f172a'; // Dark mode
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Wall with slits
        this.ctx.fillStyle = '#cbd5e1';
        this.ctx.fillRect(200, 0, 10, 250);
        this.ctx.fillRect(200, 270, 10, 60); // Gap 1
        this.ctx.fillRect(200, 350, 10, 250);

        // Slits
        // 250-270 gap
        // 330-350 gap ? No 

        // Let's assume slits at y=260 and y=340
        const slit1 = 260;
        const slit2 = 340;

        // Draw waves originating from slits
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = `rgba(59, 130, 246, 0.5)`; // Cyan electrons

        const phase = this.time * 2;

        for (let r = 0; r < 600; r += 20) {
            this.ctx.beginPath();
            this.ctx.arc(200, slit1, r + (phase % 20), -Math.PI / 2, Math.PI / 2);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.arc(200, slit2, r + (phase % 20), -Math.PI / 2, Math.PI / 2);
            this.ctx.stroke();
        }

        // Screen Intensity Profile
        this.ctx.strokeStyle = '#f59e0b';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        const screenX = 700;
        for (let y = 0; y < this.height; y += 5) {
            // Distances
            const d1 = Math.hypot(screenX - 200, y - slit1);
            const d2 = Math.hypot(screenX - 200, y - slit2);
            const wavelength = 20;

            // Interference
            const amp = Math.cos(d1 / wavelength * Math.PI) + Math.cos(d2 / wavelength * Math.PI);
            const intensity = amp * amp * 20;

            if (y === 0) this.ctx.moveTo(screenX + intensity, y);
            else this.ctx.lineTo(screenX + intensity, y);
        }
        this.ctx.stroke();

        // Screen Line
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(screenX, 0, 5, this.height);
    }
}
