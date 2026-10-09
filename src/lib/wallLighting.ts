export type WallLightingPeriod = 'dawn' | 'day' | 'dusk' | 'night';
export type WallLightingSetting = 'auto' | 'day' | 'night';

export interface WallLightingTheme {
  period: WallLightingPeriod;
  name: string;
  backgroundClass: string;
  glowColor: string;
  hasStreetlight: boolean;
  description: string;
}

export function getCircadianPeriod(date = new Date()): WallLightingPeriod {
  const hour = date.getHours();
  if (hour >= 5 && hour < 8) return 'dawn';
  if (hour >= 8 && hour < 17) return 'day';
  if (hour >= 17 && hour < 20) return 'dusk';
  return 'night';
}

export function getWallLightingTheme(setting: WallLightingSetting = 'auto'): WallLightingTheme {
  let period: WallLightingPeriod;

  if (setting === 'day') {
    period = 'day';
  } else if (setting === 'night') {
    period = 'night';
  } else {
    period = getCircadianPeriod();
  }

  switch (period) {
    case 'dawn':
      return {
        period: 'dawn',
        name: 'Dawn (Warm Amber)',
        backgroundClass: 'bg-gradient-to-b from-[#2A160A] via-[#1A1210] to-[#121212]',
        glowColor: 'rgba(255, 140, 50, 0.15)',
        hasStreetlight: false,
        description: 'First light horizon amber warming the concrete.',
      };
    case 'day':
      return {
        period: 'day',
        name: 'Day (Soft White)',
        backgroundClass: 'bg-[#1C1C1E]',
        glowColor: 'rgba(244, 239, 230, 0.08)',
        hasStreetlight: false,
        description: 'Crisp daylight diffuse illumination.',
      };
    case 'dusk':
      return {
        period: 'dusk',
        name: 'Dusk (Magenta-Violet)',
        backgroundClass: 'bg-gradient-to-b from-[#240A26] via-[#180E1E] to-[#121212]',
        glowColor: 'rgba(255, 61, 139, 0.18)',
        hasStreetlight: false,
        description: 'Twilight purple skyline reflection.',
      };
    case 'night':
    default:
      return {
        period: 'night',
        name: 'Night (Streetlight Cone)',
        backgroundClass: 'bg-[#121212]',
        glowColor: 'rgba(47, 91, 255, 0.12)',
        hasStreetlight: true,
        description: 'Cool asphalt blue under an incandescent sodium streetlight.',
      };
  }
}
