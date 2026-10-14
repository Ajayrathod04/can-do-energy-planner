import React from 'react';
import { StageHero } from '@/features/stage';
import {
  LandingNav,
  HowItWorksSection,
  SixMoodsSection,
  BuiltForEveryoneSection,
  FAQSection,
} from '@/features/landing';
import { Footer } from '@/components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#14101F] flex flex-col font-body">
      {/* Sticky Navigation */}
      <LandingNav />

      {/* Main Playable Hero Stage ("THE PAGE IS THE PRODUCT") */}
      <main id="play" className="w-full flex-1">
        <StageHero />
      </main>

      {/* S4 Below the fold sections */}
      <HowItWorksSection />
      <SixMoodsSection />
      <BuiltForEveryoneSection />
      <FAQSection />

      {/* Bold Credit Footer */}
      <Footer />
    </div>
  );
};
