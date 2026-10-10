import React, { useState } from 'react';
import { Card, SectionHeading } from '@/components/ui';

export const L6Proof: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="proof" className="py-20 bg-white border-b-[3px] border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="TANGIBLE METRICS"
          title="Finite focus wins over infinite anxiety"
          description="Normal to-do apps never tell you when to stop. Here is what happens when you set physical capacity limits:"
          align="center"
        />

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-[3px] border-[#111111] bg-[#FFD93D] shadow-[4px_4px_0_#111111] rotate-[-1deg]">
            <p className="font-display text-4xl md:text-5xl text-[#111111]">27 → 7</p>
            <p className="font-bold text-xs uppercase text-[#333333] mt-2">
              Tasks Scheduled Per Day
            </p>
          </Card>

          <Card className="text-center p-6 border-[3px] border-[#111111] bg-[#00E599] shadow-[4px_4px_0_#111111] rotate-[1deg]">
            <p className="font-display text-4xl md:text-5xl text-[#111111]">4 – 16</p>
            <p className="font-bold text-xs uppercase text-[#333333] mt-2">
              Paint Units / Day Range
            </p>
          </Card>

          <Card className="text-center p-6 border-[3px] border-[#111111] bg-[#38BDF8] shadow-[4px_4px_0_#111111] rotate-[-0.5deg]">
            <p className="font-display text-4xl md:text-5xl text-[#111111]">0</p>
            <p className="font-bold text-xs uppercase text-[#333333] mt-2">
              Third-Party Trackers
            </p>
          </Card>

          <Card className="text-center p-6 border-[3px] border-[#111111] bg-[#FF3D8B] shadow-[4px_4px_0_#111111] rotate-[1.5deg]">
            <p className="font-display text-4xl md:text-5xl text-white">100%</p>
            <p className="font-bold text-xs uppercase text-white mt-2">
              On-Device Local Privacy
            </p>
          </Card>
        </div>

        {/* Before / After Interactive Slider */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="font-display text-xl text-center text-[#111111]">
            Drag to compare: Infinite Lists vs. CAN-DO Spray Budget
          </h3>

          <div className="relative h-64 md:h-72 border-[3px] border-[#111111] shadow-[6px_6px_0_#111111] overflow-hidden select-none">
            {/* Before (Left Side) */}
            <div className="absolute inset-0 bg-[#FFF0F0] p-6 flex flex-col justify-center">
              <span className="font-display text-lg text-[#FF3D8B] mb-2">❌ INFINITE TO-DO LIST</span>
              <ul className="text-xs md:text-sm text-[#444444] space-y-1 font-mono">
                <li>• 27 unprioritized items rolling over</li>
                <li>• Constant guilt for unfinished tasks</li>
                <li>• Ignores bad sleep or low mental energy</li>
                <li>• Encourages burnout and late-night panic</li>
              </ul>
            </div>

            {/* After (Right Side - Clipped) */}
            <div
              className="absolute inset-0 bg-[#E8FFF5] p-6 flex flex-col justify-center border-l-[3px] border-[#111111]"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <span className="font-display text-lg text-[#00E599] mb-2">✓ CAN-DO PHYSICAL BUDGET</span>
              <ul className="text-xs md:text-sm text-[#222222] space-y-1 font-mono">
                <li>• Strict 4-16 paint capacity calculated daily</li>
                <li>• Cap locks automatically when full</li>
                <li>• Finished tasks become plaques on The Wall</li>
                <li>• Rest days explicitly celebrated with certificates</li>
              </ul>
            </div>

            {/* Range thumb bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Comparison slider position"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#111111] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111] flex items-center justify-center font-bold text-xs">
                ↔
              </div>
            </div>
          </div>
        </div>

        {/* Real User Test Disclaimer */}
        <div className="mt-12 text-center p-4 bg-[#FFF6E5] border-2 border-[#111111] max-w-xl mx-auto">
          <p className="font-tag text-sm text-[#555555]">
            Results from my 5-person test: coming soon
          </p>
        </div>
      </div>
    </section>
  );
};
