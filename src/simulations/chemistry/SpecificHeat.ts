import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class SpecificHeat extends Simulation {
    private material: 'water' | 'oil' | 'iron' = 'water';
    private mass: number = 100;
    private heatAdded: number = 0;
    private temp: number = 20;
    private heating: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('button', 'Water (4.18)', {}, () => { this.material = 'water'; this.reset(); });
        this.addControl('button', 'Oil (2.0)', {}, () => { this.material = 'oil'; this.reset(); });
        this.addControl('button', 'Iron (0.45)', {}, () => { this.material = 'iron'; this.reset(); });
        this.addControl('button', 'Add Heat', {}, () => this.heating = true);
        this.addControl('button', 'Stop', {}, () => this.heating = false);
    }

    reset() { this.heatAdded = 0; this.temp = 20; }

    update() {
        let c = 4.18;
        if (this.material === 'oil') c = 2.0;
        if (this.material === 'iron') c = 0.45;

        if (this.heating) {
            this.heatAdded += 100; // J per frame
            const deltaT = 100 / (this.mass * c);
            this.temp += deltaT;
        }

        this.updateData(`Material: ${this.material} (c = ${c} J/g°C)\nHeat Added: ${this.heatAdded} J\nTemperature: ${this.temp.toFixed(1)} °C`);
    }

    draw() {
        // Beaker / Block
        this.ctx.fillStyle = this.material === 'iron' ? '#777' : (this.material === 'oil' ? '#FFC107' : '#2196F3');
        if (this.material === 'iron') {
            this.ctx.fillRect(350, 300, 100, 100);
        } else {
            // Beaker
            this.ctx.strokeRect(300, 250, 200, 200);
            this.ctx.fillRect(301, 300, 198, 150);
        }

        // Burner
        this.ctx.fillStyle = '#555';
        this.ctx.fillRect(350, 460, 100, 40);
        if (this.heating) {
            this.ctx.fillStyle = 'orange';
            this.ctx.beginPath();
            this.ctx.moveTo(360, 460); this.ctx.lineTo(400, 400); this.ctx.lineTo(440, 460);
            this.ctx.fill();
        }

        // Thermometer
        const h = Math.min(200, (this.temp / 100) * 200);
        this.ctx.fillStyle = 'white'; this.ctx.fillRect(550, 200, 20, 200);
        this.ctx.fillStyle = 'red'; this.ctx.fillRect(555, 400 - h, 10, h);
    }
}
