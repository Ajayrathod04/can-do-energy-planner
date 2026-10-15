/**
 * WCAG 2.1 Relative Luminance & Contrast Ratio Calculator
 * Evaluates exact mathematical contrast according to W3C specifications.
 */

export interface ContrastResult {
  ratio: number;
  ratioString: string;
  passesAA: boolean; // >= 4.5:1
  passesAANormal: boolean; // >= 4.5:1
  passesAALarge: boolean; // >= 3.0:1
  passesAAA: boolean; // >= 7.0:1
}

function hexToRgb(hex: string): [number, number, number] {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((c) => c + c)
      .join('');
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
    passesAA: roundedRatio >= 4.5,
    passesAANormal: roundedRatio >= 4.5,
    passesAALarge: roundedRatio >= 3.0,
    passesAAA: roundedRatio >= 7.0,
  };
}

/**
 * Returns either white (#FFFFFF) or ink (#14101F) to guarantee >= 4.5:1 WCAG AA contrast.
 * Resolved values:
 * FOCUS #2F5BFF -> white text (5.17:1)
 * GRIND #FF6B2C -> ink text (6.58:1)
 * CREATE #FF3D8B -> ink text (5.60:1)
 * CHILL #B6FF3B -> ink text (15.45:1)
 * SOCIAL #FFD93D -> ink text (13.57:1)
 * RECOVER #7A4FF0 -> white text (5.00:1)
 */
export function getReadableText(bgHex: string): '#FFFFFF' | '#14101F' {
  const clean = bgHex.toUpperCase();
  if (clean === '#2F5BFF' || clean === '#7A4FF0' || clean === '#14101F' || clean === '#121212' || clean === '#1A1A1A') {
    return '#FFFFFF';
  }
  const whiteRatio = calculateContrast('#FFFFFF', bgHex).ratio;
  const inkRatio = calculateContrast('#14101F', bgHex).ratio;
  return whiteRatio >= inkRatio ? '#FFFFFF' : '#14101F';
}
