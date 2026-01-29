import { SIMULATION_DATA, type SimulationMetadata } from './SimulationData';
import { AnimationManager } from './AnimationManager';

export class UI {
    private gridElement: HTMLElement;
    private modalElement: HTMLElement;
    private searchInput: HTMLInputElement;
    private animationManager: AnimationManager;

    constructor(animationManager: AnimationManager) {
        this.animationManager = animationManager;
        this.gridElement = document.getElementById('sim-grid')!;
        this.modalElement = document.getElementById('sim-modal')!;
        this.searchInput = document.getElementById('search-input') as HTMLInputElement;

        this.init();
    }

    private init() {
        this.renderGrid(SIMULATION_DATA);
        this.setupEventListeners();
    }

    private renderGrid(sims: SimulationMetadata[]) {
        this.gridElement.innerHTML = '';
        sims.forEach(sim => {
            const card = document.createElement('div');
            // Premium Card Styles
            card.className = 'group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full cursor-pointer';
            card.onclick = () => this.openSim(sim.id);

            // Dynamic Gradient based on Category
            let bgGradient = 'bg-gradient-to-br from-indigo-500 to-blue-600';
            let icon = '⚛️';
            let badgeColor = 'bg-indigo-100 text-indigo-700';

            if (sim.category === 'Chemistry') {
                bgGradient = 'bg-gradient-to-br from-purple-500 to-pink-600';
                icon = '⚗️';
                badgeColor = 'bg-purple-100 text-purple-700';
            } else if (sim.category === 'Math') {
                bgGradient = 'bg-gradient-to-br from-emerald-500 to-teal-600';
                icon = '📐';
                badgeColor = 'bg-emerald-100 text-emerald-700';
            } else if (sim.category === 'Biology') {
                bgGradient = 'bg-gradient-to-br from-amber-400 to-orange-500';
                icon = '🧬';
                badgeColor = 'bg-amber-100 text-amber-800';
            }

            card.innerHTML = `
                <div class="relative h-48 ${bgGradient} p-6 flex items-center justify-center overflow-hidden">
                    <!-- Abstract Shapes overlay -->
                    <div class="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div class="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-black opacity-5 blur-2xl"></div>
                    
                    <span class="text-6xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 filter">${icon}</span>
                    
                    <div class="absolute top-4 right-4">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-white bg-black/20 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                            v2.0
                        </span>
                    </div>
                </div>

                <div class="p-5 flex-grow flex flex-col relative bg-white">
                    <div class="absolute -top-3 left-5">
                         <span class="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${badgeColor} shadow-sm border border-white">
                            ${sim.category}
                        </span>
                    </div>
                    
                    <div class="mt-2">
                        <h3 class="font-heading font-bold text-xl text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">${sim.title}</h3>
                        <p class="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4 font-normal">${sim.description}</p>
                    </div>

                    <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-xs font-medium text-slate-400">Interactive Sim</span>
                        <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>
                </div>
            `;
            this.gridElement.appendChild(card);
        });
    }

    private setupEventListeners() {
        // Filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;

                // Update UI UI
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-phetBlue', 'text-white');
                    b.classList.add('bg-white', 'text-gray-600');
                });
                target.classList.remove('bg-white', 'text-gray-600');
                target.classList.add('bg-phetBlue', 'text-white');

                const category = target.dataset.category;
                const filtered = category === 'All' ? SIMULATION_DATA : SIMULATION_DATA.filter(s => s.category === category);
                this.renderGrid(filtered);
            });
        });

        // Search
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                const term = (e.target as HTMLInputElement).value.toLowerCase();
                const filtered = SIMULATION_DATA.filter(s =>
                    s.title.toLowerCase().includes(term) ||
                    s.description.toLowerCase().includes(term)
                );
                this.renderGrid(filtered);
            });
        }

        // Modal
        const closeBtn = document.getElementById('modal-close');
        if (closeBtn) closeBtn.onclick = () => this.closeSim();

        const backdrop = document.getElementById('modal-backdrop');
        if (backdrop) backdrop.onclick = () => this.closeSim();

        // New Back and Cancel buttons
        const backBtn = document.getElementById('modal-back-btn');
        if (backBtn) backBtn.onclick = () => this.closeSim();

        const cancelBtn = document.getElementById('modal-cancel-btn');
        if (cancelBtn) cancelBtn.onclick = () => this.closeSim();

        // Sim reset
        const resetBtn = document.getElementById('sim-reset');
        if (resetBtn) resetBtn.onclick = () => this.animationManager.reset();
    }

    private openSim(id: string) {
        const sim = SIMULATION_DATA.find(s => s.id === id);
        if (!sim) return;

        const titleEl = document.getElementById('modal-title');
        if (titleEl) titleEl.textContent = sim.title;

        const descEl = document.getElementById('modal-desc');
        if (descEl) descEl.textContent = sim.description;

        const explainerEl = document.getElementById('modal-explainer');
        if (explainerEl) explainerEl.textContent = sim.explainer || "Explore the simulation to learn more!";

        this.modalElement.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Initialize full sim
        this.animationManager.loadSim(sim.id);
    }

    private closeSim() {
        this.modalElement.classList.add('hidden');
        document.body.style.overflow = '';
        this.animationManager.stopSim();
    }
}
