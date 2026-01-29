/**
 * Physics Engine Core
 * Handles vector math and basic physics utilities
 */

export class Vector2 {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(v: Vector2): Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    sub(v: Vector2): Vector2 {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    mult(n: number): Vector2 {
        return new Vector2(this.x * n, this.y * n);
    }

    div(n: number): Vector2 {
        if (n === 0) return new Vector2(0, 0);
        return new Vector2(this.x / n, this.y / n);
    }

    mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    magSq(): number {
        return this.x * this.x + this.y * this.y;
    }

    normalize(): Vector2 {
        const m = this.mag();
        if (m !== 0) {
            return this.div(m);
        }
        return new Vector2(0, 0);
    }

    limit(max: number): Vector2 {
        if (this.mag() > max) {
            return this.normalize().mult(max);
        }
        return this;
    }

    dist(v: Vector2): number {
        return v.sub(this).mag();
    }

    heading(): number {
        return Math.atan2(this.y, this.x);
    }

    copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    static add(v1: Vector2, v2: Vector2): Vector2 {
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    }

    static sub(v1: Vector2, v2: Vector2): Vector2 {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    }

    static dist(v1: Vector2, v2: Vector2): number {
        return v1.dist(v2);
    }
}

export const Physics = {
    // Basic constants
    gravity: new Vector2(0, 0.5),

    // Collision detection
    checkCircleCollision(c1: { pos: Vector2, radius: number }, c2: { pos: Vector2, radius: number }): boolean {
        const dist = c1.pos.dist(c2.pos);
        return dist < (c1.radius + c2.radius);
    },

    // Resolve elastic collision between two circles
    resolveElasticCollision(p1: { pos: Vector2, vel: Vector2, mass: number }, p2: { pos: Vector2, vel: Vector2, mass: number }): void {
        const vCollision = Vector2.sub(p2.pos, p1.pos);
        const dist = vCollision.mag();

        if (dist === 0) return; // Prevent divide by zero

        const vCollisionNorm = vCollision.div(dist);
        const vRelativeVelocity = Vector2.sub(p1.vel, p2.vel);
        const speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

        // Moving away
        if (speed < 0) return;

        const impulse = 2 * speed / (p1.mass + p2.mass);

        p1.vel.x -= (impulse * p2.mass * vCollisionNorm.x);
        p1.vel.y -= (impulse * p2.mass * vCollisionNorm.y);
        p2.vel.x += (impulse * p1.mass * vCollisionNorm.x);
        p2.vel.y += (impulse * p1.mass * vCollisionNorm.y);
    }
};
