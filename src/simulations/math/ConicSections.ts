import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class ConicSections extends Simulation {
    private e: number = 0.5; // Eccentricity
    private p: number = 100; // Distance from focus to directrix

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Eccentricity (e)', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.e = v);
        this.addControl('slider', 'Parameter (p)', { min: 50, max: 200, step: 10, value: 100 }, v => this.p = v);
    }

    update() {
        let type = '';
        if (this.e === 0) type = 'Circle';
        else if (this.e < 1) type = 'Ellipse';
        else if (this.e === 1) type = 'Parabola';
        else type = 'Hyperbola';

        this.updateData(`Shape: ${type}\nEccentricity: ${this.e}\nParameter: ${this.p}`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.ctx.translate(cx, cy);

        // Draw Focus
        this.ctx.fillStyle = 'red';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 4, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillText("F", 5, 5);

        // Draw Directrix
        this.ctx.strokeStyle = 'blue';
        this.ctx.beginPath();
        this.ctx.moveTo(this.p, -300);
        this.ctx.lineTo(this.p, 300);
        this.ctx.stroke();
        this.ctx.fillStyle = 'blue';
        this.ctx.fillText("Directrix", this.p + 5, -50);

        // Draw Curve
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        let first = true;
        for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
            const r = (this.e * this.p) / (1 + this.e * Math.cos(angle));

            // Avoid asymptotes
            if (r > 1000 || r < -1000) {
                first = true;
                continue;
            }

            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);

            if (first) {
                this.ctx.moveTo(x, y);
                first = false;
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    reset() {
        this.e = 0.5;
    }
}
