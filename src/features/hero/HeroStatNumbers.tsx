import React from 'react';

interface HeroStatNumbersProps {
  capacity: number;
  usedPaint: number;
  remaining: number;
}

export const HeroStatNumbers: React.FC<HeroStatNumbersProps> = ({
  capacity,
  usedPaint,
  remaining,
}) => {
  return (
    <div className="flex sm:flex-col justify-around gap-2 bg-white/90 backdrop-blur-xs p-2.5 sm:p-3 border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg">
      <div data-testid="stat-paint-today" className="text-center sm:text-left">
        <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">
          PAINT TODAY
        </span>
        <span className="font-display text-xl sm:text-2xl text-[#14101F] leading-none">
          {capacity}
        </span>
      </div>

      <div className="text-center sm:text-left">
        <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">
          USED
        </span>
        <span
          data-testid="used-paint-stat"
          className="font-display text-xl sm:text-2xl text-[#6D28D9] leading-none"
        >
          {usedPaint}
        </span>
      </div>

      <div className="text-center sm:text-left">
        <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">
          LEFT
        </span>
        <span
          data-testid="left-paint-stat"
          className={`font-display text-xl sm:text-2xl leading-none ${
            remaining <= 0 ? 'text-[#BE123C]' : 'text-[#047857]'
          }`}
        >
          {remaining}
        </span>
      </div>
    </div>
  );
};
