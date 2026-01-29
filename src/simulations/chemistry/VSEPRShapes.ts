import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import * as THREE from 'three';

export class VSEPRShapes extends Simulation {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private mesh: THREE.Group = new THREE.Group();

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf1f5f9);

        this.camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 100);
        this.camera.position.z = 8;

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(800, 600);

        const container = document.getElementById('canvas-container');
        if (container) {
            const old = container.querySelectorAll('.three-canvas');
            old.forEach(el => el.remove());
            this.renderer.domElement.classList.add('three-canvas', 'absolute', 'inset-0');
            container.appendChild(this.renderer.domElement);
            this.canvas.style.display = 'none';
        }

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 2);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0x404040));
        this.scene.add(this.mesh);

        addControl('button', 'Linear (2)', {}, () => this.setShape(2));
        addControl('button', 'Trigonal Planar (3)', {}, () => this.setShape(3));
        addControl('button', 'Tetrahedral (4)', {}, () => this.setShape(4));
        addControl('button', 'Trigonal Bipyramidal (5)', {}, () => this.setShape(5));
        addControl('button', 'Octahedral (6)', {}, () => this.setShape(6));

        this.setShape(4); // Default
    }

    setShape(n: number) {
        this.mesh.clear();

        // Central atom
        const centerGeo = new THREE.SphereGeometry(1, 32, 32);
        const centerMat = new THREE.MeshPhongMaterial({ color: 0xef4444 });
        this.mesh.add(new THREE.Mesh(centerGeo, centerMat));

        const bondMat = new THREE.MeshPhongMaterial({ color: 0x94a3b8 });
        const outerMat = new THREE.MeshPhongMaterial({ color: 0x3b82f6 });
        const outerGeo = new THREE.SphereGeometry(0.6, 32, 32);

        const coords: THREE.Vector3[] = [];
        let name = "Linear";

        if (n === 2) {
            coords.push(new THREE.Vector3(2.5, 0, 0));
            coords.push(new THREE.Vector3(-2.5, 0, 0));
            name = "Linear (180°)";
        } else if (n === 3) {
            for (let i = 0; i < 3; i++) {
                const angle = i * (Math.PI * 2 / 3);
                coords.push(new THREE.Vector3(Math.cos(angle) * 2.5, Math.sin(angle) * 2.5, 0));
            }
            name = "Trigonal Planar (120°)";
        } else if (n === 4) {
            // Tetrahedral vertices
            coords.push(new THREE.Vector3(2, 2, 2).normalize().multiplyScalar(2.5));
            coords.push(new THREE.Vector3(-2, -2, 2).normalize().multiplyScalar(2.5));
            coords.push(new THREE.Vector3(-2, 2, -2).normalize().multiplyScalar(2.5));
            coords.push(new THREE.Vector3(2, -2, -2).normalize().multiplyScalar(2.5));
            name = "Tetrahedral (109.5°)";
        } else if (n === 5) {
            // Trig Bipyramidal
            coords.push(new THREE.Vector3(0, 2.5, 0)); // Axial
            coords.push(new THREE.Vector3(0, -2.5, 0)); // Axial
            for (let i = 0; i < 3; i++) {
                const angle = i * (Math.PI * 2 / 3);
                coords.push(new THREE.Vector3(Math.cos(angle) * 2.5, 0, Math.sin(angle) * 2.5)); // Equatorial
            }
            name = "Trigonal Bipyramidal (90°, 120°)";
        } else if (n === 6) {
            // Octahedral
            coords.push(new THREE.Vector3(2.5, 0, 0));
            coords.push(new THREE.Vector3(-2.5, 0, 0));
            coords.push(new THREE.Vector3(0, 2.5, 0));
            coords.push(new THREE.Vector3(0, -2.5, 0));
            coords.push(new THREE.Vector3(0, 0, 2.5));
            coords.push(new THREE.Vector3(0, 0, -2.5));
            name = "Octahedral (90°)";
        }

        coords.forEach(pos => {
            // Bond
            const bondGeo = new THREE.CylinderGeometry(0.2, 0.2, pos.length(), 16);
            bondGeo.translate(0, pos.length() / 2, 0);
            bondGeo.rotateX(Math.PI / 2);
            const bond = new THREE.Mesh(bondGeo, bondMat);
            bond.lookAt(pos);
            this.mesh.add(bond);

            // Atom
            const atom = new THREE.Mesh(outerGeo, outerMat);
            atom.position.copy(pos);
            this.mesh.add(atom);
        });

        this.updateData(`Geometry: ${name}`);
    }

    update() {
        this.mesh.rotation.y += 0.005;
        this.mesh.rotation.x += 0.002;
    }

    draw() {
        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        this.renderer.forceContextLoss();
        this.renderer.domElement.remove();
    }
}
