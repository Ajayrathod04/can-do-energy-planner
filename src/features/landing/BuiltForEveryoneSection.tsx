import React from 'react';
import { useAppStore } from '../../lib/store';
import { sound } from '../../lib/sound';

export const BuiltForEveryoneSection: React.FC = () => {
  const soundEnabled = useAppStore((s) => s.soundEnabled);
  const toggleSound = useAppStore((s) => s.toggleSound);
  const highContrast = useAppStore((s) => s.highContrast);
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const dyslexiaFont = useAppStore((s) => s.dyslexiaFont);
  const fontScale = useAppStore((s) => s.fontScale);
  const setA11ySetting = useAppStore((s) => s.setA11ySetting);

  const [showKbHelp, setShowKbHelp] = React.useState(false);

  return (
    <section
      id="accessibility"
      className="w-full py-16 px-4 bg-[#FFF6E5] border-t-[3px] border-[#14101F]"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#9D174D]">
            Sensory Deck & Inclusivity
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#14101F]">
            Built for Everyone
          </h2>
          <p className="font-body text-xs text-[#555555]">
            Real interactive toggles. Customize your sensory experience with one click.
          </p>
        </div>

        {/* Compact row of working toggles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {/* 1. Keyboard Help */}
          <button
            type="button"
            onClick={() => {
              setShowKbHelp(!showKbHelp);
              sound.playPop();
            }}
            className={`min-h-[50px] p-2 border-2 border-[#14101F] shadow-[2px_2px_0px_#14101F] rounded-lg font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
              showKbHelp ? 'bg-[#7C5CFF] text-white shadow-[3px_3px_0px_#14101F]' : 'bg-white text-[#14101F] hover:bg-neutral-50'
            }`}
            aria-expanded={showKbHelp}
            aria-label="View keyboard shortcuts"
          >
            <span>⌨️ Keyboard</span>
            <span className="text-[10px]">{showKbHelp ? 'HIDE HELP' : 'Help (?)'}</span>
          </button>

          {/* 2. Reduced Motion */}
          <button
            type="button"
            onClick={() => {
              setA11ySetting('reducedMotion', !reducedMotion);
              sound.playPop();
            }}
            className={`min-h-[50px] p-2 border-2 border-[#14101F] rounded-lg font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
              reducedMotion
                ? 'bg-[#B6FF3B] text-[#14101F] shadow-[3px_3px_0px_#14101F]'
                : 'bg-white text-[#14101F] shadow-[2px_2px_0px_#14101F]'
            }`}
            aria-pressed={reducedMotion}
          >
            <span>🍃 Motion</span>
            <span className="text-[10px]">{reducedMotion ? 'REDUCED ON' : 'Standard'}</span>
          </button>

          {/* 3. Dyslexia Font */}
          <button
            type="button"
            onClick={() => {
              setA11ySetting('dyslexiaFont', !dyslexiaFont);
              sound.playPop();
            }}
            className={`min-h-[50px] p-2 border-2 border-[#14101F] rounded-lg font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
              dyslexiaFont
                ? 'bg-[#B6FF3B] text-[#14101F] shadow-[3px_3px_0px_#14101F]'
                : 'bg-white text-[#14101F] shadow-[2px_2px_0px_#14101F]'
            }`}
            aria-pressed={dyslexiaFont}
          >
            <span>📖 Dyslexia</span>
            <span className="text-[10px]">{dyslexiaFont ? 'FONT ON' : 'Default'}</span>
          </button>

          {/* 4. High Contrast */}
          <button
            type="button"
            onClick={() => {
              setA11ySetting('highContrast', !highContrast);
              sound.playPop();
            }}
            className={`min-h-[50px] p-2 border-2 border-[#14101F] rounded-lg font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
              highContrast
                ? 'bg-[#14101F] text-white shadow-[3px_3px_0px_#FFD93D]'
                : 'bg-white text-[#14101F] shadow-[2px_2px_0px_#14101F]'
            }`}
            aria-pressed={highContrast}
          >
            <span>👁️ Contrast</span>
            <span className="text-[10px]">{highContrast ? 'HIGH ON' : 'Standard'}</span>
          </button>

          {/* 5. Text Size */}
          <button
            type="button"
            onClick={() => {
              const nextScale = fontScale >= 1.25 ? 1.0 : fontScale + 0.1;
              setA11ySetting('fontScale', nextScale);
              sound.playPop();
            }}
            className="min-h-[50px] p-2 bg-white border-2 border-[#14101F] shadow-[2px_2px_0px_#14101F] rounded-lg font-mono text-xs font-bold text-[#14101F] hover:bg-neutral-50 flex flex-col items-center justify-center gap-0.5"
            aria-label="Cycle text size scale"
          >
            <span>🔠 Text Size</span>
            <span className="text-[10px] text-[#666666]">{Math.round(fontScale * 100)}%</span>
          </button>

          {/* 6. Sound */}
          <button
            type="button"
            onClick={() => {
              toggleSound();
              if (!soundEnabled) sound.playPop();
            }}
            className={`min-h-[50px] p-2 border-2 border-[#14101F] rounded-lg font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
              soundEnabled
                ? 'bg-[#FF3D8B] text-white shadow-[3px_3px_0px_#14101F]'
                : 'bg-white text-[#14101F] shadow-[2px_2px_0px_#14101F]'
            }`}
            aria-pressed={soundEnabled}
          >
            <span>🔊 Audio</span>
            <span className="text-[10px]">{soundEnabled ? 'FX ON' : 'OFF (Silent)'}</span>
          </button>
        </div>

        {showKbHelp && (
          <div role="region" aria-label="Keyboard Shortcuts Guide" className="p-4 bg-white border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg font-mono text-xs space-y-1.5">
            <div className="font-bold text-[#14101F] uppercase">Keyboard Navigation Quick Reference:</div>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li><strong>Tab / Shift+Tab</strong>: Move between interactive controls and task chips.</li>
              <li><strong>Enter / Space</strong>: Add or remove tasks into the Can, toggle modes, activate buttons.</li>
              <li><strong>Esc</strong>: Dismiss open popovers and modals.</li>
            </ul>
          </div>
        )}

        {/* Privacy line */}
        <p className="font-mono text-xs text-center text-[#555555] pt-2">
          🔒 Your data stays on your device. Zero telemetry, cookies, or remote analytics.
        </p>
      </div>
    </section>
  );
};
