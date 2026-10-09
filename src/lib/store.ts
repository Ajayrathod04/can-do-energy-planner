import { create } from 'zustand';
import { MODES, EnergyMode, DEFAULT_MODE } from '../data/modes';
import { DEMO_TASKS, TaskItem } from '../data/demoTasks';

export interface WallTag {
  id: string;
  taskId: string;
  title: string;
  modeColor: string;
  modeName: string;
  cost: number;
  completedAt: string;
  seed: number;
}

interface AppState {
  // Check-in parameters
  sleepHours: number;
  energyLevel: number;
  stressLevel: number;
  activeModeId: string;

  // Capacity calculation
  calculatedCapacity: number;

  // Task list
  tasks: TaskItem[];

  // Wall graffiti gallery
  wallTags: WallTag[];

  // A11y & Settings
  soundEnabled: boolean; // OFF by default
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexiaFont: boolean;
  fontScale: number; // 1.0 to 1.3

  // Actions
  setCheckIn: (sleep: number, energy: number, stress: number) => void;
  setActiveMode: (modeId: string) => void;
  addTask: (title: string, cost: number, category: TaskItem['category'], dueDate?: string) => void;
  deleteTask: (id: string) => void;
  toggleInCan: (id: string) => void;
  moveTaskToTomorrow: (id: string) => void;
  completeTask: (id: string) => void;
  resetDemo: () => void;
  toggleSound: () => void;
  setA11ySetting: (key: 'highContrast' | 'reducedMotion' | 'dyslexiaFont' | 'fontScale', value: boolean | number) => void;
}

const STORAGE_KEY = 'can_do_planner_v1';

export function computeDailyCapacity(sleep: number, energy: number, stress: number, modeMultiplier: number): number {
  const raw = (4 + sleep * 0.9 + (energy - 3) * 1.2 - (stress - 3) * 0.8) * modeMultiplier;
  const clamped = Math.min(16, Math.max(4, raw));
  return Math.round(clamped);
}

function loadPersistedState(): Partial<AppState> {
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

function savePersistedState(state: AppState) {
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

const initialSaved = loadPersistedState();
const initialSleep = initialSaved.sleepHours ?? 7.5;
const initialEnergy = initialSaved.energyLevel ?? 3;
const initialStress = initialSaved.stressLevel ?? 3;
const initialModeId = initialSaved.activeModeId ?? DEFAULT_MODE.id;
const initialMode = MODES.find(m => m.id === initialModeId) || DEFAULT_MODE;

export const useAppStore = create<AppState>((set) => ({
  sleepHours: initialSleep,
  energyLevel: initialEnergy,
  stressLevel: initialStress,
  activeModeId: initialModeId,
  calculatedCapacity: computeDailyCapacity(initialSleep, initialEnergy, initialStress, initialMode.multiplier),
  tasks: initialSaved.tasks ?? DEMO_TASKS,
  wallTags: initialSaved.wallTags ?? [
    {
      id: 'tag-init-1',
      taskId: 'demo-0',
      title: 'Resting counts as capacity renewal',
      modeColor: '#8B5CF6',
      modeName: 'RECOVER',
      cost: 0,
      completedAt: 'Yesterday',
      seed: 42,
    }
  ],
  soundEnabled: initialSaved.soundEnabled ?? false, // OFF by default
  highContrast: initialSaved.highContrast ?? false,
  reducedMotion: initialSaved.reducedMotion ?? false,
  dyslexiaFont: initialSaved.dyslexiaFont ?? false,
  fontScale: initialSaved.fontScale ?? 1.0,

  setCheckIn: (sleep, energy, stress) => {
    set(state => {
      const mode = MODES.find(m => m.id === state.activeModeId) || DEFAULT_MODE;
      const capacity = computeDailyCapacity(sleep, energy, stress, mode.multiplier);
      const next = { ...state, sleepHours: sleep, energyLevel: energy, stressLevel: stress, calculatedCapacity: capacity };
      savePersistedState(next);
      return next;
    });
  },

  setActiveMode: (modeId) => {
    set(state => {
      const mode = MODES.find(m => m.id === modeId) || DEFAULT_MODE;
      const capacity = computeDailyCapacity(state.sleepHours, state.energyLevel, state.stressLevel, mode.multiplier);
      // Update CSS variable on document body
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--active-mode-color', mode.accentColor);
      }
      const next = { ...state, activeModeId: modeId, calculatedCapacity: capacity };
      savePersistedState(next);
      return next;
    });
  },

  addTask: (title, cost, category, dueDate) => {
    set(state => {
      const newTask: TaskItem = {
        id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        title,
        cost: Math.min(5, Math.max(1, cost)),
        category,
        dueDate: dueDate || 'Today',
        inCan: true,
        completed: false,
      };
      const next = { ...state, tasks: [newTask, ...state.tasks] };
      savePersistedState(next);
      return next;
    });
  },

  deleteTask: (id) => {
    set(state => {
      const next = { ...state, tasks: state.tasks.filter(t => t.id !== id) };
      savePersistedState(next);
      return next;
    });
  },

  toggleInCan: (id) => {
    set(state => {
      const next = {
        ...state,
        tasks: state.tasks.map(t => t.id === id ? { ...t, inCan: !t.inCan } : t)
      };
      savePersistedState(next);
      return next;
    });
  },

  moveTaskToTomorrow: (id) => {
    set(state => {
      const next = {
        ...state,
        tasks: state.tasks.map(t => t.id === id ? { ...t, inCan: false, dueDate: 'Tomorrow' } : t)
      };
      savePersistedState(next);
      return next;
    });
  },

  completeTask: (id) => {
    set(state => {
      const task = state.tasks.find(t => t.id === id);
      if (!task) return state;

      const mode = MODES.find(m => m.id === state.activeModeId) || DEFAULT_MODE;
      const newTag: WallTag = {
        id: `wall-tag-${Date.now()}`,
        taskId: task.id,
        title: task.title,
        modeColor: mode.accentColor,
        modeName: mode.name,
        cost: task.cost,
        completedAt: 'Just now',
        seed: Math.floor(Math.random() * 100000),
      };

      const updatedTasks = state.tasks.map(t =>
        t.id === id ? { ...t, completed: true, inCan: false, completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) } : t
      );

      const next = {
        ...state,
        tasks: updatedTasks,
        wallTags: [newTag, ...state.wallTags],
      };
      savePersistedState(next);
      return next;
    });
  },

  resetDemo: () => {
    set(state => {
      const mode = MODES.find(m => m.id === 'focus') || DEFAULT_MODE;
      const capacity = computeDailyCapacity(7.5, 3, 3, mode.multiplier);
      const next = {
        ...state,
        sleepHours: 7.5,
        energyLevel: 3,
        stressLevel: 3,
        activeModeId: 'focus',
        calculatedCapacity: capacity,
        tasks: DEMO_TASKS,
      };
      savePersistedState(next);
      return next;
    });
  },

  toggleSound: () => {
    set(state => {
      const next = { ...state, soundEnabled: !state.soundEnabled };
      savePersistedState(next);
      return next;
    });
  },

  setA11ySetting: (key, value) => {
    set(state => {
      const next = { ...state, [key]: value };
      savePersistedState(next);
      return next;
    });
  },
}));

// Helper selector for total paint units in can
export const selectCanTotalCost = (state: AppState) =>
  state.tasks.filter(t => t.inCan && !t.completed).reduce((sum, t) => sum + t.cost, 0);

export const selectActiveMode = (state: AppState): EnergyMode =>
  MODES.find(m => m.id === state.activeModeId) || DEFAULT_MODE;
