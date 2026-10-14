/**
 * Lightweight damped spring calculation for Three.js animation frames
 */
export interface SpringState {
  val: number;
  vel: number;
}

export function updateSpring(
  current: SpringState,
  target: number,
  stiffness = 180,
  damping = 14,
  dt = 0.016
): SpringState {
  const clampedDt = Math.min(dt, 0.064);
  const force = -stiffness * (current.val - target) - damping * current.vel;
  const nextVel = current.vel + force * clampedDt;
  const nextVal = current.val + nextVel * clampedDt;
  return { val: nextVal, vel: nextVel };
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.min(1, Math.max(0, t));
}
