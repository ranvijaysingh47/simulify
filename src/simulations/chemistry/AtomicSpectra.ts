import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class AtomicSpectra extends Simulation {
    private element: 'hydrogen' | 'helium' | 'neon' = 'hydrogen';

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.addControl('button', 'Hydrogen', {}, () => this.element = 'hydrogen');
        this.addControl('button', 'Helium', {}, () => this.element = 'helium');
        this.addControl('button', 'Neon', {}, () => this.element = 'neon');
    }

    update() {
        this.updateData(`Element: ${this.element.toUpperCase()}\nEach element has a unique spectral signature.`);
    }

    draw() {
        let color = '#E1BEE7';
        let lines: { x: number, c: string }[] = [];

        if (this.element === 'hydrogen') {
            color = '#E1BEE7';
            lines = [{ x: 656, c: 'red' }, { x: 486, c: 'cyan' }, { x: 434, c: 'blue' }, { x: 410, c: 'violet' }];
        } else if (this.element === 'helium') {
            color = '#FFCCBC';
            lines = [{ x: 706, c: 'red' }, { x: 667, c: 'red' }, { x: 587, c: 'orange' }, { x: 501, c: 'green' }, { x: 492, c: 'cyan' }, { x: 447, c: 'blue' }];
        } else { // neon
            color = '#FFAB91';
            lines = [{ x: 640, c: 'red' }, { x: 638, c: 'red' }, { x: 633, c: 'orange' }, { x: 626, c: 'orange' }, { x: 616, c: 'orange' }, { x: 609, c: 'orange' }, { x: 607, c: 'orange' }, { x: 603, c: 'yellow' }, { x: 585, c: 'yellow' }];
        }

        // Discharge tube
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = color;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(100, 100, 600, 20);
        this.ctx.shadowBlur = 0;

        // Prism
        this.ctx.fillStyle = 'rgba(200, 200, 255, 0.5)';
        this.ctx.beginPath();
        this.ctx.moveTo(350, 150); this.ctx.lineTo(450, 350); this.ctx.lineTo(250, 350); this.ctx.fill();

        // Spectrum Scale 400nm - 700nm
        const sx = 100, sy = 500, sw = 600, sh = 50;
        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(sx, sy, sw, sh);

        lines.forEach(l => {
            const x = sx + ((l.x - 400) / 300) * sw;
            this.ctx.fillStyle = l.c;
            this.ctx.fillRect(x, sy, 4, sh);

            this.ctx.globalAlpha = 0.2;
            this.ctx.strokeStyle = l.c;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(400, 120);
            this.ctx.lineTo(350, 250);
            this.ctx.lineTo(x, sy);
            this.ctx.stroke();
            this.ctx.globalAlpha = 1;
        });
    }
}
