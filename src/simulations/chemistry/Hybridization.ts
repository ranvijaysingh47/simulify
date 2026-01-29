import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import * as THREE from 'three';

export class Hybridization extends Simulation {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    // Removed unused currentMode property
    private mesh: THREE.Group = new THREE.Group();

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        // Three.js Setup (Overlay)
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf8fafc);

        this.camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(800, 600);

        const container = document.getElementById('canvas-container');
        if (container) {
            const old = container.querySelector('.three-canvas');
            if (old) old.remove();
            this.renderer.domElement.classList.add('three-canvas', 'absolute', 'inset-0');
            container.appendChild(this.renderer.domElement);
            // Verify canvas exists before hiding
            if (this.canvas && this.canvas.style) {
                this.canvas.style.display = 'none';
            }
        }

        // Lighting
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0x404040));

        this.scene.add(this.mesh);
        this.showMode('s');

        // Controls
        addControl('button', 's Orbital', {}, () => this.showMode('s'));
        addControl('button', 'p Orbital', {}, () => this.showMode('p'));
        addControl('button', 'sp3 Hybrid', {}, () => this.showMode('sp3'));
    }

    showMode(mode: 's' | 'p' | 'sp3') {
        // this.currentMode = mode; // Unused
        this.mesh.clear(); // Remove old children

        if (mode === 's') {
            // Sphere
            const geo = new THREE.SphereGeometry(1, 32, 32);
            const mat = new THREE.MeshPhongMaterial({ color: 0x3b82f6, opacity: 0.8, transparent: true });
            this.mesh.add(new THREE.Mesh(geo, mat));
            this.updateData("s Orbital: Spherical shape.");
        } else if (mode === 'p') {
            // Dumbbell (Two spheres overlapping/near)
            const geo = new THREE.SphereGeometry(0.7, 32, 32);
            const mat = new THREE.MeshPhongMaterial({ color: 0xef4444, opacity: 0.8, transparent: true });

            const lobe1 = new THREE.Mesh(geo, mat);
            lobe1.position.y = 0.7;
            lobe1.scale.y = 1.2;

            const lobe2 = new THREE.Mesh(geo, mat);
            lobe2.position.y = -0.7;
            lobe2.scale.y = 1.2;

            this.mesh.add(lobe1);
            this.mesh.add(lobe2);
            this.updateData("p Orbital: Dumbbell shape along axis.");
        } else if (mode === 'sp3') {
            // Tetrahedral arrangement
            const geo = new THREE.ConeGeometry(0.5, 2, 32);
            const mat = new THREE.MeshPhongMaterial({ color: 0xa855f7, opacity: 0.8, transparent: true });

            // 4 lobes pointing to tetrahedron corners
            // (Simplified coordinates)
            const coords = [
                new THREE.Vector3(1, 1, 1),
                new THREE.Vector3(-1, -1, 1),
                new THREE.Vector3(-1, 1, -1),
                new THREE.Vector3(1, -1, -1)
            ];

            coords.forEach(vec => {
                const lobe = new THREE.Mesh(geo, mat);
                lobe.position.copy(vec.normalize().multiplyScalar(1));
                lobe.lookAt(0, 0, 0);
                lobe.rotateX(-Math.PI / 2); // Re-orient cone
                this.mesh.add(lobe);
            });
            this.updateData("sp3 Hybrid: Tetrahedral arrangement (109.5° angles).");
        }
    }

    update() {
        this.mesh.rotation.y += 0.01;
        this.mesh.rotation.x += 0.005;
    }

    draw() {
        this.renderer.render(this.scene, this.camera);
    }

    reset() {
        // cleanup if needed
    }
}
