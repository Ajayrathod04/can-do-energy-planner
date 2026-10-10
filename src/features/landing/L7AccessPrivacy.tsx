import React from 'react';
import { Card, SectionHeading, Toggle } from '@/components/ui';
import { usePlannerStore } from '@/lib/store';
import { ShieldIcon, EyeIcon } from '@/components/icons';

export const L7AccessPrivacy: React.FC = () => {
  const {
    soundEnabled,
    highContrast,
    reducedMotion,
    dyslexiaFont,
    toggleSound,
    setA11ySetting,
  } = usePlannerStore();

  return (
    <section id="accessibility" className="py-20 bg-[#FFF6E5] border-b-[3px] border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="ZERO TRACKING • 100% INCLUSIVE"
          title="Accessibility & Privacy First"
          description="Software engineered for humans. Every preference is respected on-device without telemetry."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Privacy Guarantees Card */}
          <Card className="space-y-4 bg-white border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]">
            <div className="flex items-center gap-3">
              <ShieldIcon size={32} blobColor="#00E599" />
              <h3 className="font-display text-xl text-[#111111]">Zero-Tracker Privacy</h3>
            </div>
            <ul className="space-y-2 text-sm text-[#333333] font-body leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="text-[#00E599] font-bold">✓</span>
                No cookies or third-party tracking pixels.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00E599] font-bold">✓</span>
                Self-hosted fonts: 0 external requests at runtime.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00E599] font-bold">✓</span>
                100% of tasks & check-ins live in your browser’s localStorage.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00E599] font-bold">✓</span>
                No camera/microphone permissions ever requested.
              </li>
            </ul>
          </Card>

          {/* Live Accessibility Controls Card */}
          <Card className="space-y-4 bg-white border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]">
            <div className="flex items-center gap-3">
              <EyeIcon size={32} blobColor="#FF3D8B" />
              <h3 className="font-display text-xl text-[#111111]">Live Sensory Toggles</h3>
            </div>
            <div className="space-y-1 divide-y divide-[#E5E5E5]">
              <Toggle
                label="High Contrast (Pure Ink)"
                description="Maximizes outline weights and contrast"
                checked={highContrast}
                onChange={(val) => setA11ySetting('highContrast', val)}
              />
              <Toggle
                label="Reduced Motion"
                description="Freezes 3D spins and fluid drips"
                checked={reducedMotion}
                onChange={(val) => setA11ySetting('reducedMotion', val)}
              />
              <Toggle
                label="Dyslexia-Friendly Font"
                description="Switches body type to OpenDyslexic"
                checked={dyslexiaFont}
                onChange={(val) => setA11ySetting('dyslexiaFont', val)}
              />
              <Toggle
                label="Web Audio Rattle (Default OFF)"
                description="Synthesizes mixing-ball sounds"
                checked={soundEnabled}
                onChange={() => toggleSound()}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
