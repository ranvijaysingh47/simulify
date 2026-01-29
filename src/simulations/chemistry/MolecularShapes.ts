import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class MolecularShapes extends Simulation {
    private bonds: number = 2; // Number of atoms bonded to central
    private lonePairs: number = 0;
    // private angleX: number = 0; // Unused
    private angleY: number = 0;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addControl('slider', 'Bonded Atoms', { min: 1, max: 6, step: 1, value: 2 }, v => this.bonds = v);
        this.addControl('slider', 'Lone Pairs', { min: 0, max: 2, step: 1, value: 0 }, v => this.lonePairs = v);
    }

    update() {
        const total = this.bonds + this.lonePairs;
        let shape = "Unknown";
        if (total === 2) shape = "Linear";
        else if (total === 3) shape = (this.lonePairs === 1) ? "Bent" : "Trigonal Planar";
        else if (total === 4) {
            if (this.lonePairs === 0) shape = "Tetrahedral";
            else if (this.lonePairs === 1) shape = "Trigonal Pyramidal";
            else shape = "Bent";
        }
        else if (total === 5) shape = "Trigonal Bipyramidal";
        else if (total === 6) shape = "Octahedral";

        this.updateData(`Geometry: ${shape}\nSteric Number: ${total}\nDrag to Rotate`);
        this.angleY += 0.01; // Auto rotate
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        const points = this.getGeometryPoints(this.bonds + this.lonePairs);

        // Sort by Z for depth
        const projected = points.map((p, i) => {
            // Rotate
            let x = p.x * Math.cos(this.angleY) - p.z * Math.sin(this.angleY);
            let z = p.x * Math.sin(this.angleY) + p.z * Math.cos(this.angleY);
            return { x: x, y: p.y, z: z, type: (i < this.bonds ? 'atom' : 'lone') };
        });

        projected.sort((a, b) => a.z - b.z); // Painters algo

        // Draw Central Atom
        this.ctx.fillStyle = 'purple';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 20, 0, Math.PI * 2);
        this.ctx.fill();

        projected.forEach(p => {
            const scale = 100;
            const px = cx + p.x * scale;
            const py = cy + p.y * scale;

            // Bond line
            this.ctx.strokeStyle = '#aaa';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.lineTo(px, py);
            this.ctx.stroke();

            if (p.type === 'atom') {
                this.drawSphere(px, py, 15, 'white');
                this.ctx.stroke();
            } else {
                // Lone pair lobe
                this.ctx.fillStyle = 'rgba(255, 192, 203, 0.7)'; // Pinkish
                this.ctx.beginPath();
                this.ctx.ellipse(px, py, 20, 15, Math.atan2(py - cy, px - cx), 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
    }

    getGeometryPoints(n: number): { x: number, y: number, z: number }[] {
        if (n === 2) return [{ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 }];
        if (n === 3) return [{ x: 0, y: -1, z: 0 }, { x: 0.866, y: 0.5, z: 0 }, { x: -0.866, y: 0.5, z: 0 }];
        if (n === 4) return [
            { x: 0, y: -1, z: 0 },
            { x: 0.94, y: 0.33, z: 0 },
            { x: -0.47, y: 0.33, z: 0.81 },
            { x: -0.47, y: 0.33, z: -0.81 }
        ];
        if (n === 5) return [
            { x: 0, y: -1, z: 0 }, { x: 0, y: 1, z: 0 },
            { x: 1, y: 0, z: 0 }, { x: -0.5, y: 0, z: 0.866 }, { x: -0.5, y: 0, z: -0.866 }
        ];
        if (n === 6) return [
            { x: 0, y: -1, z: 0 }, { x: 0, y: 1, z: 0 },
            { x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 },
            { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }
        ];
        return [];
    }

    reset() {
        this.bonds = 2;
        this.lonePairs = 0;
    }
}
