import { TaskItem } from '../../data/demoTasks';

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

export interface AppState {
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
  logRestSession: (note?: string) => void;
  resetDemo: () => void;
  toggleSound: () => void;
  setA11ySetting: (
    key: 'highContrast' | 'reducedMotion' | 'dyslexiaFont' | 'fontScale',
    value: boolean | number
  ) => void;
}
