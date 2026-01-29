import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class BetaDecay extends Simulation {
    private nucleus: { x: number, y: number, type: 'parent' | 'daughter' } = { x: 400, y: 300, type: 'parent' };
    private electron: { x: number, y: number, vx: number, vy: number } | null = null;
    private hasDecayed = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        addControl('button', 'Decay Nucleus', {}, () => this.decay());
        addControl('button', 'Reset', {}, () => this.reset());
        this.reset();
    }

    reset() {
        this.nucleus = { x: 400, y: 300, type: 'parent' };
        this.electron = null;
        this.hasDecayed = false;
        this.updateData('Carbon-14 Nucleus (Unstable)');
    }

    decay() {
        if (this.hasDecayed) return;
        this.hasDecayed = true;
        this.nucleus.type = 'daughter';

        // Eject Electron (Beta)
        const angle = Math.random() * Math.PI * 2;
        this.electron = {
            x: 400,
            y: 300,
            vx: Math.cos(angle) * 8, // Fast
            vy: Math.sin(angle) * 8
        };
        this.updateData('Decay! Nitrogen-14 + Electron (β-)');
    }

    update() {
        if (this.electron) {
            this.electron.x += this.electron.vx;
            this.electron.y += this.electron.vy;
        }
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Nucleus
        this.ctx.beginPath();
        this.ctx.arc(this.nucleus.x, this.nucleus.y, 35, 0, Math.PI * 2);
        this.ctx.fillStyle = this.nucleus.type === 'parent' ? '#3b82f6' : '#22c55e'; // Blue -> Green
        this.ctx.fill();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 16px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(this.nucleus.type === 'parent' ? 'C-14' : 'N-14', this.nucleus.x, this.nucleus.y);

        // Electron
        if (this.electron) {
            this.ctx.beginPath();
            this.ctx.arc(this.electron.x, this.electron.y, 5, 0, Math.PI * 2);
            this.ctx.fillStyle = '#ef4444'; // Red
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.fillStyle = 'black';
            this.ctx.font = '10px Inter';
            this.ctx.fillText('e-', this.electron.x, this.electron.y - 8);
        }

        // Legend
        this.ctx.fillStyle = '#0f172a';
        this.ctx.font = '20px Inter';
        this.ctx.fillText("Beta Decay: Neutron → Proton + Electron", 400, 100);
    }
}
