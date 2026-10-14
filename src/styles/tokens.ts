import { calculateContrast } from '../lib/contrast';

export const POP_TOKENS = {
  paper: '#FFF6E5',
  ink: '#14101F',
  stageOrange: '#FF6B2C',
  violet: '#7C5CFF',
  pink: '#FF3D8B',
  lime: '#B6FF3B',
  sky: '#7DD3FC',
  sun: '#FFD93D',
} as const;

export type PopColorToken = keyof typeof POP_TOKENS;

/**
 * Returns either ink (#14101F) or paper (#FFF6E5) depending on which gives
 * higher WCAG contrast against the fill color.
 */
export function getReadableTextColor(bgHex: string): string {
  const contrastWithInk = calculateContrast(POP_TOKENS.ink, bgHex).ratio;
  const contrastWithPaper = calculateContrast(POP_TOKENS.paper, bgHex).ratio;
  return contrastWithInk >= contrastWithPaper ? POP_TOKENS.ink : POP_TOKENS.paper;
}
