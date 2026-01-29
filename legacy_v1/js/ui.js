/**
 * UI Controller
 * Handles DOM interactions, simulation loading, and modal management
 */

class UIController {
    constructor() {
        this.sims = [];
        this.currentSim = null;
        this.gridElement = document.getElementById('sim-grid');
        this.modalElement = document.getElementById('sim-modal');
        this.searchInput = document.querySelector('input[placeholder="Search..."]');

        this.init();
    }

    init() {
        // Hardcoded simulation data to avoid CORS issues when running locally (file:// protocol)
        this.sims = [
            {
                "id": "projectile-motion",
                "title": "Projectile Motion",
                "description": "Explore trajectory, velocity vectors, and gravity.",
                "category": "Physics",
                "color": "blue-500",
                "explainer": "Objects in motion stay in motion unless acted upon by gravity! See how launch angle and speed determine how far the ball flies."
            },
            {
                "id": "bouncing-balls",
                "title": "Bouncing Balls",
                "description": "Investigate collisions, gravity, drag, and mass.",
                "category": "Physics",
                "color": "blue-600",
                "explainer": "Conservation of momentum in action! observe how energy is lost to friction and heat with each bounce."
            },
            {
                "id": "pendulum-wave",
                "title": "Pendulum Wave",
                "description": "Observe phase synchronization and damping.",
                "category": "Physics",
                "color": "blue-700",
                "explainer": "Physics as art! Shorter pendulums swing faster than long ones, creating mesmerizing wave patterns as they phase in and out of sync."
            },
            {
                "id": "spring-mass",
                "title": "Spring Mass",
                "description": "Study Hooke's Law, energy, and stiffness.",
                "category": "Physics",
                "color": "blue-800",
                "explainer": "Hooke's Law (F = -kx) governs springs. A stiffer spring pulls back harder, while a heavier mass slows down the oscillation."
            },
            {
                "id": "gas-laws",
                "title": "Gas Laws",
                "description": "Demonstrate PV=nRT with particles in a box.",
                "category": "Chemistry",
                "color": "orange-500",
                "explainer": "Hotter particles move faster! See how increasing Temperature (T) or reducing Volume (V) drives up Pressure (P)."
            },
            {
                "id": "ph-scale",
                "title": "pH Scale",
                "description": "Test acidity and basicity with indicators.",
                "category": "Chemistry",
                "color": "orange-600",
                "explainer": "pH measures H+ ion concentration. Lower pH means more acidic (more H+), while higher pH means more basic (fewer H+)."
            },
            {
                "id": "atomic-orbitals",
                "title": "Atomic Orbitals",
                "description": "Visualize s, p, d orbitals and energy levels.",
                "category": "Chemistry",
                "color": "orange-700",
                "explainer": "Electrons don't orbit like planets! They exist in 'clouds' of probability called orbitals. See the strange shapes of s, p, and d shells."
            },
            {
                "id": "fractal-tree",
                "title": "Fractal Tree",
                "description": "Create recursive L-systems with adjustable angles.",
                "category": "Math",
                "color": "green-500",
                "explainer": "Nature loves recursion! A simple rule repeated over and over can create complex, organic structures like trees and ferns."
            },
            {
                "id": "fourier-series",
                "title": "Fourier Series",
                "description": "Decompose waveforms into sine waves.",
                "category": "Math",
                "color": "green-600",
                "explainer": "Any repeating signal can be built by adding simple sine waves together. This 'math magic' powers your MP3s and JPGs!"
            },
            {
                "id": "conic-sections",
                "title": "Conic Sections",
                "description": "Generate ellipses, parabolas, and hyperbolas.",
                "category": "Math",
                "color": "green-700",
                "explainer": "Slice a cone at different angles to reveal circle, ellipses, parabolas, and hyperbolas—the shapes of planetary orbits!"
            },
            {
                "id": "population-growth",
                "title": "Population Growth",
                "description": "Model logistic and exponential growth.",
                "category": "Biology",
                "color": "teal-500",
                "explainer": "Populations explode exponentially until resources run out. Watch the transition from rapid growth to a stable 'carrying capacity'."
            },
            {
                "id": "wave-interference",
                "title": "Wave Interference",
                "description": "Experiment with ripples and slit diffraction.",
                "category": "Biology",
                "color": "teal-600",
                "explainer": "Waves can add up (constructive) or cancel out (destructive). This interference creates the complex ripple patterns you see in ponds."
            },
            // New Chemistry Simulations
            {
                "id": "balancing-equations",
                "title": "Balancing Equations",
                "description": "Balance chemical equations with visual scales.",
                "category": "Chemistry",
                "color": "orange-500",
                "explainer": "Matter cannot be created or destroyed! You must have the same number of atoms on both sides of the arrow."
            },
            {
                "id": "molarity",
                "title": "Molarity",
                "description": "Adjust solute amount and volume to change concentration.",
                "category": "Chemistry",
                "color": "orange-600",
                "explainer": "Concentration (Molarity) is moles per liter. Adding water dilutes the mix, while adding powder makes it stronger and darker."
            },
            {
                "id": "isotopes",
                "title": "Isotopes & Atomic Mass",
                "description": "Create isotopes and see how abundance affects average mass.",
                "category": "Chemistry",
                "color": "orange-700",
                "explainer": "Same element, different weight! Isotopes have the same protons but different neutrons. Average atomic mass depends on which is most common."
            },
            {
                "id": "build-an-atom",
                "title": "Build an Atom",
                "description": "Construct atoms from protons, neutrons, and electrons.",
                "category": "Chemistry",
                "color": "orange-800",
                "explainer": "Protons define the element. Neutrons add stability. Electrons determine charge. Build your own periodic table element!"
            },
            {
                "id": "states-of-matter",
                "title": "States of Matter",
                "description": "Watch particles heat up and cool down in different phases.",
                "category": "Chemistry",
                "color": "amber-500",
                "explainer": "Solids vibrate in place. Liquids slide past each other. Gases fly freely. Heat adds energy to break them apart!"
            },
            {
                "id": "concentration",
                "title": "Concentration",
                "description": "Explore Beer's Law with solution color and light intensity.",
                "category": "Chemistry",
                "color": "amber-600",
                "explainer": "Darker solutions absorb more light. Beer's Law says absorbance is directly proportional to concentration."
            },
            {
                "id": "acid-base-solutions",
                "title": "Acid-Base Solutions",
                "description": "Visualize strong vs weak acids/bases and conductivity.",
                "category": "Chemistry",
                "color": "amber-700",
                "explainer": "Strong acids break apart completely (dissociate). Weak ones mostly stay together. More ions mean better electricity conduction!"
            },
            {
                "id": "reactants-products",
                "title": "Reactants & Products",
                "description": "See how reactants determine product amounts (Limiting Reagent).",
                "category": "Chemistry",
                "color": "red-500",
                "explainer": "Making molecules is like making sandwiches. If you run out of bread (limiting reagent), you can't make more sandwiches, no matter how much cheese you have!"
            },
            {
                "id": "molecular-shapes",
                "title": "Molecular Shapes",
                "description": "Visualize 3D VSEPR shapes by adding bonds/lone pairs.",
                "category": "Chemistry",
                "color": "red-600",
                "explainer": "Electron pairs repel each other! VSEPR theory predicts how atoms arrange themselves to stay as far apart as possible."
            },
            {
                "id": "radioactive-dating",
                "title": "Radioactive Dating",
                "description": "Understand half-life and decay rates over time.",
                "category": "Chemistry",
                "color": "red-700",
                "explainer": "Carbon-14 decays over thousands of years. By measuring how much is left, we can calculate the age of ancient fossils!"
            },
            // Additional 20 Chemistry Sims
            { "id": "ionic-covalent", "title": "Ionic vs Covalent", "description": "Compare electron transfer vs sharing.", "category": "Chemistry", "color": "orange-500", "explainer": "Ionic bonds steal electrons. Covalent bonds share them. See how the electrons move differently in each bond type!" },
            { "id": "solubility", "title": "Solubility", "description": "Create solutions and precipitates.", "category": "Chemistry", "color": "orange-600", "explainer": "Water can only hold so much salt! Once the solution is saturated, adding more just forms a pile of solid precipitate at the bottom." },
            { "id": "reaction-rates", "title": "Reaction Rates", "description": "Kinetics, temperature, and collision theory.", "category": "Chemistry", "color": "orange-700", "explainer": "Molecules must collide to react! Heating them up makes them move faster and hit harder, speeding up the reaction." },
            { "id": "redox", "title": "Redox Reactions", "description": "Track electron flow and oxidation states.", "category": "Chemistry", "color": "orange-800", "explainer": "OIL RIG: Oxidation Is Loss, Reduction Is Gain. Watch electrons jump from Zinc to Copper, generating electrical potential." },
            { "id": "titration", "title": "Titration", "description": "Neutralization and pH curves.", "category": "Chemistry", "color": "amber-500", "explainer": "Find the unknown concentration! Carefully add base to acid until the indicator changes color at the endpoint." },
            { "id": "electrolysis", "title": "Electrolysis", "description": "Splitting water with electricity.", "category": "Chemistry", "color": "amber-600", "explainer": "Electricity can rip molecules apart! Applying voltage to water splits it into Hydrogen and Oxygen gas bubbles." },
            { "id": "gas-diffusion", "title": "Gas Diffusion", "description": "Graham's Law of Effusion.", "category": "Chemistry", "color": "amber-700", "explainer": "Lighter gases fly faster! NH3 (light) zips across the tube faster than HCl (heavy), so the white ring forms closer to the slowpoke." },
            { "id": "nuclear-fission", "title": "Nuclear Fission", "description": "Chain reactions and energy release.", "category": "Chemistry", "color": "red-500", "explainer": "One neutron splits an atom, releasing energy and MORE neutrons. Those neutrons split more atoms... boom! That's a chain reaction." },
            { "id": "molecular-polarity", "title": "Molecular Polarity", "description": "Dipoles and electronegativity.", "category": "Chemistry", "color": "red-600", "explainer": "Some atoms are greedy! Electronegative atoms pull electrons closer, creating a 'pole' with a partial negative charge." },
            { "id": "intermolecular-forces", "title": "Intermolecular Forces", "description": "Hydrogen bonding and dispersion forces.", "category": "Chemistry", "color": "red-700", "explainer": "Sticky molecules! Forces like Hydrogen Bonds hold water together as a liquid. Without them, it would boil away instantly." },
            { "id": "specific-heat", "title": "Specific Heat", "description": "Calorimetry and heating curves.", "category": "Chemistry", "color": "orange-500", "explainer": "Water is stubborn! It takes A LOT of energy to heat it up compared to metal. That's why the ocean stays cool in summer." },
            { "id": "activation-energy", "title": "Activation Energy", "description": "Exothermic vs Endothermic pathways.", "category": "Chemistry", "color": "orange-600", "explainer": "Reactions need a kickstart! Molecules need enough energy to overcome the 'Activation Barrier' before they can turn into products." },
            { "id": "equilibrium", "title": "Equilibrium", "description": "Le Chatelier's Principle.", "category": "Chemistry", "color": "orange-700", "explainer": "Balance in all things. If you add more Reactants, the system fights back by making more Products to restore equilibrium." },
            { "id": "colligative", "title": "Colligative Properties", "description": "Freezing point depression.", "category": "Chemistry", "color": "orange-800", "explainer": "Salt stops ice from forming! Dissolved particles get in the way of water crystals, lowering the freezing point. That's why we salt icy roads." },
            { "id": "atomic-spectra", "title": "Atomic Spectra", "description": "Emission lines of elements.", "category": "Chemistry", "color": "amber-500", "explainer": "Every element has a fingerprint! When heated, atoms emit light at specific colors (wavelengths) unique to them." },
            { "id": "chromatography", "title": "Chromatography", "description": "Separating mixture components.", "category": "Chemistry", "color": "amber-600", "explainer": "The Ink Race! Some dyes stick to the paper (stationary), while others flow with the water (mobile), separating the colors." },
            { "id": "galvanic-cell", "title": "Galvanic Cell", "description": "Generate voltage from redox.", "category": "Chemistry", "color": "amber-700", "explainer": "Batteries work by giving electrons a path to flow from the Anode to the Cathode, powering your devices along the way." },
            { "id": "blackbody", "title": "Blackbody Radiation", "description": "Temperature and color spectrum.", "category": "Chemistry", "color": "red-500", "explainer": "Hot things glow! As temperature rises, the color shifts from Red (cool) to Yellow to Blue-White (extremely hot)." },
            { "id": "photoelectric", "title": "Photoelectric Effect", "description": "Photons ejecting electrons.", "category": "Chemistry", "color": "red-600", "explainer": "Light creates electricity! If light particles (photons) hit a metal with enough energy, they knock electrons loose." },
            { "id": "rutherford", "title": "Rutherford Scattering", "description": "Gold foil experiment.", "category": "Chemistry", "color": "red-700", "explainer": "Atoms are mostly empty space! But there's a tiny, dense, positive Nucleus in the center that can bounce alpha particles backward." }
        ];

        this.renderGrid(this.sims);
        this.setupEventListeners();
        this.startPreviews();
    }

    renderGrid(sims) {
        this.gridElement.innerHTML = '';
        sims.forEach(sim => {
            const card = document.createElement('div');
            card.className = 'sim-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer flex flex-col h-full';
            card.onclick = () => this.openSim(sim.id);

            card.innerHTML = `
                <div class="relative h-48 bg-gray-50 border-b border-gray-100">
                    <canvas id="preview-${sim.id}" width="300" height="200" class="sim-preview-canvas w-full h-full object-cover"></canvas>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        ${sim.category}
                    </div>
                </div>
                <div class="p-4 flex-grow flex flex-col">
                    <h3 class="font-bold text-lg text-gray-900 mb-1 leading-tight">${sim.title}</h3>
                    <p class="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">${sim.description}</p>
                    <button class="w-full mt-auto bg-${sim.color} hover:bg-opacity-90 text-white font-medium py-2 rounded-lg transition flex items-center justify-center gap-2">
                        <span>▶</span> Play Simulation
                    </button>
                    <!-- Fallback color classes for Tailwind to pick up dynamic classes: bg-blue-500 bg-blue-600 bg-blue-700 bg-blue-800 bg-orange-500 bg-orange-600 bg-orange-700 bg-green-500 bg-green-600 bg-green-700 bg-teal-500 bg-teal-600 -->
                </div>
            `;
            this.gridElement.appendChild(card);
        });

        // Restart previews after rendering
        // setTimeout(() => this.startPreviews(), 0); 
        // Logic will be in animations.js observing DOM elements
    }

    setupEventListeners() {
        // Filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update UI
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-phetBlue', 'text-white');
                    b.classList.add('bg-white', 'text-gray-600');
                });
                e.target.classList.remove('bg-white', 'text-gray-600');
                e.target.classList.add('bg-phetBlue', 'text-white');

                const category = e.target.dataset.category;
                const filtered = category === 'All' ? this.sims : this.sims.filter(s => s.category === category);
                this.renderGrid(filtered);
                this.startPreviews();
            });
        });

        // Search
        this.searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = this.sims.filter(s =>
                s.title.toLowerCase().includes(term) ||
                s.description.toLowerCase().includes(term)
            );
            this.renderGrid(filtered);
            this.startPreviews();
        });

        // Modal
        document.getElementById('modal-close').onclick = () => this.closeSim();
        document.getElementById('modal-backdrop').onclick = () => this.closeSim();

        // Control Panel
        document.getElementById('sim-play-pause').onclick = () => AnimationManager.togglePlay();
        document.getElementById('sim-reset').onclick = () => AnimationManager.reset();
    }

    openSim(id) {
        const sim = this.sims.find(s => s.id === id);
        if (!sim) return;

        this.currentSim = sim;
        document.getElementById('modal-title').textContent = sim.title;
        document.getElementById('modal-title').textContent = sim.title;
        document.getElementById('modal-desc').textContent = sim.description;
        document.getElementById('modal-explainer').textContent = sim.explainer || "Explore the simulation to learn more!";
        this.modalElement.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Stop all previews to save performance
        AnimationManager.stopAllPreviews();

        // Initialize full sim
        AnimationManager.loadSim(sim.id);
    }

    closeSim() {
        this.modalElement.classList.add('hidden');
        document.body.style.overflow = '';
        this.currentSim = null;

        // Stop full sim
        AnimationManager.stopSim();

        // Resume previews
        this.startPreviews();
    }

    startPreviews() {
        // Defer to AnimationManager (which we assume isn't loaded yet on first run, but will be)
        if (window.AnimationManager) {
            window.AnimationManager.startVisiblePreviews();
        }
    }
}

// Global instance
const UI = new UIController();
