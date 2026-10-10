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
        backgroundClass: 'bg-gradient-to-b from-[#FFF4E0] to-[#FFF6E5]',
        glowColor: 'rgba(255, 140, 50, 0.15)',
        hasStreetlight: false,
        description: 'First light horizon amber warming the paper.',
      };
    case 'day':
      return {
        period: 'day',
        name: 'Day (Sky & Cream)',
        backgroundClass: 'bg-gradient-to-b from-[#DDF1FF] to-[#FFF6E5]',
        glowColor: 'rgba(56, 189, 248, 0.12)',
        hasStreetlight: false,
        description: 'Crisp daylight diffuse illumination.',
      };
    case 'dusk':
      return {
        period: 'dusk',
        name: 'Dusk (Peach Tint)',
        backgroundClass: 'bg-gradient-to-b from-[#FFEAEF] to-[#FFF6E5]',
        glowColor: 'rgba(255, 61, 139, 0.15)',
        hasStreetlight: false,
        description: 'Twilight peach skyline reflection on cream paper.',
      };
    case 'night':
    default:
      return {
        period: 'night',
        name: 'Night (Streetlight Cone)',
        backgroundClass: 'bg-[#121212]',
        glowColor: 'rgba(47, 91, 255, 0.12)',
        hasStreetlight: true,
        description: 'Cool asphalt blue under an incandescent sodium streetlight (opt-in).',
      };
  }
}
