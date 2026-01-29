import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class ElectronConfiguration extends Simulation {
    private element = 'H';
    private atomicNumber = 1;
    private orbitals = [
        { name: '1s', capacity: 2, energy: 1, electrons: 0 },
        { name: '2s', capacity: 2, energy: 2, electrons: 0 },
        { name: '2p', capacity: 6, energy: 3, electrons: 0 },
        { name: '3s', capacity: 2, energy: 4, electrons: 0 },
        { name: '3p', capacity: 6, energy: 5, electrons: 0 },
        { name: '4s', capacity: 2, energy: 6, electrons: 0 },
        { name: '3d', capacity: 10, energy: 7, electrons: 0 },
    ];

    private elements: Record<string, number> = {
        'H': 1, 'He': 2, 'Li': 3, 'Be': 4, 'B': 5, 'C': 6, 'N': 7, 'O': 8, 'F': 9, 'Ne': 10,
        'Na': 11, 'Mg': 12, 'Al': 13, 'Si': 14, 'P': 15, 'S': 16, 'Cl': 17, 'Ar': 18,
        'K': 19, 'Ca': 20, 'Sc': 21, 'Ti': 22, 'V': 23, 'Cr': 24, 'Mn': 25, 'Fe': 26
    };

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        addControl('slider', 'Atomic Number', { min: 1, max: 26, value: 1, step: 1 }, (val) => {
            this.atomicNumber = val;
            this.element = Object.keys(this.elements).find(key => this.elements[key] === val) || '?';
            this.fillOrbitals();
        });

        this.fillOrbitals();
    }

    fillOrbitals() {
        // Reset
        this.orbitals.forEach(o => o.electrons = 0);

        let remaining = this.atomicNumber;

        for (const orbital of this.orbitals) {
            if (remaining <= 0) break;
            const fill = Math.min(remaining, orbital.capacity);
            orbital.electrons = fill;
            remaining -= fill;
        }

        const configStr = this.orbitals
            .filter(o => o.electrons > 0)
            .map(o => `${o.name}^${o.electrons}`)
            .join(' ');

        this.updateData(`Element: ${this.element} (Z=${this.atomicNumber})\nConfig: ${configStr}`);
    }

    update() { }

    draw() {
        this.ctx.fillStyle = '#f8fafc';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw Energy Axis
        this.ctx.strokeStyle = '#94a3b8';
        this.ctx.beginPath();
        this.ctx.moveTo(50, 550);
        this.ctx.lineTo(50, 50);
        this.ctx.stroke();

        this.ctx.fillStyle = '#64748b';
        this.ctx.font = '14px Inter';
        this.ctx.save();
        this.ctx.translate(30, 300);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Energy', 0, 0);
        this.ctx.restore();

        // Draw Orbitals
        let startX = 100;
        let startY = 500;

        // Remove unused index 'i'
        this.orbitals.forEach((orb) => {
            // Visualize orbitals as boxes
            // s = 1 box, p = 3 boxes, d = 5 boxes
            const numBoxes = orb.capacity / 2;
            const boxSize = 40;
            const gap = 10;
            const orbitalY = startY - (orb.energy * 60); // Height depends on energy level

            this.ctx.fillStyle = '#334155';
            this.ctx.fillText(orb.name, startX + (numBoxes * boxSize) / 2, orbitalY + boxSize + 20);

            for (let b = 0; b < numBoxes; b++) {
                const bx = startX + b * (boxSize + gap);
                const by = orbitalY;

                this.ctx.strokeStyle = '#475569';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(bx, by, boxSize, boxSize);

                // Draw Electrons
                let electronsInThisSubshell = orb.electrons;

                const hasUp = (b < electronsInThisSubshell && electronsInThisSubshell <= numBoxes) ||
                    (electronsInThisSubshell > numBoxes);

                const hasDown = (electronsInThisSubshell > numBoxes) && (b < electronsInThisSubshell - numBoxes);

                if (hasUp || (electronsInThisSubshell <= numBoxes && b < electronsInThisSubshell)) {
                    this.drawArrow(bx + boxSize / 2 - 5, by + boxSize - 5, true);
                }

                if (hasDown) {
                    this.drawArrow(bx + boxSize / 2 + 5, by + 5, false);
                }
            }
        });
    }

    drawArrow(x: number, y: number, up: boolean) {
        this.ctx.strokeStyle = up ? '#ef4444' : '#3b82f6';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        if (up) {
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x, y - 25);
            this.ctx.lineTo(x - 3, y - 20);
            this.ctx.moveTo(x, y - 25);
            this.ctx.lineTo(x + 3, y - 20);
        } else {
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x, y + 25);
            this.ctx.lineTo(x - 3, y + 20);
            this.ctx.moveTo(x, y + 25);
            this.ctx.lineTo(x + 3, y + 20);
        }
        this.ctx.stroke();
    }
}
