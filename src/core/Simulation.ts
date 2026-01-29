export type ControlType = 'slider' | 'button' | 'checkbox' | 'select';

export interface ControlConfig {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    checked?: boolean;
    options?: string[];
}

export type ControlCallback = (value: any) => void;

export abstract class Simulation {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected width: number;
    protected height: number;
    protected addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void;
    protected updateData: (text: string) => void;

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.addControl = addControl;
        this.updateData = updateData;
    }

    abstract update(): void;
    abstract draw(): void;

    public reset(): void {
        // Optional override
    }

    public destroy(): void {
        // Optional override for cleanup
    }

    // Helper for 3D-like particles
    protected drawSphere(x: number, y: number, radius: number, color: string): void {
        // Fallback for very small particles or performance
        if (radius < 2) {
            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, Math.PI * 2);
            this.ctx.fill();
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
