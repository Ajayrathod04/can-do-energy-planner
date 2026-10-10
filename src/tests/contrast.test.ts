import { describe, it, expect } from 'vitest';
import { calculateContrast } from '@/lib/contrast';

describe('WCAG 2.1 Contrast Engine', () => {
  it('computes pure black on pure white as 21.0:1', () => {
    const result = calculateContrast('#000000', '#FFFFFF');
    expect(result.ratio).toBe(21.0);
    expect(result.passesAANormal).toBe(true);
    expect(result.passesAAA).toBe(true);
  });

  it('computes black ink on cream paper as > 15:1', () => {
    const result = calculateContrast('#111111', '#FFF6E5');
    expect(result.ratio).toBeGreaterThan(15.0);
    expect(result.passesAANormal).toBe(true);
  });

  it('detects insufficient contrast for low contrast pairings', () => {
    const result = calculateContrast('#CCCCCC', '#FFFFFF');
    expect(result.passesAANormal).toBe(false);
  });
});
