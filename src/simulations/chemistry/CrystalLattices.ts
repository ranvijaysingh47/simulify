import { Simulation, type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';
import * as THREE from 'three';

export class CrystalLattices extends Simulation {
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
        this.camera.position.set(3, 3, 5);
        this.camera.lookAt(0, 0, 0);

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

        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0x505050));
        this.scene.add(this.mesh);

        addControl('button', 'Simple Cubic', {}, () => this.buildLattice('sc'));
        addControl('button', 'Body Centered (BCC)', {}, () => this.buildLattice('bcc'));
        addControl('button', 'Face Centered (FCC)', {}, () => this.buildLattice('fcc'));

        this.buildLattice('sc');
    }

    buildLattice(type: 'sc' | 'bcc' | 'fcc') {
        this.mesh.clear();

        const geo = new THREE.SphereGeometry(0.3, 32, 32);
        const mat = new THREE.MeshPhongMaterial({ color: 0x3b82f6 });
        const mat2 = new THREE.MeshPhongMaterial({ color: 0xef4444 }); // For unique atoms

        // Build 2x2x2 Unit Cells to show repeat
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    // Corners
                    const s = new THREE.Mesh(geo, mat);
                    s.position.set(x * 2, y * 2, z * 2);
                    this.mesh.add(s);

                    if (type === 'bcc') {
                        const center = new THREE.Mesh(geo, mat2);
                        center.position.set(x * 2 + 1, y * 2 + 1, z * 2 + 1);

                        if (x < 1 && y < 1 && z < 1) this.mesh.add(center); // Only internal centers
                    }

                    if (type === 'fcc') {
                        // Faces
                        // Faces
                        // Simplify: Just show unit cell faces for clarity
                    }
                }
            }
        }

        // Cleaner: Just ONE Unit Cell
        this.mesh.clear();
        // Corners
        [0, 2].forEach(x => [0, 2].forEach(y => [0, 2].forEach(z => {
            const s = new THREE.Mesh(geo, mat);
            s.position.set(x - 1, y - 1, z - 1);
            this.mesh.add(s);
        })));

        if (type === 'bcc') {
            const s = new THREE.Mesh(geo, mat2);
            s.position.set(0, 0, 0);
            this.mesh.add(s);
        }

        if (type === 'fcc') {
            // Faces: (0,0, ±1), (0, ±1, 0), (±1, 0, 0)
            const locs = [
                [0, 0, 1], [0, 0, -1],
                [0, 1, 0], [0, -1, 0],
                [1, 0, 0], [-1, 0, 0]
            ];
            locs.forEach(l => {
                const s = new THREE.Mesh(geo, mat2);
                s.position.set(l[0], l[1], l[2]);
                this.mesh.add(s);
            });
        }

        // Bounding Box
        const box = new THREE.BoxHelper(new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2)));
        this.mesh.add(box);
    }

    update() {
        this.mesh.rotation.y += 0.005;
        this.mesh.rotation.x += 0.005;
    }

    draw() {
        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        this.renderer.forceContextLoss();
        this.renderer.domElement.remove();
    }
}
