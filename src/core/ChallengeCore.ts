export interface Challenge {
    id: string;
    question: string;
    targetValue: number; // Approximate target
    tolerance: number; // e.g., +/- 0.5
    units: string;
    hint: string;
}

export type ChallengeCallback = (success: boolean, message: string) => void;

export class ChallengeSystem {
    private currentChallengeIndex: number = 0;
    private challenges: Challenge[] = [];
    private score: number = 0;
    private onComplete: ChallengeCallback;

    constructor(challenges: Challenge[], onComplete: ChallengeCallback) {
        this.challenges = challenges;
        this.onComplete = onComplete;
    }

    public getCurrentChallenge(): Challenge | null {
        if (this.currentChallengeIndex < this.challenges.length) {
            return this.challenges[this.currentChallengeIndex];
        }
        return null;
    }

    public checkAnswer(currentValue: number): boolean {
        const challenge = this.getCurrentChallenge();
        if (!challenge) return false;

        const diff = Math.abs(currentValue - challenge.targetValue);
        const success = diff <= challenge.tolerance;

        if (success) {
            this.handleSuccess();
        }

        return success;
    }

    private handleSuccess() {
        this.score += 100;
        this.currentChallengeIndex++;

        const next = this.getCurrentChallenge();
        if (next) {
            this.onComplete(true, `Correct! Next Challenge: ${next.question}`);
        } else {
            this.onComplete(true, `All Challenges Complete! Final Score: ${this.score}`);
        }
    }

    public getProgress(): string {
        return `Challenge ${this.currentChallengeIndex + 1}/${this.challenges.length} | Score: ${this.score}`;
    }
}
