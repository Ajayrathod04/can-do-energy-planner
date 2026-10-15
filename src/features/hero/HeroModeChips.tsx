import React from 'react';
import { MODES } from '../../data/modes';
import { getReadableText } from '../../lib/contrast';

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
      <span className="block text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">
        Choose Mode / Pace
      </span>
      <div className="flex flex-wrap gap-1 sm:gap-1.5" role="radiogroup" aria-label="Mode selector">
        {MODES.map((mode) => {
          const isSelected = activeModeId === mode.id;
          const textColor = getReadableText(mode.accentColor);
          return (
            <button
              key={mode.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectMode(mode.id)}
              style={
                isSelected
                  ? { backgroundColor: mode.accentColor, color: textColor }
                  : undefined
              }
              className={`px-2 py-1 text-[11px] font-bold font-body uppercase border-2 border-[#14101F] rounded-md transition-all ${
                isSelected
                  ? 'shadow-[2px_2px_0px_#14101F] scale-105'
                  : 'bg-white/80 text-neutral-800 hover:bg-white'
              }`}
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full mr-1 align-middle border border-ink"
                style={{ backgroundColor: isSelected ? textColor : mode.accentColor }}
              />
              {mode.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
