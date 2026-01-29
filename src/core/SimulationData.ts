export interface SimulationMetadata {
    id: string;
    title: string;
    description: string;
    category: 'Physics' | 'Chemistry' | 'Math' | 'Biology' | 'Earth' | 'Other' | 'Games';
    color: string;
    explainer: string;
}

export const SIMULATION_DATA: SimulationMetadata[] = [
    {
        "id": "projectile-game",
        "title": "Target Practice",
        "description": "Challenge Mode: Hit the targets with precision!",
        "category": "Games" as any, // Temporary cast until we update type definition fully if strict
        "color": "purple-600",
        "explainer": "Test your skills! adjust angle and speed to hit target zones at specific distances. Complete all levels to win."
    },
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

    // Additional 20 Chemistry Sims
    { "id": "ionic-covalent", "title": "Ionic vs Covalent", "description": "Compare electron transfer vs sharing.", "category": "Chemistry", "color": "orange-500", "explainer": "Ionic bonds steal electrons. Covalent bonds share them. See how the electrons move differently in each bond type!" },

    { "id": "reaction-rates", "title": "Reaction Rates", "description": "Kinetics, temperature, and collision theory.", "category": "Chemistry", "color": "orange-700", "explainer": "Molecules must collide to react! Heating them up makes them move faster and hit harder, speeding up the reaction." },
    { "id": "redox", "title": "Redox Reactions", "description": "Track electron flow and oxidation states.", "category": "Chemistry", "color": "orange-800", "explainer": "OIL RIG: Oxidation Is Loss, Reduction Is Gain. Watch electrons jump from Zinc to Copper, generating electrical potential." },
    { "id": "titration", "title": "Titration", "description": "Neutralization and pH curves.", "category": "Chemistry", "color": "amber-500", "explainer": "Find the unknown concentration! Carefully add base to acid until the indicator changes color at the endpoint." },

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
    { "id": "rutherford", "title": "Rutherford Scattering", "description": "Gold foil experiment.", "category": "Chemistry", "color": "red-700", "explainer": "Atoms are mostly empty space! But there's a tiny, dense, positive Nucleus in the center that can bounce alpha particles backward." },
    // Batch 6: Advanced Chemistry
    { "id": "periodic-trends", "title": "Periodic Trends", "description": "Explore atomic radius, ionization energy, and electronegativity trends.", "category": "Chemistry", "color": "purple-500", "explainer": "The Periodic Table is a map! Elements get bigger as you go down, and smaller as you go right. See the patterns of the universe." },
    { "id": "lewis-structures", "title": "Lewis Structures", "description": "Build molecules by sharing electron pairs.", "category": "Chemistry", "color": "purple-600", "explainer": "Connect the dots! Atoms share electrons to fill their outer shells (Octet Rule). Draw lines to show bonds and dots for lone pairs." },
    { "id": "electron-config", "title": "Electron Configuration", "description": "Fill orbitals following the Aufbau Principle.", "category": "Chemistry", "color": "purple-700", "explainer": "1s, 2s, 2p... Electrons fill the lowest energy rooms first! Follow the diagonal rule to map out where every electron lives." },
    { "id": "flame-test", "title": "Flame Test", "description": "Identify metal ions by their flame color.", "category": "Chemistry", "color": "purple-800", "explainer": "Fireworks science! Heating metals excites their electrons. When they fall back down, they release light of specific colors. Copper is green, Strontium is red!" },
    { "id": "vapor-pressure", "title": "Vapor Pressure", "description": "Liquid-gas equilibrium and boiling points.", "category": "Chemistry", "color": "indigo-500", "explainer": "The fight to escape! Molecules in a liquid want to fly away. When Vapor Pressure equals Atmospheric Pressure, the liquid boils!" },

    // Batch 7: Lab Techniques
    { "id": "distillation", "title": "Distillation", "description": "Separate mixtures based on boiling points.", "category": "Chemistry", "color": "indigo-600", "explainer": "Boil it to clean it! Alcohol boils before water. By heating the mix just right, we can catch the alcohol vapor and leave the water behind." },
    { "id": "mass-spec", "title": "Mass Spectrometry", "description": "Separate ions by mass-to-charge ratio.", "category": "Chemistry", "color": "indigo-700", "explainer": "Cornering feels heavy! Heavier ions can't turn corners as sharply as lighter ones. Magnets separate them by weight to identify molecules." },
    { "id": "buffers", "title": "Buffers", "description": "Resist pH changes with weak acids/bases.", "category": "Chemistry", "color": "indigo-800", "explainer": "Chemical shock absorbers! Buffers soak up extra acid or base to keep the pH steady. Your blood is a buffer system!" },
    { "id": "kinetics", "title": "Kinetics & Catalysts", "description": "Reaction energy diagrams and activation energy.", "category": "Chemistry", "color": "blue-500", "explainer": "Speed it up! Catalysts lower the 'Activation Energy' hill, making it easier for reactants to slide down into products." },
    { "id": "hybridization", "title": "Hybridization", "description": "Visualize sp, sp2, sp3 orbital mixing.", "category": "Chemistry", "color": "blue-600", "explainer": "Mashing up orbitals! To make equal bonds, carbon mixes its s and p orbitals together to form new 'hybrid' shapes like sp3." },
    // Batch 8: Structure
    { "id": "polarity", "title": "Molecular Polarity", "description": "Explore dipole moments.", "category": "Chemistry", "color": "blue-500", "explainer": "See how electronegativity differences create polar molecules." },
    { "id": "vsepr", "title": "VSEPR Shapes", "description": "3D Molecular Geometries.", "category": "Chemistry", "color": "purple-600", "explainer": "Visualize electron domains and resulting molecular shapes." },
    { "id": "intermolecular", "title": "Intermolecular Forces", "description": "London, Dipole, H-Bonding.", "category": "Chemistry", "color": "cyan-500", "explainer": "Forces between molecules determine boiling points and states." },
    { "id": "crystals", "title": "Crystal Lattices", "description": "Solid structures.", "category": "Chemistry", "color": "emerald-600", "explainer": "Inspect simple cubic, BCC, and FCC crystal structures." },
    { "id": "resonance", "title": "Resonance", "description": "Delocalized elections.", "category": "Chemistry", "color": "indigo-600", "explainer": "See how electrons are shared across multiple bonds." },

    // Batch 9: Thermodynamics
    { "id": "le-chatelier", "title": "Le Chatelier's Principle", "description": "Equilibrium shifts.", "category": "Chemistry", "color": "orange-500", "explainer": "Change Concentration, Pressure, or Temp to shift equilibrium." },
    { "id": "exo-endo", "title": "Exo vs Endothermic", "description": "Heat flow in reactions.", "category": "Chemistry", "color": "red-500", "explainer": "Track energy changes and temperature flow in reactions." },
    { "id": "gibbs", "title": "Gibbs Free Energy", "description": "Spontaneity calculator.", "category": "Chemistry", "color": "pink-600", "explainer": "Calculate Delta G based on Enthalpy and Entropy." },
    { "id": "solubility", "title": "Solubility (Ksp)", "description": "Precipitation reactions.", "category": "Chemistry", "color": "teal-500", "explainer": "Dissolve salts until saturation is reached." },
    { "id": "electrolysis", "title": "Electrolysis", "description": "Electrolytic cells.", "category": "Chemistry", "color": "yellow-600", "explainer": "Use electricity to drive non-spontaneous reactions." },
    // Batch 10: Nuclear & Quantum
    { "id": "alpha-decay", "title": "Alpha Decay", "description": "Unstable nucleus emits Helium.", "category": "Chemistry", "color": "purple-500", "explainer": "Watch a Polonium nucleus eject an Alpha particle to become Lead." },
    { "id": "beta-decay", "title": "Beta Decay", "description": "Neutron turns into Proton.", "category": "Chemistry", "color": "orange-600", "explainer": "A neutron decays into a proton and an electron (beta particle)." },
    { "id": "half-life", "title": "Half Life", "description": "Radioactive decay rates.", "category": "Chemistry", "color": "green-500", "explainer": "Track how long it takes for 50% of a sample to decay." },
    { "id": "radio-dating", "title": "Radioactive Dating", "description": "Carbon-14 dating.", "category": "Chemistry", "color": "stone-500", "explainer": "Use decay ratios to calculate the age of ancient objects." },
    { "id": "electron-diffraction", "title": "Electron Diffraction", "description": "Wave-particle duality.", "category": "Chemistry", "color": "cyan-600", "explainer": "See electrons behave like waves around obstacles." },

    // Batch 11: Organic & Biochem
    { "id": "polymerization", "title": "Polymerization", "description": "Build long chains.", "category": "Chemistry", "color": "pink-500", "explainer": "Link monomers together to create plastics like polyethylene." },
    { "id": "lipids", "title": "Lipid Builder", "description": "Fats and oils.", "category": "Chemistry", "color": "yellow-500", "explainer": "Construct triglycerides and phospholipid bilayers." },
    { "id": "protein-folding", "title": "Protein Folding", "description": "Amino acid chains.", "category": "Chemistry", "color": "violet-500", "explainer": "See how hydrophobic and hydrophilic forces shape proteins." },
    { "id": "enzymes", "title": "Enzyme Kinetics", "description": "Lock and key model.", "category": "Chemistry", "color": "teal-500", "explainer": "Substrates bind to active sites to speed up reactions." },
    { "id": "pcr", "title": "PCR Simulation", "description": "DNA amplification.", "category": "Chemistry", "color": "rose-500", "explainer": "Polymerase Chain Reaction: Heat, Anneal, Extend to copy DNA." }
];
