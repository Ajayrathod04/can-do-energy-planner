export type CanoEmotion =
  | 'SLEEPING'
  | 'HAPPY'
  | 'EATING'
  | 'STUFFED'
  | 'WORRIED'
  | 'FOCUS'
  | 'PROUD'
  | 'RESTING';

export type CanoSkinMode =
  | 'focus'
  | 'grind'
  | 'create'
  | 'chill'
  | 'social'
  | 'recover';

export interface CanoCharacterProps {
  emotion?: CanoEmotion;
  skinMode?: CanoSkinMode;
  capacity?: number;
  usedPaint?: number;
  isNearTask?: boolean;
  isShaking?: boolean;
  reducedMotion?: boolean;
  pointerPos?: { x: number; y: number };
  onClick?: () => void;
}
