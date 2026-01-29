import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

interface Atom {
    id: number;
    symbol: string;
    x: number;
    y: number;
    valence: number;
    color: string;
}

interface Bond {
    atom1: Atom;
    atom2: Atom;
    type: 1 | 2 | 3;
}

export class LewisStructures extends Simulation {
    private atoms: Atom[] = [];
    private bonds: Bond[] = [];
    private nextId = 1;

    private mode: 'add' | 'bond' | 'delete' = 'add';
    private currentElement = 'H';
    private selectedAtom: Atom | null = null;
    private hoveredAtom: Atom | null = null;

    private mouseX = 0;
    private mouseY = 0;

    private valenceTable: Record<string, number> = {
        'H': 1, 'C': 4, 'N': 5, 'O': 6, 'F': 7, 'Cl': 7
    };

    // Bound handlers for cleanup
    private _mouseDownHandler: (e: MouseEvent) => void;
    private _mouseMoveHandler: (e: MouseEvent) => void;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        // Bind handlers
        this._mouseDownHandler = this.onMouseDown.bind(this);
        this._mouseMoveHandler = this.onMouseMove.bind(this);

        // Attach listeners
        this.canvas.addEventListener('mousedown', this._mouseDownHandler);
        this.canvas.addEventListener('mousemove', this._mouseMoveHandler);

        // Controls
        addControl('button', 'Clear All', {}, () => this.reset());

        addControl('button', 'Mode: Add Atom', {}, () => {
            this.mode = 'add';
            this.selectedAtom = null;
            this.updateData("Click to place atoms.");
        });
        addControl('button', 'Mode: Create Bond', {}, () => {
            this.mode = 'bond';
            this.selectedAtom = null;
            this.updateData("Click two atoms to connect them.");
        });
        addControl('button', 'Mode: Delete', {}, () => {
            this.mode = 'delete';
            this.selectedAtom = null;
            this.updateData("Click an atom to remove it.");
        });

        addControl('button', 'Select H', {}, () => this.setElement('H'));
        addControl('button', 'Select C', {}, () => this.setElement('C'));
        addControl('button', 'Select N', {}, () => this.setElement('N'));
        addControl('button', 'Select O', {}, () => this.setElement('O'));

        this.updateData("Lewis Structure Builder Refactored. Select mode and elements.");
    }

    setElement(el: string) {
        this.currentElement = el;
        this.mode = 'add';
        this.updateData(`Selected Element: ${el}. Click to add.`);
    }

    getMousePos(e: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    }

    onMouseMove(e: MouseEvent) {
        const { x, y } = this.getMousePos(e);
        this.mouseX = x;
        this.mouseY = y;

        // Find hovered atom
        this.hoveredAtom = this.atoms.find(a => Math.hypot(a.x - x, a.y - y) < 30) || null;
    }

    onMouseDown(e: MouseEvent) {
        const { x, y } = this.getMousePos(e);

        if (this.mode === 'add') {
            // Check if too close to existing
            if (!this.hoveredAtom) {
                this.atoms.push({
                    id: this.nextId++,
                    symbol: this.currentElement,
                    x,
                    y,
                    valence: this.valenceTable[this.currentElement],
                    color: this.currentElement === 'H' ? '#3b82f6' : '#a855f7'
                });
            }
        } else if (this.mode === 'bond') {
            if (this.hoveredAtom) {
                if (!this.selectedAtom) {
                    this.selectedAtom = this.hoveredAtom;
                    this.updateData(`Start bond from ${this.selectedAtom.symbol}...`);
                } else {
                    if (this.selectedAtom !== this.hoveredAtom) {
                        this.toggleBond(this.selectedAtom, this.hoveredAtom);
                        this.selectedAtom = null;
                        this.updateData("Bond updated.");
                    }
                }
            } else {
                this.selectedAtom = null; // Click empty space to cancel
            }
        } else if (this.mode === 'delete') {
            if (this.hoveredAtom) {
                this.removeAtom(this.hoveredAtom);
            }
        }
    }

    toggleBond(a: Atom, b: Atom) {
        // Check existing
        const existingIdx = this.bonds.findIndex(bond =>
            (bond.atom1 === a && bond.atom2 === b) || (bond.atom1 === b && bond.atom2 === a)
        );

        if (existingIdx >= 0) {
            // Cycle type: 1 -> 2 -> 3 -> delete
            const bond = this.bonds[existingIdx];
            if (bond.type < 3) {
                bond.type++;
            } else {
                this.bonds.splice(existingIdx, 1);
            }
        } else {
            this.bonds.push({ atom1: a, atom2: b, type: 1 });
        }
    }

    removeAtom(atom: Atom) {
        this.atoms = this.atoms.filter(a => a !== atom);
        this.bonds = this.bonds.filter(b => b.atom1 !== atom && b.atom2 !== atom);
    }

    update() {
        // No physics, just static builder
    }

    draw() {
        // Background
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Grid
        this.ctx.strokeStyle = '#f1f5f9';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < this.width; i += 50) {
            this.ctx.beginPath(); this.ctx.moveTo(i, 0); this.ctx.lineTo(i, this.height); this.ctx.stroke();
        }
        for (let i = 0; i < this.height; i += 50) {
            this.ctx.beginPath(); this.ctx.moveTo(0, i); this.ctx.lineTo(this.width, i); this.ctx.stroke();
        }

        // Draw Bonds
        this.bonds.forEach(bond => {
            this.drawBond(bond);
        });

        // Draw bonding temp line
        if (this.mode === 'bond' && this.selectedAtom) {
            this.ctx.strokeStyle = '#cbd5e1';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(this.selectedAtom.x, this.selectedAtom.y);
            this.ctx.lineTo(this.mouseX, this.mouseY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        // Draw ghost atom if adding
        if (this.mode === 'add' && !this.hoveredAtom) {
            this.ctx.globalAlpha = 0.5;
            this.ctx.fillStyle = '#94a3b8';
            this.ctx.beginPath();
            this.ctx.arc(this.mouseX, this.mouseY, 20, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.globalAlpha = 1.0;
        }

        // Draw Atoms
        this.atoms.forEach(atom => {
            const isHovered = atom === this.hoveredAtom;
            const isSelected = atom === this.selectedAtom;

            const radius = isHovered ? 28 : 24;

            this.ctx.beginPath();
            this.ctx.arc(atom.x, atom.y, radius, 0, Math.PI * 2);

            if (isSelected) this.ctx.fillStyle = '#f59e0b';
            else if (isHovered && this.mode === 'delete') this.ctx.fillStyle = '#ef4444';
            else if (isHovered) this.ctx.fillStyle = '#60a5fa'; // Lighter blue
            else this.ctx.fillStyle = atom.color;

            this.ctx.fill();
            this.ctx.strokeStyle = '#1e3a8a';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Text
            this.ctx.fillStyle = 'white';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.font = 'bold 18px Inter';
            this.ctx.fillText(atom.symbol, atom.x, atom.y);
        });
    }

    drawBond(bond: Bond) {
        const { atom1, atom2, type } = bond;
        const dx = atom2.x - atom1.x;
        const dy = atom2.y - atom1.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 1) return;

        const nx = -dy / dist;
        const ny = dx / dist;

        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 4;
        this.ctx.lineCap = 'round';

        if (type === 1) {
            this.ctx.beginPath();
            this.ctx.moveTo(atom1.x, atom1.y);
            this.ctx.lineTo(atom2.x, atom2.y);
            this.ctx.stroke();
        } else if (type === 2) {
            const off = 6;
            this.ctx.beginPath();
            this.ctx.moveTo(atom1.x + nx * off, atom1.y + ny * off);
            this.ctx.lineTo(atom2.x + nx * off, atom2.y + ny * off);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(atom1.x - nx * off, atom1.y - ny * off);
            this.ctx.lineTo(atom2.x - nx * off, atom2.y - ny * off);
            this.ctx.stroke();
        } else if (type === 3) {
            const off = 9;
            // Center
            this.ctx.beginPath();
            this.ctx.moveTo(atom1.x, atom1.y);
            this.ctx.lineTo(atom2.x, atom2.y);
            this.ctx.stroke();
            // Sides
            this.ctx.beginPath();
            this.ctx.moveTo(atom1.x + nx * off, atom1.y + ny * off);
            this.ctx.lineTo(atom2.x + nx * off, atom2.y + ny * off);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(atom1.x - nx * off, atom1.y - ny * off);
            this.ctx.lineTo(atom2.x - nx * off, atom2.y - ny * off);
            this.ctx.stroke();
        }
    }

    destroy() {
        this.canvas.removeEventListener('mousedown', this._mouseDownHandler);
        this.canvas.removeEventListener('mousemove', this._mouseMoveHandler);
    }

    reset() {
        this.atoms = [];
        this.bonds = [];
        this.selectedAtom = null;
        this.mode = 'add';
        this.nextId = 1;
    }
}
