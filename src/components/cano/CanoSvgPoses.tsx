import React from 'react';

export type CanoPose = 'happy' | 'full' | 'sleepy' | 'celebrating';

export const CanoSvgPoses: React.FC<{ pose: CanoPose }> = ({ pose }) => {
  if (pose === 'happy') {
    return (
      <>
        {/* Eyes */}
        <circle cx="68" cy="62" r="4.5" fill="#111111" />
        <circle cx="92" cy="62" r="4.5" fill="#111111" />
        <circle cx="70" cy="60" r="1.5" fill="#FFFFFF" />
        <circle cx="94" cy="60" r="1.5" fill="#FFFFFF" />
        {/* Smile */}
        <path d="M72 70 Q80 77 88 70" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        {/* Waving Right Arm */}
        <path d="M118 70 Q135 55 142 42" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        <circle cx="142" cy="42" r="5" fill="#FF3D8B" stroke="#111111" strokeWidth="2.5" />
        {/* Left Arm Resting */}
        <path d="M42 70 Q28 85 32 95" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        {/* Legs */}
        <line x1="62" y1="165" x2="62" y2="185" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        <line x1="98" y1="165" x2="98" y2="185" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="58" cy="188" rx="8" ry="4" fill="#FF6B2C" stroke="#111111" strokeWidth="2.5" />
        <ellipse cx="102" cy="188" rx="8" ry="4" fill="#FF6B2C" stroke="#111111" strokeWidth="2.5" />
      </>
    );
  }

  if (pose === 'full') {
    return (
      <>
        {/* Closed content eyes */}
        <path d="M64 62 Q69 58 74 62" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        <path d="M86 62 Q91 58 96 62" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        {/* Puffed cheeks */}
        <circle cx="60" cy="66" r="5" fill="#FF3D8B" opacity="0.6" />
        <circle cx="100" cy="66" r="5" fill="#FF3D8B" opacity="0.6" />
        {/* Wiping forehead arm */}
        <path d="M124 75 Q135 60 110 50" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        {/* Belly-holding arm */}
        <path d="M36 80 Q25 110 50 115" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        {/* Legs splayed */}
        <line x1="58" y1="165" x2="52" y2="185" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        <line x1="102" y1="165" x2="108" y2="185" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="48" cy="188" rx="8" ry="4" fill="#FF6B2C" stroke="#111111" strokeWidth="2.5" />
        <ellipse cx="112" cy="188" rx="8" ry="4" fill="#FF6B2C" stroke="#111111" strokeWidth="2.5" />
      </>
    );
  }

  if (pose === 'sleepy') {
    return (
      <>
        {/* Nightcap */}
        <path d="M60 25 Q90 -5 125 10 L105 35 Z" fill="#C084FC" stroke="#111111" strokeWidth="3" />
        <circle cx="125" cy="10" r="5" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        {/* Closed sleeping eyes */}
        <path d="M65 64 Q70 68 75 64" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        <path d="M85 64 Q90 68 95 64" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        {/* Zzz text */}
        <text
          x="120"
          y="45"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="bold"
          fontSize="16"
          fill="#111111"
        >
          Z
        </text>
        <text
          x="132"
          y="32"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="bold"
          fontSize="12"
          fill="#111111"
        >
          z
        </text>
        {/* Crossed legs / sitting */}
        <path d="M55 165 Q80 180 105 165" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      </>
    );
  }

  // celebrating
  return (
    <>
      {/* Big smiling eyes */}
      <path d="M65 58 Q70 52 75 58" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M85 58 Q90 52 95 58" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />
      {/* Open joyous mouth */}
      <path d="M72 66 Q80 78 88 66 Z" fill="#FF3D8B" stroke="#111111" strokeWidth="2.5" />
      {/* Both arms in the air */}
      <path d="M42 65 Q22 45 28 30" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      <path d="M118 65 Q138 45 132 30" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      {/* Jumping legs */}
      <path d="M60 165 L50 180" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 165 L110 180" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      {/* Sparkles / Confetti */}
      <path d="M25 15 L28 22 L35 25 L28 28 L25 35 L22 28 L15 25 L22 22 Z" fill="#FFD93D" />
      <path
        d="M135 15 L138 22 L145 25 L138 28 L135 35 L132 28 L125 25 L132 22 Z"
        fill="#00E599"
      />
      <circle cx="80" cy="5" r="3" fill="#FF3D8B" />
    </>
  );
};
