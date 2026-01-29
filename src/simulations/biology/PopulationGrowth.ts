import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import { Vector2 } from '../../core/Physics';

interface Agent {
    pos: Vector2;
    vel: Vector2;
    type: 'prey' | 'predator';
}

export class PopulationGrowth extends Simulation {
    private population: Agent[] = [];
    private predators: Agent[] = [];
    private maxPopulation: number = 200;
    private growthRate: number = 0.05;
    private carryingCapacity: number = 100;
    private hasPredators: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.addAgents(10, 'prey');

        this.addControl('slider', 'Growth Rate', { min: 0.01, max: 0.2, step: 0.01, value: 0.05 }, v => this.growthRate = v);
        this.addControl('slider', 'Carrying Capacity', { min: 50, max: 200, step: 10, value: 100 }, v => this.carryingCapacity = v);
        this.addControl('checkbox', 'Predators', { checked: false }, v => {
            this.hasPredators = v;
            if (v) this.addAgents(5, 'predator');
            else this.predators = [];
        });
        this.addControl('button', 'Reset Pop', {}, () => this.reset());
    }

    addAgents(count: number, type: 'prey' | 'predator') {
        const arr = type === 'prey' ? this.population : this.predators;
        for (let i = 0; i < count; i++) {
            arr.push({
                pos: new Vector2(Math.random() * this.width, Math.random() * this.height),
                vel: new Vector2(Math.random() - 0.5, Math.random() - 0.5).normalize(),
                type: type
            });
        }
    }

    update() {
        if (Math.random() < this.growthRate && this.population.length < this.maxPopulation) {
            if (this.population.length < this.carryingCapacity) {
                this.addAgents(1, 'prey');
            } else {
                if (Math.random() < 0.1) this.population.pop();
            }
        }

        const all = [...this.population, ...this.predators];
        all.forEach(a => {
            a.pos = a.pos.add(a.vel);
            if (a.pos.x < 0 || a.pos.x > this.width) a.vel.x *= -1;
            if (a.pos.y < 0 || a.pos.y > this.height) a.vel.y *= -1;
        });

        if (this.hasPredators) {
            for (let i = this.predators.length - 1; i >= 0; i--) {
                for (let j = this.population.length - 1; j >= 0; j--) {
                    if (this.predators[i].pos.dist(this.population[j].pos) < 10) {
                        this.population.splice(j, 1);
                        if (Math.random() < 0.3) this.addAgents(1, 'predator');
                        break;
                    }
                }
            }

            if (this.predators.length > 20) this.predators.pop();
            if (this.predators.length < 2 && Math.random() < 0.05) this.addAgents(1, 'predator');
        }

        this.updateData(`Prey: ${this.population.length}\nPredators: ${this.predators.length}\nCapacity: ${this.carryingCapacity}`);
    }

    draw() {
        this.population.forEach(p => {
            this.drawSphere(p.pos.x, p.pos.y, 4, '#4CAF50');
        });

        this.predators.forEach(p => {
            this.drawSphere(p.pos.x, p.pos.y, 6, '#F44336');
        });
    }

    reset() {
        this.population = [];
        this.predators = [];
        this.addAgents(10, 'prey');
        if (this.hasPredators) this.addAgents(5, 'predator');
    }
}
