import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class KineticsCatalysts extends Simulation {
    private activationEnergy = 0.5; // 0 to 1
    private hasCatalyst = false;
    private isReacting = false;
    private ball = { x: 50, y: 400 };

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('checkbox', 'Add Catalyst', { checked: false }, (v) => { this.hasCatalyst = v; this.resetBall(); });
        addControl('button', 'Start Reaction', {}, () => this.start());
        addControl('button', 'Reset', {}, () => this.resetBall());
    }

    start() {
        this.isReacting = true;
    }

    resetBall() {
        this.ball = { x: 50, y: 400 };
        this.isReacting = false;
    }

    update() {
        const energyBarrier = this.activationEnergy * (this.hasCatalyst ? 0.4 : 1.0);
        const hillHeight = 250 * energyBarrier; // Use activation energy for height

        if (this.isReacting) {
            this.ball.x += 2;

            // Y follows curve
            // Hill peak at x=300
            // Start y=400, Peak y=400-hillHeight, End y=500 (Exothermic)

            if (this.ball.x < 300) {
                // Going up
                const t = (this.ball.x - 50) / 250;
                // Sinusoid for smooth hill
                this.ball.y = 400 - Math.sin(t * Math.PI / 2) * hillHeight;
            } else if (this.ball.x < 600) {
                // Going down
                const t = (this.ball.x - 300) / 300;
                const startY = 400 - hillHeight;
                this.ball.y = startY + t * (hillHeight + 100); // Drop 100px lower than start
            } else {
                this.isReacting = false;
                this.updateData("Reaction Complete! Energy Released.");
            }
        }

        this.updateData(this.hasCatalyst ? "Catalyst Added: Lower Activation Energy" : "No Catalyst: High Barrier");
    }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw landscape
        this.ctx.beginPath();
        this.ctx.moveTo(0, 420);
        this.ctx.lineTo(50, 420);

        const hillHeight = this.hasCatalyst ? 100 : 250;

        // Draw Curve
        // Bezier to peak
        this.ctx.quadraticCurveTo(175, 420 - hillHeight * 2, 300, 420 - hillHeight);
        // Bezier to end
        this.ctx.quadraticCurveTo(450, 420, 600, 520);
        this.ctx.lineTo(800, 520);
        this.ctx.lineTo(800, 600);
        this.ctx.lineTo(0, 600);
        this.ctx.fillStyle = '#e2e8f0';
        this.ctx.fill();

        this.ctx.strokeStyle = '#64748b';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // Draw Ball (Molecule)
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x, this.ball.y, 20, 0, Math.PI * 2);
        this.ctx.fillStyle = '#a855f7';
        this.ctx.fill();

        // Labels
        this.ctx.fillStyle = '#334155';
        this.ctx.font = '16px Inter';
        this.ctx.fillText("Reactants", 50, 450);
        this.ctx.fillText("Products", 600, 550);
        this.ctx.fillText("Activation Energy", 300, 420 - hillHeight - 20);

        // Dotted line for uncatalyzed if catalyzed is showing
        if (this.hasCatalyst) {
            this.ctx.setLineDash([5, 5]);
            this.ctx.strokeStyle = '#cbd5e1';
            this.ctx.beginPath();
            this.ctx.moveTo(50, 420);
            this.ctx.quadraticCurveTo(175, 420 - 500, 300, 420 - 250);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
    }
}
