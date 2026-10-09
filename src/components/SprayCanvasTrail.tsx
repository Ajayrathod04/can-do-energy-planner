import React, { useRef, useEffect } from 'react';
import { useAppStore, selectActiveMode } from '../lib/store';
import { sound } from '../lib/sound';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
}

export const SprayCanvasTrail: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeMode = useAppStore(selectActiveMode);
  const reducedMotion = useAppStore(s => s.reducedMotion);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle render loop
    const render = () => {
      if (reducedMotion) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      // Slow fade out for spray persistence
      ctx.fillStyle = 'rgba(18, 18, 18, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        p.alpha -= 0.003;
        if (p.alpha <= 0) {
          particlesRef.current.splice(idx, 1);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [reducedMotion]);

  const addSprayBurst = (x: number, y: number) => {
    if (reducedMotion) return;
    const count = 12;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 32;
      particlesRef.current.push({
        x: x + Math.cos(angle) * dist,
        y: y + Math.sin(angle) * dist,
        size: Math.random() * 3.5 + 1.0,
        color: activeMode.accentColor,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addSprayBurst(x, y);

    if (Math.random() < 0.15) {
      sound.playSpray(0.1);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerMove={handlePointerMove}
      className={`absolute inset-0 pointer-events-auto touch-none cursor-crosshair ${className}`}
      aria-hidden="true"
    />
  );
};
