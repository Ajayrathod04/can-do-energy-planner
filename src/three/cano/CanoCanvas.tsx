import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CanoCharacter } from './CanoCharacter';
import { CanoCharacterProps, CanoEmotion } from './types';
import { CanoMascot, CanoPose } from '../../components/CanoMascot';

function mapEmotionToPose(emotion: CanoEmotion): CanoPose {
  switch (emotion) {
    case 'SLEEPING':
    case 'RESTING':
      return 'sleepy';
    case 'STUFFED':
    case 'WORRIED':
      return 'full';
    case 'PROUD':
      return 'celebrating';
    default:
      return 'happy';
  }
}

function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export interface CanoCanvasProps extends CanoCharacterProps {
  className?: string;
  onWake?: () => void;
}

export const CanoCanvas: React.FC<CanoCanvasProps> = ({
  emotion = 'HAPPY',
  className = '',
  onWake,
  ...characterProps
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onWake?.();
    }
  };

  return (
    <div
      ref={containerRef}
      role="button"
      tabIndex={0}
      aria-label={`3D Character Cano, currently ${emotion}. Press Enter or click to interact.`}
      onClick={onWake}
      onKeyDown={handleKeyDown}
      className={`relative outline-none focus-visible:ring-4 focus-visible:ring-[#7C5CFF] rounded-2xl cursor-pointer select-none ${className}`}
    >
      {hasWebGL && isVisible ? (
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <CanoMascot pose={mapEmotionToPose(emotion)} size={260} />
            </div>
          }
        >
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 2.0, 5.8], fov: 42 }}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            frameloop={isVisible ? 'always' : 'never'}
          >
            <ambientLight intensity={0.9} />
            <directionalLight position={[4, 6, 5]} intensity={1.2} />
            <directionalLight position={[-4, 2, -2]} intensity={0.4} color="#7DD3FC" />
            <CanoCharacter emotion={emotion} {...characterProps} />
          </Canvas>
        </Suspense>
      ) : (
        <div className="flex items-center justify-center w-full h-full p-6">
          <CanoMascot
            pose={mapEmotionToPose(emotion)}
            size={280}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
    </div>
  );
};
