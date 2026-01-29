import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Electrolysis extends Simulation {
    private voltage = 0;
    private running = false;
    private bubblesLeft: { x: number, y: number }[] = [];
    private bubblesRight: { x: number, y: number }[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('slider', 'Voltage (V)', { min: 0, max: 12, value: 0 }, (v) => this.voltage = v);
        addControl('button', 'Start/Stop', {}, () => this.running = !this.running);
    }

    update() {
        if (this.running && this.voltage > 1.23) { // Min voltage for water electrolysis
            // Create bubbles
            if (Math.random() > 0.8) {
                this.bubblesLeft.push({ x: 350 + Math.random() * 20, y: 400 }); // H2 (Cathode -) -> 2x volume
                this.bubblesLeft.push({ x: 350 + Math.random() * 20, y: 405 });
            }
            if (Math.random() > 0.9) {
                this.bubblesRight.push({ x: 450 + Math.random() * 20, y: 400 }); // O2 (Anode +)
            }

            this.updateData(`Voltage: ${this.voltage}V (Reaction Active)\nCathode: Hydrogen Gas\nAnode: Oxygen Gas`);
        } else if (this.running) {
            this.updateData(`Voltage: ${this.voltage}V (Insufficient for H2O split)`);
        } else {
            this.updateData("Power off.");
        }

        // Animate bubbles
        const riseSpeed = 2;
        this.bubblesLeft.forEach(b => b.y -= riseSpeed);
        this.bubblesRight.forEach(b => b.y -= riseSpeed);

        // Cleanup
        this.bubblesLeft = this.bubblesLeft.filter(b => b.y > 200);
        this.bubblesRight = this.bubblesRight.filter(b => b.y > 200);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Beaker
        this.ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
        this.ctx.fillRect(300, 250, 200, 250);
        this.ctx.strokeStyle = '#334155';
        this.ctx.strokeRect(300, 250, 200, 250);

        // Electrodes
        this.ctx.fillStyle = '#64748b';
        this.ctx.fillRect(340, 200, 20, 200); // Left (Cathode)
        this.ctx.fillRect(440, 200, 20, 200); // Right (Anode)

        // Battery/Wire
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(350, 200); this.ctx.lineTo(350, 100); this.ctx.lineTo(450, 100); this.ctx.lineTo(450, 200);
        this.ctx.stroke();

        // Battery Symbol
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(380, 80, 40, 40);
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`${this.voltage}V`, 400, 105);

        // Bubbles
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        this.bubblesLeft.forEach(b => {
            this.ctx.beginPath(); this.ctx.arc(b.x, b.y, 4, 0, Math.PI * 2); this.ctx.fill();
        });
        this.bubblesRight.forEach(b => {
            this.ctx.beginPath(); this.ctx.arc(b.x, b.y, 4, 0, Math.PI * 2); this.ctx.fill();
        });

        // Labels
        this.ctx.fillStyle = '#0f172a';
        this.ctx.font = '14px Inter';
        this.ctx.fillText("- Cathode", 350, 470);
        this.ctx.fillText("+ Anode", 450, 470);
    }
}
