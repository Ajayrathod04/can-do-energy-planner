import React from 'react';
import { FirstScreenHero } from '@/features/hero';
import {
  LandingNav,
  HowItWorksSection,
  SixMoodsSection,
  EvidenceSection,
  BuiltForEveryoneSection,
  FAQSection,
} from '@/features/landing';
import { Footer } from '@/components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#14101F] flex flex-col font-body">
      {/* Sticky Navigation */}
      <LandingNav />

      {/* Main Playable Hero Can (First Screen) */}
      <section id="play" aria-label="Interactive Can Demo" className="w-full flex-1">
        <FirstScreenHero />
      </section>

      {/* Below the fold sections (max 4) */}
      <HowItWorksSection />
      <SixMoodsSection />
      <EvidenceSection />
      <BuiltForEveryoneSection />
      <FAQSection />

      {/* Bold Credit Footer */}
      <Footer />
    </div>
  );
};
