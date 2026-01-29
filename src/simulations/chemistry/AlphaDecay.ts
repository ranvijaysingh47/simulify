import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class AlphaDecay extends Simulation {
    private nucleus: { x: number, y: number, type: 'parent' | 'daughter' } = { x: 400, y: 300, type: 'parent' };
    private alphaParticle: { x: number, y: number, vx: number, vy: number } | null = null;
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
        this.alphaParticle = null;
        this.hasDecayed = false;
        this.updateData('Polonium-211 Nucleus (Unstable)');
    }

    decay() {
        if (this.hasDecayed) return;
        this.hasDecayed = true;
        this.nucleus.type = 'daughter';

        // Eject alpha
        const angle = Math.random() * Math.PI * 2;
        this.alphaParticle = {
            x: 400,
            y: 300,
            vx: Math.cos(angle) * 5,
            vy: Math.sin(angle) * 5
        };
        this.updateData('Decay! Lead-207 + Alpha Particle (He-4)');
    }

    update() {
        if (this.alphaParticle) {
            this.alphaParticle.x += this.alphaParticle.vx;
            this.alphaParticle.y += this.alphaParticle.vy;
        }

        if (!this.hasDecayed && Math.random() < 0.005) {
            // Random decay chance
            this.decay();
        }
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Nucleus
        this.ctx.beginPath();
        this.ctx.arc(this.nucleus.x, this.nucleus.y, 40, 0, Math.PI * 2);
        this.ctx.fillStyle = this.nucleus.type === 'parent' ? '#e11d48' : '#475569'; // Red -> Grey
        this.ctx.fill();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 16px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(this.nucleus.type === 'parent' ? 'Po-211' : 'Pb-207', this.nucleus.x, this.nucleus.y);

        // Alpha Particle
        if (this.alphaParticle) {
            this.ctx.beginPath();
            this.ctx.arc(this.alphaParticle.x, this.alphaParticle.y, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = '#f59e0b'; // Amber
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.fillStyle = 'black';
            this.ctx.font = '10px Inter';
            this.ctx.fillText('α', this.alphaParticle.x, this.alphaParticle.y);
        }

        // Legend
        this.ctx.fillStyle = '#0f172a';
        this.ctx.font = '20px Inter';
        this.ctx.fillText("Alpha Decay: Mass -4, Atomic Number -2", 400, 100);
    }
}
