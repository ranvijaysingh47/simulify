import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from './Simulation';

// Interface for what we expect from the registry
type SimulationConstructor = new (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
    updateData: (text: string) => void
) => Simulation;

export class AnimationManager {
    public currentSim: Simulation | null = null;
    private animationId: number | null = null;
    // private previews: Map<string, boolean> = new Map(); // Deferred for Phase 2

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private controlsContainer: HTMLElement;
    private dataContainer: HTMLElement;
    private playButton: HTMLElement;
    private playIcon: HTMLElement;

    private isRunning: boolean = false;
    private registry: Record<string, SimulationConstructor> = {};

    constructor() {
        this.canvas = document.getElementById('sim-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.controlsContainer = document.getElementById('sim-controls')!;
        this.dataContainer = document.getElementById('sim-data')!;
        this.playButton = document.getElementById('sim-play-pause')!;
        this.playIcon = document.getElementById('play-icon')!;

        // Handle Resize
        window.addEventListener('resize', () => {
            // In a real app we might resize canvas here
        });

        // Initialize UI controls
        if (this.playButton) {
            this.playButton.onclick = () => this.togglePlay();
        }
    }

    public register(id: string, simClass: SimulationConstructor) {
        this.registry[id] = simClass;
    }

    public loadSim(id: string) {
        // Destroy previous sim if exists (cleanup listeners, 3D contexts)
        if (this.currentSim) {
            this.currentSim.destroy();
        }

        this.stopSim();
        this.controlsContainer.innerHTML = '';
        this.dataContainer.innerHTML = '';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Cleanup 3D Canvas if exists (from previous sim)
        const container = document.getElementById('canvas-container');
        if (container) {
            // Remove ALL elements with class .three-canvas
            const oldThreeCanvases = container.querySelectorAll('.three-canvas');
            oldThreeCanvases.forEach(el => el.remove());
        }
        // Ensure 2D Canvas is visible
        this.canvas.style.display = 'block';
        this.canvas.style.opacity = '1'; // Force opacity just in case
        this.canvas.style.zIndex = '10'; // Ensure it's on top of container base

        const SimClass = this.registry[id];
        if (SimClass) {
            this.currentSim = new SimClass(
                this.canvas,
                this.ctx,
                this.createControl.bind(this),
                this.updateData.bind(this)
            );
            this.startSim();
        } else {
            console.error(`Simulation ${id} not found in registry.`);
            this.updateData(`Error: Simulation '${id}' not implemented yet.`);
        }
    }

    public startSim() {
        console.log("AnimationManager: Starting Sim");
        if (this.isRunning) return;
        this.isRunning = true;
        if (this.playIcon) this.playIcon.textContent = '⏸';
        this.loop();
        console.log("AnimationManager: Loop started");
    }

    public stopSim() {
        this.isRunning = false;
        if (this.animationId) cancelAnimationFrame(this.animationId);
        if (this.playIcon) this.playIcon.textContent = '▶';
    }

    public togglePlay() {
        if (this.isRunning) this.stopSim();
        else this.startSim();
    }

    public reset() {
        if (this.currentSim) {
            this.currentSim.reset();
            if (!this.isRunning) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.currentSim.draw();
            }
        }
    }

    private loop() {
        if (!this.isRunning) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.currentSim) {
            this.currentSim.update();
            this.currentSim.draw();
        }

        this.animationId = requestAnimationFrame(this.loop.bind(this));
    }

    private createControl(type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) {
        const div = document.createElement('div');
        div.className = 'flex flex-col space-y-1';

        const labelEl = document.createElement('label');
        labelEl.className = 'text-sm font-medium text-gray-700 flex justify-between';

        if (type === 'slider') {
            labelEl.innerHTML = `<span>${label}</span><span class="text-gray-500 font-normal" id="val-${label.replace(/\s/g, '')}">${config.value}</span>`;

            const input = document.createElement('input');
            input.type = 'range';
            input.min = String(config.min || 0);
            input.max = String(config.max || 100);
            input.step = String(config.step || 1);
            input.value = String(config.value || 0);
            input.className = 'w-full';

            input.addEventListener('input', (e) => {
                const val = parseFloat((e.target as HTMLInputElement).value);
                const valDisplay = document.getElementById(`val-${label.replace(/\s/g, '')}`);
                if (valDisplay) valDisplay.textContent = String(val);
                callback(val);
            });

            div.appendChild(labelEl);
            div.appendChild(input);
        } else if (type === 'checkbox') {
            div.className = 'flex flex-row items-center space-x-3';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = !!config.checked;
            input.className = 'w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300';
            input.addEventListener('change', (e) => callback((e.target as HTMLInputElement).checked));

            labelEl.textContent = label;

            div.appendChild(input);
            div.appendChild(labelEl);
        } else if (type === 'button') {
            const btn = document.createElement('button');
            btn.textContent = label;
            btn.className = 'w-full bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50';
            btn.onclick = () => callback(null);
            div.appendChild(btn);
        } else if (type === 'select') {
            labelEl.textContent = label;

            const select = document.createElement('select');
            select.className = 'w-full bg-white border border-gray-300 text-gray-700 py-1.5 px-3 rounded focus:ring-blue-500 focus:border-blue-500';

            if (config.options) {
                config.options.forEach(opt => {
                    const option = document.createElement('option');
                    option.value = opt;
                    option.textContent = opt;
                    select.appendChild(option);
                });
            }

            select.addEventListener('change', (e) => callback((e.target as HTMLSelectElement).value));

            div.appendChild(labelEl);
            div.appendChild(select);
        }

        this.controlsContainer.appendChild(div);
    }

    private updateData(text: string) {
        this.dataContainer.innerHTML = text.replace(/\n/g, '<br>');
    }
}
