import React, { useState } from 'react';
import { SectionHeading, Marquee, Toast } from '@/components/ui';
import { CanoMascot } from '@/components/CanoMascot';
import { SystemPaletteSection } from './system/SystemPaletteSection';
import { SystemIconsSection } from './system/SystemIconsSection';
import { SystemComponentsSection } from './system/SystemComponentsSection';

export const SystemPage: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <div className="w-full bg-[#FFF6E5] text-[#111111] min-h-screen py-12 px-4 sm:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b-[3px] border-[#111111] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 bg-[#111111] text-[#FFF6E5] text-xs font-mono font-bold uppercase mb-3">
              Design Tokens & Accessibility Specification
            </div>
            <h1 className="font-display text-4xl sm:text-6xl tracking-tight uppercase text-[#111111]">
              /SYSTEM SHOWCASE
            </h1>
            <p className="text-lg text-[#333333] max-w-2xl mt-2 font-medium">
              Editorial Neo-Brutalism + Graffiti Accents. Documenting color mathematics, 16 chunky
              SVG icons, Cano mascot poses, interactive UI components, and WCAG AA contrast.
            </p>
          </div>
          <a
            href="#/"
            className="px-4 py-2 font-display text-sm bg-[#FFD93D] border-[2px] border-[#111111] shadow-[2px_2px_0_#111111] self-start"
          >
            ← Back to Home
          </a>
        </div>

        {/* Section 1: Mode Palette & Contrast */}
        <SystemPaletteSection />

        {/* Section 2: 16 Chunky Inline SVG Icons Suite */}
        <SystemIconsSection />

        {/* Section 3: Original Mascot "Cano" in 4 Poses */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="ORIGINAL CHARACTER DESIGN"
            title="3. Mascot 'Cano' in 4 Poses"
            description="Pure inline SVG character engineered with expressiveness, accessible alt text, and zero third-party resemblance."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(['happy', 'full', 'sleepy', 'celebrating'] as const).map((pose) => (
              <div
                key={pose}
                className="flex flex-col items-center gap-3 p-6 bg-white border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]"
              >
                <CanoMascot pose={pose} size={110} />
                <span className="font-display text-sm uppercase px-2 py-0.5 bg-[#FFD93D] border border-[#111111]">
                  Pose: {pose}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Reusable UI Component Library */}
        <SystemComponentsSection
          onTriggerToast={() => {
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 2500);
          }}
        />

        {/* Section 5: Marquee Ticker */}
        <section className="space-y-4">
          <h3 className="font-display text-xl text-[#111111]">5. Scrolling Caution Tape</h3>
          <Marquee />
        </section>

        {/* Toast Instance */}
        <Toast
          message="Notification dispatched successfully"
          isVisible={toastVisible}
          onAction={() => setToastVisible(false)}
        />
      </div>
    </div>
  );
};
