import React, { useState } from 'react';
import { HelpCircle, X } from 'lucide-react';

interface HeroCheckinProps {
  sleepHours: number;
  energyLevel: number;
  stressLevel: number;
  onUpdate: (data: { sleepHours?: number; energyLevel?: number; stressLevel?: number }) => void;
}

export const HeroCheckin: React.FC<HeroCheckinProps> = ({
  sleepHours,
  energyLevel,
  stressLevel,
  onUpdate,
}) => {
  const [showFormula, setShowFormula] = useState(false);

  return (
    <div className="relative w-full bg-white/90 backdrop-blur-xs p-2.5 sm:p-3 border-2 border-[#14101F] shadow-[3px_3px_0px_#14101F] rounded-lg space-y-2 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-display uppercase tracking-wide text-[11px] text-[#14101F]">
          Daily Capacity Check-In
        </span>
        <button
          type="button"
          onClick={() => setShowFormula(!showFormula)}
          className="inline-flex items-center gap-1 font-mono text-[10px] text-neutral-600 hover:text-black underline"
          aria-expanded={showFormula}
          aria-label="How is daily capacity calculated?"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Formula</span>
        </button>
      </div>

      {showFormula && (
        <div role="region" aria-label="Capacity Formula" className="p-2 bg-[#FFF6E5] border border-[#14101F] rounded text-[11px] font-mono space-y-1">
          <div className="flex items-center justify-between font-bold">
            <span>BIO-CAPACITY FORMULA</span>
            <button onClick={() => setShowFormula(false)} aria-label="Close formula">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[10px] text-neutral-700">
            Paint Units = [Base (3) + Sleep(h)×0.7 + Energy(1-5)×0.8 - Stress(1-5)×0.5] × Mode
          </p>
        </div>
      )}

      {/* 3 Segmented Controls */}
      <div className="grid grid-cols-3 gap-1.5 font-body">
        {/* Sleep */}
        <div className="space-y-1">
          <label className="block text-[10px] font-mono font-bold text-neutral-600 uppercase">Sleep</label>
          <div className="flex border border-[#14101F] rounded overflow-hidden">
            {[5, 7.5, 9].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onUpdate({ sleepHours: val })}
                className={`flex-1 py-1 text-[11px] font-bold text-center transition-colors ${
                  Math.abs(sleepHours - val) < 0.5 ? 'bg-[#14101F] text-white' : 'bg-white hover:bg-neutral-100 text-[#14101F]'
                }`}
              >
                {val}h
              </button>
            ))}
          </div>
        </div>

        {/* Energy */}
        <div className="space-y-1">
          <label className="block text-[10px] font-mono font-bold text-neutral-600 uppercase">Energy</label>
          <div className="flex border border-[#14101F] rounded overflow-hidden">
            {[1, 3, 5].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onUpdate({ energyLevel: val })}
                className={`flex-1 py-1 text-[11px] font-bold text-center transition-colors ${
                  energyLevel === val ? 'bg-[#14101F] text-white' : 'bg-white hover:bg-neutral-100 text-[#14101F]'
                }`}
              >
                {val === 1 ? 'Low' : val === 3 ? 'Med' : 'Hi'}
              </button>
            ))}
          </div>
        </div>

        {/* Stress */}
        <div className="space-y-1">
          <label className="block text-[10px] font-mono font-bold text-neutral-600 uppercase">Stress</label>
          <div className="flex border border-[#14101F] rounded overflow-hidden">
            {[1, 3, 5].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onUpdate({ stressLevel: val })}
                className={`flex-1 py-1 text-[11px] font-bold text-center transition-colors ${
                  stressLevel === val ? 'bg-[#14101F] text-white' : 'bg-white hover:bg-neutral-100 text-[#14101F]'
                }`}
              >
                {val === 1 ? 'Low' : val === 3 ? 'Med' : 'Hi'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
