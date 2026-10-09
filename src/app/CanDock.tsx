import React from 'react';
import { useAppStore, selectActiveMode, selectCanTotalCost } from '../lib/store';
import { SprayCanView } from '../three/SprayCanView';
import { AlertTriangle, CheckCircle, Droplet, ArrowDown } from 'lucide-react';

interface CanDockProps {
  onOpenDeferral: () => void;
  isOverDropZone?: boolean;
}

export const CanDock: React.FC<CanDockProps> = ({ onOpenDeferral, isOverDropZone = false }) => {
  const activeMode = useAppStore(selectActiveMode);
  const capacity = useAppStore(s => s.calculatedCapacity);
  const totalCost = useAppStore(selectCanTotalCost);

  const isOverflow = totalCost > capacity;
  const overflowAmount = Math.max(0, totalCost - capacity);
  const fillPercentage = Math.min(100, Math.round((totalCost / capacity) * 100));

  return (
    <div
      className={`brutal-card p-5 space-y-4 transition-all relative overflow-hidden ${
        isOverDropZone ? 'border-modeCreate ring-4 ring-modeCreate bg-pink-50' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-3">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600">
            Step 2 // The Pressurized Canister
          </span>
          <h2 className="font-display text-xl sm:text-2xl uppercase">Daily Can Dock</h2>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs font-bold text-neutral-600 block">GAUGE READOUT</span>
          <span className="font-display text-lg">
            {totalCost} / {capacity} <span className="text-xs font-mono font-normal">UNITS</span>
          </span>
        </div>
      </div>

      {/* Overflow Alert Banner */}
      {isOverflow && (
        <div className="p-3 bg-red-100 border-2 border-red-600 text-red-900 flex items-center justify-between gap-3 shadow-[2px_2px_0px_#991B1B] animate-pulse">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-display text-sm uppercase">OVERFLOW: +{overflowAmount} UNITS OVER</p>
              <p className="text-xs font-body text-red-800">
                Physics doesn't lie. Your can is leaking pressure.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenDeferral}
            className="brutal-btn px-3 py-1 bg-red-600 text-white border-2 border-ink text-xs font-bold whitespace-nowrap"
          >
            Resolve Overfill
          </button>
        </div>
      )}

      {/* 3D Can Stage */}
      <div className="relative w-full aspect-square max-h-[340px] bg-neutral-900 border-3 border-ink flex items-center justify-center shadow-[4px_4px_0px_#0A0A0A]">
        {/* Subtle splatter overlay in overflow */}
        {isOverflow && (
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-40 mix-blend-screen"
            style={{
              backgroundImage: 'url(./img/splatter-overlay.png)',
              backgroundSize: 'cover',
            }}
          />
        )}

        {/* The 3D Can */}
        <SprayCanView
          mode={activeMode}
          capacity={capacity}
          usedCapacity={totalCost}
          className="w-full h-full"
        />

        {/* Drop Zone Overlay when dragging */}
        {isOverDropZone && (
          <div className="absolute inset-0 bg-modeCreate/30 backdrop-blur-xs flex flex-col items-center justify-center text-paper border-4 border-dashed border-paper z-20 pointer-events-none">
            <ArrowDown className="w-12 h-12 animate-bounce stroke-[3]" />
            <span className="font-display text-xl uppercase bg-ink px-3 py-1">
              Drop task to pack into can
            </span>
          </div>
        )}
      </div>

      {/* Real-time Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-mono font-bold">
          <span className="flex items-center gap-1">
            <Droplet className="w-3.5 h-3.5 text-blue-600" /> CAN FILL LEVEL
          </span>
          <span className={isOverflow ? 'text-red-600 font-bold' : 'text-neutral-700'}>
            {fillPercentage}% {isOverflow ? '(OVER CAPACITY)' : ''}
          </span>
        </div>
        <div className="w-full h-4 bg-neutral-200 border-2 border-ink overflow-hidden flex">
          <div
            className={`h-full transition-all duration-300 ${
              isOverflow ? 'bg-red-500' : 'bg-modeGrind'
            }`}
            style={{ width: `${Math.min(100, fillPercentage)}%` }}
          />
        </div>
      </div>

      {/* Status message */}
      <div className="text-xs font-mono text-neutral-700 flex items-center gap-1.5 pt-1">
        {!isOverflow ? (
          <>
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Capacity in balance. {capacity - totalCost} paint units remaining for today.</span>
          </>
        ) : (
          <>
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span>Can volume exceeded. Defer low-priority items without guilt.</span>
          </>
        )}
      </div>
    </div>
  );
};
