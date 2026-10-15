import React, { useState, useEffect, useRef } from 'react';
import { InteractiveCanProps, CanFaceState } from './types';
import { CanFaceSvg } from './CanFaceSvg';
import { CanGaugeSvg } from './CanGaugeSvg';
import { CanLiquidSvg } from './CanLiquidSvg';
import { CanDropletsSvg } from './CanDropletsSvg';

export const InteractiveCan: React.FC<InteractiveCanProps> = ({
  capacity,
  usedPaint,
  modeColor,
  modeName,
  isFull,
  isOver,
  reducedMotion = false,
  triggerSplash = 0,
  onCanClick,
  className = '',
}) => {
  const isReduced =
    reducedMotion ||
    (typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [squash, setSquash] = useState(false);

  const fillRatio = capacity > 0 ? usedPaint / capacity : 0;
  const remaining = Math.max(0, capacity - usedPaint);

  const faceState: CanFaceState =
    usedPaint === 0 ? 'sleepy'
    : isOver ? 'worried'
    : isFull ? 'stuffed'
    : 'happy';

  // Squash & stretch on triggerSplash
  useEffect(() => {
    if (!triggerSplash || isReduced) return;
    setSquash(true);
    const t = setTimeout(() => setSquash(false), 300);
    return () => clearTimeout(t);
  }, [triggerSplash, isReduced]);

  // Haptic feedback when full
  useEffect(() => {
    if (isFull && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try { navigator.vibrate?.([40, 60, 40]); } catch { /* noop */ }
    }
  }, [isFull]);

  // Pointer tilt (fine pointers only, +/- 4deg)
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isReduced || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTilt({ x: normX * 4, y: -normY * 4 });
  };

  const handlePointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onCanClick}
      role="img"
      aria-label={`Aerosol paint canister: ${usedPaint} of ${capacity} paint units used in ${modeName} mode. ${remaining} units remaining.${isFull ? ' Can is full for today.' : ''}${isOver ? ' Over capacity.' : ''}`}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        transform: isReduced ? 'none' : `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) ${squash ? 'scale(1.05, 0.94)' : 'scale(1, 1)'}`,
        transition: isReduced ? 'none' : 'transform 200ms ease-out',
      }}
    >
      {/* Live Region for Screen Readers */}
      <div id="can-live-region" className="sr-only" aria-live="polite" role="status">
        {usedPaint} of {capacity} paint used. {remaining} left.{isFull ? ' Full! The rest waits for tomorrow.' : ''}{isOver ? ' Warning: Over capacity.' : ''}
      </div>

      <svg
        viewBox="0 0 240 520"
        className="w-auto h-full max-h-full drop-shadow-[8px_8px_0px_#14101F]"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="bodyShine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="70%" stopColor="#14101F" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#14101F" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Can Hard Offset Drop Shadow */}
        <path d="M 44 116 L 70 82 H 170 L 196 116 V 480 Q 120 496 44 480 Z" fill="#14101F" transform="translate(10, 10)" />

        {/* 1. Cap & Nozzle */}
        <g id="nozzle-assembly">
          {/* Nozzle stem */}
          <rect x="110" y="36" width="20" height="20" rx="3" fill="#E5E7EB" stroke="#14101F" strokeWidth="3" />
          {/* Actuator button */}
          <rect x="104" y="24" width="32" height="16" rx="4" fill="#FFFFFF" stroke="#14101F" strokeWidth="3" />
          {/* Spray orifice */}
          <circle cx="120" cy="30" r="2.5" fill="#14101F" />

          {/* Cap snaps down when full */}
          {isFull && (
            <g transform="translate(0, 8)" className="animate-[capSnap_0.3s_ease-out]">
              <path d="M 80 50 L 86 20 H 154 L 160 50 Z" fill="#FF3D8B" stroke="#14101F" strokeWidth="3" />
              <line x1="94" y1="32" x2="146" y2="32" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 3" />
            </g>
          )}
        </g>

        {/* 2. Can Shoulder (Tapered metal cone) */}
        <path
          d="M 40 114 Q 40 80 120 78 Q 200 80 200 114 Z"
          fill="#E5E7EB"
          stroke="#14101F"
          strokeWidth="3.5"
        />

        {/* 3. Can Cylindrical Body */}
        <rect
          x="40"
          y="114"
          width="160"
          height="360"
          rx="6"
          fill={modeColor}
          stroke="#14101F"
          strokeWidth="3.5"
          style={{ transition: 'fill 400ms ease' }}
        />

        {/* Metallic Highlight Gradient Stripe */}
        <rect x="40" y="114" width="160" height="360" rx="6" fill="url(#bodyShine)" pointerEvents="none" />

        {/* 4. Pressure Gauge */}
        <CanGaugeSvg fillRatio={fillRatio} reducedMotion={isReduced} />

        {/* 5. Face Label Area */}
        <CanFaceSvg state={faceState} reducedMotion={isReduced} />

        {/* 6. Liquid Level Window */}
        <CanLiquidSvg fillRatio={fillRatio} color={modeColor} reducedMotion={isReduced} />

        {/* 7. Droplet Splashes & Overfill Drips */}
        <CanDropletsSvg isOver={isOver} color={modeColor} triggerSplash={triggerSplash} reducedMotion={isReduced} />

        {/* 8. Closed For Today Sticker */}
        {isFull && (
          <g transform="translate(120, 390) rotate(-8)">
            <rect x="-85" y="-18" width="170" height="36" rx="4" fill="#FFD93D" stroke="#14101F" strokeWidth="3" className="shadow-[3px_3px_0px_#14101F]" />
            <text x="0" y="5" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="Permanent Marker" fill="#14101F">
              CLOSED FOR TODAY
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
