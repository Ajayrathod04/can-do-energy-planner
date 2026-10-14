import React from 'react';

interface StageStatChipsProps {
  capacity: number;
  inCanCount: number;
  remainingPaint: number;
}

export const StageStatChips: React.FC<StageStatChipsProps> = ({
  capacity,
  inCanCount,
  remainingPaint,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 z-20">
      {/* Chip 1 */}
      <div className="flex flex-col items-center px-4 py-2 bg-white border-[3px] border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg">
        <span className="font-mono text-[10px] uppercase font-bold text-[#666666] tracking-wider">
          PAINT TODAY
        </span>
        <span className="font-display text-2xl text-[#14101F]">{capacity}</span>
      </div>

      {/* Chip 2 */}
      <div className="flex flex-col items-center px-4 py-2 bg-white border-[3px] border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg">
        <span className="font-mono text-[10px] uppercase font-bold text-[#666666] tracking-wider">
          TASKS IN CANO
        </span>
        <span className="font-display text-2xl text-[#14101F]">{inCanCount}</span>
      </div>

      {/* Chip 3 */}
      <div className="flex flex-col items-center px-4 py-2 bg-white border-[3px] border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg">
        <span className="font-mono text-[10px] uppercase font-bold text-[#666666] tracking-wider">
          LEFT
        </span>
        <span
          className={`font-display text-2xl ${
            remainingPaint < 0 ? 'text-[#FF3D8B]' : 'text-[#14101F]'
          }`}
        >
          {remainingPaint}
        </span>
      </div>
    </div>
  );
};
