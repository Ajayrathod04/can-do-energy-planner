import React from 'react';
import { Card, SectionHeading } from '@/components/ui';
import { SunMoonIcon, PaintDropIcon, SprayCanIcon } from '@/components/icons';

export const L2HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white border-b-[3px] border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="THREE SIMPLE STEPS"
          title="How CAN-DO works"
          description="A finite physical budget replaces endless guilt. Here is the daily loop:"
          align="center"
        />

        {/* Global Unit Definition Callout */}
        <div className="max-w-2xl mx-auto mb-12 p-4 bg-[#FFD93D] border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] text-center rotate-[-1deg]">
          <p className="font-display text-base md:text-lg text-[#111111]">
            💡 DEFINITION: 1 paint = about one small task (roughly 30 minutes of brain energy).
          </p>
        </div>

        {/* 3 Numbered Sticker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card hasTape={true} tapeColor="#FF3D8B" className="space-y-4 rotate-[-1deg]">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 flex items-center justify-center font-display text-xl bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111]">
                1
              </span>
              <SunMoonIcon size={36} blobColor="#FFD93D" />
            </div>
            <h3 className="font-display text-2xl text-[#111111]">CHECK IN</h3>
            <p className="font-body text-base text-[#444444] leading-relaxed">
              Tell us how you slept and how you feel. We don’t ask for a life story—just 3 quick
              sliders for sleep, mood, and cognitive load.
            </p>
          </Card>

          {/* Step 2 */}
          <Card hasTape={true} tapeColor="#00E599" className="space-y-4 rotate-[1deg]">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 flex items-center justify-center font-display text-xl bg-[#00E599] border-2 border-[#111111] shadow-[2px_2px_0_#111111]">
                2
              </span>
              <PaintDropIcon size={36} blobColor="#00E599" />
            </div>
            <h3 className="font-display text-2xl text-[#111111]">GET YOUR PAINT</h3>
            <p className="font-body text-base text-[#444444] leading-relaxed">
              We turn your check-in into a real number for today. Tired means less paint (e.g. 6
              units); rested means more (up to 16 units).
            </p>
          </Card>

          {/* Step 3 */}
          <Card hasTape={true} tapeColor="#38BDF8" className="space-y-4 rotate-[-0.5deg]">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 flex items-center justify-center font-display text-xl bg-[#38BDF8] border-2 border-[#111111] shadow-[2px_2px_0_#111111]">
                3
              </span>
              <SprayCanIcon size={36} blobColor="#38BDF8" />
            </div>
            <h3 className="font-display text-2xl text-[#111111]">LOAD YOUR CAN</h3>
            <p className="font-body text-base text-[#444444] leading-relaxed">
              Each task costs paint. When the can is full, the rest wait for tomorrow without guilt.
              The spray can cap locks automatically.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
