import { describe, it, expect } from 'vitest';
import { computeDailyCapacity } from '@/lib/store';
import { MODES } from '@/data/modes';

describe('Capacity Formula & Edge Cases', () => {
  it('calculates median baseline in FOCUS mode (1.0x) as 11 paint', () => {
    const result = computeDailyCapacity(7.5, 3, 3, 1.0);
    expect(result).toBe(11);
  });

  it('applies GRIND mode multiplier correctly', () => {
    const grind = MODES.find((m) => m.id === 'grind');
    const result = computeDailyCapacity(8, 4, 2, grind?.multiplier || 1.1);
    expect(result).toBe(15);
  });

  it('clamps to minimum boundary of 4 paint units under severe sleep deprivation and stress', () => {
    const recover = MODES.find((m) => m.id === 'recover');
    const result = computeDailyCapacity(2, 1, 5, recover?.multiplier || 0.6);
    expect(result).toBe(4);
  });

  it('clamps to maximum boundary of 16 paint units under peak readiness', () => {
    const result = computeDailyCapacity(12, 5, 1, 1.3);
    expect(result).toBe(16);
  });

  it('never returns NaN or non-integer numbers', () => {
    const result = computeDailyCapacity(6.333, 2.7, 4.1, 0.95);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(4);
    expect(result).toBeLessThanOrEqual(16);
  });
});
