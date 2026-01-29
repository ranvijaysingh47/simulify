import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Polymerization extends Simulation {
    private monomers: { x: number, y: number, linked: boolean }[] = [];
    private chain: { x: number, y: number }[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        addControl('button', 'Add Monomer (Ethylene)', {}, () => this.addMonomer());
        addControl('button', 'Initiate Reaction', {}, () => this.link());
    }

    addMonomer() {
        this.monomers.push({
            x: Math.random() * 700 + 50,
            y: Math.random() * 500 + 50,
            linked: false
        });
    }

    link() {
        // Simple visual linking
        this.chain = this.monomers.map(m => ({ x: m.x, y: m.y }));
        this.monomers = [];
        // Arrange in a chaotic line
        this.chain.sort((a, b) => a.x - b.x);
        for (let i = 1; i < this.chain.length; i++) {
            // Pull closer
            const prev = this.chain[i - 1];
            const curr = this.chain[i];
            curr.x = prev.x + 30;
            curr.y = prev.y + (Math.random() - 0.5) * 20;
        }
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Monomers
        this.monomers.forEach(m => {
            this.ctx.fillStyle = '#3b82f6';
            this.ctx.beginPath(); this.ctx.arc(m.x, m.y, 10, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.fillStyle = 'white';
            this.ctx.font = '10px Inter';
            this.ctx.fillText("C=C", m.x - 8, m.y + 3);
        });

        // Chain
        if (this.chain.length > 0) {
            this.ctx.strokeStyle = '#1e3a8a';
            this.ctx.lineWidth = 8;
            this.ctx.beginPath();
            this.ctx.moveTo(this.chain[0].x, this.chain[0].y);
            this.chain.forEach(p => this.ctx.lineTo(p.x, p.y));
            this.ctx.stroke();

            this.chain.forEach(m => {
                this.ctx.fillStyle = '#f59e0b';
                this.ctx.beginPath(); this.ctx.arc(m.x, m.y, 10, 0, Math.PI * 2); this.ctx.fill();
            });
        }
    }
}
