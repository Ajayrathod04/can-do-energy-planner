import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { SprayCanMesh } from './SprayCanMesh';
import { EnergyMode } from '../data/modes';

interface SprayCanViewProps {
  mode: EnergyMode;
  capacity: number;
  usedCapacity: number;
  className?: string;
  enableControls?: boolean;
}

export const SprayCanView: React.FC<SprayCanViewProps> = ({
  mode,
  capacity,
  usedCapacity,
  className = 'w-full h-full min-h-[380px]',
  enableControls = true,
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center bg-neutral-900 border-3 border-ink ${className}`}>
        <img
          src="./img/hero-poster.png"
          alt="CAN-DO Spray Can 3D Preview"
          className="max-h-[340px] object-contain drop-shadow-2xl"
        />
        <div className="absolute bottom-4 left-4 bg-ink/80 text-paper text-xs px-2 py-1 border border-paper font-mono">
          WebGL Fallback Mode
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]} // Clamped DPR for high mobile performance
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          {/* Key and ambient lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />

          {/* Mode colored rim light */}
          <pointLight
            position={[-4, 3, -2]}
            color={mode.accentColor}
            intensity={2.8}
            distance={12}
          />
          <pointLight
            position={[4, -2, 2]}
            color="#FFFFFF"
            intensity={0.8}
            distance={8}
          />

          {/* The Procedural Spray Can */}
          <SprayCanMesh
            mode={mode}
            capacity={capacity}
            usedCapacity={usedCapacity}
            isInteractive={true}
          />

          {/* Contact Shadows on ground */}
          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.65}
            scale={6}
            blur={1.8}
            far={4}
          />

          {/* Interactive Rotation Controls */}
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.8}
              rotateSpeed={0.8}
            />
          )}
        </Suspense>
      </Canvas>

      {/* Floating Mode indicator tag */}
      <div className="absolute bottom-3 right-3 pointer-events-none flex items-center gap-2 bg-ink/90 border border-neutral-700 px-3 py-1 text-xs font-mono text-paper">
        <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: mode.accentColor }} />
        <span>3D PROCEDURAL // {mode.name}</span>
      </div>
    </div>
  );
};
