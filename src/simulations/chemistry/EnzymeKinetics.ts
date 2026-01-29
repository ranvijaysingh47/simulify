import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class EnzymeKinetics extends Simulation {
    private substrates: { x: number, y: number, product: boolean }[] = [];
    private running = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        addControl('button', 'Start', {}, () => this.running = true);

        for (let i = 0; i < 20; i++) {
            this.substrates.push({
                x: Math.random() * 800,
                y: Math.random() * 600,
                product: false
            });
        }
    }

    update() {
        if (!this.running) return;

        this.substrates.forEach(s => {
            // Browninan motion
            s.x += (Math.random() - 0.5) * 5;
            s.y += (Math.random() - 0.5) * 5;

            // Check collision with enzyme
            const d = Math.hypot(s.x - 400, s.y - 300);
            if (d < 40 && !s.product) {
                s.product = true; // Reaction!
            }
        });

        const products = this.substrates.filter(s => s.product).length;
        this.updateData(`Products formed: ${products} / 20`);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Enzyme
        this.ctx.fillStyle = '#14b8a6';
        this.ctx.beginPath(); this.ctx.arc(400, 300, 40, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Enzyme", 400, 300);

        // Substrates
        this.substrates.forEach(s => {
            this.ctx.fillStyle = s.product ? '#22c55e' : '#a855f7';
            this.ctx.beginPath();
            if (s.product) {
                this.ctx.arc(s.x, s.y, 8, 0, Math.PI * 2); // Sphere product
            } else {
                this.ctx.fillRect(s.x - 8, s.y - 8, 16, 16); // Square substrate
            }
            this.ctx.fill();
        });
    }
}
