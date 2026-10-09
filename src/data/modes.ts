import { calculateContrast, ContrastResult } from '../lib/contrast';

export type ModePattern = 'stripes' | 'dots' | 'zigzag' | 'waves' | 'checks' | 'solid';

export interface EnergyMode {
  id: string;
  name: string;
  accentColor: string;
  smallTextColor: string; // Lifted for WCAG AA compliance on dark backgrounds
  canColor: string;
  pattern: ModePattern;
  patternLabel: string;
  iconName: 'crosshair' | 'flame' | 'sparkles' | 'leaf' | 'users' | 'heart';
  multiplier: number;
  tagline: string;
  description: string;
  bestFor: string;
  contrastOnDark: ContrastResult;
  contrastOnPaper: ContrastResult;
}

const DARK_BG = '#121212';
const PAPER_BG = '#F4EFE6';

export const MODES: EnergyMode[] = [
  {
    id: 'focus',
    name: 'FOCUS',
    accentColor: '#2F5BFF', // Cobalt blue
    smallTextColor: '#6B8CFF', // WCAG AA lifted for small body copy on dark
    canColor: '#1A3CBF',
    pattern: 'stripes',
    patternLabel: 'Diagonal Stripes // Precise Targeting',
    iconName: 'crosshair',
    multiplier: 1.0,
    tagline: 'Deep flow & deliberate progress',
    description: 'Steady, single-task rhythm for high-cognitive work with minimal interruptions.',
    bestFor: 'Coding, problem sets, essay writing',
    contrastOnDark: calculateContrast('#2F5BFF', DARK_BG),
    contrastOnPaper: calculateContrast('#2F5BFF', PAPER_BG),
  },
  {
    id: 'grind',
    name: 'GRIND',
    accentColor: '#FF6B2C', // Safety orange
    smallTextColor: '#FF6B2C',
    canColor: '#CC4C14',
    pattern: 'dots',
    patternLabel: 'Halftone Dots // High Intensity',
    iconName: 'flame',
    multiplier: 1.1,
    tagline: 'High stamina deadline sprints',
    description: 'Extra push capacity for exam week or crunch time. Use sparingly to avoid burnout debt.',
    bestFor: 'Final submissions, project deadlines, exam prep',
    contrastOnDark: calculateContrast('#FF6B2C', DARK_BG),
    contrastOnPaper: calculateContrast('#FF6B2C', PAPER_BG),
  },
  {
    id: 'create',
    name: 'CREATE',
    accentColor: '#FF3D8B', // Hot magenta pink
    smallTextColor: '#FF3D8B',
    canColor: '#D11D67',
    pattern: 'zigzag',
    patternLabel: 'Zigzag Chevrons // Non-linear Flow',
    iconName: 'sparkles',
    multiplier: 1.0,
    tagline: 'Exploratory & generative flow',
    description: 'Messy, open-ended ideation where output is non-linear and experimentation is rewarded.',
    bestFor: 'Design, brainstorming, artistic projects',
    contrastOnDark: calculateContrast('#FF3D8B', DARK_BG),
    contrastOnPaper: calculateContrast('#FF3D8B', PAPER_BG),
  },
  {
    id: 'chill',
    name: 'CHILL',
    accentColor: '#B6FF3B', // Electric lime
    smallTextColor: '#B6FF3B',
    canColor: '#84C918',
    pattern: 'waves',
    patternLabel: 'Sinusoidal Waves // Gentle Cadence',
    iconName: 'leaf',
    multiplier: 0.9,
    tagline: 'Sustainable low-pressure cadence',
    description: 'Deliberate down-shifting. Keeping momentum without draining reserves.',
    bestFor: 'Maintenance, light reading, organizing notes',
    contrastOnDark: calculateContrast('#B6FF3B', DARK_BG),
    contrastOnPaper: calculateContrast('#B6FF3B', PAPER_BG),
  },
  {
    id: 'social',
    name: 'SOCIAL',
    accentColor: '#FFD93D', // Tag yellow
    smallTextColor: '#FFD93D',
    canColor: '#D4B01E',
    pattern: 'checks',
    patternLabel: 'Checkerboard // Distributed Meetings',
    iconName: 'users',
    multiplier: 0.8,
    tagline: 'Collaborative & people-first',
    description: 'Accounting for the cognitive drain of group meetings, syncs, and discussions.',
    bestFor: 'Team projects, office hours, study groups',
    contrastOnDark: calculateContrast('#FFD93D', DARK_BG),
    contrastOnPaper: calculateContrast('#FFD93D', PAPER_BG),
  },
  {
    id: 'recover',
    name: 'RECOVER',
    accentColor: '#8B5CF6', // Graffiti violet
    smallTextColor: '#A78BFA',
    canColor: '#6D28D9',
    pattern: 'solid',
    patternLabel: 'Solid Border // Absolute Sanctuary',
    iconName: 'heart',
    multiplier: 0.6,
    tagline: 'Restoration & boundary protection',
    description: 'Gentle, minimum-viable effort. Sickness, burnout prevention, or active rest.',
    bestFor: 'Rest, sleep catch-up, hydration, self-care',
    contrastOnDark: calculateContrast('#8B5CF6', DARK_BG),
    contrastOnPaper: calculateContrast('#8B5CF6', PAPER_BG),
  },
];

export const DEFAULT_MODE = MODES[0];
