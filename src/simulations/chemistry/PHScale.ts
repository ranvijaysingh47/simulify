import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class PHScale extends Simulation {
    private volume: number = 0.5; // Liters
    private ph: number = 7.00;
    private substance: string = 'water';
    private liquidColor: number[] = [200, 200, 255]; // RGB
    private showMeter: boolean = true;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('button', 'Add Water', {}, () => this.addVolume());
        this.addControl('button', 'Drain', {}, () => this.drain());
        this.addControl('slider', 'Solute Amount', { min: 0, max: 10, step: 0.1, value: 5 }, (v) => this.setConcentration(v));
        this.addControl('checkbox', 'Show pH Meter', { checked: true }, (v) => this.showMeter = v);
    }

    setConcentration(val: number) {
        // Mocking: slider 0-5 is Acidic, 5-10 is Basic
        if (val < 5) {
            this.ph = 1 + (val / 5) * 6;
            this.substance = 'acid';
        } else {
            this.ph = 7 + ((val - 5) / 5) * 7;
            this.substance = 'base';
        }
        this.updateColor();
    }

    addVolume() {
        if (this.volume < 1.0) {
            this.volume += 0.1;
            // Dilution towards 7
            if (this.ph < 7) this.ph += 0.1;
            if (this.ph > 7) this.ph -= 0.1;
            this.updateColor();
        }
    }

    drain() {
        if (this.volume > 0.1) this.volume -= 0.1;
    }

    updateColor() {
        if (this.ph < 3) this.liquidColor = [255, 0, 0];
        else if (this.ph < 5) this.liquidColor = [255, 165, 0];
        else if (this.ph < 8) this.liquidColor = [0, 255, 0];
        else if (this.ph < 11) this.liquidColor = [0, 0, 255];
        else this.liquidColor = [128, 0, 128];
    }

    update() {
        this.updateData(`pH: ${this.ph.toFixed(2)}\nVolume: ${this.volume.toFixed(1)} L\nType: ${this.substance.toUpperCase()}`);
    }

    draw() {
        // Beaker
        const bx = 300, by = 400, w = 200, h = 300;

        // Liquid
        const liquidH = h * this.volume;
        this.ctx.fillStyle = `rgba(${this.liquidColor[0]}, ${this.liquidColor[1]}, ${this.liquidColor[2]}, 0.6)`;
        this.ctx.fillRect(bx, by - liquidH, w, liquidH);

        // Beaker outline
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(bx, by - h);
        this.ctx.lineTo(bx, by);
        this.ctx.lineTo(bx + w, by);
        this.ctx.lineTo(bx + w, by - h);
        this.ctx.stroke();

        // Meter probe
        if (this.showMeter) {
            this.ctx.fillStyle = '#666';
            this.ctx.fillRect(bx + 150, by - h - 50, 10, h + 20); // cord/stick
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(bx + 140, by - 40, 30, 40); // probe head

            // Meter Box
            this.ctx.fillStyle = '#333';
            this.ctx.fillRect(50, 50, 150, 80);
            this.ctx.fillStyle = '#b6ffa8'; // LCD
            this.ctx.fillRect(60, 60, 130, 60);
            this.ctx.fillStyle = 'black';
            this.ctx.font = '30px monospace';
            this.ctx.fillText(this.ph.toFixed(2), 80, 100);
        }
    }
}
