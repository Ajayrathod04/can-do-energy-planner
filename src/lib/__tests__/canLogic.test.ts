import { describe, it, expect } from 'vitest';
import { computeDailyCapacity } from '../store';
import { MODES } from '../../data/modes';

describe('Can Logic & Multipliers', () => {
  it('Baseline capacity for median parameters in FOCUS mode equals 11 units', () => {
    const cap1 = computeDailyCapacity(7.5, 3, 3, 1.0);
    expect(cap1).toBe(11);
  });

  it('Applies GRIND mode multiplier correctly', () => {
    const grindMode = MODES.find((m) => m.id === 'grind');
    const cap2 = computeDailyCapacity(8, 4, 2, grindMode?.multiplier || 1.1);
    expect(cap2).toBe(15);
  });

  it('Enforces minimum capacity clamp of 4 paint units', () => {
    const recoverMode = MODES.find((m) => m.id === 'recover');
    const cap3 = computeDailyCapacity(3, 1, 5, recoverMode?.multiplier || 0.6);
    expect(cap3).toBe(4);
  });

  it('Enforces maximum capacity clamp of 16 paint units', () => {
    const cap4 = computeDailyCapacity(12, 5, 1, 1.1);
    expect(cap4).toBe(16);
  });
});
