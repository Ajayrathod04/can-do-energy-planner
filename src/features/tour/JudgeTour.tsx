import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from '../../lib/router';
import { sound } from '../../lib/sound';
import { Compass, Play, Pause, ChevronRight, ChevronLeft, X, Sparkles } from 'lucide-react';
import { TOUR_STEPS } from './tourSteps';

export const JudgeTour: React.FC = () => {
  const { isTourActive, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(isTourActive);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isTourActive) {
      setIsOpen(true);
      setCurrentStepIndex(0);
      setIsPlaying(true);
    }
  }, [isTourActive]);

  const currentStep = TOUR_STEPS[currentStepIndex];

  useEffect(() => {
    if (isOpen) {
      navigate(currentStep.route);
    }
  }, [currentStepIndex, isOpen, currentStep.route, navigate]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const timer = setTimeout(() => {
      if (currentStepIndex < TOUR_STEPS.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
        sound.playPop();
      } else {
        setIsPlaying(false);
      }
    }, 7500);
    return () => clearTimeout(timer);
  }, [isOpen, isPlaying, currentStepIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentStepIndex < TOUR_STEPS.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
          sound.playPop();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentStepIndex > 0) {
          setCurrentStepIndex((prev) => prev - 1);
          sound.playPop();
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    },
    [isOpen, currentStepIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNext = () => {
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      sound.playPop();
    } else {
      setIsOpen(false);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      sound.playPop();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setCurrentStepIndex(0);
            setIsPlaying(true);
            sound.playPop();
          }}
          className="fixed bottom-6 right-6 z-40 brutal-btn px-4 py-2.5 bg-[#FFD93D] text-[#0A0A0A] border-3 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] font-bold text-xs uppercase flex items-center gap-2 hover:bg-yellow-300 active:translate-x-1 active:translate-y-1"
          aria-label="Start 60-second guided judge tour"
        >
          <Compass
            className="w-4 h-4 text-[#0A0A0A] animate-spin"
            style={{ animationDuration: '8s' }}
          />
          <span>Tour (60s)</span>
        </button>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="judge-tour-heading"
          className="fixed bottom-6 right-6 z-50 max-w-lg w-[calc(100vw-3rem)] brutal-card p-5 bg-[#F4EFE6] text-[#0A0A0A] border-4 border-[#0A0A0A] shadow-[8px_8px_0px_#0A0A0A] space-y-4 animate-fadeIn"
        >
          <div className="flex items-center justify-between border-b-3 border-[#0A0A0A] pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#FFD93D] font-mono text-[10px] font-bold uppercase">
                {currentStep.badge}
              </span>
              <span className="font-mono text-xs font-bold text-neutral-600">
                Step {currentStepIndex + 1} of {TOUR_STEPS.length}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsPlaying((prev) => !prev)}
                className="p-1.5 hover:bg-neutral-200 border border-[#0A0A0A] text-xs font-bold"
                title={isPlaying ? 'Pause auto-play (Space)' : 'Play auto-play (Space)'}
                aria-label={isPlaying ? 'Pause tour' : 'Play tour'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-neutral-200 border border-[#0A0A0A]"
                title="Exit tour (Esc)"
                aria-label="Exit tour"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="w-full h-2 bg-neutral-200 border border-[#0A0A0A] overflow-hidden">
            <div
              className="h-full bg-modeGrind transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / TOUR_STEPS.length) * 100}%` }}
            />
          </div>

          <div className="space-y-2">
            <h3 id="judge-tour-heading" className="font-display text-xl uppercase leading-tight">
              {currentStep.title}
            </h3>
            <p className="font-body text-xs text-neutral-800 leading-relaxed">
              {currentStep.caption}
            </p>
            <div className="p-2 bg-yellow-100 border border-[#0A0A0A] text-[11px] font-mono flex items-center gap-1.5 text-neutral-900">
              <Sparkles className="w-3.5 h-3.5 text-modeGrind flex-shrink-0" />
              <span>{currentStep.highlight}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t-2 border-[#0A0A0A]">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="brutal-btn px-3 py-1.5 text-xs bg-white text-[#0A0A0A] font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>
            <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
              Keys: ← / → / Space / Esc
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="brutal-btn px-4 py-1.5 text-xs bg-modeGrind text-ink font-bold flex items-center gap-1"
              aria-label={currentStepIndex === TOUR_STEPS.length - 1 ? 'Finish tour' : 'Next step'}
            >
              <span>{currentStepIndex === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
