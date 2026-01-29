/**
 * Animation Manager & Simulations
 * Handles the main loop and all simulation logic
 */

const AnimationManager = {
    currentSim: null,
    animationId: null,
    previews: new Map(), // Stores preview animation loops

    // UI Elements
    canvas: document.getElementById('sim-canvas'),
    ctx: document.getElementById('sim-canvas').getContext('2d'),
    controlsContainer: document.getElementById('sim-controls'),
    dataContainer: document.getElementById('sim-data'),
    playButton: document.getElementById('sim-play-pause'),
    playIcon: document.getElementById('play-icon'),

    // State
    isRunning: false,

    init() {
        this.ctx.imageSmoothingEnabled = false;
        // Global resize handler
        window.addEventListener('resize', () => {
            // Handle resize if needed
        });

        // Start visible previews is called by UI
    },

    loadSim(id) {
        // Clear previous
        this.stopSim();
        this.controlsContainer.innerHTML = '';
        this.dataContainer.innerHTML = '';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Instantiate Sim
        const SimClass = Simulations[id];
        if (SimClass) {
            this.currentSim = new SimClass(this.canvas, this.ctx, this.createControl.bind(this), this.updateData.bind(this));
            this.startSim();
        } else {
            console.error(`Simulation ${id} not found.`);
        }
    },

    startSim() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.playIcon.textContent = '⏸';
        this.loop();
    },

    stopSim() {
        this.isRunning = false;
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.playIcon.textContent = '▶';
    },

    togglePlay() {
        if (this.isRunning) this.stopSim();
        else this.startSim();
    },

    reset() {
        if (this.currentSim && this.currentSim.reset) {
            this.currentSim.reset();
            if (!this.isRunning) {
                // Draw one frame to show reset state
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.currentSim.draw();
            }
        }
    },

    loop() {
        if (!this.isRunning) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.currentSim) {
            this.currentSim.update();
            this.currentSim.draw();
        }

        this.animationId = requestAnimationFrame(this.loop.bind(this));
    },

    // --- Helpers for Sims ---

    createControl(type, label, config, callback) {
        const div = document.createElement('div');
        div.className = 'flex flex-col space-y-1';

        const labelEl = document.createElement('label');
        labelEl.className = 'text-sm font-medium text-gray-700 flex justify-between';

        if (type === 'slider') {
            labelEl.innerHTML = `<span>${label}</span><span class="text-gray-500 font-normal" id="val-${label.replace(/\s/g, '')}">${config.value}</span>`;

            const input = document.createElement('input');
            input.type = 'range';
            input.min = config.min;
            input.max = config.max;
            input.step = config.step;
            input.value = config.value;
            input.className = 'w-full';

            input.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                document.getElementById(`val-${label.replace(/\s/g, '')}`).textContent = val;
                callback(val);
            });

            div.appendChild(labelEl);
            div.appendChild(input);
        } else if (type === 'checkbox') {
            div.className = 'flex flex-row items-center space-x-3';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = config.checked;
            input.className = 'w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300';
            input.addEventListener('change', (e) => callback(e.target.checked));

            labelEl.textContent = label;

            div.appendChild(input);
            div.appendChild(labelEl);
        } else if (type === 'button') {
            const btn = document.createElement('button');
            btn.textContent = label;
            btn.className = 'w-full bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50';
            btn.onclick = callback;
            div.appendChild(btn);
        }

        this.controlsContainer.appendChild(div);
    },

    updateData(text) {
        this.dataContainer.innerHTML = text.replace(/\n/g, '<br>');
    },

    // --- Previews ---
    startVisiblePreviews() {
        // Simple implementation: Start all previews randomly to avoid lag spike
        // In production, intersection observer should be used
        document.querySelectorAll('.sim-preview-canvas').forEach((canvas, index) => {
            const id = canvas.id.replace('preview-', '');
            const SimClass = Simulations[id];
            if (SimClass && !this.previews.has(id)) {
                // Initialize a mini version of the sim
                // We mock controls since previews are non-interactive
                const ctx = canvas.getContext('2d');
                const sim = new SimClass(canvas, ctx, () => { }, () => { });

                // Random start time to desync animations
                setTimeout(() => {
                    const loop = () => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        sim.update();
                        sim.draw();
                        if (document.getElementById(`preview-${id}`)) { // Check if still in DOM
                            requestAnimationFrame(loop);
                        }
                    };
                    loop();
                    this.previews.set(id, true);
                }, index * 100);
            }
        });
    },

    stopAllPreviews() {
        // We rely on the DOM check in the loop to stop them, basically
        // Or we could cancel animation frames if we stored IDs. 
        // For simplicity, we just won't clear the map, so they persist or we could clear.
    }
};

/**
 * Base Simulation Class
 */
class Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.addControl = addControl;
        this.updateData = updateData;
    }
    update() { }
    draw() { }
    reset() { }

    // Helper for 3D-like particles
    drawSphere(x, y, radius, color) {
        // Fallback for very small particles or performance
        if (radius < 2) {
            this.ctx.fillStyle = color;
            this.ctx.beginPath(); this.ctx.arc(x, y, radius, 0, Math.PI * 2); this.ctx.fill();
            return;
        }

        const grad = this.ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, radius * 0.1, x, y, radius);
        grad.addColorStop(0, 'white');
        grad.addColorStop(0.4, color);
        grad.addColorStop(1, 'black');

        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

const Simulations = {};

// ==========================================
// 1. Projectile Motion
// ==========================================
Simulations['projectile-motion'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);

        // Params
        this.angle = 45;
        this.speed = 15;
        this.gravity = 9.8;
        this.showVectors = true;

        // State
        this.balls = [];
        this.isFiring = false;

        // Config Controls
        this.addControl('slider', 'Angle', { min: 0, max: 90, step: 1, value: 45 }, (v) => this.angle = v);
        this.addControl('slider', 'Initial Speed', { min: 5, max: 30, step: 1, value: 15 }, (v) => this.speed = v);
        this.addControl('slider', 'Gravity', { min: 1, max: 20, step: 0.5, value: 9.8 }, (v) => this.gravity = v);
        this.addControl('checkbox', 'Show Vectors', { checked: true }, (v) => this.showVectors = v);
        this.addControl('button', 'Fire Cannon', {}, () => this.fire());
    }

    fire() {
        const rad = this.angle * Math.PI / 180;
        const vx = Math.cos(rad) * this.speed;
        const vy = -Math.sin(rad) * this.speed; // Canvas Y is down

        this.balls.push({
            pos: new Vector2(50, this.height - 50),
            vel: new Vector2(vx, vy),
            path: [],
            time: 0
        });
    }

    update() {
        const dt = 0.1; // Delta time step

        this.balls.forEach((ball, index) => {
            // Store path
            if (ball.time % 2 < 1) { // Optimize path points
                ball.path.push(ball.pos.copy());
            }
            ball.time++;

            // Physics
            ball.vel.y += (this.gravity * dt);
            ball.pos = ball.pos.add(ball.vel.mult(dt));

            // Ground collision
            if (ball.pos.y > this.height - 10) {
                ball.pos.y = this.height - 10;
                ball.vel.y *= -0.6; // Bounce with damping
                ball.vel.x *= 0.8; // Friction

                if (Math.abs(ball.vel.y) < 1) ball.vel.y = 0;
                if (Math.abs(ball.vel.x) < 0.1) ball.vel.x = 0;
            }
        });

        // Cleanup stopped balls
        if (this.balls.length > 5) this.balls.shift();

        // Data
        const lastBall = this.balls[this.balls.length - 1];
        if (lastBall) {
            const h = Math.max(0, (this.height - 50 - lastBall.pos.y) / 10).toFixed(1);
            const d = ((lastBall.pos.x - 50) / 10).toFixed(1);
            const v = lastBall.vel.mag().toFixed(1);
            this.updateData(`Height: ${h}m | Distance: ${d}m | Velocity: ${v}m/s`);
        } else {
            this.updateData('Ready to fire!');
        }
    }

    draw() {
        // Cannon
        this.ctx.fillStyle = '#444';
        const cannonBase = new Vector2(50, this.height - 50);

        this.ctx.save();
        this.ctx.translate(cannonBase.x, cannonBase.y);
        this.ctx.rotate(-this.angle * Math.PI / 180);
        this.ctx.fillRect(0, -10, 60, 20);
        this.ctx.restore();

        // Base
        this.ctx.beginPath();
        this.ctx.arc(50, this.height - 50, 20, 0, Math.PI * 2);
        this.ctx.fill();

        // Balls
        this.balls.forEach(ball => {
            // Path
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            if (ball.path.length > 0) {
                this.ctx.moveTo(ball.path[0].x, ball.path[0].y);
                for (let p of ball.path) this.ctx.lineTo(p.x, p.y);
            }
            this.ctx.stroke();

            // Ball
            this.drawSphere(ball.pos.x, ball.pos.y, 8, '#FF6C00');

            // Vectors
            if (this.showVectors && ball.vel.mag() > 1) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = 'green';
                this.ctx.moveTo(ball.pos.x, ball.pos.y);
                // Scale vector for visibility
                this.ctx.lineTo(ball.pos.x + ball.vel.x * 5, ball.pos.y + ball.vel.y * 5);
                this.ctx.stroke();
            }
        });

        // Ground
        this.ctx.fillStyle = '#8bc34a';
        this.ctx.fillRect(0, this.height - 10, this.width, 10);
    }

    reset() {
        this.balls = [];
    }
};

// ==========================================
// 2. Bouncing Balls
// ==========================================
Simulations['bouncing-balls'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.balls = [];
        this.gravity = 0.5;
        this.friction = 0.99;
        this.bounciness = 0.8;

        for (let i = 0; i < 5; i++) this.addBall();

        this.addControl('slider', 'Gravity', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.gravity = v);
        this.addControl('slider', 'Bounciness', { min: 0.1, max: 1.2, step: 0.1, value: 0.8 }, v => this.bounciness = v);
        this.addControl('button', 'Add Ball', {}, () => this.addBall());
    }

    addBall() {
        this.balls.push({
            pos: new Vector2(Math.random() * this.width, Math.random() * (this.height / 2)),
            vel: new Vector2((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
            radius: 15 + Math.random() * 10,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
            mass: 1 // simplified
        });
    }

    update() {
        this.balls.forEach(b => {
            b.vel.y += this.gravity;
            b.vel = b.vel.mult(this.friction);
            b.pos = b.pos.add(b.vel);

            // Walls
            if (b.pos.x < b.radius) { b.pos.x = b.radius; b.vel.x *= -this.bounciness; }
            if (b.pos.x > this.width - b.radius) { b.pos.x = this.width - b.radius; b.vel.x *= -this.bounciness; }
            if (b.pos.y > this.height - b.radius) { b.pos.y = this.height - b.radius; b.vel.y *= -this.bounciness; }
            if (b.pos.y < b.radius) { b.pos.y = b.radius; b.vel.y *= -this.bounciness; }
        });

        // Simple Circle Collision
        for (let i = 0; i < this.balls.length; i++) {
            for (let j = i + 1; j < this.balls.length; j++) {
                const b1 = this.balls[i];
                const b2 = this.balls[j];
                const dist = b1.pos.dist(b2.pos);
                if (dist < b1.radius + b2.radius) {
                    Physics.resolveElasticCollision(b1, b2);
                    // Separate to prevent sticking
                    const overlap = (b1.radius + b2.radius - dist) / 2;
                    const dir = b2.pos.sub(b1.pos).normalize();
                    b1.pos = b1.pos.sub(dir.mult(overlap));
                    b2.pos = b2.pos.add(dir.mult(overlap));
                }
            }
        }

        const totalKE = this.balls.reduce((acc, b) => acc + 0.5 * b.mass * b.vel.magSq(), 0).toFixed(0);
        this.updateData(`Total Kinetic Energy: ${totalKE} J\nCounts: ${this.balls.length}`);
    }

    draw() {
        this.balls.forEach(b => {
            this.drawSphere(b.pos.x, b.pos.y, b.radius, b.color);
        });
    }

    reset() {
        this.balls = [];
        for (let i = 0; i < 5; i++) this.addBall();
    }
};

// ==========================================
// 3. Pendulum Wave
// ==========================================
Simulations['pendulum-wave'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.pendulums = [];
        this.numPendulums = 12;
        this.baseLength = 200;
        this.time = 0;
        this.speed = 0.5;
        this.damping = 0;

        this.initPendulums();

        this.addControl('slider', 'Speed', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.speed = v);
        this.addControl('slider', 'Count', { min: 5, max: 20, step: 1, value: 12 }, v => {
            this.numPendulums = v;
            this.initPendulums();
        });
    }

    initPendulums() {
        this.pendulums = [];
        // Determine lengths so that they complete N cycles in period T
        // T = 2*pi*sqrt(L/g) => L ~ T^2
        // We want frequencies to be 50, 51, 52... per unit time
        const k = 10000;
        for (let i = 0; i < this.numPendulums; i++) {
            // Length decreases to increase frequency
            const freq = 10 + i;
            const len = k / (freq * freq);
            this.pendulums.push({
                length: len * 8, // scale for visual
                angle: Math.PI / 4,
                freq: freq,
                color: `hsl(${i * 360 / this.numPendulums}, 70%, 50%)`
            });
        }
    }

    update() {
        this.time += 0.05 * this.speed;
        this.pendulums.forEach(p => {
            // Simple harmonic motion approximation for visualization: theta = theta0 * cos(omega * t)
            // omega propto 1/sqrt(length) or directly from our freq logic
            // Using exact sine wave for "wave" effect visual
            p.angle = (Math.PI / 4) * Math.cos(this.time * p.freq * 0.05);
        });
        this.updateData(`Time: ${this.time.toFixed(1)} s`);
    }

    draw() {
        // Center top
        const origin = new Vector2(this.width / 2, 50);

        this.ctx.lineWidth = 2;
        this.pendulums.forEach(p => {
            const x = origin.x + Math.sin(p.angle) * p.length;
            const y = origin.y + Math.cos(p.angle) * p.length;

            this.ctx.beginPath();
            this.ctx.strokeStyle = '#ccc';
            this.ctx.moveTo(origin.x, origin.y);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();

            this.ctx.stroke();

            this.drawSphere(x, y, 10, p.color);
        });
    }

    reset() {
        this.time = 0;
    }
};

// ==========================================
// 4. Spring Mass
// ==========================================
Simulations['spring-mass'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.massPos = new Vector2(this.width / 2, 200);
        this.anchor = new Vector2(this.width / 2, 50);
        this.velocity = new Vector2(0, 0);

        this.k = 0.5; // Spring constant
        this.mass = 20;
        this.restLength = 200;
        this.gravity = 9.8;
        this.damping = 0.98;

        this.isDragging = false;

        this.addControl('slider', 'Spring Stiffness (k)', { min: 0.1, max: 2, step: 0.1, value: 0.5 }, v => this.k = v);
        this.addControl('slider', 'Mass', { min: 5, max: 50, step: 1, value: 20 }, v => this.mass = v);
        this.addControl('slider', 'Damping', { min: 0.9, max: 1.0, step: 0.001, value: 0.98 }, v => this.damping = v);

        // Mouse/Touch interaction for this specific sim
        this.canvas.addEventListener('mousedown', this.handleInput.bind(this));
        this.canvas.addEventListener('mouseup', () => this.isDragging = false);
        this.canvas.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                const rect = this.canvas.getBoundingClientRect();
                this.massPos.x = e.clientX - rect.left;
                this.massPos.y = e.clientY - rect.top;
                this.velocity = new Vector2(0, 0); // reset velocity while dragging
            }
        });
    }

    handleInput(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouse = new Vector2(e.clientX - rect.left, e.clientY - rect.top);
        if (mouse.dist(this.massPos) < 25) {
            this.isDragging = true;
        }
    }

    update() {
        if (!this.isDragging) {
            // F = -kx - cv + mg
            const force = Vector2.sub(this.massPos, this.anchor);
            const x = force.mag() - this.restLength;
            force.normalize();

            // Spring force
            const springForce = force.mult(-1 * this.k * x);

            // Gravity
            const gravityForce = new Vector2(0, this.mass * 0.5); // Simplified gravity scaling

            const totalForce = springForce.add(gravityForce);

            const acc = totalForce.div(this.mass);

            this.velocity = this.velocity.add(acc);
            this.velocity = this.velocity.mult(this.damping);
            this.massPos = this.massPos.add(this.velocity);
        }

        const energy = (0.5 * this.k * Math.pow(this.massPos.dist(this.anchor) - this.restLength, 2)).toFixed(1);
        this.updateData(`Potential Energy: ${energy} J\nDisplacement: ${(this.massPos.y - this.anchor.y).toFixed(0)}`);
    }

    draw() {
        // Spring
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#555';
        this.ctx.lineWidth = 4;

        const numCoils = 15;
        const dist = this.massPos.dist(this.anchor);
        const dir = this.massPos.sub(this.anchor).normalize();
        const perp = new Vector2(-dir.y, dir.x);

        this.ctx.moveTo(this.anchor.x, this.anchor.y);
        for (let i = 0; i <= numCoils; i++) {
            const p = i / numCoils;
            const noise = (i % 2 === 0 ? 15 : -15);
            if (i === 0 || i === numCoils) {
                const pos = this.anchor.add(dir.mult(dist * p));
                this.ctx.lineTo(pos.x, pos.y);
            } else {
                const pos = this.anchor.add(dir.mult(dist * p)).add(perp.mult(noise));
                this.ctx.lineTo(pos.x, pos.y);
            }
        }
        this.ctx.stroke();

        // Anchor
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(this.anchor.x - 20, this.anchor.y - 10, 40, 10);

        // Mass
        this.drawSphere(this.massPos.x, this.massPos.y, 25, this.isDragging ? '#ff9800' : '#4caf50');
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`${this.mass}kg`, this.massPos.x - 10, this.massPos.y + 5);
    }

    reset() {
        this.massPos = new Vector2(this.width / 2, 250);
        this.velocity = new Vector2(0, 0);
    }
};

// ==========================================
// 5. Gas Laws
// ==========================================
Simulations['gas-laws'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.particles = [];
        this.temperature = 300; // Kelvin
        this.volume = 500; // Width of box
        this.pressure = 0;

        // Sim constraints
        this.boxHeight = 400;
        this.particleCount = 50;

        this.initParticles();

        this.addControl('slider', 'Temperature (K)', { min: 100, max: 1000, step: 10, value: 300 }, v => {
            this.temperature = v;
            this.updateSpeed();
        });
        this.addControl('slider', 'Volume', { min: 200, max: 700, step: 10, value: 500 }, v => this.volume = v);
        this.addControl('slider', 'Particles', { min: 10, max: 200, step: 10, value: 50 }, v => {
            this.particleCount = v;
            this.initParticles();
        });
    }

    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                pos: new Vector2(Math.random() * this.volume, Math.random() * this.boxHeight),
                vel: new Vector2(Math.random() - 0.5, Math.random() - 0.5).normalize(),
                radius: 3
            });
        }
        this.updateSpeed();
    }

    updateSpeed() {
        // v proportional to sqrt(T)
        const speed = Math.sqrt(this.temperature) * 0.2;
        this.particles.forEach(p => {
            p.vel = p.vel.normalize().mult(speed);
        });
    }

    update() {
        let wallCollisions = 0;
        const dt = 1;

        this.particles.forEach(p => {
            p.pos = p.pos.add(p.vel.mult(dt));

            if (p.pos.x < p.radius) { p.pos.x = p.radius; p.vel.x *= -1; wallCollisions++; }
            if (p.pos.x > this.volume - p.radius) { p.pos.x = this.volume - p.radius; p.vel.x *= -1; wallCollisions++; }
            if (p.pos.y < p.radius) { p.pos.y = p.radius; p.vel.y *= -1; wallCollisions++; }
            if (p.pos.y > this.boxHeight - p.radius) { p.pos.y = this.boxHeight - p.radius; p.vel.y *= -1; wallCollisions++; }
        });

        // Pressure ~ collisions per frame / volume (simplified)
        // Smoothing the pressure reading
        const instantaneousPressure = (wallCollisions * this.temperature) / this.volume;
        this.pressure = this.pressure * 0.9 + instantaneousPressure * 0.1;

        this.updateData(`Pressure: ${this.pressure.toFixed(2)} atm\nPV = ${(this.pressure * this.volume).toFixed(0)} | nRT = ${(this.particleCount * this.temperature * 0.05).toFixed(0)}`);
    }

    draw() {
        // Box
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(0, 0, this.volume, this.boxHeight);
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(0, 0, this.volume, this.boxHeight);

        // Particles
        this.particles.forEach(p => {
            this.drawSphere(p.pos.x, p.pos.y, p.radius, '#E91E63');
        });
        // Volume Handle
        this.ctx.fillStyle = '#666';
        this.ctx.fillRect(this.volume, 0, 10, this.boxHeight);
    }

    reset() {
        this.volume = 500;
        this.initParticles();
    }
};

// ==========================================
// 6. pH Scale
// ==========================================
Simulations['ph-scale'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.volume = 0.5; // Liters
        this.solute = 0; // moles of H+
        this.ph = 7.00;
        this.substance = 'water'; // water, acid, base

        this.liquidColor = [200, 200, 255]; // RGB

        this.addControl('button', 'Add Water', {}, () => this.addVolume());
        this.addControl('button', 'Drain', {}, () => this.drain());
        this.addControl('slider', 'Solute Amount', { min: 0, max: 10, step: 0.1, value: 5 }, (v) => this.setConcentration(v));
        this.addControl('checkbox', 'Show pH Meter', { checked: true }, (v) => this.showMeter = v);

        this.showMeter = true;
    }

    setConcentration(val) {
        // Mocking: slider 0-5 is Acidic, 5-10 is Basic
        // 0 -> pH 1, 5 -> pH 7, 10 -> pH 14
        if (val < 5) {
            this.ph = 1 + (val / 5) * 6;
            this.substance = 'acid';
        } else {
            this.ph = 7 + ((val - 5) / 5) * 7;
            this.substance = 'base';
        }
        this.updateColor();
    }

    addVolume() {
        // Adding water dilutes towards pH 7
        if (this.volume < 1.0) {
            this.volume += 0.1;
            if (this.ph < 7) this.ph += 0.1;
            if (this.ph > 7) this.ph -= 0.1;
            this.updateColor();
        }
    }

    drain() {
        if (this.volume > 0.1) this.volume -= 0.1;
    }

    updateColor() {
        // Universal indicator colors aprox
        if (this.ph < 3) this.liquidColor = [255, 0, 0];
        else if (this.ph < 5) this.liquidColor = [255, 165, 0];
        else if (this.ph < 8) this.liquidColor = [0, 255, 0];
        else if (this.ph < 11) this.liquidColor = [0, 0, 255];
        else this.liquidColor = [128, 0, 128];
    }

    update() {
        this.updateData(`pH: ${this.ph.toFixed(2)}\nVolume: ${this.volume.toFixed(1)} L\nType: ${this.substance.toUpperCase()}`);
    }

    draw() {
        // Beaker
        const bx = 300, by = 400, w = 200, h = 300;

        // Liquid
        const liquidH = h * this.volume;
        this.ctx.fillStyle = `rgba(${this.liquidColor[0]}, ${this.liquidColor[1]}, ${this.liquidColor[2]}, 0.6)`;
        this.ctx.fillRect(bx, by - liquidH, w, liquidH);

        // Beaker outline
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(bx, by - h);
        this.ctx.lineTo(bx, by);
        this.ctx.lineTo(bx + w, by);
        this.ctx.lineTo(bx + w, by - h);
        this.ctx.stroke();

        // Meter probe
        if (this.showMeter) {
            this.ctx.fillStyle = '#666';
            this.ctx.fillRect(bx + 150, by - h - 50, 10, h + 20); // cord/stick
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(bx + 140, by - 40, 30, 40); // probe head

            // Meter Box
            this.ctx.fillStyle = '#333';
            this.ctx.fillRect(50, 50, 150, 80);
            this.ctx.fillStyle = '#b6ffa8'; // LCD
            this.ctx.fillRect(60, 60, 130, 60);
            this.ctx.fillStyle = 'black';
            this.ctx.font = '30px monospace';
            this.ctx.fillText(this.ph.toFixed(2), 80, 100);
        }
    }

    reset() {
        this.ph = 7;
        this.volume = 0.5;
        this.updateColor();
    }
};

// ==========================================
// 7. Atomic Orbitals
// ==========================================
Simulations['atomic-orbitals'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.orbitalType = 's'; // s, p, d
        // 3D projection vars
        this.points = [];
        this.rotation = 0;

        this.initPoints();

        this.addControl('button', 's Orbital', {}, () => { this.orbitalType = 's'; this.initPoints(); });
        this.addControl('button', 'p Orbital', {}, () => { this.orbitalType = 'p'; this.initPoints(); });
        this.addControl('button', 'd Orbital', {}, () => { this.orbitalType = 'd'; this.initPoints(); });
        this.addControl('slider', 'Rotation Speed', { min: 0, max: 0.1, step: 0.001, value: 0.02 }, v => this.rotationSpeed = v);

        this.rotationSpeed = 0.02;
    }

    initPoints() {
        this.points = [];
        const count = 2000;
        for (let i = 0; i < count; i++) {
            // Monte carlo rejection sampling for probability density
            while (true) {
                const x = (Math.random() - 0.5) * 10;
                const y = (Math.random() - 0.5) * 10;
                const z = (Math.random() - 0.5) * 10;
                const r = Math.sqrt(x * x + y * y + z * z);

                let prob = 0;
                if (this.orbitalType === 's') {
                    // Psi ~ e^-r
                    prob = Math.exp(-r);
                } else if (this.orbitalType === 'p') {
                    // Psi ~ z * e^-r
                    prob = Math.abs(z) * Math.exp(-r / 2);
                } else if (this.orbitalType === 'd') {
                    // Psi ~ xy * e^-r
                    prob = Math.abs(x * y) * Math.exp(-r / 3);
                }

                if (Math.random() < prob) {
                    this.points.push({ x: x * 30, y: y * 30, z: z * 30 });
                    break;
                }
            }
        }
    }

    update() {
        this.rotation += this.rotationSpeed;
        this.updateData(`Orbital: ${this.orbitalType.toUpperCase()}\nPoints: ${this.points.length}`);
    }

    draw() {
        // Center
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.points.forEach(p => {
            // Rotate Y
            const x1 = p.x * Math.cos(this.rotation) - p.z * Math.sin(this.rotation);
            const z1 = p.x * Math.sin(this.rotation) + p.z * Math.cos(this.rotation);

            // Simple Projection
            const scale = 300 / (300 + z1);
            const sx = cx + x1 * scale;
            const sy = cy + p.y * scale;

            const alpha = (z1 + 100) / 200; // depth cue
            this.ctx.fillStyle = `rgba(255, 108, 0, ${Math.max(0.1, Math.min(1, alpha))})`;
            this.ctx.fillRect(sx, sy, 2 * scale, 2 * scale);
        });

        // Nucleus
        this.drawSphere(cx, cy, 6, 'black');
    }

    reset() {
        this.orbitalType = 's';
        this.initPoints();
    }
};

// ==========================================
// 8. Fractal Tree
// ==========================================
Simulations['fractal-tree'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.angle = 25;
        this.depth = 10;
        this.branchRatio = 0.67;

        this.addControl('slider', 'Angle', { min: 0, max: 90, step: 1, value: 25 }, v => this.angle = v);
        this.addControl('slider', 'Depth', { min: 1, max: 12, step: 1, value: 10 }, v => this.depth = v);
        this.addControl('slider', 'Branch Ratio', { min: 0.5, max: 0.8, step: 0.01, value: 0.67 }, v => this.branchRatio = v);
    }

    update() {
        // Static drawing mostly, but we can animate wind or growth here if we want
        // For now just static refresh on param change
        this.updateData(`Angle: ${this.angle}°\nBranch Ratio: ${this.branchRatio}`);
    }

    draw() {
        this.ctx.strokeStyle = '#fff';
        this.ctx.translate(this.width / 2, this.height);
        this.branch(150, this.depth);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset Identity
    }

    branch(len, depth) {
        this.ctx.lineWidth = depth;
        this.ctx.strokeStyle = depth > 4 ? '#5D4037' : '#4CAF50';
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -len);
        this.ctx.stroke();

        this.ctx.translate(0, -len);

        if (depth > 0) {
            this.ctx.save();
            this.ctx.rotate(this.angle * Math.PI / 180);
            this.branch(len * this.branchRatio, depth - 1);
            this.ctx.restore();

            this.ctx.save();
            this.ctx.rotate(-this.angle * Math.PI / 180);
            this.branch(len * this.branchRatio, depth - 1);
            this.ctx.restore();
        }
    }

    reset() {
        this.angle = 25;
    }
};

// ==========================================
// 9. Fourier Series
// ==========================================
Simulations['fourier-series'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.time = 0;
        this.wave = [];
        this.n = 5; // number of circles
        this.waveType = 'square'; // square, saw

        this.addControl('slider', 'Iterations (N)', { min: 1, max: 20, step: 1, value: 5 }, v => { this.n = v; this.wave = []; });
        this.addControl('button', 'Square Wave', {}, () => { this.waveType = 'square'; this.wave = []; });
        this.addControl('button', 'Sawtooth Wave', {}, () => { this.waveType = 'saw'; this.wave = []; });
    }

    update() {
        this.time += 0.05;
        this.updateData(`Approximating: ${this.waveType.toUpperCase()} Wave\nCircles: ${this.n}`);
    }

    draw() {
        let x = 200;
        let y = this.height / 2;

        for (let i = 0; i < this.n; i++) {
            let prevx = x;
            let prevy = y;

            let n, radius;

            if (this.waveType === 'square') {
                n = i * 2 + 1; // 1, 3, 5...
                radius = 75 * (4 / (n * Math.PI));
            } else { // saw
                n = i + 1; // 1, 2, 3...
                radius = 75 * (2 / (n * Math.PI)) * (Math.pow(-1, n));
            }

            x += radius * Math.cos(n * this.time);
            y += radius * Math.sin(n * this.time);

            // Circle
            this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            this.ctx.beginPath();
            this.ctx.arc(prevx, prevy, Math.abs(radius), 0, Math.PI * 2);
            this.ctx.stroke();

            // Radius line
            this.ctx.strokeStyle = '#333';
            this.ctx.beginPath();
            this.ctx.moveTo(prevx, prevy);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }

        // Horizontal connection
        this.wave.unshift(y);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(450, y);
        this.ctx.strokeStyle = '#999';
        this.ctx.setLineDash([5, 5]);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Wave
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#E91E63';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < this.wave.length; i++) {
            this.ctx.lineTo(i + 450, this.wave[i]);
        }
        this.ctx.stroke();

        if (this.wave.length > 500) {
            this.wave.pop();
        }
    }

    reset() {
        this.wave = [];
        this.time = 0;
    }
};

// ==========================================
// 10. Conic Sections
// ==========================================
Simulations['conic-sections'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.e = 0.5; // Eccentricity
        this.p = 100; // Distance from focus to directrix

        this.addControl('slider', 'Eccentricity (e)', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.e = v);
        this.addControl('slider', 'Parameter (p)', { min: 50, max: 200, step: 10, value: 100 }, v => this.p = v);
    }

    update() {
        let type = '';
        if (this.e === 0) type = 'Circle';
        else if (this.e < 1) type = 'Ellipse';
        else if (this.e === 1) type = 'Parabola';
        else type = 'Hyperbola';

        this.updateData(`Shape: ${type}\nEccentricity: ${this.e}\nParameter: ${this.p}`);
    }

    draw() {
        // Focus at center
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.ctx.translate(cx, cy);

        // Draw Focus
        this.ctx.fillStyle = 'red';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 4, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillText("F", 5, 5);

        // Draw Directrix: x = p/e (polar form related) 
        // Standard definition: r = (e * p) / (1 + e * cos(theta)) where focus is origin
        // Directrix is at x = p 

        this.ctx.strokeStyle = 'blue';
        this.ctx.beginPath();
        this.ctx.moveTo(this.p, -300);
        this.ctx.lineTo(this.p, 300);
        this.ctx.stroke();
        this.ctx.fillStyle = 'blue';
        this.ctx.fillText("Directrix", this.p + 5, -50);

        // Draw Curve
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        let first = true;
        for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
            const r = (this.e * this.p) / (1 + this.e * Math.cos(angle));

            // Avoid asymptotes
            if (r > 1000 || r < -1000) {
                first = true;
                continue;
            }

            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);

            if (first) {
                this.ctx.moveTo(x, y);
                first = false;
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    reset() {
        this.e = 0.5;
    }
};

// ==========================================
// 11. Population Growth
// ==========================================
Simulations['population-growth'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.population = [];
        this.time = 0;
        this.maxPopulation = 200;
        this.growthRate = 0.05;
        this.carryingCapacity = 100;
        this.hasPredators = false;

        this.predators = [];

        // Initial pop
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

    addAgents(count, type) {
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
        // Logistic Growth Logic (simplified via agent birth/death)
        if (Math.random() < this.growthRate && this.population.length < this.maxPopulation) {
            // Birth
            if (this.population.length < this.carryingCapacity) {
                this.addAgents(1, 'prey');
            } else {
                // Overcrowding death chance
                if (Math.random() < 0.1) this.population.pop();
            }
        }

        // Movement
        [...this.population, ...this.predators].forEach(a => {
            a.pos = a.pos.add(a.vel);
            if (a.pos.x < 0 || a.pos.x > this.width) a.vel.x *= -1;
            if (a.pos.y < 0 || a.pos.y > this.height) a.vel.y *= -1;
        });

        // Predation
        if (this.hasPredators) {
            for (let i = this.predators.length - 1; i >= 0; i--) {
                let fed = false;
                // Predator death if starving (simplified)
                if (Math.random() < 0.02) {
                    // this.predators.splice(i, 1); continue; 
                }

                for (let j = this.population.length - 1; j >= 0; j--) {
                    if (this.predators[i].pos.dist(this.population[j].pos) < 10) {
                        this.population.splice(j, 1);
                        fed = true;
                        // Reproduce predator
                        if (Math.random() < 0.3) this.addAgents(1, 'predator');
                        break;
                    }
                }

                // if (!fed && Math.random() < 0.01) this.predators.splice(i, 1); // Starve
            }

            // Predator decay if no food or just random death
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
};

// ==========================================
// 12. Wave Interference
// ==========================================
Simulations['wave-interference'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.time = 0;
        this.frequency = 0.2;
        this.sources = [new Vector2(this.width / 2, this.height / 2)];
        this.mode = 'single'; // single, double

        // Low res for performance
        this.res = 8;
        this.cols = Math.ceil(this.width / this.res);
        this.rows = Math.ceil(this.height / this.res);

        this.addControl('slider', 'Frequency', { min: 0.1, max: 0.5, step: 0.05, value: 0.2 }, v => this.frequency = v);
        this.addControl('button', 'Single Source', {}, () => {
            this.mode = 'single';
            this.sources = [new Vector2(this.width / 2, this.height / 2)];
        });
        this.addControl('button', 'Two Sources', {}, () => {
            this.mode = 'double';
            this.sources = [
                new Vector2(this.width / 2 - 100, this.height / 2),
                new Vector2(this.width / 2 + 100, this.height / 2)
            ];
        });
    }

    update() {
        this.time++;
        this.updateData(`Mode: ${this.mode}\nFrequency: ${this.frequency}`);
    }

    draw() {
        // Pixel manipulation is too slow for 60fps in JS without optimization/WebGL
        // So we draw simple rectangles

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const px = x * this.res;
                const py = y * this.res;

                let val = 0;
                for (let s of this.sources) {
                    const d = Math.sqrt((px - s.x) ** 2 + (py - s.y) ** 2);
                    val += Math.sin(d * 0.05 - this.time * this.frequency);
                }

                // Normalize roughly -2 to 2 -> 0 to 1
                const intensity = (val / this.sources.length + 1) / 2;

                const c = Math.floor(intensity * 255);
                // Blue color map
                this.ctx.fillStyle = `rgb(0, ${Math.floor(c * 0.8)}, ${c})`;
                this.ctx.fillRect(px, py, this.res, this.res);
            }
        }

        // Draw sources
        this.ctx.fillStyle = 'yellow';
        this.sources.forEach(s => {
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, 5, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    reset() {
        this.time = 0;
    }
};

// ==========================================
// 13. Balancing Equations
// ==========================================
Simulations['balancing-equations'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        // Simple equation: N2 + H2 -> NH3
        // Coefficients
        this.n2 = 1;
        this.h2 = 1;
        this.nh3 = 1;

        this.addControl('slider', 'N2', { min: 0, max: 5, step: 1, value: 1 }, v => this.n2 = v);
        this.addControl('slider', 'H2', { min: 0, max: 5, step: 1, value: 1 }, v => this.h2 = v);
        this.addControl('slider', 'NH3', { min: 0, max: 5, step: 1, value: 1 }, v => this.nh3 = v);
    }

    update() {
        const nLeft = this.n2 * 2;
        const hLeft = this.h2 * 2;
        const nRight = this.nh3 * 1;
        const hRight = this.nh3 * 3;

        const isBalanced = (nLeft === nRight) && (hLeft === hRight) && (this.n2 > 0 && this.h2 > 0 && this.nh3 > 0);

        this.updateData(
            `N: ${nLeft} vs ${nRight} | H: ${hLeft} vs ${hRight}\n` +
            (isBalanced ? "BALANCED! 🎉" : "Not Balanced")
        );
    }

    draw() {
        // Visualize molecules
        this.drawMolecules(this.n2, 200, 200, 'N2');
        this.drawMolecules(this.h2, 200, 350, 'H2');

        // Arrow
        this.ctx.fillStyle = '#333';
        this.ctx.font = '40px Arial';
        this.ctx.fillText("→", 380, 300);

        this.drawMolecules(this.nh3, 500, 275, 'NH3');
    }

    drawMolecules(count, x, y, type) {
        for (let i = 0; i < count; i++) {
            const offsetX = (i % 3) * 50;
            const offsetY = Math.floor(i / 3) * 50;
            const cx = x + offsetX;
            const cy = y + offsetY;

            if (type === 'N2') { // 2 blue
                this.drawAtom(cx - 10, cy, 'blue', 10);
                this.drawAtom(cx + 10, cy, 'blue', 10);
            } else if (type === 'H2') { // 2 white/gray
                this.drawAtom(cx - 8, cy, '#ccc', 8);
                this.drawAtom(cx + 8, cy, '#ccc', 8);
            } else if (type === 'NH3') { // 1 blue, 3 white
                this.drawAtom(cx, cy, 'blue', 12);
                this.drawAtom(cx - 10, cy + 10, '#ccc', 8);
                this.drawAtom(cx + 10, cy + 10, '#ccc', 8);
                this.drawAtom(cx, cy - 12, '#ccc', 8);
            }
        }

        this.ctx.fillStyle = '#000';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`${count} ${type}`, x, y + 80);
    }

    drawAtom(x, y, color, r) {
        this.drawSphere(x, y, r, color);
    }

    reset() {
        this.n2 = 1; this.h2 = 1; this.nh3 = 1;
    }
};

// ==========================================
// 14. Molarity
// ==========================================
Simulations['molarity'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.solute = 0.5; // moles
        this.vol = 0.5; // liters

        this.addControl('slider', 'Solute (mol)', { min: 0.1, max: 2, step: 0.1, value: 0.5 }, v => this.solute = v);
        this.addControl('slider', 'Volume (L)', { min: 0.2, max: 1, step: 0.1, value: 0.5 }, v => this.vol = v);
    }

    update() {
        const molarity = this.solute / this.vol;
        this.updateData(`Molarity: ${molarity.toFixed(2)} M (mol/L)\nColor saturation increases with concentration.`);
        this.opacity = Math.min(1, molarity / 2); // Max color at 2M
    }

    draw() {
        // Beaker
        const bx = 300, by = 450, w = 200, h = 350;
        const liquidH = h * this.vol;

        // Liquid
        this.ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
        this.ctx.fillRect(bx, by - liquidH, w, liquidH);

        // Outline
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(bx, by - h, w, h); // Simplified rect beaker

        // Fill text water
        this.ctx.fillStyle = '#333';
        this.ctx.fillText(`${this.vol.toFixed(1)} L`, bx + w + 10, by - liquidH);

        // Particles (visual flair)
        const particles = Math.floor(this.solute * 20);
        this.ctx.fillStyle = 'white';
        for (let i = 0; i < particles; i++) {
            // Pseudorandom static positions based on i
            const px = bx + 10 + Math.abs(Math.sin(i * 123)) * (w - 20);
            const py = by - 10 - Math.abs(Math.cos(i * 321)) * (liquidH - 20);
            if (py > by - liquidH) {
                this.drawSphere(px, py, 2, 'white');
            }
        }
    }
};

// ==========================================
// 15. Isotopes & Atomic Mass
// ==========================================
Simulations['isotopes'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.protons = 6; // Carbon
        this.neutrons = 6;
        this.abundance = { 12: 99, 13: 1, 14: 0 }; // Approx natural

        this.addControl('button', 'Add Neutron', {}, () => this.neutrons++);
        this.addControl('button', 'Remove Neutron', {}, () => { if (this.neutrons > 0) this.neutrons--; });
    }

    update() {
        const mass = this.protons + this.neutrons;
        let name = "Carbon";
        let stable = "Stable";

        if (this.neutrons < 5 || this.neutrons > 8) stable = "Unstable";

        this.updateData(`Mass Number: ${mass}\nStatus: ${stable}\nElement: ${name}`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        // Nucleus
        for (let i = 0; i < this.protons; i++) {
            const angle = (i / this.protons) * Math.PI * 2;
            this.drawParticle(cx + Math.cos(angle) * 15, cy + Math.sin(angle) * 15, 'red', 'P');
        }
        for (let i = 0; i < this.neutrons; i++) {
            // Offset phase
            const angle = (i / this.neutrons) * Math.PI * 2 + 1;
            this.drawParticle(cx + Math.cos(angle) * 15, cy + Math.sin(angle) * 15, 'gray', 'N');
        }

        // Electrons (cloud)
        this.ctx.strokeStyle = 'rgba(0,0,255,0.3)';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 100, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    drawParticle(x, y, color, label) {
        this.drawSphere(x, y, 10, color);
        this.ctx.fillStyle = 'white';
        this.ctx.font = '10px Arial';
        this.ctx.fillText(label, x - 3, y + 3);
    }
};

// ==========================================
// 16. Build an Atom
// ==========================================
Simulations['build-an-atom'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.p = 1; // H
        this.n = 0;
        this.e = 1;

        this.addControl('slider', 'Protons', { min: 1, max: 10, step: 1, value: 1 }, v => this.p = v);
        this.addControl('slider', 'Neutrons', { min: 0, max: 12, step: 1, value: 0 }, v => this.n = v);
        this.addControl('slider', 'Electrons', { min: 0, max: 10, step: 1, value: 1 }, v => this.e = v);
    }

    update() {
        const elements = ["", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"];
        const el = elements[this.p] || "Unknown";
        const charge = this.p - this.e;
        const mass = this.p + this.n;

        const ion = charge === 0 ? "Neutral Atom" : (charge > 0 ? `+${charge} Ion` : `${charge} Ion`);

        this.updateData(`Element: ${el}\nNet Charge: ${charge}\nMass Number: ${mass}\nType: ${ion}`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        // Nucleus
        const totalNuc = this.p + this.n;
        for (let i = 0; i < totalNuc; i++) {
            const r = Math.sqrt(i) * 8;
            const a = i * 2.4;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;
            // First P are red, then N gray... simplistic
            const color = i < this.p ? 'red' : 'gray';
            this.drawSphere(x, y, 8, color);
        }

        // Electron Shells (Bohr model)
        const shells = [2, 8, 18];
        let eRem = this.e;

        shells.forEach((cap, idx) => {
            if (eRem <= 0) return;
            const count = Math.min(eRem, cap);
            eRem -= count;

            const radius = 60 + idx * 40;
            this.ctx.strokeStyle = '#aaa';
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            this.ctx.stroke();

            for (let i = 0; i < count; i++) {
                const a = (Math.PI * 2 * i) / count;
                this.drawSphere(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius, 5, 'blue');
            }
        });
    }
};

// ==========================================
// 17. States of Matter
// ==========================================
Simulations['states-of-matter'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.temp = 50; // Kelvin-ish
        this.particles = [];
        for (let i = 0; i < 40; i++) {
            this.particles.push({
                pos: new Vector2(Math.random() * 400 + 200, Math.random() * 300 + 200),
                vel: new Vector2(0, 0),
                color: 'purple'
            });
        }

        this.addControl('slider', 'Temperature (Heat)', { min: 10, max: 300, step: 1, value: 50 }, v => this.temp = v);
        this.addControl('button', 'Solid (Neon)', {}, () => this.temp = 20);
        this.addControl('button', 'Liquid', {}, () => this.temp = 100);
        this.addControl('button', 'Gas', {}, () => this.temp = 250);
    }

    update() {
        let interactionRange = 0;
        let attraction = 0;

        // Mock physics for phases
        if (this.temp < 50) { // Solid
            attraction = 0.5;
            interactionRange = 25;
        } else if (this.temp < 150) { // Liquid
            attraction = 0.05;
            interactionRange = 30;
        } else { // Gas
            attraction = 0;
        }

        const speed = this.temp * 0.02;

        // Simple Lennard-Jones-ish forces + Brownian
        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];

            // Thermal jitter
            p1.vel.x += (Math.random() - 0.5) * speed;
            p1.vel.y += (Math.random() - 0.5) * speed;
            p1.vel = p1.vel.mult(0.9); // damping

            // Gravity
            if (this.temp < 150) p1.vel.y += 0.2;

            // Inter-particle
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dist = p1.pos.dist(p2.pos);
                if (dist < 20) { // Repulse
                    const force = p1.pos.sub(p2.pos).normalize().mult(1);
                    p1.vel = p1.vel.add(force);
                    p2.vel = p2.vel.sub(force);
                } else if (dist < interactionRange) { // Attract
                    const force = p2.pos.sub(p1.pos).normalize().mult(attraction);
                    p1.vel = p1.vel.add(force);
                    p2.vel = p2.vel.sub(force);
                }
            }

            // Bounds (Container)
            p1.pos = p1.pos.add(p1.vel);
            if (p1.pos.x < 200) { p1.pos.x = 200; p1.vel.x *= -1; }
            if (p1.pos.x > 600) { p1.pos.x = 600; p1.vel.x *= -1; }
            if (p1.pos.y > 500) { p1.pos.y = 500; p1.vel.y *= -1; }
            if (p1.pos.y < 100) { p1.pos.y = 100; p1.vel.y *= -1; }
        }

        let phase = "Solid";
        if (this.temp > 80) phase = "Liquid";
        if (this.temp > 200) phase = "Gas";

        this.updateData(`Temperature: ${this.temp} K\nPhase: ${phase}`);
    }

    draw() {
        // Container
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 4;
        this.ctx.strokeRect(200, 100, 400, 400);

        // Particles
        this.particles.forEach(p => {
            this.drawSphere(p.pos.x, p.pos.y, 8, p.color);
        });

        // Thermometer
        this.ctx.fillStyle = '#eee';
        this.ctx.fillRect(50, 100, 30, 400);
        const h = Math.min(400, this.temp);
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(55, 100 + (400 - h), 20, h);
    }
};

// ==========================================
// 18. Concentration
// ==========================================
Simulations['concentration'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.soluteAmount = 0.5;
        this.volume = 0.5;
        this.sourceIntensity = 1.0;

        this.addControl('slider', 'Solute Amount', { min: 0, max: 2, step: 0.1, value: 0.5 }, v => this.soluteAmount = v);
        this.addControl('slider', 'Solution Vol', { min: 0.2, max: 1.0, step: 0.1, value: 0.5 }, v => this.volume = v);
    }

    update() {
        const concentration = this.soluteAmount / this.volume;
        // Beer's Law: A = ebc. Transmittance T = 10^-A
        // Simulating absorption
        const absorbance = concentration * 0.5;
        const transmittance = Math.pow(10, -absorbance);

        this.updateData(`Concentration: ${concentration.toFixed(2)} mol/L\nTransmittance: ${(transmittance * 100).toFixed(1)}%\nAbsorbance: ${absorbance.toFixed(2)}`);
    }

    draw() {
        const bx = 350, by = 400, w = 100, h = 200;

        // Light Source
        this.ctx.fillStyle = '#FB8C00';
        this.ctx.beginPath();
        this.ctx.moveTo(100, 300);
        this.ctx.lineTo(150, 270);
        this.ctx.lineTo(150, 330);
        this.ctx.fill();

        // Beam entering
        this.ctx.fillStyle = `rgba(255, 0, 0, 1)`; // Pure red light
        this.ctx.fillRect(150, 290, 200, 20); // to beaker

        // Beaker Liquid
        const cVal = Math.min(1, (this.soluteAmount / this.volume) / 2);
        this.ctx.fillStyle = `rgba(200, 0, 0, ${cVal})`;
        this.ctx.fillRect(bx, by - h, w, h);
        this.ctx.strokeStyle = '#333';
        this.ctx.strokeRect(bx, by - h, w, h);

        // Beam in liquid (attenuating visually?)
        // Hard to see inside opaque liquid, so we show beam exiting

        // Beam exiting
        const trans = Math.pow(10, -(this.soluteAmount / this.volume * 0.5));
        this.ctx.fillStyle = `rgba(255, 0, 0, ${trans})`;
        this.ctx.fillRect(bx + w, 290, 150, 20);

        // Detector
        this.ctx.fillStyle = '#555';
        this.ctx.fillRect(bx + w + 150, 270, 40, 60);
        this.ctx.fillStyle = '#000';
        this.ctx.fillText(`${(trans * 100).toFixed(0)}%`, bx + w + 155, 305);
    }
};

// ==========================================
// 19. Acid-Base Solutions
// ==========================================
Simulations['acid-base-solutions'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.type = 'weak-acid'; // strong-acid, weak-acid, strong-base, weak-base
        this.molecules = [];
        this.initMolecules();

        this.addControl('button', 'Strong Acid', {}, () => { this.type = 'strong-acid'; this.initMolecules(); });
        this.addControl('button', 'Weak Acid', {}, () => { this.type = 'weak-acid'; this.initMolecules(); });
        this.addControl('button', 'Strong Base', {}, () => { this.type = 'strong-base'; this.initMolecules(); });
        // this.addControl('button', 'Weak Base', {}, () => { this.type='weak-base'; this.initMolecules(); });
    }

    initMolecules() {
        this.molecules = [];
        for (let i = 0; i < 30; i++) {
            this.molecules.push({
                pos: new Vector2(Math.random() * 400 + 200, Math.random() * 250 + 250), // in beaker
                angle: Math.random() * Math.PI * 2,
                dissociated: false
            });
        }
    }

    update() {
        // Probabilistic dissociation
        let dissProb = 0;
        if (this.type === 'strong-acid' || this.type === 'strong-base') dissProb = 1.0;
        else dissProb = 0.2; // Weak

        let ions = 0;
        this.molecules.forEach(m => {
            // Simplified: static state based on probability, but lets jitter
            if (Math.random() < 0.05) { // Change state?
                // m.dissociated = Math.random() < dissProb; 
                // Actually keep strong always dissociated
                if (dissProb === 1) m.dissociated = true;
                else m.dissociated = (Math.random() < 0.2); // dynamic equilibrium for weak
            }
            if (m.dissociated) ions++;

            // Jitter
            m.pos.x += Math.random() - 0.5;
            m.pos.y += Math.random() - 0.5;
        });

        let label = "";
        if (this.type.includes("acid")) label = (ions > 25) ? "Low pH (Acidic)" : "Medium pH";
        else label = (ions > 25) ? "High pH (Basic)" : "Medium pH";

        this.updateData(`Type: ${this.type}\nDissociated Ions: ${ions}/${this.molecules.length}\nConductivity: ${ions > 20 ? 'High (Bulb Bright)' : 'Low (Bulb Dim)'}`);
        this.ions = ions;
    }

    draw() {
        // Beaker
        this.ctx.fillStyle = '#E3F2FD';
        this.ctx.fillRect(200, 250, 400, 250);
        this.ctx.strokeRect(200, 250, 400, 250);

        // Molecules
        this.molecules.forEach(m => {
            if (!m.dissociated) {
                // Combined HA or BOH
                this.drawSphere(m.pos.x, m.pos.y, 8, '#555');
                this.drawSphere(m.pos.x + 10, m.pos.y, 6, '#999');
            } else {
                // Separated H+ A- or B+ OH-
                // Cation
                this.drawSphere(m.pos.x - 10, m.pos.y - 5, 6, 'red');
                this.ctx.fillStyle = 'white';
                this.ctx.fillText("+", m.pos.x - 13, m.pos.y);

                // Anion
                this.drawSphere(m.pos.x + 10, m.pos.y + 5, 8, 'blue');
                this.ctx.fillStyle = 'white';
                this.ctx.fillText("-", m.pos.x + 7, m.pos.y + 10);
            }
        });

        // Lightbulb circuit (conductivity)
        this.ctx.strokeStyle = '#333';
        this.ctx.beginPath();
        // Electrodes
        this.ctx.moveTo(300, 250); this.ctx.lineTo(300, 400);
        this.ctx.moveTo(500, 250); this.ctx.lineTo(500, 400);
        // Wire to bulb
        this.ctx.moveTo(300, 250); this.ctx.lineTo(300, 100); this.ctx.lineTo(380, 100);
        this.ctx.moveTo(500, 250); this.ctx.lineTo(500, 100); this.ctx.lineTo(420, 100);
        this.ctx.stroke();

        // Bulb
        const intensity = this.ions / 30; // 0 to 1
        this.ctx.fillStyle = `rgba(255, 255, 0, ${0.2 + intensity * 0.8})`;
        this.ctx.beginPath();
        this.ctx.arc(400, 100, 30, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Rays
        if (intensity > 0.5) {
            this.ctx.strokeStyle = 'orange';
            this.ctx.beginPath();
            for (let i = 0; i < 8; i++) {
                const a = i * Math.PI / 4;
                this.ctx.moveTo(400 + Math.cos(a) * 40, 100 + Math.sin(a) * 40);
                this.ctx.lineTo(400 + Math.cos(a) * 60, 100 + Math.sin(a) * 60);
            }
            this.ctx.stroke();
        }
    }
};

// ==========================================
// 20. Reactants Products & Leftovers
// ==========================================
Simulations['reactants-products'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        // Sandwich Making: Bread + Cheese + Meat -> Sandwich
        // Using chemicals? Let's use 2H2 + O2 -> 2H2O

        this.h2 = 2;
        this.o2 = 1;

        this.addControl('slider', 'H2 Amount', { min: 0, max: 10, step: 1, value: 2 }, v => this.h2 = v);
        this.addControl('slider', 'O2 Amount', { min: 0, max: 10, step: 1, value: 1 }, v => this.o2 = v);
    }

    update() {
        // Reaction: 2 H2 + 1 O2 -> 2 H2O
        // Limiting reagent logic

        const possibleReactions = Math.min(Math.floor(this.h2 / 2), Math.floor(this.o2 / 1));
        const waterProduced = possibleReactions * 2;

        const h2Left = this.h2 - (possibleReactions * 2);
        const o2Left = this.o2 - (possibleReactions * 1);

        this.products = { water: waterProduced, h2: h2Left, o2: o2Left };

        this.updateData(`Reaction: 2 H2 + O2 → 2 H2O\n\nMade: ${waterProduced} Water\nLeftover: ${h2Left} H2, ${o2Left} O2`);
    }

    draw() {
        this.ctx.fillStyle = '#333';
        this.ctx.font = '20px Arial';

        // Before
        this.ctx.fillText("Reactants (Start)", 100, 100);
        this.drawRow(this.h2, 100, 150, 'H2');
        this.drawRow(this.o2, 100, 250, 'O2');

        // Arrow
        this.ctx.font = '40px Arial';
        this.ctx.fillText("→", 380, 200);

        // After
        this.ctx.font = '20px Arial';
        this.ctx.fillText("Products & Leftovers", 500, 100);
        this.drawRow(this.products.water, 500, 150, 'H2O');

        this.ctx.fillText("Leftovers:", 500, 250);
        this.drawRow(this.products.h2, 500, 300, 'H2');
        this.drawRow(this.products.o2, 650, 300, 'O2');
    }

    drawRow(count, x, y, type) {
        for (let i = 0; i < count; i++) {
            const cx = x + (i % 5) * 40;
            const cy = y + Math.floor(i / 5) * 40;

            if (type === 'H2') {
                this.drawSphere(cx - 5, cy, 5, '#aaa');
                this.drawSphere(cx + 5, cy, 5, '#aaa');
            } else if (type === 'O2') {
                this.drawSphere(cx - 6, cy, 6, 'red');
                this.drawSphere(cx + 6, cy, 6, 'red');
            } else if (type === 'H2O') {
                this.drawSphere(cx, cy, 6, 'red');
                this.drawSphere(cx - 6, cy + 5, 4, '#aaa');
                this.drawSphere(cx + 6, cy + 5, 4, '#aaa');
            }
        }
    }
};

// ==========================================
// 21. Molecular Shapes (VSEPR)
// ==========================================
// Simplified 3D projection
Simulations['molecular-shapes'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.bonds = 2; // Number of atoms bonded to central
        this.lonePairs = 0;

        this.addControl('slider', 'Bonded Atoms', { min: 1, max: 6, step: 1, value: 2 }, v => this.bonds = v);
        this.addControl('slider', 'Lone Pairs', { min: 0, max: 2, step: 1, value: 0 }, v => this.lonePairs = v);

        this.angleX = 0;
        this.angleY = 0;
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

        // Generate positions based on VSEPR geometry (idealized points on sphere)
        const points = this.getGeometryPoints(this.bonds + this.lonePairs);

        // Sort by Z for depth
        const projected = points.map((p, i) => {
            // Rotate
            let x = p.x * Math.cos(this.angleY) - p.z * Math.sin(this.angleY);
            let z = p.x * Math.sin(this.angleY) + p.z * Math.cos(this.angleY);
            // x, y, z
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

    getGeometryPoints(n) {
        // Idealized coords on unit sphere
        if (n === 2) return [{ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 }];
        if (n === 3) return [{ x: 0, y: -1, z: 0 }, { x: 0.866, y: 0.5, z: 0 }, { x: -0.866, y: 0.5, z: 0 }]; // 120 deg
        if (n === 4) return [ // Tetrahedral
            { x: 0, y: -1, z: 0 },
            { x: 0.94, y: 0.33, z: 0 },
            { x: -0.47, y: 0.33, z: 0.81 },
            { x: -0.47, y: 0.33, z: -0.81 }
        ];
        // Fallback for >4 simple circle
        const pts = [];
        for (let i = 0; i < n; i++) {
            const a = (i / n) * Math.PI * 2;
            pts.push({ x: Math.cos(a), y: Math.sin(a), z: 0 });
        }
        return pts;
    }
};

// ==========================================
// 22. Radioactive Dating
// ==========================================
Simulations['radioactive-dating'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.halfLife = 5730; // C-14
        this.time = 0;
        this.atoms = 1000;
        this.decayed = 0;

        this.addControl('slider', 'Year', { min: 0, max: 30000, step: 100, value: 0 }, v => this.time = v);
        this.addControl('button', 'Carbon-14 (5730y)', {}, () => this.halfLife = 5730);
        this.addControl('button', 'Uranium-238 (4.5By)', {}, () => this.halfLife = 4500000000);
    }

    update() {
        // N = N0 * (1/2)^(t/hl)
        const remaining = this.atoms * Math.pow(0.5, this.time / this.halfLife);
        const percentage = (remaining / this.atoms) * 100;

        this.updateData(`Time: ${this.time} years\nHalf-Life: ${this.halfLife} years\nRemaining: ${percentage.toFixed(1)}%`);
        this.remainingPct = percentage;
    }

    draw() {
        // Graph
        const gx = 100, gy = 400, gw = 600, gh = 300;

        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx + gw, gy); // x
        this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx, gy - gh); // y
        this.ctx.stroke();

        this.ctx.fillText("100%", gx - 30, gy - gh);
        this.ctx.fillText("0%", gx - 30, gy);

        // Decay curve
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        for (let t = 0; t <= 30000; t += 100) {
            const x = gx + (t / 30000) * gw;
            const pct = Math.pow(0.5, t / this.halfLife);
            const y = gy - pct * gh;
            if (t === 0) this.ctx.moveTo(x, y);
            else this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();

        // Current point
        const cx = gx + (this.time / 30000) * gw;
        const cy = gy - (this.remainingPct / 100) * gh;

        this.drawSphere(cx, cy, 6, 'blue');

        // Visual atoms
        // Draw grid of atoms, red is C14, blue is N14 (decayed)
        const startX = 100, startY = 50;
        const totalRows = 20;
        const totalCols = 50;
        const numRed = Math.floor(this.remainingPct / 100 * 1000);

        for (let i = 0; i < 1000; i++) {
            const r = Math.floor(i / totalCols);
            const c = i % totalCols;
            this.ctx.fillStyle = (i < numRed) ? 'red' : 'blue';
            this.ctx.fillRect(startX + c * 4, startY + r * 4, 3, 3);
        }
    }

    reset() {
        this.time = 0;
    }
};

// ==========================================
// 23. Ionic vs Covalent Bonding
// ==========================================
Simulations['ionic-covalent'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.type = 'ionic'; // ionic or covalent

        this.addControl('button', 'Ionic (NaCl)', {}, () => this.type = 'ionic');
        this.addControl('button', 'Covalent (H2)', {}, () => this.type = 'covalent');

        this.frame = 0;
    }

    update() {
        this.frame++;
        this.updateData(`Bond Type: ${this.type === 'ionic' ? 'Ionic (Transfer)' : 'Covalent (Sharing)'}\nElectrons are ${this.type === 'ionic' ? 'transferred' : 'shared'}.`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        if (this.type === 'ionic') {
            // Na + Cl -> Na+ Cl-
            this.drawAtom(cx - 60, cy, 'orange', 40, 'Na');
            this.drawAtom(cx + 60, cy, 'green', 50, 'Cl');

            // Electron transfer animation
            const progress = (Math.sin(this.frame * 0.05) + 1) / 2; // 0 to 1
            const ex = cx - 60 + 40 + progress * 80;
            const ey = cy;

            if (progress > 0.9) {
                // Transferred
                this.ctx.fillStyle = 'black'; this.ctx.fillText("+", cx - 60, cy - 50);
                this.ctx.fillText("-", cx + 60, cy - 60);
            }

            this.ctx.fillStyle = 'blue';
            this.ctx.beginPath(); this.ctx.arc(ex, ey, 5, 0, Math.PI * 2); this.ctx.fill();

        } else {
            // H - H
            this.drawAtom(cx - 30, cy, '#ccc', 30, 'H');
            this.drawAtom(cx + 30, cy, '#ccc', 30, 'H');

            // Shared electrons orbiting both
            const t = this.frame * 0.1;
            // Figure 8 orbit
            const ex1 = cx + Math.cos(t) * 50;
            const ey1 = cy + Math.sin(t) * 20; // Ellipse

            // Just circle around varying center? simpler: figure 8
            const ex = cx + Math.cos(t) * 40;
            const ey = cy + Math.sin(2 * t) * 20;

            this.ctx.fillStyle = 'blue';
            this.ctx.beginPath(); this.ctx.arc(ex, ey, 5, 0, Math.PI * 2); this.ctx.fill();
            this.ctx.beginPath(); this.ctx.arc(cx - Math.cos(t) * 40, cy - Math.sin(2 * t) * 20, 5, 0, Math.PI * 2); this.ctx.fill();
        }
    }

    drawAtom(x, y, color, r, label) {
        this.drawSphere(x, y, r, color);
        this.ctx.fillStyle = 'white';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(label, x - 10, y + 5);
    }
};

// ==========================================
// 24. Solubility
// ==========================================
Simulations['solubility'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.solute = 0;
        this.maxSolubility = 50; // particles
        this.precipitate = 0;

        this.addControl('button', 'Add Spoonful', {}, () => {
            this.solute += 10;
            if (this.solute > this.maxSolubility) {
                this.precipitate += (this.solute - this.maxSolubility);
                this.solute = this.maxSolubility;
            }
        });
        this.addControl('button', 'Reset', {}, () => { this.solute = 0; this.precipitate = 0; });
    }

    update() {
        this.updateData(`Dissolved: ${this.solute}\nPrecipitate: ${this.precipitate}\nStatus: ${this.precipitate > 0 ? 'Saturated' : 'Unsaturated'}`);
    }

    draw() {
        // Beaker
        this.ctx.fillStyle = '#E3F2FD';
        this.ctx.fillRect(250, 200, 300, 300);
        this.ctx.strokeStyle = '#333';
        this.ctx.strokeRect(250, 200, 300, 300);

        // Dissolved particles (random movement)
        this.ctx.fillStyle = 'purple';
        for (let i = 0; i < this.solute; i++) {
            // visual hash
            const x = 260 + (i * 123) % 280;
            const y = 220 + (i * 321) % 260;
            this.ctx.beginPath(); this.ctx.arc(x, y, 3, 0, Math.PI * 2); this.ctx.fill();
        }

        // Precipitate (at bottom)
        this.ctx.fillStyle = '#4A148C';
        for (let i = 0; i < this.precipitate; i++) {
            const x = 260 + (i * 77) % 280;
            const y = 480 + (i % 5) * 3;
            this.ctx.beginPath(); this.ctx.arc(x, y, 4, 0, Math.PI * 2); this.ctx.fill();
        }
    }
};

// ==========================================
// 25. Reaction Rates
// ==========================================
Simulations['reaction-rates'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.temp = 300;
        this.particles = [];
        this.products = 0;

        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: Math.random() * 400 + 200, y: Math.random() * 300 + 100,
                vx: Math.random() - 0.5, vy: Math.random() - 0.5,
                type: 'A'
            });
        }

        this.addControl('slider', 'Temperature', { min: 100, max: 1000, step: 10, value: 300 }, v => this.temp = v);
        this.addControl('button', 'Reset', {}, () => { this.products = 0; this.particles.forEach(p => p.type = 'A'); });
    }

    update() {
        const speed = this.temp * 0.005;
        // Move
        this.particles.forEach(p => {
            p.x += p.vx * speed;
            p.y += p.vy * speed;

            // Bounce
            if (p.x < 200 || p.x > 600) p.vx *= -1;
            if (p.y < 100 || p.y > 400) p.vy *= -1;
        });

        // Collide
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                if (dist < 10) {
                    // Reaction chance based on temp/energy
                    if (p1.type === 'A' && p2.type === 'A' && Math.random() < (this.temp / 2000)) {
                        p1.type = 'B'; p2.type = 'B';
                        this.products += 2;
                    }
                }
            }
        }

        this.updateData(`Temp: ${this.temp}K\nProducts Found: ${this.products}`);
    }

    draw() {
        this.ctx.strokeRect(200, 100, 400, 300);
        this.particles.forEach(p => {
            this.drawSphere(p.x, p.y, 5, p.type === 'A' ? 'red' : 'blue');
        });

        // Key
        this.ctx.fillStyle = 'red'; this.ctx.fillText("Reactant (A)", 200, 430);
        this.ctx.fillStyle = 'blue'; this.ctx.fillText("Product (B)", 350, 430);
    }
};

// ==========================================
// 26. Redox Reactions
// ==========================================
Simulations['redox'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        // Zn(s) + Cu2+(aq) -> Zn2+(aq) + Cu(s)
        this.progress = 0;
        this.running = false;

        this.addControl('button', 'Start', {}, () => this.running = true);
        this.addControl('button', 'Reset', {}, () => { this.progress = 0; this.running = false; });
    }

    update() {
        if (this.running && this.progress < 100) this.progress += 0.5;

        this.updateData(`Reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\nProgress: ${this.progress.toFixed(0)}%\nElectrons transferred from Zn to Cu²⁺`);
    }

    draw() {
        // Beaker
        this.ctx.fillStyle = `rgb(200, 200, ${255 - this.progress * 2})`; // Blue fades to clear
        this.ctx.fillRect(300, 200, 200, 250);
        this.ctx.strokeRect(300, 200, 200, 250);

        // Zinc Stick
        this.ctx.fillStyle = 'gray';
        this.ctx.fillRect(350, 150, 30, 200); // Erodes?
        // Overlay decay
        if (this.progress > 0) {
            this.ctx.fillStyle = '#333';
            for (let i = 0; i < this.progress; i++) {
                this.ctx.fillRect(350 + Math.random() * 30, 150 + Math.random() * 200, 2, 2);
            }
        }

        // Copper depositing
        if (this.progress > 0) {
            this.ctx.fillStyle = '#B87333'; // Copper
            this.ctx.fillRect(345, 150, 5, 200 * (this.progress / 100)); // Coating
            this.ctx.fillRect(380, 150, 5, 200 * (this.progress / 100));
            // Sediment
            this.ctx.fillRect(320, 440, 160, this.progress / 5);
        }
    }
};

// ==========================================
// 27. Titration
// ==========================================
Simulations['titration'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.addedBase = 0;
        this.ph = 1;

        this.addControl('slider', 'Add Base (mL)', { min: 0, max: 50, step: 0.1, value: 0 }, v => this.addedBase = v);
    }

    update() {
        // Sigmoid curve around 25mL
        // pH = 7 + log10(...) roughly
        let ph = 1;
        if (this.addedBase < 24) ph = 1 + (this.addedBase * 0.1);
        else if (this.addedBase > 26) ph = 12 + (this.addedBase - 50) * 0.05;
        else ph = 7; // Instantly jumps in simple sim

        // Better curve function
        ph = 1 + 12 / (1 + Math.exp(-(this.addedBase - 25) * 2));

        this.ph = ph;

        let color = 'clear';
        if (ph > 8) color = 'pink'; // Phenolphthalein

        this.updateData(`Added Base: ${this.addedBase.toFixed(1)} mL\npH: ${this.ph.toFixed(2)}\nIndicator: Phenolphthalein (${color})`);
        this.bg = color === 'pink' ? 'rgba(255, 192, 203, 0.5)' : 'rgba(255,255,255,0.1)';
    }

    draw() {
        // Burette
        this.ctx.strokeStyle = '#333';
        this.ctx.strokeRect(390, 50, 20, 200);
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(391, 51 + (this.addedBase * 2), 18, 198 - (this.addedBase * 2)); // Liquid drops

        // Flask
        this.ctx.fillStyle = this.bg;
        this.ctx.beginPath();
        this.ctx.moveTo(380, 260);
        this.ctx.lineTo(350, 400);
        this.ctx.lineTo(450, 400);
        this.ctx.lineTo(420, 260);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Drop
        if (this.addedBase > 0 && Math.random() > 0.5) {
            this.drawSphere(400, 255, 3, 'white');
        }

        // Graph (mini)
        this.ctx.strokeRect(50, 100, 200, 200);
        this.ctx.strokeStyle = 'red';
        this.ctx.beginPath();
        for (let x = 0; x <= 50; x++) {
            const cx = 50 + x * 4;
            const cph = 1 + 12 / (1 + Math.exp(-(x - 25) * 2));
            const cy = 300 - (cph / 14) * 200;
            if (x === 0) this.ctx.moveTo(cx, cy); else this.ctx.lineTo(cx, cy);
        }
        this.ctx.stroke();

        // Current point
        const px = 50 + this.addedBase * 4;
        const py = 300 - (this.ph / 14) * 200;
        this.ctx.fillStyle = 'blue';
        this.ctx.beginPath(); this.ctx.arc(px, py, 4, 0, Math.PI * 2); this.ctx.fill();
    }
};

// ==========================================
// 28. Electrolysis (Splitting Water)
// ==========================================
Simulations['electrolysis'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.voltage = 0;
        this.h2 = 0;
        this.o2 = 0;
        this.running = false;

        this.addControl('slider', 'Voltage (V)', { min: 0, max: 12, step: 1, value: 0 }, v => {
            this.voltage = v;
            this.running = (v > 1.23); // Min voltage for water
        });
    }

    update() {
        if (this.running && this.voltage > 1.23) {
            // Speed prop to voltage
            const speed = (this.voltage - 1.23) * 0.1;
            this.h2 += speed * 2;
            this.o2 += speed * 1;
        }

        this.updateData(`Voltage: ${this.voltage}V\nStatus: ${this.running ? 'Electrolysis Active' : 'Insufficient Voltage'}\nGas Produced: H2 (${this.h2.toFixed(1)}) : O2 (${this.o2.toFixed(1)})`);
    }

    draw() {
        // Beaker
        this.ctx.fillStyle = '#E3F2FD';
        this.ctx.fillRect(250, 200, 300, 300);
        this.ctx.strokeStyle = '#333';
        this.ctx.strokeRect(250, 200, 300, 300);

        // Electrodes
        this.ctx.fillStyle = '#555';
        this.ctx.fillRect(300, 150, 20, 300); // Cathode (-)
        this.ctx.fillRect(480, 150, 20, 300); // Anode (+)

        // Bubbles
        if (this.running) {
            // Cathode H2 (more bubbles)
            this.ctx.fillStyle = '#FFF';
            for (let i = 0; i < 10; i++) {
                if (Math.random() < 0.3) {
                    this.drawSphere(310 + Math.random() * 20 - 10, 450 - Math.random() * 200, 3, 'white');
                }
            }
            // Anode O2 (fewer bubbles)
            for (let i = 0; i < 5; i++) {
                if (Math.random() < 0.3) {
                    this.drawSphere(490 + Math.random() * 20 - 10, 450 - Math.random() * 200, 3, 'white');
                }
            }
        }

        // Test tubes over electrodes? 
        this.ctx.strokeStyle = '#aaa';
        this.ctx.lineWidth = 2;
        // Left
        this.ctx.strokeRect(290, 100, 40, 350);
        const h2H = Math.min(350, this.h2);
        this.ctx.fillStyle = 'rgba(255,255,255,0.8)';
        this.ctx.fillRect(290, 100, 40, h2H);

        // Right
        this.ctx.strokeRect(470, 100, 40, 350);
        const o2H = Math.min(350, this.o2);
        this.ctx.fillRect(470, 100, 40, o2H);

        this.ctx.fillStyle = 'black';
        this.ctx.fillText("H2", 300, 90);
        this.ctx.fillText("O2", 480, 90);
    }
};

// ==========================================
// 29. Gas Diffusion (Graham's Law)
// ==========================================
Simulations['gas-diffusion'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        // Tube with HCl (left) and NH3 (right)
        // NH3 is lighter (17 g/mol) vs HCl (36.5 g/mol)
        // NH3 travels faster. Meet closer to HCl.

        this.started = false;
        this.nh3Pos = 0; // 0 to 100% of tube
        this.hclPos = 100;

        this.addControl('button', 'Start', {}, () => this.started = true);
        this.addControl('button', 'Reset', {}, () => { this.started = false; this.nh3Pos = 0; this.hclPos = 100; });
    }

    update() {
        if (this.started) {
            if (this.nh3Pos < this.hclPos) {
                this.nh3Pos += 0.5 * Math.sqrt(36.5 / 17); // Rate prop to 1/sqrt(M)
                this.hclPos -= 0.5 * 1; // Base rate
            }
        }

        const fraction = this.nh3Pos / (this.nh3Pos + (100 - this.hclPos));
        this.updateData(`Graham's Law: Rate ∝ 1/√M\nNH3 (lighter) moves faster than HCl (heavier).\nWhite ring forms where they meet.`);
    }

    draw() {
        // Glass tube
        this.ctx.fillStyle = '#eee';
        this.ctx.fillRect(100, 250, 600, 40);
        this.ctx.strokeStyle = '#999';
        this.ctx.strokeRect(100, 250, 600, 40);

        // Cotton plugs
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath(); this.ctx.arc(100, 270, 20, 0, Math.PI * 2); this.ctx.fill(); // NH3
        this.ctx.beginPath(); this.ctx.arc(700, 270, 20, 0, Math.PI * 2); this.ctx.fill(); // HCl

        this.ctx.fillStyle = 'black';
        this.ctx.fillText("NH3 (17g/mol)", 50, 275);
        this.ctx.fillText("HCl (36.5g/mol)", 710, 275);

        // Gases diffusing
        if (this.started) {
            // NH3 cloud
            this.ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
            this.ctx.fillRect(100, 250, this.nh3Pos * 6, 40);

            // HCl cloud
            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
            this.ctx.fillRect(100 + this.hclPos * 6, 250, (100 - this.hclPos) * 6, 40);

            // Meeting point
            if (Math.abs((100 + this.hclPos * 6) - (100 + this.nh3Pos * 6)) < 5) {
                this.ctx.fillStyle = 'white';
                this.ctx.fillRect(100 + this.nh3Pos * 6, 250, 10, 40);
                this.ctx.fillStyle = 'black';
                this.ctx.fillText("NH4Cl Solid Formed", 100 + this.nh3Pos * 6 - 50, 320);
            }
        }
    }
};

// ==========================================
// 30. Nuclear Fission
// ==========================================
Simulations['nuclear-fission'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.nuclei = [];
        this.neutrons = [];
        this.resetSim();

        this.addControl('button', 'Fire Neutron', {}, () => {
            this.neutrons.push({ x: 50, y: 300, vx: 5, vy: 0 });
        });
        this.addControl('button', 'Reset', {}, () => this.resetSim());
    }

    resetSim() {
        this.nuclei = [];
        this.neutrons = [];
        // Grid of U-235
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
        // Move neutrons
        for (let i = this.neutrons.length - 1; i >= 0; i--) {
            const n = this.neutrons[i];
            n.x += n.vx;
            n.y += n.vy;

            if (n.x > 800 || n.x < 0 || n.y < 0 || n.y > 600) {
                this.neutrons.splice(i, 1);
                continue;
            }

            // Check collision with nuclei
            for (let j = 0; j < this.nuclei.length; j++) {
                const u = this.nuclei[j];
                if (u.stable && Math.hypot(n.x - u.x, n.y - u.y) < 20) {
                    // Fission!
                    u.stable = false;
                    this.neutrons.splice(i, 1);

                    // Release 3 new neutrons
                    for (let k = 0; k < 3; k++) {
                        const angle = Math.random() * Math.PI * 2;
                        this.neutrons.push({
                            x: u.x, y: u.y,
                            vx: Math.cos(angle) * 5,
                            vy: Math.sin(angle) * 5
                        });
                    }
                    break; // One collision per neutron
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
};

// ==========================================
// 31. Molecular Polarity
// ==========================================
Simulations['molecular-polarity'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.enDiff = 0.5; // Electronegativity Difference
        this.angle = 0;

        this.addControl('slider', 'Electronegativity Diff', { min: 0, max: 2.0, step: 0.1, value: 0.5 }, v => this.enDiff = v);
        this.addControl('checkbox', 'Electric Field', { value: false }, v => this.field = v);
    }

    update() {
        let type = "Non-polar Covalent";
        if (this.enDiff > 0.4) type = "Polar Covalent";
        if (this.enDiff > 1.7) type = "Ionic";

        if (this.field && this.enDiff > 0.4) {
            // Align with field
            const targetAngle = 0; // Field points right
            this.angle += (targetAngle - this.angle) * 0.1;
        }

        this.updateData(`EN Difference: ${this.enDiff.toFixed(1)}\nBond Type: ${type}`);
    }

    draw() {
        const cx = this.width / 2;
        const cy = this.height / 2;

        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(this.angle);

        // Atom A (Left)
        this.drawSphere(-60, 0, 40, '#ccc');

        // Atom B (Right) - More EN gets partial negative
        this.drawSphere(60, 0, 40, '#ccc');

        // Electron Cloud / Dipole
        if (this.enDiff > 0) {
            const shift = this.enDiff * 20;
            const alpha = Math.min(0.8, this.enDiff * 0.5);

            // Dipole arrow
            this.ctx.fillStyle = 'black';
            this.ctx.font = '20px Arial';
            this.ctx.fillText("δ+", -80, -50);
            this.ctx.fillText("δ-", 60, -50);

            this.ctx.strokeStyle = 'black';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(-50, 60); this.ctx.lineTo(50, 60);
            this.ctx.lineTo(40, 50);
            this.ctx.moveTo(50, 60); this.ctx.lineTo(40, 70);
            this.ctx.moveTo(-50, 55); this.ctx.lineTo(-50, 65); // Plus tail
            this.ctx.stroke();

            // Cloud density
            this.ctx.fillStyle = `rgba(255, 0, 0, ${alpha})`;
            this.ctx.beginPath(); this.ctx.arc(60, 0, 45, 0, Math.PI * 2); this.ctx.fill();
        }

        this.ctx.restore();

        if (this.field) {
            // Plates
            this.ctx.fillStyle = '#999';
            this.ctx.fillRect(100, 100, 10, 400); // +
            this.ctx.fillRect(700, 100, 10, 400); // -
            this.ctx.fillStyle = 'red'; this.ctx.fillText("+ + +", 120, 300);
            this.ctx.fillStyle = 'blue'; this.ctx.fillText("- - -", 650, 300);
        }
    }
};

// ==========================================
// 32. Intermolecular Forces (IMFs)
// ==========================================
Simulations['intermolecular-forces'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.temp = 100;
        this.type = 'dispersion'; // dispersion, dipole, h-bond
        this.molecules = [];
        this.initMols();

        this.addControl('slider', 'Temperature', { min: 10, max: 500, step: 10, value: 100 }, v => this.temp = v);
        this.addControl('button', 'Dispersion (He)', {}, () => { this.type = 'dispersion'; this.initMols(); });
        this.addControl('button', 'Dipole (HCl)', {}, () => { this.type = 'dipole'; this.initMols(); });
        this.addControl('button', 'H-Bond (H2O)', {}, () => { this.type = 'h-bond'; this.initMols(); });
    }

    initMols() {
        this.molecules = [];
        for (let i = 0; i < 40; i++) {
            this.molecules.push({
                x: Math.random() * 800, y: Math.random() * 600,
                vx: 0, vy: 0
            });
        }
    }

    update() {
        let interactionStrength = 0.5; // default dispersion
        if (this.type === 'dipole') interactionStrength = 2.0;
        if (this.type === 'h-bond') interactionStrength = 5.0;

        const speed = this.temp * 0.01;

        for (let i = 0; i < this.molecules.length; i++) {
            const p1 = this.molecules[i];
            // Brownian
            p1.vx += (Math.random() - 0.5) * speed;
            p1.vy += (Math.random() - 0.5) * speed;
            p1.vx *= 0.95; p1.vy *= 0.95;
            p1.x += p1.vx; p1.y += p1.vy;

            // Bounds
            if (p1.x < 0) p1.x = 800; if (p1.x > 800) p1.x = 0;
            if (p1.y < 0) p1.y = 600; if (p1.y > 600) p1.y = 0;

            // Attraction
            for (let j = i + 1; j < this.molecules.length; j++) {
                const p2 = this.molecules[j];
                const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (d < 40 && d > 10) {
                    const f = (40 - d) * 0.001 * interactionStrength;
                    const dx = (p2.x - p1.x) / d;
                    const dy = (p2.y - p1.y) / d;
                    p1.vx += dx * f; p1.vy += dy * f;
                    p2.vx -= dx * f; p2.vy -= dy * f;
                }
            }
        }
        this.updateData(`Interaction Type: ${this.type}\nStrength: ${interactionStrength}\nPhase: ${this.temp > 20 * interactionStrength ? 'Gas' : 'Liquid/Solid'}`);
    }

    draw() {
        this.molecules.forEach(p => {
            const color = this.type === 'h-bond' ? 'blue' : (this.type === 'dipole' ? 'green' : 'gray');
            this.drawSphere(p.x, p.y, 8, color);
        });
    }
};

// ==========================================
// 33. Specific Heat
// ==========================================
Simulations['specific-heat'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.material = 'water'; // water, oil, iron
        this.mass = 100; // g
        this.heatAdded = 0; // J
        this.temp = 20; // C
        this.heating = false;

        this.addControl('button', 'Water (4.18)', {}, () => { this.material = 'water'; this.reset(); });
        this.addControl('button', 'Oil (2.0)', {}, () => { this.material = 'oil'; this.reset(); });
        this.addControl('button', 'Iron (0.45)', {}, () => { this.material = 'iron'; this.reset(); });
        this.addControl('button', 'Add Heat', {}, () => this.heating = true);
        this.addControl('button', 'Stop', {}, () => this.heating = false);
    }

    reset() { this.heatAdded = 0; this.temp = 20; }

    update() {
        let c = 4.18;
        if (this.material === 'oil') c = 2.0;
        if (this.material === 'iron') c = 0.45;

        if (this.heating) {
            this.heatAdded += 100; // J per frame
            const deltaT = 100 / (this.mass * c);
            this.temp += deltaT;
        }

        this.updateData(`Material: ${this.material} (c = ${c} J/g°C)\nHeat Added: ${this.heatAdded} J\nTemperature: ${this.temp.toFixed(1)} °C`);
    }

    draw() {
        // Beaker / Block
        this.ctx.fillStyle = this.material === 'iron' ? '#777' : (this.material === 'oil' ? '#FFC107' : '#2196F3');
        if (this.material === 'iron') {
            this.ctx.fillRect(350, 300, 100, 100);
        } else {
            // Beaker
            this.ctx.strokeRect(300, 250, 200, 200);
            this.ctx.fillRect(301, 300, 198, 150);
        }

        // Burner
        this.ctx.fillStyle = '#555';
        this.ctx.fillRect(350, 460, 100, 40);
        if (this.heating) {
            this.ctx.fillStyle = 'orange';
            this.ctx.beginPath();
            this.ctx.moveTo(360, 460); this.ctx.lineTo(400, 400); this.ctx.lineTo(440, 460);
            this.ctx.fill();
        }

        // Thermometer
        const h = Math.min(200, (this.temp / 100) * 200);
        this.ctx.fillStyle = 'white'; this.ctx.fillRect(550, 200, 20, 200);
        this.ctx.fillStyle = 'red'; this.ctx.fillRect(555, 400 - h, 10, h);
    }
};

// ==========================================
// 34. Activation Energy
// ==========================================
Simulations['activation-energy'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.ea = 50; // high barrier
        this.temp = 20;
        this.particles = [];
        this.reacted = 0;

        this.addControl('slider', 'Barrier (Ea)', { min: 10, max: 100, step: 10, value: 50 }, v => this.ea = v);
        this.addControl('slider', 'Temperature', { min: 10, max: 100, step: 10, value: 20 }, v => { this.temp = v; this.resetP(); });
        this.addControl('button', 'Reset', {}, () => this.resetP());

        this.resetP();
    }

    resetP() {
        this.particles = [];
        this.reacted = 0;
    }

    update() {
        // Spawn particles aimed at barrier
        if (Math.random() < 0.1) {
            this.particles.push({
                x: 0, y: 350 + Math.random() * 20,
                vx: 2 + Math.random() * (this.temp / 5), // Kinetic Energy
                status: 'reactant'
            });
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;

            // Hill check at x=400
            if (p.x > 380 && p.x < 420 && p.status === 'reactant') {
                // Check energy vs barrier height
                if (p.vx > (this.ea / 10)) {
                    // Success
                    p.status = 'product';
                } else {
                    // Fail - bounce back
                    p.vx *= -1;
                }
            }

            if (p.x > 800) {
                this.reacted++;
                this.particles.splice(i, 1);
            }
            if (p.x < 0) this.particles.splice(i, 1);
        }

        this.updateData(`Reactants converted: ${this.reacted}\nHigher Temperature = More particles with E > Ea`);
    }

    draw() {
        // Energy Diagram
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#333';
        this.ctx.beginPath();
        this.ctx.moveTo(0, 400);
        this.ctx.lineTo(300, 400); // Reactants
        // Hill
        const top = 400 - this.ea * 3;
        this.ctx.quadraticCurveTo(400, top, 500, 500); // Products lower (Exothermic)
        this.ctx.lineTo(800, 500);
        this.ctx.stroke();

        this.ctx.fillStyle = '#666';
        this.ctx.fillText("Reactants", 50, 450);
        this.ctx.fillText("Products", 600, 550);
        this.ctx.fillText(`Barrier (Ea)`, 380, top - 20);

        // Particles
        this.particles.forEach(p => {
            // Trace path approx
            let y = 400;
            if (p.x > 300 && p.x < 500) {
                // on curve logic hard to map perfectly visually without path following
                // Simple approximation: lift y based on x dist from peak
                const dx = Math.abs(p.x - 400);
                if (dx < 100) y = top + (dx / 100) * (400 - top);
                if (p.x > 400 && p.status === 'product') {
                    // going down to 500
                    y = top + ((p.x - 400) / 100) * (500 - top);
                }
            } else if (p.x >= 500) y = 500;

            this.drawSphere(p.x, y - 10, 6, p.status === 'reactant' ? 'blue' : 'green');
        });
    }
};

// ==========================================
// 35. Equilibrium
// ==========================================
Simulations['equilibrium'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        // A <=> B
        this.countA = 50;
        this.countB = 50;
        this.kFwd = 0.05;
        this.kRev = 0.02;

        this.addControl('button', 'Add A', {}, () => this.countA += 20);
        this.addControl('button', 'Add B', {}, () => this.countB += 20);
        this.addControl('slider', 'Shift Right (Heat)', {}, () => this.kFwd += 0.01);
    }

    update() {
        // Kinetics
        const rateFwd = this.countA * this.kFwd;
        const rateRev = this.countB * this.kRev;

        if (Math.random() < rateFwd && this.countA > 0) { this.countA--; this.countB++; }
        if (Math.random() < rateRev && this.countB > 0) { this.countB--; this.countA++; }

        const q = this.countB / (this.countA || 1);
        const k = this.kFwd / this.kRev;

        this.updateData(`A (Blue): ${this.countA} | B (Red): ${this.countB}\nRatio Q: ${q.toFixed(2)} (Target K ~${k.toFixed(2)})`);
    }

    draw() {
        // Two boxes
        this.ctx.strokeRect(100, 200, 250, 300);
        this.ctx.strokeRect(450, 200, 250, 300);

        this.ctx.fillStyle = '#000';
        this.ctx.font = '30px Arial';
        this.ctx.fillText("⇌", 390, 350);

        // Particles
        this.drawParticles(this.countA, 100, 200, 250, 300, 'blue');
        this.drawParticles(this.countB, 450, 200, 250, 300, 'red');
    }

    drawParticles(n, x, y, w, h, c) {
        for (let i = 0; i < n; i++) {
            const px = x + Math.random() * w;
            const py = y + Math.random() * h;
            this.drawSphere(px, py, 4, c);
        }
    }
};

// ==========================================
// 36. Colligative Properties
// ==========================================
Simulations['colligative'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.solute = 0;
        this.temp = 0; // C

        this.addControl('slider', 'Solute Added (Salt)', { min: 0, max: 20, step: 1, value: 0 }, v => this.solute = v);
        this.addControl('slider', 'Temperature', { min: -20, max: 20, step: 1, value: 0 }, v => this.temp = v);
    }

    update() {
        // Freezing point depression dT = Kf * m
        const fp = 0 - (this.solute * 1.0);

        let state = "Liquid";
        if (this.temp <= fp) state = "Solid (Ice)";

        this.updateData(`Freezing Point: ${fp.toFixed(1)}°C\nCurrent Temp: ${this.temp}°C\nState: ${state}`);
    }

    draw() {
        const cx = 400, cy = 300, w = 300, h = 300;
        this.ctx.fillStyle = '#E3F2FD';
        this.ctx.fillRect(cx - w / 2, cy - h / 2, w, h);

        // Solute dots
        for (let i = 0; i < this.solute * 5; i++) {
            this.drawSphere(cx - w / 2 + Math.random() * w, cy - h / 2 + Math.random() * h, 2, 'black');
        }

        // Ice structure if solid
        const fp = 0 - (this.solute * 1.0);
        if (this.temp <= fp) {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            this.ctx.font = '40px Arial';
            this.ctx.fillText("❄️", 380, 300);
            this.ctx.fillText("ICE", 370, 350);
        } else {
            this.ctx.fillStyle = 'rgba(0,0,255,0.1)';
            this.ctx.fillText("💧", 380, 300);
        }
    }
};

// ==========================================
// 37. Atomic Spectra
// ==========================================
Simulations['atomic-spectra'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.element = 'hydrogen';

        this.addControl('button', 'Hydrogen', {}, () => this.element = 'hydrogen');
        this.addControl('button', 'Helium', {}, () => this.element = 'helium');
        this.addControl('button', 'Neon', {}, () => this.element = 'neon');
    }

    update() {
        this.updateData(`Element: ${this.element.toUpperCase()}\nEach element has a unique spectral signature.`);
    }

    draw() {
        // Tube glowing
        let color = 'pink';
        let lines = [];

        if (this.element === 'hydrogen') {
            color = '#E1BEE7';
            lines = [{ x: 656, c: 'red' }, { x: 486, c: 'cyan' }, { x: 434, c: 'blue' }, { x: 410, c: 'violet' }];
        } else if (this.element === 'helium') {
            color = '#FFCCBC';
            lines = [{ x: 706, c: 'red' }, { x: 667, c: 'red' }, { x: 587, c: 'orange' }, { x: 501, c: 'green' }, { x: 492, c: 'cyan' }, { x: 447, c: 'blue' }];
        } else { // neon
            color = '#FFAB91';
            lines = [{ x: 640, c: 'red' }, { x: 638, c: 'red' }, { x: 633, c: 'orange' }, { x: 626, c: 'orange' }, { x: 616, c: 'orange' }, { x: 609, c: 'orange' }, { x: 607, c: 'orange' }, { x: 603, c: 'yellow' }, { x: 585, c: 'yellow' }]; // lots of red/orange
        }

        // Discharge tube
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = color;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(100, 100, 600, 20);
        this.ctx.shadowBlur = 0;

        // Prism
        this.ctx.fillStyle = 'rgba(200, 200, 255, 0.5)';
        this.ctx.moveTo(350, 150); this.ctx.lineTo(450, 350); this.ctx.lineTo(250, 350); this.ctx.fill();

        // Spectrum Scale 400nm - 700nm
        const sx = 100, sy = 500, sw = 600, sh = 50;
        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(sx, sy, sw, sh);

        // Map nm to x
        lines.forEach(l => {
            // 400 -> x=0, 700 -> x=600
            const x = sx + ((l.x - 400) / 300) * sw;
            this.ctx.fillStyle = l.c;
            this.ctx.fillRect(x, sy, 4, sh);

            // Connector beam
            this.ctx.globalAlpha = 0.2;
            this.ctx.strokeStyle = l.c;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(400, 120); // tube
            this.ctx.lineTo(350, 250); // prism approx
            this.ctx.lineTo(x, sy);
            this.ctx.stroke();
            this.ctx.globalAlpha = 1;
        });
    }
};

// ==========================================
// 38. Chromatography
// ==========================================
Simulations['chromatography'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.progress = 0;
        this.running = false;

        this.addControl('button', 'Start Elution', {}, () => this.running = true);
        this.addControl('button', 'Reset', {}, () => { this.running = false; this.progress = 0; });
    }

    update() {
        if (this.running && this.progress < 500) this.progress += 1;
        this.updateData(`Separation based on affinity to stationary vs mobile phase.`);
    }

    draw() {
        // Paper strip
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(350, 50, 100, 500);
        this.ctx.strokeStyle = '#ccc';
        this.ctx.strokeRect(350, 50, 100, 500);

        // Solvent front
        const solventY = 550 - this.progress;
        this.ctx.fillStyle = 'rgba(200,200,255,0.3)';
        this.ctx.fillRect(350, solventY, 100, 550 - solventY);

        // Spot Start
        const startY = 500;

        // Components: Blue (slow), Red (med), Yellow (fast)
        // Rf values: Blue=0.3, Red=0.6, Yellow=0.9

        const yBlue = startY - this.progress * 0.3;
        const yRed = startY - this.progress * 0.6;
        const yYel = startY - this.progress * 0.9;

        this.drawSphere(400, yBlue, 8, 'blue');
        this.drawSphere(400, yRed, 8, 'red');
        this.drawSphere(400, yYel, 8, 'orange');

        // Beaker liquid
        this.ctx.fillStyle = 'lightblue';
        this.ctx.fillRect(250, 520, 300, 100);
    }
};

// ==========================================
// 39. Galvanic Cell (Battery)
// ==========================================
Simulations['galvanic-cell'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.voltage = 1.10; // Zn-Cu
        this.connected = false;

        this.addControl('checkbox', 'Connect Circuit', { value: false }, v => this.connected = v);
    }

    update() {
        const i = this.connected ? 0.5 : 0;
        this.updateData(`Voltage: ${this.voltage} V\nCurrent: ${i} A\nElectron Flow: Zn → Cu`);
        this.current = i;
    }

    draw() {
        // Beakers
        this.ctx.fillStyle = 'rgba(200,200,200,0.5)';
        this.ctx.fillRect(150, 250, 200, 250); // Zn
        this.ctx.fillRect(450, 250, 200, 250); // Cu

        // Electrodes
        this.ctx.fillStyle = 'gray'; this.ctx.fillRect(200, 200, 40, 250); // Zn
        this.ctx.fillStyle = '#B87333'; this.ctx.fillRect(560, 200, 40, 250); // Cu

        // Salt Bridge
        this.ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        this.ctx.lineWidth = 30;
        this.ctx.beginPath();
        this.ctx.moveTo(250, 300); this.ctx.quadraticCurveTo(400, 100, 550, 300);
        this.ctx.stroke();

        // Wire
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(220, 200); this.ctx.lineTo(220, 100); this.ctx.lineTo(580, 100); this.ctx.lineTo(580, 200);
        this.ctx.stroke();

        // Voltmeter
        this.ctx.fillStyle = '#333';
        this.ctx.beginPath(); this.ctx.arc(400, 100, 40, 0, Math.PI * 2); this.ctx.fill();
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.connected ? "1.10V" : "0.00V", 370, 105);

        // Electrons
        if (this.connected) {
            const t = Date.now() / 500;
            const pos = (t % 1) * 360; // linear approx distance
            const ex = 220 + pos;
            // crude animation along wire
            if (ex < 580) {
                this.drawSphere(ex, 100, 5, 'yellow');
            }
        }
    }
};

// ==========================================
// 40. Blackbody Radiation
// ==========================================
Simulations['blackbody'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.temp = 3000;

        this.addControl('slider', 'Temperature (K)', { min: 1000, max: 10000, step: 100, value: 3000 }, v => this.temp = v);
    }

    update() {
        // Wien's Law: lambda_max = b / T
        const lambdaMax = 2898000 / this.temp; // nm

        let color = '#330000';
        if (this.temp > 2000) color = '#FF3300';
        if (this.temp > 4000) color = '#FFCC00';
        if (this.temp > 6000) color = '#FFFFFF';
        if (this.temp > 8000) color = '#CCCCFF';

        this.updateData(`Temp: ${this.temp}K\nPeak Wavelength: ${lambdaMax.toFixed(0)} nm\nApproximated Color: ${color}`);
        this.color = color;
    }

    draw() {
        // Curve
        const gx = 100, gy = 500, gw = 600, gh = 400;
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx + gw, gy);
        this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx, gy - gh);
        this.ctx.stroke();

        // Planck approx shape
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 4;

        for (let x = 0; x < gw; x += 10) {
            const lambda = 100 + (x / gw) * 2000; // 100nm to 2000nm
            // Planck B(l,T) approx
            const c1 = 1000000000;
            const c2 = 100000;
            // Simplified unsealed distro curve shape function matching T
            // peak at 3000k is far right, peak at 10000k is left and high
            // Just use a gaussian centered at peak

            const peakX = (2898000 / this.temp - 100) / 2000 * gw;
            const height = (this.temp / 10000) * gh;
            const width = 100 + (10000 / this.temp) * 50;

            const y = height * Math.exp(-Math.pow(x - peakX, 2) / (2 * width * width));
            const sy = gy - y;

            if (x === 0) this.ctx.moveTo(gx + x, sy); else this.ctx.lineTo(gx + x, sy);
        }
        this.ctx.stroke();

        // Star/Bulb
        this.ctx.shadowBlur = 50; this.ctx.shadowColor = this.color;
        this.drawSphere(600, 150, 40, this.color);
        this.ctx.shadowBlur = 0;
    }
};

// ==========================================
// 41. Photoelectric Effect
// ==========================================
Simulations['photoelectric'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.intensity = 50;
        this.wavelength = 500; // nm
        this.metal = 2.0; // Work function eV

        this.addControl('slider', 'Wavelength (nm)', { min: 200, max: 800, step: 10, value: 500 }, v => this.wavelength = v);
        this.addControl('slider', 'Intensity', { min: 0, max: 100, step: 10, value: 50 }, v => this.intensity = v);
    }

    update() {
        const hc = 1240; // eV nm
        const energy = hc / this.wavelength;
        const ke = energy - this.metal;

        let status = "No Ejection";
        if (ke > 0) status = `Ejection! KE = ${ke.toFixed(2)} eV`;

        this.updateData(`Photon Energy: ${energy.toFixed(2)} eV\nWork Function: ${this.metal} eV\n${status}`);

        this.eject = ke > 0;
        this.speed = Math.sqrt(ke) * 2;
    }

    draw() {
        // Metal Plate
        this.ctx.fillStyle = '#AAA';
        this.ctx.fillRect(100, 400, 600, 50);

        // Lamp
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(350, 50, 100, 50);

        // Photons
        this.ctx.strokeStyle = this.wavelength < 400 ? 'violet' : (this.wavelength < 500 ? 'blue' : (this.wavelength < 600 ? 'green' : 'red'));
        this.ctx.lineWidth = 2;

        const numPhotons = this.intensity / 10;

        for (let i = 0; i < numPhotons; i++) {
            const x = 200 + i * 40;
            // Wavy line down
            this.ctx.beginPath();
            const time = Date.now() / 100;
            const offset = (time * 10) % 300;
            const y = 100 + offset;

            if (y < 400) {
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x + 10, y + 10); // packet
                this.ctx.stroke();
            } else if (this.eject) {
                // Electron flying up
                const ey = 400 - (offset - 300) * this.speed;
                if (ey > 0 && ey < 400) {
                    this.drawSphere(x, ey, 4, 'blue');
                }
            }
        }
    }
};

// ==========================================
// 42. Rutherford Scattering
// ==========================================
Simulations['rutherford'] = class extends Simulation {
    constructor(canvas, ctx, addControl, updateData) {
        super(canvas, ctx, addControl, updateData);
        this.particles = [];
        this.setup();
        this.addControl('button', 'Reset', {}, () => this.setup());
    }

    setup() {
        this.particles = [];
        for (let i = 0; i < 100; i++) { // Continuous stream
            this.particles.push({
                x: Math.random() * -1000, // Stagger start
                y: 200 + Math.random() * 200,
                vx: 10, vy: 0,
                deflected: false
            });
        }
    }

    update() {
        // Nucleus at 400, 300
        const nx = 400, ny = 300;

        this.particles.forEach(p => {
            // Coulomb repulsion 1/r^2
            const dx = p.x - nx;
            const dy = p.y - ny;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);

            if (dist < 100 && dist > 5) {
                const f = 1000 / distSq;
                const fx = (dx / dist) * f;
                const fy = (dy / dist) * f;
                p.vx += fx;
                p.vy += fy;
            }

            p.x += p.vx;
            p.y += p.vy;

            // Wrap for stream
            if (p.x > 800 || p.y < 0 || p.y > 600) {
                p.x = -50;
                p.y = 200 + Math.random() * 200;
                p.vx = 10; p.vy = 0;
            }
        });

        this.updateData(`Gold Nucleus (+) repels Alpha Particles (+)\nMost pass through, some deflect.`);
    }

    draw() {
        // Nucleus
        this.drawSphere(400, 300, 10, 'gold');
        this.ctx.fillStyle = 'black'; this.ctx.fillText("+", 396, 304);

        // Particles
        this.particles.forEach(p => {
            if (p.x > 0 && p.x < 800) {
                this.drawSphere(p.x, p.y, 3, 'red');
            }
        });
    }
};

window.AnimationManager = AnimationManager;
window.addEventListener('DOMContentLoaded', () => UI.init()); // Ensure UI inits after load
