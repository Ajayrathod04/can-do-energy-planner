import { AppState } from './types';

export const STORAGE_KEY = 'can_do_planner_v1';

export function computeDailyCapacity(
  sleep: number,
  energy: number,
  stress: number,
  modeMultiplier: number
): number {
  const raw = (4 + sleep * 0.9 + (energy - 3) * 1.2 - (stress - 3) * 0.8) * modeMultiplier;
  const clamped = Math.min(16, Math.max(4, raw));
  return Math.round(clamped);
}

export function loadPersistedState(): Partial<AppState> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('Failed to load state from localStorage:', err);
  }
  return {};
}

export function savePersistedState(state: AppState) {
  if (typeof window === 'undefined') return;
  try {
    const subset = {
      sleepHours: state.sleepHours,
      energyLevel: state.energyLevel,
      stressLevel: state.stressLevel,
      activeModeId: state.activeModeId,
      tasks: state.tasks,
      wallTags: state.wallTags,
      soundEnabled: state.soundEnabled,
      highContrast: state.highContrast,
      reducedMotion: state.reducedMotion,
      dyslexiaFont: state.dyslexiaFont,
      fontScale: state.fontScale,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subset));
  } catch (err) {
    console.warn('Failed to persist state to localStorage:', err);
  }
}
