import React from 'react';
import { useAppStore, selectActiveMode } from '../../lib/store';
import { MODES } from '../../data/modes';
import { sound } from '../../lib/sound';

const SKIN_ACCESSORY_LABELS: Record<string, string> = {
  focus: 'Focus Glasses',
  grind: 'Grind Headband',
  create: 'Create Beret',
  chill: 'Chill Sunhat',
  social: 'Social Headphones',
  recover: 'Recover Blanket',
};

export const SixMoodsSection: React.FC = () => {
  const activeMode = useAppStore(selectActiveMode);
  const setActiveMode = useAppStore((s) => s.setActiveMode);

  return (
    <section id="moods" className="w-full py-16 px-4 bg-white border-t-[3px] border-[#14101F]">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-violet)]">
            Biological Postures
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#14101F]">
            Six Moods, Six Canos
          </h2>
          <p className="font-body text-xs text-[#404040] max-w-md mx-auto">
            Click any mode to re-skin Cano and dynamically recolor your stage palette.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {MODES.map((mode) => {
            const isSelected = mode.id === activeMode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  setActiveMode(mode.id);
                  sound.playPop();
                  const stageEl = document.getElementById('play');
                  if (stageEl) stageEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`min-h-[120px] p-3 rounded-xl border-[3px] border-[#14101F] flex flex-col items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-white ring-4 ring-[#14101F] shadow-[4px_4px_0px_#14101F] scale-105'
                    : 'bg-[#FFF6E5] hover:bg-neutral-50 shadow-[2px_2px_0px_#14101F]'
                }`}
                aria-label={`Switch to ${mode.name} mode`}
              >
                <div
                  className="w-10 h-10 rounded-full border-2 border-[#14101F] shadow-[1px_1px_0px_#14101F] mb-1"
                  style={{ backgroundColor: mode.accentColor }}
                />

                <div className="text-center">
                  <span className="font-display text-sm uppercase text-[#14101F] block">
                    {mode.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#14101F] font-bold block">
                    {mode.multiplier}× paint
                  </span>
                  <span className="font-mono text-[9px] text-[var(--text-muted)] block mt-0.5">
                    {SKIN_ACCESSORY_LABELS[mode.id]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
