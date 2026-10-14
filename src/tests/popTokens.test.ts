import { describe, it, expect } from 'vitest';
import { POP_TOKENS, getReadableTextColor } from '@/styles/tokens';
import { calculateContrast } from '@/lib/contrast';

describe('S1 Pop Poster Tokens & Contrast Utility', () => {
  it('defines all required Pop Poster tokens', () => {
    expect(POP_TOKENS.paper).toBe('#FFF6E5');
    expect(POP_TOKENS.ink).toBe('#14101F');
    expect(POP_TOKENS.stageOrange).toBe('#FF6B2C');
    expect(POP_TOKENS.violet).toBe('#7C5CFF');
    expect(POP_TOKENS.pink).toBe('#FF3D8B');
    expect(POP_TOKENS.lime).toBe('#B6FF3B');
    expect(POP_TOKENS.sky).toBe('#7DD3FC');
    expect(POP_TOKENS.sun).toBe('#FFD93D');
  });

  it('computes contrast correctly between ink and paper', () => {
    const res = calculateContrast(POP_TOKENS.ink, POP_TOKENS.paper);
    expect(res.ratio).toBeGreaterThan(15.0);
    expect(res.passesAANormal).toBe(true);
  });

  it('selects ink text on bright fills (sun, lime, sky, paper)', () => {
    expect(getReadableTextColor(POP_TOKENS.sun)).toBe(POP_TOKENS.ink);
    expect(getReadableTextColor(POP_TOKENS.lime)).toBe(POP_TOKENS.ink);
    expect(getReadableTextColor(POP_TOKENS.sky)).toBe(POP_TOKENS.ink);
    expect(getReadableTextColor(POP_TOKENS.paper)).toBe(POP_TOKENS.ink);
  });

  it('selects paper text on dark fills', () => {
    expect(getReadableTextColor('#14101F')).toBe(POP_TOKENS.paper);
    expect(getReadableTextColor('#121212')).toBe(POP_TOKENS.paper);
  });
});
