import React from 'react';

interface CanGaugeSvgProps {
  fillRatio: number; // 0 to 1+
  reducedMotion?: boolean;
}

export const CanGaugeSvg: React.FC<CanGaugeSvgProps> = ({ fillRatio, reducedMotion = false }) => {
  // Angle: -120 deg (empty) to +120 deg (full/over)
  const clampedRatio = Math.min(1.3, Math.max(0, fillRatio));
  const needleAngle = -120 + clampedRatio * 240;

  return (
    <g className="can-gauge" transform="translate(120, 205)">
      {/* Outer Dial Rim */}
      <circle cx="0" cy="0" r="28" fill="#FFFFFF" stroke="#14101F" strokeWidth="3" />
      
      {/* Overload Danger Zone Arc (from 100% up to 130%) */}
      <path
        d="M 17 -17 A 24 24 0 0 1 24 0"
        fill="none"
        stroke="#FF3D8B"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Tick Marks */}
      <line x1="-18" y1="12" x2="-22" y2="15" stroke="#14101F" strokeWidth="2" />
      <line x1="0" y1="-18" x2="0" y2="-23" stroke="#14101F" strokeWidth="2.5" />
      <line x1="18" y1="12" x2="22" y2="15" stroke="#FF3D8B" strokeWidth="2.5" />

      {/* PSI Label */}
      <text x="0" y="14" textAnchor="middle" fontSize="7" fontWeight="bold" fontFamily="Space Grotesk" fill="#555">
        PSI
      </text>

      {/* Spring Needle */}
      <g
        style={{
          transform: `rotate(${needleAngle}deg)`,
          transformOrigin: '0px 0px',
          transition: reducedMotion ? 'none' : 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <line x1="0" y1="5" x2="0" y2="-20" stroke="#14101F" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="-2.5,-14 2.5,-14 0,-21" fill="#FF3D8B" />
        <circle cx="0" cy="0" r="4.5" fill="#14101F" />
        <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
      </g>
    </g>
  );
};
