import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class EndothermicExothermic extends Simulation {
    private type: 'exo' | 'endo' = 'exo';
    private progress = 0;
    private running = false;
    private temp = 25;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('button', 'Exothermic (Fire)', {}, () => { this.type = 'exo'; this.reset(); });
        addControl('button', 'Endothermic (Ice Pack)', {}, () => { this.type = 'endo'; this.reset(); });
        addControl('button', 'Start', {}, () => this.running = true);
        this.reset();
    }

    reset() {
        this.progress = 0;
        this.running = false;
        this.temp = 25;
        this.updateData(this.type === 'exo' ? "Exothermic: Releases Heat" : "Endothermic: Absorbs Heat");
    }

    update() {
        if (this.running && this.progress < 100) {
            this.progress += 0.5;

            if (this.type === 'exo') {
                this.temp += 0.5; // Heats up surroundings
            } else {
                this.temp -= 0.2; // Cools down surroundings
            }
        }
        this.updateData(`Surrounding Temp: ${this.temp.toFixed(1)}°C`);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Beaker
        this.ctx.fillStyle = this.getSolutionColor();
        this.ctx.fillRect(300, 300, 200, 200);
        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(300, 300, 200, 200);

        // Thermometer
        this.drawThermometer(550, 300, this.temp);

        // Energy Diagram (Small inset)
        this.drawEnergyProfile(100, 100);

        // Effects
        if (this.running && this.progress < 100) {
            if (this.type === 'exo') {
                // Heat waves out
                this.drawHeatWaves(400, true);
            } else {
                // Heat arrows in
                this.drawHeatWaves(400, false);
            }
        }
    }

    getSolutionColor() {
        // Map temp to color (Blue -> Red)
        const t = (this.temp - 0) / 100;
        const r = Math.min(255, Math.max(0, t * 255 * 2));
        const b = Math.min(255, Math.max(0, (1 - t) * 255 * 2));
        return `rgba(${r}, 0, ${b}, 0.3)`;
    }

    drawThermometer(x: number, y: number, temp: number) {
        this.ctx.fillStyle = '#e2e8f0';
        this.ctx.fillRect(x, y, 20, 200);
        this.ctx.strokeRect(x, y, 20, 200);

        const h = Math.min(200, Math.max(0, temp * 2));
        this.ctx.fillStyle = '#ef4444';
        this.ctx.fillRect(x + 2, y + 200 - h, 16, h);
    }

    drawEnergyProfile(x: number, y: number) {
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + 100); this.ctx.lineTo(x, y); // Y axis (Energy)
        this.ctx.moveTo(x, y + 100); this.ctx.lineTo(x + 100, y + 100); // X axis (Time)
        this.ctx.stroke();

        this.ctx.beginPath();
        // Reactants
        this.ctx.moveTo(x, y + 50);
        this.ctx.lineTo(x + 30, y + 50);

        // Hill
        this.ctx.quadraticCurveTo(x + 50, y, x + 70, this.type === 'exo' ? y + 80 : y + 20);

        // Products
        this.ctx.lineTo(x + 100, this.type === 'exo' ? y + 80 : y + 20);

        this.ctx.fillStyle = this.type === 'exo' ? '#f59e0b' : '#3b82f6';
        this.ctx.strokeStyle = this.ctx.fillStyle;
        this.ctx.stroke();
    }

    drawHeatWaves(x: number, out: boolean) {
        this.ctx.strokeStyle = out ? '#ef4444' : '#3b82f6';
        this.ctx.lineWidth = 2;

        for (let i = 0; i < 3; i++) {
            this.ctx.beginPath();
            const r = 30 + i * 15 + (Date.now() % 500) / 20;
            this.ctx.arc(x, 400, r, -Math.PI / 2 - 0.5, -Math.PI / 2 + 0.5);
            this.ctx.stroke();
        }
    }
}
