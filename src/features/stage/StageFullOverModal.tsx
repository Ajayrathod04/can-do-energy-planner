import React from 'react';
import { sound } from '../../lib/sound';

interface StageFullOverModalProps {
  isFull: boolean;
  isOver: boolean;
  onOpenAnyway: () => void;
  onMoveToTomorrow: () => void;
}

export const StageFullOverModal: React.FC<StageFullOverModalProps> = ({
  isFull,
  isOver,
  onOpenAnyway,
  onMoveToTomorrow,
}) => {
  if (!isFull && !isOver) return null;

  return (
    <div className="w-full max-w-lg mx-auto bg-white border-[3px] border-[#14101F] shadow-[6px_6px_0px_#14101F] p-5 rounded-xl space-y-4 animate-fadeIn z-30">
      {isOver ? (
        // Overfilled state
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-0.5 bg-[#FF3D8B] text-white font-mono text-xs font-bold uppercase rounded">
            ⚠️ OVERLOAD DETECTED
          </div>
          <h3 className="font-display text-2xl uppercase text-[#14101F]">
            Too much for today?
          </h3>
          <p className="font-body text-xs text-[#444444] leading-relaxed">
            Your paint is dripping! Biological stamina has limits. You can defer items without any
            guilt.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                onMoveToTomorrow();
                sound.playPop();
              }}
              className="min-h-[44px] px-4 py-2 bg-[#B6FF3B] text-[#14101F] border-2 border-[#14101F] font-display text-xs uppercase shadow-[2px_2px_0px_#14101F] hover:bg-lime-400 rounded"
            >
              Move Excess to Tomorrow
            </button>
            <button
              type="button"
              onClick={onOpenAnyway}
              className="min-h-[44px] px-3 py-2 bg-white text-[#666666] border-2 border-[#14101F] font-mono text-xs hover:text-[#14101F] rounded"
            >
              Keep Anyway (Override)
            </button>
          </div>
        </div>
      ) : (
        // Exactly full state
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-0.5 bg-[#FFD93D] text-[#14101F] font-mono text-xs font-bold uppercase rounded">
            🛢️ CAP CLOSED
          </div>
          <h3 className="font-display text-2xl uppercase text-[#14101F]">
            Full! The rest waits for tomorrow.
          </h3>
          <p className="font-body text-xs text-[#444444] leading-relaxed">
            Cano's cap just snapped shut. You packed a full, realistic day. Stop here and protect
            your evening recovery.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={onOpenAnyway}
              className="min-h-[44px] px-4 py-2 bg-[#FFF6E5] text-[#14101F] border-2 border-[#14101F] font-display text-xs uppercase hover:bg-neutral-100 shadow-[2px_2px_0px_#14101F] rounded"
            >
              Open anyway
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
