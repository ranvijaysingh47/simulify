import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

interface Particle {
    x: number;
    y: number;
    vx: number;
    status: 'reactant' | 'product';
}

export class ActivationEnergy extends Simulation {
    private ea: number = 50;
    private temp: number = 20;
    private particles: Particle[] = [];
    private reacted: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Barrier (Ea)', { min: 10, max: 100, step: 10, value: 50 }, v => this.ea = v);
        this.addControl('slider', 'Temperature', { min: 10, max: 100, step: 10, value: 20 }, v => { this.temp = v; this.resetP(); });
        this.addControl('button', 'Reset', {}, () => this.resetP());
        this.resetP();
    }

    resetP() {
        this.particles = [];
        this.reacted = 0;
    }

    update() {
        if (Math.random() < 0.1) {
            this.particles.push({
                x: 0, y: 350 + Math.random() * 20,
                vx: 2 + Math.random() * (this.temp / 5), // Kinetic Energy
                status: 'reactant'
            });
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;

            // Hill check at x=400
            if (p.x > 380 && p.x < 420 && p.status === 'reactant') {
                if (p.vx > (this.ea / 10)) {
                    p.status = 'product';
                } else {
                    p.vx *= -1;
                }
            }

            if (p.x > 800) {
                this.reacted++;
                this.particles.splice(i, 1);
            }
            if (p.x < 0) this.particles.splice(i, 1);
        }

        this.updateData(`Reactants converted: ${this.reacted}\nHigher Temperature = More particles with E > Ea`);
    }

    draw() {
        // Energy Diagram
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#333';
        this.ctx.beginPath();
        this.ctx.moveTo(0, 400);
        this.ctx.lineTo(300, 400); // Reactants
        // Hill
        const top = 400 - this.ea * 3;
        this.ctx.quadraticCurveTo(400, top, 500, 500); // Products lower (Exothermic)
        this.ctx.lineTo(800, 500);
        this.ctx.stroke();

        this.ctx.fillStyle = '#666';
        this.ctx.fillText("Reactants", 50, 450);
        this.ctx.fillText("Products", 600, 550);
        this.ctx.fillText(`Barrier (Ea)`, 380, top - 20);

        // Particles
        this.particles.forEach(p => {
            let y = 400;
            if (p.x > 300 && p.x < 500) {
                const dx = Math.abs(p.x - 400);
                if (dx < 100) y = top + (dx / 100) * (400 - top);
                if (p.x > 400 && p.status === 'product') {
                    y = top + ((p.x - 400) / 100) * (500 - top);
                }
            } else if (p.x >= 500) y = 500;

            this.drawSphere(p.x, y - 10, 6, p.status === 'reactant' ? 'blue' : 'green');
        });
    }
}
