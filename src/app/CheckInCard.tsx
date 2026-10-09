import React, { useState } from 'react';
import { useAppStore, selectActiveMode } from '../lib/store';
import { HelpCircle, Moon, Zap, ShieldAlert, X } from 'lucide-react';
import { sound } from '../lib/sound';

export const CheckInCard: React.FC = () => {
  const sleepHours = useAppStore(s => s.sleepHours);
  const energyLevel = useAppStore(s => s.energyLevel);
  const stressLevel = useAppStore(s => s.stressLevel);
  const calculatedCapacity = useAppStore(s => s.calculatedCapacity);
  const setCheckIn = useAppStore(s => s.setCheckIn);
  const activeMode = useAppStore(selectActiveMode);

  const [showFormulaModal, setShowFormulaModal] = useState(false);

  const handleSliderChange = (sleep: number, energy: number, stress: number) => {
    setCheckIn(sleep, energy, stress);
    if (Math.random() < 0.2) {
      sound.playShake();
    }
  };

  return (
    <div className="brutal-card p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-3">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600">
            Step 1 // Energy Gauge Calibration
          </span>
          <h2 className="font-display text-xl sm:text-2xl uppercase">Daily Check-In</h2>
        </div>
        <button
          onClick={() => setShowFormulaModal(true)}
          className="text-xs font-mono font-bold flex items-center gap-1 text-neutral-700 hover:text-ink underline"
          aria-label="How is daily capacity calculated?"
        >
          <HelpCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Formula</span>
        </button>
      </div>

      {/* Sliders Grid */}
      <div className="space-y-4 font-body">
        {/* Sleep Slider */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-bold font-mono">
            <span className="flex items-center gap-1.5">
              <Moon className="w-3.5 h-3.5 text-blue-600" /> Sleep Duration
            </span>
            <span className="bg-neutral-200 px-2 py-0.5 border border-ink">
              {sleepHours} Hours
            </span>
          </div>
          <input
            type="range"
            min="3"
            max="12"
            step="0.5"
            value={sleepHours}
            onChange={(e) => handleSliderChange(Number(e.target.value), energyLevel, stressLevel)}
            className="w-full accent-blue-600 cursor-pointer h-2 bg-neutral-300 border border-ink"
            aria-label="Sleep hours slider"
          />
        </div>

        {/* Energy Level (1-5) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-bold font-mono">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-modeGrind" /> Physical Energy (1-5)
            </span>
            <span className="bg-neutral-200 px-2 py-0.5 border border-ink">
              Level {energyLevel} / 5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={energyLevel}
            onChange={(e) => handleSliderChange(sleepHours, Number(e.target.value), stressLevel)}
            className="w-full accent-modeGrind cursor-pointer h-2 bg-neutral-300 border border-ink"
            aria-label="Physical energy slider"
          />
        </div>

        {/* Stress Level (1-5) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-bold font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-modeCreate" /> Friction / Stress (1-5)
            </span>
            <span className="bg-neutral-200 px-2 py-0.5 border border-ink">
              Level {stressLevel} / 5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={stressLevel}
            onChange={(e) => handleSliderChange(sleepHours, energyLevel, Number(e.target.value))}
            className="w-full accent-modeCreate cursor-pointer h-2 bg-neutral-300 border border-ink"
            aria-label="Stress and friction level slider"
          />
        </div>
      </div>

      {/* Capacity Result Badge */}
      <div
        className="p-3 border-2 border-ink flex items-center justify-between shadow-[2px_2px_0px_#0A0A0A]"
        style={{ backgroundColor: activeMode.accentColor, color: '#0A0A0A' }}
      >
        <span className="font-mono text-xs font-bold uppercase">
          Today's Paint Budget ({activeMode.name}):
        </span>
        <span className="font-display text-2xl">
          {calculatedCapacity} Paint Units
        </span>
      </div>

      {/* Formula Explanation Modal */}
      {showFormulaModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="formula-dialog-title"
          className="fixed inset-0 z-50 bg-ink/75 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div className="brutal-card max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b-2 border-ink pb-3">
              <h3 id="formula-dialog-title" className="font-display text-xl uppercase">How is Capacity Calculated?</h3>
              <button
                onClick={() => setShowFormulaModal(false)}
                className="p-1 hover:bg-neutral-200 border border-ink"
                aria-label="Close formula modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="font-mono text-xs space-y-3 bg-neutral-100 p-4 border-2 border-ink">
              <p className="font-bold text-sm text-ink">
                capacity = round(clamp((4 + sleep*0.9 + (energy-3)*1.2 - (stress-3)*0.8) * modeMultiplier, 4, 16))
              </p>
              <ul className="list-disc list-inside space-y-1 text-neutral-700">
                <li><strong>Base constant (4)</strong>: Baseline human wakefulness foundation.</li>
                <li><strong>Sleep (0.9x)</strong>: Sleep provides the biological restoration reservoir.</li>
                <li><strong>Energy deviation</strong>: Above or below median baseline (3).</li>
                <li><strong>Stress tax (-0.8x)</strong>: Friction, cognitive noise, and anxiety directly drain executive function.</li>
                <li><strong>Mode Multiplier ({activeMode.multiplier}x)</strong>: Adjusts pacing based on today's active energy posture.</li>
                <li><strong>Clamp [4, 16]</strong>: Prevents burnout collapse (&lt;4) and unrealistic superhuman overcommitments (&gt;16).</li>
              </ul>
            </div>

            <button
              onClick={() => setShowFormulaModal(false)}
              className="brutal-btn w-full py-2.5 bg-ink text-paper font-bold"
            >
              Got it, Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
