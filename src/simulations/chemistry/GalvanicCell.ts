import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class GalvanicCell extends Simulation {
    private voltage: number = 1.10; // Zn-Cu
    private connected: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('checkbox', 'Connect Circuit', { checked: false }, v => this.connected = v);
    }

    update() {
        const i = this.connected ? 0.5 : 0;
        this.updateData(`Voltage: ${this.voltage} V\nCurrent: ${i} A\nElectron Flow: Zn → Cu`);
    }

    draw() {
        // Beakers
        this.ctx.fillStyle = 'rgba(200,200,200,0.5)';
        this.ctx.fillRect(150, 250, 200, 250); // Zn
        this.ctx.fillRect(450, 250, 200, 250); // Cu

        // Electrodes
        this.ctx.fillStyle = 'gray'; this.ctx.fillRect(200, 200, 40, 250); // Zn
        this.ctx.fillStyle = '#B87333'; this.ctx.fillRect(560, 200, 40, 250); // Cu

        // Salt Bridge
        this.ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        this.ctx.lineWidth = 30;
        this.ctx.beginPath();
        this.ctx.moveTo(250, 300); this.ctx.quadraticCurveTo(400, 100, 550, 300);
        this.ctx.stroke();

        // Wire
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(220, 200); this.ctx.lineTo(220, 100); this.ctx.lineTo(580, 100); this.ctx.lineTo(580, 200);
        this.ctx.stroke();

        // Voltmeter
        this.ctx.fillStyle = '#333';
        this.ctx.beginPath(); this.ctx.arc(400, 100, 40, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.connected ? "1.10V" : "0.00V", 370, 105);

        // Electrons
        if (this.connected) {
            const t = Date.now() / 500;
            const pos = (t % 1) * 360; // linear approx distance
            const ex = 220 + pos;
            if (ex < 580) {
                this.drawSphere(ex, 100, 5, 'yellow');
            }
        }
    }
}
