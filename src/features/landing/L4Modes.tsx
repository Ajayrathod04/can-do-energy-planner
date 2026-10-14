import React, { useState } from 'react';
import { SectionHeading, Button } from '@/components/ui';
import { MODES, EnergyMode } from '@/data/modes';
import { usePlannerStore } from '@/lib/store';
import clsx from 'clsx';

export const L4Modes: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const setActiveMode = usePlannerStore((state) => state.setActiveMode);

  const currentMode: EnergyMode = MODES[activeIndex] || MODES[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : MODES.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < MODES.length - 1 ? prev + 1 : 0));
  };

  const handleUseMode = (modeId: string) => {
    setActiveMode(modeId);
    window.location.hash = '#/app';
  };

  return (
    <section id="modes" className="py-20 bg-white border-b-[3px] border-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="TAILORED ENERGY ARCHETYPES"
          title="Six Modes. Six Aesthetics."
          description="Every day is not a grind day. Choose the spray can formula that fits today’s cognitive rhythm."
          align="center"
        />

        {/* Carousel Container */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Energy Modes Carousel"
          className="relative max-w-4xl mx-auto border-[3px] border-[#111111] shadow-[8px_8px_0_#111111] p-6 md:p-12 transition-colors duration-300"
          style={{ backgroundColor: `${currentMode.accentColor}25` }}
        >
          {/* Header & Multiplier */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="font-mono text-sm font-bold px-3 py-1 bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111]">
              MODE {activeIndex + 1} OF {MODES.length}
            </span>
            <span className="font-display text-sm px-3 py-1 bg-[#111111] text-white">
              MULTIPLIER: {currentMode.multiplier}×
            </span>
          </div>

          {/* Big Editorial Mode Name */}
          <div className="space-y-4 my-6 text-center">
            <h3
              className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#111111] select-none uppercase drop-shadow-[4px_4px_0_#FFFFFF]"
              style={{ color: currentMode.accentColor }}
            >
              {currentMode.name}
            </h3>
            <p className="font-tag text-xl md:text-2xl text-[#111111]">{currentMode.tagline}</p>
            <p className="font-body text-base md:text-lg text-[#333333] max-w-xl mx-auto">
              {currentMode.description}
            </p>
            <p className="font-mono text-xs font-bold text-[#555555]">
              TEXTURE: {currentMode.patternLabel} • BEST FOR: {currentMode.bestFor}
            </p>
          </div>

          {/* Action CTA */}
          <div className="text-center pt-4">
            <Button
              onClick={() => handleUseMode(currentMode.id)}
              variant="brutal"
              size="lg"
              className="bg-white hover:bg-[#FFD93D]"
            >
              Use {currentMode.name} Mode in App →
            </Button>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-[#111111]">
            <button
              onClick={handlePrev}
              aria-label="Previous mode"
              className="w-12 h-12 flex items-center justify-center font-display text-lg border-2 border-[#111111] bg-white shadow-[2px_2px_0_#111111] hover:bg-[#FFD93D] active:translate-x-[1px] active:translate-y-[1px]"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {MODES.map((mode, idx) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to ${mode.name} mode`}
                  className={clsx(
                    'w-3.5 h-3.5 border-2 border-[#111111] transition-transform',
                    idx === activeIndex ? 'bg-[#111111] scale-125' : 'bg-white hover:scale-110'
                  )}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next mode"
              className="w-12 h-12 flex items-center justify-center font-display text-lg border-2 border-[#111111] bg-white shadow-[2px_2px_0_#111111] hover:bg-[#FFD93D] active:translate-x-[1px] active:translate-y-[1px]"
            >
              →
            </button>
          </div>

          {/* Live Announcer for Screen Readers */}
          <div aria-live="polite" className="sr-only">
            Active mode: {currentMode.name}. {currentMode.tagline}. Multiplier:{' '}
            {currentMode.multiplier}x.
          </div>
        </div>
      </div>
    </section>
  );
};
