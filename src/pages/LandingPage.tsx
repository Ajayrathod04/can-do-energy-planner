import React from 'react';
import {
  L0Preloader,
  L1Hero,
  L2HowItWorks,
  L3TryIt,
  L4Modes,
  L5Anatomy,
  L6Proof,
  L7AccessPrivacy,
  L8FAQ,
  L9FinalCTA,
  LandingNav,
} from '@/features/landing';
import { Marquee } from '@/components/ui';

export const LandingPage: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#111111] flex flex-col">
      {/* L0 Preloader Overlay */}
      <L0Preloader />

      {/* Landing Sticky Navigation Header */}
      <LandingNav />

      {/* Marquee Caution Tape */}
      <Marquee bgColor="#FFD93D" />

      {/* L1 Hero */}
      <L1Hero
        onScrollToDemo={() => scrollTo('try-it')}
        onScrollToHowItWorks={() => scrollTo('how-it-works')}
      />

      {/* L2 How It Works */}
      <L2HowItWorks />

      {/* L3 Instant Micro-Demo */}
      <L3TryIt />

      {/* L4 Six Modes Carousel */}
      <L4Modes />

      {/* L5 Anatomy Spec Sheet */}
      <L5Anatomy />

      {/* L6 Proof & Before/After Comparison */}
      <L6Proof />

      {/* L7 Access & Privacy Toggles */}
      <L7AccessPrivacy />

      {/* L8 FAQ Accordion */}
      <L8FAQ />

      {/* L9 Final CTA & Footer */}
      <L9FinalCTA />
    </div>
  );
};
