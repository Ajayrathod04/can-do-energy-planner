import React from 'react';

interface CanLiquidSvgProps {
  fillRatio: number; // 0 to 1
  color: string;
  reducedMotion?: boolean;
}

export const CanLiquidSvg: React.FC<CanLiquidSvgProps> = ({
  fillRatio,
  color,
  reducedMotion = false,
}) => {
  const isReduced =
    reducedMotion ||
    (typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const clampedRatio = Math.min(1, Math.max(0, fillRatio));
  const windowHeight = 140;
  const liquidHeight = Math.max(8, clampedRatio * windowHeight);
  const liquidY = 320 + (windowHeight - liquidHeight);

  return (
    <g className="can-liquid-window">
      {/* Clip path for the rounded gauge window */}
      <defs>
        <clipPath id="gaugeWindowClip">
          <rect x="52" y="320" width="136" height="140" rx="14" />
        </clipPath>
        <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Window Background (dark translucent cavity) */}
      <rect x="52" y="320" width="136" height="140" rx="14" fill="#14101F" opacity="0.12" />
      <rect x="52" y="320" width="136" height="140" rx="14" fill="none" stroke="#14101F" strokeWidth="3" />

      {/* Liquid Contents Clipped to Window */}
      <g clipPath="url(#gaugeWindowClip)">
        {/* Animated Liquid Container */}
        <g
          style={{
            transform: `translateY(${liquidY}px)`,
            transition: isReduced ? 'none' : 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Back Wave (offset opacity) */}
          {!isReduced && (
            <path
              d="M -100 0 Q -50 -6 0 0 T 100 0 T 200 0 T 300 0 V 200 H -100 Z"
              fill={color}
              opacity="0.6"
              className="animate-[wave_3.5s_linear_infinite]"
            />
          )}

          {/* Front Wave */}
          <path
            d={
              isReduced
                ? `M 0 0 H 240 V 200 H 0 Z`
                : `M -100 0 Q -50 8 0 0 T 100 0 T 200 0 T 300 0 V 200 H -100 Z`
            }
            fill={color}
            opacity="0.9"
            className={isReduced ? '' : 'animate-[wave_2.5s_linear_infinite]'}
          />

          {/* Rising bubbles */}
          {!isReduced && clampedRatio > 0.15 && (
            <g fill="#FFFFFF" opacity="0.6">
              <circle cx="85" cy="40" r="3" className="animate-[bubble_2.8s_ease-in-out_infinite]" />
              <circle cx="120" cy="70" r="4" className="animate-[bubble_3.2s_ease-in-out_infinite_0.8s]" />
              <circle cx="155" cy="50" r="2.5" className="animate-[bubble_2.5s_ease-in-out_infinite_1.4s]" />
            </g>
          )}
        </g>
      </g>

      {/* Glass Reflection Highlight overlay */}
      <rect
        x="52"
        y="320"
        width="136"
        height="140"
        rx="14"
        fill="url(#glassSheen)"
        pointerEvents="none"
      />

      {/* Measurement hash marks on the glass edge */}
      <line x1="56" y1="355" x2="68" y2="355" stroke="#14101F" strokeWidth="2" opacity="0.4" />
      <line x1="56" y1="390" x2="74" y2="390" stroke="#14101F" strokeWidth="2.5" opacity="0.5" />
      <line x1="56" y1="425" x2="68" y2="425" stroke="#14101F" strokeWidth="2" opacity="0.4" />
    </g>
  );
};
