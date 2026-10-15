export type CanFaceState = 'sleepy' | 'happy' | 'stuffed' | 'worried' | 'proud';

export interface InteractiveCanProps {
  capacity: number;
  usedPaint: number;
  modeColor: string;
  modeName: string;
  isFull: boolean;
  isOver: boolean;
  reducedMotion?: boolean;
  triggerSplash?: number; // timestamp to trigger droplet splash
  onCanClick?: () => void;
  className?: string;
}
