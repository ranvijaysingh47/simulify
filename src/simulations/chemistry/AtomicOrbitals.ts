import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import * as THREE from 'three';

export class AtomicOrbitals extends Simulation {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private pointsGeometry: THREE.BufferGeometry;
    private pointsMaterial: THREE.PointsMaterial;
    private pointsMesh: THREE.Points;

    private orbitalType: 's' | 'p' | 'd' = 's';
    private rotationSpeed: number = 0.01;
    private isInitialized: boolean = false;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        // We need to bypass the 2D context for Three.js
        // Ideally we would have a separate canvas, but we can try to overlay or replace.
        // For simplicity in this architecture, we will create a NEW THREE.WebGLRenderer 
        // and append its domElement to the parent, hiding the original 2D canvas.

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf3f4f6); // gray-100 matches UI

        this.camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
        this.camera.position.z = 15;

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(800, 600);

        // Hack: Append ThreeJS canvas on top of existing canvas
        const container = document.getElementById('canvas-container');
        if (container) {
            // Remove any old threejs canvas if exists
            const old = container.querySelector('.three-canvas');
            if (old) old.remove();

            this.renderer.domElement.classList.add('three-canvas', 'absolute', 'inset-0');
            container.appendChild(this.renderer.domElement);
            // Hide the 2D canvas
            this.canvas.style.display = 'none';
        }

        this.pointsGeometry = new THREE.BufferGeometry();
        this.pointsMaterial = new THREE.PointsMaterial({ color: 0xff6c00, size: 0.1 });
        this.pointsMesh = new THREE.Points(this.pointsGeometry, this.pointsMaterial);
        this.scene.add(this.pointsMesh);

        // Add Nucleus
        const geometry = new THREE.SphereGeometry(0.5, 32, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const sphere = new THREE.Mesh(geometry, material);
        this.scene.add(sphere);

        this.initPoints();
        this.isInitialized = true;

        this.addControl('button', 's Orbital', {}, () => { this.orbitalType = 's'; this.initPoints(); });
        this.addControl('button', 'p Orbital', {}, () => { this.orbitalType = 'p'; this.initPoints(); });
        this.addControl('button', 'd Orbital', {}, () => { this.orbitalType = 'd'; this.initPoints(); });
        this.addControl('slider', 'Rotation Speed', { min: 0, max: 0.1, step: 0.001, value: 0.01 }, v => this.rotationSpeed = v);
    }

    initPoints() {
        const positions: number[] = [];
        const count = 5000;

        for (let i = 0; i < count; i++) {
            while (true) {
                const x = (Math.random() - 0.5) * 20;
                const y = (Math.random() - 0.5) * 20;
                const z = (Math.random() - 0.5) * 20;
                const r = Math.sqrt(x * x + y * y + z * z);

                let prob = 0;
                if (this.orbitalType === 's') {
                    prob = Math.exp(-r);
                } else if (this.orbitalType === 'p') {
                    prob = Math.abs(z) * Math.exp(-r / 2);
                } else if (this.orbitalType === 'd') {
                    prob = Math.abs(x * y) * Math.exp(-r / 3);
                }

                if (Math.random() < prob) {
                    positions.push(x, y, z);
                    break;
                }
            }
        }

        this.pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    }

    update() {
        if (!this.isInitialized) return;
        this.scene.rotation.y += this.rotationSpeed;
        this.updateData(`Orbital: ${this.orbitalType.toUpperCase()} (3D WebGL)`);
    }

    draw() {
        // Render 3D scene
        this.renderer.render(this.scene, this.camera);
    }

    // Override reset/cleanup to handle WebGL context
    reset() {
        this.orbitalType = 's';
        this.initPoints();
    }
}
