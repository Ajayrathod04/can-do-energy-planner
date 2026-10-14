import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { updateSpring } from './spring';

interface PaintGaugeMeshProps {
  usedPaint?: number;
  capacity?: number;
  modeColor?: string;
}

export const PaintGaugeMesh: React.FC<PaintGaugeMeshProps> = ({
  usedPaint = 0,
  capacity = 10,
  modeColor = '#FF6B2C',
}) => {
  const innerFillRef = useRef<THREE.Mesh>(null);
  const fillRatio = capacity > 0 ? Math.min(1.2, Math.max(0, usedPaint / capacity)) : 0;
  const springRef = useRef({ val: fillRatio, vel: 0 });

  useFrame((_, delta) => {
    springRef.current = updateSpring(springRef.current, fillRatio, 160, 15, delta);
    if (innerFillRef.current) {
      const currentRatio = Math.max(0.01, springRef.current.val);
      innerFillRef.current.scale.y = currentRatio;
      innerFillRef.current.position.y = 1.0 + (currentRatio * 0.7) / 2;
    }
  });

  return (
    <group position={[0, 0, 0.96]}>
      {/* Outer translucent window / bezel */}
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[0.26, 0.85, 0.08]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transmission={0.85}
          opacity={0.7}
          transparent
          roughness={0.1}
          ior={1.4}
        />
      </mesh>

      {/* Frame border */}
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[0.3, 0.89, 0.04]} />
        <meshStandardMaterial color="#14101F" wireframe />
      </mesh>

      {/* Inner scaling liquid cylinder */}
      <mesh ref={innerFillRef} position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.7, 16]} />
        <meshStandardMaterial color={modeColor} roughness={0.3} />
      </mesh>
    </group>
  );
};
