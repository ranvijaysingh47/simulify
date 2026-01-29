import './style.css'
import { UI } from './core/UI';
import { AnimationManager } from './core/AnimationManager';
import { ProjectileMotion } from './simulations/physics/ProjectileMotion';

// Initialize Core Systems
const animationManager = new AnimationManager();
const ui = new UI(animationManager);
(window as any).ui = ui; // For debugging and to prevent unused var error

import { BouncingBalls } from './simulations/physics/BouncingBalls';
import { PendulumWave } from './simulations/physics/PendulumWave';
import { SpringMass } from './simulations/physics/SpringMass';
import { GasLaws } from './simulations/chemistry/GasLaws';
import { PHScale } from './simulations/chemistry/PHScale';
import { AtomicOrbitals } from './simulations/chemistry/AtomicOrbitals';

import { ProjectileChallenge } from './simulations/physics/ProjectileChallenge';
import { BalancingEquations } from './simulations/chemistry/BalancingEquations';
import { ReactantsProducts } from './simulations/chemistry/ReactantsProducts';
import { AcidBaseSolutions } from './simulations/chemistry/AcidBaseSolutions';
import { Molarity } from './simulations/chemistry/Molarity';
import { Concentration } from './simulations/chemistry/Concentration';
import { Isotopes } from './simulations/chemistry/Isotopes';
import { BuildAnAtom } from './simulations/chemistry/BuildAnAtom';
import { MolecularShapes } from './simulations/chemistry/MolecularShapes';

import { FractalTree } from './simulations/math/FractalTree';
import { FourierSeries } from './simulations/math/FourierSeries';
import { ConicSections } from './simulations/math/ConicSections';
import { PopulationGrowth } from './simulations/biology/PopulationGrowth';
import { WaveInterference } from './simulations/physics/WaveInterference';
import { StatesOfMatter } from './simulations/chemistry/StatesOfMatter';

// ... existing imports ...

// Batch 5 Chemistry
import { IonicCovalent } from './simulations/chemistry/IonicCovalent';
import { Solubility } from './simulations/chemistry/Solubility';
import { ReactionRates } from './simulations/chemistry/ReactionRates';
import { Redox } from './simulations/chemistry/Redox';
import { Titration } from './simulations/chemistry/Titration';
import { Electrolysis } from './simulations/chemistry/Electrolysis';
import { GasDiffusion } from './simulations/chemistry/GasDiffusion';
import { NuclearFission } from './simulations/chemistry/NuclearFission';
import { MolecularPolarity } from './simulations/chemistry/MolecularPolarity';
import { IntermolecularForces } from './simulations/chemistry/IntermolecularForces';
import { SpecificHeat } from './simulations/chemistry/SpecificHeat';
import { ActivationEnergy } from './simulations/chemistry/ActivationEnergy';
import { Equilibrium } from './simulations/chemistry/Equilibrium';
import { ColligativeProperties } from './simulations/chemistry/ColligativeProperties';
import { AtomicSpectra } from './simulations/chemistry/AtomicSpectra';
import { Chromatography } from './simulations/chemistry/Chromatography';
import { GalvanicCell } from './simulations/chemistry/GalvanicCell';
import { Blackbody } from './simulations/chemistry/Blackbody';
import { Photoelectric } from './simulations/chemistry/Photoelectric';
import { Rutherford } from './simulations/chemistry/Rutherford';
import { PeriodicTrends } from './simulations/chemistry/PeriodicTrends';
import { LewisStructures } from './simulations/chemistry/LewisStructures';
import { ElectronConfiguration } from './simulations/chemistry/ElectronConfiguration';
import { FlameTest } from './simulations/chemistry/FlameTest';
import { VaporPressure } from './simulations/chemistry/VaporPressure';
import { Distillation } from './simulations/chemistry/Distillation';
import { MassSpectrometry } from './simulations/chemistry/MassSpectrometry';
import { Buffers } from './simulations/chemistry/Buffers';
import { KineticsCatalysts } from './simulations/chemistry/KineticsCatalysts';
import { Hybridization } from './simulations/chemistry/Hybridization';

// Batch 8: Structure
import { VSEPRShapes } from './simulations/chemistry/VSEPRShapes';
import { CrystalLattices } from './simulations/chemistry/CrystalLattices';
import { Resonance } from './simulations/chemistry/Resonance';

// Batch 9: Thermodynamics
import { LeChateliersPrinciple } from './simulations/chemistry/LeChateliersPrinciple';
import { EndothermicExothermic } from './simulations/chemistry/EndothermicExothermic';
import { GibbsFreeEnergy } from './simulations/chemistry/GibbsFreeEnergy';

// Register Simulations (Manual registration for Phase 1)
animationManager.register('projectile-motion', ProjectileMotion);
animationManager.register('projectile-game', ProjectileChallenge);
animationManager.register('bouncing-balls', BouncingBalls);
animationManager.register('pendulum-wave', PendulumWave);
animationManager.register('spring-mass', SpringMass);
animationManager.register('gas-laws', GasLaws);
animationManager.register('ph-scale', PHScale);
animationManager.register('atomic-orbitals', AtomicOrbitals);
animationManager.register('balancing-equations', BalancingEquations);
animationManager.register('reactants-products', ReactantsProducts);
animationManager.register('acid-base-solutions', AcidBaseSolutions);
animationManager.register('molarity', Molarity);
animationManager.register('concentration', Concentration);
animationManager.register('isotopes', Isotopes);
animationManager.register('build-an-atom', BuildAnAtom);
animationManager.register('molecular-shapes', MolecularShapes);
animationManager.register('fractal-tree', FractalTree);
animationManager.register('fourier-series', FourierSeries);
animationManager.register('conic-sections', ConicSections);
animationManager.register('population-growth', PopulationGrowth);
animationManager.register('wave-interference', WaveInterference);
animationManager.register('states-of-matter', StatesOfMatter);

// Batch 5 Registration
animationManager.register('ionic-covalent', IonicCovalent);
animationManager.register('solubility', Solubility);
animationManager.register('reaction-rates', ReactionRates);
animationManager.register('redox', Redox);
animationManager.register('titration', Titration);
animationManager.register('electrolysis', Electrolysis);
animationManager.register('gas-diffusion', GasDiffusion);
animationManager.register('nuclear-fission', NuclearFission);
animationManager.register('molecular-polarity', MolecularPolarity);
animationManager.register('intermolecular-forces', IntermolecularForces);
animationManager.register('specific-heat', SpecificHeat);
animationManager.register('activation-energy', ActivationEnergy);
animationManager.register('equilibrium', Equilibrium);
animationManager.register('colligative', ColligativeProperties);
animationManager.register('atomic-spectra', AtomicSpectra);
animationManager.register('chromatography', Chromatography);
animationManager.register('galvanic-cell', GalvanicCell);
animationManager.register('blackbody', Blackbody);
animationManager.register('photoelectric', Photoelectric);
animationManager.register('rutherford', Rutherford);
animationManager.register('periodic-trends', PeriodicTrends);
animationManager.register('lewis-structures', LewisStructures);
animationManager.register('electron-config', ElectronConfiguration);
animationManager.register('flame-test', FlameTest);
animationManager.register('vapor-pressure', VaporPressure);
animationManager.register('distillation', Distillation);
animationManager.register('mass-spec', MassSpectrometry);
animationManager.register('buffers', Buffers);
animationManager.register('kinetics', KineticsCatalysts);
animationManager.register('hybridization', Hybridization);

// Batch 8
animationManager.register('polarity', MolecularPolarity);
animationManager.register('vsepr', VSEPRShapes);
animationManager.register('intermolecular', IntermolecularForces);
animationManager.register('crystals', CrystalLattices);
animationManager.register('resonance', Resonance);

// Batch 9
animationManager.register('le-chatelier', LeChateliersPrinciple);
animationManager.register('exo-endo', EndothermicExothermic);
animationManager.register('gibbs', GibbsFreeEnergy);
// 'solubility' (Salt version) conflicts with batch 5. The new class is Solubility from simulations/chemistry/Solubility.ts
// The import 'Solubility' on line 39 is likely the older one or duplicate. 
// I will assume the new one is intended and re-register or check conflicts.
// Wait, import shows: import { Solubility } from './simulations/chemistry/Solubility'; at line 39.
// And another one registered at 105: animationManager.register('solubility', Solubility);
// This 'solubility' key is likely what is used in SimulationData.
// The new one (Ksp) uses "id": "solubility" in SimData (Batch 9).
// The old one (Batch 5) used "id": "solubility" too?
// Checking SimData... Step 1190 showed 'solubility' in Batch 9.
// If both exist, the key in registry must match.
// I'll assume the update is fine, but I need to make sure I am using the NEW classes.
// imports: 
// line 39: import { Solubility } from './simulations/chemistry/Solubility'; -> This is the new one I wrote? Yes.
// line 43: import { Electrolysis } from './simulations/chemistry/Electrolysis'; -> This is the new one.
// So lines 105 and 109 already register them?
// 105: animationManager.register('solubility', Solubility);
// 109: animationManager.register('electrolysis', Electrolysis);
// So I don't need to re-register them if they are the SAME file.
// But wait, the previous batch 5 list suggests they were ALREADY there? 
// The user asked for "10 MORE". 
// If I overwrote the file, then the import points to the new code.
// So I just need to register the *other* 8 brand new ones.
// The IDs in SimulationData are:
// polarity, vsepr, intermolecular, crystals, resonance
// le-chatelier, exo-endo, gibbs, solubility, electrolysis
// So I need to register: polarity, vsepr, intermolecular, crystals, resonance, le-chatelier, exo-endo, gibbs.
// 'solubility' and 'electrolysis' are already registered at 105/109.

// Batch 10: Nuclear
import { AlphaDecay } from './simulations/chemistry/AlphaDecay';
import { BetaDecay } from './simulations/chemistry/BetaDecay';
import { HalfLife } from './simulations/chemistry/HalfLife';
import { RadioactiveDating } from './simulations/chemistry/RadioactiveDating';
import { ElectronDiffraction } from './simulations/chemistry/ElectronDiffraction';

// Batch 11: Organic
import { Polymerization } from './simulations/chemistry/Polymerization';
import { LipidBuilder } from './simulations/chemistry/LipidBuilder';
import { ProteinFolding } from './simulations/chemistry/ProteinFolding';
import { EnzymeKinetics } from './simulations/chemistry/EnzymeKinetics';
import { PCR } from './simulations/chemistry/PCR';

// ... (in Init) ...

// Batch 10
animationManager.register('alpha-decay', AlphaDecay);
animationManager.register('beta-decay', BetaDecay);
animationManager.register('half-life', HalfLife);
animationManager.register('radio-dating', RadioactiveDating);
animationManager.register('electron-diffraction', ElectronDiffraction);

// Batch 11
animationManager.register('polymerization', Polymerization);
animationManager.register('lipids', LipidBuilder);
animationManager.register('protein-folding', ProteinFolding);
animationManager.register('enzymes', EnzymeKinetics);
animationManager.register('pcr', PCR);
