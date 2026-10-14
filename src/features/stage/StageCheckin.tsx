import React, { useState } from 'react';
import { sound } from '../../lib/sound';
import { SunMoonIcon, PaintDropIcon, PillowRestIcon, HelpIcon } from '../../components/icons';

interface StageCheckinProps {
  sleepHours: number;
  energyLevel: number;
  stressLevel: number;
  onUpdate: (sleep: number, energy: number, stress: number) => void;
  onDone: () => void;
}

export const StageCheckin: React.FC<StageCheckinProps> = ({
  sleepHours,
  energyLevel,
  stressLevel,
  onUpdate,
  onDone,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showFormula, setShowFormula] = useState(false);
  const [currentSleep, setCurrentSleep] = useState(sleepHours);
  const [currentEnergy, setCurrentEnergy] = useState(energyLevel);

  const handleSleepSelect = (val: number) => {
    sound.playPop();
    setCurrentSleep(val);
    onUpdate(val, currentEnergy, stressLevel);
    setStep(2);
  };

  const handleEnergySelect = (val: number) => {
    sound.playPop();
    setCurrentEnergy(val);
    onUpdate(currentSleep, val, stressLevel);
    setStep(3);
  };

  const handleStressSelect = (val: number) => {
    sound.playPop();
    onUpdate(currentSleep, currentEnergy, val);
    onDone();
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white border-[3px] border-[#14101F] shadow-[5px_5px_0px_#14101F] p-5 sm:p-6 rounded-xl space-y-5 animate-fadeIn z-30">
      <div className="flex items-center justify-between border-b-2 border-[#14101F] pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#FF6B2C] text-white font-mono text-xs font-bold uppercase rounded">
            Check-In Step {step}/3
          </span>
          <span className="font-display text-sm uppercase text-[#14101F]">
            {step === 1 ? 'Sleep Duration' : step === 2 ? 'Brain Energy' : 'Friction & Stress'}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowFormula((prev) => !prev)}
          className="text-xs font-mono font-bold text-[#555555] hover:text-[#14101F] flex items-center gap-1 underline min-h-[44px] min-w-[44px] px-2"
          aria-label="How is daily capacity calculated?"
        >
          <HelpIcon size={16} blobColor="#FFD93D" />
          <span>Formula</span>
        </button>
      </div>

      {showFormula && (
        <div className="p-3 bg-[#FFF6E5] border-2 border-[#14101F] rounded text-xs font-mono space-y-1">
          <p className="font-bold text-[#14101F]">Formula:</p>
          <p className="text-[#333333]">
            Capacity = clamp(4, 16, round((4 + sleep*0.9 + (energy-3)*1.2 - (stress-3)*0.8) * mode))
          </p>
          <p className="text-[#666666] text-[10px]">
            1 paint = approx. 30 min of high-demand focus stamina.
          </p>
        </div>
      )}

      {/* Step 1: Sleep */}
      {step === 1 && (
        <div className="space-y-3">
          <p className="font-body text-sm font-semibold text-[#14101F]">
            How many hours did you sleep last night?
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: '5h or less', val: 5, desc: 'Tired' },
              { label: '7-8 hours', val: 7.5, desc: 'Normal' },
              { label: '9+ hours', val: 9, desc: 'Restored' },
            ].map(({ label, val, desc }) => (
              <button
                key={val}
                type="button"
                onClick={() => handleSleepSelect(val)}
                className={`min-h-[64px] p-2 flex flex-col items-center justify-center border-[3px] border-[#14101F] rounded-lg transition-all ${
                  currentSleep === val
                    ? 'bg-[#FF6B2C] text-white shadow-[3px_3px_0px_#14101F]'
                    : 'bg-white text-[#14101F] hover:bg-[#FFF6E5]'
                }`}
              >
                <PillowRestIcon size={24} blobColor="#FFD93D" />
                <span className="font-display text-sm">{label}</span>
                <span className="font-mono text-[10px] opacity-80">{desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Energy */}
      {step === 2 && (
        <div className="space-y-3">
          <p className="font-body text-sm font-semibold text-[#14101F]">
            What is your current physical & cognitive energy?
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Low battery', val: 2, desc: 'Gentle pace' },
              { label: 'Steady', val: 3, desc: 'Usual capacity' },
              { label: 'High voltage', val: 5, desc: 'Ready to build' },
            ].map(({ label, val, desc }) => (
              <button
                key={val}
                type="button"
                onClick={() => handleEnergySelect(val)}
                className={`min-h-[64px] p-2 flex flex-col items-center justify-center border-[3px] border-[#14101F] rounded-lg transition-all ${
                  currentEnergy === val
                    ? 'bg-[#B6FF3B] text-[#14101F] shadow-[3px_3px_0px_#14101F]'
                    : 'bg-white text-[#14101F] hover:bg-[#FFF6E5]'
                }`}
              >
                <SunMoonIcon size={24} blobColor="#FFD93D" />
                <span className="font-display text-sm">{label}</span>
                <span className="font-mono text-[10px] opacity-80">{desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Stress */}
      {step === 3 && (
        <div className="space-y-3">
          <p className="font-body text-sm font-semibold text-[#14101F]">
            Any external friction or executive stress today?
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Calm waters', val: 1, desc: 'No friction' },
              { label: 'Normal buzz', val: 3, desc: 'Manageable' },
              { label: 'High pressure', val: 5, desc: 'Guard limits' },
            ].map(({ label, val, desc }) => (
              <button
                key={val}
                type="button"
                onClick={() => handleStressSelect(val)}
                className={`min-h-[64px] p-2 flex flex-col items-center justify-center border-[3px] border-[#14101F] rounded-lg transition-all ${
                  stressLevel === val
                    ? 'bg-[#FF3D8B] text-white shadow-[3px_3px_0px_#14101F]'
                    : 'bg-white text-[#14101F] hover:bg-[#FFF6E5]'
                }`}
              >
                <PaintDropIcon size={24} blobColor="#7DD3FC" />
                <span className="font-display text-sm">{label}</span>
                <span className="font-mono text-[10px] opacity-80">{desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
