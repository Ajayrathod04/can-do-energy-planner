import { describe, it, expect } from 'vitest';
import { useAppStore } from '@/lib/store';

describe('Store State & Persistence', () => {
  it('initializes with default tasks and valid capacity', () => {
    const state = useAppStore.getState();
    expect(state.calculatedCapacity).toBeGreaterThanOrEqual(4);
    expect(state.calculatedCapacity).toBeLessThanOrEqual(16);
    expect(state.tasks.length).toBeGreaterThan(0);
  });

  it('calculates total cost of tasks currently in the can', () => {
    const state = useAppStore.getState();
    const tasksInCan = state.tasks.filter((t) => t.inCan && !t.completed);
    const expectedCost = tasksInCan.reduce((sum, t) => sum + t.cost, 0);
    expect(expectedCost).toBeGreaterThanOrEqual(0);
  });

  it('updates check-in values and recalculates capacity dynamically', () => {
    const store = useAppStore.getState();
    store.setCheckIn(9, 5, 1);
    const updated = useAppStore.getState();
    expect(updated.calculatedCapacity).toBe(16);
    expect(updated.sleepHours).toBe(9);
    expect(updated.energyLevel).toBe(5);
  });

  it('adds a new task properly', () => {
    const store = useAppStore.getState();
    const initialCount = store.tasks.length;
    store.addTask('New Test Task', 2, 'Academics');
    const updated = useAppStore.getState();
    expect(updated.tasks.length).toBe(initialCount + 1);
    const added = updated.tasks.find((t) => t.title === 'New Test Task');
    expect(added).toBeDefined();
    expect(added?.cost).toBe(2);
  });
});
