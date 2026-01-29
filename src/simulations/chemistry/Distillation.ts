import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class Distillation extends Simulation {
    private temp = 25;
    private mixLevel = 100; // mL
    private distillateLevel = 0; // mL
    private alcoholBoilingPoint = 78;
    private waterBoilingPoint = 100;
    private bubbles: { x: number, y: number, r: number, speed: number }[] = [];
    private drips: { x: number, y: number }[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        addControl('slider', 'Heat (Temperature)', { min: 25, max: 120, step: 1, value: 25 }, (v) => this.temp = v);
        addControl('button', 'Reset', {}, () => this.reset());
    }

    update() {
        // Distillation logic
        const boilingAlcohol = this.temp >= this.alcoholBoilingPoint;
        const boilingWater = this.temp >= this.waterBoilingPoint;

        let evaporationRate = 0;
        if (boilingWater) evaporationRate = 0.5;
        else if (boilingAlcohol && this.mixLevel > 50) evaporationRate = 0.3; // 50 is roughly where only water left

        if (this.mixLevel > 0 && evaporationRate > 0) {
            this.mixLevel -= evaporationRate * 0.1;
            this.distillateLevel += evaporationRate * 0.1;

            // Visuals
            if (Math.random() < 0.2) {
                this.bubbles.push({
                    x: 100 + Math.random() * 80,
                    y: 400,
                    r: Math.random() * 3 + 2,
                    speed: 1 + Math.random()
                });
            }
            if (Math.random() < 0.1) {
                this.drips.push({ x: 500, y: 150 });
            }
        }

        // Bubbles
        this.bubbles.forEach(b => {
            b.y -= b.speed;
        });
        this.bubbles = this.bubbles.filter(b => b.y > 300);

        // Drips
        this.drips.forEach(d => {
            d.y += 3;
        });
        this.drips = this.drips.filter(d => d.y < 400);

        this.updateData(`Temperature: ${this.temp}°C\nMixture: ${this.mixLevel.toFixed(1)} mL\nDistillate: ${this.distillateLevel.toFixed(1)} mL`);
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Flask (Start)
        this.drawFlask(140, 420, this.mixLevel, '#a855f7');

        // Condenser
        this.ctx.strokeStyle = '#94a3b8';
        this.ctx.lineWidth = 10;
        this.ctx.beginPath();
        this.ctx.moveTo(140, 250);
        this.ctx.lineTo(140, 150);
        this.ctx.lineTo(500, 250); // Down slope
        this.ctx.lineTo(500, 350);
        this.ctx.stroke();

        // Beaker (End)
        this.drawBeaker(500, 420, this.distillateLevel, '#e2e8f0');

        // Draw bubbles
        this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
        this.bubbles.forEach(b => {
            this.ctx.beginPath();
            this.ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Draw Drips
        this.ctx.fillStyle = '#a855f7';
        this.drips.forEach(d => {
            this.ctx.beginPath();
            this.ctx.arc(d.x, d.y, 3, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Text
        this.ctx.fillStyle = '#475569';
        this.ctx.font = '14px Inter';
        this.ctx.fillText("Mixture", 110, 450);
        this.ctx.fillText("Distillate", 470, 450);
    }

    drawFlask(x: number, y: number, level: number, color: string) {
        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 60, 0, Math.PI * 2);
        this.ctx.stroke();

        // Fill liquid
        const h = Math.min(60, level * 0.6);
        if (h > 0) {
            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.arc(x, y, 58, Math.PI - Math.acos(1 - h / 60), Math.PI * 2 + Math.acos(1 - h / 60), false);
            this.ctx.fill();
        }
    }

    drawBeaker(x: number, y: number, level: number, color: string) {
        this.ctx.strokeStyle = '#334155';
        this.ctx.strokeRect(x - 30, y - 40, 60, 80);

        // Liquid
        const h = Math.min(80, level * 0.8);
        if (h > 0) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x - 28, y + 40 - h, 56, h);
        }
    }

    reset() {
        this.temp = 25;
        this.mixLevel = 100;
        this.distillateLevel = 0;
        this.bubbles = [];
        this.drips = [];
    }
}
