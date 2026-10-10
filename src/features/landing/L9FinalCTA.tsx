import React from 'react';
import { PillCTA, Button } from '@/components/ui';
import { Footer } from '@/components/Footer';
import { CanoMascot } from '@/components/CanoMascot';

export const L9FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#FFF6E5]">
      {/* Pre-Footer Big CTA */}
      <div className="py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <CanoMascot pose="celebrating" size={140} />
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-tight">
          Your day has a capacity.{' '}
          <span className="bg-[#FFD93D] px-2 py-0.5 border-[3px] border-[#111111] shadow-[4px_4px_0_#111111] inline-block rotate-[-1deg]">
            Spend it on purpose.
          </span>
        </h2>

        <p className="font-body text-lg md:text-xl text-[#333333] max-w-2xl mx-auto">
          Close the infinite backlog. Shake your spray can, load today’s tasks, and stop when the cap
          locks. No signup required.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <PillCTA onClick={() => (window.location.hash = '#/app')} accentColor="#FF6B2C">
            Open the Energy Planner →
          </PillCTA>
          <Button
            onClick={() => (window.location.hash = '#/?tour=1')}
            variant="secondary"
            size="lg"
          >
            Take 60s Judge Tour
          </Button>
        </div>
      </div>

      {/* The Permanent Acid Yellow Credit Footer */}
      <Footer />
    </section>
  );
};
