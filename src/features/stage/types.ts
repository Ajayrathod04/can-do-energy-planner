export type StageState =
  | 'SLEEPING'
  | 'CHECKIN'
  | 'FEEDING'
  | 'FULL'
  | 'OVER'
  | 'FOCUS'
  | 'DONE'
  | 'RESTING';

export interface CheckInAnswers {
  sleep: number;
  energy: number;
  stress: number;
}
