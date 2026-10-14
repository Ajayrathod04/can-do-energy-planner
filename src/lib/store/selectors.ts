import { AppState } from './types';
import { MODES, EnergyMode, DEFAULT_MODE } from '../../data/modes';

export const selectCanTotalCost = (state: AppState) =>
  state.tasks.filter((t) => t.inCan && !t.completed).reduce((sum, t) => sum + t.cost, 0);

export const selectActiveMode = (state: AppState): EnergyMode =>
  MODES.find((m) => m.id === state.activeModeId) || DEFAULT_MODE;
