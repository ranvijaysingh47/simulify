import { ProjectileMotion } from '../../simulations/physics/ProjectileMotion';
import { ChallengeSystem } from '../../core/ChallengeCore';
import { type ControlType, type ControlConfig, type ControlCallback } from '../../core/Simulation';

export class ProjectileChallenge extends ProjectileMotion {
    private challengeSystem: ChallengeSystem;
    // private challengeLabel: HTMLElement | null = null; // Unused for now

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        addControl: (type: ControlType, label: string, config: ControlConfig, callback: ControlCallback) => void,
        updateData: (text: string) => void
    ) {
        super(canvas, ctx, addControl, updateData);

        const challenges = [
            { id: 'c1', question: 'Hit the target at 50m! (Hint: Try Angle 45, Speed ~22)', targetValue: 50, tolerance: 2, units: 'm', hint: '' },
            { id: 'c2', question: 'Hit the target at 80m! (Hint: Increase speed)', targetValue: 80, tolerance: 3, units: 'm', hint: '' },
            { id: 'c3', question: 'High arc target at 20m! (Hint: Angle > 70)', targetValue: 20, tolerance: 1, units: 'm', hint: '' }
        ];

        this.challengeSystem = new ChallengeSystem(challenges, (success, msg) => this.onChallengeResult(success, msg));

        this.addControl('button', 'Check Distance', {}, () => this.verify());

        setTimeout(() => this.showCurrentChallenge(), 500);
    }

    verify() {
        const balls = (this as any).balls;
        if (balls.length > 0) {
            const lastBall = balls[balls.length - 1];
            const distance = (lastBall.pos.x - 50) / 10;

            if (this.challengeSystem.checkAnswer(distance)) {
                // Success handled in callback
            } else {
                alert(`Missed! You hit ${distance.toFixed(1)}m. Target is ${(this.challengeSystem.getCurrentChallenge()?.targetValue)}m.`);
            }
        } else {
            alert("Fire the cannon first!");
        }
    }

    onChallengeResult(_success: boolean, msg: string) {
        alert(msg);
        this.showCurrentChallenge();
    }

    showCurrentChallenge() {
        const c = this.challengeSystem.getCurrentChallenge();
        if (c) {
            console.log(`Current Challenge: ${c.question}`);
        }
    }

    draw() {
        super.draw();

        const c = this.challengeSystem.getCurrentChallenge();
        if (c) {
            const targetX = 50 + c.targetValue * 10;
            const targetY = this.height - 10;

            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
            this.ctx.fillRect(targetX - (c.tolerance * 10), targetY - 5, (c.tolerance * 20), 5);

            this.ctx.fillStyle = 'red';
            this.ctx.beginPath();
            this.ctx.moveTo(targetX, targetY);
            this.ctx.lineTo(targetX, targetY - 40);
            this.ctx.lineTo(targetX + 20, targetY - 30);
            this.ctx.lineTo(targetX, targetY - 20);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.fillStyle = 'black';
            this.ctx.fillText(`Target: ${c.targetValue}m`, targetX - 20, targetY - 50);

            this.ctx.fillStyle = 'black';
            this.ctx.font = '16px sans-serif';
            this.ctx.fillText(`Challenge: ${c.question}`, 10, 30);
        }
    }
}
