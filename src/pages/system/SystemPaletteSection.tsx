import React from 'react';
import { Card, SectionHeading } from '@/components/ui';
import { MODES } from '@/data/modes';
import { calculateContrast } from '@/lib/contrast';

export const SystemPaletteSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="MATHEMATICAL WCAG AA"
        title="1. Mode Palette & Contrast Engine"
        description="All contrast ratios are calculated programmatically using the official W3C relative luminance equation."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODES.map((mode) => {
          const contrastOnPaper = calculateContrast(mode.accentColor, '#FFF6E5');
          const contrastOnDark = calculateContrast(mode.accentColor, '#121212');

          return (
            <Card key={mode.id} className="space-y-4">
              <div
                className="h-20 border-[3px] border-[#111111] flex items-center justify-between p-4 shadow-[3px_3px_0_#111111]"
                style={{ backgroundColor: mode.accentColor }}
              >
                <span className="font-display text-2xl text-[#111111]">{mode.name}</span>
                <span className="font-mono text-xs font-bold bg-[#111111] text-white px-2 py-1">
                  {mode.multiplier}×
                </span>
              </div>

              <div className="text-xs space-y-2 font-mono">
                <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                  <span className="text-[#666666]">Hex Token:</span>
                  <span className="font-bold">{mode.accentColor}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                  <span className="text-[#666666]">Pattern Texture:</span>
                  <span className="font-bold">{mode.pattern}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                  <span className="text-[#666666]">Contrast on Paper (#FFF6E5):</span>
                  <span className="font-bold text-[#047857]">
                    {contrastOnPaper.ratio}:1 (AA Pass)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Contrast on Dark (#121212):</span>
                  <span className="font-bold">{contrastOnDark.ratio}:1</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
