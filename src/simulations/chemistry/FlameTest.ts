import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class FlameTest extends Simulation {
    private flameColor = '#f59e0b'; // Default orange/yellow
    private baseFlameColor = '#3b82f6'; // Blue base
    private particleSystem: { x: number, y: number, vx: number, vy: number, life: number, color: string }[] = [];
    private currentMetal = 'None';

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        const metals = [
            { name: 'Lithium (Li)', color: '#ef4444' }, // Red
            { name: 'Sodium (Na)', color: '#eab308' }, // Yellow-Orange
            { name: 'Potassium (K)', color: '#a855f7' }, // Lilac
            { name: 'Copper (Cu)', color: '#22c55e' }, // Green
            { name: 'Strontium (Sr)', color: '#dc2626' }, // Crimson
            { name: 'Barium (Ba)', color: '#84cc16' } // Pale Green/Apple
        ];

        addControl('button', 'Reset Flame', {}, () => {
            this.flameColor = '#f59e0b'; // Just natural gas color
            this.currentMetal = 'Bunsen Burner (Natural Gas)';
            this.updateData('Flame: Blue/Orange (No metal salt)');
        });

        metals.forEach(m => {
            addControl('button', m.name, {}, () => {
                this.flameColor = m.color;
                this.currentMetal = m.name;
                this.updateData(`Metal: ${m.name}\nEmission Color: ${this.getColorName(m.color)}`);
            });
        });

        this.updateData('Select a metal salt to burn.');
    }

    getColorName(hex: string): string {
        switch (hex) {
            case '#ef4444': return 'Red';
            case '#eab308': return 'Persistent Yellow';
            case '#a855f7': return 'Lilac (Purple)';
            case '#22c55e': return 'Blue-Green';
            case '#dc2626': return 'Crimson Red';
            case '#84cc16': return 'Apple Green';
            default: return 'Standard';
        }
    }

    update() {
        // Add particles
        for (let i = 0; i < 15; i++) {
            this.particleSystem.push({
                x: this.width / 2 + (Math.random() - 0.5) * 30,
                y: this.height - 100,
                vx: (Math.random() - 0.5) * 1.5,
                vy: -Math.random() * 4 - 2,
                life: 1.0,
                color: Math.random() < 0.3 ? this.baseFlameColor : this.flameColor
            });
        }

        // Update particles
        for (let i = this.particleSystem.length - 1; i >= 0; i--) {
            const p = this.particleSystem[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.02;
            // Wiggle
            p.x += Math.sin(Date.now() * 0.01 + p.y * 0.05) * 0.5;

            if (p.life <= 0) this.particleSystem.splice(i, 1);
        }
    }

    draw() {
        this.ctx.fillStyle = '#1e293b'; // Dark lab background
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw Bunsen Burner
        this.ctx.fillStyle = '#64748b';
        this.ctx.fillRect(this.width / 2 - 20, this.height - 100, 40, 100);
        this.ctx.fillStyle = '#475569';
        this.ctx.fillRect(this.width / 2 - 30, this.height - 10, 60, 10);

        // Draw Particles
        this.ctx.globalCompositeOperation = 'screen'; // Additive blending for glow
        this.particleSystem.forEach(p => {
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, 8 * p.life, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Wire loop holder if metal selected
        if (this.currentMetal !== 'Bunsen Burner (Natural Gas)') {
            this.ctx.globalCompositeOperation = 'source-over';
            this.ctx.globalAlpha = 1;
            this.ctx.strokeStyle = '#94a3b8';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(this.width / 2 + 200, this.height - 50);
            this.ctx.bezierCurveTo(this.width / 2 + 100, this.height - 200, this.width / 2 + 50, this.height - 150, this.width / 2, this.height - 150);
            this.ctx.stroke();
            // Loop tip
            this.ctx.beginPath();
            this.ctx.arc(this.width / 2, this.height - 150, 4, 0, Math.PI * 2);
            this.ctx.strokeStyle = '#cbd5e1';
            this.ctx.stroke();
        }

        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'source-over';

        // Label
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px Inter font-bold';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.currentMetal, this.width / 2, 100);
    }
}
