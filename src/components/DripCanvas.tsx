import React, { useRef, useEffect } from 'react';
import { useAppStore } from '../lib/store';

interface DripStream {
  id: number;
  x: number;
  y: number;
  speed: number;
  headRadius: number;
  trailWidth: number;
  wobblePhase: number;
  drying: boolean;
}

interface DripCanvasProps {
  overflowUnits: number;
  color?: string;
  className?: string;
}

export const DripCanvas: React.FC<DripCanvasProps> = ({
  overflowUnits,
  color = '#FF3D8B',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useAppStore(s => s.reducedMotion);
  const streamsRef = useRef<DripStream[]>([]);

  // Update drip streams when overflowUnits changes
  useEffect(() => {
    if (overflowUnits <= 0) {
      // Mark current drips as drying
      streamsRef.current.forEach(s => (s.drying = true));
      return;
    }

    // Adjust stream count to match overflowUnits
    const currentCount = streamsRef.current.filter(s => !s.drying).length;
    if (overflowUnits > currentCount) {
      const needed = overflowUnits - currentCount;
      const width = canvasRef.current?.width || 360;

      for (let i = 0; i < needed; i++) {
        // Distribute drips evenly with slight jitter
        const slot = (currentCount + i + 1) / (overflowUnits + 1);
        streamsRef.current.push({
          id: Date.now() + Math.random(),
          x: width * slot + (Math.random() * 24 - 12),
          y: 0,
          speed: 0.6 + Math.random() * 0.8,
          headRadius: 3.5,
          trailWidth: 2.2,
          wobblePhase: Math.random() * Math.PI * 2,
          drying: false,
        });
      }
    } else if (overflowUnits < currentCount) {
      // Remove excess streams by setting them to drying
      const excess = currentCount - overflowUnits;
      let marked = 0;
      for (const s of streamsRef.current) {
        if (!s.drying && marked < excess) {
          s.drying = true;
          marked++;
        }
      }
    }
  }, [overflowUnits]);

  // Simulation render loop
  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      streamsRef.current.forEach(stream => {
        if (!stream.drying) {
          stream.y += stream.speed;
          stream.speed += 0.008; // Gravity acceleration
          stream.headRadius = Math.min(9, stream.headRadius + 0.02);
          stream.wobblePhase += 0.08;
        }

        const wobbleX = stream.x + Math.sin(stream.wobblePhase) * 2;

        // Draw dripping trail
        ctx.strokeStyle = color;
        ctx.lineWidth = stream.trailWidth;
        ctx.beginPath();
        ctx.moveTo(stream.x, 0);
        ctx.lineTo(wobbleX, stream.y);
        ctx.stroke();

        // Draw widening fluid head droplet
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(wobbleX, stream.y, stream.headRadius, 0, Math.PI * 2);
        ctx.fill();

        // Small specular highlight inside droplet
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(wobbleX - 1.5, stream.y - 1.5, stream.headRadius * 0.35, 0, Math.PI * 2);
        ctx.fill();
      });

      // Filter out drips that reached past bottom or fully dried
      streamsRef.current = streamsRef.current.filter(
        s => s.y < canvas.height + 20 && (!s.drying || s.speed > 0)
      );

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [color, reducedMotion]);

  if (overflowUnits <= 0) return null;

  return (
    <div className={`relative pointer-events-none ${className}`}>
      {/* Screen reader live announcement */}
      <div aria-live="polite" className="sr-only">
        {overflowUnits} paint {overflowUnits === 1 ? 'unit' : 'units'} over capacity. Can leaking.
      </div>

      {reducedMotion ? (
        // Accessible Static SVG Fallback for reduced motion
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {Array.from({ length: overflowUnits }).map((_, idx) => {
            const x = (idx + 1) * (400 / (overflowUnits + 1));
            return (
              <g key={idx}>
                <line x1={x} y1={0} x2={x} y2={120} stroke={color} strokeWidth="3" />
                <circle cx={x} cy={125} r={8} fill={color} />
              </g>
            );
          })}
        </svg>
      ) : (
        <canvas
          ref={canvasRef}
          width={400}
          height={320}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
