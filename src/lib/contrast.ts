/**
 * WCAG 2.1 Relative Luminance & Contrast Ratio Calculator
 * Evaluates exact mathematical contrast according to W3C specifications.
 */

export interface ContrastResult {
  ratio: number;
  ratioString: string;
  passesAANormal: boolean; // >= 4.5:1
  passesAALarge: boolean;  // >= 3.0:1
  passesAAA: boolean;      // >= 7.0:1
}

function hexToRgb(hex: string): [number, number, number] {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  const num = parseInt(cleanHex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function getsRGB(channel: number): number {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function getRelativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * getsRGB(r) + 0.7152 * getsRGB(g) + 0.0722 * getsRGB(b);
}

export function calculateContrast(foregroundHex: string, backgroundHex: string): ContrastResult {
  const lum1 = getRelativeLuminance(foregroundHex);
  const lum2 = getRelativeLuminance(backgroundHex);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  const rawRatio = (lighter + 0.05) / (darker + 0.05);
  const roundedRatio = Math.round(rawRatio * 100) / 100;

  return {
    ratio: roundedRatio,
    ratioString: `${roundedRatio.toFixed(2)}:1`,
    passesAANormal: roundedRatio >= 4.5,
    passesAALarge: roundedRatio >= 3.0,
    passesAAA: roundedRatio >= 7.0,
  };
}
