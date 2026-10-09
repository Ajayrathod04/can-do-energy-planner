import React, { useState, useEffect } from 'react';
import { useAppStore, selectActiveMode } from '../lib/store';

export const NozzleCursor: React.FC = () => {
  const activeMode = useAppStore(selectActiveMode);
  const reducedMotion = useAppStore(s => s.reducedMotion);

  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isSpraying, setIsSpraying] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (reducedMotion) return;
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    const handlePointerMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handlePointerDown = () => setIsSpraying(true);
    const handlePointerUp = () => setIsSpraying(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion]);

  if (!isVisible || reducedMotion) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      aria-hidden="true"
    >
      {/* Outer Spray Dispersion Radius */}
      <div
        className={`rounded-full border-2 border-dashed transition-all duration-150 ${
          isSpraying ? 'scale-125 opacity-90' : 'scale-100 opacity-40'
        }`}
        style={{
          width: isSpraying ? '38px' : '28px',
          height: isSpraying ? '38px' : '28px',
          borderColor: activeMode.accentColor,
        }}
      />

      {/* Center Nozzle Orifice Pin */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-black shadow-sm"
        style={{ backgroundColor: activeMode.accentColor }}
      />
    </div>
  );
};
