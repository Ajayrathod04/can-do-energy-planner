import { create } from 'zustand';
import { MODES, DEFAULT_MODE } from '../../data/modes';
import { DEMO_TASKS, TaskItem } from '../../data/demoTasks';
import { AppState, WallTag } from './types';
import { computeDailyCapacity, savePersistedState } from './storage';
import { getInitialValues } from './initialState';

export * from './types';
export * from './storage';
export * from './selectors';
export * from './initialState';

export const useAppStore = create<AppState>((set) => ({
  ...getInitialValues(),

  setCheckIn: (sleep, energy, stress) => {
    set((state) => {
      const mode = MODES.find((m) => m.id === state.activeModeId) || DEFAULT_MODE;
      const capacity = computeDailyCapacity(sleep, energy, stress, mode.multiplier);
      const next = {
        ...state,
        sleepHours: sleep,
        energyLevel: energy,
        stressLevel: stress,
        calculatedCapacity: capacity,
      };
      savePersistedState(next);
      return next;
    });
  },

  setActiveMode: (modeId) => {
    set((state) => {
      const mode = MODES.find((m) => m.id === modeId) || DEFAULT_MODE;
      const capacity = computeDailyCapacity(
        state.sleepHours,
        state.energyLevel,
        state.stressLevel,
        mode.multiplier
      );
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--active-mode-color', mode.accentColor);
      }
      const next = { ...state, activeModeId: modeId, calculatedCapacity: capacity };
      savePersistedState(next);
      return next;
    });
  },

  addTask: (title, cost, category, dueDate) => {
    set((state) => {
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
    set((state) => {
      const next = { ...state, tasks: state.tasks.filter((t) => t.id !== id) };
      savePersistedState(next);
      return next;
    });
  },

  toggleInCan: (id) => {
    set((state) => {
      const next = {
        ...state,
        tasks: state.tasks.map((t) => (t.id === id ? { ...t, inCan: !t.inCan } : t)),
      };
      savePersistedState(next);
      return next;
    });
  },

  moveTaskToTomorrow: (id) => {
    set((state) => {
      const next = {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === id ? { ...t, inCan: false, dueDate: 'Tomorrow' } : t
        ),
      };
      savePersistedState(next);
      return next;
    });
  },

  completeTask: (id) => {
    set((state) => {
      const task = state.tasks.find((t) => t.id === id);
      if (!task) return state;

      const mode = MODES.find((m) => m.id === state.activeModeId) || DEFAULT_MODE;
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

      const updatedTasks = state.tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: true,
              inCan: false,
              completedAt: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }),
            }
          : t
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

  logRestSession: (note = 'Resting counts as capacity renewal') => {
    set((state) => {
      const newTag: WallTag = {
        id: `wall-tag-rest-${Date.now()}`,
        taskId: 'rest-session',
        title: note,
        modeColor: '#8B5CF6',
        modeName: 'RECOVER',
        cost: 0,
        completedAt: 'Just now',
        seed: Math.floor(Math.random() * 100000),
      };
      const next = {
        ...state,
        wallTags: [newTag, ...state.wallTags],
      };
      savePersistedState(next);
      return next;
    });
  },

  resetDemo: () => {
    set((state) => {
      const mode = MODES.find((m) => m.id === 'focus') || DEFAULT_MODE;
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
    set((state) => {
      const next = { ...state, soundEnabled: !state.soundEnabled };
      savePersistedState(next);
      return next;
    });
  },

  setA11ySetting: (key, value) => {
    set((state) => {
      const next = { ...state, [key]: value };
      savePersistedState(next);
      return next;
    });
  },
}));

export const usePlannerStore = useAppStore;
