import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

interface Nucleus {
    x: number;
    y: number;
    stable: boolean;
}
interface Neutron {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export class NuclearFission extends Simulation {
    private nuclei: Nucleus[] = [];
    private neutrons: Neutron[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);
        this.resetSim();
        this.addControl('button', 'Fire Neutron', {}, () => {
            this.neutrons.push({ x: 50, y: 300, vx: 5, vy: 0 });
        });
        this.addControl('button', 'Reset', {}, () => this.resetSim());
    }

    resetSim() {
        this.nuclei = [];
        this.neutrons = [];
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                this.nuclei.push({
                    x: 200 + x * 60,
                    y: 150 + y * 60,
                    stable: true
                });
            }
        }
    }

    update() {
        for (let i = this.neutrons.length - 1; i >= 0; i--) {
            const n = this.neutrons[i];
            n.x += n.vx;
            n.y += n.vy;

            if (n.x > 800 || n.x < 0 || n.y < 0 || n.y > 600) {
                this.neutrons.splice(i, 1);
                continue;
            }

            for (let j = 0; j < this.nuclei.length; j++) {
                const u = this.nuclei[j];
                if (u.stable && Math.hypot(n.x - u.x, n.y - u.y) < 20) {
                    u.stable = false;
                    this.neutrons.splice(i, 1);
                    for (let k = 0; k < 3; k++) {
                        const angle = Math.random() * Math.PI * 2;
                        this.neutrons.push({
                            x: u.x, y: u.y,
                            vx: Math.cos(angle) * 5,
                            vy: Math.sin(angle) * 5
                        });
                    }
                    break;
                }
            }
        }

        const split = this.nuclei.filter(u => !u.stable).length;
        this.updateData(`Nuclei Split: ${split}/${this.nuclei.length}\nChain Reaction in progress...`);
    }

    draw() {
        this.nuclei.forEach(u => {
            if (u.stable) {
                this.drawSphere(u.x, u.y, 20, 'green');
                this.ctx.fillStyle = 'black'; this.ctx.fillText("U-235", u.x - 15, u.y + 5);
            } else {
                this.drawSphere(u.x - 10, u.y - 10, 10, 'orange');
                this.drawSphere(u.x + 10, u.y + 10, 10, 'orange');
            }
        });

        this.neutrons.forEach(n => {
            this.drawSphere(n.x, n.y, 4, 'red');
        });

        // Gun
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(0, 280, 50, 40);
    }
}
