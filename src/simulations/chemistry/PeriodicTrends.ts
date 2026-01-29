import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import * as THREE from 'three';

export class PeriodicTrends extends Simulation {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private elementMeshes: THREE.Mesh[] = [];
    private raycaster = new THREE.Raycaster();
    private mouse = new THREE.Vector2();

    private selectedProperty: 'radius' | 'ionization' | 'electronegativity' = 'radius';
    private isInitialized: boolean = false;

    // Simplified Periodic Table Data (Rows 1-4)
    private periodicData = [
        { symbol: "H", x: 0, y: 0, radius: 53, ionization: 13.6, electronegativity: 2.2, color: 0xFFFFFF },
        { symbol: "He", x: 17, y: 0, radius: 31, ionization: 24.6, electronegativity: 0, color: 0xD9FFFF },
        // Row 2
        { symbol: "Li", x: 0, y: 1, radius: 167, ionization: 5.4, electronegativity: 1.0, color: 0xCC80FF },
        { symbol: "Be", x: 1, y: 1, radius: 112, ionization: 9.3, electronegativity: 1.6, color: 0xC2FF00 },
        { symbol: "B", x: 12, y: 1, radius: 87, ionization: 8.3, electronegativity: 2.0, color: 0xFFB5B5 },
        { symbol: "C", x: 13, y: 1, radius: 67, ionization: 11.3, electronegativity: 2.5, color: 0x909090 },
        { symbol: "N", x: 14, y: 1, radius: 56, ionization: 14.5, electronegativity: 3.0, color: 0x3050F8 },
        { symbol: "O", x: 15, y: 1, radius: 48, ionization: 13.6, electronegativity: 3.5, color: 0xFF0D0D },
        { symbol: "F", x: 16, y: 1, radius: 42, ionization: 17.4, electronegativity: 4.0, color: 0x90E050 },
        { symbol: "Ne", x: 17, y: 1, radius: 38, ionization: 21.6, electronegativity: 0, color: 0xB3E3F5 },
        // Row 3 (Adding more for completeness if desired, but sticking to existing data for now)
        { symbol: "Na", x: 0, y: 2, radius: 190, ionization: 5.1, electronegativity: 0.9, color: 0xAB5CF2 },
        { symbol: "Mg", x: 1, y: 2, radius: 145, ionization: 7.6, electronegativity: 1.3, color: 0x8AFF00 },
        { symbol: "Al", x: 12, y: 2, radius: 118, ionization: 6.0, electronegativity: 1.6, color: 0xBFA6A6 },
        { symbol: "Si", x: 13, y: 2, radius: 111, ionization: 8.1, electronegativity: 1.9, color: 0xF0C8A0 },
        { symbol: "P", x: 14, y: 2, radius: 98, ionization: 10.5, electronegativity: 2.1, color: 0xFF8000 },
        { symbol: "S", x: 15, y: 2, radius: 88, ionization: 10.4, electronegativity: 2.5, color: 0xFFFF30 },
        { symbol: "Cl", x: 16, y: 2, radius: 79, ionization: 13.0, electronegativity: 3.2, color: 0x1FF01F },
        { symbol: "Ar", x: 17, y: 2, radius: 71, ionization: 15.8, electronegativity: 0, color: 0x80D1E3 },
    ];

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        // Three.js Setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf8fafc); // slate-50

        this.camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
        this.camera.position.z = 15;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(800, 600);

        // Append ThreeJS canvas
        const container = document.getElementById('canvas-container');
        if (container) {
            const old = container.querySelector('.three-canvas');
            if (old) old.remove();

            this.renderer.domElement.classList.add('three-canvas', 'absolute', 'inset-0');
            container.appendChild(this.renderer.domElement);
            this.canvas.style.display = 'none'; // Hide 2D canvas
        }

        // Initialize Content
        this.createTable();
        this.isInitialized = true;

        // Controls
        this.addControl('button', 'Visualize Atomic Radius', {}, () => this.setProperty('radius'));
        this.addControl('button', 'Visualize Ionization Energy', {}, () => this.setProperty('ionization'));
        this.addControl('button', 'Visualize Electronegativity', {}, () => this.setProperty('electronegativity'));

        // Interaction
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    createTable() {
        const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);

        this.periodicData.forEach(element => {
            const material = new THREE.MeshStandardMaterial({
                color: element.color,
                roughness: 0.5,
                metalness: 0.1
            });
            const mesh = new THREE.Mesh(geometry, material);

            // Grid Position: X goes 0-17, Y goes 0-2 (inverted for display and centered)
            mesh.position.x = element.x - 8.5;
            mesh.position.y = -element.y + 1;

            mesh.userData = element;
            this.scene.add(mesh);
            this.elementMeshes.push(mesh);
        });

        // Add lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 10);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0x404040, 2));

        this.updateVisualization();
    }

    setProperty(prop: 'radius' | 'ionization' | 'electronegativity') {
        this.selectedProperty = prop;
        this.updateVisualization();
        this.updateData(`Visualizing: ${prop.replace(/([A-Z])/g, ' $1').trim()}`);
    }

    updateVisualization() {
        this.elementMeshes.forEach(mesh => {
            const data = mesh.userData;
            let scale = 1;

            if (this.selectedProperty === 'radius') {
                scale = data.radius / 80; // Normalize
            } else if (this.selectedProperty === 'ionization') {
                scale = data.ionization / 10;
            } else if (this.selectedProperty === 'electronegativity') {
                scale = (data.electronegativity || 0.1);
            }

            const targetScale = Math.max(0.4, Math.min(3.0, scale));

            // Simple ease-to target (in a real engine we'd tween)
            mesh.scale.setScalar(targetScale);
            // Bring closer to camera if bigger to avoid clipping
            mesh.position.z = (targetScale - 1) * 0.5;
        });
    }

    onMouseMove(event: MouseEvent) {
        if (!this.isInitialized) return;

        // We need to calculate mouse position relative to the renderer's DOM element
        const rect = this.renderer.domElement.getBoundingClientRect();

        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.elementMeshes);

        if (intersects.length > 0) {
            const element = intersects[0].object.userData;

            // Highlight
            this.elementMeshes.forEach(m => {
                if (m.material instanceof THREE.MeshStandardMaterial) {
                    m.material.emissive.setHex(0x000000);
                }
            });
            const selectedMaterial = (intersects[0].object as THREE.Mesh).material;
            if (selectedMaterial instanceof THREE.MeshStandardMaterial) {
                selectedMaterial.emissive.setHex(0x444444);
            }

            // Update Info
            this.updateData(
                `Element: ${element.symbol}\n` +
                `Radius: ${element.radius} pm\n` +
                `Ionization: ${element.ionization} eV\n` +
                `Electronegativity: ${element.electronegativity}`
            );
        } else {
            this.elementMeshes.forEach(m => {
                if (m.material instanceof THREE.MeshStandardMaterial) {
                    m.material.emissive.setHex(0x000000);
                }
            });
        }
    }

    update() {
        if (!this.isInitialized) return;
        // Subtle idle animation
        const time = Date.now() * 0.001;
        this.elementMeshes.forEach((mesh, index) => {
            // slight bob
            mesh.rotation.z = Math.sin(time + index * 0.1) * 0.05;
        });
    }

    draw() {
        this.renderer.render(this.scene, this.camera);
    }

    reset() {
        this.selectedProperty = 'radius';
        this.updateVisualization();
    }
}
