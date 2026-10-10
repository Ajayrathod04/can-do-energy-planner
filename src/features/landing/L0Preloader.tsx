import React, { useEffect, useState } from 'react';
import { CanoMascot } from '@/components/CanoMascot';

/**
 * L0 Preloader: Non-blocking cream screen overlay.
 * Fills 0-100% in max 1.2s; automatically skips on repeat visits or reduced-motion.
 */
export const L0Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const hasVisited = sessionStorage.getItem('can_do_preloader_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !hasVisited && !prefersReducedMotion;
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    sessionStorage.setItem('can_do_preloader_seen', 'true');
    const startTime = Date.now();
    const duration = 1100; // 1.1s max

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setTimeout(() => setIsVisible(false), 150);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF6E5] text-[#111111] transition-opacity duration-300"
    >
      <div className="flex flex-col items-center gap-6 max-w-xs text-center">
        <CanoMascot pose="happy" size={130} />
        <div className="space-y-2 w-full">
          <p className="font-display text-xl uppercase tracking-wider">Shaking the Can...</p>
          <div className="w-full h-5 bg-white border-[3px] border-[#111111] shadow-[3px_3px_0_#111111] p-0.5">
            <div
              className="h-full bg-[#FF6B2C] border border-[#111111] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-bold text-xs text-[#555555]">{progress}% capacity ready</p>
        </div>
      </div>
    </div>
  );
};
