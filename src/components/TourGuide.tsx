import React, { useState } from 'react';
import { useRouter } from '../lib/router';
import { Compass, X, ArrowRight, ArrowLeft, Check } from 'lucide-react';

const TOUR_STEPS = [
  {
    title: '1. The Pressurized Check-In',
    description: 'Set your sleep, energy, and friction levels. CAN-DO applies a transparent mathematical formula to calibrate your maximum safe paint units for today.',
  },
  {
    title: '2. The Procedural 3D Spray Can',
    description: 'Your day is a finite aerosol canister. Drag or rotate the 3D model. The dynamic label and gauge live-update with every task you pack.',
  },
  {
    title: '3. Guilt-Free Overflow Protection',
    description: 'When tasks exceed capacity, the can visibly overflows. No red guilt sirens—CAN-DO suggests which tasks to strategically postpone to tomorrow.',
  },
  {
    title: '4. The Wall of Graffiti Proof',
    description: 'Completed tasks become unique procedural graffiti pieces. Even rest days leave celebratory recovery stencils.',
  },
];

export const TourGuide: React.FC = () => {
  const { isTourActive, navigate } = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  if (!isTourActive) return null;

  const step = TOUR_STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/app');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] brutal-card p-5 bg-paper text-ink border-3 border-ink shadow-[8px_8px_0px_#0A0A0A] animate-fadeIn">
      {/* Tour Header */}
      <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-modeGrind" />
          <span className="font-display text-sm uppercase">Guided Product Tour ({currentStep + 1}/{TOUR_STEPS.length})</span>
        </div>
        <button
          onClick={handleClose}
          className="p-1 hover:bg-neutral-200 border border-ink"
          aria-label="Exit tour"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tour Body */}
      <div className="space-y-2 mb-4">
        <h4 className="font-display text-lg uppercase text-ink">{step.title}</h4>
        <p className="font-body text-xs text-neutral-800 leading-relaxed">{step.description}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2 border-t border-neutral-300">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="brutal-btn px-3 py-1 text-xs bg-white text-ink disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Previous tour step"
        >
          <ArrowLeft className="w-3.5 h-3.5 inline mr-1" />
          <span>Back</span>
        </button>

        <button
          onClick={handleNext}
          className="brutal-btn px-4 py-1 text-xs bg-modeGrind text-ink font-bold"
          aria-label={currentStep === TOUR_STEPS.length - 1 ? 'Finish tour and open app' : 'Next tour step'}
        >
          <span>{currentStep === TOUR_STEPS.length - 1 ? 'Launch App' : 'Next'}</span>
          {currentStep === TOUR_STEPS.length - 1 ? (
            <Check className="w-3.5 h-3.5 inline ml-1" />
          ) : (
            <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
          )}
        </button>
      </div>
    </div>
  );
};
