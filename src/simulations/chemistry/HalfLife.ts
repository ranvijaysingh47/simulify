import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class HalfLife extends Simulation {
    private atoms: { x: number, y: number, decayed: boolean }[] = [];
    private halfLifeTime = 100; // frames
    private time = 0;
    private running = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('button', 'Start', {}, () => this.running = true);
        addControl('button', 'Reset', {}, () => this.reset());
        this.reset();
    }

    reset() {
        this.atoms = [];
        this.time = 0;
        this.running = false;
        // Create 100 atoms
        for (let i = 0; i < 100; i++) {
            this.atoms.push({
                x: 50 + (i % 10) * 30 + Math.random() * 10,
                y: 100 + Math.floor(i / 10) * 30 + Math.random() * 10,
                decayed: false
            });
        }
        this.updateData("Half-Life Simulation: Time 0");
    }

    update() {
        if (!this.running) return;
        this.time++;

        const decayProb = 1 - Math.pow(0.5, 1 / this.halfLifeTime); // Prob per frame

        let decayedCount = 0;
        this.atoms.forEach(a => {
            if (!a.decayed && Math.random() < decayProb) {
                a.decayed = true;
            }
            if (a.decayed) decayedCount++;
        });

        const remaining = 100 - decayedCount;
        this.updateData(`Time: ${Math.floor(this.time / 60)}s\nRemaining: ${remaining}%\nDecayed: ${decayedCount}%`);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.atoms.forEach(a => {
            this.ctx.beginPath();
            this.ctx.arc(a.x, a.y, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = a.decayed ? '#64748b' : '#ef4444'; // Grey (stable) vs Red (unstable)
            this.ctx.fill();
            this.ctx.stroke();
        });

        // Graph
        this.ctx.strokeStyle = 'black';
        this.ctx.beginPath();
        this.ctx.moveTo(400, 500); this.ctx.lineTo(400, 200);
        this.ctx.moveTo(400, 500); this.ctx.lineTo(750, 500);
        this.ctx.stroke();

        // Plot decay curve (conceptual)
        this.ctx.strokeStyle = '#3b82f6';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        // Plot point
        const h = 300;
        const remaining = this.atoms.filter(a => !a.decayed).length;
        const currentY = 500 - (remaining / 100) * h;
        const currentX = 400 + (this.time / 2); // Scale time

        // We can't plot full history without array, just draw marker for now
        this.ctx.fillStyle = '#3b82f6';
        this.ctx.beginPath(); this.ctx.arc(currentX, currentY, 5, 0, Math.PI * 2); this.ctx.fill();

        this.ctx.fillStyle = '#0f172a';
        this.ctx.fillText("Remaining vs Time", 500, 520);
    }
}
