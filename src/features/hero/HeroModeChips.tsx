import React from 'react';
import { MODES } from '../../data/modes';

interface HeroModeChipsProps {
  activeModeId: string;
  onSelectMode: (modeId: string) => void;
}

export const HeroModeChips: React.FC<HeroModeChipsProps> = ({
  activeModeId,
  onSelectMode,
}) => {
  return (
    <div className="w-full space-y-1">
      <span className="block text-[10px] font-mono font-bold uppercase text-neutral-600">
        Choose Mode / Pace
      </span>
      <div className="flex flex-wrap gap-1 sm:gap-1.5" role="radiogroup" aria-label="Mode selector">
        {MODES.map((mode) => {
          const isSelected = activeModeId === mode.id;
          return (
            <button
              key={mode.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectMode(mode.id)}
              className={`px-2 py-1 text-[11px] font-bold font-body uppercase border-2 border-[#14101F] rounded-md transition-all ${
                isSelected
                  ? 'bg-white text-[#14101F] shadow-[2px_2px_0px_#14101F] scale-105'
                  : 'bg-white/70 text-neutral-700 hover:bg-white'
              }`}
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full mr-1 align-middle border border-ink"
                style={{ backgroundColor: mode.accentColor }}
              />
              {mode.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
