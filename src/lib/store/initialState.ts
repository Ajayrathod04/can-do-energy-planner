import { MODES, DEFAULT_MODE } from '../../data/modes';
import { DEMO_TASKS } from '../../data/demoTasks';
import { computeDailyCapacity, loadPersistedState } from './storage';
import { WallTag } from './types';

const initialSaved = loadPersistedState();
export const initialSleep = initialSaved.sleepHours ?? 7.5;
export const initialEnergy = initialSaved.energyLevel ?? 3;
export const initialStress = initialSaved.stressLevel ?? 3;
export const initialModeId = initialSaved.activeModeId ?? DEFAULT_MODE.id;
export const initialMode = MODES.find((m) => m.id === initialModeId) || DEFAULT_MODE;

export const defaultWallTags: WallTag[] = [
  {
    id: 'tag-init-1',
    taskId: 'demo-0',
    title: 'Resting counts as capacity renewal',
    modeColor: '#8B5CF6',
    modeName: 'RECOVER',
    cost: 0,
    completedAt: 'Yesterday',
    seed: 42,
  },
];

export const getInitialValues = () => ({
  sleepHours: initialSleep,
  energyLevel: initialEnergy,
  stressLevel: initialStress,
  activeModeId: initialModeId,
  calculatedCapacity: computeDailyCapacity(
    initialSleep,
    initialEnergy,
    initialStress,
    initialMode.multiplier
  ),
  tasks: initialSaved.tasks ?? DEMO_TASKS,
  wallTags: initialSaved.wallTags ?? defaultWallTags,
  soundEnabled: initialSaved.soundEnabled ?? false,
  highContrast: initialSaved.highContrast ?? false,
  reducedMotion: initialSaved.reducedMotion ?? false,
  dyslexiaFont: initialSaved.dyslexiaFont ?? false,
  fontScale: initialSaved.fontScale ?? 1.0,
});
