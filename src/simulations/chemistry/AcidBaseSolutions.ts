import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

interface Molecule {
    pos: Vector2;
    angle: number;
    dissociated: boolean;
}

export class AcidBaseSolutions extends Simulation {
    private type: 'strong-acid' | 'weak-acid' | 'strong-base' | 'weak-base' = 'weak-acid';
    private molecules: Molecule[] = [];
    private ions: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.initMolecules();

        this.addControl('button', 'Strong Acid', {}, () => { this.type = 'strong-acid'; this.initMolecules(); });
        this.addControl('button', 'Weak Acid', {}, () => { this.type = 'weak-acid'; this.initMolecules(); });
        this.addControl('button', 'Strong Base', {}, () => { this.type = 'strong-base'; this.initMolecules(); });
    }

    initMolecules() {
        this.molecules = [];
        for (let i = 0; i < 30; i++) {
            this.molecules.push({
                pos: new Vector2(Math.random() * 400 + 200, Math.random() * 250 + 250), // in beaker
                angle: Math.random() * Math.PI * 2,
                dissociated: false
            });
        }
    }

    update() {
        let dissProb = 0;
        if (this.type === 'strong-acid' || this.type === 'strong-base') dissProb = 1.0;
        else dissProb = 0.2; // Weak

        let ions = 0;
        this.molecules.forEach(m => {
            if (Math.random() < 0.05) {
                if (dissProb === 1) m.dissociated = true;
                else m.dissociated = (Math.random() < 0.2);
            }
            if (m.dissociated) ions++;

            m.pos.x += Math.random() - 0.5;
            m.pos.y += Math.random() - 0.5;
        });

        this.updateData(`Type: ${this.type}\nDissociated Ions: ${ions}/${this.molecules.length}\nConductivity: ${ions > 20 ? 'High (Bulb Bright)' : 'Low (Bulb Dim)'}`);
        this.ions = ions;
    }

    draw() {
        // Beaker
        this.ctx.fillStyle = '#E3F2FD';
        this.ctx.fillRect(200, 250, 400, 250);
        this.ctx.strokeRect(200, 250, 400, 250);

        // Molecules
        this.molecules.forEach(m => {
            if (!m.dissociated) {
                // Combined
                this.drawSphere(m.pos.x, m.pos.y, 8, '#555');
                this.drawSphere(m.pos.x + 10, m.pos.y, 6, '#999');
            } else {
                // Separated
                this.drawSphere(m.pos.x - 10, m.pos.y - 5, 6, 'red');
                this.ctx.fillStyle = 'white';
                this.ctx.fillText("+", m.pos.x - 13, m.pos.y);

                this.drawSphere(m.pos.x + 10, m.pos.y + 5, 8, 'blue');
                this.ctx.fillStyle = 'white';
                this.ctx.fillText("-", m.pos.x + 7, m.pos.y + 10);
            }
        });

        this.drawCircuit();
    }

    drawCircuit() {
        // Lightbulb circuit (conductivity)
        this.ctx.strokeStyle = '#333';
        this.ctx.beginPath();
        // Electrodes
        this.ctx.moveTo(300, 250); this.ctx.lineTo(300, 400);
        this.ctx.moveTo(500, 250); this.ctx.lineTo(500, 400);
        // Wire to bulb
        this.ctx.moveTo(300, 250); this.ctx.lineTo(300, 100); this.ctx.lineTo(380, 100);
        this.ctx.moveTo(500, 250); this.ctx.lineTo(500, 100); this.ctx.lineTo(420, 100);
        this.ctx.stroke();

        // Bulb
        const intensity = this.ions / 30; // 0 to 1
        this.ctx.fillStyle = `rgba(255, 255, 0, ${0.2 + intensity * 0.8})`;
        this.ctx.beginPath();
        this.ctx.arc(400, 100, 30, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Rays
        if (intensity > 0.5) {
            this.ctx.strokeStyle = 'orange';
            this.ctx.beginPath();
            for (let i = 0; i < 8; i++) {
                const a = i * Math.PI / 4;
                this.ctx.moveTo(400 + Math.cos(a) * 40, 100 + Math.sin(a) * 40);
                this.ctx.lineTo(400 + Math.cos(a) * 60, 100 + Math.sin(a) * 60);
            }
            this.ctx.stroke();
        }
    }

    reset() {
        this.type = 'weak-acid';
        this.initMolecules();
    }
}
