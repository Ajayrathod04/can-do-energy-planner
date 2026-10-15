import React, { useState, useEffect } from 'react';
import { CanFaceState } from './types';

interface CanFaceSvgProps {
  state: CanFaceState;
  reducedMotion?: boolean;
}

export const CanFaceSvg: React.FC<CanFaceSvgProps> = ({ state, reducedMotion = false }) => {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 180);
    }, 3800 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const isClosed = blinking || state === 'sleepy';

  return (
    <g className="can-face select-none pointer-events-none">
      {/* Cheeks */}
      <circle cx="80" cy="275" r="9" fill="#FF8BA7" opacity="0.65" />
      <circle cx="160" cy="275" r="9" fill="#FF8BA7" opacity="0.65" />

      {/* Eyes */}
      {isClosed ? (
        <g stroke="#14101F" strokeWidth="3.5" strokeLinecap="round" fill="none">
          {/* Left closed eye */}
          <path d="M 72 260 Q 82 252 92 260" />
          {/* Right closed eye */}
          <path d="M 148 260 Q 158 252 168 260" />
          {state === 'sleepy' && (
            <text x="182" y="248" fill="#14101F" fontSize="14" fontFamily="Permanent Marker" opacity="0.8">
              zZz
            </text>
          )}
        </g>
      ) : (
        <g>
          {/* Left Eye */}
          <circle cx="82" cy="258" r="10" fill="#FFFFFF" stroke="#14101F" strokeWidth="3" />
          <circle cx="84" cy="258" r="4.5" fill="#14101F" />
          <circle cx="82" cy="256" r="1.5" fill="#FFFFFF" />

          {/* Right Eye */}
          <circle cx="158" cy="258" r="10" fill="#FFFFFF" stroke="#14101F" strokeWidth="3" />
          <circle cx="160" cy="258" r="4.5" fill="#14101F" />
          <circle cx="158" cy="256" r="1.5" fill="#FFFFFF" />

          {state === 'worried' && (
            <g stroke="#14101F" strokeWidth="2.5" strokeLinecap="round" fill="none">
              <path d="M 72 244 Q 82 248 92 242" />
              <path d="M 148 242 Q 158 248 168 244" />
              {/* Sweat droplet */}
              <path d="M 175 238 Q 179 232 181 238 A 3 3 0 1 1 175 238 Z" fill="#7DD3FC" stroke="#14101F" strokeWidth="1.5" />
            </g>
          )}
        </g>
      )}

      {/* Mouth */}
      {state === 'sleepy' && (
        <path d="M 112 278 Q 120 282 128 278" stroke="#14101F" strokeWidth="3" strokeLinecap="round" fill="none" />
      )}
      {state === 'happy' && (
        <path d="M 108 274 Q 120 290 132 274 Z" fill="#14101F" stroke="#14101F" strokeWidth="2" />
      )}
      {state === 'stuffed' && (
        <path d="M 110 278 Q 120 274 130 278" stroke="#14101F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      )}
      {state === 'worried' && (
        <path d="M 108 282 Q 114 274 120 282 T 132 282" stroke="#14101F" strokeWidth="3" strokeLinecap="round" fill="none" />
      )}
      {state === 'proud' && (
        <path d="M 106 272 Q 120 294 134 272" stroke="#14101F" strokeWidth="3.5" strokeLinecap="round" fill="#FFFFFF" />
      )}
    </g>
  );
};
