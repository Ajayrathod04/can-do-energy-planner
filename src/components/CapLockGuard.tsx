import React, { useState, useEffect } from 'react';
import { useAppStore, selectCanTotalCost } from '../lib/store';
import { sound } from '../lib/sound';
import { Unlock, Calendar, ShieldAlert } from 'lucide-react';

interface CapLockGuardProps {
  onOpenDeferral: () => void;
  className?: string;
}

export const CapLockGuard: React.FC<CapLockGuardProps> = ({ onOpenDeferral, className = '' }) => {
  const capacity = useAppStore(s => s.calculatedCapacity);
  const totalCost = useAppStore(selectCanTotalCost);

  const isFullOrOver = totalCost >= capacity;
  const [isOverridden, setIsOverridden] = useState(false);

  // Trigger cap lock snap when reaching capacity
  useEffect(() => {
    if (isFullOrOver && !isOverridden) {
      sound.playCapLock();
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate([20, 40, 20]);
        } catch {
          // Haptics optional
        }
      }
    } else if (!isFullOrOver) {
      setIsOverridden(false);
    }
  }, [isFullOrOver, isOverridden]);

  if (!isFullOrOver || isOverridden) return null;

  return (
    <div className={`brutal-card p-4 bg-yellow-100 border-3 border-ink shadow-[4px_4px_0px_#0A0A0A] space-y-3 relative overflow-hidden animate-fadeIn ${className}`}>
      {/* "CLOSED FOR TODAY" Slapped Sticker */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-2">
        <div className="inline-block px-3 py-1 bg-red-600 text-white font-display text-sm uppercase tracking-wider transform -rotate-2 border-2 border-ink shadow-[2px_2px_0px_#0A0A0A]">
          🔒 CLOSED FOR TODAY
        </div>
        <span className="font-mono text-xs font-bold text-neutral-700">
          100% Volume Reached
        </span>
      </div>

      <div className="space-y-1 font-body text-xs text-neutral-800">
        <p className="font-bold text-sm text-ink flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          The nozzle is safety-latched.
        </p>
        <p>
          You’ve filled all <strong>{capacity} paint units</strong> budgeted for today. Further additions risk diluting your focus.
        </p>
      </div>

      {/* Kind actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-neutral-300">
        <button
          onClick={onOpenDeferral}
          className="brutal-btn px-3 py-1.5 text-xs bg-ink text-paper font-bold flex items-center gap-1.5"
          aria-label="Defer extra tasks to tomorrow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Stage for Tomorrow</span>
        </button>

        {/* Clear Kind Override */}
        <button
          onClick={() => {
            setIsOverridden(true);
            sound.playPop();
          }}
          className="text-xs font-mono text-neutral-700 hover:text-ink underline flex items-center gap-1 font-bold"
          title="Bypass safety lock and pack more tasks today"
          aria-label="Bypass cap lock and open anyway"
        >
          <Unlock className="w-3.5 h-3.5" />
          <span>Open anyway</span>
        </button>
      </div>
    </div>
  );
};
