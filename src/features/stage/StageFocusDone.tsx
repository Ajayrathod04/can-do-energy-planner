import React, { useState, useEffect } from 'react';
import { sound } from '../../lib/sound';
import confetti from 'canvas-confetti';

interface StageFocusDoneProps {
  taskTitle: string;
  onComplete: () => void;
  onRest: () => void;
  onBackToFeed: () => void;
}

export const StageFocusDone: React.FC<StageFocusDoneProps> = ({
  taskTitle,
  onComplete,
  onRest,
  onBackToFeed,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(15); // Quick demo focus timer (15s)
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone || secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsDone(true);
          sound.playSpray(0.6);
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
          });
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft, isDone, onComplete]);

  return (
    <div className="w-full max-w-md mx-auto bg-white border-[3px] border-[#14101F] shadow-[5px_5px_0px_#14101F] p-5 rounded-xl space-y-4 animate-fadeIn z-30">
      <div className="flex items-center justify-between border-b-2 border-[#14101F] pb-2">
        <span className="font-mono text-xs font-bold uppercase text-[#FF6B2C]">
          {isDone ? '★ TASK COMPLETED' : '⏱️ FOCUS RUN'}
        </span>
        <button
          type="button"
          onClick={onBackToFeed}
          className="text-xs font-mono underline min-h-[44px] px-2 text-[#666666] hover:text-[#14101F]"
        >
          ← Back
        </button>
      </div>

      <div className="space-y-2 text-center">
        <h4 className="font-display text-lg uppercase text-[#14101F]">{taskTitle}</h4>
        {!isDone ? (
          <div className="p-4 bg-[#FFF6E5] border-2 border-[#14101F] rounded-lg">
            <span className="font-display text-4xl text-[#7C5CFF]">{secondsLeft}s</span>
            <p className="font-mono text-xs text-[#666666] mt-1">
              Cano is focusing... Spraying tag on completion!
            </p>
          </div>
        ) : (
          <div className="p-4 bg-[#B6FF3B] border-2 border-[#14101F] rounded-lg">
            <p className="font-display text-lg uppercase text-[#14101F]">
              Spray Tag Stenciled!
            </p>
            <p className="font-mono text-xs text-[#14101F] mt-1">
              Permanent proof logged to Your Wall.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-[#14101F]/20">
        {!isDone && (
          <button
            type="button"
            onClick={() => {
              setIsDone(true);
              sound.playSpray(0.5);
              onComplete();
            }}
            className="min-h-[44px] px-4 py-2 bg-[#FF6B2C] text-white border-2 border-[#14101F] font-display text-xs uppercase shadow-[2px_2px_0px_#14101F] rounded"
          >
            Finish & Spray Now
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            sound.playPop();
            onRest();
          }}
          className="min-h-[44px] px-4 py-2 bg-[#C084FC] text-white border-2 border-[#14101F] font-display text-xs uppercase shadow-[2px_2px_0px_#14101F] rounded"
        >
          Permission to Rest 🛌
        </button>
      </div>
    </div>
  );
};
