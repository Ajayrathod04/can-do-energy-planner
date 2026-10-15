import React from 'react';

interface CanDropletsSvgProps {
  isOver: boolean;
  color: string;
  triggerSplash?: number;
  reducedMotion?: boolean;
}

export const CanDropletsSvg: React.FC<CanDropletsSvgProps> = ({
  isOver,
  color,
  triggerSplash = 0,
  reducedMotion = false,
}) => {
  const showSplash = triggerSplash > 0 && !reducedMotion;

  return (
    <g className="can-droplets">
      {/* Overfill Drips from Nozzle */}
      {isOver && (
        <g fill={color} stroke="#14101F" strokeWidth="1.5">
          {/* Drip 1 */}
          <path
            d="M 120 70 C 117 76 114 84 120 88 C 126 84 123 76 120 70 Z"
            className={reducedMotion ? '' : 'animate-bounce'}
          />
          {/* Drip 2 */}
          <circle cx="120" cy="98" r="3" className={reducedMotion ? '' : 'animate-ping'} />
          {/* Leak puddle at shoulder */}
          <ellipse cx="120" cy="118" rx="14" ry="4" opacity="0.8" />
        </g>
      )}

      {/* 6 Splash Droplets on task addition */}
      {showSplash && (
        <g key={triggerSplash} fill={color} stroke="#14101F" strokeWidth="1.5">
          <circle cx="28" cy="220" r="5" className="animate-[splash1_0.5s_ease-out_forwards]" />
          <circle cx="212" cy="220" r="5" className="animate-[splash2_0.5s_ease-out_forwards]" />
          <circle cx="20" cy="300" r="4" className="animate-[splash3_0.5s_ease-out_forwards]" />
          <circle cx="220" cy="300" r="4" className="animate-[splash4_0.5s_ease-out_forwards]" />
          <circle cx="36" cy="380" r="3.5" className="animate-[splash5_0.5s_ease-out_forwards]" />
          <circle cx="204" cy="380" r="3.5" className="animate-[splash6_0.5s_ease-out_forwards]" />
        </g>
      )}
    </g>
  );
};
