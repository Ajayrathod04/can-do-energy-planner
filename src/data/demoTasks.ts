export interface TaskItem {
  id: string;
  title: string;
  cost: number; // In paint units (1 to 5)
  category: 'Academics' | 'Life' | 'Team' | 'Personal' | 'Reading';
  dueDate?: string;
  inCan: boolean;
  completed: boolean;
  completedAt?: string;
}

export const DEMO_TASKS: TaskItem[] = [
  {
    id: 'demo-1',
    title: 'OS Homework: Kernel Memory Allocator',
    cost: 4,
    category: 'Academics',
    dueDate: 'Today',
    inCan: true,
    completed: false,
  },
  {
    id: 'demo-2',
    title: 'Review Discrete Math Graph Proofs',
    cost: 3,
    category: 'Academics',
    dueDate: 'Tomorrow',
    inCan: true,
    completed: false,
  },
  {
    id: 'demo-3',
    title: 'Cook Batch Meal & Grocery Run',
    cost: 2,
    category: 'Life',
    dueDate: 'Today',
    inCan: true,
    completed: false,
  },
  {
    id: 'demo-4',
    title: 'Software Studio Group Standup',
    cost: 2,
    category: 'Team',
    dueDate: 'Today',
    inCan: false,
    completed: false,
  },
  {
    id: 'demo-5',
    title: 'Fold Laundry & Quick Tidy',
    cost: 1,
    category: 'Life',
    dueDate: 'Later',
    inCan: false,
    completed: false,
  },
  {
    id: 'demo-6',
    title: 'Debug Canvas Spray Particle Engine',
    cost: 3,
    category: 'Personal',
    dueDate: 'Tonight',
    inCan: false,
    completed: false,
  },
  {
    id: 'demo-7',
    title: 'Read Cognitive Load HCI Paper',
    cost: 2,
    category: 'Reading',
    dueDate: 'Friday',
    inCan: false,
    completed: false,
  },
];
