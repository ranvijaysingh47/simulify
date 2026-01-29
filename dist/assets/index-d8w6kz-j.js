(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const _n=[{id:"projectile-game",title:"Target Practice",description:"Challenge Mode: Hit the targets with precision!",category:"Games",color:"purple-600",explainer:"Test your skills! adjust angle and speed to hit target zones at specific distances. Complete all levels to win."},{id:"projectile-motion",title:"Projectile Motion",description:"Explore trajectory, velocity vectors, and gravity.",category:"Physics",color:"blue-500",explainer:"Objects in motion stay in motion unless acted upon by gravity! See how launch angle and speed determine how far the ball flies."},{id:"bouncing-balls",title:"Bouncing Balls",description:"Investigate collisions, gravity, drag, and mass.",category:"Physics",color:"blue-600",explainer:"Conservation of momentum in action! observe how energy is lost to friction and heat with each bounce."},{id:"pendulum-wave",title:"Pendulum Wave",description:"Observe phase synchronization and damping.",category:"Physics",color:"blue-700",explainer:"Physics as art! Shorter pendulums swing faster than long ones, creating mesmerizing wave patterns as they phase in and out of sync."},{id:"spring-mass",title:"Spring Mass",description:"Study Hooke's Law, energy, and stiffness.",category:"Physics",color:"blue-800",explainer:"Hooke's Law (F = -kx) governs springs. A stiffer spring pulls back harder, while a heavier mass slows down the oscillation."},{id:"gas-laws",title:"Gas Laws",description:"Demonstrate PV=nRT with particles in a box.",category:"Chemistry",color:"orange-500",explainer:"Hotter particles move faster! See how increasing Temperature (T) or reducing Volume (V) drives up Pressure (P)."},{id:"ph-scale",title:"pH Scale",description:"Test acidity and basicity with indicators.",category:"Chemistry",color:"orange-600",explainer:"pH measures H+ ion concentration. Lower pH means more acidic (more H+), while higher pH means more basic (fewer H+)."},{id:"atomic-orbitals",title:"Atomic Orbitals",description:"Visualize s, p, d orbitals and energy levels.",category:"Chemistry",color:"orange-700",explainer:"Electrons don't orbit like planets! They exist in 'clouds' of probability called orbitals. See the strange shapes of s, p, and d shells."},{id:"fractal-tree",title:"Fractal Tree",description:"Create recursive L-systems with adjustable angles.",category:"Math",color:"green-500",explainer:"Nature loves recursion! A simple rule repeated over and over can create complex, organic structures like trees and ferns."},{id:"fourier-series",title:"Fourier Series",description:"Decompose waveforms into sine waves.",category:"Math",color:"green-600",explainer:"Any repeating signal can be built by adding simple sine waves together. This 'math magic' powers your MP3s and JPGs!"},{id:"conic-sections",title:"Conic Sections",description:"Generate ellipses, parabolas, and hyperbolas.",category:"Math",color:"green-700",explainer:"Slice a cone at different angles to reveal circle, ellipses, parabolas, and hyperbolas—the shapes of planetary orbits!"},{id:"population-growth",title:"Population Growth",description:"Model logistic and exponential growth.",category:"Biology",color:"teal-500",explainer:"Populations explode exponentially until resources run out. Watch the transition from rapid growth to a stable 'carrying capacity'."},{id:"wave-interference",title:"Wave Interference",description:"Experiment with ripples and slit diffraction.",category:"Biology",color:"teal-600",explainer:"Waves can add up (constructive) or cancel out (destructive). This interference creates the complex ripple patterns you see in ponds."},{id:"balancing-equations",title:"Balancing Equations",description:"Balance chemical equations with visual scales.",category:"Chemistry",color:"orange-500",explainer:"Matter cannot be created or destroyed! You must have the same number of atoms on both sides of the arrow."},{id:"molarity",title:"Molarity",description:"Adjust solute amount and volume to change concentration.",category:"Chemistry",color:"orange-600",explainer:"Concentration (Molarity) is moles per liter. Adding water dilutes the mix, while adding powder makes it stronger and darker."},{id:"isotopes",title:"Isotopes & Atomic Mass",description:"Create isotopes and see how abundance affects average mass.",category:"Chemistry",color:"orange-700",explainer:"Same element, different weight! Isotopes have the same protons but different neutrons. Average atomic mass depends on which is most common."},{id:"build-an-atom",title:"Build an Atom",description:"Construct atoms from protons, neutrons, and electrons.",category:"Chemistry",color:"orange-800",explainer:"Protons define the element. Neutrons add stability. Electrons determine charge. Build your own periodic table element!"},{id:"states-of-matter",title:"States of Matter",description:"Watch particles heat up and cool down in different phases.",category:"Chemistry",color:"amber-500",explainer:"Solids vibrate in place. Liquids slide past each other. Gases fly freely. Heat adds energy to break them apart!"},{id:"concentration",title:"Concentration",description:"Explore Beer's Law with solution color and light intensity.",category:"Chemistry",color:"amber-600",explainer:"Darker solutions absorb more light. Beer's Law says absorbance is directly proportional to concentration."},{id:"acid-base-solutions",title:"Acid-Base Solutions",description:"Visualize strong vs weak acids/bases and conductivity.",category:"Chemistry",color:"amber-700",explainer:"Strong acids break apart completely (dissociate). Weak ones mostly stay together. More ions mean better electricity conduction!"},{id:"reactants-products",title:"Reactants & Products",description:"See how reactants determine product amounts (Limiting Reagent).",category:"Chemistry",color:"red-500",explainer:"Making molecules is like making sandwiches. If you run out of bread (limiting reagent), you can't make more sandwiches, no matter how much cheese you have!"},{id:"molecular-shapes",title:"Molecular Shapes",description:"Visualize 3D VSEPR shapes by adding bonds/lone pairs.",category:"Chemistry",color:"red-600",explainer:"Electron pairs repel each other! VSEPR theory predicts how atoms arrange themselves to stay as far apart as possible."},{id:"ionic-covalent",title:"Ionic vs Covalent",description:"Compare electron transfer vs sharing.",category:"Chemistry",color:"orange-500",explainer:"Ionic bonds steal electrons. Covalent bonds share them. See how the electrons move differently in each bond type!"},{id:"reaction-rates",title:"Reaction Rates",description:"Kinetics, temperature, and collision theory.",category:"Chemistry",color:"orange-700",explainer:"Molecules must collide to react! Heating them up makes them move faster and hit harder, speeding up the reaction."},{id:"redox",title:"Redox Reactions",description:"Track electron flow and oxidation states.",category:"Chemistry",color:"orange-800",explainer:"OIL RIG: Oxidation Is Loss, Reduction Is Gain. Watch electrons jump from Zinc to Copper, generating electrical potential."},{id:"titration",title:"Titration",description:"Neutralization and pH curves.",category:"Chemistry",color:"amber-500",explainer:"Find the unknown concentration! Carefully add base to acid until the indicator changes color at the endpoint."},{id:"gas-diffusion",title:"Gas Diffusion",description:"Graham's Law of Effusion.",category:"Chemistry",color:"amber-700",explainer:"Lighter gases fly faster! NH3 (light) zips across the tube faster than HCl (heavy), so the white ring forms closer to the slowpoke."},{id:"nuclear-fission",title:"Nuclear Fission",description:"Chain reactions and energy release.",category:"Chemistry",color:"red-500",explainer:"One neutron splits an atom, releasing energy and MORE neutrons. Those neutrons split more atoms... boom! That's a chain reaction."},{id:"molecular-polarity",title:"Molecular Polarity",description:"Dipoles and electronegativity.",category:"Chemistry",color:"red-600",explainer:"Some atoms are greedy! Electronegative atoms pull electrons closer, creating a 'pole' with a partial negative charge."},{id:"intermolecular-forces",title:"Intermolecular Forces",description:"Hydrogen bonding and dispersion forces.",category:"Chemistry",color:"red-700",explainer:"Sticky molecules! Forces like Hydrogen Bonds hold water together as a liquid. Without them, it would boil away instantly."},{id:"specific-heat",title:"Specific Heat",description:"Calorimetry and heating curves.",category:"Chemistry",color:"orange-500",explainer:"Water is stubborn! It takes A LOT of energy to heat it up compared to metal. That's why the ocean stays cool in summer."},{id:"activation-energy",title:"Activation Energy",description:"Exothermic vs Endothermic pathways.",category:"Chemistry",color:"orange-600",explainer:"Reactions need a kickstart! Molecules need enough energy to overcome the 'Activation Barrier' before they can turn into products."},{id:"equilibrium",title:"Equilibrium",description:"Le Chatelier's Principle.",category:"Chemistry",color:"orange-700",explainer:"Balance in all things. If you add more Reactants, the system fights back by making more Products to restore equilibrium."},{id:"colligative",title:"Colligative Properties",description:"Freezing point depression.",category:"Chemistry",color:"orange-800",explainer:"Salt stops ice from forming! Dissolved particles get in the way of water crystals, lowering the freezing point. That's why we salt icy roads."},{id:"atomic-spectra",title:"Atomic Spectra",description:"Emission lines of elements.",category:"Chemistry",color:"amber-500",explainer:"Every element has a fingerprint! When heated, atoms emit light at specific colors (wavelengths) unique to them."},{id:"chromatography",title:"Chromatography",description:"Separating mixture components.",category:"Chemistry",color:"amber-600",explainer:"The Ink Race! Some dyes stick to the paper (stationary), while others flow with the water (mobile), separating the colors."},{id:"galvanic-cell",title:"Galvanic Cell",description:"Generate voltage from redox.",category:"Chemistry",color:"amber-700",explainer:"Batteries work by giving electrons a path to flow from the Anode to the Cathode, powering your devices along the way."},{id:"blackbody",title:"Blackbody Radiation",description:"Temperature and color spectrum.",category:"Chemistry",color:"red-500",explainer:"Hot things glow! As temperature rises, the color shifts from Red (cool) to Yellow to Blue-White (extremely hot)."},{id:"photoelectric",title:"Photoelectric Effect",description:"Photons ejecting electrons.",category:"Chemistry",color:"red-600",explainer:"Light creates electricity! If light particles (photons) hit a metal with enough energy, they knock electrons loose."},{id:"rutherford",title:"Rutherford Scattering",description:"Gold foil experiment.",category:"Chemistry",color:"red-700",explainer:"Atoms are mostly empty space! But there's a tiny, dense, positive Nucleus in the center that can bounce alpha particles backward."},{id:"periodic-trends",title:"Periodic Trends",description:"Explore atomic radius, ionization energy, and electronegativity trends.",category:"Chemistry",color:"purple-500",explainer:"The Periodic Table is a map! Elements get bigger as you go down, and smaller as you go right. See the patterns of the universe."},{id:"lewis-structures",title:"Lewis Structures",description:"Build molecules by sharing electron pairs.",category:"Chemistry",color:"purple-600",explainer:"Connect the dots! Atoms share electrons to fill their outer shells (Octet Rule). Draw lines to show bonds and dots for lone pairs."},{id:"electron-config",title:"Electron Configuration",description:"Fill orbitals following the Aufbau Principle.",category:"Chemistry",color:"purple-700",explainer:"1s, 2s, 2p... Electrons fill the lowest energy rooms first! Follow the diagonal rule to map out where every electron lives."},{id:"flame-test",title:"Flame Test",description:"Identify metal ions by their flame color.",category:"Chemistry",color:"purple-800",explainer:"Fireworks science! Heating metals excites their electrons. When they fall back down, they release light of specific colors. Copper is green, Strontium is red!"},{id:"vapor-pressure",title:"Vapor Pressure",description:"Liquid-gas equilibrium and boiling points.",category:"Chemistry",color:"indigo-500",explainer:"The fight to escape! Molecules in a liquid want to fly away. When Vapor Pressure equals Atmospheric Pressure, the liquid boils!"},{id:"distillation",title:"Distillation",description:"Separate mixtures based on boiling points.",category:"Chemistry",color:"indigo-600",explainer:"Boil it to clean it! Alcohol boils before water. By heating the mix just right, we can catch the alcohol vapor and leave the water behind."},{id:"mass-spec",title:"Mass Spectrometry",description:"Separate ions by mass-to-charge ratio.",category:"Chemistry",color:"indigo-700",explainer:"Cornering feels heavy! Heavier ions can't turn corners as sharply as lighter ones. Magnets separate them by weight to identify molecules."},{id:"buffers",title:"Buffers",description:"Resist pH changes with weak acids/bases.",category:"Chemistry",color:"indigo-800",explainer:"Chemical shock absorbers! Buffers soak up extra acid or base to keep the pH steady. Your blood is a buffer system!"},{id:"kinetics",title:"Kinetics & Catalysts",description:"Reaction energy diagrams and activation energy.",category:"Chemistry",color:"blue-500",explainer:"Speed it up! Catalysts lower the 'Activation Energy' hill, making it easier for reactants to slide down into products."},{id:"hybridization",title:"Hybridization",description:"Visualize sp, sp2, sp3 orbital mixing.",category:"Chemistry",color:"blue-600",explainer:"Mashing up orbitals! To make equal bonds, carbon mixes its s and p orbitals together to form new 'hybrid' shapes like sp3."},{id:"polarity",title:"Molecular Polarity",description:"Explore dipole moments.",category:"Chemistry",color:"blue-500",explainer:"See how electronegativity differences create polar molecules."},{id:"vsepr",title:"VSEPR Shapes",description:"3D Molecular Geometries.",category:"Chemistry",color:"purple-600",explainer:"Visualize electron domains and resulting molecular shapes."},{id:"intermolecular",title:"Intermolecular Forces",description:"London, Dipole, H-Bonding.",category:"Chemistry",color:"cyan-500",explainer:"Forces between molecules determine boiling points and states."},{id:"crystals",title:"Crystal Lattices",description:"Solid structures.",category:"Chemistry",color:"emerald-600",explainer:"Inspect simple cubic, BCC, and FCC crystal structures."},{id:"resonance",title:"Resonance",description:"Delocalized elections.",category:"Chemistry",color:"indigo-600",explainer:"See how electrons are shared across multiple bonds."},{id:"le-chatelier",title:"Le Chatelier's Principle",description:"Equilibrium shifts.",category:"Chemistry",color:"orange-500",explainer:"Change Concentration, Pressure, or Temp to shift equilibrium."},{id:"exo-endo",title:"Exo vs Endothermic",description:"Heat flow in reactions.",category:"Chemistry",color:"red-500",explainer:"Track energy changes and temperature flow in reactions."},{id:"gibbs",title:"Gibbs Free Energy",description:"Spontaneity calculator.",category:"Chemistry",color:"pink-600",explainer:"Calculate Delta G based on Enthalpy and Entropy."},{id:"solubility",title:"Solubility (Ksp)",description:"Precipitation reactions.",category:"Chemistry",color:"teal-500",explainer:"Dissolve salts until saturation is reached."},{id:"electrolysis",title:"Electrolysis",description:"Electrolytic cells.",category:"Chemistry",color:"yellow-600",explainer:"Use electricity to drive non-spontaneous reactions."},{id:"alpha-decay",title:"Alpha Decay",description:"Unstable nucleus emits Helium.",category:"Chemistry",color:"purple-500",explainer:"Watch a Polonium nucleus eject an Alpha particle to become Lead."},{id:"beta-decay",title:"Beta Decay",description:"Neutron turns into Proton.",category:"Chemistry",color:"orange-600",explainer:"A neutron decays into a proton and an electron (beta particle)."},{id:"half-life",title:"Half Life",description:"Radioactive decay rates.",category:"Chemistry",color:"green-500",explainer:"Track how long it takes for 50% of a sample to decay."},{id:"radio-dating",title:"Radioactive Dating",description:"Carbon-14 dating.",category:"Chemistry",color:"stone-500",explainer:"Use decay ratios to calculate the age of ancient objects."},{id:"electron-diffraction",title:"Electron Diffraction",description:"Wave-particle duality.",category:"Chemistry",color:"cyan-600",explainer:"See electrons behave like waves around obstacles."},{id:"polymerization",title:"Polymerization",description:"Build long chains.",category:"Chemistry",color:"pink-500",explainer:"Link monomers together to create plastics like polyethylene."},{id:"lipids",title:"Lipid Builder",description:"Fats and oils.",category:"Chemistry",color:"yellow-500",explainer:"Construct triglycerides and phospholipid bilayers."},{id:"protein-folding",title:"Protein Folding",description:"Amino acid chains.",category:"Chemistry",color:"violet-500",explainer:"See how hydrophobic and hydrophilic forces shape proteins."},{id:"enzymes",title:"Enzyme Kinetics",description:"Lock and key model.",category:"Chemistry",color:"teal-500",explainer:"Substrates bind to active sites to speed up reactions."},{id:"pcr",title:"PCR Simulation",description:"DNA amplification.",category:"Chemistry",color:"rose-500",explainer:"Polymerase Chain Reaction: Heat, Anneal, Extend to copy DNA."}];class pt{canvas;ctx;width;height;addControl;updateData;constructor(t,e,i,n){this.canvas=t,this.ctx=e,this.width=t.width,this.height=t.height,this.addControl=i,this.updateData=n}reset(){}destroy(){}drawSphere(t,e,i,n){if(i<2){this.ctx.fillStyle=n,this.ctx.beginPath(),this.ctx.arc(t,e,i,0,Math.PI*2),this.ctx.fill();return}const s=this.ctx.createRadialGradient(t-i*.3,e-i*.3,i*.1,t,e,i);s.addColorStop(0,"white"),s.addColorStop(.4,n),s.addColorStop(1,"black"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(t,e,i,0,Math.PI*2),this.ctx.fill()}}class Ll{currentSim=null;animationId=null;canvas;ctx;controlsContainer;dataContainer;playButton;playIcon;isRunning=!1;registry={};constructor(){this.canvas=document.getElementById("sim-canvas"),this.ctx=this.canvas.getContext("2d"),this.controlsContainer=document.getElementById("sim-controls"),this.dataContainer=document.getElementById("sim-data"),this.playButton=document.getElementById("sim-play-pause"),this.playIcon=document.getElementById("play-icon"),window.addEventListener("resize",()=>{}),this.playButton&&(this.playButton.onclick=()=>this.togglePlay())}register(t,e){this.registry[t]=e}loadSim(t){this.currentSim&&this.currentSim.destroy(),this.stopSim(),this.controlsContainer.innerHTML="",this.dataContainer.innerHTML="",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const e=document.getElementById("canvas-container");e&&e.querySelectorAll(".three-canvas").forEach(s=>s.remove()),this.canvas.style.display="block",this.canvas.style.opacity="1",this.canvas.style.zIndex="10";const i=this.registry[t];i?(this.currentSim=new i(this.canvas,this.ctx,this.createControl.bind(this),this.updateData.bind(this)),this.startSim()):(console.error(`Simulation ${t} not found in registry.`),this.updateData(`Error: Simulation '${t}' not implemented yet.`))}startSim(){console.log("AnimationManager: Starting Sim"),!this.isRunning&&(this.isRunning=!0,this.playIcon&&(this.playIcon.textContent="⏸"),this.loop(),console.log("AnimationManager: Loop started"))}stopSim(){this.isRunning=!1,this.animationId&&cancelAnimationFrame(this.animationId),this.playIcon&&(this.playIcon.textContent="▶")}togglePlay(){this.isRunning?this.stopSim():this.startSim()}reset(){this.currentSim&&(this.currentSim.reset(),this.isRunning||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.currentSim.draw()))}loop(){this.isRunning&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.currentSim&&(this.currentSim.update(),this.currentSim.draw()),this.animationId=requestAnimationFrame(this.loop.bind(this)))}createControl(t,e,i,n){const s=document.createElement("div");s.className="flex flex-col space-y-1";const a=document.createElement("label");if(a.className="text-sm font-medium text-gray-700 flex justify-between",t==="slider"){a.innerHTML=`<span>${e}</span><span class="text-gray-500 font-normal" id="val-${e.replace(/\s/g,"")}">${i.value}</span>`;const o=document.createElement("input");o.type="range",o.min=String(i.min||0),o.max=String(i.max||100),o.step=String(i.step||1),o.value=String(i.value||0),o.className="w-full",o.addEventListener("input",l=>{const c=parseFloat(l.target.value),h=document.getElementById(`val-${e.replace(/\s/g,"")}`);h&&(h.textContent=String(c)),n(c)}),s.appendChild(a),s.appendChild(o)}else if(t==="checkbox"){s.className="flex flex-row items-center space-x-3";const o=document.createElement("input");o.type="checkbox",o.checked=!!i.checked,o.className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300",o.addEventListener("change",l=>n(l.target.checked)),a.textContent=e,s.appendChild(o),s.appendChild(a)}else if(t==="button"){const o=document.createElement("button");o.textContent=e,o.className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50",o.onclick=()=>n(null),s.appendChild(o)}this.controlsContainer.appendChild(s)}updateData(t){this.dataContainer.innerHTML=t.replace(/\n/g,"<br>")}}class Il{gridElement;modalElement;searchInput;animationManager;constructor(t){this.animationManager=t,this.gridElement=document.getElementById("sim-grid"),this.modalElement=document.getElementById("sim-modal"),this.searchInput=document.getElementById("search-input"),this.init()}init(){this.renderGrid(_n),this.setupEventListeners()}renderGrid(t){this.gridElement.innerHTML="",t.forEach(e=>{const i=document.createElement("div");i.className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full cursor-pointer",i.onclick=()=>this.openSim(e.id);let n="bg-gradient-to-br from-indigo-500 to-blue-600",s="⚛️",a="bg-indigo-100 text-indigo-700";e.category==="Chemistry"?(n="bg-gradient-to-br from-purple-500 to-pink-600",s="⚗️",a="bg-purple-100 text-purple-700"):e.category==="Math"?(n="bg-gradient-to-br from-emerald-500 to-teal-600",s="📐",a="bg-emerald-100 text-emerald-700"):e.category==="Biology"&&(n="bg-gradient-to-br from-amber-400 to-orange-500",s="🧬",a="bg-amber-100 text-amber-800"),i.innerHTML=`
                <div class="relative h-48 ${n} p-6 flex items-center justify-center overflow-hidden">
                    <!-- Abstract Shapes overlay -->
                    <div class="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div class="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-black opacity-5 blur-2xl"></div>
                    
                    <span class="text-6xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300 filter">${s}</span>
                    
                    <div class="absolute top-4 right-4">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-white bg-black/20 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                            v2.0
                        </span>
                    </div>
                </div>

                <div class="p-5 flex-grow flex flex-col relative bg-white">
                    <div class="absolute -top-3 left-5">
                         <span class="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${a} shadow-sm border border-white">
                            ${e.category}
                        </span>
                    </div>
                    
                    <div class="mt-2">
                        <h3 class="font-heading font-bold text-xl text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">${e.title}</h3>
                        <p class="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4 font-normal">${e.description}</p>
                    </div>

                    <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-xs font-medium text-slate-400">Interactive Sim</span>
                        <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>
                </div>
            `,this.gridElement.appendChild(i)})}setupEventListeners(){document.querySelectorAll(".filter-btn").forEach(a=>{a.addEventListener("click",o=>{const l=o.target;document.querySelectorAll(".filter-btn").forEach(u=>{u.classList.remove("bg-phetBlue","text-white"),u.classList.add("bg-white","text-gray-600")}),l.classList.remove("bg-white","text-gray-600"),l.classList.add("bg-phetBlue","text-white");const c=l.dataset.category,h=c==="All"?_n:_n.filter(u=>u.category===c);this.renderGrid(h)})}),this.searchInput&&this.searchInput.addEventListener("input",a=>{const o=a.target.value.toLowerCase(),l=_n.filter(c=>c.title.toLowerCase().includes(o)||c.description.toLowerCase().includes(o));this.renderGrid(l)});const t=document.getElementById("modal-close");t&&(t.onclick=()=>this.closeSim());const e=document.getElementById("modal-backdrop");e&&(e.onclick=()=>this.closeSim());const i=document.getElementById("modal-back-btn");i&&(i.onclick=()=>this.closeSim());const n=document.getElementById("modal-cancel-btn");n&&(n.onclick=()=>this.closeSim());const s=document.getElementById("sim-reset");s&&(s.onclick=()=>this.animationManager.reset())}openSim(t){const e=_n.find(a=>a.id===t);if(!e)return;const i=document.getElementById("modal-title");i&&(i.textContent=e.title);const n=document.getElementById("modal-desc");n&&(n.textContent=e.description);const s=document.getElementById("modal-explainer");s&&(s.textContent=e.explainer||"Explore the simulation to learn more!"),this.modalElement.classList.remove("hidden"),document.body.style.overflow="hidden",this.animationManager.loadSim(e.id)}closeSim(){this.modalElement.classList.add("hidden"),document.body.style.overflow="",this.animationManager.stopSim()}}let $t=class Ze{x;y;constructor(t,e){this.x=t,this.y=e}add(t){return new Ze(this.x+t.x,this.y+t.y)}sub(t){return new Ze(this.x-t.x,this.y-t.y)}mult(t){return new Ze(this.x*t,this.y*t)}div(t){return t===0?new Ze(0,0):new Ze(this.x/t,this.y/t)}mag(){return Math.sqrt(this.x*this.x+this.y*this.y)}magSq(){return this.x*this.x+this.y*this.y}normalize(){const t=this.mag();return t!==0?this.div(t):new Ze(0,0)}limit(t){return this.mag()>t?this.normalize().mult(t):this}dist(t){return t.sub(this).mag()}heading(){return Math.atan2(this.y,this.x)}copy(){return new Ze(this.x,this.y)}static add(t,e){return new Ze(t.x+e.x,t.y+e.y)}static sub(t,e){return new Ze(t.x-e.x,t.y-e.y)}static dist(t,e){return t.dist(e)}};const Ul={gravity:new $t(0,.5),checkCircleCollision(r,t){return r.pos.dist(t.pos)<r.radius+t.radius},resolveElasticCollision(r,t){const e=$t.sub(t.pos,r.pos),i=e.mag();if(i===0)return;const n=e.div(i),s=$t.sub(r.vel,t.vel),a=s.x*n.x+s.y*n.y;if(a<0)return;const o=2*a/(r.mass+t.mass);r.vel.x-=o*t.mass*n.x,r.vel.y-=o*t.mass*n.y,t.vel.x+=o*r.mass*n.x,t.vel.y+=o*r.mass*n.y}};class zo extends pt{angle=45;speed=15;gravity=9.8;showVectors=!0;balls=[];constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Angle",{min:0,max:90,step:1,value:45},s=>this.angle=s),this.addControl("slider","Initial Speed",{min:5,max:30,step:1,value:15},s=>this.speed=s),this.addControl("slider","Gravity",{min:1,max:20,step:.5,value:9.8},s=>this.gravity=s),this.addControl("checkbox","Show Vectors",{checked:!0},s=>this.showVectors=s),this.addControl("button","Fire Cannon",{},()=>this.fire())}fire(){const t=this.angle*Math.PI/180,e=Math.cos(t)*this.speed,i=-Math.sin(t)*this.speed;this.balls.push({pos:new $t(50,this.height-50),vel:new $t(e,i),path:[],time:0})}update(){this.balls.forEach(i=>{i.time%2<1&&i.path.push(i.pos.copy()),i.time++,i.vel.y+=this.gravity*.1,i.pos=i.pos.add(i.vel.mult(.1)),i.pos.y>this.height-10&&(i.pos.y=this.height-10,i.vel.y*=-.6,i.vel.x*=.8,Math.abs(i.vel.y)<1&&(i.vel.y=0),Math.abs(i.vel.x)<.1&&(i.vel.x=0))}),this.balls.length>5&&this.balls.shift();const e=this.balls[this.balls.length-1];if(e){const i=Math.max(0,(this.height-50-e.pos.y)/10).toFixed(1),n=((e.pos.x-50)/10).toFixed(1),s=e.vel.mag().toFixed(1);this.updateData(`Height: ${i}m | Distance: ${n}m | Velocity: ${s}m/s`)}else this.updateData("Ready to fire!")}draw(){this.ctx.fillStyle="#444";const t=new $t(50,this.height-50);this.ctx.save(),this.ctx.translate(t.x,t.y),this.ctx.rotate(-this.angle*Math.PI/180),this.ctx.fillRect(0,-10,60,20),this.ctx.restore(),this.ctx.beginPath(),this.ctx.arc(50,this.height-50,20,0,Math.PI*2),this.ctx.fill(),this.balls.forEach(e=>{if(this.ctx.beginPath(),this.ctx.strokeStyle="rgba(0,0,0,0.2)",e.path.length>0){this.ctx.moveTo(e.path[0].x,e.path[0].y);for(let i of e.path)this.ctx.lineTo(i.x,i.y)}this.ctx.stroke(),this.drawSphere(e.pos.x,e.pos.y,8,"#FF6C00"),this.showVectors&&e.vel.mag()>1&&(this.ctx.beginPath(),this.ctx.strokeStyle="green",this.ctx.moveTo(e.pos.x,e.pos.y),this.ctx.lineTo(e.pos.x+e.vel.x*5,e.pos.y+e.vel.y*5),this.ctx.stroke())}),this.ctx.fillStyle="#8bc34a",this.ctx.fillRect(0,this.height-10,this.width,10)}reset(){this.balls=[]}}class Nl extends pt{balls=[];gravity=.5;friction=.99;bounciness=.8;constructor(t,e,i,n){super(t,e,i,n);for(let s=0;s<5;s++)this.addBall();this.addControl("slider","Gravity",{min:0,max:2,step:.1,value:.5},s=>this.gravity=s),this.addControl("slider","Bounciness",{min:.1,max:1.2,step:.1,value:.8},s=>this.bounciness=s),this.addControl("button","Add Ball",{},()=>this.addBall())}addBall(){this.balls.push({pos:new $t(Math.random()*this.width,Math.random()*(this.height/2)),vel:new $t((Math.random()-.5)*10,(Math.random()-.5)*10),radius:15+Math.random()*10,color:`hsl(${Math.random()*360}, 70%, 50%)`,mass:1})}update(){this.balls.forEach(e=>{e.vel.y+=this.gravity,e.vel=e.vel.mult(this.friction),e.pos=e.pos.add(e.vel),e.pos.x<e.radius&&(e.pos.x=e.radius,e.vel.x*=-this.bounciness),e.pos.x>this.width-e.radius&&(e.pos.x=this.width-e.radius,e.vel.x*=-this.bounciness),e.pos.y>this.height-e.radius&&(e.pos.y=this.height-e.radius,e.vel.y*=-this.bounciness),e.pos.y<e.radius&&(e.pos.y=e.radius,e.vel.y*=-this.bounciness)});for(let e=0;e<this.balls.length;e++)for(let i=e+1;i<this.balls.length;i++){const n=this.balls[e],s=this.balls[i],a=n.pos.dist(s.pos);if(a<n.radius+s.radius){Ul.resolveElasticCollision(n,s);const o=(n.radius+s.radius-a)/2,l=s.pos.sub(n.pos).normalize();n.pos=n.pos.sub(l.mult(o)),s.pos=s.pos.add(l.mult(o))}}const t=this.balls.reduce((e,i)=>e+.5*i.mass*i.vel.magSq(),0).toFixed(0);this.updateData(`Total Kinetic Energy: ${t} J
Counts: ${this.balls.length}`)}draw(){this.balls.forEach(t=>{this.drawSphere(t.pos.x,t.pos.y,t.radius,t.color)})}reset(){this.balls=[];for(let t=0;t<5;t++)this.addBall()}}class Fl extends pt{pendulums=[];numPendulums=12;time=0;speed=.5;constructor(t,e,i,n){super(t,e,i,n),this.initPendulums(),this.addControl("slider","Speed",{min:0,max:2,step:.1,value:.5},s=>this.speed=s),this.addControl("slider","Count",{min:5,max:20,step:1,value:12},s=>{this.numPendulums=s,this.initPendulums()})}initPendulums(){this.pendulums=[];const t=1e4;for(let e=0;e<this.numPendulums;e++){const i=10+e,n=t/(i*i);this.pendulums.push({length:n*8,angle:Math.PI/4,freq:i,color:`hsl(${e*360/this.numPendulums}, 70%, 50%)`})}}update(){this.time+=.05*this.speed,this.pendulums.forEach(t=>{t.angle=Math.PI/4*Math.cos(this.time*t.freq*.05)}),this.updateData(`Time: ${this.time.toFixed(1)} s`)}draw(){const t=new $t(this.width/2,50);this.ctx.lineWidth=2,this.pendulums.forEach(e=>{const i=t.x+Math.sin(e.angle)*e.length,n=t.y+Math.cos(e.angle)*e.length;this.ctx.beginPath(),this.ctx.strokeStyle="#ccc",this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(i,n),this.ctx.stroke(),this.drawSphere(i,n,10,e.color)})}reset(){this.time=0}}class Ol extends pt{massPos;anchor;velocity;k=.5;mass=20;restLength=200;damping=.98;isDragging=!1;constructor(t,e,i,n){super(t,e,i,n),this.massPos=new $t(this.width/2,200),this.anchor=new $t(this.width/2,50),this.velocity=new $t(0,0),this.addControl("slider","Spring Stiffness (k)",{min:.1,max:2,step:.1,value:.5},s=>this.k=s),this.addControl("slider","Mass",{min:5,max:50,step:1,value:20},s=>this.mass=s),this.addControl("slider","Damping",{min:.9,max:1,step:.001,value:.98},s=>this.damping=s),this.canvas.addEventListener("mousedown",this.handleInput.bind(this)),this.canvas.addEventListener("mouseup",()=>this.isDragging=!1),this.canvas.addEventListener("mousemove",s=>{if(this.isDragging){const a=this.canvas.getBoundingClientRect();this.massPos.x=s.clientX-a.left,this.massPos.y=s.clientY-a.top,this.velocity=new $t(0,0)}})}handleInput(t){const e=this.canvas.getBoundingClientRect();new $t(t.clientX-e.left,t.clientY-e.top).dist(this.massPos)<25&&(this.isDragging=!0)}update(){if(!this.isDragging){const e=$t.sub(this.massPos,this.anchor),i=e.mag()-this.restLength;e.normalize();const s=$t.sub(this.massPos,this.anchor).normalize().mult(-1*this.k*i),a=new $t(0,this.mass*.5),l=s.add(a).div(this.mass);this.velocity=this.velocity.add(l),this.velocity=this.velocity.mult(this.damping),this.massPos=this.massPos.add(this.velocity)}const t=(.5*this.k*Math.pow(this.massPos.dist(this.anchor)-this.restLength,2)).toFixed(1);this.updateData(`Potential Energy: ${t} J
Displacement: ${(this.massPos.y-this.anchor.y).toFixed(0)}`)}draw(){this.ctx.beginPath(),this.ctx.strokeStyle="#555",this.ctx.lineWidth=4;const t=15,e=this.massPos.dist(this.anchor),i=this.massPos.sub(this.anchor).normalize(),n=new $t(-i.y,i.x);this.ctx.moveTo(this.anchor.x,this.anchor.y);for(let s=0;s<=t;s++){const a=s/t,o=s%2===0?15:-15;if(s===0||s===t){const l=this.anchor.add(i.mult(e*a));this.ctx.lineTo(l.x,l.y)}else{const l=this.anchor.add(i.mult(e*a)).add(n.mult(o));this.ctx.lineTo(l.x,l.y)}}this.ctx.stroke(),this.ctx.fillStyle="#333",this.ctx.fillRect(this.anchor.x-20,this.anchor.y-10,40,10),this.drawSphere(this.massPos.x,this.massPos.y,25,this.isDragging?"#ff9800":"#4caf50"),this.ctx.fillStyle="white",this.ctx.fillText(`${this.mass}kg`,this.massPos.x-10,this.massPos.y+5)}reset(){this.massPos=new $t(this.width/2,250),this.velocity=new $t(0,0)}}class Bl extends pt{particles=[];temperature=300;volume=500;pressure=0;boxHeight=400;particleCount=50;constructor(t,e,i,n){super(t,e,i,n),this.initParticles(),this.addControl("slider","Temperature (K)",{min:100,max:1e3,step:10,value:300},s=>{this.temperature=s,this.updateSpeed()}),this.addControl("slider","Volume",{min:200,max:700,step:10,value:500},s=>this.volume=s),this.addControl("slider","Particles",{min:10,max:200,step:10,value:50},s=>{this.particleCount=s,this.initParticles()})}initParticles(){this.particles=[];for(let t=0;t<this.particleCount;t++)this.particles.push({pos:new $t(Math.random()*this.volume,Math.random()*this.boxHeight),vel:new $t(Math.random()-.5,Math.random()-.5).normalize(),radius:3});this.updateSpeed()}updateSpeed(){const t=Math.sqrt(this.temperature)*.2;this.particles.forEach(e=>{e.vel.mag()===0&&(e.vel=new $t(Math.random()-.5,Math.random()-.5)),e.vel=e.vel.normalize().mult(t)})}update(){let t=0;const e=1;this.particles.forEach(n=>{n.pos=n.pos.add(n.vel.mult(e)),n.pos.x<n.radius&&(n.pos.x=n.radius,n.vel.x*=-1,t++),n.pos.x>this.volume-n.radius&&(n.pos.x=this.volume-n.radius,n.vel.x*=-1,t++),n.pos.y<n.radius&&(n.pos.y=n.radius,n.vel.y*=-1,t++),n.pos.y>this.boxHeight-n.radius&&(n.pos.y=this.boxHeight-n.radius,n.vel.y*=-1,t++)});const i=t*this.temperature/this.volume;this.pressure=this.pressure*.9+i*.1,this.updateData(`Pressure: ${this.pressure.toFixed(2)} atm
PV = ${(this.pressure*this.volume).toFixed(0)} | nRT = ${(this.particleCount*this.temperature*.05).toFixed(0)}`)}draw(){this.ctx.fillStyle="#f0f0f0",this.ctx.fillRect(0,0,this.volume,this.boxHeight),this.ctx.strokeStyle="#333",this.ctx.lineWidth=4,this.ctx.strokeRect(0,0,this.volume,this.boxHeight),this.particles.forEach(t=>{this.drawSphere(t.pos.x,t.pos.y,t.radius,"#E91E63")}),this.ctx.fillStyle="#666",this.ctx.fillRect(this.volume,0,10,this.boxHeight)}reset(){this.volume=500,this.initParticles()}}class kl extends pt{volume=.5;ph=7;substance="water";liquidColor=[200,200,255];showMeter=!0;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Add Water",{},()=>this.addVolume()),this.addControl("button","Drain",{},()=>this.drain()),this.addControl("slider","Solute Amount",{min:0,max:10,step:.1,value:5},s=>this.setConcentration(s)),this.addControl("checkbox","Show pH Meter",{checked:!0},s=>this.showMeter=s)}setConcentration(t){t<5?(this.ph=1+t/5*6,this.substance="acid"):(this.ph=7+(t-5)/5*7,this.substance="base"),this.updateColor()}addVolume(){this.volume<1&&(this.volume+=.1,this.ph<7&&(this.ph+=.1),this.ph>7&&(this.ph-=.1),this.updateColor())}drain(){this.volume>.1&&(this.volume-=.1)}updateColor(){this.ph<3?this.liquidColor=[255,0,0]:this.ph<5?this.liquidColor=[255,165,0]:this.ph<8?this.liquidColor=[0,255,0]:this.ph<11?this.liquidColor=[0,0,255]:this.liquidColor=[128,0,128]}update(){this.updateData(`pH: ${this.ph.toFixed(2)}
Volume: ${this.volume.toFixed(1)} L
Type: ${this.substance.toUpperCase()}`)}draw(){const s=300*this.volume;this.ctx.fillStyle=`rgba(${this.liquidColor[0]}, ${this.liquidColor[1]}, ${this.liquidColor[2]}, 0.6)`,this.ctx.fillRect(300,400-s,200,s),this.ctx.strokeStyle="#333",this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(300,100),this.ctx.lineTo(300,400),this.ctx.lineTo(500,400),this.ctx.lineTo(500,100),this.ctx.stroke(),this.showMeter&&(this.ctx.fillStyle="#666",this.ctx.fillRect(450,50,10,320),this.ctx.fillStyle="#000",this.ctx.fillRect(440,360,30,40),this.ctx.fillStyle="#333",this.ctx.fillRect(50,50,150,80),this.ctx.fillStyle="#b6ffa8",this.ctx.fillRect(60,60,130,60),this.ctx.fillStyle="black",this.ctx.font="30px monospace",this.ctx.fillText(this.ph.toFixed(2),80,100))}}const la="182",zl=0,Ua=1,Hl=2,us=1,Vl=2,An=3,wi=0,Ie=1,di=2,fi=0,on=1,Na=2,Fa=3,Oa=4,Gl=5,Bi=100,Wl=101,Xl=102,ql=103,$l=104,Yl=200,Kl=201,jl=202,Zl=203,ur=204,fr=205,Jl=206,Ql=207,tc=208,ec=209,ic=210,nc=211,sc=212,rc=213,ac=214,pr=0,mr=1,gr=2,cn=3,xr=4,_r=5,vr=6,yr=7,ca=0,oc=1,lc=2,ei=0,Ho=1,Vo=2,Go=3,Wo=4,Xo=5,qo=6,$o=7,Yo=300,Gi=301,hn=302,Sr=303,Mr=304,bs=306,br=1e3,ui=1001,Er=1002,Me=1003,cc=1004,zn=1005,Te=1006,Is=1007,zi=1008,Be=1009,Ko=1010,jo=1011,Rn=1012,ha=1013,ni=1014,Qe=1015,mi=1016,da=1017,ua=1018,Pn=1020,Zo=35902,Jo=35899,Qo=1021,tl=1022,$e=1023,gi=1026,Hi=1027,el=1028,fa=1029,dn=1030,pa=1031,ma=1033,fs=33776,ps=33777,ms=33778,gs=33779,Tr=35840,wr=35841,Ar=35842,Cr=35843,Rr=36196,Pr=37492,Dr=37496,Lr=37488,Ir=37489,Ur=37490,Nr=37491,Fr=37808,Or=37809,Br=37810,kr=37811,zr=37812,Hr=37813,Vr=37814,Gr=37815,Wr=37816,Xr=37817,qr=37818,$r=37819,Yr=37820,Kr=37821,jr=36492,Zr=36494,Jr=36495,Qr=36283,ta=36284,ea=36285,ia=36286,hc=3200,ga=0,dc=1,bi="",He="srgb",un="srgb-linear",_s="linear",Jt="srgb",qi=7680,Ba=519,uc=512,fc=513,pc=514,xa=515,mc=516,gc=517,_a=518,xc=519,ka=35044,za="300 es",ti=2e3,vs=2001;function il(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _c(){const r=ys("canvas");return r.style.display="block",r}const Ha={};function Va(...r){const t="THREE."+r.shift();console.log(t,...r)}function Rt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Gt(...r){const t="THREE."+r.shift();console.error(t,...r)}function Dn(...r){const t=r.join(" ");t in Ha||(Ha[t]=!0,Rt(...r))}function vc(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}class pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,na=180/Math.PI;function In(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[r&255]+be[r>>8&255]+be[r>>16&255]+be[r>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toLowerCase()}function zt(r,t,e){return Math.max(t,Math.min(e,r))}function yc(r,t){return(r%t+t)%t}function Ns(r,t,e){return(1-e)*r+e*t}function vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=s[a+0],g=s[a+1],x=s[a+2],y=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=g,t[e+2]=x,t[e+3]=y;return}if(u!==y||l!==f||c!==g||h!==x){let p=l*f+c*g+h*x+u*y;p<0&&(f=-f,g=-g,x=-x,y=-y,p=-p);let d=1-o;if(p<.9995){const E=Math.acos(p),T=Math.sin(E);d=Math.sin(d*E)/T,o=Math.sin(o*E)/T,l=l*d+f*o,c=c*d+g*o,h=h*d+x*o,u=u*d+y*o}else{l=l*d+f*o,c=c*d+g*o,h=h*d+x*o,u=u*d+y*o;const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],f=s[a+1],g=s[a+2],x=s[a+3];return t[e]=o*x+h*u+l*g-c*f,t[e+1]=l*x+h*f+c*u-o*g,t[e+2]=c*x+h*g+o*f-l*u,t[e+3]=h*x-o*u-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),f=l(i/2),g=l(n/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u-f*g*x;break;case"YXZ":this._x=f*h*u+c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u+f*g*x;break;case"ZXY":this._x=f*h*u-c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u-f*g*x;break;case"ZYX":this._x=f*h*u-c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u+f*g*x;break;case"YZX":this._x=f*h*u+c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u-f*g*x;break;case"XZY":this._x=f*h*u-c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u+f*g*x;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-n)*g}else if(i>o&&i>u){const g=2*Math.sqrt(1+i-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(n+a)/g,this._z=(s+c)/g}else if(o>u){const g=2*Math.sqrt(1+o-i-u);this._w=(s-c)/g,this._x=(n+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+u-i-o);this._w=(a-n)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fs.copy(this).projectOnVector(t),this.sub(Fs)}reflect(t){return this.sub(Fs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new I,Ga=new Un;class Lt{constructor(t,e,i,n,s,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],g=i[5],x=i[8],y=n[0],p=n[3],d=n[6],E=n[1],T=n[4],b=n[7],w=n[2],A=n[5],C=n[8];return s[0]=a*y+o*E+l*w,s[3]=a*p+o*T+l*A,s[6]=a*d+o*b+l*C,s[1]=c*y+h*E+u*w,s[4]=c*p+h*T+u*A,s[7]=c*d+h*b+u*C,s[2]=f*y+g*E+x*w,s[5]=f*p+g*T+x*A,s[8]=f*d+g*b+x*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,g=c*s-a*l,x=e*u+i*f+n*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=u*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=f*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=g*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Lt,Wa=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sc(){const r={enabled:!0,workingColorSpace:un,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(n.r=pi(n.r),n.g=pi(n.g),n.b=pi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(n.r=ln(n.r),n.g=ln(n.g),n.b=ln(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===bi?_s:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Dn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Dn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[un]:{primaries:t,whitePoint:i,transfer:_s,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:i,transfer:Jt,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),r}const Wt=Sc();function pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ln(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $i;class Mc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$i===void 0&&($i=ys("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=$i}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bc=0;class va{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Bs(n[a].image)):s.push(Bs(n[a]))}else s=Bs(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Bs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let Ec=0;const ks=new I;class Ce extends pn{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=ui,n=ui,s=Te,a=zi,o=$e,l=Be,c=Ce.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=In(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ks).x}get height(){return this.source.getSize(ks).y}get depth(){return this.source.getSize(ks).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Yo;Ce.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,n=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],x=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,b=(g+1)/2,w=(d+1)/2,A=(h+f)/4,C=(u+y)/4,F=(x+p)/4;return T>b&&T>w?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=A/i,s=C/i):b>w?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=A/n,s=F/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=C/s,n=F/s),this.set(i,n,s,e),this}let E=Math.sqrt((p-x)*(p-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-x)/E,this.y=(u-y)/E,this.z=(f-h)/E,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tc extends pn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new Ce(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Te,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new va(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Tc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class nl extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Me,this.minFilter=Me,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wc extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Me,this.minFilter=Me,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(s,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hn.copy(i.boundingBox)),Hn.applyMatrix4(t.matrixWorld),this.union(Hn)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yn),Vn.subVectors(this.max,yn),Yi.subVectors(t.a,yn),Ki.subVectors(t.b,yn),ji.subVectors(t.c,yn),xi.subVectors(Ki,Yi),_i.subVectors(ji,Ki),Di.subVectors(Yi,ji);let e=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Di.z,Di.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Di.z,0,-Di.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Di.y,Di.x,0];return!zs(e,Yi,Ki,ji,Vn)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,Yi,Ki,ji,Vn))?!1:(Gn.crossVectors(xi,_i),e=[Gn.x,Gn.y,Gn.z],zs(e,Yi,Ki,ji,Vn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ai=[new I,new I,new I,new I,new I,new I,new I,new I],Ge=new I,Hn=new mn,Yi=new I,Ki=new I,ji=new I,xi=new I,_i=new I,Di=new I,yn=new I,Vn=new I,Gn=new I,Li=new I;function zs(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Li.fromArray(r,s);const o=n.x*Math.abs(Li.x)+n.y*Math.abs(Li.y)+n.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ac=new mn,Sn=new I,Hs=new I;class Nn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ac.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sn.subVectors(t,this.center);const e=Sn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Sn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sn.copy(t.center).add(Hs)),this.expandByPoint(Sn.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oi=new I,Vs=new I,Wn=new I,vi=new I,Gs=new I,Xn=new I,Ws=new I;class Es{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Vs.copy(t).add(e).multiplyScalar(.5),Wn.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Vs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Wn),o=vi.dot(this.direction),l=-vi.dot(Wn),c=vi.lengthSq(),h=Math.abs(1-a*a);let u,f,g,x;if(h>0)if(u=a*l-o,f=a*o-l,x=s*h,u>=0)if(f>=-x)if(f<=x){const y=1/h;u*=y,f*=y,g=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),g=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),g=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Vs).addScaledVector(Wn,f),g}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const i=oi.dot(this.direction),n=oi.dot(oi)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,i,n,s){Gs.subVectors(e,t),Xn.subVectors(i,t),Ws.crossVectors(Gs,Xn);let a=this.direction.dot(Ws),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,t);const l=o*this.direction.dot(Xn.crossVectors(vi,Xn));if(l<0)return null;const c=o*this.direction.dot(Gs.cross(vi));if(c<0||l+c>a)return null;const h=-o*vi.dot(Ws);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,n,s,a,o,l,c,h,u,f,g,x,y,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,f,g,x,y,p)}set(t,e,i,n,s,a,o,l,c,h,u,f,g,x,y,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=x,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,g=a*u,x=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+x*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,g=l*u,x=c*h,y=c*u;e[0]=f+y*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=g*o-x,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,g=l*u,x=c*h,y=c*u;e[0]=f-y*o,e[4]=-a*u,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,g=a*u,x=o*h,y=o*u;e[0]=l*h,e[4]=x*c-g,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,g=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=y-f*u,e[8]=x*u+g,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*u+x,e[10]=f-y*u}else if(t.order==="XZY"){const f=a*l,g=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=a*h,e[9]=g*u-x,e[2]=x*u-g,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cc,t,Rc)}lookAt(t,e,i){const n=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),yi.crossVectors(i,Fe),yi.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),yi.crossVectors(i,Fe)),yi.normalize(),qn.crossVectors(Fe,yi),n[0]=yi.x,n[4]=qn.x,n[8]=Fe.x,n[1]=yi.y,n[5]=qn.y,n[9]=Fe.y,n[2]=yi.z,n[6]=qn.z,n[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],g=i[13],x=i[2],y=i[6],p=i[10],d=i[14],E=i[3],T=i[7],b=i[11],w=i[15],A=n[0],C=n[4],F=n[8],_=n[12],S=n[1],P=n[5],O=n[9],B=n[13],X=n[2],W=n[6],V=n[10],H=n[14],j=n[3],dt=n[7],at=n[11],ut=n[15];return s[0]=a*A+o*S+l*X+c*j,s[4]=a*C+o*P+l*W+c*dt,s[8]=a*F+o*O+l*V+c*at,s[12]=a*_+o*B+l*H+c*ut,s[1]=h*A+u*S+f*X+g*j,s[5]=h*C+u*P+f*W+g*dt,s[9]=h*F+u*O+f*V+g*at,s[13]=h*_+u*B+f*H+g*ut,s[2]=x*A+y*S+p*X+d*j,s[6]=x*C+y*P+p*W+d*dt,s[10]=x*F+y*O+p*V+d*at,s[14]=x*_+y*B+p*H+d*ut,s[3]=E*A+T*S+b*X+w*j,s[7]=E*C+T*P+b*W+w*dt,s[11]=E*F+T*O+b*V+w*at,s[15]=E*_+T*B+b*H+w*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],g=t[14],x=t[3],y=t[7],p=t[11],d=t[15],E=l*g-c*f,T=o*g-c*u,b=o*f-l*u,w=a*g-c*h,A=a*f-l*h,C=a*u-o*h;return e*(y*E-p*T+d*b)-i*(x*E-p*w+d*A)+n*(x*T-y*w+d*C)-s*(x*b-y*A+p*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],g=t[11],x=t[12],y=t[13],p=t[14],d=t[15],E=u*p*c-y*f*c+y*l*g-o*p*g-u*l*d+o*f*d,T=x*f*c-h*p*c-x*l*g+a*p*g+h*l*d-a*f*d,b=h*y*c-x*u*c+x*o*g-a*y*g-h*o*d+a*u*d,w=x*u*l-h*y*l-x*o*f+a*y*f+h*o*p-a*u*p,A=e*E+i*T+n*b+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=E*C,t[1]=(y*f*s-u*p*s-y*n*g+i*p*g+u*n*d-i*f*d)*C,t[2]=(o*p*s-y*l*s+y*n*c-i*p*c-o*n*d+i*l*d)*C,t[3]=(u*l*s-o*f*s-u*n*c+i*f*c+o*n*g-i*l*g)*C,t[4]=T*C,t[5]=(h*p*s-x*f*s+x*n*g-e*p*g-h*n*d+e*f*d)*C,t[6]=(x*l*s-a*p*s-x*n*c+e*p*c+a*n*d-e*l*d)*C,t[7]=(a*f*s-h*l*s+h*n*c-e*f*c-a*n*g+e*l*g)*C,t[8]=b*C,t[9]=(x*u*s-h*y*s-x*i*g+e*y*g+h*i*d-e*u*d)*C,t[10]=(a*y*s-x*o*s+x*i*c-e*y*c-a*i*d+e*o*d)*C,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*g-e*o*g)*C,t[12]=w*C,t[13]=(h*y*n-x*u*n+x*i*f-e*y*f-h*i*p+e*u*p)*C,t[14]=(x*o*n-a*y*n-x*i*l+e*y*l+a*i*p-e*o*p)*C,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*f+e*o*f)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,g=s*h,x=s*u,y=a*h,p=a*u,d=o*u,E=l*c,T=l*h,b=l*u,w=i.x,A=i.y,C=i.z;return n[0]=(1-(y+d))*w,n[1]=(g+b)*w,n[2]=(x-T)*w,n[3]=0,n[4]=(g-b)*A,n[5]=(1-(f+d))*A,n[6]=(p+E)*A,n[7]=0,n[8]=(x+T)*C,n[9]=(p-E)*C,n[10]=(1-(f+y))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=Zi.set(n[0],n[1],n[2]).length();const a=Zi.set(n[4],n[5],n[6]).length(),o=Zi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),We.copy(this);const c=1/s,h=1/a,u=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=ti,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(i-n),f=(e+t)/(e-t),g=(i+n)/(i-n);let x,y;if(l)x=s/(a-s),y=a*s/(a-s);else if(o===ti)x=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===vs)x=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=ti,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),f=-(e+t)/(e-t),g=-(i+n)/(i-n);let x,y;if(l)x=1/(a-s),y=a/(a-s);else if(o===ti)x=-2/(a-s),y=-(a+s)/(a-s);else if(o===vs)x=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zi=new I,We=new ae,Cc=new I(0,0,0),Rc=new I(1,1,1),yi=new I,qn=new I,Fe=new I,qa=new ae,$a=new Un;class Ye{constructor(t=0,e=0,i=0,n=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],g=n[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qa,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $a.setFromEuler(this),this.setFromQuaternion($a,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pc=0;const Ya=new I,Ji=new Un,li=new ae,$n=new I,Mn=new I,Dc=new I,Lc=new Un,Ka=new I(1,0,0),ja=new I(0,1,0),Za=new I(0,0,1),Ja={type:"added"},Ic={type:"removed"},Qi={type:"childadded",child:null},Xs={type:"childremoved",child:null};class ve extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new I,e=new Ye,i=new Un,n=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ae},normalMatrix:{value:new Lt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Ka,t)}rotateY(t){return this.rotateOnAxis(ja,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ka,t)}translateY(t){return this.translateOnAxis(ja,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$n.copy(t):$n.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Mn,$n,this.up):li.lookAt($n,Mn,this.up),this.quaternion.setFromRotationMatrix(li),n&&(li.extractRotation(n.matrixWorld),Ji.setFromRotationMatrix(li),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ic),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,t,Dc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,Lc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ve.DEFAULT_UP=new I(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new I,ci=new I,qs=new I,hi=new I,tn=new I,en=new I,Qa=new I,$s=new I,Ys=new I,Ks=new I,js=new de,Zs=new de,Js=new de;class qe{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Xe.subVectors(t,e),n.cross(Xe);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Xe.subVectors(n,e),ci.subVectors(i,e),qs.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(ci),l=Xe.dot(qs),c=ci.dot(ci),h=ci.dot(qs),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,g=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-g-x,x,g)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return js.setScalar(0),Zs.setScalar(0),Js.setScalar(0),js.fromBufferAttribute(t,e),Zs.fromBufferAttribute(t,i),Js.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(js,s.x),a.addScaledVector(Zs,s.y),a.addScaledVector(Js,s.z),a}static isFrontFacing(t,e,i,n){return Xe.subVectors(i,e),ci.subVectors(t,e),Xe.cross(ci).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Xe.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;tn.subVectors(n,i),en.subVectors(s,i),$s.subVectors(t,i);const l=tn.dot($s),c=en.dot($s);if(l<=0&&c<=0)return e.copy(i);Ys.subVectors(t,n);const h=tn.dot(Ys),u=en.dot(Ys);if(h>=0&&u<=h)return e.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(tn,a);Ks.subVectors(t,s);const g=tn.dot(Ks),x=en.dot(Ks);if(x>=0&&g<=x)return e.copy(s);const y=g*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(en,o);const p=h*x-g*u;if(p<=0&&u-h>=0&&g-x>=0)return Qa.subVectors(s,n),o=(u-h)/(u-h+(g-x)),e.copy(n).addScaledVector(Qa,o);const d=1/(p+y+f);return a=y*d,o=f*d,e.copy(i).addScaledVector(tn,a).addScaledVector(en,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function Qs(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class It{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Wt.workingColorSpace){if(t=yc(t,1),e=zt(e,0,1),i=zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Qs(a,s,t+1/3),this.g=Qs(a,s,t),this.b=Qs(a,s,t-1/3)}return Wt.colorSpaceToWorking(this,n),this}setStyle(t,e=He){function i(s){s!==void 0&&parseFloat(s)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const i=sl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Wt.workingToColorSpace(Ee.copy(this),t),Math.round(zt(Ee.r*255,0,255))*65536+Math.round(zt(Ee.g*255,0,255))*256+Math.round(zt(Ee.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Ee.copy(this),e);const i=Ee.r,n=Ee.g,s=Ee.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=He){Wt.workingToColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,n=Ee.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Yn);const i=Ns(Si.h,Yn.h,e),n=Ns(Si.s,Yn.s,e),s=Ns(Si.l,Yn.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new It;It.NAMES=sl;let Uc=0;class Ci extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=In(),this.name="",this.type="Material",this.blending=on,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=fr,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=cn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ur&&(i.blendSrc=this.blendSrc),this.blendDst!==fr&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ba&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sa extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new I,Kn=new Ht;let Nc=0;class Ve{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ka,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Kn.fromBufferAttribute(this,e),Kn.applyMatrix3(t),this.setXY(e,Kn.x,Kn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ka&&(t.usage=this.usage),t}}class rl extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class al extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ye extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fc=0;const ze=new ae,tr=new ve,nn=new I,Oe=new mn,bn=new mn,_e=new I;class Re extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(il(t)?al:rl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Lt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,i){return ze.makeTranslation(t,e,i),this.applyMatrix4(ze),this}scale(t,e,i){return ze.makeScale(t,e,i),this.applyMatrix4(ze),this}lookAt(t){return tr.lookAt(t),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nn).negate(),this.translate(nn.x,nn.y,nn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Oe.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];bn.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Oe.min,bn.min),Oe.expandByPoint(_e),_e.addVectors(Oe.max,bn.max),Oe.expandByPoint(_e)):(Oe.expandByPoint(bn.min),Oe.expandByPoint(bn.max))}Oe.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)_e.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(_e));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(nn.fromBufferAttribute(t,c),_e.add(nn)),n=Math.max(n,i.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new I,l[F]=new I;const c=new I,h=new I,u=new I,f=new Ht,g=new Ht,x=new Ht,y=new I,p=new I;function d(F,_,S){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,S),f.fromBufferAttribute(s,F),g.fromBufferAttribute(s,_),x.fromBufferAttribute(s,S),h.sub(c),u.sub(c),g.sub(f),x.sub(f);const P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(P),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(P),o[F].add(y),o[_].add(y),o[S].add(y),l[F].add(p),l[_].add(p),l[S].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,_=E.length;F<_;++F){const S=E[F],P=S.start,O=S.count;for(let B=P,X=P+O;B<X;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new I,b=new I,w=new I,A=new I;function C(F){w.fromBufferAttribute(n,F),A.copy(w);const _=o[F];T.copy(_),T.sub(w.multiplyScalar(w.dot(_))).normalize(),b.crossVectors(A,_);const P=b.dot(l[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,P)}for(let F=0,_=E.length;F<_;++F){const S=E[F],P=S.start,O=S.count;for(let B=P,X=P+O;B<X;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const n=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,g=t.count;f<g;f+=3){const x=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,x),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let g=0,x=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*h;for(let d=0;d<h;d++)f[x++]=c[g++]}return new Ve(f,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],g=t(f,i);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new ae,Ii=new Es,jn=new Nn,eo=new I,Zn=new I,Jn=new I,Qn=new I,er=new I,ts=new I,io=new I,es=new I;class oe extends ve{constructor(t=new Re,e=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){ts.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(er.fromBufferAttribute(u,t),a?ts.addScaledVector(er,h):ts.addScaledVector(er.sub(e),h))}e.add(ts)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jn.copy(i.boundingSphere),jn.applyMatrix4(s),Ii.copy(t.ray).recast(t.near),!(jn.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(jn,eo)===null||Ii.origin.distanceToSquared(eo)>(t.far-t.near)**2))&&(to.copy(s).invert(),Ii.copy(t.ray).applyMatrix4(to),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const p=f[x],d=a[p.materialIndex],E=Math.max(p.start,g.start),T=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let b=E,w=T;b<w;b+=3){const A=o.getX(b),C=o.getX(b+1),F=o.getX(b+2);n=is(this,d,t,i,c,h,u,A,C,F),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const x=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let p=x,d=y;p<d;p+=3){const E=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);n=is(this,a,t,i,c,h,u,E,T,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const p=f[x],d=a[p.materialIndex],E=Math.max(p.start,g.start),T=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let b=E,w=T;b<w;b+=3){const A=b,C=b+1,F=b+2;n=is(this,d,t,i,c,h,u,A,C,F),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=x,d=y;p<d;p+=3){const E=p,T=p+1,b=p+2;n=is(this,a,t,i,c,h,u,E,T,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function Oc(r,t,e,i,n,s,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===wi,o),l===null)return null;es.copy(o),es.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(es);return c<e.near||c>e.far?null:{distance:c,point:es.clone(),object:r}}function is(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Zn),r.getVertexPosition(l,Jn),r.getVertexPosition(c,Qn);const h=Oc(r,t,e,i,Zn,Jn,Qn,io);if(h){const u=new I;qe.getBarycoord(io,Zn,Jn,Qn,u),n&&(h.uv=qe.getInterpolatedAttribute(n,o,l,c,u,new Ht)),s&&(h.uv1=qe.getInterpolatedAttribute(s,o,l,c,u,new Ht)),a&&(h.normal=qe.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};qe.getNormal(Zn,Jn,Qn,f.normal),h.face=f,h.barycoord=u}return h}class Wi extends Re{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,g=0;x("z","y","x",-1,-1,i,e,t,a,s,0),x("z","y","x",1,-1,i,e,-t,a,s,1),x("x","z","y",1,1,t,i,e,n,a,2),x("x","z","y",1,-1,t,i,-e,n,a,3),x("x","y","z",1,-1,t,e,i,n,s,4),x("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function x(y,p,d,E,T,b,w,A,C,F,_){const S=b/C,P=w/F,O=b/2,B=w/2,X=A/2,W=C+1,V=F+1;let H=0,j=0;const dt=new I;for(let at=0;at<V;at++){const ut=at*P-B;for(let Bt=0;Bt<W;Bt++){const Nt=Bt*S-O;dt[y]=Nt*E,dt[p]=ut*T,dt[d]=X,c.push(dt.x,dt.y,dt.z),dt[y]=0,dt[p]=0,dt[d]=A>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Bt/C),u.push(1-at/F),H+=1}}for(let at=0;at<F;at++)for(let ut=0;ut<C;ut++){const Bt=f+ut+W*at,Nt=f+ut+W*(at+1),le=f+(ut+1)+W*(at+1),re=f+(ut+1)+W*at;l.push(Bt,Nt,re),l.push(Nt,le,re),j+=6}o.addGroup(g,j,_),g+=j,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fn(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ae(r){const t={};for(let e=0;e<r.length;e++){const i=fn(r[e]);for(const n in i)t[n]=i[n]}return t}function Bc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ol(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const kc={clone:fn,merge:Ae};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fn(t.uniforms),this.uniformsGroups=Bc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ll extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new I,no=new Ht,so=new Ht;class Se extends ll{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,no,so),e.subVectors(so,no)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Us*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sn=-90,rn=1;class Vc extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Se(sn,rn,t,e);n.layers=this.layers,this.add(n);const s=new Se(sn,rn,t,e);s.layers=this.layers,this.add(s);const a=new Se(sn,rn,t,e);a.layers=this.layers,this.add(a);const o=new Se(sn,rn,t,e);o.layers=this.layers,this.add(o);const l=new Se(sn,rn,t,e);l.layers=this.layers,this.add(l);const c=new Se(sn,rn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,g),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class cl extends Ce{constructor(t=[],e=Gi,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hl extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new cl(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Wi(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:fi});s.uniforms.tEquirect.value=e;const a=new oe(n,s),o=e.minFilter;return e.minFilter===zi&&(e.minFilter=Te),new Vc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}class Vi extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gc={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const p=e.getJointPose(y,i),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gc)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Fn extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wc extends Ce{constructor(t=null,e=1,i=1,n,s,a,o,l,c=Me,h=Me,u,f){super(null,a,o,l,c,h,n,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nr=new I,Xc=new I,qc=new Lt;class Oi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=nr.subVectors(i,e).cross(Xc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(nr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qc.getNormalMatrix(t),n=this.coplanarPoint(nr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Nn,$c=new Ht(.5,.5),ns=new I;class Ma{constructor(t=new Oi,e=new Oi,i=new Oi,n=new Oi,s=new Oi,a=new Oi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],g=s[7],x=s[8],y=s[9],p=s[10],d=s[11],E=s[12],T=s[13],b=s[14],w=s[15];if(n[0].setComponents(c-a,g-h,d-x,w-E).normalize(),n[1].setComponents(c+a,g+h,d+x,w+E).normalize(),n[2].setComponents(c+o,g+u,d+y,w+T).normalize(),n[3].setComponents(c-o,g-u,d-y,w-T).normalize(),i)n[4].setComponents(l,f,p,b).normalize(),n[5].setComponents(c-l,g-f,d-p,w-b).normalize();else if(n[4].setComponents(c-l,g-f,d-p,w-b).normalize(),e===ti)n[5].setComponents(c+l,g+f,d+p,w+b).normalize();else if(e===vs)n[5].setComponents(l,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=$c.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ns.x=n.normal.x>0?t.max.x:t.min.x,ns.y=n.normal.y>0?t.max.y:t.min.y,ns.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dl extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ss=new I,Ms=new I,ro=new ae,En=new Es,ss=new Nn,sr=new I,ao=new I;class Yc extends ve{constructor(t=new Re,e=new dl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Ss.fromBufferAttribute(e,n-1),Ms.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ss.distanceTo(Ms);t.setAttribute("lineDistance",new ye(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(n),ss.radius+=s,t.ray.intersectsSphere(ss)===!1)return;ro.copy(n).invert(),En.copy(t.ray).applyMatrix4(ro);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=g,p=x-1;y<p;y+=c){const d=h.getX(y),E=h.getX(y+1),T=rs(this,t,En,l,d,E,y);T&&e.push(T)}if(this.isLineLoop){const y=h.getX(x-1),p=h.getX(g),d=rs(this,t,En,l,y,p,x-1);d&&e.push(d)}}else{const g=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let y=g,p=x-1;y<p;y+=c){const d=rs(this,t,En,l,y,y+1,y);d&&e.push(d)}if(this.isLineLoop){const y=rs(this,t,En,l,x-1,g,x-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rs(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(Ss.fromBufferAttribute(o,n),Ms.fromBufferAttribute(o,s),e.distanceSqToSegment(Ss,Ms,sr,ao)>i)return;sr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(sr);if(!(c<t.near||c>t.far))return{distance:c,point:ao.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const oo=new I,lo=new I;class Kc extends Yc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)oo.fromBufferAttribute(e,n),lo.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+oo.distanceTo(lo);t.setAttribute("lineDistance",new ye(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ul extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const co=new ae,sa=new Es,as=new Nn,os=new I;class jc extends ve{constructor(t=new Re,e=new ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(n),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;co.copy(n).invert(),sa.copy(t.ray).applyMatrix4(co);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=f,y=g;x<y;x++){const p=c.getX(x);os.fromBufferAttribute(u,p),ho(os,p,l,n,t,e,this)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,y=g;x<y;x++)os.fromBufferAttribute(u,x),ho(os,x,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ho(r,t,e,i,n,s,a){const o=sa.distanceSqToPoint(r);if(o<e){const l=new I;sa.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ln extends Ce{constructor(t,e,i=ni,n,s,a,o=Me,l=Me,c,h=gi,u=1){if(h!==gi&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new va(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zc extends Ln{constructor(t,e=ni,i=Gi,n,s,a=Me,o=Me,l,c=gi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fl extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ts extends Re{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],f=[],g=[];let x=0;const y=[],p=i/2;let d=0;E(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(g,2));function E(){const b=new I,w=new I;let A=0;const C=(e-t)/i;for(let F=0;F<=s;F++){const _=[],S=F/s,P=S*(e-t)+t;for(let O=0;O<=n;O++){const B=O/n,X=B*l+o,W=Math.sin(X),V=Math.cos(X);w.x=P*W,w.y=-S*i+p,w.z=P*V,u.push(w.x,w.y,w.z),b.set(W,C,V).normalize(),f.push(b.x,b.y,b.z),g.push(B,1-S),_.push(x++)}y.push(_)}for(let F=0;F<n;F++)for(let _=0;_<s;_++){const S=y[_][F],P=y[_+1][F],O=y[_+1][F+1],B=y[_][F+1];(t>0||_!==0)&&(h.push(S,P,B),A+=3),(e>0||_!==s-1)&&(h.push(P,O,B),A+=3)}c.addGroup(d,A,0),d+=A}function T(b){const w=x,A=new Ht,C=new I;let F=0;const _=b===!0?t:e,S=b===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,p*S,0),f.push(0,S,0),g.push(.5,.5),x++;const P=x;for(let O=0;O<=n;O++){const X=O/n*l+o,W=Math.cos(X),V=Math.sin(X);C.x=_*V,C.y=p*S,C.z=_*W,u.push(C.x,C.y,C.z),f.push(0,S,0),A.x=W*.5+.5,A.y=V*.5*S+.5,g.push(A.x,A.y),x++}for(let O=0;O<n;O++){const B=w+O,X=P+O;b===!0?h.push(X,X+1,B):h.push(X+1,X,B),F+=3}c.addGroup(d,F,b===!0?1:2),d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends Ts{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ba(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ws extends Re{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,f=e/l,g=[],x=[],y=[],p=[];for(let d=0;d<h;d++){const E=d*f-a;for(let T=0;T<c;T++){const b=T*u-s;x.push(b,-E,0),y.push(0,0,1),p.push(T/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const T=E+c*d,b=E+c*(d+1),w=E+1+c*(d+1),A=E+1+c*d;g.push(T,b,A),g.push(b,w,A)}this.setIndex(g),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ai extends Re{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,g=[],x=[],y=[],p=[];for(let d=0;d<=i;d++){const E=[],T=d/i;let b=0;d===0&&a===0?b=.5/e:d===i&&l===Math.PI&&(b=-.5/e);for(let w=0;w<=e;w++){const A=w/e;u.x=-t*Math.cos(n+A*s)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(n+A*s)*Math.sin(a+T*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(A+b,1-T),E.push(c++)}h.push(E)}for(let d=0;d<i;d++)for(let E=0;E<e;E++){const T=h[d][E+1],b=h[d][E],w=h[d+1][E],A=h[d+1][E+1];(d!==0||a>0)&&g.push(T,b,A),(d!==i-1||l<Math.PI)&&g.push(b,w,A)}this.setIndex(g),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jc extends si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ls extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ti extends Ci{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qc extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class th extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ea extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const rr=new ae,uo=new I,fo=new I;class pl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=Be,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;uo.setFromMatrixPosition(t.matrixWorld),e.position.copy(uo),fo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fo),e.updateMatrixWorld(),rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eh extends pl{constructor(){super(new Se(90,1,.5,500)),this.isPointLightShadow=!0}}class ml extends Ea{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ta extends ll{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ih extends pl{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gl extends Ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class As extends Ea{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nh extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const po=new ae;class sh{constructor(t,e,i=0,n=1/0){this.ray=new Es(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return po.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(po),this}intersectObject(t,e=!0,i=[]){return ra(t,this,i,e),i.sort(mo),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)ra(t[n],this,i,e);return i.sort(mo),i}}function mo(r,t){return r.distance-t.distance}function ra(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ra(s[a],t,e,!0)}}const cs=new mn;class rh extends Kc{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),s=new Re;s.setIndex(new Ve(i,1)),s.setAttribute("position",new Ve(n,3)),super(s,new dl({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&cs.setFromObject(this.object),cs.isEmpty())return;const t=cs.min,e=cs.max,i=this.geometry.attributes.position,n=i.array;n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=t.x,n[4]=e.y,n[5]=e.z,n[6]=t.x,n[7]=t.y,n[8]=e.z,n[9]=e.x,n[10]=t.y,n[11]=e.z,n[12]=e.x,n[13]=e.y,n[14]=t.z,n[15]=t.x,n[16]=e.y,n[17]=t.z,n[18]=t.x,n[19]=t.y,n[20]=t.z,n[21]=e.x,n[22]=t.y,n[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function go(r,t,e,i){const n=ah(i);switch(e){case Qo:return r*t;case el:return r*t/n.components*n.byteLength;case fa:return r*t/n.components*n.byteLength;case dn:return r*t*2/n.components*n.byteLength;case pa:return r*t*2/n.components*n.byteLength;case tl:return r*t*3/n.components*n.byteLength;case $e:return r*t*4/n.components*n.byteLength;case ma:return r*t*4/n.components*n.byteLength;case fs:case ps:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ms:case gs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wr:case Cr:return Math.max(r,16)*Math.max(t,8)/4;case Tr:case Ar:return Math.max(r,8)*Math.max(t,8)/2;case Rr:case Pr:case Lr:case Ir:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Ur:case Nr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Or:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Br:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case kr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Wr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case qr:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $r:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case jr:case Zr:case Jr:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qr:case ta:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ea:case ia:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ah(r){switch(r){case Be:case Ko:return{byteLength:1,components:1};case Rn:case jo:case mi:return{byteLength:2,components:1};case da:case ua:return{byteLength:2,components:4};case ni:case ha:case Qe:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);function xl(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function oh(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=r.SHORT;else if(c instanceof Uint32Array)g=r.UNSIGNED_INT;else if(c instanceof Int32Array)g=r.INT;else if(c instanceof Int8Array)g=r.BYTE;else if(c instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((g,x)=>g.start-x.start);let f=0;for(let g=1;g<u.length;g++){const x=u[f],y=u[g];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,u[f]=y)}u.length=f+1;for(let g=0,x=u.length;g<x;g++){const y=u[g];r.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ih=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ad=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,au=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Su=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ru=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ou=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:lh,alphahash_pars_fragment:ch,alphamap_fragment:hh,alphamap_pars_fragment:dh,alphatest_fragment:uh,alphatest_pars_fragment:fh,aomap_fragment:ph,aomap_pars_fragment:mh,batching_pars_vertex:gh,batching_vertex:xh,begin_vertex:_h,beginnormal_vertex:vh,bsdfs:yh,iridescence_fragment:Sh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:bh,clipping_planes_pars_fragment:Eh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:wh,color_fragment:Ah,color_pars_fragment:Ch,color_pars_vertex:Rh,color_vertex:Ph,common:Dh,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Uh,displacementmap_vertex:Nh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Oh,colorspace_fragment:Bh,colorspace_pars_fragment:kh,envmap_fragment:zh,envmap_common_pars_fragment:Hh,envmap_pars_fragment:Vh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:td,envmap_vertex:Wh,fog_vertex:Xh,fog_pars_vertex:qh,fog_fragment:$h,fog_pars_fragment:Yh,gradientmap_pars_fragment:Kh,lightmap_pars_fragment:jh,lights_lambert_fragment:Zh,lights_lambert_pars_fragment:Jh,lights_pars_begin:Qh,lights_toon_fragment:ed,lights_toon_pars_fragment:id,lights_phong_fragment:nd,lights_phong_pars_fragment:sd,lights_physical_fragment:rd,lights_physical_pars_fragment:ad,lights_fragment_begin:od,lights_fragment_maps:ld,lights_fragment_end:cd,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:xd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphinstance_vertex:yd,morphcolor_vertex:Sd,morphnormal_vertex:Md,morphtarget_pars_vertex:bd,morphtarget_vertex:Ed,normal_fragment_begin:Td,normal_fragment_maps:wd,normal_pars_fragment:Ad,normal_pars_vertex:Cd,normal_vertex:Rd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Dd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Ud,opaque_fragment:Nd,packing:Fd,premultiplied_alpha_fragment:Od,project_vertex:Bd,dithering_fragment:kd,dithering_pars_fragment:zd,roughnessmap_fragment:Hd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Wd,shadowmap_vertex:Xd,shadowmask_pars_fragment:qd,skinbase_vertex:$d,skinning_pars_vertex:Yd,skinning_vertex:Kd,skinnormal_vertex:jd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:tu,transmission_fragment:eu,transmission_pars_fragment:iu,uv_pars_fragment:nu,uv_pars_vertex:su,uv_vertex:ru,worldpos_vertex:au,background_vert:ou,background_frag:lu,backgroundCube_vert:cu,backgroundCube_frag:hu,cube_vert:du,cube_frag:uu,depth_vert:fu,depth_frag:pu,distance_vert:mu,distance_frag:gu,equirect_vert:xu,equirect_frag:_u,linedashed_vert:vu,linedashed_frag:yu,meshbasic_vert:Su,meshbasic_frag:Mu,meshlambert_vert:bu,meshlambert_frag:Eu,meshmatcap_vert:Tu,meshmatcap_frag:wu,meshnormal_vert:Au,meshnormal_frag:Cu,meshphong_vert:Ru,meshphong_frag:Pu,meshphysical_vert:Du,meshphysical_frag:Lu,meshtoon_vert:Iu,meshtoon_frag:Uu,points_vert:Nu,points_frag:Fu,shadow_vert:Ou,shadow_frag:Bu,sprite_vert:ku,sprite_frag:zu},ot={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Je={basic:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ae([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ae([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ae([ot.points,ot.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ae([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ae([ot.common,ot.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ae([ot.sprite,ot.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:Ae([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:Ae([ot.lights,ot.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Je.physical={uniforms:Ae([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const hs={r:0,b:0,g:0},Ni=new Ye,Hu=new ae;function Vu(r,t,e,i,n,s,a){const o=new It(0);let l=s===!0?0:1,c,h,u=null,f=0,g=null;function x(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function y(T){let b=!1;const w=x(T);w===null?d(o,l):w&&w.isColor&&(d(w,1),b=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(T,b){const w=x(b);w&&(w.isCubeTexture||w.mapping===bs)?(h===void 0&&(h=new oe(new Wi(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:fn(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ni.copy(b.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hu.makeRotationFromEuler(Ni)),h.material.toneMapped=Wt.getTransfer(w.colorSpace)!==Jt,(u!==w||f!==w.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,g=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new oe(new ws(2,2),new si({name:"BackgroundMaterial",uniforms:fn(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(w.colorSpace)!==Jt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||g!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,g=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,b){T.getRGB(hs,ol(r)),i.buffers.color.setClear(hs.r,hs.g,hs.b,b,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:y,addToRenderList:p,dispose:E}}function Gu(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null);let s=n,a=!1;function o(S,P,O,B,X){let W=!1;const V=u(B,O,P);s!==V&&(s=V,c(s.object)),W=g(S,B,O,X),W&&x(S,B,O,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,b(S,P,O,B),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,P,O){const B=O.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let W=X[P.id];W===void 0&&(W={},X[P.id]=W);let V=W[B];return V===void 0&&(V=f(l()),W[B]=V),V}function f(S){const P=[],O=[],B=[];for(let X=0;X<e;X++)P[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:S,attributes:{},index:null}}function g(S,P,O,B){const X=s.attributes,W=P.attributes;let V=0;const H=O.getAttributes();for(const j in H)if(H[j].location>=0){const at=X[j];let ut=W[j];if(ut===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),at===void 0||at.attribute!==ut||ut&&at.data!==ut.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function x(S,P,O,B){const X={},W=P.attributes;let V=0;const H=O.getAttributes();for(const j in H)if(H[j].location>=0){let at=W[j];at===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const ut={};ut.attribute=at,at&&at.data&&(ut.data=at.data),X[j]=ut,V++}s.attributes=X,s.attributesNum=V,s.index=B}function y(){const S=s.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function p(S){d(S,0)}function d(S,P){const O=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;O[S]=1,B[S]===0&&(r.enableVertexAttribArray(S),B[S]=1),X[S]!==P&&(r.vertexAttribDivisor(S,P),X[S]=P)}function E(){const S=s.newAttributes,P=s.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==S[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function T(S,P,O,B,X,W,V){V===!0?r.vertexAttribIPointer(S,P,O,X,W):r.vertexAttribPointer(S,P,O,B,X,W)}function b(S,P,O,B){y();const X=B.attributes,W=O.getAttributes(),V=P.defaultAttributeValues;for(const H in W){const j=W[H];if(j.location>=0){let dt=X[H];if(dt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),dt!==void 0){const at=dt.normalized,ut=dt.itemSize,Bt=t.get(dt);if(Bt===void 0)continue;const Nt=Bt.buffer,le=Bt.type,re=Bt.bytesPerElement,$=le===r.INT||le===r.UNSIGNED_INT||dt.gpuType===ha;if(dt.isInterleavedBufferAttribute){const Z=dt.data,gt=Z.stride,Dt=dt.offset;if(Z.isInstancedInterleavedBuffer){for(let vt=0;vt<j.locationSize;vt++)d(j.location+vt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let vt=0;vt<j.locationSize;vt++)p(j.location+vt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let vt=0;vt<j.locationSize;vt++)T(j.location+vt,ut/j.locationSize,le,at,gt*re,(Dt+ut/j.locationSize*vt)*re,$)}else{if(dt.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)d(j.location+Z,dt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Z=0;Z<j.locationSize;Z++)p(j.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let Z=0;Z<j.locationSize;Z++)T(j.location+Z,ut/j.locationSize,le,at,ut*re,ut/j.locationSize*Z*re,$)}}else if(V!==void 0){const at=V[H];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(j.location,at);break;case 3:r.vertexAttrib3fv(j.location,at);break;case 4:r.vertexAttrib4fv(j.location,at);break;default:r.vertexAttrib1fv(j.location,at)}}}}E()}function w(){F();for(const S in i){const P=i[S];for(const O in P){const B=P[O];for(const X in B)h(B[X].object),delete B[X];delete P[O]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const O in P){const B=P[O];for(const X in B)h(B[X].object),delete B[X];delete P[O]}delete i[S.id]}function C(S){for(const P in i){const O=i[P];if(O[S.id]===void 0)continue;const B=O[S.id];for(const X in B)h(B[X].object),delete B[X];delete O[S.id]}}function F(){_(),a=!0,s!==n&&(s=n,c(s.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:F,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:E}}function Wu(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];e.update(g,i,1)}function l(c,h,u,f){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y]*f[y];e.update(x,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xu(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==$e&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Be&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qe&&!F)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:b,maxSamples:w,samples:A}}function qu(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Oi,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const g=u.length!==0||f||i!==0||n;return n=f,i=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,g){const x=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,d=r.get(u);if(!n||x===null||x.length===0||s&&!p)s?h(null):c();else{const E=s?0:i,T=E*4;let b=d.clippingState||null;l.value=b,b=h(x,f,T,g);for(let w=0;w!==T;++w)b[w]=e[w];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,g,x){const y=u!==null?u.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const d=g+y*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,b=g;T!==y;++T,b+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function $u(r){let t=new WeakMap;function e(a,o){return o===Sr?a.mapping=Gi:o===Mr&&(a.mapping=hn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sr||o===Mr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hl(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ei=4,xo=[.125,.215,.35,.446,.526,.582],ki=20,Yu=256,Tn=new Ta,_o=new It;let ar=null,or=0,lr=0,cr=!1;const Ku=new I;class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=Ku}=s;ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,or,lr),this._renderer.xr.enabled=cr,t.scissorTest=!1,an(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:mi,format:$e,colorSpace:un,depthBuffer:!1},n=yo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ju(s)),this._blurMaterial=Ju(s,t,e),this._ggxMaterial=Zu(s,t,e)}return n}_compileMaterial(t){const e=new oe(new Re,t);this._renderer.compile(e,Tn)}_sceneToCubeUV(t,e,i,n,s){const l=new Se(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,g=u.toneMapping;u.getClearColor(_o),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Wi,new Sa({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let d=!1;const E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,d=!0):(p.color.copy(_o),d=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));const w=this._cubeSize;an(n,b*w,T>2?w:0,w,w),u.setRenderTarget(n),d&&u.render(y,l),u.render(t,l)}u.toneMapping=g,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Gi||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;an(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Tn)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,g=u*f,{_lodMax:x}=this,y=this._sizeLods[i],p=3*y*(i>x-Ei?i-x+Ei:0),d=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,an(s,p,d,3*y,2*y),n.setRenderTarget(s),n.render(o,Tn),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,an(t,p,d,3*y,2*y),n.setRenderTarget(t),n.render(o,Tn)}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=c;const f=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ki-1),y=s/x,p=isFinite(s)?1+Math.floor(h*y):ki;p>ki&&Rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const d=[];let E=0;for(let C=0;C<ki;++C){const F=C/y,_=Math.exp(-F*F/2);d.push(_),C===0?E+=_:C<p&&(E+=2*_)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=x,f.mipInt.value=T-i;const b=this._sizeLods[n],w=3*b*(n>T-Ei?n-T+Ei:0),A=4*(this._cubeSize-b);an(e,w,A,3*b,2*b),l.setRenderTarget(e),l.render(u,Tn)}}function ju(r){const t=[],e=[],i=[];let n=r;const s=r-Ei+1+xo.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-Ei?l=xo[a-r+Ei-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,x=6,y=3,p=2,d=1,E=new Float32Array(y*x*g),T=new Float32Array(p*x*g),b=new Float32Array(d*x*g);for(let A=0;A<g;A++){const C=A%3*2/3-1,F=A>2?0:-1,_=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];E.set(_,y*x*A),T.set(f,p*x*A);const S=[A,A,A,A,A,A];b.set(S,d*x*A)}const w=new Re;w.setAttribute("position",new Ve(E,y)),w.setAttribute("uv",new Ve(T,p)),w.setAttribute("faceIndex",new Ve(b,d)),i.push(new oe(w,null)),n>Ei&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function yo(r,t,e){const i=new ii(r,t,e);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function an(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Zu(r,t,e){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ju(r,t,e){const i=new Float32Array(ki),n=new I(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function So(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Mo(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qu(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sr||l===Mr,h=l===Gi||l===hn;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new vo(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const g=o.image;return c&&g&&g.height>0||h&&g&&n(g)?(e===null&&(e=new vo(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function tf(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Dn("WebGLRenderer: "+i+" extension not supported."),n}}}function ef(r,t,e,i){const n={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete n[f.id];const g=s.get(f);g&&(t.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER)}function c(u){const f=[],g=u.index,x=u.attributes.position;let y=0;if(g!==null){const E=g.array;y=g.version;for(let T=0,b=E.length;T<b;T+=3){const w=E[T+0],A=E[T+1],C=E[T+2];f.push(w,A,A,C,C,w)}}else if(x!==void 0){const E=x.array;y=x.version;for(let T=0,b=E.length/3-1;T<b;T+=3){const w=T+0,A=T+1,C=T+2;f.push(w,A,A,C,C,w)}}else return;const p=new(il(f)?al:rl)(f,1);p.version=y;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function nf(r,t,e){let i;function n(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,g){r.drawElements(i,g,s,f*a),e.update(g,i,1)}function c(f,g,x){x!==0&&(r.drawElementsInstanced(i,g,s,f*a,x),e.update(g,i,x))}function h(f,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,x);let p=0;for(let d=0;d<x;d++)p+=g[d];e.update(p,i,1)}function u(f,g,x,y){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,g[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,y,0,x);let d=0;for(let E=0;E<x;E++)d+=g[E]*y[E];e.update(d,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function rf(r,t,e){const i=new WeakMap,n=new de;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let S=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var g=S;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;x===!0&&(b=1),y===!0&&(b=2),p===!0&&(b=3);let w=o.attributes.position.count*b,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*A*4*u),F=new nl(C,w,A,u);F.type=Qe,F.needsUpdate=!0;const _=b*4;for(let P=0;P<u;P++){const O=d[P],B=E[P],X=T[P],W=w*A*4*P;for(let V=0;V<O.count;V++){const H=V*_;x===!0&&(n.fromBufferAttribute(O,V),C[W+H+0]=n.x,C[W+H+1]=n.y,C[W+H+2]=n.z,C[W+H+3]=0),y===!0&&(n.fromBufferAttribute(B,V),C[W+H+4]=n.x,C[W+H+5]=n.y,C[W+H+6]=n.z,C[W+H+7]=0),p===!0&&(n.fromBufferAttribute(X,V),C[W+H+8]=n.x,C[W+H+9]=n.y,C[W+H+10]=n.z,C[W+H+11]=X.itemSize===4?n.w:1)}}f={count:u,texture:F,size:new Ht(w,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(r,"morphTargetBaseInfluence",y),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function af(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const of={[Ho]:"LINEAR_TONE_MAPPING",[Vo]:"REINHARD_TONE_MAPPING",[Go]:"CINEON_TONE_MAPPING",[Wo]:"ACES_FILMIC_TONE_MAPPING",[qo]:"AGX_TONE_MAPPING",[$o]:"NEUTRAL_TONE_MAPPING",[Xo]:"CUSTOM_TONE_MAPPING"};function lf(r,t,e,i,n){const s=new ii(t,e,{type:r,depthBuffer:i,stencilBuffer:n}),a=new ii(t,e,{type:mi,depthBuffer:!1,stencilBuffer:!1}),o=new Re;o.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ye([0,2,0,0,2,0],2));const l=new Jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new oe(o,l),h=new Ta(-1,1,1,-1,0,1);let u=null,f=null,g=!1,x,y=null,p=[],d=!1;this.setSize=function(E,T){s.setSize(E,T),a.setSize(E,T);for(let b=0;b<p.length;b++){const w=p[b];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){p=E,d=p.length>0&&p[0].isRenderPass===!0;const T=s.width,b=s.height;for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(T,b)}},this.begin=function(E,T){if(g||E.toneMapping===ei&&p.length===0)return!1;if(y=T,T!==null){const b=T.width,w=T.height;(s.width!==b||s.height!==w)&&this.setSize(b,w)}return d===!1&&E.setRenderTarget(s),x=E.toneMapping,E.toneMapping=ei,!0},this.hasRenderPass=function(){return d},this.end=function(E,T){E.toneMapping=x,g=!0;let b=s,w=a;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(E,w,b,T),C.needsSwap!==!1)){const F=b;b=w,w=F}}if(u!==E.outputColorSpace||f!==E.toneMapping){u=E.outputColorSpace,f=E.toneMapping,l.defines={},Wt.getTransfer(u)===Jt&&(l.defines.SRGB_TRANSFER="");const A=of[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(y),E.render(c,h),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const _l=new Ce,aa=new Ln(1,1),vl=new nl,yl=new wc,Sl=new cl,bo=[],Eo=[],To=new Float32Array(16),wo=new Float32Array(9),Ao=new Float32Array(4);function gn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=bo[n];if(s===void 0&&(s=new Float32Array(n),bo[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function me(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Rs(r,t){let e=Eo[t];e===void 0&&(e=new Int32Array(t),Eo[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function cf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function hf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function df(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function uf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function ff(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Ao.set(i),r.uniformMatrix2fv(this.addr,!1,Ao),ge(e,i)}}function pf(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;wo.set(i),r.uniformMatrix3fv(this.addr,!1,wo),ge(e,i)}}function mf(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;To.set(i),r.uniformMatrix4fv(this.addr,!1,To),ge(e,i)}}function gf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function xf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function _f(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function vf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function yf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Sf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function Mf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function bf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function Ef(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(aa.compareFunction=e.isReversedDepthBuffer()?_a:xa,s=aa):s=_l,e.setTexture2D(t||s,n)}function Tf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||yl,n)}function wf(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Sl,n)}function Af(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||vl,n)}function Cf(r){switch(r){case 5126:return cf;case 35664:return hf;case 35665:return df;case 35666:return uf;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return gf;case 35667:case 35671:return xf;case 35668:case 35672:return _f;case 35669:case 35673:return vf;case 5125:return yf;case 36294:return Sf;case 36295:return Mf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Af}}function Rf(r,t){r.uniform1fv(this.addr,t)}function Pf(r,t){const e=gn(t,this.size,2);r.uniform2fv(this.addr,e)}function Df(r,t){const e=gn(t,this.size,3);r.uniform3fv(this.addr,e)}function Lf(r,t){const e=gn(t,this.size,4);r.uniform4fv(this.addr,e)}function If(r,t){const e=gn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Uf(r,t){const e=gn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Nf(r,t){const e=gn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ff(r,t){r.uniform1iv(this.addr,t)}function Of(r,t){r.uniform2iv(this.addr,t)}function Bf(r,t){r.uniform3iv(this.addr,t)}function kf(r,t){r.uniform4iv(this.addr,t)}function zf(r,t){r.uniform1uiv(this.addr,t)}function Hf(r,t){r.uniform2uiv(this.addr,t)}function Vf(r,t){r.uniform3uiv(this.addr,t)}function Gf(r,t){r.uniform4uiv(this.addr,t)}function Wf(r,t,e){const i=this.cache,n=t.length,s=Rs(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=aa:a=_l;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function Xf(r,t,e){const i=this.cache,n=t.length,s=Rs(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||yl,s[a])}function qf(r,t,e){const i=this.cache,n=t.length,s=Rs(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Sl,s[a])}function $f(r,t,e){const i=this.cache,n=t.length,s=Rs(e,n);me(i,s)||(r.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||vl,s[a])}function Yf(r){switch(r){case 5126:return Rf;case 35664:return Pf;case 35665:return Df;case 35666:return Lf;case 35674:return If;case 35675:return Uf;case 35676:return Nf;case 5124:case 35670:return Ff;case 35667:case 35671:return Of;case 35668:case 35672:return Bf;case 35669:case 35673:return kf;case 5125:return zf;case 36294:return Hf;case 36295:return Vf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return $f}}class Kf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Cf(e.type)}}class jf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yf(e.type)}}class Zf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Co(r,t){r.seq.push(t),r.map[t.id]=t}function Jf(r,t,e){const i=r.name,n=i.length;for(hr.lastIndex=0;;){const s=hr.exec(i),a=hr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Co(e,c===void 0?new Kf(o,r,t):new jf(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Zf(o),Co(e,u)),e=u}}}class xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Jf(o,l,this)}const n=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Ro(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Qf=37297;let tp=0;function ep(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Po=new Lt;function ip(r){Wt._getMatrix(Po,Wt.workingColorSpace,r);const t=`mat3( ${Po.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(r)){case _s:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Do(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ep(r.getShaderSource(t),o)}else return s}function np(r,t){const e=ip(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const sp={[Ho]:"Linear",[Vo]:"Reinhard",[Go]:"Cineon",[Wo]:"ACESFilmic",[qo]:"AgX",[$o]:"Neutral",[Xo]:"Custom"};function rp(r,t){const e=sp[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new I;function ap(){Wt.getLuminanceCoefficients(ds);const r=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function op(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cn).join(`
`)}function lp(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cp(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Cn(r){return r!==""}function Lo(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Io(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(r){return r.replace(hp,up)}const dp=new Map;function up(r,t){let e=Ut[t];if(e===void 0){const i=dp.get(t);if(i!==void 0)e=Ut[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(r){return r.replace(fp,pp)}function pp(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function No(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mp={[us]:"SHADOWMAP_TYPE_PCF",[An]:"SHADOWMAP_TYPE_VSM"};function gp(r){return mp[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xp={[Gi]:"ENVMAP_TYPE_CUBE",[hn]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE_UV"};function _p(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":xp[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const vp={[hn]:"ENVMAP_MODE_REFRACTION"};function yp(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vp[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sp={[ca]:"ENVMAP_BLENDING_MULTIPLY",[oc]:"ENVMAP_BLENDING_MIX",[lc]:"ENVMAP_BLENDING_ADD"};function Mp(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Sp[r.combine]||"ENVMAP_BLENDING_NONE"}function bp(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ep(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gp(e),c=_p(e),h=yp(e),u=Mp(e),f=bp(e),g=op(e),x=lp(s),y=n.createProgram();let p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cn).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cn).join(`
`),d.length>0&&(d+=`
`)):(p=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cn).join(`
`),d=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ei?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,np("linearToOutputTexel",e.outputColorSpace),ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cn).join(`
`)),a=oa(a),a=Lo(a,e),a=Io(a,e),o=oa(o),o=Lo(o,e),o=Io(o,e),a=Uo(a),o=Uo(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=E+p+a,b=E+d+o,w=Ro(n,n.VERTEX_SHADER,T),A=Ro(n,n.FRAGMENT_SHADER,b);n.attachShader(y,w),n.attachShader(y,A),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function C(P){if(r.debug.checkShaderErrors){const O=n.getProgramInfoLog(y)||"",B=n.getShaderInfoLog(w)||"",X=n.getShaderInfoLog(A)||"",W=O.trim(),V=B.trim(),H=X.trim();let j=!0,dt=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,w,A);else{const at=Do(n,w,"vertex"),ut=Do(n,A,"fragment");Gt("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+at+`
`+ut)}else W!==""?Rt("WebGLProgram: Program Info Log:",W):(V===""||H==="")&&(dt=!1);dt&&(P.diagnostics={runnable:j,programLog:W,vertexShader:{log:V,prefix:p},fragmentShader:{log:H,prefix:d}})}n.deleteShader(w),n.deleteShader(A),F=new xs(n,y),_=cp(n,y)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(y,Qf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}let Tp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ap(t),e.set(t,i)),i}}class Ap{constructor(t){this.id=Tp++,this.code=t,this.usedTimes=0}}function Cp(r,t,e,i,n,s,a){const o=new ya,l=new wp,c=new Set,h=[],u=new Map,f=n.logarithmicDepthBuffer;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,S,P,O,B){const X=O.fog,W=B.geometry,V=_.isMeshStandardMaterial?O.environment:null,H=(_.isMeshStandardMaterial?e:t).get(_.envMap||V),j=H&&H.mapping===bs?H.image.height:null,dt=x[_.type];_.precision!==null&&(g=n.getMaxPrecision(_.precision),g!==_.precision&&Rt("WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=at!==void 0?at.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let Nt,le,re,$;if(dt){const jt=Je[dt];Nt=jt.vertexShader,le=jt.fragmentShader}else Nt=_.vertexShader,le=_.fragmentShader,l.update(_),re=l.getVertexShaderID(_),$=l.getFragmentShaderID(_);const Z=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,vt=B.isBatchedMesh===!0,Xt=!!_.map,xe=!!_.matcap,Vt=!!H,Kt=!!_.aoMap,te=!!_.lightMap,Ft=!!_.bumpMap,ue=!!_.normalMap,R=!!_.displacementMap,fe=!!_.emissiveMap,Yt=!!_.metalnessMap,ie=!!_.roughnessMap,St=_.anisotropy>0,M=_.clearcoat>0,m=_.dispersion>0,L=_.iridescence>0,q=_.sheen>0,K=_.transmission>0,G=St&&!!_.anisotropyMap,bt=M&&!!_.clearcoatMap,it=M&&!!_.clearcoatNormalMap,yt=M&&!!_.clearcoatRoughnessMap,Ct=L&&!!_.iridescenceMap,Q=L&&!!_.iridescenceThicknessMap,st=q&&!!_.sheenColorMap,_t=q&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,nt=!!_.specularColorMap,Ot=!!_.specularIntensityMap,D=K&&!!_.transmissionMap,ct=K&&!!_.thicknessMap,tt=!!_.gradientMap,ft=!!_.alphaMap,J=_.alphaTest>0,Y=!!_.alphaHash,et=!!_.extensions;let Pt=ei;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pt=r.toneMapping);const ne={shaderID:dt,shaderType:_.type,shaderName:_.name,vertexShader:Nt,fragmentShader:le,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:vt,batchingColor:vt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:un,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:xe,envMap:Vt,envMapMode:Vt&&H.mapping,envMapCubeUVHeight:j,aoMap:Kt,lightMap:te,bumpMap:Ft,normalMap:ue,displacementMap:R,emissiveMap:fe,normalMapObjectSpace:ue&&_.normalMapType===dc,normalMapTangentSpace:ue&&_.normalMapType===ga,metalnessMap:Yt,roughnessMap:ie,anisotropy:St,anisotropyMap:G,clearcoat:M,clearcoatMap:bt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:m,iridescence:L,iridescenceMap:Ct,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:st,sheenRoughnessMap:_t,specularMap:Mt,specularColorMap:nt,specularIntensityMap:Ot,transmission:K,transmissionMap:D,thicknessMap:ct,gradientMap:tt,opaque:_.transparent===!1&&_.blending===on&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:Y,combine:_.combine,mapUv:Xt&&y(_.map.channel),aoMapUv:Kt&&y(_.aoMap.channel),lightMapUv:te&&y(_.lightMap.channel),bumpMapUv:Ft&&y(_.bumpMap.channel),normalMapUv:ue&&y(_.normalMap.channel),displacementMapUv:R&&y(_.displacementMap.channel),emissiveMapUv:fe&&y(_.emissiveMap.channel),metalnessMapUv:Yt&&y(_.metalnessMap.channel),roughnessMapUv:ie&&y(_.roughnessMap.channel),anisotropyMapUv:G&&y(_.anisotropyMap.channel),clearcoatMapUv:bt&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:st&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&y(_.sheenRoughnessMap.channel),specularMapUv:Mt&&y(_.specularMap.channel),specularColorMapUv:nt&&y(_.specularColorMap.channel),specularIntensityMapUv:Ot&&y(_.specularIntensityMap.channel),transmissionMapUv:D&&y(_.transmissionMap.channel),thicknessMapUv:ct&&y(_.thicknessMap.channel),alphaMapUv:ft&&y(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ue||St),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Xt||ft),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&Wt.getTransfer(_.map.colorSpace)===Jt,decodeVideoTextureEmissive:fe&&_.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(_.emissiveMap.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===di,flipSided:_.side===Ie,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function d(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(E(S,_),T(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function E(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function T(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),_.push(o.mask)}function b(_){const S=x[_.type];let P;if(S){const O=Je[S];P=kc.clone(O.uniforms)}else P=_.uniforms;return P}function w(_,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new Ep(r,S,_,s),h.push(P),u.set(S,P)),P}function A(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),u.delete(_.cacheKey),_.destroy()}}function C(_){l.remove(_)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:F}}function Rp(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Pp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Fo(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Oo(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,g,x,y,p){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:x,renderOrder:u.renderOrder,z:y,group:p},r[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=y,d.group=p),t++,d}function o(u,f,g,x,y,p){const d=a(u,f,g,x,y,p);g.transmission>0?i.push(d):g.transparent===!0?n.push(d):e.push(d)}function l(u,f,g,x,y,p){const d=a(u,f,g,x,y,p);g.transmission>0?i.unshift(d):g.transparent===!0?n.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Pp),i.length>1&&i.sort(f||Fo),n.length>1&&n.sort(f||Fo)}function h(){for(let u=t,f=r.length;u<f;u++){const g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Dp(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new Oo,r.set(i,[a])):n>=s.length?(a=new Oo,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Lp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new It};break;case"SpotLight":e={position:new I,direction:new I,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Ip(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Up=0;function Np(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Fp(r){const t=new Lp,e=Ip(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const n=new I,s=new ae,a=new ae;function o(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let g=0,x=0,y=0,p=0,d=0,E=0,T=0,b=0,w=0,A=0,C=0;c.sort(Np);for(let _=0,S=c.length;_<S;_++){const P=c[_],O=P.color,B=P.intensity,X=P.distance;let W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===dn?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],B);C++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,j=e.get(P);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=P.shadow.matrix,E++}i.directional[g]=V,g++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(B),V.distance=X,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[y]=V;const H=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,H.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=H.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=W,b++}y++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(O).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=V,p++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const H=P.shadow,j=e.get(P);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=W,i.pointShadowMatrix[x]=P.shadow.matrix,T++}i.point[x]=V,x++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(B),V.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[d]=V,d++}}p>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==g||F.pointLength!==x||F.spotLength!==y||F.rectAreaLength!==p||F.hemiLength!==d||F.numDirectionalShadows!==E||F.numPointShadows!==T||F.numSpotShadows!==b||F.numSpotMaps!==w||F.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=p,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,F.directionalLength=g,F.pointLength=x,F.spotLength=y,F.rectAreaLength=p,F.hemiLength=d,F.numDirectionalShadows=E,F.numPointShadows=T,F.numSpotShadows=b,F.numSpotMaps=w,F.numLightProbes=C,i.version=Up++)}function l(c,h){let u=0,f=0,g=0,x=0,y=0;const p=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const T=c[d];if(T.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),u++}else if(T.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const b=i.hemi[y];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:i}}function Bo(r){const t=new Fp(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Op(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new Bo(r),t.set(n,[o])):s>=a.length?(o=new Bo(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zp=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Hp=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ko=new ae,wn=new I,dr=new I;function Vp(r,t,e){let i=new Ma;const n=new Ht,s=new Ht,a=new de,o=new Qc,l=new th,c={},h=e.maxTextureSize,u={[wi]:Ie,[Ie]:wi,[di]:di},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Bp,fragmentShader:kp}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new Re;x.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new oe(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let d=this.type;this.render=function(A,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;A.type===Vl&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=us);const _=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(fi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=d!==this.type;B&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=A.length;X<W;X++){const V=A[X],H=V.shadow;if(H===void 0){Rt("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const j=H.getFrameExtents();if(n.multiply(j),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/j.x),n.x=s.x*j.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/j.y),n.y=s.y*j.y,H.mapSize.y=s.y)),H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===An){if(V.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ii(n.x,n.y,{format:dn,type:mi,minFilter:Te,magFilter:Te,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Ln(n.x,n.y,Qe),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=gi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Me,H.map.depthTexture.magFilter=Me}else{V.isPointLight?(H.map=new hl(n.x),H.map.depthTexture=new Zc(n.x,ni)):(H.map=new ii(n.x,n.y),H.map.depthTexture=new Ln(n.x,n.y,ni)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=gi;const at=r.state.buffers.depth.getReversed();this.type===us?(H.map.depthTexture.compareFunction=at?_a:xa,H.map.depthTexture.minFilter=Te,H.map.depthTexture.magFilter=Te):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Me,H.map.depthTexture.magFilter=Me)}H.camera.updateProjectionMatrix()}const dt=H.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<dt;at++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,at),r.clear();else{at===0&&(r.setRenderTarget(H.map),r.clear());const ut=H.getViewport(at);a.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),O.viewport(a)}if(V.isPointLight){const ut=H.camera,Bt=H.matrix,Nt=V.distance||ut.far;Nt!==ut.far&&(ut.far=Nt,ut.updateProjectionMatrix()),wn.setFromMatrixPosition(V.matrixWorld),ut.position.copy(wn),dr.copy(ut.position),dr.add(zp[at]),ut.up.copy(Hp[at]),ut.lookAt(dr),ut.updateMatrixWorld(),Bt.makeTranslation(-wn.x,-wn.y,-wn.z),ko.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ko,ut.coordinateSystem,ut.reversedDepth)}else H.updateMatrices(V);i=H.getFrustum(),b(C,F,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===An&&E(H,F),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(_,S,P)};function E(A,C){const F=t.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ii(n.x,n.y,{format:dn,type:mi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,F,f,y,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,F,g,y,null)}function T(A,C,F,_){let S=null;const P=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=F.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=S.uuid,B=C.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let W=X[B];W===void 0&&(W=S.clone(),X[B]=W,C.addEventListener("dispose",w)),S=W}if(S.visible=C.visible,S.wireframe=C.wireframe,_===An?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=r.properties.get(S);O.light=F}return S}function b(A,C,F,_,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===An)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const W=B.groups;for(let V=0,H=W.length;V<H;V++){const j=W[V],dt=X[j.materialIndex];if(dt&&dt.visible){const at=T(A,dt,_,S);A.onBeforeShadow(r,A,C,F,B,at,j),r.renderBufferDirect(F,null,B,at,A,j),A.onAfterShadow(r,A,C,F,B,at,j)}}}else if(X.visible){const W=T(A,X,_,S);A.onBeforeShadow(r,A,C,F,B,W,null),r.renderBufferDirect(F,null,B,W,A,null),A.onAfterShadow(r,A,C,F,B,W,null)}}const O=A.children;for(let B=0,X=O.length;B<X;B++)b(O[B],C,F,_,S)}function w(A){A.target.removeEventListener("dispose",w);for(const F in c){const _=c[F],S=A.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const Gp={[pr]:mr,[gr]:vr,[xr]:yr,[cn]:_r,[mr]:pr,[vr]:gr,[yr]:xr,[_r]:cn};function Wp(r,t){function e(){let D=!1;const ct=new de;let tt=null;const ft=new de(0,0,0,0);return{setMask:function(J){tt!==J&&!D&&(r.colorMask(J,J,J,J),tt=J)},setLocked:function(J){D=J},setClear:function(J,Y,et,Pt,ne){ne===!0&&(J*=Pt,Y*=Pt,et*=Pt),ct.set(J,Y,et,Pt),ft.equals(ct)===!1&&(r.clearColor(J,Y,et,Pt),ft.copy(ct))},reset:function(){D=!1,tt=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,tt=null,ft=null,J=null;return{setReversed:function(Y){if(ct!==Y){const et=t.get("EXT_clip_control");Y?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),ct=Y;const Pt=J;J=null,this.setClear(Pt)}},getReversed:function(){return ct},setTest:function(Y){Y?Z(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(Y){tt!==Y&&!D&&(r.depthMask(Y),tt=Y)},setFunc:function(Y){if(ct&&(Y=Gp[Y]),ft!==Y){switch(Y){case pr:r.depthFunc(r.NEVER);break;case mr:r.depthFunc(r.ALWAYS);break;case gr:r.depthFunc(r.LESS);break;case cn:r.depthFunc(r.LEQUAL);break;case xr:r.depthFunc(r.EQUAL);break;case _r:r.depthFunc(r.GEQUAL);break;case vr:r.depthFunc(r.GREATER);break;case yr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=Y}},setLocked:function(Y){D=Y},setClear:function(Y){J!==Y&&(ct&&(Y=1-Y),r.clearDepth(Y),J=Y)},reset:function(){D=!1,tt=null,ft=null,J=null,ct=!1}}}function n(){let D=!1,ct=null,tt=null,ft=null,J=null,Y=null,et=null,Pt=null,ne=null;return{setTest:function(jt){D||(jt?Z(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(jt){ct!==jt&&!D&&(r.stencilMask(jt),ct=jt)},setFunc:function(jt,Ke,ri){(tt!==jt||ft!==Ke||J!==ri)&&(r.stencilFunc(jt,Ke,ri),tt=jt,ft=Ke,J=ri)},setOp:function(jt,Ke,ri){(Y!==jt||et!==Ke||Pt!==ri)&&(r.stencilOp(jt,Ke,ri),Y=jt,et=Ke,Pt=ri)},setLocked:function(jt){D=jt},setClear:function(jt){ne!==jt&&(r.clearStencil(jt),ne=jt)},reset:function(){D=!1,ct=null,tt=null,ft=null,J=null,Y=null,et=null,Pt=null,ne=null}}}const s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,g=[],x=null,y=!1,p=null,d=null,E=null,T=null,b=null,w=null,A=null,C=new It(0,0,0),F=0,_=!1,S=null,P=null,O=null,B=null,X=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=H>=2);let dt=null,at={};const ut=r.getParameter(r.SCISSOR_BOX),Bt=r.getParameter(r.VIEWPORT),Nt=new de().fromArray(ut),le=new de().fromArray(Bt);function re(D,ct,tt,ft){const J=new Uint8Array(4),Y=r.createTexture();r.bindTexture(D,Y),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<tt;et++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage2D(ct+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J);return Y}const $={};$[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(cn),Ft(!1),ue(Ua),Z(r.CULL_FACE),Kt(fi);function Z(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function gt(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Dt(D,ct){return u[D]!==ct?(r.bindFramebuffer(D,ct),u[D]=ct,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ct),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function vt(D,ct){let tt=g,ft=!1;if(D){tt=f.get(ct),tt===void 0&&(tt=[],f.set(ct,tt));const J=D.textures;if(tt.length!==J.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,et=J.length;Y<et;Y++)tt[Y]=r.COLOR_ATTACHMENT0+Y;tt.length=J.length,ft=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,ft=!0);ft&&r.drawBuffers(tt)}function Xt(D){return x!==D?(r.useProgram(D),x=D,!0):!1}const xe={[Bi]:r.FUNC_ADD,[Wl]:r.FUNC_SUBTRACT,[Xl]:r.FUNC_REVERSE_SUBTRACT};xe[ql]=r.MIN,xe[$l]=r.MAX;const Vt={[Yl]:r.ZERO,[Kl]:r.ONE,[jl]:r.SRC_COLOR,[ur]:r.SRC_ALPHA,[ic]:r.SRC_ALPHA_SATURATE,[tc]:r.DST_COLOR,[Jl]:r.DST_ALPHA,[Zl]:r.ONE_MINUS_SRC_COLOR,[fr]:r.ONE_MINUS_SRC_ALPHA,[ec]:r.ONE_MINUS_DST_COLOR,[Ql]:r.ONE_MINUS_DST_ALPHA,[nc]:r.CONSTANT_COLOR,[sc]:r.ONE_MINUS_CONSTANT_COLOR,[rc]:r.CONSTANT_ALPHA,[ac]:r.ONE_MINUS_CONSTANT_ALPHA};function Kt(D,ct,tt,ft,J,Y,et,Pt,ne,jt){if(D===fi){y===!0&&(gt(r.BLEND),y=!1);return}if(y===!1&&(Z(r.BLEND),y=!0),D!==Gl){if(D!==p||jt!==_){if((d!==Bi||b!==Bi)&&(r.blendEquation(r.FUNC_ADD),d=Bi,b=Bi),jt)switch(D){case on:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Na:r.blendFunc(r.ONE,r.ONE);break;case Fa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Oa:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Gt("WebGLState: Invalid blending: ",D);break}else switch(D){case on:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Na:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Fa:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oa:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",D);break}E=null,T=null,w=null,A=null,C.set(0,0,0),F=0,p=D,_=jt}return}J=J||ct,Y=Y||tt,et=et||ft,(ct!==d||J!==b)&&(r.blendEquationSeparate(xe[ct],xe[J]),d=ct,b=J),(tt!==E||ft!==T||Y!==w||et!==A)&&(r.blendFuncSeparate(Vt[tt],Vt[ft],Vt[Y],Vt[et]),E=tt,T=ft,w=Y,A=et),(Pt.equals(C)===!1||ne!==F)&&(r.blendColor(Pt.r,Pt.g,Pt.b,ne),C.copy(Pt),F=ne),p=D,_=!1}function te(D,ct){D.side===di?gt(r.CULL_FACE):Z(r.CULL_FACE);let tt=D.side===Ie;ct&&(tt=!tt),Ft(tt),D.blending===on&&D.transparent===!1?Kt(fi):Kt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ft=D.stencilWrite;o.setTest(ft),ft&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(D){S!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),S=D)}function ue(D){D!==zl?(Z(r.CULL_FACE),D!==P&&(D===Ua?r.cullFace(r.BACK):D===Hl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),P=D}function R(D){D!==O&&(V&&r.lineWidth(D),O=D)}function fe(D,ct,tt){D?(Z(r.POLYGON_OFFSET_FILL),(B!==ct||X!==tt)&&(r.polygonOffset(ct,tt),B=ct,X=tt)):gt(r.POLYGON_OFFSET_FILL)}function Yt(D){D?Z(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function ie(D){D===void 0&&(D=r.TEXTURE0+W-1),dt!==D&&(r.activeTexture(D),dt=D)}function St(D,ct,tt){tt===void 0&&(dt===null?tt=r.TEXTURE0+W-1:tt=dt);let ft=at[tt];ft===void 0&&(ft={type:void 0,texture:void 0},at[tt]=ft),(ft.type!==D||ft.texture!==ct)&&(dt!==tt&&(r.activeTexture(tt),dt=tt),r.bindTexture(D,ct||$[D]),ft.type=D,ft.texture=ct)}function M(){const D=at[dt];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function m(){try{r.compressedTexImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function q(){try{r.texSubImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function K(){try{r.texSubImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function it(){try{r.texStorage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function yt(){try{r.texStorage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function Ct(){try{r.texImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function Q(){try{r.texImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function st(D){Nt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Nt.copy(D))}function _t(D){le.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function Mt(D,ct){let tt=c.get(ct);tt===void 0&&(tt=new WeakMap,c.set(ct,tt));let ft=tt.get(D);ft===void 0&&(ft=r.getUniformBlockIndex(ct,D.name),tt.set(D,ft))}function nt(D,ct){const ft=c.get(ct).get(D);l.get(ct)!==ft&&(r.uniformBlockBinding(ct,ft,D.__bindingPointIndex),l.set(ct,ft))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},dt=null,at={},u={},f=new WeakMap,g=[],x=null,y=!1,p=null,d=null,E=null,T=null,b=null,w=null,A=null,C=new It(0,0,0),F=0,_=!1,S=null,P=null,O=null,B=null,X=null,Nt.set(0,0,r.canvas.width,r.canvas.height),le.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:gt,bindFramebuffer:Dt,drawBuffers:vt,useProgram:Xt,setBlending:Kt,setMaterial:te,setFlipSided:Ft,setCullFace:ue,setLineWidth:R,setPolygonOffset:fe,setScissorTest:Yt,activeTexture:ie,bindTexture:St,unbindTexture:M,compressedTexImage2D:m,compressedTexImage3D:L,texImage2D:Ct,texImage3D:Q,updateUBOMapping:Mt,uniformBlockBinding:nt,texStorage2D:it,texStorage3D:yt,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:bt,scissor:st,viewport:_t,reset:Ot}}function Xp(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,m){return g?new OffscreenCanvas(M,m):ys("canvas")}function y(M,m,L){let q=1;const K=St(M);if((K.width>L||K.height>L)&&(q=L/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const G=Math.floor(q*K.width),bt=Math.floor(q*K.height);u===void 0&&(u=x(G,bt));const it=m?x(G,bt):u;return it.width=G,it.height=bt,it.getContext("2d").drawImage(M,0,0,G,bt),Rt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+bt+")."),it}else return"data"in M&&Rt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function p(M){return M.generateMipmaps}function d(M){r.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?r.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(M,m,L,q,K=!1){if(M!==null){if(r[M]!==void 0)return r[M];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=m;if(m===r.RED&&(L===r.FLOAT&&(G=r.R32F),L===r.HALF_FLOAT&&(G=r.R16F),L===r.UNSIGNED_BYTE&&(G=r.R8)),m===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.R8UI),L===r.UNSIGNED_SHORT&&(G=r.R16UI),L===r.UNSIGNED_INT&&(G=r.R32UI),L===r.BYTE&&(G=r.R8I),L===r.SHORT&&(G=r.R16I),L===r.INT&&(G=r.R32I)),m===r.RG&&(L===r.FLOAT&&(G=r.RG32F),L===r.HALF_FLOAT&&(G=r.RG16F),L===r.UNSIGNED_BYTE&&(G=r.RG8)),m===r.RG_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.RG8UI),L===r.UNSIGNED_SHORT&&(G=r.RG16UI),L===r.UNSIGNED_INT&&(G=r.RG32UI),L===r.BYTE&&(G=r.RG8I),L===r.SHORT&&(G=r.RG16I),L===r.INT&&(G=r.RG32I)),m===r.RGB_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.RGB8UI),L===r.UNSIGNED_SHORT&&(G=r.RGB16UI),L===r.UNSIGNED_INT&&(G=r.RGB32UI),L===r.BYTE&&(G=r.RGB8I),L===r.SHORT&&(G=r.RGB16I),L===r.INT&&(G=r.RGB32I)),m===r.RGBA_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),L===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),L===r.UNSIGNED_INT&&(G=r.RGBA32UI),L===r.BYTE&&(G=r.RGBA8I),L===r.SHORT&&(G=r.RGBA16I),L===r.INT&&(G=r.RGBA32I)),m===r.RGB&&(L===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),L===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),m===r.RGBA){const bt=K?_s:Wt.getTransfer(q);L===r.FLOAT&&(G=r.RGBA32F),L===r.HALF_FLOAT&&(G=r.RGBA16F),L===r.UNSIGNED_BYTE&&(G=bt===Jt?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function b(M,m){let L;return M?m===null||m===ni||m===Pn?L=r.DEPTH24_STENCIL8:m===Qe?L=r.DEPTH32F_STENCIL8:m===Rn&&(L=r.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===ni||m===Pn?L=r.DEPTH_COMPONENT24:m===Qe?L=r.DEPTH_COMPONENT32F:m===Rn&&(L=r.DEPTH_COMPONENT16),L}function w(M,m){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Me&&M.minFilter!==Te?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function A(M){const m=M.target;m.removeEventListener("dispose",A),F(m),m.isVideoTexture&&h.delete(m)}function C(M){const m=M.target;m.removeEventListener("dispose",C),S(m)}function F(M){const m=i.get(M);if(m.__webglInit===void 0)return;const L=M.source,q=f.get(L);if(q){const K=q[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(M),Object.keys(q).length===0&&f.delete(L)}i.remove(M)}function _(M){const m=i.get(M);r.deleteTexture(m.__webglTexture);const L=M.source,q=f.get(L);delete q[m.__cacheKey],a.memory.textures--}function S(M){const m=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(m.__webglFramebuffer[q]))for(let K=0;K<m.__webglFramebuffer[q].length;K++)r.deleteFramebuffer(m.__webglFramebuffer[q][K]);else r.deleteFramebuffer(m.__webglFramebuffer[q]);m.__webglDepthbuffer&&r.deleteRenderbuffer(m.__webglDepthbuffer[q])}else{if(Array.isArray(m.__webglFramebuffer))for(let q=0;q<m.__webglFramebuffer.length;q++)r.deleteFramebuffer(m.__webglFramebuffer[q]);else r.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&r.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&r.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let q=0;q<m.__webglColorRenderbuffer.length;q++)m.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(m.__webglColorRenderbuffer[q]);m.__webglDepthRenderbuffer&&r.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const L=M.textures;for(let q=0,K=L.length;q<K;q++){const G=i.get(L[q]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(L[q])}i.remove(M)}let P=0;function O(){P=0}function B(){const M=P;return M>=n.maxTextures&&Rt("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+n.maxTextures),P+=1,M}function X(M){const m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function W(M,m){const L=i.get(M);if(M.isVideoTexture&&Yt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){const q=M.image;if(q===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,M,m);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+m)}function V(M,m){const L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){$(L,M,m);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+m)}function H(M,m){const L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){$(L,M,m);return}e.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+m)}function j(M,m){const L=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){Z(L,M,m);return}e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+m)}const dt={[br]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[Er]:r.MIRRORED_REPEAT},at={[Me]:r.NEAREST,[cc]:r.NEAREST_MIPMAP_NEAREST,[zn]:r.NEAREST_MIPMAP_LINEAR,[Te]:r.LINEAR,[Is]:r.LINEAR_MIPMAP_NEAREST,[zi]:r.LINEAR_MIPMAP_LINEAR},ut={[uc]:r.NEVER,[xc]:r.ALWAYS,[fc]:r.LESS,[xa]:r.LEQUAL,[pc]:r.EQUAL,[_a]:r.GEQUAL,[mc]:r.GREATER,[gc]:r.NOTEQUAL};function Bt(M,m){if(m.type===Qe&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Te||m.magFilter===Is||m.magFilter===zn||m.magFilter===zi||m.minFilter===Te||m.minFilter===Is||m.minFilter===zn||m.minFilter===zi)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(M,r.TEXTURE_WRAP_S,dt[m.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,dt[m.wrapT]),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,dt[m.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,at[m.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,at[m.minFilter]),m.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,ut[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Me||m.minFilter!==zn&&m.minFilter!==zi||m.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");r.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,n.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Nt(M,m){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",A));const q=m.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const G=X(m);if(G!==M.__cacheKey){K[G]===void 0&&(K[G]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[G].usedTimes++;const bt=K[M.__cacheKey];bt!==void 0&&(K[M.__cacheKey].usedTimes--,bt.usedTimes===0&&_(m)),M.__cacheKey=G,M.__webglTexture=K[G].texture}return L}function le(M,m,L){return Math.floor(Math.floor(M/L)/m)}function re(M,m,L,q){const G=M.updateRanges;if(G.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,m.width,m.height,L,q,m.data);else{G.sort((Q,st)=>Q.start-st.start);let bt=0;for(let Q=1;Q<G.length;Q++){const st=G[bt],_t=G[Q],Mt=st.start+st.count,nt=le(_t.start,m.width,4),Ot=le(st.start,m.width,4);_t.start<=Mt+1&&nt===Ot&&le(_t.start+_t.count-1,m.width,4)===nt?st.count=Math.max(st.count,_t.start+_t.count-st.start):(++bt,G[bt]=_t)}G.length=bt+1;const it=r.getParameter(r.UNPACK_ROW_LENGTH),yt=r.getParameter(r.UNPACK_SKIP_PIXELS),Ct=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,m.width);for(let Q=0,st=G.length;Q<st;Q++){const _t=G[Q],Mt=Math.floor(_t.start/4),nt=Math.ceil(_t.count/4),Ot=Mt%m.width,D=Math.floor(Mt/m.width),ct=nt,tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),e.texSubImage2D(r.TEXTURE_2D,0,Ot,D,ct,tt,L,q,m.data)}M.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,it),r.pixelStorei(r.UNPACK_SKIP_PIXELS,yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ct)}}function $(M,m,L){let q=r.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),m.isData3DTexture&&(q=r.TEXTURE_3D);const K=Nt(M,m),G=m.source;e.bindTexture(q,M.__webglTexture,r.TEXTURE0+L);const bt=i.get(G);if(G.version!==bt.__version||K===!0){e.activeTexture(r.TEXTURE0+L);const it=Wt.getPrimaries(Wt.workingColorSpace),yt=m.colorSpace===bi?null:Wt.getPrimaries(m.colorSpace),Ct=m.colorSpace===bi||it===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,m.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,m.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Q=y(m.image,!1,n.maxTextureSize);Q=ie(m,Q);const st=s.convert(m.format,m.colorSpace),_t=s.convert(m.type);let Mt=T(m.internalFormat,st,_t,m.colorSpace,m.isVideoTexture);Bt(q,m);let nt;const Ot=m.mipmaps,D=m.isVideoTexture!==!0,ct=bt.__version===void 0||K===!0,tt=G.dataReady,ft=w(m,Q);if(m.isDepthTexture)Mt=b(m.format===Hi,m.type),ct&&(D?e.texStorage2D(r.TEXTURE_2D,1,Mt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,st,_t,null));else if(m.isDataTexture)if(Ot.length>0){D&&ct&&e.texStorage2D(r.TEXTURE_2D,ft,Mt,Ot[0].width,Ot[0].height);for(let J=0,Y=Ot.length;J<Y;J++)nt=Ot[J],D?tt&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,nt.width,nt.height,st,_t,nt.data):e.texImage2D(r.TEXTURE_2D,J,Mt,nt.width,nt.height,0,st,_t,nt.data);m.generateMipmaps=!1}else D?(ct&&e.texStorage2D(r.TEXTURE_2D,ft,Mt,Q.width,Q.height),tt&&re(m,Q,st,_t)):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,st,_t,Q.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){D&&ct&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Mt,Ot[0].width,Ot[0].height,Q.depth);for(let J=0,Y=Ot.length;J<Y;J++)if(nt=Ot[J],m.format!==$e)if(st!==null)if(D){if(tt)if(m.layerUpdates.size>0){const et=go(nt.width,nt.height,m.format,m.type);for(const Pt of m.layerUpdates){const ne=nt.data.subarray(Pt*et/nt.data.BYTES_PER_ELEMENT,(Pt+1)*et/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Pt,nt.width,nt.height,1,st,ne)}m.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,nt.width,nt.height,Q.depth,st,nt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Mt,nt.width,nt.height,Q.depth,0,nt.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?tt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,nt.width,nt.height,Q.depth,st,_t,nt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Mt,nt.width,nt.height,Q.depth,0,st,_t,nt.data)}else{D&&ct&&e.texStorage2D(r.TEXTURE_2D,ft,Mt,Ot[0].width,Ot[0].height);for(let J=0,Y=Ot.length;J<Y;J++)nt=Ot[J],m.format!==$e?st!==null?D?tt&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,nt.width,nt.height,st,nt.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Mt,nt.width,nt.height,0,nt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?tt&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,nt.width,nt.height,st,_t,nt.data):e.texImage2D(r.TEXTURE_2D,J,Mt,nt.width,nt.height,0,st,_t,nt.data)}else if(m.isDataArrayTexture)if(D){if(ct&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Mt,Q.width,Q.height,Q.depth),tt)if(m.layerUpdates.size>0){const J=go(Q.width,Q.height,m.format,m.type);for(const Y of m.layerUpdates){const et=Q.data.subarray(Y*J/Q.data.BYTES_PER_ELEMENT,(Y+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,st,_t,et)}m.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(m.isData3DTexture)D?(ct&&e.texStorage3D(r.TEXTURE_3D,ft,Mt,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(m.isFramebufferTexture){if(ct)if(D)e.texStorage2D(r.TEXTURE_2D,ft,Mt,Q.width,Q.height);else{let J=Q.width,Y=Q.height;for(let et=0;et<ft;et++)e.texImage2D(r.TEXTURE_2D,et,Mt,J,Y,0,st,_t,null),J>>=1,Y>>=1}}else if(Ot.length>0){if(D&&ct){const J=St(Ot[0]);e.texStorage2D(r.TEXTURE_2D,ft,Mt,J.width,J.height)}for(let J=0,Y=Ot.length;J<Y;J++)nt=Ot[J],D?tt&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,st,_t,nt):e.texImage2D(r.TEXTURE_2D,J,Mt,st,_t,nt);m.generateMipmaps=!1}else if(D){if(ct){const J=St(Q);e.texStorage2D(r.TEXTURE_2D,ft,Mt,J.width,J.height)}tt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st,_t,Q)}else e.texImage2D(r.TEXTURE_2D,0,Mt,st,_t,Q);p(m)&&d(q),bt.__version=G.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function Z(M,m,L){if(m.image.length!==6)return;const q=Nt(M,m),K=m.source;e.bindTexture(r.TEXTURE_CUBE_MAP,M.__webglTexture,r.TEXTURE0+L);const G=i.get(K);if(K.version!==G.__version||q===!0){e.activeTexture(r.TEXTURE0+L);const bt=Wt.getPrimaries(Wt.workingColorSpace),it=m.colorSpace===bi?null:Wt.getPrimaries(m.colorSpace),yt=m.colorSpace===bi||bt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,m.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,m.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Ct=m.isCompressedTexture||m.image[0].isCompressedTexture,Q=m.image[0]&&m.image[0].isDataTexture,st=[];for(let Y=0;Y<6;Y++)!Ct&&!Q?st[Y]=y(m.image[Y],!0,n.maxCubemapSize):st[Y]=Q?m.image[Y].image:m.image[Y],st[Y]=ie(m,st[Y]);const _t=st[0],Mt=s.convert(m.format,m.colorSpace),nt=s.convert(m.type),Ot=T(m.internalFormat,Mt,nt,m.colorSpace),D=m.isVideoTexture!==!0,ct=G.__version===void 0||q===!0,tt=K.dataReady;let ft=w(m,_t);Bt(r.TEXTURE_CUBE_MAP,m);let J;if(Ct){D&&ct&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ot,_t.width,_t.height);for(let Y=0;Y<6;Y++){J=st[Y].mipmaps;for(let et=0;et<J.length;et++){const Pt=J[et];m.format!==$e?Mt!==null?D?tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,0,0,Pt.width,Pt.height,Mt,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,Ot,Pt.width,Pt.height,0,Pt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,0,0,Pt.width,Pt.height,Mt,nt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,Ot,Pt.width,Pt.height,0,Mt,nt,Pt.data)}}}else{if(J=m.mipmaps,D&&ct){J.length>0&&ft++;const Y=St(st[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ot,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){D?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,st[Y].width,st[Y].height,Mt,nt,st[Y].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,st[Y].width,st[Y].height,0,Mt,nt,st[Y].data);for(let et=0;et<J.length;et++){const ne=J[et].image[Y].image;D?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,0,0,ne.width,ne.height,Mt,nt,ne.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,Ot,ne.width,ne.height,0,Mt,nt,ne.data)}}else{D?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Mt,nt,st[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,Mt,nt,st[Y]);for(let et=0;et<J.length;et++){const Pt=J[et];D?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,0,0,Mt,nt,Pt.image[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,Ot,Mt,nt,Pt.image[Y])}}}p(m)&&d(r.TEXTURE_CUBE_MAP),G.__version=K.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function gt(M,m,L,q,K,G){const bt=s.convert(L.format,L.colorSpace),it=s.convert(L.type),yt=T(L.internalFormat,bt,it,L.colorSpace),Ct=i.get(m),Q=i.get(L);if(Q.__renderTarget=m,!Ct.__hasExternalTextures){const st=Math.max(1,m.width>>G),_t=Math.max(1,m.height>>G);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,G,yt,st,_t,m.depth,0,bt,it,null):e.texImage2D(K,G,yt,st,_t,0,bt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,M),fe(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,K,Q.__webglTexture,0,R(m)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,K,Q.__webglTexture,G),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(M,m,L){if(r.bindRenderbuffer(r.RENDERBUFFER,M),m.depthBuffer){const q=m.depthTexture,K=q&&q.isDepthTexture?q.type:null,G=b(m.stencilBuffer,K),bt=m.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(m)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R(m),G,m.width,m.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,R(m),G,m.width,m.height):r.renderbufferStorage(r.RENDERBUFFER,G,m.width,m.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,M)}else{const q=m.textures;for(let K=0;K<q.length;K++){const G=q[K],bt=s.convert(G.format,G.colorSpace),it=s.convert(G.type),yt=T(G.internalFormat,bt,it,G.colorSpace);fe(m)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R(m),yt,m.width,m.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,R(m),yt,m.width,m.height):r.renderbufferStorage(r.RENDERBUFFER,yt,m.width,m.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(M,m,L){const q=m.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,m.depthTexture);const Ct=s.convert(m.depthTexture.format),Q=s.convert(m.depthTexture.type);let st;m.depthTexture.format===gi?st=r.DEPTH_COMPONENT24:m.depthTexture.format===Hi&&(st=r.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,st,m.width,m.height,0,Ct,Q,null)}}else W(m.depthTexture,0);const G=K.__webglTexture,bt=R(m),it=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+L:r.TEXTURE_2D,yt=m.depthTexture.format===Hi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(m.depthTexture.format===gi)fe(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,it,G,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,yt,it,G,0);else if(m.depthTexture.format===Hi)fe(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,it,G,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,yt,it,G,0);else throw new Error("Unknown depthTexture format")}function Xt(M){const m=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),q){const K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=q}if(M.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let q=0;q<6;q++)vt(m.__webglFramebuffer[q],M,q);else{const q=M.texture.mipmaps;q&&q.length>0?vt(m.__webglFramebuffer[0],M,0):vt(m.__webglFramebuffer,M,0)}else if(L){m.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer[q]),m.__webglDepthbuffer[q]===void 0)m.__webglDepthbuffer[q]=r.createRenderbuffer(),Dt(m.__webglDepthbuffer[q],M,!1);else{const K=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,G)}}else{const q=M.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=r.createRenderbuffer(),Dt(m.__webglDepthbuffer,M,!1);else{const K=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,G)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(M,m,L){const q=i.get(M);m!==void 0&&gt(q.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&Xt(M)}function Vt(M){const m=M.texture,L=i.get(M),q=i.get(m);M.addEventListener("dispose",C);const K=M.textures,G=M.isWebGLCubeRenderTarget===!0,bt=K.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=m.version,a.memory.textures++),G){L.__webglFramebuffer=[];for(let it=0;it<6;it++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[it]=[];for(let yt=0;yt<m.mipmaps.length;yt++)L.__webglFramebuffer[it][yt]=r.createFramebuffer()}else L.__webglFramebuffer[it]=r.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let it=0;it<m.mipmaps.length;it++)L.__webglFramebuffer[it]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(bt)for(let it=0,yt=K.length;it<yt;it++){const Ct=i.get(K[it]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=r.createTexture(),a.memory.textures++)}if(M.samples>0&&fe(M)===!1){L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){const yt=K[it];L.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[it]);const Ct=s.convert(yt.format,yt.colorSpace),Q=s.convert(yt.type),st=T(yt.internalFormat,Ct,Q,yt.colorSpace,M.isXRRenderTarget===!0),_t=R(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,st,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,L.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(L.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(G){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,m);for(let it=0;it<6;it++)if(m.mipmaps&&m.mipmaps.length>0)for(let yt=0;yt<m.mipmaps.length;yt++)gt(L.__webglFramebuffer[it][yt],M,m,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt);else gt(L.__webglFramebuffer[it],M,m,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(m)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let it=0,yt=K.length;it<yt;it++){const Ct=K[it],Q=i.get(Ct);let st=r.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(st=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),Bt(st,Ct),gt(L.__webglFramebuffer,M,Ct,r.COLOR_ATTACHMENT0+it,st,0),p(Ct)&&d(st)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(it=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Bt(it,m),m.mipmaps&&m.mipmaps.length>0)for(let yt=0;yt<m.mipmaps.length;yt++)gt(L.__webglFramebuffer[yt],M,m,r.COLOR_ATTACHMENT0,it,yt);else gt(L.__webglFramebuffer,M,m,r.COLOR_ATTACHMENT0,it,0);p(m)&&d(it),e.unbindTexture()}M.depthBuffer&&Xt(M)}function Kt(M){const m=M.textures;for(let L=0,q=m.length;L<q;L++){const K=m[L];if(p(K)){const G=E(M),bt=i.get(K).__webglTexture;e.bindTexture(G,bt),d(G),e.unbindTexture()}}}const te=[],Ft=[];function ue(M){if(M.samples>0){if(fe(M)===!1){const m=M.textures,L=M.width,q=M.height;let K=r.COLOR_BUFFER_BIT;const G=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=i.get(M),it=m.length>1;if(it)for(let Ct=0;Ct<m.length;Ct++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const yt=M.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ct=0;Ct<m.length;Ct++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[Ct]);const Q=i.get(m[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,L,q,0,0,L,q,K,r.NEAREST),l===!0&&(te.length=0,Ft.length=0,te.push(r.COLOR_ATTACHMENT0+Ct),M.depthBuffer&&M.resolveDepthBuffer===!1&&(te.push(G),Ft.push(G),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ft)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let Ct=0;Ct<m.length;Ct++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,bt.__webglColorRenderbuffer[Ct]);const Q=i.get(m[Ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const m=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[m])}}}function R(M){return Math.min(n.maxSamples,M.samples)}function fe(M){const m=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Yt(M){const m=a.render.frame;h.get(M)!==m&&(h.set(M,m),M.update())}function ie(M,m){const L=M.colorSpace,q=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==un&&L!==bi&&(Wt.getTransfer(L)===Jt?(q!==$e||K!==Be)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",L)),m}function St(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=xe,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qp(r,t){function e(i,n=bi){let s;const a=Wt.getTransfer(n);if(i===Be)return r.UNSIGNED_BYTE;if(i===da)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ua)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Zo)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ko)return r.BYTE;if(i===jo)return r.SHORT;if(i===Rn)return r.UNSIGNED_SHORT;if(i===ha)return r.INT;if(i===ni)return r.UNSIGNED_INT;if(i===Qe)return r.FLOAT;if(i===mi)return r.HALF_FLOAT;if(i===Qo)return r.ALPHA;if(i===tl)return r.RGB;if(i===$e)return r.RGBA;if(i===gi)return r.DEPTH_COMPONENT;if(i===Hi)return r.DEPTH_STENCIL;if(i===el)return r.RED;if(i===fa)return r.RED_INTEGER;if(i===dn)return r.RG;if(i===pa)return r.RG_INTEGER;if(i===ma)return r.RGBA_INTEGER;if(i===fs||i===ps||i===ms||i===gs)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tr||i===wr||i===Ar||i===Cr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ar)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rr||i===Pr||i===Dr||i===Lr||i===Ir||i===Ur||i===Nr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rr||i===Pr)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lr)return s.COMPRESSED_R11_EAC;if(i===Ir)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ur)return s.COMPRESSED_RG11_EAC;if(i===Nr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fr||i===Or||i===Br||i===kr||i===zr||i===Hr||i===Vr||i===Gr||i===Wr||i===Xr||i===qr||i===$r||i===Yr||i===Kr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Or)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Br)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$r)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jr||i===Zr||i===Jr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===jr)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qr||i===ta||i===ea||i===ia)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ta)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const $p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new fl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new si({vertexShader:$p,fragmentShader:Yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jp extends pn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,x=null;const y=typeof XRWebGLBinding<"u",p=new Kp,d={},E=e.getContextAttributes();let T=null,b=null;const w=[],A=[],C=new Ht;let F=null;const _=new Se;_.viewport=new de;const S=new Se;S.viewport=new de;const P=[_,S],O=new nh;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=w[$];return Z===void 0&&(Z=new ir,w[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=w[$];return Z===void 0&&(Z=new ir,w[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=w[$];return Z===void 0&&(Z=new ir,w[$]=Z),Z.getHandSpace()};function W($){const Z=A.indexOf($.inputSource);if(Z===-1)return;const gt=w[Z];gt!==void 0&&(gt.update($.inputSource,$.frame,c||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",H);for(let $=0;$<w.length;$++){const Z=A[$];Z!==null&&(A[$]=null,w[$].disconnect(Z))}B=null,X=null,p.reset();for(const $ in d)delete d[$];t.setRenderTarget(T),g=null,f=null,u=null,n=null,b=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",V),n.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Dt=null,vt=null;E.depth&&(vt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=E.stencil?Hi:gi,Dt=E.stencil?Pn:ni);const Xt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Xt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ii(f.textureWidth,f.textureHeight,{format:$e,type:Be,depthTexture:new Ln(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(n,e,gt),n.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new ii(g.framebufferWidth,g.framebufferHeight,{format:$e,type:Be,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),re.setContext(n),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H($){for(let Z=0;Z<$.removed.length;Z++){const gt=$.removed[Z],Dt=A.indexOf(gt);Dt>=0&&(A[Dt]=null,w[Dt].disconnect(gt))}for(let Z=0;Z<$.added.length;Z++){const gt=$.added[Z];let Dt=A.indexOf(gt);if(Dt===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=A.length){A.push(gt),Dt=Xt;break}else if(A[Xt]===null){A[Xt]=gt,Dt=Xt;break}if(Dt===-1)break}const vt=w[Dt];vt&&vt.connect(gt)}}const j=new I,dt=new I;function at($,Z,gt){j.setFromMatrixPosition(Z.matrixWorld),dt.setFromMatrixPosition(gt.matrixWorld);const Dt=j.distanceTo(dt),vt=Z.projectionMatrix.elements,Xt=gt.projectionMatrix.elements,xe=vt[14]/(vt[10]-1),Vt=vt[14]/(vt[10]+1),Kt=(vt[9]+1)/vt[5],te=(vt[9]-1)/vt[5],Ft=(vt[8]-1)/vt[0],ue=(Xt[8]+1)/Xt[0],R=xe*Ft,fe=xe*ue,Yt=Dt/(-Ft+ue),ie=Yt*-Ft;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ie),$.translateZ(Yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),vt[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const St=xe+Yt,M=Vt+Yt,m=R-ie,L=fe+(Dt-ie),q=Kt*Vt/M*St,K=te*Vt/M*St;$.projectionMatrix.makePerspective(m,L,q,K,St,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ut($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let Z=$.near,gt=$.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(gt=p.depthFar)),O.near=S.near=_.near=Z,O.far=S.far=_.far=gt,(B!==O.near||X!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,X=O.far),O.layers.mask=$.layers.mask|6,_.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Dt=$.parent,vt=O.cameras;ut(O,Dt);for(let Xt=0;Xt<vt.length;Xt++)ut(vt[Xt],Dt);vt.length===2?at(O,_,S):O.projectionMatrix.copy(_.projectionMatrix),Bt($,O,Dt)};function Bt($,Z,gt){gt===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=na*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function($){return d[$]};let Nt=null;function le($,Z){if(h=Z.getViewerPose(c||a),x=Z,h!==null){const gt=h.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let Dt=!1;gt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let Vt=0;Vt<gt.length;Vt++){const Kt=gt[Vt];let te=null;if(g!==null)te=g.getViewport(Kt);else{const ue=u.getViewSubImage(f,Kt);te=ue.viewport,Vt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(b))}let Ft=P[Vt];Ft===void 0&&(Ft=new Se,Ft.layers.enable(Vt),Ft.viewport=new de,P[Vt]=Ft),Ft.matrix.fromArray(Kt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Kt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(te.x,te.y,te.width,te.height),Vt===0&&(O.matrix.copy(Ft.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(Ft)}const vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){u=i.getBinding();const Vt=u.getDepthInformation(gt[0]);Vt&&Vt.isValid&&Vt.texture&&p.init(Vt,n.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let Vt=0;Vt<gt.length;Vt++){const Kt=gt[Vt].camera;if(Kt){let te=d[Kt];te||(te=new fl,d[Kt]=te);const Ft=u.getCameraImage(Kt);te.sourceTexture=Ft}}}}for(let gt=0;gt<w.length;gt++){const Dt=A[gt],vt=w[gt];Dt!==null&&vt!==void 0&&vt.update(Dt,Z,c||a)}Nt&&Nt($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const re=new xl;re.setAnimationLoop(le),this.setAnimationLoop=function($){Nt=$},this.dispose=function(){}}}const Fi=new Ye,Zp=new ae;function Jp(r,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,ol(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,E,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ie&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ie&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d),T=E.envMap,b=E.envMapRotation;T&&(p.envMap.value=T,Fi.copy(b),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.envMapRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(Fi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=T*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Qp(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const b=T.program;i.uniformBlockBinding(E,b)}function c(E,T){let b=n[E.id];b===void 0&&(x(E),b=h(E),n[E.id]=b,E.addEventListener("dispose",p));const w=T.program;i.updateUBOMapping(E,w);const A=t.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function h(E){const T=u();E.__bindingPointIndex=T;const b=r.createBuffer(),w=E.__size,A=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,b),b}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=n[E.id],b=E.uniforms,w=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let A=0,C=b.length;A<C;A++){const F=Array.isArray(b[A])?b[A]:[b[A]];for(let _=0,S=F.length;_<S;_++){const P=F[_];if(g(P,A,_,w)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let W=0;W<B.length;W++){const V=B[W],H=y(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,O+X,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,X),X+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,T,b,w){const A=E.value,C=T+"_"+b;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const F=w[C];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return w[C]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function x(E){const T=E.uniforms;let b=0;const w=16;for(let C=0,F=T.length;C<F;C++){const _=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,P=_.length;S<P;S++){const O=_[S],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,W=B.length;X<W;X++){const V=B[X],H=y(V),j=b%w,dt=j%H.boundary,at=j+dt;b+=dt,at!==0&&w-at<H.storage&&(b+=w-at),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=H.storage}}}const A=b%w;return A>0&&(b+=w-A),E.__size=b,E.__cache={},this}function y(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",E),T}function p(E){const T=E.target;T.removeEventListener("dispose",p);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function d(){for(const E in n)r.deleteBuffer(n[E]);a=[],n={},s={}}return{bind:l,update:c,dispose:d}}const tm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let je=null;function em(){return je===null&&(je=new Wc(tm,16,16,dn,mi),je.name="DFG_LUT",je.minFilter=Te,je.magFilter=Te,je.wrapS=ui,je.wrapT=ui,je.generateMipmaps=!1,je.needsUpdate=!0),je}class On{constructor(t={}){const{canvas:e=_c(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Be}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const y=g,p=new Set([ma,pa,fa]),d=new Set([Be,ni,Rn,Pn,da,ua]),E=new Uint32Array(4),T=new Int32Array(4);let b=null,w=null;const A=[],C=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=He;let P=0,O=0,B=null,X=-1,W=null;const V=new de,H=new de;let j=null;const dt=new It(0);let at=0,ut=e.width,Bt=e.height,Nt=1,le=null,re=null;const $=new de(0,0,ut,Bt),Z=new de(0,0,ut,Bt);let gt=!1;const Dt=new Ma;let vt=!1,Xt=!1;const xe=new ae,Vt=new I,Kt=new de,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ue(){return B===null?Nt:1}let R=i;function fe(v,U){return e.getContext(v,U)}try{const v={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",jt,!1),R===null){const U="webgl2";if(R=fe(U,v),R===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Gt("WebGLRenderer: "+v.message),v}let Yt,ie,St,M,m,L,q,K,G,bt,it,yt,Ct,Q,st,_t,Mt,nt,Ot,D,ct,tt,ft,J;function Y(){Yt=new tf(R),Yt.init(),tt=new qp(R,Yt),ie=new Xu(R,Yt,t,tt),St=new Wp(R,Yt),ie.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),M=new sf(R),m=new Rp,L=new Xp(R,Yt,St,m,ie,tt,M),q=new $u(_),K=new Qu(_),G=new oh(R),ft=new Gu(R,G),bt=new ef(R,G,M,ft),it=new af(R,bt,G,M),Ot=new rf(R,ie,L),_t=new qu(m),yt=new Cp(_,q,K,Yt,ie,ft,_t),Ct=new Jp(_,m),Q=new Dp,st=new Op(Yt),nt=new Vu(_,q,K,St,it,x,l),Mt=new Vp(_,it,ie),J=new Qp(R,M,ie,St),D=new Wu(R,Yt,M),ct=new nf(R,Yt,M),M.programs=yt.programs,_.capabilities=ie,_.extensions=Yt,_.properties=m,_.renderLists=Q,_.shadowMap=Mt,_.state=St,_.info=M}Y(),y!==Be&&(F=new lf(y,e.width,e.height,n,s));const et=new jp(_,R);this.xr=et,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=Yt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Yt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(v){v!==void 0&&(Nt=v,this.setSize(ut,Bt,!1))},this.getSize=function(v){return v.set(ut,Bt)},this.setSize=function(v,U,z=!0){if(et.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=v,Bt=U,e.width=Math.floor(v*Nt),e.height=Math.floor(U*Nt),z===!0&&(e.style.width=v+"px",e.style.height=U+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(ut*Nt,Bt*Nt).floor()},this.setDrawingBufferSize=function(v,U,z){ut=v,Bt=U,Nt=z,e.width=Math.floor(v*z),e.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(y===Be){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(V)},this.getViewport=function(v){return v.copy($)},this.setViewport=function(v,U,z,k){v.isVector4?$.set(v.x,v.y,v.z,v.w):$.set(v,U,z,k),St.viewport(V.copy($).multiplyScalar(Nt).round())},this.getScissor=function(v){return v.copy(Z)},this.setScissor=function(v,U,z,k){v.isVector4?Z.set(v.x,v.y,v.z,v.w):Z.set(v,U,z,k),St.scissor(H.copy(Z).multiplyScalar(Nt).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(v){St.setScissorTest(gt=v)},this.setOpaqueSort=function(v){le=v},this.setTransparentSort=function(v){re=v},this.getClearColor=function(v){return v.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,z=!0){let k=0;if(v){let N=!1;if(B!==null){const rt=B.texture.format;N=p.has(rt)}if(N){const rt=B.texture.type,mt=d.has(rt),lt=nt.getClearColor(),xt=nt.getClearAlpha(),Et=lt.r,At=lt.g,Tt=lt.b;mt?(E[0]=Et,E[1]=At,E[2]=Tt,E[3]=xt,R.clearBufferuiv(R.COLOR,0,E)):(T[0]=Et,T[1]=At,T[2]=Tt,T[3]=xt,R.clearBufferiv(R.COLOR,0,T))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),nt.dispose(),Q.dispose(),st.dispose(),m.dispose(),q.dispose(),K.dispose(),it.dispose(),ft.dispose(),J.dispose(),yt.dispose(),et.dispose(),et.removeEventListener("sessionstart",Aa),et.removeEventListener("sessionend",Ca),Ri.stop()};function Pt(v){v.preventDefault(),Va("WebGLRenderer: Context Lost."),S=!0}function ne(){Va("WebGLRenderer: Context Restored."),S=!1;const v=M.autoReset,U=Mt.enabled,z=Mt.autoUpdate,k=Mt.needsUpdate,N=Mt.type;Y(),M.autoReset=v,Mt.enabled=U,Mt.autoUpdate=z,Mt.needsUpdate=k,Mt.type=N}function jt(v){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ke(v){const U=v.target;U.removeEventListener("dispose",Ke),ri(U)}function ri(v){El(v),m.remove(v)}function El(v){const U=m.get(v).programs;U!==void 0&&(U.forEach(function(z){yt.releaseProgram(z)}),v.isShaderMaterial&&yt.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,z,k,N,rt){U===null&&(U=te);const mt=N.isMesh&&N.matrixWorld.determinant()<0,lt=wl(v,U,z,k,N);St.setMaterial(k,mt);let xt=z.index,Et=1;if(k.wireframe===!0){if(xt=bt.getWireframeAttribute(z),xt===void 0)return;Et=2}const At=z.drawRange,Tt=z.attributes.position;let kt=At.start*Et,Qt=(At.start+At.count)*Et;rt!==null&&(kt=Math.max(kt,rt.start*Et),Qt=Math.min(Qt,(rt.start+rt.count)*Et)),xt!==null?(kt=Math.max(kt,0),Qt=Math.min(Qt,xt.count)):Tt!=null&&(kt=Math.max(kt,0),Qt=Math.min(Qt,Tt.count));const ce=Qt-kt;if(ce<0||ce===1/0)return;ft.setup(N,k,lt,z,xt);let he,ee=D;if(xt!==null&&(he=G.get(xt),ee=ct,ee.setIndex(he)),N.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*ue()),ee.setMode(R.LINES)):ee.setMode(R.TRIANGLES);else if(N.isLine){let wt=k.linewidth;wt===void 0&&(wt=1),St.setLineWidth(wt*ue()),N.isLineSegments?ee.setMode(R.LINES):N.isLineLoop?ee.setMode(R.LINE_LOOP):ee.setMode(R.LINE_STRIP)}else N.isPoints?ee.setMode(R.POINTS):N.isSprite&&ee.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Dn("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,Zt=N._multiDrawCounts,qt=N._multiDrawCount,Ue=xt?G.get(xt).bytesPerElement:1,Xi=m.get(k).currentProgram.getUniforms();for(let Ne=0;Ne<qt;Ne++)Xi.setValue(R,"_gl_DrawID",Ne),ee.render(wt[Ne]/Ue,Zt[Ne])}else if(N.isInstancedMesh)ee.renderInstances(kt,ce,N.count);else if(z.isInstancedBufferGeometry){const wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Zt=Math.min(z.instanceCount,wt);ee.renderInstances(kt,ce,Zt)}else ee.render(kt,ce)};function wa(v,U,z){v.transparent===!0&&v.side===di&&v.forceSinglePass===!1?(v.side=Ie,v.needsUpdate=!0,kn(v,U,z),v.side=wi,v.needsUpdate=!0,kn(v,U,z),v.side=di):kn(v,U,z)}this.compile=function(v,U,z=null){z===null&&(z=v),w=st.get(z),w.init(U),C.push(w),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),v!==z&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),w.setupLights();const k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){const lt=rt[mt];wa(lt,z,N),k.add(lt)}else wa(rt,z,N),k.add(rt)}),w=C.pop(),k},this.compileAsync=function(v,U,z=null){const k=this.compile(v,U,z);return new Promise(N=>{function rt(){if(k.forEach(function(mt){m.get(mt).currentProgram.isReady()&&k.delete(mt)}),k.size===0){N(v);return}setTimeout(rt,10)}Yt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ps=null;function Tl(v){Ps&&Ps(v)}function Aa(){Ri.stop()}function Ca(){Ri.start()}const Ri=new xl;Ri.setAnimationLoop(Tl),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(v){Ps=v,et.setAnimationLoop(v),v===null?Ri.stop():Ri.start()},et.addEventListener("sessionstart",Aa),et.addEventListener("sessionend",Ca),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const z=et.enabled===!0&&et.isPresenting===!0,k=F!==null&&(B===null||z)&&F.begin(_,B);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,U,B),w=st.get(v,C.length),w.init(U),C.push(w),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Dt.setFromProjectionMatrix(xe,ti,U.reversedDepth),Xt=this.localClippingEnabled,vt=_t.init(this.clippingPlanes,Xt),b=Q.get(v,A.length),b.init(),A.push(b),et.enabled===!0&&et.isPresenting===!0){const mt=_.xr.getDepthSensingMesh();mt!==null&&Ds(mt,U,-1/0,_.sortObjects)}Ds(v,U,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(le,re),Ft=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ft&&nt.addToRenderList(b,v),this.info.render.frame++,vt===!0&&_t.beginShadows();const N=w.state.shadowsArray;if(Mt.render(N,v,U),vt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&F.hasRenderPass())===!1){const mt=b.opaque,lt=b.transmissive;if(w.setupLights(),U.isArrayCamera){const xt=U.cameras;if(lt.length>0)for(let Et=0,At=xt.length;Et<At;Et++){const Tt=xt[Et];Pa(mt,lt,v,Tt)}Ft&&nt.render(v);for(let Et=0,At=xt.length;Et<At;Et++){const Tt=xt[Et];Ra(b,v,Tt,Tt.viewport)}}else lt.length>0&&Pa(mt,lt,v,U),Ft&&nt.render(v),Ra(b,v,U)}B!==null&&O===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),k&&F.end(_),v.isScene===!0&&v.onAfterRender(_,v,U),ft.resetDefaultState(),X=-1,W=null,C.pop(),C.length>0?(w=C[C.length-1],vt===!0&&_t.setGlobalState(_.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function Ds(v,U,z,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Dt.intersectsSprite(v)){k&&Kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xe);const mt=it.update(v),lt=v.material;lt.visible&&b.push(v,mt,lt,z,Kt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Dt.intersectsObject(v))){const mt=it.update(v),lt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Kt.copy(v.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Kt.copy(mt.boundingSphere.center)),Kt.applyMatrix4(v.matrixWorld).applyMatrix4(xe)),Array.isArray(lt)){const xt=mt.groups;for(let Et=0,At=xt.length;Et<At;Et++){const Tt=xt[Et],kt=lt[Tt.materialIndex];kt&&kt.visible&&b.push(v,mt,kt,z,Kt.z,Tt)}}else lt.visible&&b.push(v,mt,lt,z,Kt.z,null)}}const rt=v.children;for(let mt=0,lt=rt.length;mt<lt;mt++)Ds(rt[mt],U,z,k)}function Ra(v,U,z,k){const{opaque:N,transmissive:rt,transparent:mt}=v;w.setupLightsView(z),vt===!0&&_t.setGlobalState(_.clippingPlanes,z),k&&St.viewport(V.copy(k)),N.length>0&&Bn(N,U,z),rt.length>0&&Bn(rt,U,z),mt.length>0&&Bn(mt,U,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Pa(v,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const kt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ii(1,1,{generateMipmaps:!0,type:kt?mi:Be,minFilter:zi,samples:ie.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const rt=w.state.transmissionRenderTarget[k.id],mt=k.viewport||V;rt.setSize(mt.z*_.transmissionResolutionScale,mt.w*_.transmissionResolutionScale);const lt=_.getRenderTarget(),xt=_.getActiveCubeFace(),Et=_.getActiveMipmapLevel();_.setRenderTarget(rt),_.getClearColor(dt),at=_.getClearAlpha(),at<1&&_.setClearColor(16777215,.5),_.clear(),Ft&&nt.render(z);const At=_.toneMapping;_.toneMapping=ei;const Tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),vt===!0&&_t.setGlobalState(_.clippingPlanes,k),Bn(v,z,k),L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Qt=0,ce=U.length;Qt<ce;Qt++){const he=U[Qt],{object:ee,geometry:wt,material:Zt,group:qt}=he;if(Zt.side===di&&ee.layers.test(k.layers)){const Ue=Zt.side;Zt.side=Ie,Zt.needsUpdate=!0,Da(ee,z,k,wt,Zt,qt),Zt.side=Ue,Zt.needsUpdate=!0,kt=!0}}kt===!0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt))}_.setRenderTarget(lt,xt,Et),_.setClearColor(dt,at),Tt!==void 0&&(k.viewport=Tt),_.toneMapping=At}function Bn(v,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=v.length;N<rt;N++){const mt=v[N],{object:lt,geometry:xt,group:Et}=mt;let At=mt.material;At.allowOverride===!0&&k!==null&&(At=k),lt.layers.test(z.layers)&&Da(lt,U,z,xt,At,Et)}}function Da(v,U,z,k,N,rt){v.onBeforeRender(_,U,z,k,N,rt),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(_,U,z,k,v,rt),N.transparent===!0&&N.side===di&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,_.renderBufferDirect(z,U,k,N,v,rt),N.side=wi,N.needsUpdate=!0,_.renderBufferDirect(z,U,k,N,v,rt),N.side=di):_.renderBufferDirect(z,U,k,N,v,rt),v.onAfterRender(_,U,z,k,N,rt)}function kn(v,U,z){U.isScene!==!0&&(U=te);const k=m.get(v),N=w.state.lights,rt=w.state.shadowsArray,mt=N.state.version,lt=yt.getParameters(v,N.state,rt,U,z),xt=yt.getProgramCacheKey(lt);let Et=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?K:q).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",Ke),Et=new Map,k.programs=Et);let At=Et.get(xt);if(At!==void 0){if(k.currentProgram===At&&k.lightsStateVersion===mt)return Ia(v,lt),At}else lt.uniforms=yt.getUniforms(v),v.onBeforeCompile(lt,_),At=yt.acquireProgram(lt,xt),Et.set(xt,At),k.uniforms=lt.uniforms;const Tt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Tt.clippingPlanes=_t.uniform),Ia(v,lt),k.needsLights=Cl(v),k.lightsStateVersion=mt,k.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=At,k.uniformsList=null,At}function La(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=xs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Ia(v,U){const z=m.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function wl(v,U,z,k,N){U.isScene!==!0&&(U=te),L.resetTextureUnits();const rt=U.fog,mt=k.isMeshStandardMaterial?U.environment:null,lt=B===null?_.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:un,xt=(k.isMeshStandardMaterial?K:q).get(k.envMap||mt),Et=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,At=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Tt=!!z.morphAttributes.position,kt=!!z.morphAttributes.normal,Qt=!!z.morphAttributes.color;let ce=ei;k.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ce=_.toneMapping);const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=he!==void 0?he.length:0,wt=m.get(k),Zt=w.state.lights;if(vt===!0&&(Xt===!0||v!==W)){const we=v===W&&k.id===X;_t.setState(k,v,we)}let qt=!1;k.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Zt.state.version||wt.outputColorSpace!==lt||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==xt||k.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==_t.numPlanes||wt.numIntersection!==_t.numIntersection)||wt.vertexAlphas!==Et||wt.vertexTangents!==At||wt.morphTargets!==Tt||wt.morphNormals!==kt||wt.morphColors!==Qt||wt.toneMapping!==ce||wt.morphTargetsCount!==ee)&&(qt=!0):(qt=!0,wt.__version=k.version);let Ue=wt.currentProgram;qt===!0&&(Ue=kn(k,U,N));let Xi=!1,Ne=!1,xn=!1;const se=Ue.getUniforms(),Pe=wt.uniforms;if(St.useProgram(Ue.program)&&(Xi=!0,Ne=!0,xn=!0),k.id!==X&&(X=k.id,Ne=!0),Xi||W!==v){St.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),se.setValue(R,"projectionMatrix",v.projectionMatrix),se.setValue(R,"viewMatrix",v.matrixWorldInverse);const De=se.map.cameraPosition;De!==void 0&&De.setValue(R,Vt.setFromMatrixPosition(v.matrixWorld)),ie.logarithmicDepthBuffer&&se.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&se.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),W!==v&&(W=v,Ne=!0,xn=!0)}if(wt.needsLights&&(Zt.state.directionalShadowMap.length>0&&se.setValue(R,"directionalShadowMap",Zt.state.directionalShadowMap,L),Zt.state.spotShadowMap.length>0&&se.setValue(R,"spotShadowMap",Zt.state.spotShadowMap,L),Zt.state.pointShadowMap.length>0&&se.setValue(R,"pointShadowMap",Zt.state.pointShadowMap,L)),N.isSkinnedMesh){se.setOptional(R,N,"bindMatrix"),se.setOptional(R,N,"bindMatrixInverse");const we=N.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),se.setValue(R,"boneTexture",we.boneTexture,L))}N.isBatchedMesh&&(se.setOptional(R,N,"batchingTexture"),se.setValue(R,"batchingTexture",N._matricesTexture,L),se.setOptional(R,N,"batchingIdTexture"),se.setValue(R,"batchingIdTexture",N._indirectTexture,L),se.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&se.setValue(R,"batchingColorTexture",N._colorsTexture,L));const ke=z.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&Ot.update(N,z,Ue),(Ne||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,se.setValue(R,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Pe.envMap.value=xt,Pe.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Pe.envMapIntensity.value=U.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=em()),Ne&&(se.setValue(R,"toneMappingExposure",_.toneMappingExposure),wt.needsLights&&Al(Pe,xn),rt&&k.fog===!0&&Ct.refreshFogUniforms(Pe,rt),Ct.refreshMaterialUniforms(Pe,k,Nt,Bt,w.state.transmissionRenderTarget[v.id]),xs.upload(R,La(wt),Pe,L)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xs.upload(R,La(wt),Pe,L),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&se.setValue(R,"center",N.center),se.setValue(R,"modelViewMatrix",N.modelViewMatrix),se.setValue(R,"normalMatrix",N.normalMatrix),se.setValue(R,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const we=k.uniformsGroups;for(let De=0,Ls=we.length;De<Ls;De++){const Pi=we[De];J.update(Pi,Ue),J.bind(Pi,Ue)}}return Ue}function Al(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Cl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,U,z){const k=m.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),m.get(v.texture).__webglTexture=U,m.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const z=m.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Rl=R.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){B=v,P=U,O=z;let k=null,N=!1,rt=!1;if(v){const lt=m.get(v);if(lt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(R.FRAMEBUFFER,lt.__webglFramebuffer),V.copy(v.viewport),H.copy(v.scissor),j=v.scissorTest,St.viewport(V),St.scissor(H),St.setScissorTest(j),X=-1;return}else if(lt.__webglFramebuffer===void 0)L.setupRenderTarget(v);else if(lt.__hasExternalTextures)L.rebindTextures(v,m.get(v.texture).__webglTexture,m.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const At=v.depthTexture;if(lt.__boundDepthTexture!==At){if(At!==null&&m.has(At)&&(v.width!==At.image.width||v.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(v)}}const xt=v.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(rt=!0);const Et=m.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Et[U])?k=Et[U][z]:k=Et[U],N=!0):v.samples>0&&L.useMultisampledRTT(v)===!1?k=m.get(v).__webglMultisampledFramebuffer:Array.isArray(Et)?k=Et[z]:k=Et,V.copy(v.viewport),H.copy(v.scissor),j=v.scissorTest}else V.copy($).multiplyScalar(Nt).floor(),H.copy(Z).multiplyScalar(Nt).floor(),j=gt;if(z!==0&&(k=Rl),St.bindFramebuffer(R.FRAMEBUFFER,k)&&St.drawBuffers(v,k),St.viewport(V),St.scissor(H),St.setScissorTest(j),N){const lt=m.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,lt.__webglTexture,z)}else if(rt){const lt=U;for(let xt=0;xt<v.textures.length;xt++){const Et=m.get(v.textures[xt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+xt,Et.__webglTexture,z,lt)}}else if(v!==null&&z!==0){const lt=m.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,lt.__webglTexture,z)}X=-1},this.readRenderTargetPixels=function(v,U,z,k,N,rt,mt,lt=0){if(!(v&&v.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=m.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt){St.bindFramebuffer(R.FRAMEBUFFER,xt);try{const Et=v.textures[lt],At=Et.format,Tt=Et.type;if(!ie.textureFormatReadable(At)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Tt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&z>=0&&z<=v.height-N&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+lt),R.readPixels(U,z,k,N,tt.convert(At),tt.convert(Tt),rt))}finally{const Et=B!==null?m.get(B).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,k,N,rt,mt,lt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=m.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt)if(U>=0&&U<=v.width-k&&z>=0&&z<=v.height-N){St.bindFramebuffer(R.FRAMEBUFFER,xt);const Et=v.textures[lt],At=Et.format,Tt=Et.type;if(!ie.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,kt),R.bufferData(R.PIXEL_PACK_BUFFER,rt.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+lt),R.readPixels(U,z,k,N,tt.convert(At),tt.convert(Tt),0);const Qt=B!==null?m.get(B).__webglFramebuffer:null;St.bindFramebuffer(R.FRAMEBUFFER,Qt);const ce=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await vc(R,ce,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,kt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,rt),R.deleteBuffer(kt),R.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,z=0){const k=Math.pow(2,-z),N=Math.floor(v.image.width*k),rt=Math.floor(v.image.height*k),mt=U!==null?U.x:0,lt=U!==null?U.y:0;L.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,mt,lt,N,rt),St.unbindTexture()};const Pl=R.createFramebuffer(),Dl=R.createFramebuffer();this.copyTextureToTexture=function(v,U,z=null,k=null,N=0,rt=null){rt===null&&(N!==0?(Dn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=N,N=0):rt=0);let mt,lt,xt,Et,At,Tt,kt,Qt,ce;const he=v.isCompressedTexture?v.mipmaps[rt]:v.image;if(z!==null)mt=z.max.x-z.min.x,lt=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Et=z.min.x,At=z.min.y,Tt=z.isBox3?z.min.z:0;else{const ke=Math.pow(2,-N);mt=Math.floor(he.width*ke),lt=Math.floor(he.height*ke),v.isDataArrayTexture?xt=he.depth:v.isData3DTexture?xt=Math.floor(he.depth*ke):xt=1,Et=0,At=0,Tt=0}k!==null?(kt=k.x,Qt=k.y,ce=k.z):(kt=0,Qt=0,ce=0);const ee=tt.convert(U.format),wt=tt.convert(U.type);let Zt;U.isData3DTexture?(L.setTexture3D(U,0),Zt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),Zt=R.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),Zt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const qt=R.getParameter(R.UNPACK_ROW_LENGTH),Ue=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Xi=R.getParameter(R.UNPACK_SKIP_PIXELS),Ne=R.getParameter(R.UNPACK_SKIP_ROWS),xn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,he.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Et),R.pixelStorei(R.UNPACK_SKIP_ROWS,At),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tt);const se=v.isDataArrayTexture||v.isData3DTexture,Pe=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const ke=m.get(v),we=m.get(U),De=m.get(ke.__renderTarget),Ls=m.get(we.__renderTarget);St.bindFramebuffer(R.READ_FRAMEBUFFER,De.__webglFramebuffer),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Pi=0;Pi<xt;Pi++)se&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,m.get(v).__webglTexture,N,Tt+Pi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,m.get(U).__webglTexture,rt,ce+Pi)),R.blitFramebuffer(Et,At,mt,lt,kt,Qt,mt,lt,R.DEPTH_BUFFER_BIT,R.NEAREST);St.bindFramebuffer(R.READ_FRAMEBUFFER,null),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||m.has(v)){const ke=m.get(v),we=m.get(U);St.bindFramebuffer(R.READ_FRAMEBUFFER,Pl),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,Dl);for(let De=0;De<xt;De++)se?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.__webglTexture,N,Tt+De):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ke.__webglTexture,N),Pe?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.__webglTexture,rt,ce+De):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,we.__webglTexture,rt),N!==0?R.blitFramebuffer(Et,At,mt,lt,kt,Qt,mt,lt,R.COLOR_BUFFER_BIT,R.NEAREST):Pe?R.copyTexSubImage3D(Zt,rt,kt,Qt,ce+De,Et,At,mt,lt):R.copyTexSubImage2D(Zt,rt,kt,Qt,Et,At,mt,lt);St.bindFramebuffer(R.READ_FRAMEBUFFER,null),St.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Pe?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(Zt,rt,kt,Qt,ce,mt,lt,xt,ee,wt,he.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Zt,rt,kt,Qt,ce,mt,lt,xt,ee,he.data):R.texSubImage3D(Zt,rt,kt,Qt,ce,mt,lt,xt,ee,wt,he):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,rt,kt,Qt,mt,lt,ee,wt,he.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,rt,kt,Qt,he.width,he.height,ee,he.data):R.texSubImage2D(R.TEXTURE_2D,rt,kt,Qt,mt,lt,ee,wt,he);R.pixelStorei(R.UNPACK_ROW_LENGTH,qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ue),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xn),rt===0&&U.generateMipmaps&&R.generateMipmap(Zt),St.unbindTexture()},this.initRenderTarget=function(v){m.get(v).__webglFramebuffer===void 0&&L.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?L.setTextureCube(v,0):v.isData3DTexture?L.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?L.setTexture2DArray(v,0):L.setTexture2D(v,0),St.unbindTexture()},this.resetState=function(){P=0,O=0,B=null,St.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class im extends pt{scene;camera;renderer;pointsGeometry;pointsMaterial;pointsMesh;orbitalType="s";rotationSpeed=.01;isInitialized=!1;constructor(t,e,i,n){super(t,e,i,n),this.scene=new Fn,this.scene.background=new It(15987958),this.camera=new Se(75,800/600,.1,1e3),this.camera.position.z=15,this.renderer=new On({antialias:!0}),this.renderer.setSize(800,600);const s=document.getElementById("canvas-container");if(s){const c=s.querySelector(".three-canvas");c&&c.remove(),this.renderer.domElement.classList.add("three-canvas","absolute","inset-0"),s.appendChild(this.renderer.domElement),this.canvas.style.display="none"}this.pointsGeometry=new Re,this.pointsMaterial=new ul({color:16739328,size:.1}),this.pointsMesh=new jc(this.pointsGeometry,this.pointsMaterial),this.scene.add(this.pointsMesh);const a=new Ai(.5,32,16),o=new Sa({color:0}),l=new oe(a,o);this.scene.add(l),this.initPoints(),this.isInitialized=!0,this.addControl("button","s Orbital",{},()=>{this.orbitalType="s",this.initPoints()}),this.addControl("button","p Orbital",{},()=>{this.orbitalType="p",this.initPoints()}),this.addControl("button","d Orbital",{},()=>{this.orbitalType="d",this.initPoints()}),this.addControl("slider","Rotation Speed",{min:0,max:.1,step:.001,value:.01},c=>this.rotationSpeed=c)}initPoints(){const t=[];for(let i=0;i<5e3;i++)for(;;){const n=(Math.random()-.5)*20,s=(Math.random()-.5)*20,a=(Math.random()-.5)*20,o=Math.sqrt(n*n+s*s+a*a);let l=0;if(this.orbitalType==="s"?l=Math.exp(-o):this.orbitalType==="p"?l=Math.abs(a)*Math.exp(-o/2):this.orbitalType==="d"&&(l=Math.abs(n*s)*Math.exp(-o/3)),Math.random()<l){t.push(n,s,a);break}}this.pointsGeometry.setAttribute("position",new ye(t,3))}update(){this.isInitialized&&(this.scene.rotation.y+=this.rotationSpeed,this.updateData(`Orbital: ${this.orbitalType.toUpperCase()} (3D WebGL)`))}draw(){this.renderer.render(this.scene,this.camera)}reset(){this.orbitalType="s",this.initPoints()}}class nm{currentChallengeIndex=0;challenges=[];score=0;onComplete;constructor(t,e){this.challenges=t,this.onComplete=e}getCurrentChallenge(){return this.currentChallengeIndex<this.challenges.length?this.challenges[this.currentChallengeIndex]:null}checkAnswer(t){const e=this.getCurrentChallenge();if(!e)return!1;const n=Math.abs(t-e.targetValue)<=e.tolerance;return n&&this.handleSuccess(),n}handleSuccess(){this.score+=100,this.currentChallengeIndex++;const t=this.getCurrentChallenge();t?this.onComplete(!0,`Correct! Next Challenge: ${t.question}`):this.onComplete(!0,`All Challenges Complete! Final Score: ${this.score}`)}getProgress(){return`Challenge ${this.currentChallengeIndex+1}/${this.challenges.length} | Score: ${this.score}`}}class sm extends zo{challengeSystem;constructor(t,e,i,n){super(t,e,i,n);const s=[{id:"c1",question:"Hit the target at 50m! (Hint: Try Angle 45, Speed ~22)",targetValue:50,tolerance:2,units:"m",hint:""},{id:"c2",question:"Hit the target at 80m! (Hint: Increase speed)",targetValue:80,tolerance:3,units:"m",hint:""},{id:"c3",question:"High arc target at 20m! (Hint: Angle > 70)",targetValue:20,tolerance:1,units:"m",hint:""}];this.challengeSystem=new nm(s,(a,o)=>this.onChallengeResult(a,o)),this.addControl("button","Check Distance",{},()=>this.verify()),setTimeout(()=>this.showCurrentChallenge(),500)}verify(){const t=this.balls;if(t.length>0){const i=(t[t.length-1].pos.x-50)/10;this.challengeSystem.checkAnswer(i)||alert(`Missed! You hit ${i.toFixed(1)}m. Target is ${this.challengeSystem.getCurrentChallenge()?.targetValue}m.`)}else alert("Fire the cannon first!")}onChallengeResult(t,e){alert(e),this.showCurrentChallenge()}showCurrentChallenge(){const t=this.challengeSystem.getCurrentChallenge();t&&console.log(`Current Challenge: ${t.question}`)}draw(){super.draw();const t=this.challengeSystem.getCurrentChallenge();if(t){const e=50+t.targetValue*10,i=this.height-10;this.ctx.fillStyle="rgba(255, 0, 0, 0.3)",this.ctx.fillRect(e-t.tolerance*10,i-5,t.tolerance*20,5),this.ctx.fillStyle="red",this.ctx.beginPath(),this.ctx.moveTo(e,i),this.ctx.lineTo(e,i-40),this.ctx.lineTo(e+20,i-30),this.ctx.lineTo(e,i-20),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="black",this.ctx.fillText(`Target: ${t.targetValue}m`,e-20,i-50),this.ctx.fillStyle="black",this.ctx.font="16px sans-serif",this.ctx.fillText(`Challenge: ${t.question}`,10,30)}}}class rm extends pt{n2=1;h2=1;nh3=1;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","N2",{min:0,max:5,step:1,value:1},s=>this.n2=s),this.addControl("slider","H2",{min:0,max:5,step:1,value:1},s=>this.h2=s),this.addControl("slider","NH3",{min:0,max:5,step:1,value:1},s=>this.nh3=s)}update(){const t=this.n2*2,e=this.h2*2,i=this.nh3*1,n=this.nh3*3,s=t===i&&e===n&&this.n2>0&&this.h2>0&&this.nh3>0;this.updateData(`N: ${t} vs ${i} | H: ${e} vs ${n}
`+(s?"BALANCED! 🎉":"Not Balanced"))}draw(){this.drawMolecules(this.n2,200,200,"N2"),this.drawMolecules(this.h2,200,350,"H2"),this.ctx.fillStyle="#333",this.ctx.font="40px Arial",this.ctx.fillText("→",380,300),this.drawMolecules(this.nh3,500,275,"NH3")}drawMolecules(t,e,i,n){for(let s=0;s<t;s++){const a=s%3*50,o=Math.floor(s/3)*50,l=e+a,c=i+o;n==="N2"?(this.drawSphere(l-10,c,10,"blue"),this.drawSphere(l+10,c,10,"blue")):n==="H2"?(this.drawSphere(l-8,c,8,"#ccc"),this.drawSphere(l+8,c,8,"#ccc")):n==="NH3"&&(this.drawSphere(l,c,12,"blue"),this.drawSphere(l-10,c+10,8,"#ccc"),this.drawSphere(l+10,c+10,8,"#ccc"),this.drawSphere(l,c-12,8,"#ccc"))}this.ctx.fillStyle="#000",this.ctx.font="20px Arial",this.ctx.fillText(`${t} ${n}`,e,i+80)}reset(){this.n2=1,this.h2=1,this.nh3=1}}class am extends pt{h2=2;o2=1;products={water:0,h2:0,o2:0};constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","H2 Amount",{min:0,max:10,step:1,value:2},s=>this.h2=s),this.addControl("slider","O2 Amount",{min:0,max:10,step:1,value:1},s=>this.o2=s)}update(){const t=Math.min(Math.floor(this.h2/2),Math.floor(this.o2/1)),e=t*2,i=this.h2-t*2,n=this.o2-t*1;this.products={water:e,h2:i,o2:n},this.updateData(`Reaction: 2 H2 + O2 → 2 H2O

Made: ${e} Water
Leftover: ${i} H2, ${n} O2`)}draw(){this.ctx.fillStyle="#333",this.ctx.font="20px Arial",this.ctx.fillText("Reactants (Start)",100,100),this.drawRow(this.h2,100,150,"H2"),this.drawRow(this.o2,100,250,"O2"),this.ctx.font="40px Arial",this.ctx.fillText("→",380,200),this.ctx.font="20px Arial",this.ctx.fillText("Products & Leftovers",500,100),this.drawRow(this.products.water,500,150,"H2O"),this.ctx.fillText("Leftovers:",500,250),this.drawRow(this.products.h2,500,300,"H2"),this.drawRow(this.products.o2,650,300,"O2")}drawRow(t,e,i,n){for(let s=0;s<t;s++){const a=e+s%5*40,o=i+Math.floor(s/5)*40;n==="H2"?(this.drawSphere(a-5,o,5,"#aaa"),this.drawSphere(a+5,o,5,"#aaa")):n==="O2"?(this.drawSphere(a-6,o,6,"red"),this.drawSphere(a+6,o,6,"red")):n==="H2O"&&(this.drawSphere(a,o,6,"red"),this.drawSphere(a-6,o+5,4,"#aaa"),this.drawSphere(a+6,o+5,4,"#aaa"))}}reset(){this.h2=2,this.o2=1}}class om extends pt{type="weak-acid";molecules=[];ions=0;constructor(t,e,i,n){super(t,e,i,n),this.initMolecules(),this.addControl("button","Strong Acid",{},()=>{this.type="strong-acid",this.initMolecules()}),this.addControl("button","Weak Acid",{},()=>{this.type="weak-acid",this.initMolecules()}),this.addControl("button","Strong Base",{},()=>{this.type="strong-base",this.initMolecules()})}initMolecules(){this.molecules=[];for(let t=0;t<30;t++)this.molecules.push({pos:new $t(Math.random()*400+200,Math.random()*250+250),angle:Math.random()*Math.PI*2,dissociated:!1})}update(){let t=0;this.type==="strong-acid"||this.type==="strong-base"?t=1:t=.2;let e=0;this.molecules.forEach(i=>{Math.random()<.05&&(t===1?i.dissociated=!0:i.dissociated=Math.random()<.2),i.dissociated&&e++,i.pos.x+=Math.random()-.5,i.pos.y+=Math.random()-.5}),this.updateData(`Type: ${this.type}
Dissociated Ions: ${e}/${this.molecules.length}
Conductivity: ${e>20?"High (Bulb Bright)":"Low (Bulb Dim)"}`),this.ions=e}draw(){this.ctx.fillStyle="#E3F2FD",this.ctx.fillRect(200,250,400,250),this.ctx.strokeRect(200,250,400,250),this.molecules.forEach(t=>{t.dissociated?(this.drawSphere(t.pos.x-10,t.pos.y-5,6,"red"),this.ctx.fillStyle="white",this.ctx.fillText("+",t.pos.x-13,t.pos.y),this.drawSphere(t.pos.x+10,t.pos.y+5,8,"blue"),this.ctx.fillStyle="white",this.ctx.fillText("-",t.pos.x+7,t.pos.y+10)):(this.drawSphere(t.pos.x,t.pos.y,8,"#555"),this.drawSphere(t.pos.x+10,t.pos.y,6,"#999"))}),this.drawCircuit()}drawCircuit(){this.ctx.strokeStyle="#333",this.ctx.beginPath(),this.ctx.moveTo(300,250),this.ctx.lineTo(300,400),this.ctx.moveTo(500,250),this.ctx.lineTo(500,400),this.ctx.moveTo(300,250),this.ctx.lineTo(300,100),this.ctx.lineTo(380,100),this.ctx.moveTo(500,250),this.ctx.lineTo(500,100),this.ctx.lineTo(420,100),this.ctx.stroke();const t=this.ions/30;if(this.ctx.fillStyle=`rgba(255, 255, 0, ${.2+t*.8})`,this.ctx.beginPath(),this.ctx.arc(400,100,30,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),t>.5){this.ctx.strokeStyle="orange",this.ctx.beginPath();for(let e=0;e<8;e++){const i=e*Math.PI/4;this.ctx.moveTo(400+Math.cos(i)*40,100+Math.sin(i)*40),this.ctx.lineTo(400+Math.cos(i)*60,100+Math.sin(i)*60)}this.ctx.stroke()}}reset(){this.type="weak-acid",this.initMolecules()}}class lm extends pt{solute=.5;vol=.5;opacity=.25;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Solute (mol)",{min:.1,max:2,step:.1,value:.5},s=>this.solute=s),this.addControl("slider","Volume (L)",{min:.2,max:1,step:.1,value:.5},s=>this.vol=s)}update(){const t=this.solute/this.vol;this.updateData(`Molarity: ${t.toFixed(2)} M (mol/L)
Color saturation increases with concentration.`),this.opacity=Math.min(1,t/2)}draw(){const s=350*this.vol;this.ctx.fillStyle=`rgba(255, 0, 0, ${this.opacity})`,this.ctx.fillRect(300,450-s,200,s),this.ctx.strokeStyle="#333",this.ctx.lineWidth=4,this.ctx.strokeRect(300,100,200,350),this.ctx.fillStyle="#333",this.ctx.fillText(`${this.vol.toFixed(1)} L`,510,450-s);const a=Math.floor(this.solute*20);this.ctx.fillStyle="white";for(let o=0;o<a;o++){const l=o*123.45,c=310+Math.abs(Math.sin(l))*180,h=440-Math.abs(Math.cos(l*2))*(s-20);h>450-s&&this.drawSphere(c,h,2,"white")}}reset(){this.solute=.5,this.vol=.5}}class cm extends pt{soluteAmount=.5;volume=.5;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Solute Amount",{min:0,max:2,step:.1,value:.5},s=>this.soluteAmount=s),this.addControl("slider","Solution Vol",{min:.2,max:1,step:.1,value:.5},s=>this.volume=s)}update(){const t=this.soluteAmount/this.volume,e=t*.5,i=Math.pow(10,-e);this.updateData(`Concentration: ${t.toFixed(2)} mol/L
Transmittance: ${(i*100).toFixed(1)}%
Absorbance: ${e.toFixed(2)}`)}draw(){this.ctx.fillStyle="#FB8C00",this.ctx.beginPath(),this.ctx.moveTo(100,300),this.ctx.lineTo(150,270),this.ctx.lineTo(150,330),this.ctx.fill(),this.ctx.fillStyle="rgba(255, 0, 0, 1)",this.ctx.fillRect(150,290,200,20);const s=Math.min(1,this.soluteAmount/this.volume/2);this.ctx.fillStyle=`rgba(200, 0, 0, ${s})`,this.ctx.fillRect(350,200,100,200),this.ctx.strokeStyle="#333",this.ctx.strokeRect(350,200,100,200);const a=Math.pow(10,-(this.soluteAmount/this.volume*.5));this.ctx.fillStyle=`rgba(255, 0, 0, ${a})`,this.ctx.fillRect(450,290,150,20),this.ctx.fillStyle="#555",this.ctx.fillRect(600,270,40,60),this.ctx.fillStyle="#000",this.ctx.fillText(`${(a*100).toFixed(0)}%`,605,305)}reset(){this.soluteAmount=.5,this.volume=.5}}class hm extends pt{protons=6;neutrons=6;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Add Neutron",{},()=>{this.neutrons++}),this.addControl("button","Remove Neutron",{},()=>{this.neutrons>0&&this.neutrons--})}update(){const t=this.protons+this.neutrons,e="Carbon";let i="Stable";(this.neutrons<5||this.neutrons>8)&&(i="Unstable"),this.updateData(`Mass Number: ${t}
Status: ${i}
Element: ${e}`)}draw(){const t=this.width/2,e=this.height/2;for(let i=0;i<this.protons;i++){const n=i/this.protons*Math.PI*2;this.drawParticle(t+Math.cos(n)*15,e+Math.sin(n)*15,"red","P")}for(let i=0;i<this.neutrons;i++){const n=i/this.neutrons*Math.PI*2+1;this.drawParticle(t+Math.cos(n)*15,e+Math.sin(n)*15,"gray","N")}this.ctx.strokeStyle="rgba(0,0,255,0.3)",this.ctx.beginPath(),this.ctx.arc(t,e,60,0,Math.PI*2),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(t,e,100,0,Math.PI*2),this.ctx.stroke()}drawParticle(t,e,i,n){this.drawSphere(t,e,10,i),this.ctx.fillStyle="white",this.ctx.font="10px Arial",this.ctx.fillText(n,t-3,e+3)}reset(){this.neutrons=6}}class dm extends pt{p=1;n=0;e=1;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Protons",{min:1,max:10,step:1,value:1},s=>this.p=s),this.addControl("slider","Neutrons",{min:0,max:12,step:1,value:0},s=>this.n=s),this.addControl("slider","Electrons",{min:0,max:10,step:1,value:1},s=>this.e=s)}update(){const e=["","Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon"][this.p]||"Unknown",i=this.p-this.e,n=this.p+this.n,s=i===0?"Neutral Atom":i>0?`+${i} Ion`:`${i} Ion`;this.updateData(`Element: ${e}
Net Charge: ${i}
Mass Number: ${n}
Type: ${s}`)}draw(){const t=this.width/2,e=this.height/2,i=this.p+this.n;for(let a=0;a<i;a++){const o=Math.sqrt(a)*8,l=a*2.4,c=t+Math.cos(l)*o,h=e+Math.sin(l)*o,u=a<this.p?"red":"gray";this.drawSphere(c,h,8,u)}const n=[2,8,18];let s=this.e;n.forEach((a,o)=>{if(s<=0)return;const l=Math.min(s,a);s-=l;const c=60+o*40;this.ctx.strokeStyle="#aaa",this.ctx.beginPath(),this.ctx.arc(t,e,c,0,Math.PI*2),this.ctx.stroke();for(let h=0;h<l;h++){const u=Math.PI*2*h/l;this.drawSphere(t+Math.cos(u)*c,e+Math.sin(u)*c,5,"blue")}})}reset(){this.p=1,this.n=0,this.e=1}}class um extends pt{bonds=2;lonePairs=0;angleY=0;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Bonded Atoms",{min:1,max:6,step:1,value:2},s=>this.bonds=s),this.addControl("slider","Lone Pairs",{min:0,max:2,step:1,value:0},s=>this.lonePairs=s)}update(){const t=this.bonds+this.lonePairs;let e="Unknown";t===2?e="Linear":t===3?e=this.lonePairs===1?"Bent":"Trigonal Planar":t===4?this.lonePairs===0?e="Tetrahedral":this.lonePairs===1?e="Trigonal Pyramidal":e="Bent":t===5?e="Trigonal Bipyramidal":t===6&&(e="Octahedral"),this.updateData(`Geometry: ${e}
Steric Number: ${t}
Drag to Rotate`),this.angleY+=.01}draw(){const t=this.width/2,e=this.height/2,n=this.getGeometryPoints(this.bonds+this.lonePairs).map((s,a)=>{let o=s.x*Math.cos(this.angleY)-s.z*Math.sin(this.angleY),l=s.x*Math.sin(this.angleY)+s.z*Math.cos(this.angleY);return{x:o,y:s.y,z:l,type:a<this.bonds?"atom":"lone"}});n.sort((s,a)=>s.z-a.z),this.ctx.fillStyle="purple",this.ctx.beginPath(),this.ctx.arc(t,e,20,0,Math.PI*2),this.ctx.fill(),n.forEach(s=>{const o=t+s.x*100,l=e+s.y*100;this.ctx.strokeStyle="#aaa",this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(o,l),this.ctx.stroke(),s.type==="atom"?(this.drawSphere(o,l,15,"white"),this.ctx.stroke()):(this.ctx.fillStyle="rgba(255, 192, 203, 0.7)",this.ctx.beginPath(),this.ctx.ellipse(o,l,20,15,Math.atan2(l-e,o-t),0,Math.PI*2),this.ctx.fill())})}getGeometryPoints(t){return t===2?[{x:1,y:0,z:0},{x:-1,y:0,z:0}]:t===3?[{x:0,y:-1,z:0},{x:.866,y:.5,z:0},{x:-.866,y:.5,z:0}]:t===4?[{x:0,y:-1,z:0},{x:.94,y:.33,z:0},{x:-.47,y:.33,z:.81},{x:-.47,y:.33,z:-.81}]:t===5?[{x:0,y:-1,z:0},{x:0,y:1,z:0},{x:1,y:0,z:0},{x:-.5,y:0,z:.866},{x:-.5,y:0,z:-.866}]:t===6?[{x:0,y:-1,z:0},{x:0,y:1,z:0},{x:1,y:0,z:0},{x:-1,y:0,z:0},{x:0,y:0,z:1},{x:0,y:0,z:-1}]:[]}reset(){this.bonds=2,this.lonePairs=0}}class fm extends pt{angle=25;depth=10;branchRatio=.67;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Angle",{min:0,max:90,step:1,value:25},s=>this.angle=s),this.addControl("slider","Depth",{min:1,max:12,step:1,value:10},s=>this.depth=s),this.addControl("slider","Branch Ratio",{min:.5,max:.8,step:.01,value:.67},s=>this.branchRatio=s)}update(){this.updateData(`Angle: ${this.angle}°
Branch Ratio: ${this.branchRatio}
Depth: ${this.depth}`)}draw(){this.ctx.strokeStyle="#fff",this.ctx.translate(this.width/2,this.height),this.branch(150,this.depth),this.ctx.setTransform(1,0,0,1,0,0)}branch(t,e){this.ctx.lineWidth=e,this.ctx.strokeStyle=e>4?"#5D4037":"#4CAF50",this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(0,-t),this.ctx.stroke(),this.ctx.translate(0,-t),e>0&&(this.ctx.save(),this.ctx.rotate(this.angle*Math.PI/180),this.branch(t*this.branchRatio,e-1),this.ctx.restore(),this.ctx.save(),this.ctx.rotate(-this.angle*Math.PI/180),this.branch(t*this.branchRatio,e-1),this.ctx.restore())}reset(){this.angle=25,this.depth=10}}class pm extends pt{time=0;wave=[];n=5;waveType="square";constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Iterations (N)",{min:1,max:20,step:1,value:5},s=>{this.n=s,this.wave=[]}),this.addControl("button","Square Wave",{},()=>{this.waveType="square",this.wave=[]}),this.addControl("button","Sawtooth Wave",{},()=>{this.waveType="saw",this.wave=[]})}update(){this.time+=.05,this.updateData(`Approximating: ${this.waveType.toUpperCase()} Wave
Circles: ${this.n}`)}draw(){let t=200,e=this.height/2;for(let i=0;i<this.n;i++){let n=t,s=e,a,o;this.waveType==="square"?(a=i*2+1,o=75*(4/(a*Math.PI))):(a=i+1,o=75*(2/(a*Math.PI))*Math.pow(-1,a)),t+=o*Math.cos(a*this.time),e+=o*Math.sin(a*this.time),this.ctx.strokeStyle="rgba(0,0,0,0.2)",this.ctx.beginPath(),this.ctx.arc(n,s,Math.abs(o),0,Math.PI*2),this.ctx.stroke(),this.ctx.strokeStyle="#333",this.ctx.beginPath(),this.ctx.moveTo(n,s),this.ctx.lineTo(t,e),this.ctx.stroke()}this.wave.unshift(e),this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(450,e),this.ctx.strokeStyle="#999",this.ctx.setLineDash([5,5]),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.strokeStyle="#E91E63",this.ctx.lineWidth=2;for(let i=0;i<this.wave.length;i++)this.ctx.lineTo(i+450,this.wave[i]);this.ctx.stroke(),this.wave.length>500&&this.wave.pop()}reset(){this.wave=[],this.time=0}}class mm extends pt{e=.5;p=100;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Eccentricity (e)",{min:0,max:2,step:.1,value:.5},s=>this.e=s),this.addControl("slider","Parameter (p)",{min:50,max:200,step:10,value:100},s=>this.p=s)}update(){let t="";this.e===0?t="Circle":this.e<1?t="Ellipse":this.e===1?t="Parabola":t="Hyperbola",this.updateData(`Shape: ${t}
Eccentricity: ${this.e}
Parameter: ${this.p}`)}draw(){const t=this.width/2,e=this.height/2;this.ctx.translate(t,e),this.ctx.fillStyle="red",this.ctx.beginPath(),this.ctx.arc(0,0,4,0,Math.PI*2),this.ctx.fill(),this.ctx.fillText("F",5,5),this.ctx.strokeStyle="blue",this.ctx.beginPath(),this.ctx.moveTo(this.p,-300),this.ctx.lineTo(this.p,300),this.ctx.stroke(),this.ctx.fillStyle="blue",this.ctx.fillText("Directrix",this.p+5,-50),this.ctx.strokeStyle="#000",this.ctx.lineWidth=2,this.ctx.beginPath();let i=!0;for(let n=0;n<Math.PI*2;n+=.05){const s=this.e*this.p/(1+this.e*Math.cos(n));if(s>1e3||s<-1e3){i=!0;continue}const a=s*Math.cos(n),o=s*Math.sin(n);i?(this.ctx.moveTo(a,o),i=!1):this.ctx.lineTo(a,o)}this.ctx.stroke(),this.ctx.setTransform(1,0,0,1,0,0)}reset(){this.e=.5}}class gm extends pt{population=[];predators=[];maxPopulation=200;growthRate=.05;carryingCapacity=100;hasPredators=!1;constructor(t,e,i,n){super(t,e,i,n),this.addAgents(10,"prey"),this.addControl("slider","Growth Rate",{min:.01,max:.2,step:.01,value:.05},s=>this.growthRate=s),this.addControl("slider","Carrying Capacity",{min:50,max:200,step:10,value:100},s=>this.carryingCapacity=s),this.addControl("checkbox","Predators",{checked:!1},s=>{this.hasPredators=s,s?this.addAgents(5,"predator"):this.predators=[]}),this.addControl("button","Reset Pop",{},()=>this.reset())}addAgents(t,e){const i=e==="prey"?this.population:this.predators;for(let n=0;n<t;n++)i.push({pos:new $t(Math.random()*this.width,Math.random()*this.height),vel:new $t(Math.random()-.5,Math.random()-.5).normalize(),type:e})}update(){if(Math.random()<this.growthRate&&this.population.length<this.maxPopulation&&(this.population.length<this.carryingCapacity?this.addAgents(1,"prey"):Math.random()<.1&&this.population.pop()),[...this.population,...this.predators].forEach(e=>{e.pos=e.pos.add(e.vel),(e.pos.x<0||e.pos.x>this.width)&&(e.vel.x*=-1),(e.pos.y<0||e.pos.y>this.height)&&(e.vel.y*=-1)}),this.hasPredators){for(let e=this.predators.length-1;e>=0;e--)for(let i=this.population.length-1;i>=0;i--)if(this.predators[e].pos.dist(this.population[i].pos)<10){this.population.splice(i,1),Math.random()<.3&&this.addAgents(1,"predator");break}this.predators.length>20&&this.predators.pop(),this.predators.length<2&&Math.random()<.05&&this.addAgents(1,"predator")}this.updateData(`Prey: ${this.population.length}
Predators: ${this.predators.length}
Capacity: ${this.carryingCapacity}`)}draw(){this.population.forEach(t=>{this.drawSphere(t.pos.x,t.pos.y,4,"#4CAF50")}),this.predators.forEach(t=>{this.drawSphere(t.pos.x,t.pos.y,6,"#F44336")})}reset(){this.population=[],this.predators=[],this.addAgents(10,"prey"),this.hasPredators&&this.addAgents(5,"predator")}}class xm extends pt{time=0;frequency=.2;sources=[];mode="single";res=8;cols=0;rows=0;constructor(t,e,i,n){super(t,e,i,n),this.sources=[new $t(this.width/2,this.height/2)],this.cols=Math.ceil(this.width/this.res),this.rows=Math.ceil(this.height/this.res),this.addControl("slider","Frequency",{min:.1,max:.5,step:.05,value:.2},s=>this.frequency=s),this.addControl("button","Single Source",{},()=>{this.mode="single",this.sources=[new $t(this.width/2,this.height/2)]}),this.addControl("button","Two Sources",{},()=>{this.mode="double",this.sources=[new $t(this.width/2-100,this.height/2),new $t(this.width/2+100,this.height/2)]})}update(){this.time++,this.updateData(`Mode: ${this.mode}
Frequency: ${this.frequency}`)}draw(){for(let t=0;t<this.rows;t++)for(let e=0;e<this.cols;e++){const i=e*this.res,n=t*this.res;let s=0;for(let l of this.sources){const c=Math.sqrt((i-l.x)**2+(n-l.y)**2);s+=Math.sin(c*.05-this.time*this.frequency)}const a=(s/this.sources.length+1)/2,o=Math.floor(a*255);this.ctx.fillStyle=`rgb(0, ${Math.floor(o*.8)}, ${o})`,this.ctx.fillRect(i,n,this.res,this.res)}this.ctx.fillStyle="yellow",this.sources.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,5,0,Math.PI*2),this.ctx.fill()})}reset(){this.time=0}}class _m extends pt{temp=50;particles=[];constructor(t,e,i,n){super(t,e,i,n);for(let s=0;s<40;s++)this.particles.push({pos:new $t(Math.random()*400+200,Math.random()*300+200),vel:new $t(0,0),color:"purple"});this.addControl("slider","Temperature (Heat)",{min:10,max:300,step:1,value:50},s=>this.temp=s),this.addControl("button","Solid (Neon)",{},()=>this.temp=20),this.addControl("button","Liquid",{},()=>this.temp=100),this.addControl("button","Gas",{},()=>this.temp=250)}update(){let t=0,e=0;this.temp<50?(e=.5,t=25):this.temp<150?(e=.05,t=30):e=0;const i=this.temp*.02;for(let s=0;s<this.particles.length;s++){const a=this.particles[s];a.vel.x+=(Math.random()-.5)*i,a.vel.y+=(Math.random()-.5)*i,a.vel=a.vel.mult(.9),this.temp<150&&(a.vel.y+=.2);for(let o=s+1;o<this.particles.length;o++){const l=this.particles[o],c=a.pos.dist(l.pos);if(c<20){const h=a.pos.sub(l.pos).normalize().mult(1);a.vel=a.vel.add(h),l.vel=l.vel.sub(h)}else if(c<t){const h=l.pos.sub(a.pos).normalize().mult(e);a.vel=a.vel.add(h),l.vel=l.vel.sub(h)}}a.pos=a.pos.add(a.vel),a.pos.x<200&&(a.pos.x=200,a.vel.x*=-1),a.pos.x>600&&(a.pos.x=600,a.vel.x*=-1),a.pos.y>500&&(a.pos.y=500,a.vel.y*=-1),a.pos.y<100&&(a.pos.y=100,a.vel.y*=-1)}let n="Solid";this.temp>80&&(n="Liquid"),this.temp>200&&(n="Gas"),this.updateData(`Temperature: ${this.temp} K
Phase: ${n}`)}draw(){this.ctx.strokeStyle="#333",this.ctx.lineWidth=4,this.ctx.strokeRect(200,100,400,400),this.particles.forEach(e=>{this.drawSphere(e.pos.x,e.pos.y,8,e.color)}),this.ctx.fillStyle="#eee",this.ctx.fillRect(50,100,30,400);const t=Math.min(400,this.temp);this.ctx.fillStyle="red",this.ctx.fillRect(55,100+(400-t),20,t)}}class vm extends pt{type="ionic";frame=0;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Ionic (NaCl)",{},()=>this.type="ionic"),this.addControl("button","Covalent (H2)",{},()=>this.type="covalent")}update(){this.frame++,this.updateData(`Bond Type: ${this.type==="ionic"?"Ionic (Transfer)":"Covalent (Sharing)"}
Electrons are ${this.type==="ionic"?"transferred":"shared"}.`)}draw(){const t=this.width/2,e=this.height/2;if(this.type==="ionic"){this.drawAtom(t-60,e,"orange",40,"Na"),this.drawAtom(t+60,e,"green",50,"Cl");const i=(Math.sin(this.frame*.05)+1)/2,n=t-60+40+i*80,s=e;i>.9&&(this.ctx.fillStyle="black",this.ctx.fillText("+",t-60,e-50),this.ctx.fillText("-",t+60,e-60)),this.ctx.fillStyle="blue",this.ctx.beginPath(),this.ctx.arc(n,s,5,0,Math.PI*2),this.ctx.fill()}else{this.drawAtom(t-30,e,"#ccc",30,"H"),this.drawAtom(t+30,e,"#ccc",30,"H");const i=this.frame*.1,n=t+Math.cos(i)*40,s=e+Math.sin(2*i)*20;this.ctx.fillStyle="blue",this.ctx.beginPath(),this.ctx.arc(n,s,5,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(t-Math.cos(i)*40,e-Math.sin(2*i)*20,5,0,Math.PI*2),this.ctx.fill()}}drawAtom(t,e,i,n,s){this.drawSphere(t,e,n,i),this.ctx.fillStyle="white",this.ctx.font="14px Arial",this.ctx.fillText(s,t-10,e+5)}}class ym extends pt{saltAmount=0;dissolved=0;precipitate=0;ksp=100;constructor(t,e,i,n){super(t,e,i,n),i("button","Add Salt (NaCl)",{},()=>this.addSalt()),i("button","Reset",{},()=>this.reset())}addSalt(){this.saltAmount+=20}reset(){this.saltAmount=0,this.dissolved=0,this.precipitate=0}update(){this.saltAmount>this.ksp?(this.dissolved=this.ksp,this.precipitate=this.saltAmount-this.ksp):(this.dissolved=this.saltAmount,this.precipitate=0);const t=this.precipitate>0?"SATURATED (Precipitate forms)":"UNSATURATED (All dissolved)";this.updateData(`Total Salt: ${this.saltAmount}g
Status: ${t}`)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="rgba(59, 130, 246, 0.2)",this.ctx.fillRect(300,200,200,300),this.ctx.strokeStyle="#334155",this.ctx.strokeRect(300,200,200,300);const t=Math.min(100,this.dissolved);for(let e=0;e<t;e++){const i=310+(Math.sin(e*132)*90+90),n=220+(Math.cos(e*43)*140+140);this.ctx.fillStyle="#94a3b8",this.ctx.beginPath(),this.ctx.arc(i,n,3,0,Math.PI*2),this.ctx.fill()}if(this.precipitate>0){this.ctx.fillStyle="white";const e=Math.min(50,this.precipitate);this.ctx.beginPath(),this.ctx.moveTo(310,500),this.ctx.quadraticCurveTo(400,500-e,490,500),this.ctx.fill()}this.precipitate>0&&(this.ctx.fillStyle="#ef4444",this.ctx.font="bold 20px Inter",this.ctx.textAlign="center",this.ctx.fillText("Precipitate!",400,480))}}class Sm extends pt{temp=300;particles=[];products=0;constructor(t,e,i,n){super(t,e,i,n);for(let s=0;s<30;s++)this.particles.push({x:Math.random()*400+200,y:Math.random()*300+100,vx:Math.random()-.5,vy:Math.random()-.5,type:"A"});this.addControl("slider","Temperature",{min:100,max:1e3,step:10,value:300},s=>this.temp=s),this.addControl("button","Reset",{},()=>{this.products=0,this.particles.forEach(s=>s.type="A")})}update(){const t=this.temp*.005;this.particles.forEach(e=>{e.x+=e.vx*t,e.y+=e.vy*t,(e.x<200||e.x>600)&&(e.vx*=-1),(e.y<100||e.y>400)&&(e.vy*=-1)});for(let e=0;e<this.particles.length;e++)for(let i=e+1;i<this.particles.length;i++){const n=this.particles[e],s=this.particles[i];Math.hypot(n.x-s.x,n.y-s.y)<10&&n.type==="A"&&s.type==="A"&&Math.random()<this.temp/2e3&&(n.type="B",s.type="B",this.products+=2)}this.updateData(`Temp: ${this.temp}K
Products Found: ${this.products}`)}draw(){this.ctx.strokeRect(200,100,400,300),this.particles.forEach(t=>{this.drawSphere(t.x,t.y,5,t.type==="A"?"red":"blue")}),this.ctx.fillStyle="red",this.ctx.fillText("Reactant (A)",200,430),this.ctx.fillStyle="blue",this.ctx.fillText("Product (B)",350,430)}}class Mm extends pt{progress=0;running=!1;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Start",{},()=>this.running=!0),this.addControl("button","Reset",{},()=>{this.progress=0,this.running=!1})}update(){this.running&&this.progress<100&&(this.progress+=.5),this.updateData(`Reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
Progress: ${this.progress.toFixed(0)}%
Electrons transferred from Zn to Cu²⁺`)}draw(){if(this.ctx.fillStyle=`rgb(200, 200, ${255-this.progress*2})`,this.ctx.fillRect(300,200,200,250),this.ctx.strokeRect(300,200,200,250),this.ctx.fillStyle="gray",this.ctx.fillRect(350,150,30,200),this.progress>0){this.ctx.fillStyle="#333";for(let t=0;t<this.progress;t++)this.ctx.fillRect(350+Math.random()*30,150+Math.random()*200,2,2)}this.progress>0&&(this.ctx.fillStyle="#B87333",this.ctx.fillRect(345,150,5,200*(this.progress/100)),this.ctx.fillRect(380,150,5,200*(this.progress/100)),this.ctx.fillRect(320,440,160,this.progress/5))}}class bm extends pt{addedBase=0;ph=1;bg="rgba(255,255,255,0.1)";constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Add Base (mL)",{min:0,max:50,step:.1,value:0},s=>this.addedBase=s)}update(){const t=1+12/(1+Math.exp(-(this.addedBase-25)*2));this.ph=t;let e="clear";t>8&&(e="pink"),this.updateData(`Added Base: ${this.addedBase.toFixed(1)} mL
pH: ${this.ph.toFixed(2)}
Indicator: Phenolphthalein (${e})`),this.bg=e==="pink"?"rgba(255, 192, 203, 0.5)":"rgba(255,255,255,0.1)"}draw(){this.ctx.strokeStyle="#333",this.ctx.strokeRect(390,50,20,200),this.ctx.fillStyle="white",this.ctx.fillRect(391,51+this.addedBase*2,18,198-this.addedBase*2),this.ctx.fillStyle=this.bg,this.ctx.beginPath(),this.ctx.moveTo(380,260),this.ctx.lineTo(350,400),this.ctx.lineTo(450,400),this.ctx.lineTo(420,260),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.addedBase>0&&Math.random()>.5&&this.drawSphere(400,255,3,"white"),this.ctx.strokeRect(50,100,200,200),this.ctx.strokeStyle="red",this.ctx.beginPath();for(let i=0;i<=50;i++){const n=50+i*4,a=300-(1+12/(1+Math.exp(-(i-25)*2)))/14*200;i===0?this.ctx.moveTo(n,a):this.ctx.lineTo(n,a)}this.ctx.stroke();const t=50+this.addedBase*4,e=300-this.ph/14*200;this.drawSphere(t,e,4,"blue")}}class Em extends pt{voltage=0;running=!1;bubblesLeft=[];bubblesRight=[];constructor(t,e,i,n){super(t,e,i,n),i("slider","Voltage (V)",{min:0,max:12,value:0},s=>this.voltage=s),i("button","Start/Stop",{},()=>this.running=!this.running)}update(){this.running&&this.voltage>1.23?(Math.random()>.8&&(this.bubblesLeft.push({x:350+Math.random()*20,y:400}),this.bubblesLeft.push({x:350+Math.random()*20,y:405})),Math.random()>.9&&this.bubblesRight.push({x:450+Math.random()*20,y:400}),this.updateData(`Voltage: ${this.voltage}V (Reaction Active)
Cathode: Hydrogen Gas
Anode: Oxygen Gas`)):this.running?this.updateData(`Voltage: ${this.voltage}V (Insufficient for H2O split)`):this.updateData("Power off.");const t=2;this.bubblesLeft.forEach(e=>e.y-=t),this.bubblesRight.forEach(e=>e.y-=t),this.bubblesLeft=this.bubblesLeft.filter(e=>e.y>200),this.bubblesRight=this.bubblesRight.filter(e=>e.y>200)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="rgba(59, 130, 246, 0.2)",this.ctx.fillRect(300,250,200,250),this.ctx.strokeStyle="#334155",this.ctx.strokeRect(300,250,200,250),this.ctx.fillStyle="#64748b",this.ctx.fillRect(340,200,20,200),this.ctx.fillRect(440,200,20,200),this.ctx.strokeStyle="black",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(350,200),this.ctx.lineTo(350,100),this.ctx.lineTo(450,100),this.ctx.lineTo(450,200),this.ctx.stroke(),this.ctx.fillStyle="white",this.ctx.fillRect(380,80,40,40),this.ctx.textAlign="center",this.ctx.fillStyle="black",this.ctx.fillText(`${this.voltage}V`,400,105),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",this.bubblesLeft.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,4,0,Math.PI*2),this.ctx.fill()}),this.bubblesRight.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,4,0,Math.PI*2),this.ctx.fill()}),this.ctx.fillStyle="#0f172a",this.ctx.font="14px Inter",this.ctx.fillText("- Cathode",350,470),this.ctx.fillText("+ Anode",450,470)}}class Tm extends pt{started=!1;nh3Pos=0;hclPos=100;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Start",{},()=>this.started=!0),this.addControl("button","Reset",{},()=>{this.started=!1,this.nh3Pos=0,this.hclPos=100})}update(){this.started&&this.nh3Pos<this.hclPos&&(this.nh3Pos+=.5*Math.sqrt(36.5/17),this.hclPos-=.5*1),this.updateData(`Graham's Law: Rate ∝ 1/√M
NH3 (lighter) moves faster than HCl (heavier).
White ring forms where they meet.`)}draw(){this.ctx.fillStyle="#eee",this.ctx.fillRect(100,250,600,40),this.ctx.strokeStyle="#999",this.ctx.strokeRect(100,250,600,40),this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(100,270,20,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(700,270,20,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="black",this.ctx.fillText("NH3 (17g/mol)",50,275),this.ctx.fillText("HCl (36.5g/mol)",710,275),this.started&&(this.ctx.fillStyle="rgba(0, 0, 255, 0.2)",this.ctx.fillRect(100,250,this.nh3Pos*6,40),this.ctx.fillStyle="rgba(255, 0, 0, 0.2)",this.ctx.fillRect(100+this.hclPos*6,250,(100-this.hclPos)*6,40),Math.abs(100+this.hclPos*6-(100+this.nh3Pos*6))<5&&(this.ctx.fillStyle="white",this.ctx.fillRect(100+this.nh3Pos*6,250,10,40),this.ctx.fillStyle="black",this.ctx.fillText("NH4Cl Solid Formed",100+this.nh3Pos*6-50,320)))}}class wm extends pt{nuclei=[];neutrons=[];constructor(t,e,i,n){super(t,e,i,n),this.resetSim(),this.addControl("button","Fire Neutron",{},()=>{this.neutrons.push({x:50,y:300,vx:5,vy:0})}),this.addControl("button","Reset",{},()=>this.resetSim())}resetSim(){this.nuclei=[],this.neutrons=[];for(let t=0;t<5;t++)for(let e=0;e<5;e++)this.nuclei.push({x:200+t*60,y:150+e*60,stable:!0})}update(){for(let e=this.neutrons.length-1;e>=0;e--){const i=this.neutrons[e];if(i.x+=i.vx,i.y+=i.vy,i.x>800||i.x<0||i.y<0||i.y>600){this.neutrons.splice(e,1);continue}for(let n=0;n<this.nuclei.length;n++){const s=this.nuclei[n];if(s.stable&&Math.hypot(i.x-s.x,i.y-s.y)<20){s.stable=!1,this.neutrons.splice(e,1);for(let a=0;a<3;a++){const o=Math.random()*Math.PI*2;this.neutrons.push({x:s.x,y:s.y,vx:Math.cos(o)*5,vy:Math.sin(o)*5})}break}}}const t=this.nuclei.filter(e=>!e.stable).length;this.updateData(`Nuclei Split: ${t}/${this.nuclei.length}
Chain Reaction in progress...`)}draw(){this.nuclei.forEach(t=>{t.stable?(this.drawSphere(t.x,t.y,20,"green"),this.ctx.fillStyle="black",this.ctx.fillText("U-235",t.x-15,t.y+5)):(this.drawSphere(t.x-10,t.y-10,10,"orange"),this.drawSphere(t.x+10,t.y+10,10,"orange"))}),this.neutrons.forEach(t=>{this.drawSphere(t.x,t.y,4,"red")}),this.ctx.fillStyle="#333",this.ctx.fillRect(0,280,50,40)}}class Ml extends pt{electronegativityA=2.1;electronegativityB=2.1;constructor(t,e,i,n){super(t,e,i,n),i("slider","Electronegativity A",{min:.7,max:4,step:.1,value:2.1},s=>this.electronegativityA=s),i("slider","Electronegativity B",{min:.7,max:4,step:.1,value:2.1},s=>this.electronegativityB=s)}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height);const t=this.electronegativityB-this.electronegativityA,e=Math.abs(t);this.ctx.strokeStyle="#94a3b8",this.ctx.lineWidth=10,this.ctx.beginPath(),this.ctx.moveTo(300,300),this.ctx.lineTo(500,300),this.ctx.stroke();const i=-t*.5,n=this.getChargeColor(i),s=this.getChargeColor(-i);this.drawAtom(300,300,60,"A",this.electronegativityA.toFixed(1),n),this.drawAtom(500,300,60,"B",this.electronegativityB.toFixed(1),s),e>.1&&this.drawDipoleArrow(400,200,e,t>0);let a="Nonpolar Covalent";e>.4&&(a="Polar Covalent"),e>1.7&&(a="Ionic"),this.ctx.fillStyle="#334155",this.ctx.font="20px Inter",this.ctx.textAlign="center",this.ctx.fillText(`Difference: ${e.toFixed(1)}`,400,450),this.ctx.font="bold 24px Inter",this.ctx.fillText(a,400,500)}drawAtom(t,e,i,n,s,a){this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(t,e,i,0,Math.PI*2),this.ctx.fill(),this.ctx.strokeStyle="#334155",this.ctx.lineWidth=2,this.ctx.stroke(),this.ctx.fillStyle="white",this.ctx.font="bold 20px Inter",this.ctx.textAlign="center",this.ctx.fillText(n,t,e-10),this.ctx.font="16px Inter",this.ctx.fillText(s,t,e+15)}getChargeColor(t){const e=Math.min(1,Math.abs(t)/1.5);return t>0?`rgba(59, 130, 246, ${.2+e*.8})`:`rgba(239, 68, 68, ${.2+e*.8})`}drawDipoleArrow(t,e,i,n){const s=50+i*50;this.ctx.save(),this.ctx.translate(t,e),n||this.ctx.scale(-1,1),this.ctx.strokeStyle="black",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.moveTo(-s/2,0),this.ctx.lineTo(s/2,0),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(-s/2,-10),this.ctx.lineTo(-s/2,10),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(s/2,0),this.ctx.lineTo(s/2-10,-10),this.ctx.lineTo(s/2-10,10),this.ctx.fill(),this.ctx.restore()}}class bl extends pt{temp=100;forceType="dispersion";particles=[];constructor(t,e,i,n){super(t,e,i,n);for(let s=0;s<30;s++)this.particles.push({x:Math.random()*700+50,y:Math.random()*500+50,vx:Math.random()-.5,vy:Math.random()-.5});i("slider","Temperature",{min:10,max:500,value:100},s=>this.temp=s),i("button","London Dispersion (Weak)",{},()=>this.setForce("dispersion")),i("button","Dipole-Dipole (Medium)",{},()=>this.setForce("dipole")),i("button","Hydrogen Bond (Strong)",{},()=>this.setForce("hydrogen"))}setForce(t){this.forceType=t,this.updateData(`Force: ${t.toUpperCase()}. Strength determines state at current Temp.`)}update(){const t=this.temp*.01;let e=.01;this.forceType==="dipole"&&(e=.05),this.forceType==="hydrogen"&&(e=.15),this.particles.forEach((i,n)=>{i.x+=i.vx*t,i.y+=i.vy*t,(i.x<20||i.x>this.width-20)&&(i.vx*=-1),(i.y<20||i.y>this.height-20)&&(i.vy*=-1),this.particles.forEach((s,a)=>{if(n===a)return;const o=s.x-i.x,l=s.y-i.y,c=Math.max(10,Math.hypot(o,l));c<100&&(i.vx+=o/c*e,i.vy+=l/c*e),c<20&&(i.vx-=o/c*.5,i.vy-=l/c*.5)}),i.vx*=.98,i.vy*=.98})}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.particles.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,10,0,Math.PI*2),this.forceType==="dispersion"?this.ctx.fillStyle="#94a3b8":this.forceType==="dipole"?this.ctx.fillStyle="#f59e0b":this.ctx.fillStyle="#3b82f6",this.ctx.fill()}),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.forceType==="hydrogen"?"#ef4444":"#cbd5e1",this.particles.forEach((t,e)=>{this.particles.forEach((i,n)=>{if(e>=n)return;const s=Math.hypot(t.x-i.x,t.y-i.y);if(s<60){const a=1-s/60;this.ctx.globalAlpha=a,this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke()}})}),this.ctx.globalAlpha=1}}class Am extends pt{material="water";mass=100;heatAdded=0;temp=20;heating=!1;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Water (4.18)",{},()=>{this.material="water",this.reset()}),this.addControl("button","Oil (2.0)",{},()=>{this.material="oil",this.reset()}),this.addControl("button","Iron (0.45)",{},()=>{this.material="iron",this.reset()}),this.addControl("button","Add Heat",{},()=>this.heating=!0),this.addControl("button","Stop",{},()=>this.heating=!1)}reset(){this.heatAdded=0,this.temp=20}update(){let t=4.18;if(this.material==="oil"&&(t=2),this.material==="iron"&&(t=.45),this.heating){this.heatAdded+=100;const e=100/(this.mass*t);this.temp+=e}this.updateData(`Material: ${this.material} (c = ${t} J/g°C)
Heat Added: ${this.heatAdded} J
Temperature: ${this.temp.toFixed(1)} °C`)}draw(){this.ctx.fillStyle=this.material==="iron"?"#777":this.material==="oil"?"#FFC107":"#2196F3",this.material==="iron"?this.ctx.fillRect(350,300,100,100):(this.ctx.strokeRect(300,250,200,200),this.ctx.fillRect(301,300,198,150)),this.ctx.fillStyle="#555",this.ctx.fillRect(350,460,100,40),this.heating&&(this.ctx.fillStyle="orange",this.ctx.beginPath(),this.ctx.moveTo(360,460),this.ctx.lineTo(400,400),this.ctx.lineTo(440,460),this.ctx.fill());const t=Math.min(200,this.temp/100*200);this.ctx.fillStyle="white",this.ctx.fillRect(550,200,20,200),this.ctx.fillStyle="red",this.ctx.fillRect(555,400-t,10,t)}}class Cm extends pt{ea=50;temp=20;particles=[];reacted=0;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Barrier (Ea)",{min:10,max:100,step:10,value:50},s=>this.ea=s),this.addControl("slider","Temperature",{min:10,max:100,step:10,value:20},s=>{this.temp=s,this.resetP()}),this.addControl("button","Reset",{},()=>this.resetP()),this.resetP()}resetP(){this.particles=[],this.reacted=0}update(){Math.random()<.1&&this.particles.push({x:0,y:350+Math.random()*20,vx:2+Math.random()*(this.temp/5),status:"reactant"});for(let t=this.particles.length-1;t>=0;t--){const e=this.particles[t];e.x+=e.vx,e.x>380&&e.x<420&&e.status==="reactant"&&(e.vx>this.ea/10?e.status="product":e.vx*=-1),e.x>800&&(this.reacted++,this.particles.splice(t,1)),e.x<0&&this.particles.splice(t,1)}this.updateData(`Reactants converted: ${this.reacted}
Higher Temperature = More particles with E > Ea`)}draw(){this.ctx.lineWidth=5,this.ctx.strokeStyle="#333",this.ctx.beginPath(),this.ctx.moveTo(0,400),this.ctx.lineTo(300,400);const t=400-this.ea*3;this.ctx.quadraticCurveTo(400,t,500,500),this.ctx.lineTo(800,500),this.ctx.stroke(),this.ctx.fillStyle="#666",this.ctx.fillText("Reactants",50,450),this.ctx.fillText("Products",600,550),this.ctx.fillText("Barrier (Ea)",380,t-20),this.particles.forEach(e=>{let i=400;if(e.x>300&&e.x<500){const n=Math.abs(e.x-400);n<100&&(i=t+n/100*(400-t)),e.x>400&&e.status==="product"&&(i=t+(e.x-400)/100*(500-t))}else e.x>=500&&(i=500);this.drawSphere(e.x,i-10,6,e.status==="reactant"?"blue":"green")})}}class Rm extends pt{countA=50;countB=50;kFwd=.05;kRev=.02;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Add A",{},()=>this.countA+=20),this.addControl("button","Add B",{},()=>this.countB+=20),this.addControl("slider","Shift Right (Heat)",{min:.01,max:.2,step:.01,value:.05},s=>this.kFwd=s)}update(){const t=this.countA*this.kFwd,e=this.countB*this.kRev;Math.random()<t&&this.countA>0&&(this.countA--,this.countB++),Math.random()<e&&this.countB>0&&(this.countB--,this.countA++);const i=this.countB/(this.countA||1),n=this.kFwd/this.kRev;this.updateData(`A (Blue): ${this.countA} | B (Red): ${this.countB}
Ratio Q: ${i.toFixed(2)} (Target K ~${n.toFixed(2)})`)}draw(){this.ctx.strokeRect(100,200,250,300),this.ctx.strokeRect(450,200,250,300),this.ctx.fillStyle="#000",this.ctx.font="30px Arial",this.ctx.fillText("⇌",390,350),this.drawParticles(this.countA,100,200,250,300,"blue"),this.drawParticles(this.countB,450,200,250,300,"red")}drawParticles(t,e,i,n,s,a){for(let o=0;o<t;o++){const l=e+Math.random()*n,c=i+Math.random()*s;this.drawSphere(l,c,4,a)}}}class Pm extends pt{solute=0;temp=0;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Solute Added (Salt)",{min:0,max:20,step:1,value:0},s=>this.solute=s),this.addControl("slider","Temperature",{min:-20,max:20,step:1,value:0},s=>this.temp=s)}update(){const t=0-this.solute*1;let e="Liquid";this.temp<=t&&(e="Solid (Ice)"),this.updateData(`Freezing Point: ${t.toFixed(1)}°C
Current Temp: ${this.temp}°C
State: ${e}`)}draw(){this.ctx.fillStyle="#E3F2FD",this.ctx.fillRect(400-300/2,300-300/2,300,300);for(let a=0;a<this.solute*5;a++)this.drawSphere(400-300/2+Math.random()*300,300-300/2+Math.random()*300,2,"black");const s=0-this.solute*1;this.temp<=s?(this.ctx.fillStyle="rgba(255, 255, 255, 0.5)",this.ctx.font="40px Arial",this.ctx.fillText("❄️",380,300),this.ctx.fillText("ICE",370,350)):(this.ctx.fillStyle="rgba(0,0,255,0.1)",this.ctx.fillText("💧",380,300))}}class Dm extends pt{element="hydrogen";constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Hydrogen",{},()=>this.element="hydrogen"),this.addControl("button","Helium",{},()=>this.element="helium"),this.addControl("button","Neon",{},()=>this.element="neon")}update(){this.updateData(`Element: ${this.element.toUpperCase()}
Each element has a unique spectral signature.`)}draw(){let t="#E1BEE7",e=[];this.element==="hydrogen"?(t="#E1BEE7",e=[{x:656,c:"red"},{x:486,c:"cyan"},{x:434,c:"blue"},{x:410,c:"violet"}]):this.element==="helium"?(t="#FFCCBC",e=[{x:706,c:"red"},{x:667,c:"red"},{x:587,c:"orange"},{x:501,c:"green"},{x:492,c:"cyan"},{x:447,c:"blue"}]):(t="#FFAB91",e=[{x:640,c:"red"},{x:638,c:"red"},{x:633,c:"orange"},{x:626,c:"orange"},{x:616,c:"orange"},{x:609,c:"orange"},{x:607,c:"orange"},{x:603,c:"yellow"},{x:585,c:"yellow"}]),this.ctx.shadowBlur=20,this.ctx.shadowColor=t,this.ctx.fillStyle="white",this.ctx.fillRect(100,100,600,20),this.ctx.shadowBlur=0,this.ctx.fillStyle="rgba(200, 200, 255, 0.5)",this.ctx.beginPath(),this.ctx.moveTo(350,150),this.ctx.lineTo(450,350),this.ctx.lineTo(250,350),this.ctx.fill();const i=100,n=500,s=600,a=50;this.ctx.fillStyle="#111",this.ctx.fillRect(i,n,s,a),e.forEach(o=>{const l=i+(o.x-400)/300*s;this.ctx.fillStyle=o.c,this.ctx.fillRect(l,n,4,a),this.ctx.globalAlpha=.2,this.ctx.strokeStyle=o.c,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(400,120),this.ctx.lineTo(350,250),this.ctx.lineTo(l,n),this.ctx.stroke(),this.ctx.globalAlpha=1})}}class Lm extends pt{progress=0;running=!1;constructor(t,e,i,n){super(t,e,i,n),this.addControl("button","Start Elution",{},()=>this.running=!0),this.addControl("button","Reset",{},()=>{this.running=!1,this.progress=0})}update(){this.running&&this.progress<500&&(this.progress+=1),this.updateData("Separation based on affinity to stationary vs mobile phase.")}draw(){this.ctx.fillStyle="#fff",this.ctx.fillRect(350,50,100,500),this.ctx.strokeStyle="#ccc",this.ctx.strokeRect(350,50,100,500);const t=550-this.progress;this.ctx.fillStyle="rgba(200,200,255,0.3)",this.ctx.fillRect(350,t,100,550-t);const e=500,i=e-this.progress*.3,n=e-this.progress*.6,s=e-this.progress*.9;this.drawSphere(400,i,8,"blue"),this.drawSphere(400,n,8,"red"),this.drawSphere(400,s,8,"orange"),this.ctx.fillStyle="lightblue",this.ctx.fillRect(250,520,300,100)}}class Im extends pt{voltage=1.1;connected=!1;constructor(t,e,i,n){super(t,e,i,n),this.addControl("checkbox","Connect Circuit",{checked:!1},s=>this.connected=s)}update(){const t=this.connected?.5:0;this.updateData(`Voltage: ${this.voltage} V
Current: ${t} A
Electron Flow: Zn → Cu`)}draw(){if(this.ctx.fillStyle="rgba(200,200,200,0.5)",this.ctx.fillRect(150,250,200,250),this.ctx.fillRect(450,250,200,250),this.ctx.fillStyle="gray",this.ctx.fillRect(200,200,40,250),this.ctx.fillStyle="#B87333",this.ctx.fillRect(560,200,40,250),this.ctx.strokeStyle="rgba(255,255,255,0.5)",this.ctx.lineWidth=30,this.ctx.beginPath(),this.ctx.moveTo(250,300),this.ctx.quadraticCurveTo(400,100,550,300),this.ctx.stroke(),this.ctx.strokeStyle="black",this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(220,200),this.ctx.lineTo(220,100),this.ctx.lineTo(580,100),this.ctx.lineTo(580,200),this.ctx.stroke(),this.ctx.fillStyle="#333",this.ctx.beginPath(),this.ctx.arc(400,100,40,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="white",this.ctx.fillText(this.connected?"1.10V":"0.00V",370,105),this.connected){const i=220+Date.now()/500%1*360;i<580&&this.drawSphere(i,100,5,"yellow")}}}class Um extends pt{temp=3e3;color="#330000";constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Temperature (K)",{min:1e3,max:1e4,step:100,value:3e3},s=>this.temp=s)}update(){const t=2898e3/this.temp;let e="#330000";this.temp>2e3&&(e="#FF3300"),this.temp>4e3&&(e="#FFCC00"),this.temp>6e3&&(e="#FFFFFF"),this.temp>8e3&&(e="#CCCCFF"),this.color=e,this.updateData(`Temp: ${this.temp}K
Peak Wavelength: ${t.toFixed(0)} nm
Approximated Color: ${e}`)}draw(){this.ctx.strokeStyle="#333",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(100,500),this.ctx.lineTo(700,500),this.ctx.moveTo(100,500),this.ctx.lineTo(100,100),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.strokeStyle=this.color,this.ctx.lineWidth=4;for(let s=0;s<600;s+=10){const a=(2898e3/this.temp-100)/2e3*600,o=this.temp/1e4*400,l=100+1e4/this.temp*50,h=500-o*Math.exp(-Math.pow(s-a,2)/(2*l*l));s===0?this.ctx.moveTo(100+s,h):this.ctx.lineTo(100+s,h)}this.ctx.stroke(),this.ctx.shadowBlur=50,this.ctx.shadowColor=this.color,this.drawSphere(600,150,40,this.color),this.ctx.shadowBlur=0}}class Nm extends pt{intensity=50;wavelength=500;metal=2;eject=!1;speed=0;constructor(t,e,i,n){super(t,e,i,n),this.addControl("slider","Wavelength (nm)",{min:200,max:800,step:10,value:500},s=>this.wavelength=s),this.addControl("slider","Intensity",{min:0,max:100,step:10,value:50},s=>this.intensity=s)}update(){const e=1240/this.wavelength,i=e-this.metal;let n="No Ejection";i>0&&(n=`Ejection! KE = ${i.toFixed(2)} eV`),this.updateData(`Photon Energy: ${e.toFixed(2)} eV
Work Function: ${this.metal} eV
${n}`),this.eject=i>0,this.speed=Math.sqrt(i)*2}draw(){this.ctx.fillStyle="#AAA",this.ctx.fillRect(100,400,600,50),this.ctx.fillStyle="#333",this.ctx.fillRect(350,50,100,50),this.ctx.strokeStyle=this.wavelength<400?"violet":this.wavelength<500?"blue":this.wavelength<600?"green":"red",this.ctx.lineWidth=2;const t=this.intensity/10;for(let e=0;e<t;e++){const i=200+e*40;this.ctx.beginPath();const s=Date.now()/100*10%300,a=100+s;if(a<400)this.ctx.moveTo(i,a),this.ctx.lineTo(i+10,a+10),this.ctx.stroke();else if(this.eject){const o=400-(s-300)*this.speed;o>0&&o<400&&this.drawSphere(i,o,4,"blue")}}}}class Fm extends pt{particles=[];constructor(t,e,i,n){super(t,e,i,n),this.setup(),this.addControl("button","Reset",{},()=>this.setup())}setup(){this.particles=[];for(let t=0;t<100;t++)this.particles.push({x:Math.random()*-1e3,y:200+Math.random()*200,vx:10,vy:0,deflected:!1})}update(){this.particles.forEach(i=>{const n=i.x-400,s=i.y-300,a=n*n+s*s,o=Math.sqrt(a);if(o<100&&o>5){const l=1e3/a,c=n/o*l,h=s/o*l;i.vx+=c,i.vy+=h}i.x+=i.vx,i.y+=i.vy,(i.x>800||i.y<0||i.y>600)&&(i.x=-50,i.y=200+Math.random()*200,i.vx=10,i.vy=0)}),this.updateData(`Gold Nucleus (+) repels Alpha Particles (+)
Most pass through, some deflect.`)}draw(){this.drawSphere(400,300,10,"gold"),this.ctx.fillStyle="black",this.ctx.fillText("+",396,304),this.particles.forEach(t=>{t.x>0&&t.x<800&&this.drawSphere(t.x,t.y,3,"red")})}}class Om extends pt{scene;camera;renderer;elementMeshes=[];raycaster=new sh;mouse=new Ht;selectedProperty="radius";isInitialized=!1;periodicData=[{symbol:"H",x:0,y:0,radius:53,ionization:13.6,electronegativity:2.2,color:16777215},{symbol:"He",x:17,y:0,radius:31,ionization:24.6,electronegativity:0,color:14286847},{symbol:"Li",x:0,y:1,radius:167,ionization:5.4,electronegativity:1,color:13402367},{symbol:"Be",x:1,y:1,radius:112,ionization:9.3,electronegativity:1.6,color:12779264},{symbol:"B",x:12,y:1,radius:87,ionization:8.3,electronegativity:2,color:16758197},{symbol:"C",x:13,y:1,radius:67,ionization:11.3,electronegativity:2.5,color:9474192},{symbol:"N",x:14,y:1,radius:56,ionization:14.5,electronegativity:3,color:3166456},{symbol:"O",x:15,y:1,radius:48,ionization:13.6,electronegativity:3.5,color:16715021},{symbol:"F",x:16,y:1,radius:42,ionization:17.4,electronegativity:4,color:9494608},{symbol:"Ne",x:17,y:1,radius:38,ionization:21.6,electronegativity:0,color:11789301},{symbol:"Na",x:0,y:2,radius:190,ionization:5.1,electronegativity:.9,color:11230450},{symbol:"Mg",x:1,y:2,radius:145,ionization:7.6,electronegativity:1.3,color:9109248},{symbol:"Al",x:12,y:2,radius:118,ionization:6,electronegativity:1.6,color:12560038},{symbol:"Si",x:13,y:2,radius:111,ionization:8.1,electronegativity:1.9,color:1578e4},{symbol:"P",x:14,y:2,radius:98,ionization:10.5,electronegativity:2.1,color:16744448},{symbol:"S",x:15,y:2,radius:88,ionization:10.4,electronegativity:2.5,color:16777008},{symbol:"Cl",x:16,y:2,radius:79,ionization:13,electronegativity:3.2,color:2093087},{symbol:"Ar",x:17,y:2,radius:71,ionization:15.8,electronegativity:0,color:8442339}];constructor(t,e,i,n){super(t,e,i,n),this.scene=new Fn,this.scene.background=new It(16317180),this.camera=new Se(75,800/600,.1,1e3),this.camera.position.z=15,this.renderer=new On({antialias:!0,alpha:!0}),this.renderer.setSize(800,600);const s=document.getElementById("canvas-container");if(s){const a=s.querySelector(".three-canvas");a&&a.remove(),this.renderer.domElement.classList.add("three-canvas","absolute","inset-0"),s.appendChild(this.renderer.domElement),this.canvas.style.display="none"}this.createTable(),this.isInitialized=!0,this.addControl("button","Visualize Atomic Radius",{},()=>this.setProperty("radius")),this.addControl("button","Visualize Ionization Energy",{},()=>this.setProperty("ionization")),this.addControl("button","Visualize Electronegativity",{},()=>this.setProperty("electronegativity")),window.addEventListener("mousemove",this.onMouseMove.bind(this))}createTable(){const t=new Wi(.8,.8,.1);this.periodicData.forEach(i=>{const n=new ls({color:i.color,roughness:.5,metalness:.1}),s=new oe(t,n);s.position.x=i.x-8.5,s.position.y=-i.y+1,s.userData=i,this.scene.add(s),this.elementMeshes.push(s)});const e=new gl(16777215,1);e.position.set(5,5,10),this.scene.add(e),this.scene.add(new As(4210752,2)),this.updateVisualization()}setProperty(t){this.selectedProperty=t,this.updateVisualization(),this.updateData(`Visualizing: ${t.replace(/([A-Z])/g," $1").trim()}`)}updateVisualization(){this.elementMeshes.forEach(t=>{const e=t.userData;let i=1;this.selectedProperty==="radius"?i=e.radius/80:this.selectedProperty==="ionization"?i=e.ionization/10:this.selectedProperty==="electronegativity"&&(i=e.electronegativity||.1);const n=Math.max(.4,Math.min(3,i));t.scale.setScalar(n),t.position.z=(n-1)*.5})}onMouseMove(t){if(!this.isInitialized)return;const e=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-e.left)/e.width*2-1,this.mouse.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObjects(this.elementMeshes);if(i.length>0){const n=i[0].object.userData;this.elementMeshes.forEach(a=>{a.material instanceof ls&&a.material.emissive.setHex(0)});const s=i[0].object.material;s instanceof ls&&s.emissive.setHex(4473924),this.updateData(`Element: ${n.symbol}
Radius: ${n.radius} pm
Ionization: ${n.ionization} eV
Electronegativity: ${n.electronegativity}`)}else this.elementMeshes.forEach(n=>{n.material instanceof ls&&n.material.emissive.setHex(0)})}update(){if(!this.isInitialized)return;const t=Date.now()*.001;this.elementMeshes.forEach((e,i)=>{e.rotation.z=Math.sin(t+i*.1)*.05})}draw(){this.renderer.render(this.scene,this.camera)}reset(){this.selectedProperty="radius",this.updateVisualization()}}class Bm extends pt{atoms=[];bonds=[];nextId=1;mode="add";currentElement="H";selectedAtom=null;hoveredAtom=null;mouseX=0;mouseY=0;valenceTable={H:1,C:4,N:5,O:6,F:7,Cl:7};_mouseDownHandler;_mouseMoveHandler;constructor(t,e,i,n){super(t,e,i,n),this._mouseDownHandler=this.onMouseDown.bind(this),this._mouseMoveHandler=this.onMouseMove.bind(this),this.canvas.addEventListener("mousedown",this._mouseDownHandler),this.canvas.addEventListener("mousemove",this._mouseMoveHandler),i("button","Clear All",{},()=>this.reset()),i("button","Mode: Add Atom",{},()=>{this.mode="add",this.selectedAtom=null,this.updateData("Click to place atoms.")}),i("button","Mode: Create Bond",{},()=>{this.mode="bond",this.selectedAtom=null,this.updateData("Click two atoms to connect them.")}),i("button","Mode: Delete",{},()=>{this.mode="delete",this.selectedAtom=null,this.updateData("Click an atom to remove it.")}),i("button","Select H",{},()=>this.setElement("H")),i("button","Select C",{},()=>this.setElement("C")),i("button","Select N",{},()=>this.setElement("N")),i("button","Select O",{},()=>this.setElement("O")),this.updateData("Lewis Structure Builder Refactored. Select mode and elements.")}setElement(t){this.currentElement=t,this.mode="add",this.updateData(`Selected Element: ${t}. Click to add.`)}getMousePos(t){const e=this.canvas.getBoundingClientRect(),i=this.canvas.width/e.width,n=this.canvas.height/e.height;return{x:(t.clientX-e.left)*i,y:(t.clientY-e.top)*n}}onMouseMove(t){const{x:e,y:i}=this.getMousePos(t);this.mouseX=e,this.mouseY=i,this.hoveredAtom=this.atoms.find(n=>Math.hypot(n.x-e,n.y-i)<30)||null}onMouseDown(t){const{x:e,y:i}=this.getMousePos(t);this.mode==="add"?this.hoveredAtom||this.atoms.push({id:this.nextId++,symbol:this.currentElement,x:e,y:i,valence:this.valenceTable[this.currentElement],color:this.currentElement==="H"?"#3b82f6":"#a855f7"}):this.mode==="bond"?this.hoveredAtom?this.selectedAtom?this.selectedAtom!==this.hoveredAtom&&(this.toggleBond(this.selectedAtom,this.hoveredAtom),this.selectedAtom=null,this.updateData("Bond updated.")):(this.selectedAtom=this.hoveredAtom,this.updateData(`Start bond from ${this.selectedAtom.symbol}...`)):this.selectedAtom=null:this.mode==="delete"&&this.hoveredAtom&&this.removeAtom(this.hoveredAtom)}toggleBond(t,e){const i=this.bonds.findIndex(n=>n.atom1===t&&n.atom2===e||n.atom1===e&&n.atom2===t);if(i>=0){const n=this.bonds[i];n.type<3?n.type++:this.bonds.splice(i,1)}else this.bonds.push({atom1:t,atom2:e,type:1})}removeAtom(t){this.atoms=this.atoms.filter(e=>e!==t),this.bonds=this.bonds.filter(e=>e.atom1!==t&&e.atom2!==t)}update(){}draw(){this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.strokeStyle="#f1f5f9",this.ctx.lineWidth=1;for(let t=0;t<this.width;t+=50)this.ctx.beginPath(),this.ctx.moveTo(t,0),this.ctx.lineTo(t,this.height),this.ctx.stroke();for(let t=0;t<this.height;t+=50)this.ctx.beginPath(),this.ctx.moveTo(0,t),this.ctx.lineTo(this.width,t),this.ctx.stroke();this.bonds.forEach(t=>{this.drawBond(t)}),this.mode==="bond"&&this.selectedAtom&&(this.ctx.strokeStyle="#cbd5e1",this.ctx.lineWidth=2,this.ctx.setLineDash([5,5]),this.ctx.beginPath(),this.ctx.moveTo(this.selectedAtom.x,this.selectedAtom.y),this.ctx.lineTo(this.mouseX,this.mouseY),this.ctx.stroke(),this.ctx.setLineDash([])),this.mode==="add"&&!this.hoveredAtom&&(this.ctx.globalAlpha=.5,this.ctx.fillStyle="#94a3b8",this.ctx.beginPath(),this.ctx.arc(this.mouseX,this.mouseY,20,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1),this.atoms.forEach(t=>{const e=t===this.hoveredAtom,i=t===this.selectedAtom,n=e?28:24;this.ctx.beginPath(),this.ctx.arc(t.x,t.y,n,0,Math.PI*2),i?this.ctx.fillStyle="#f59e0b":e&&this.mode==="delete"?this.ctx.fillStyle="#ef4444":e?this.ctx.fillStyle="#60a5fa":this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.strokeStyle="#1e3a8a",this.ctx.lineWidth=2,this.ctx.stroke(),this.ctx.fillStyle="white",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="bold 18px Inter",this.ctx.fillText(t.symbol,t.x,t.y)})}drawBond(t){const{atom1:e,atom2:i,type:n}=t,s=i.x-e.x,a=i.y-e.y,o=Math.hypot(s,a);if(o<1)return;const l=-a/o,c=s/o;this.ctx.strokeStyle="#334155",this.ctx.lineWidth=4,this.ctx.lineCap="round",n===1?(this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke()):n===2?(this.ctx.beginPath(),this.ctx.moveTo(e.x+l*6,e.y+c*6),this.ctx.lineTo(i.x+l*6,i.y+c*6),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(e.x-l*6,e.y-c*6),this.ctx.lineTo(i.x-l*6,i.y-c*6),this.ctx.stroke()):n===3&&(this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(e.x+l*9,e.y+c*9),this.ctx.lineTo(i.x+l*9,i.y+c*9),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(e.x-l*9,e.y-c*9),this.ctx.lineTo(i.x-l*9,i.y-c*9),this.ctx.stroke())}destroy(){this.canvas.removeEventListener("mousedown",this._mouseDownHandler),this.canvas.removeEventListener("mousemove",this._mouseMoveHandler)}reset(){this.atoms=[],this.bonds=[],this.selectedAtom=null,this.mode="add",this.nextId=1}}class km extends pt{element="H";atomicNumber=1;orbitals=[{name:"1s",capacity:2,energy:1,electrons:0},{name:"2s",capacity:2,energy:2,electrons:0},{name:"2p",capacity:6,energy:3,electrons:0},{name:"3s",capacity:2,energy:4,electrons:0},{name:"3p",capacity:6,energy:5,electrons:0},{name:"4s",capacity:2,energy:6,electrons:0},{name:"3d",capacity:10,energy:7,electrons:0}];elements={H:1,He:2,Li:3,Be:4,B:5,C:6,N:7,O:8,F:9,Ne:10,Na:11,Mg:12,Al:13,Si:14,P:15,S:16,Cl:17,Ar:18,K:19,Ca:20,Sc:21,Ti:22,V:23,Cr:24,Mn:25,Fe:26};constructor(t,e,i,n){super(t,e,i,n),i("slider","Atomic Number",{min:1,max:26,value:1,step:1},s=>{this.atomicNumber=s,this.element=Object.keys(this.elements).find(a=>this.elements[a]===s)||"?",this.fillOrbitals()}),this.fillOrbitals()}fillOrbitals(){this.orbitals.forEach(i=>i.electrons=0);let t=this.atomicNumber;for(const i of this.orbitals){if(t<=0)break;const n=Math.min(t,i.capacity);i.electrons=n,t-=n}const e=this.orbitals.filter(i=>i.electrons>0).map(i=>`${i.name}^${i.electrons}`).join(" ");this.updateData(`Element: ${this.element} (Z=${this.atomicNumber})
Config: ${e}`)}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.strokeStyle="#94a3b8",this.ctx.beginPath(),this.ctx.moveTo(50,550),this.ctx.lineTo(50,50),this.ctx.stroke(),this.ctx.fillStyle="#64748b",this.ctx.font="14px Inter",this.ctx.save(),this.ctx.translate(30,300),this.ctx.rotate(-Math.PI/2),this.ctx.textAlign="center",this.ctx.fillText("Energy",0,0),this.ctx.restore();let t=100,e=500;this.orbitals.forEach(i=>{const n=i.capacity/2,s=40,a=10,o=e-i.energy*60;this.ctx.fillStyle="#334155",this.ctx.fillText(i.name,t+n*s/2,o+s+20);for(let l=0;l<n;l++){const c=t+l*(s+a),h=o;this.ctx.strokeStyle="#475569",this.ctx.lineWidth=2,this.ctx.strokeRect(c,h,s,s);let u=i.electrons;const f=l<u&&u<=n||u>n,g=u>n&&l<u-n;(f||u<=n&&l<u)&&this.drawArrow(c+s/2-5,h+s-5,!0),g&&this.drawArrow(c+s/2+5,h+5,!1)}})}drawArrow(t,e,i){this.ctx.strokeStyle=i?"#ef4444":"#3b82f6",this.ctx.lineWidth=2,this.ctx.beginPath(),i?(this.ctx.moveTo(t,e),this.ctx.lineTo(t,e-25),this.ctx.lineTo(t-3,e-20),this.ctx.moveTo(t,e-25),this.ctx.lineTo(t+3,e-20)):(this.ctx.moveTo(t,e),this.ctx.lineTo(t,e+25),this.ctx.lineTo(t-3,e+20),this.ctx.moveTo(t,e+25),this.ctx.lineTo(t+3,e+20)),this.ctx.stroke()}}class zm extends pt{flameColor="#f59e0b";baseFlameColor="#3b82f6";particleSystem=[];currentMetal="None";constructor(t,e,i,n){super(t,e,i,n);const s=[{name:"Lithium (Li)",color:"#ef4444"},{name:"Sodium (Na)",color:"#eab308"},{name:"Potassium (K)",color:"#a855f7"},{name:"Copper (Cu)",color:"#22c55e"},{name:"Strontium (Sr)",color:"#dc2626"},{name:"Barium (Ba)",color:"#84cc16"}];i("button","Reset Flame",{},()=>{this.flameColor="#f59e0b",this.currentMetal="Bunsen Burner (Natural Gas)",this.updateData("Flame: Blue/Orange (No metal salt)")}),s.forEach(a=>{i("button",a.name,{},()=>{this.flameColor=a.color,this.currentMetal=a.name,this.updateData(`Metal: ${a.name}
Emission Color: ${this.getColorName(a.color)}`)})}),this.updateData("Select a metal salt to burn.")}getColorName(t){switch(t){case"#ef4444":return"Red";case"#eab308":return"Persistent Yellow";case"#a855f7":return"Lilac (Purple)";case"#22c55e":return"Blue-Green";case"#dc2626":return"Crimson Red";case"#84cc16":return"Apple Green";default:return"Standard"}}update(){for(let t=0;t<15;t++)this.particleSystem.push({x:this.width/2+(Math.random()-.5)*30,y:this.height-100,vx:(Math.random()-.5)*1.5,vy:-Math.random()*4-2,life:1,color:Math.random()<.3?this.baseFlameColor:this.flameColor});for(let t=this.particleSystem.length-1;t>=0;t--){const e=this.particleSystem[t];e.x+=e.vx,e.y+=e.vy,e.life-=.02,e.x+=Math.sin(Date.now()*.01+e.y*.05)*.5,e.life<=0&&this.particleSystem.splice(t,1)}}draw(){this.ctx.fillStyle="#1e293b",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="#64748b",this.ctx.fillRect(this.width/2-20,this.height-100,40,100),this.ctx.fillStyle="#475569",this.ctx.fillRect(this.width/2-30,this.height-10,60,10),this.ctx.globalCompositeOperation="screen",this.particleSystem.forEach(t=>{this.ctx.globalAlpha=t.life,this.ctx.fillStyle=t.color,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,8*t.life,0,Math.PI*2),this.ctx.fill()}),this.currentMetal!=="Bunsen Burner (Natural Gas)"&&(this.ctx.globalCompositeOperation="source-over",this.ctx.globalAlpha=1,this.ctx.strokeStyle="#94a3b8",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.moveTo(this.width/2+200,this.height-50),this.ctx.bezierCurveTo(this.width/2+100,this.height-200,this.width/2+50,this.height-150,this.width/2,this.height-150),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(this.width/2,this.height-150,4,0,Math.PI*2),this.ctx.strokeStyle="#cbd5e1",this.ctx.stroke()),this.ctx.globalAlpha=1,this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="white",this.ctx.font="20px Inter font-bold",this.ctx.textAlign="center",this.ctx.fillText(this.currentMetal,this.width/2,100)}}class Hm extends pt{temp=300;particles=[];pressure=0;liquidLevel=450;constructor(t,e,i,n){super(t,e,i,n),i("slider","Temperature (K)",{min:200,max:400,step:1,value:300},s=>this.temp=s);for(let s=0;s<200;s++)this.particles.push({x:Math.random()*(this.width-100)+50,y:Math.random()*100+this.liquidLevel,vx:Math.random()-.5,vy:Math.random()-.5,state:"liquid"})}update(){const t=this.temp/300,e=(this.temp-250)*1e-4,i=.01;let n=0;this.particles.forEach(s=>{s.x+=s.vx*t,s.y+=s.vy*t,(s.x<50||s.x>this.width-50)&&(s.vx*=-1),s.y<100&&(s.y=100,s.vy*=-1,s.state==="gas"&&n++),s.y>this.height-50&&(s.y=this.height-50,s.vy*=-1),s.state==="liquid"?(s.y<this.liquidLevel&&(Math.random()<e?s.state="gas":(s.y=this.liquidLevel,s.vy*=-1)),s.vx*=.95,s.vy*=.95,s.vy+=.1):(s.vy+=.02,s.y>this.liquidLevel&&(Math.random()<i?s.state="liquid":(s.y=this.liquidLevel,s.vy*=-1))),s.vx+=(Math.random()-.5)*.2*t,s.vy+=(Math.random()-.5)*.2*t}),this.pressure=this.pressure*.95+n*.05*10,this.updateData(`Temperature: ${this.temp} K
Pressure: ${this.pressure.toFixed(1)} atm
Gas Particles: ${this.particles.filter(s=>s.state==="gas").length}`)}draw(){this.ctx.fillStyle="#f1f5f9",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.strokeStyle="#334155",this.ctx.lineWidth=5,this.ctx.strokeRect(50,100,this.width-100,this.height-150),this.ctx.fillStyle="rgba(59, 130, 246, 0.2)",this.ctx.fillRect(50,this.liquidLevel,this.width-100,this.height-50-this.liquidLevel),this.particles.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.state==="gas"?3:4,0,Math.PI*2),this.ctx.fillStyle=t.state==="gas"?"#ef4444":"#3b82f6",this.ctx.fill()}),this.drawGauge(this.width-80,80,this.pressure),this.ctx.fillStyle=this.getHeaterColor(this.temp),this.ctx.fillRect(45,this.height-45,this.width-90,20),this.ctx.fillStyle="#0f172a",this.ctx.textAlign="center",this.ctx.fillText("HEATER",this.width/2,this.height-30)}getHeaterColor(t){const e=(t-200)/200,i=Math.floor(e*255),n=Math.floor((1-e)*255);return`rgb(${i}, 0, ${n})`}drawGauge(t,e,i){this.ctx.fillStyle="white",this.ctx.strokeStyle="black",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(t,e,40,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke();const n=Math.PI*.75+Math.min(i,100)/100*(Math.PI*1.5),s=Math.cos(n)*30,a=Math.sin(n)*30;this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(t+s,e+a),this.ctx.strokeStyle="red",this.ctx.lineWidth=3,this.ctx.stroke(),this.ctx.fillStyle="black",this.ctx.font="10px Inter",this.ctx.fillText("PRESSURE",t,e+15)}}class Vm extends pt{temp=25;mixLevel=100;distillateLevel=0;alcoholBoilingPoint=78;waterBoilingPoint=100;bubbles=[];drips=[];constructor(t,e,i,n){super(t,e,i,n),i("slider","Heat (Temperature)",{min:25,max:120,step:1,value:25},s=>this.temp=s),i("button","Reset",{},()=>this.reset())}update(){const t=this.temp>=this.alcoholBoilingPoint,e=this.temp>=this.waterBoilingPoint;let i=0;e?i=.5:t&&this.mixLevel>50&&(i=.3),this.mixLevel>0&&i>0&&(this.mixLevel-=i*.1,this.distillateLevel+=i*.1,Math.random()<.2&&this.bubbles.push({x:100+Math.random()*80,y:400,r:Math.random()*3+2,speed:1+Math.random()}),Math.random()<.1&&this.drips.push({x:500,y:150})),this.bubbles.forEach(n=>{n.y-=n.speed}),this.bubbles=this.bubbles.filter(n=>n.y>300),this.drips.forEach(n=>{n.y+=3}),this.drips=this.drips.filter(n=>n.y<400),this.updateData(`Temperature: ${this.temp}°C
Mixture: ${this.mixLevel.toFixed(1)} mL
Distillate: ${this.distillateLevel.toFixed(1)} mL`)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.drawFlask(140,420,this.mixLevel,"#a855f7"),this.ctx.strokeStyle="#94a3b8",this.ctx.lineWidth=10,this.ctx.beginPath(),this.ctx.moveTo(140,250),this.ctx.lineTo(140,150),this.ctx.lineTo(500,250),this.ctx.lineTo(500,350),this.ctx.stroke(),this.drawBeaker(500,420,this.distillateLevel,"#e2e8f0"),this.ctx.fillStyle="rgba(255,255,255,0.7)",this.bubbles.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.fillStyle="#a855f7",this.drips.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,3,0,Math.PI*2),this.ctx.fill()}),this.ctx.fillStyle="#475569",this.ctx.font="14px Inter",this.ctx.fillText("Mixture",110,450),this.ctx.fillText("Distillate",470,450)}drawFlask(t,e,i,n){this.ctx.strokeStyle="#334155",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(t,e,60,0,Math.PI*2),this.ctx.stroke();const s=Math.min(60,i*.6);s>0&&(this.ctx.fillStyle=n,this.ctx.beginPath(),this.ctx.arc(t,e,58,Math.PI-Math.acos(1-s/60),Math.PI*2+Math.acos(1-s/60),!1),this.ctx.fill())}drawBeaker(t,e,i,n){this.ctx.strokeStyle="#334155",this.ctx.strokeRect(t-30,e-40,60,80);const s=Math.min(80,i*.8);s>0&&(this.ctx.fillStyle=n,this.ctx.fillRect(t-28,e+40-s,56,s))}reset(){this.temp=25,this.mixLevel=100,this.distillateLevel=0,this.bubbles=[],this.drips=[]}}class Gm extends pt{magneticField=5;particles=[];detectorHits=new Array(100).fill(0);constructor(t,e,i,n){super(t,e,i,n),i("slider","Magnetic Field",{min:1,max:10,value:5,step:.1},s=>this.magneticField=s),i("button","Fire Ion Beam",{},()=>this.fireParticles()),i("button","Clear Detector",{},()=>this.detectorHits.fill(0))}fireParticles(){for(let t=0;t<10;t++)this.particles.push({x:50,y:300,vx:5,vy:0,mass:Math.random()>.8?22:20,active:!0})}update(){this.particles.forEach(t=>{if(!t.active)return;const e=t.vx*this.magneticField/t.mass;if(t.vy+=e*.5,t.x+=t.vx,t.y+=t.vy,t.x>700){t.active=!1;const i=Math.floor(Math.max(0,Math.min(99,t.y/600*100)));this.detectorHits[i]++}}),this.particles=this.particles.filter(t=>t.x<800&&t.y>0&&t.y<600),this.updateData(`Magnetic Field: ${this.magneticField} Tesla
Active Ions: ${this.particles.length}`)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="rgba(203, 213, 225, 0.3)",this.ctx.fillRect(150,100,400,400),this.ctx.strokeStyle="#94a3b8",this.ctx.strokeRect(150,100,400,400),this.ctx.fillStyle="#64748b",this.ctx.fillText("Magnetic Field Region",300,130),this.ctx.fillStyle="#334155",this.ctx.fillRect(0,280,50,40),this.particles.forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.mass/5,0,Math.PI*2),this.ctx.fillStyle=t.mass===20?"#3b82f6":"#ef4444",this.ctx.fill()}),this.ctx.fillStyle="#1e293b",this.ctx.fillRect(700,50,20,500),this.ctx.fillStyle="#10b981",this.detectorHits.forEach((t,e)=>{if(t>0){const i=e/100*600;this.ctx.fillRect(725,i,t*2,5)}})}}class Wm extends pt{ph=7;bufferCapacity=0;solutionColor="#ecfccb";constructor(t,e,i,n){super(t,e,i,n),i("button","Solution: Pure Water",{},()=>this.setSolution(0)),i("button","Solution: Weak Buffer",{},()=>this.setSolution(.5)),i("button","Solution: Strong Buffer",{},()=>this.setSolution(1)),i("button","Add Acid (HCl)",{},()=>this.addReagent(-1)),i("button","Add Base (NaOH)",{},()=>this.addReagent(1)),i("button","Reset",{},()=>this.reset())}setSolution(t){this.bufferCapacity=t,this.reset(),this.updateData("Solution Changed")}addReagent(t){const e=t*.5,i=1+this.bufferCapacity*10,n=e/i;this.ph+=n,this.ph=Math.max(0,Math.min(14,this.ph)),this.updateVisuals()}reset(){this.ph=7,this.updateVisuals()}updateVisuals(){this.ph<3?this.solutionColor="#ef4444":this.ph<5?this.solutionColor="#f97316":this.ph<6?this.solutionColor="#eab308":this.ph<8?this.solutionColor="#84cc16":this.ph<10?this.solutionColor="#06b6d4":this.solutionColor="#3b82f6",this.updateData(`pH: ${this.ph.toFixed(2)}
Buffer Strength: ${this.bufferCapacity*100}%`)}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle=this.solutionColor,this.ctx.fillRect(300,300,200,250),this.ctx.strokeStyle="#334155",this.ctx.lineWidth=4,this.ctx.strokeRect(300,300,200,250),this.ctx.fillStyle="#1e293b",this.ctx.fillRect(350,100,100,150),this.ctx.fillStyle="#cbd5e1",this.ctx.fillRect(390,250,20,100),this.ctx.fillStyle="#84cc16",this.ctx.fillRect(360,120,80,40),this.ctx.fillStyle="#000",this.ctx.font="bold 24px monospace",this.ctx.textAlign="center",this.ctx.fillText(this.ph.toFixed(2),400,148),this.ctx.fillStyle="#64748b",this.ctx.font="16px Inter",this.ctx.fillText(this.getBufferName(),400,580)}getBufferName(){return this.bufferCapacity===0?"Pure Water (No Resistance)":this.bufferCapacity===.5?"Acetate Buffer (Low Capacity)":"Phosphate Buffer (High Capacity)"}}class Xm extends pt{activationEnergy=.5;hasCatalyst=!1;isReacting=!1;ball={x:50,y:400};constructor(t,e,i,n){super(t,e,i,n),i("checkbox","Add Catalyst",{checked:!1},s=>{this.hasCatalyst=s,this.resetBall()}),i("button","Start Reaction",{},()=>this.start()),i("button","Reset",{},()=>this.resetBall())}start(){this.isReacting=!0}resetBall(){this.ball={x:50,y:400},this.isReacting=!1}update(){const e=250*(this.activationEnergy*(this.hasCatalyst?.4:1));if(this.isReacting)if(this.ball.x+=2,this.ball.x<300){const i=(this.ball.x-50)/250;this.ball.y=400-Math.sin(i*Math.PI/2)*e}else if(this.ball.x<600){const i=(this.ball.x-300)/300,n=400-e;this.ball.y=n+i*(e+100)}else this.isReacting=!1,this.updateData("Reaction Complete! Energy Released.");this.updateData(this.hasCatalyst?"Catalyst Added: Lower Activation Energy":"No Catalyst: High Barrier")}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.beginPath(),this.ctx.moveTo(0,420),this.ctx.lineTo(50,420);const t=this.hasCatalyst?100:250;this.ctx.quadraticCurveTo(175,420-t*2,300,420-t),this.ctx.quadraticCurveTo(450,420,600,520),this.ctx.lineTo(800,520),this.ctx.lineTo(800,600),this.ctx.lineTo(0,600),this.ctx.fillStyle="#e2e8f0",this.ctx.fill(),this.ctx.strokeStyle="#64748b",this.ctx.lineWidth=3,this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(this.ball.x,this.ball.y,20,0,Math.PI*2),this.ctx.fillStyle="#a855f7",this.ctx.fill(),this.ctx.fillStyle="#334155",this.ctx.font="16px Inter",this.ctx.fillText("Reactants",50,450),this.ctx.fillText("Products",600,550),this.ctx.fillText("Activation Energy",300,420-t-20),this.hasCatalyst&&(this.ctx.setLineDash([5,5]),this.ctx.strokeStyle="#cbd5e1",this.ctx.beginPath(),this.ctx.moveTo(50,420),this.ctx.quadraticCurveTo(175,-80,300,170),this.ctx.stroke(),this.ctx.setLineDash([]))}}class qm extends pt{scene;camera;renderer;mesh=new Vi;constructor(t,e,i,n){super(t,e,i,n),this.scene=new Fn,this.scene.background=new It(16317180),this.camera=new Se(75,800/600,.1,1e3),this.camera.position.z=5,this.renderer=new On({antialias:!0,alpha:!0}),this.renderer.setSize(800,600);const s=document.getElementById("canvas-container");if(s){const o=s.querySelector(".three-canvas");o&&o.remove(),this.renderer.domElement.classList.add("three-canvas","absolute","inset-0"),s.appendChild(this.renderer.domElement),this.canvas&&this.canvas.style&&(this.canvas.style.display="none")}const a=new ml(16777215,1,100);a.position.set(10,10,10),this.scene.add(a),this.scene.add(new As(4210752)),this.scene.add(this.mesh),this.showMode("s"),i("button","s Orbital",{},()=>this.showMode("s")),i("button","p Orbital",{},()=>this.showMode("p")),i("button","sp3 Hybrid",{},()=>this.showMode("sp3"))}showMode(t){if(this.mesh.clear(),t==="s"){const e=new Ai(1,32,32),i=new Ti({color:3900150,opacity:.8,transparent:!0});this.mesh.add(new oe(e,i)),this.updateData("s Orbital: Spherical shape.")}else if(t==="p"){const e=new Ai(.7,32,32),i=new Ti({color:15680580,opacity:.8,transparent:!0}),n=new oe(e,i);n.position.y=.7,n.scale.y=1.2;const s=new oe(e,i);s.position.y=-.7,s.scale.y=1.2,this.mesh.add(n),this.mesh.add(s),this.updateData("p Orbital: Dumbbell shape along axis.")}else if(t==="sp3"){const e=new ba(.5,2,32),i=new Ti({color:11032055,opacity:.8,transparent:!0});[new I(1,1,1),new I(-1,-1,1),new I(-1,1,-1),new I(1,-1,-1)].forEach(s=>{const a=new oe(e,i);a.position.copy(s.normalize().multiplyScalar(1)),a.lookAt(0,0,0),a.rotateX(-Math.PI/2),this.mesh.add(a)}),this.updateData("sp3 Hybrid: Tetrahedral arrangement (109.5° angles).")}}update(){this.mesh.rotation.y+=.01,this.mesh.rotation.x+=.005}draw(){this.renderer.render(this.scene,this.camera)}reset(){}}class $m extends pt{scene;camera;renderer;mesh=new Vi;constructor(t,e,i,n){super(t,e,i,n),this.scene=new Fn,this.scene.background=new It(15857145),this.camera=new Se(75,800/600,.1,100),this.camera.position.z=8,this.renderer=new On({antialias:!0}),this.renderer.setSize(800,600);const s=document.getElementById("canvas-container");s&&(s.querySelectorAll(".three-canvas").forEach(l=>l.remove()),this.renderer.domElement.classList.add("three-canvas","absolute","inset-0"),s.appendChild(this.renderer.domElement),this.canvas.style.display="none");const a=new gl(16777215,1);a.position.set(1,1,2),this.scene.add(a),this.scene.add(new As(4210752)),this.scene.add(this.mesh),i("button","Linear (2)",{},()=>this.setShape(2)),i("button","Trigonal Planar (3)",{},()=>this.setShape(3)),i("button","Tetrahedral (4)",{},()=>this.setShape(4)),i("button","Trigonal Bipyramidal (5)",{},()=>this.setShape(5)),i("button","Octahedral (6)",{},()=>this.setShape(6)),this.setShape(4)}setShape(t){this.mesh.clear();const e=new Ai(1,32,32),i=new Ti({color:15680580});this.mesh.add(new oe(e,i));const n=new Ti({color:9741240}),s=new Ti({color:3900150}),a=new Ai(.6,32,32),o=[];let l="Linear";if(t===2)o.push(new I(2.5,0,0)),o.push(new I(-2.5,0,0)),l="Linear (180°)";else if(t===3){for(let c=0;c<3;c++){const h=c*(Math.PI*2/3);o.push(new I(Math.cos(h)*2.5,Math.sin(h)*2.5,0))}l="Trigonal Planar (120°)"}else if(t===4)o.push(new I(2,2,2).normalize().multiplyScalar(2.5)),o.push(new I(-2,-2,2).normalize().multiplyScalar(2.5)),o.push(new I(-2,2,-2).normalize().multiplyScalar(2.5)),o.push(new I(2,-2,-2).normalize().multiplyScalar(2.5)),l="Tetrahedral (109.5°)";else if(t===5){o.push(new I(0,2.5,0)),o.push(new I(0,-2.5,0));for(let c=0;c<3;c++){const h=c*(Math.PI*2/3);o.push(new I(Math.cos(h)*2.5,0,Math.sin(h)*2.5))}l="Trigonal Bipyramidal (90°, 120°)"}else t===6&&(o.push(new I(2.5,0,0)),o.push(new I(-2.5,0,0)),o.push(new I(0,2.5,0)),o.push(new I(0,-2.5,0)),o.push(new I(0,0,2.5)),o.push(new I(0,0,-2.5)),l="Octahedral (90°)");o.forEach(c=>{const h=new Ts(.2,.2,c.length(),16);h.translate(0,c.length()/2,0),h.rotateX(Math.PI/2);const u=new oe(h,n);u.lookAt(c),this.mesh.add(u);const f=new oe(a,s);f.position.copy(c),this.mesh.add(f)}),this.updateData(`Geometry: ${l}`)}update(){this.mesh.rotation.y+=.005,this.mesh.rotation.x+=.002}draw(){this.renderer.render(this.scene,this.camera)}destroy(){this.renderer.forceContextLoss(),this.renderer.domElement.remove()}}class Ym extends pt{scene;camera;renderer;mesh=new Vi;constructor(t,e,i,n){super(t,e,i,n),this.scene=new Fn,this.scene.background=new It(15857145),this.camera=new Se(75,800/600,.1,100),this.camera.position.set(3,3,5),this.camera.lookAt(0,0,0),this.renderer=new On({antialias:!0}),this.renderer.setSize(800,600);const s=document.getElementById("canvas-container");s&&(s.querySelectorAll(".three-canvas").forEach(l=>l.remove()),this.renderer.domElement.classList.add("three-canvas","absolute","inset-0"),s.appendChild(this.renderer.domElement),this.canvas.style.display="none");const a=new ml(16777215,1);a.position.set(5,5,5),this.scene.add(a),this.scene.add(new As(5263440)),this.scene.add(this.mesh),i("button","Simple Cubic",{},()=>this.buildLattice("sc")),i("button","Body Centered (BCC)",{},()=>this.buildLattice("bcc")),i("button","Face Centered (FCC)",{},()=>this.buildLattice("fcc")),this.buildLattice("sc")}buildLattice(t){this.mesh.clear();const e=new Ai(.3,32,32),i=new Ti({color:3900150}),n=new Ti({color:15680580});for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){const c=new oe(e,i);if(c.position.set(a*2,o*2,l*2),this.mesh.add(c),t==="bcc"){const h=new oe(e,n);h.position.set(a*2+1,o*2+1,l*2+1),a<1&&o<1&&l<1&&this.mesh.add(h)}}if(this.mesh.clear(),[0,2].forEach(a=>[0,2].forEach(o=>[0,2].forEach(l=>{const c=new oe(e,i);c.position.set(a-1,o-1,l-1),this.mesh.add(c)}))),t==="bcc"){const a=new oe(e,n);a.position.set(0,0,0),this.mesh.add(a)}t==="fcc"&&[[0,0,1],[0,0,-1],[0,1,0],[0,-1,0],[1,0,0],[-1,0,0]].forEach(o=>{const l=new oe(e,n);l.position.set(o[0],o[1],o[2]),this.mesh.add(l)});const s=new rh(new oe(new Wi(2,2,2)));this.mesh.add(s)}update(){this.mesh.rotation.y+=.005,this.mesh.rotation.x+=.005}draw(){this.renderer.render(this.scene,this.camera)}destroy(){this.renderer.forceContextLoss(),this.renderer.domElement.remove()}}class Km extends pt{stage=0;constructor(t,e,i,n){super(t,e,i,n),i("button","Resonance Structure 1",{},()=>{this.stage=0,this.updateData("Double Bond on Left Ozone")}),i("button","Resonance Structure 2",{},()=>{this.stage=1,this.updateData("Double Bond on Right Ozone")}),i("button","Hybrid Structure",{},()=>{this.stage=2,this.updateData("Delocalized Electrons (1.5 Bond Order)")}),this.updateData("Ozone (O3) Molecule Resonance")}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height);const t=400,e=200,i=300,n=350,s=500,a=350;this.drawAtom(t,e,"O"),this.drawAtom(i,n,"O"),this.drawAtom(s,a,"O"),this.ctx.strokeStyle="#334155",this.ctx.lineWidth=4,this.ctx.lineCap="round",this.stage===0?(this.drawDoubleBond(i,n,t,e),this.drawSingleBond(s,a,t,e)):this.stage===1?(this.drawSingleBond(i,n,t,e),this.drawDoubleBond(s,a,t,e)):(this.drawHybridBond(i,n,t,e),this.drawHybridBond(s,a,t,e))}drawAtom(t,e,i){this.ctx.fillStyle="#ef4444",this.ctx.beginPath(),this.ctx.arc(t,e,30,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="white",this.ctx.font="bold 24px Inter",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(i,t,e)}drawSingleBond(t,e,i,n){this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(i,n),this.ctx.stroke()}drawDoubleBond(t,e,i,n){const s=i-t,a=n-e,o=Math.hypot(s,a),l=-a/o*6,c=s/o*6;this.ctx.beginPath(),this.ctx.moveTo(t+l,e+c),this.ctx.lineTo(i+l,n+c),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t-l,e-c),this.ctx.lineTo(i-l,n-c),this.ctx.stroke()}drawHybridBond(t,e,i,n){this.drawSingleBond(t,e,i,n);const s=i-t,a=n-e,o=Math.hypot(s,a),l=-a/o*10,c=s/o*10;this.ctx.setLineDash([5,5]),this.ctx.beginPath(),this.ctx.moveTo(t+l,e+c),this.ctx.lineTo(i+l,n+c),this.ctx.stroke(),this.ctx.setLineDash([])}}class jm extends pt{no2_conc=5;n2o4_conc=5;temp=25;pressure=1;constructor(t,e,i,n){super(t,e,i,n),i("button","Add NO2 (Reactant)",{},()=>this.perturb("no2")),i("button","Increase Pressure",{},()=>this.perturb("pressure+")),i("button","Decrease Pressure",{},()=>this.perturb("pressure-")),i("slider","Temperature",{min:0,max:100,value:25},s=>this.temp=s)}perturb(t){t==="no2"&&(this.no2_conc+=5),t==="pressure+"&&(this.pressure+=.5),t==="pressure-"&&(this.pressure=Math.max(.5,this.pressure-.5))}update(){let t=1;t*=(100-this.temp)/50,t*=this.pressure;const e=.01*this.pressure,i=.01*(this.temp/25),n=e*this.no2_conc*this.no2_conc,s=i*this.n2o4_conc,a=n-s;this.no2_conc-=a,this.n2o4_conc+=a,this.no2_conc<0&&(this.no2_conc=0),this.n2o4_conc<0&&(this.n2o4_conc=0),this.no2_conc=Math.min(20,this.no2_conc),this.updateData(`NO2 (Brown): ${this.no2_conc.toFixed(2)} M
N2O4 (Clear): ${this.n2o4_conc.toFixed(2)} M`)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height);const t=400/this.pressure,e=500-t,i=Math.min(1,this.no2_conc/10);this.ctx.fillStyle=`rgba(165, 42, 42, ${i})`,this.ctx.fillRect(300,e,200,t),this.ctx.strokeRect(300,e,200,t),this.ctx.fillStyle="#cbd5e1",this.ctx.fillRect(280,e-20,240,20),this.ctx.fillRect(390,e-120,20,100);const n=Math.floor(this.no2_conc)+Math.floor(this.n2o4_conc);for(let s=0;s<Math.min(50,n*2);s++){const a=300+Math.random()*200,o=e+Math.random()*t;Math.random()<this.no2_conc/(this.no2_conc+this.n2o4_conc)?(this.ctx.fillStyle="#ef4444",this.ctx.beginPath(),this.ctx.arc(a,o,3,0,Math.PI*2),this.ctx.fill()):(this.ctx.fillStyle="#3b82f6",this.ctx.beginPath(),this.ctx.arc(a,o,3,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(a+4,o,3,0,Math.PI*2),this.ctx.fill())}this.ctx.fillStyle="#0f172a",this.ctx.font="bold 20px Inter",this.ctx.textAlign="center",this.ctx.fillText("2 NO₂ (Brown)  ⇌  N₂O₄ (Colorless) + Heat",400,100)}}class Zm extends pt{type="exo";progress=0;running=!1;temp=25;constructor(t,e,i,n){super(t,e,i,n),i("button","Exothermic (Fire)",{},()=>{this.type="exo",this.reset()}),i("button","Endothermic (Ice Pack)",{},()=>{this.type="endo",this.reset()}),i("button","Start",{},()=>this.running=!0),this.reset()}reset(){this.progress=0,this.running=!1,this.temp=25,this.updateData(this.type==="exo"?"Exothermic: Releases Heat":"Endothermic: Absorbs Heat")}update(){this.running&&this.progress<100&&(this.progress+=.5,this.type==="exo"?this.temp+=.5:this.temp-=.2),this.updateData(`Surrounding Temp: ${this.temp.toFixed(1)}°C`)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle=this.getSolutionColor(),this.ctx.fillRect(300,300,200,200),this.ctx.strokeStyle="#334155",this.ctx.lineWidth=4,this.ctx.strokeRect(300,300,200,200),this.drawThermometer(550,300,this.temp),this.drawEnergyProfile(100,100),this.running&&this.progress<100&&(this.type==="exo"?this.drawHeatWaves(400,!0):this.drawHeatWaves(400,!1))}getSolutionColor(){const t=(this.temp-0)/100,e=Math.min(255,Math.max(0,t*255*2)),i=Math.min(255,Math.max(0,(1-t)*255*2));return`rgba(${e}, 0, ${i}, 0.3)`}drawThermometer(t,e,i){this.ctx.fillStyle="#e2e8f0",this.ctx.fillRect(t,e,20,200),this.ctx.strokeRect(t,e,20,200);const n=Math.min(200,Math.max(0,i*2));this.ctx.fillStyle="#ef4444",this.ctx.fillRect(t+2,e+200-n,16,n)}drawEnergyProfile(t,e){this.ctx.strokeStyle="black",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(t,e+100),this.ctx.lineTo(t,e),this.ctx.moveTo(t,e+100),this.ctx.lineTo(t+100,e+100),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t,e+50),this.ctx.lineTo(t+30,e+50),this.ctx.quadraticCurveTo(t+50,e,t+70,this.type==="exo"?e+80:e+20),this.ctx.lineTo(t+100,this.type==="exo"?e+80:e+20),this.ctx.fillStyle=this.type==="exo"?"#f59e0b":"#3b82f6",this.ctx.strokeStyle=this.ctx.fillStyle,this.ctx.stroke()}drawHeatWaves(t,e){this.ctx.strokeStyle=e?"#ef4444":"#3b82f6",this.ctx.lineWidth=2;for(let i=0;i<3;i++){this.ctx.beginPath();const n=30+i*15+Date.now()%500/20;this.ctx.arc(t,400,n,-Math.PI/2-.5,-Math.PI/2+.5),this.ctx.stroke()}}}class Jm extends pt{enthalpy=-100;entropy=.1;temp=300;constructor(t,e,i,n){super(t,e,i,n),i("slider","Enthalpy (ΔH)",{min:-500,max:500,value:-100},s=>this.enthalpy=s),i("slider","Entropy (ΔS)",{min:-.5,max:.5,step:.01,value:.1},s=>this.entropy=s),i("slider","Temperature (T)",{min:0,max:1e3,value:300},s=>this.temp=s)}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height);const t=this.enthalpy-this.temp*this.entropy,e=t<0?"Spontaneous":"Non-Spontaneous";this.ctx.fillStyle="#1e293b",this.ctx.font="bold 30px Inter",this.ctx.textAlign="center",this.ctx.fillText("ΔG = ΔH - TΔS",400,100),this.ctx.font="20px monospace",this.ctx.fillText(`${t.toFixed(1)} = ${this.enthalpy} - (${this.temp} * ${this.entropy.toFixed(3)})`,400,150),this.ctx.fillStyle=t<0?"#22c55e":"#ef4444",this.ctx.fillRect(200,200,400,100),this.ctx.fillStyle="white",this.ctx.font="bold 36px Inter",this.ctx.fillText(e,400,260);const i=400,n=.5,s=450;this.ctx.fillStyle="#3b82f6";const a=this.enthalpy*n;this.ctx.fillRect(i-150,s,80,-a),this.ctx.fillStyle="#0f172a",this.ctx.font="16px Inter",this.ctx.fillText("ΔH",i-110,s+20),this.ctx.fillStyle="#f59e0b";const o=this.temp*this.entropy*n;this.ctx.fillRect(i+50,s,80,-o),this.ctx.fillStyle="#0f172a",this.ctx.fillText("TΔS",i+90,s+20),this.ctx.strokeStyle="#94a3b8",this.ctx.beginPath(),this.ctx.moveTo(100,s),this.ctx.lineTo(700,s),this.ctx.stroke()}}class Qm extends pt{nucleus={x:400,y:300,type:"parent"};alphaParticle=null;hasDecayed=!1;constructor(t,e,i,n){super(t,e,i,n),i("button","Decay Nucleus",{},()=>this.decay()),i("button","Reset",{},()=>this.reset()),this.reset()}reset(){this.nucleus={x:400,y:300,type:"parent"},this.alphaParticle=null,this.hasDecayed=!1,this.updateData("Polonium-211 Nucleus (Unstable)")}decay(){if(this.hasDecayed)return;this.hasDecayed=!0,this.nucleus.type="daughter";const t=Math.random()*Math.PI*2;this.alphaParticle={x:400,y:300,vx:Math.cos(t)*5,vy:Math.sin(t)*5},this.updateData("Decay! Lead-207 + Alpha Particle (He-4)")}update(){this.alphaParticle&&(this.alphaParticle.x+=this.alphaParticle.vx,this.alphaParticle.y+=this.alphaParticle.vy),!this.hasDecayed&&Math.random()<.005&&this.decay()}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.beginPath(),this.ctx.arc(this.nucleus.x,this.nucleus.y,40,0,Math.PI*2),this.ctx.fillStyle=this.nucleus.type==="parent"?"#e11d48":"#475569",this.ctx.fill(),this.ctx.strokeStyle="black",this.ctx.lineWidth=2,this.ctx.stroke(),this.ctx.fillStyle="white",this.ctx.font="bold 16px Inter",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(this.nucleus.type==="parent"?"Po-211":"Pb-207",this.nucleus.x,this.nucleus.y),this.alphaParticle&&(this.ctx.beginPath(),this.ctx.arc(this.alphaParticle.x,this.alphaParticle.y,10,0,Math.PI*2),this.ctx.fillStyle="#f59e0b",this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="black",this.ctx.font="10px Inter",this.ctx.fillText("α",this.alphaParticle.x,this.alphaParticle.y)),this.ctx.fillStyle="#0f172a",this.ctx.font="20px Inter",this.ctx.fillText("Alpha Decay: Mass -4, Atomic Number -2",400,100)}}class t0 extends pt{nucleus={x:400,y:300,type:"parent"};electron=null;hasDecayed=!1;constructor(t,e,i,n){super(t,e,i,n),i("button","Decay Nucleus",{},()=>this.decay()),i("button","Reset",{},()=>this.reset()),this.reset()}reset(){this.nucleus={x:400,y:300,type:"parent"},this.electron=null,this.hasDecayed=!1,this.updateData("Carbon-14 Nucleus (Unstable)")}decay(){if(this.hasDecayed)return;this.hasDecayed=!0,this.nucleus.type="daughter";const t=Math.random()*Math.PI*2;this.electron={x:400,y:300,vx:Math.cos(t)*8,vy:Math.sin(t)*8},this.updateData("Decay! Nitrogen-14 + Electron (β-)")}update(){this.electron&&(this.electron.x+=this.electron.vx,this.electron.y+=this.electron.vy)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.beginPath(),this.ctx.arc(this.nucleus.x,this.nucleus.y,35,0,Math.PI*2),this.ctx.fillStyle=this.nucleus.type==="parent"?"#3b82f6":"#22c55e",this.ctx.fill(),this.ctx.strokeStyle="black",this.ctx.lineWidth=2,this.ctx.stroke(),this.ctx.fillStyle="white",this.ctx.font="bold 16px Inter",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(this.nucleus.type==="parent"?"C-14":"N-14",this.nucleus.x,this.nucleus.y),this.electron&&(this.ctx.beginPath(),this.ctx.arc(this.electron.x,this.electron.y,5,0,Math.PI*2),this.ctx.fillStyle="#ef4444",this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="black",this.ctx.font="10px Inter",this.ctx.fillText("e-",this.electron.x,this.electron.y-8)),this.ctx.fillStyle="#0f172a",this.ctx.font="20px Inter",this.ctx.fillText("Beta Decay: Neutron → Proton + Electron",400,100)}}class e0 extends pt{atoms=[];halfLifeTime=100;time=0;running=!1;constructor(t,e,i,n){super(t,e,i,n),i("button","Start",{},()=>this.running=!0),i("button","Reset",{},()=>this.reset()),this.reset()}reset(){this.atoms=[],this.time=0,this.running=!1;for(let t=0;t<100;t++)this.atoms.push({x:50+t%10*30+Math.random()*10,y:100+Math.floor(t/10)*30+Math.random()*10,decayed:!1});this.updateData("Half-Life Simulation: Time 0")}update(){if(!this.running)return;this.time++;const t=1-Math.pow(.5,1/this.halfLifeTime);let e=0;this.atoms.forEach(n=>{!n.decayed&&Math.random()<t&&(n.decayed=!0),n.decayed&&e++});const i=100-e;this.updateData(`Time: ${Math.floor(this.time/60)}s
Remaining: ${i}%
Decayed: ${e}%`)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.atoms.forEach(s=>{this.ctx.beginPath(),this.ctx.arc(s.x,s.y,10,0,Math.PI*2),this.ctx.fillStyle=s.decayed?"#64748b":"#ef4444",this.ctx.fill(),this.ctx.stroke()}),this.ctx.strokeStyle="black",this.ctx.beginPath(),this.ctx.moveTo(400,500),this.ctx.lineTo(400,200),this.ctx.moveTo(400,500),this.ctx.lineTo(750,500),this.ctx.stroke(),this.ctx.strokeStyle="#3b82f6",this.ctx.lineWidth=2,this.ctx.beginPath();const i=500-this.atoms.filter(s=>!s.decayed).length/100*300,n=400+this.time/2;this.ctx.fillStyle="#3b82f6",this.ctx.beginPath(),this.ctx.arc(n,i,5,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#0f172a",this.ctx.fillText("Remaining vs Time",500,520)}}class i0 extends pt{c14=100;age=0;isBuried=!1;constructor(t,e,i,n){super(t,e,i,n),i("button","Bury Tree (Stop Intake)",{},()=>this.isBuried=!0),i("slider","Years Passed",{min:0,max:2e4,value:0},s=>{this.isBuried&&(this.age=s,this.c14=100*Math.pow(.5,this.age/5730))}),i("button","Reset",{},()=>{this.isBuried=!1,this.age=0,this.c14=100})}update(){this.updateData(this.isBuried?`Age: ${this.age} years
C-14 Remaining: ${this.c14.toFixed(1)}%`:"Organism Alive: C-14 Constant (100%)")}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="#78350f",this.ctx.fillRect(0,400,this.width,200),this.isBuried?(this.ctx.fillStyle="#5c4033",this.ctx.save(),this.ctx.translate(400,500),this.ctx.rotate(Math.PI/4),this.ctx.fillRect(-10,-50,20,100),this.ctx.restore()):(this.ctx.fillStyle="#22c55e",this.ctx.beginPath(),this.ctx.moveTo(400,200),this.ctx.lineTo(350,400),this.ctx.lineTo(450,400),this.ctx.fill(),this.ctx.fillStyle="#5c4033",this.ctx.fillRect(390,400,20,50)),this.ctx.fillStyle="#334155",this.ctx.fillRect(600,200,50,200),this.ctx.fillStyle="#ef4444";const t=this.c14*2;this.ctx.fillRect(600,400-t,50,t),this.ctx.fillStyle="#0f172a",this.ctx.fillText("C-14 Level",600,420)}}class n0 extends pt{time=0;constructor(t,e,i,n){super(t,e,i,n),this.updateData("Electron Wave Diffraction (Simplified)")}update(){this.time+=.1}draw(){this.ctx.fillStyle="#0f172a",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="#cbd5e1",this.ctx.fillRect(200,0,10,250),this.ctx.fillRect(200,270,10,60),this.ctx.fillRect(200,350,10,250);const t=260,e=340;this.ctx.lineWidth=2,this.ctx.strokeStyle="rgba(59, 130, 246, 0.5)";const i=this.time*2;for(let s=0;s<600;s+=20)this.ctx.beginPath(),this.ctx.arc(200,t,s+i%20,-Math.PI/2,Math.PI/2),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(200,e,s+i%20,-Math.PI/2,Math.PI/2),this.ctx.stroke();this.ctx.strokeStyle="#f59e0b",this.ctx.lineWidth=3,this.ctx.beginPath();const n=700;for(let s=0;s<this.height;s+=5){const a=Math.hypot(n-200,s-t),o=Math.hypot(n-200,s-e),l=20,c=Math.cos(a/l*Math.PI)+Math.cos(o/l*Math.PI),h=c*c*20;s===0?this.ctx.moveTo(n+h,s):this.ctx.lineTo(n+h,s)}this.ctx.stroke(),this.ctx.fillStyle="white",this.ctx.fillRect(n,0,5,this.height)}}class s0 extends pt{monomers=[];chain=[];constructor(t,e,i,n){super(t,e,i,n),i("button","Add Monomer (Ethylene)",{},()=>this.addMonomer()),i("button","Initiate Reaction",{},()=>this.link())}addMonomer(){this.monomers.push({x:Math.random()*700+50,y:Math.random()*500+50,linked:!1})}link(){this.chain=this.monomers.map(t=>({x:t.x,y:t.y})),this.monomers=[],this.chain.sort((t,e)=>t.x-e.x);for(let t=1;t<this.chain.length;t++){const e=this.chain[t-1],i=this.chain[t];i.x=e.x+30,i.y=e.y+(Math.random()-.5)*20}}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.monomers.forEach(t=>{this.ctx.fillStyle="#3b82f6",this.ctx.beginPath(),this.ctx.arc(t.x,t.y,10,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="white",this.ctx.font="10px Inter",this.ctx.fillText("C=C",t.x-8,t.y+3)}),this.chain.length>0&&(this.ctx.strokeStyle="#1e3a8a",this.ctx.lineWidth=8,this.ctx.beginPath(),this.ctx.moveTo(this.chain[0].x,this.chain[0].y),this.chain.forEach(t=>this.ctx.lineTo(t.x,t.y)),this.ctx.stroke(),this.chain.forEach(t=>{this.ctx.fillStyle="#f59e0b",this.ctx.beginPath(),this.ctx.arc(t.x,t.y,10,0,Math.PI*2),this.ctx.fill()}))}}class r0 extends pt{head={x:400,y:300,type:"hydrophilic"};tails=[];constructor(t,e,i,n){super(t,e,i,n),i("button","Add Fatty Acid Tail",{},()=>this.addTail()),i("button","Clear",{},()=>this.tails=[]),this.updateData("Build a Phospholipid")}addTail(){if(this.tails.length>=2)return;const t=[];let e=this.tails.length===0?390:410,i=320;for(let n=0;n<10;n++)t.push({x:e+Math.sin(n)*5,y:i+n*15});this.tails.push({points:t})}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="#3b82f6",this.ctx.beginPath(),this.ctx.arc(this.head.x,this.head.y,20,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="white",this.ctx.textAlign="center",this.ctx.fillText("PO4",this.head.x,this.head.y),this.ctx.strokeStyle="#eab308",this.ctx.lineWidth=6,this.tails.forEach(t=>{this.ctx.beginPath(),this.ctx.moveTo(t.points[0].x,t.points[0].y-20),t.points.forEach(e=>this.ctx.lineTo(e.x,e.y)),this.ctx.stroke()}),this.ctx.fillStyle="#0f172a",this.ctx.font="20px Inter",this.ctx.fillText("Phospholipid: Hydrophilic Head + Hydrophobic Tails",400,100)}}class a0 extends pt{aminoAcids=[];constructor(t,e,i,n){super(t,e,i,n),i("button","Add Polar (Blue)",{},()=>this.add("polar")),i("button","Add Non-Polar (Orange)",{},()=>this.add("nonpolar")),i("button","Fold (Simulate Water)",{},()=>this.fold()),this.updateData("Build Chain then Fold")}add(t){const e=this.aminoAcids[this.aminoAcids.length-1],i=e?e.x+30:100;this.aminoAcids.push({type:t,x:i,y:300})}fold(){const t={x:400,y:300};this.aminoAcids.forEach((e,i)=>{if(e.type==="nonpolar")e.x=t.x+(Math.random()-.5)*40,e.y=t.y+(Math.random()-.5)*40;else{const n=i/this.aminoAcids.length*Math.PI*2;e.x=t.x+Math.cos(n)*80,e.y=t.y+Math.sin(n)*80}}),this.updateData("Folded: Hydrophobic Effect pushes non-polar inside.")}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.aminoAcids.length>1&&(this.ctx.strokeStyle="#475569",this.ctx.lineWidth=4,this.ctx.beginPath(),this.ctx.moveTo(this.aminoAcids[0].x,this.aminoAcids[0].y),this.aminoAcids.forEach(t=>this.ctx.lineTo(t.x,t.y)),this.ctx.stroke()),this.aminoAcids.forEach(t=>{this.ctx.fillStyle=t.type==="polar"?"#3b82f6":"#f97316",this.ctx.beginPath(),this.ctx.arc(t.x,t.y,12,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke()})}}class o0 extends pt{substrates=[];running=!1;constructor(t,e,i,n){super(t,e,i,n),i("button","Start",{},()=>this.running=!0);for(let s=0;s<20;s++)this.substrates.push({x:Math.random()*800,y:Math.random()*600,product:!1})}update(){if(!this.running)return;this.substrates.forEach(e=>{e.x+=(Math.random()-.5)*5,e.y+=(Math.random()-.5)*5,Math.hypot(e.x-400,e.y-300)<40&&!e.product&&(e.product=!0)});const t=this.substrates.filter(e=>e.product).length;this.updateData(`Products formed: ${t} / 20`)}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="#14b8a6",this.ctx.beginPath(),this.ctx.arc(400,300,40,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="white",this.ctx.fillText("Enzyme",400,300),this.substrates.forEach(t=>{this.ctx.fillStyle=t.product?"#22c55e":"#a855f7",this.ctx.beginPath(),t.product?this.ctx.arc(t.x,t.y,8,0,Math.PI*2):this.ctx.fillRect(t.x-8,t.y-8,16,16),this.ctx.fill()})}}class l0 extends pt{strands=1;constructor(t,e,i,n){super(t,e,i,n),i("button","Cycle (Heat -> Cool -> Warm)",{},()=>this.cycle()),this.updateData(`DNA Copies: ${this.strands}`)}cycle(){this.strands*=2,this.updateData(`Cycle Complete. DNA Doubled to ${this.strands}`)}update(){}draw(){this.ctx.fillStyle="#f8fafc",this.ctx.fillRect(0,0,this.width,this.height);const t=Math.min(32,this.strands),e=100,i=100;for(let n=0;n<t;n++){const s=Math.floor(n/4),a=n%4;this.drawHelix(e+a*150,i+s*80)}this.strands>32&&(this.ctx.fillStyle="black",this.ctx.fillText(`+ ${this.strands-32} more ...`,400,550))}drawHelix(t,e){this.ctx.strokeStyle="#ef4444",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.bezierCurveTo(t+20,e-20,t+80,e+20,t+100,e),this.ctx.stroke(),this.ctx.strokeStyle="#3b82f6",this.ctx.beginPath(),this.ctx.moveTo(t,e+10),this.ctx.bezierCurveTo(t+20,e+30,t+80,e-10,t+100,e+10),this.ctx.stroke()}}const ht=new Ll,c0=new Il(ht);window.ui=c0;ht.register("projectile-motion",zo);ht.register("projectile-game",sm);ht.register("bouncing-balls",Nl);ht.register("pendulum-wave",Fl);ht.register("spring-mass",Ol);ht.register("gas-laws",Bl);ht.register("ph-scale",kl);ht.register("atomic-orbitals",im);ht.register("balancing-equations",rm);ht.register("reactants-products",am);ht.register("acid-base-solutions",om);ht.register("molarity",lm);ht.register("concentration",cm);ht.register("isotopes",hm);ht.register("build-an-atom",dm);ht.register("molecular-shapes",um);ht.register("fractal-tree",fm);ht.register("fourier-series",pm);ht.register("conic-sections",mm);ht.register("population-growth",gm);ht.register("wave-interference",xm);ht.register("states-of-matter",_m);ht.register("ionic-covalent",vm);ht.register("solubility",ym);ht.register("reaction-rates",Sm);ht.register("redox",Mm);ht.register("titration",bm);ht.register("electrolysis",Em);ht.register("gas-diffusion",Tm);ht.register("nuclear-fission",wm);ht.register("molecular-polarity",Ml);ht.register("intermolecular-forces",bl);ht.register("specific-heat",Am);ht.register("activation-energy",Cm);ht.register("equilibrium",Rm);ht.register("colligative",Pm);ht.register("atomic-spectra",Dm);ht.register("chromatography",Lm);ht.register("galvanic-cell",Im);ht.register("blackbody",Um);ht.register("photoelectric",Nm);ht.register("rutherford",Fm);ht.register("periodic-trends",Om);ht.register("lewis-structures",Bm);ht.register("electron-config",km);ht.register("flame-test",zm);ht.register("vapor-pressure",Hm);ht.register("distillation",Vm);ht.register("mass-spec",Gm);ht.register("buffers",Wm);ht.register("kinetics",Xm);ht.register("hybridization",qm);ht.register("polarity",Ml);ht.register("vsepr",$m);ht.register("intermolecular",bl);ht.register("crystals",Ym);ht.register("resonance",Km);ht.register("le-chatelier",jm);ht.register("exo-endo",Zm);ht.register("gibbs",Jm);ht.register("alpha-decay",Qm);ht.register("beta-decay",t0);ht.register("half-life",e0);ht.register("radio-dating",i0);ht.register("electron-diffraction",n0);ht.register("polymerization",s0);ht.register("lipids",r0);ht.register("protein-folding",a0);ht.register("enzymes",o0);ht.register("pcr",l0);
