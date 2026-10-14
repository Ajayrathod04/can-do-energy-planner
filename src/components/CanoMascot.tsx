import React from 'react';
import { CanoPose, CanoSvgPoses } from './cano/CanoSvgPoses';

export type { CanoPose };

export interface CanoMascotProps extends React.SVGProps<SVGSVGElement> {
  pose?: CanoPose;
  size?: number;
}

export const CanoMascot: React.FC<CanoMascotProps> = ({
  pose = 'happy',
  size = 120,
  className,
  ...props
}) => {
  const poseDescriptions = {
    happy: 'Cano the spray can smiling and waving',
    full: 'Cano the spray can with full cheeks indicating the can is full',
    sleepy: 'Cano the spray can sleeping peacefully with a nightcap',
    celebrating: 'Cano the spray can jumping happily and spraying confetti',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 200"
      fill="none"
      role="img"
      aria-label={poseDescriptions[pose]}
      className={className}
      {...props}
    >
      {/* 1. Spray Nozzle Cap */}
      <rect
        x="65"
        y="15"
        width="30"
        height="20"
        rx="4"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="3"
      />
      <circle cx="80" cy="25" r="4" fill="#FF6B2C" />
      <line x1="65" y1="22" x2="95" y2="22" stroke="#111111" strokeWidth="2" />

      {/* 2. Top Dome Shoulder */}
      <path d="M45 45 C45 32 115 32 115 45" fill="#FFD93D" stroke="#111111" strokeWidth="3" />

      {/* 3. Main Can Body */}
      {pose === 'full' ? (
        <path
          d="M40 45 C30 90 30 135 40 165 L120 165 C130 135 130 90 120 45 Z"
          fill="#FFD93D"
          stroke="#111111"
          strokeWidth="3.5"
        />
      ) : (
        <rect
          x="42"
          y="45"
          width="76"
          height="120"
          rx="8"
          fill="#FFD93D"
          stroke="#111111"
          strokeWidth="3.5"
        />
      )}

      {/* 4. Can Belly Label */}
      <rect
        x="48"
        y="75"
        width="64"
        height="60"
        rx="4"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2.5"
      />
      <text
        x="80"
        y="112"
        textAnchor="middle"
        fontFamily="'Archivo Black', sans-serif"
        fontSize="13"
        fill="#111111"
      >
        CAN-DO
      </text>

      {/* 5. Expressive Face & Limbs */}
      <CanoSvgPoses pose={pose} />
    </svg>
  );
};
