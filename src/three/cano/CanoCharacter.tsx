import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createSprayCanGeometry, createSprayCapGeometry } from '../SprayCanGeometry';
import { CanoCharacterProps } from './types';
import { FaceMesh } from './FaceMesh';
import { LimbsMesh } from './LimbsMesh';
import { PaintGaugeMesh } from './PaintGaugeMesh';
import { AccessoriesMesh } from './AccessoriesMesh';
import { updateSpring } from './spring';

const SKIN_COLORS: Record<string, string> = {
  focus: '#7C5CFF',
  grind: '#FF6B2C',
  create: '#FF3D8B',
  chill: '#B6FF3B',
  social: '#FFD93D',
  recover: '#C084FC',
};

export const CanoCharacter: React.FC<CanoCharacterProps> = ({
  emotion = 'HAPPY',
  skinMode = 'focus',
  capacity = 10,
  usedPaint = 0,
  isNearTask = false,
  isShaking = false,
  reducedMotion = false,
  pointerPos = { x: 0, y: 0 },
  onClick,
}) => {
  const rootGroupRef = useRef<THREE.Group>(null);
  const capRef = useRef<THREE.Mesh>(null);
  const springYRef = useRef({ val: 0, vel: 0 });
  const squashRef = useRef({ val: 1, vel: 0 });

  const canGeometry = useMemo(() => createSprayCanGeometry(), []);
  const capGeometry = useMemo(() => createSprayCapGeometry(), []);
  const modeColor = SKIN_COLORS[skinMode] || '#FFD93D';

  const isFull = capacity > 0 && usedPaint >= capacity;
  const isOver = capacity > 0 && usedPaint > capacity;

  useFrame(({ clock }, delta) => {
    if (reducedMotion) return;
    const t = clock.getElapsedTime();

    // Idle breathing & bobbing
    let targetY = Math.sin(t * 2.2) * 0.08;
    let targetSquash = 1.0 + Math.sin(t * 4.4) * 0.03;

    if (emotion === 'SLEEPING') {
      targetY = Math.sin(t * 1.2) * 0.03 - 0.1;
      targetSquash = 0.96;
    } else if (emotion === 'PROUD') {
      // Celebration jump
      targetY = Math.abs(Math.sin(t * 5)) * 0.45;
      targetSquash = targetY > 0.1 ? 1.08 : 0.92;
    } else if (emotion === 'EATING') {
      targetSquash = 1.0 + Math.sin(t * 12) * 0.08;
    }

    if (isShaking) {
      targetY += (Math.random() - 0.5) * 0.2;
    }

    springYRef.current = updateSpring(springYRef.current, targetY, 180, 14, delta);
    squashRef.current = updateSpring(squashRef.current, targetSquash, 200, 16, delta);

    if (rootGroupRef.current) {
      rootGroupRef.current.position.y = springYRef.current.val;
      rootGroupRef.current.scale.y = squashRef.current.val;
      // Belly bulge scaling as it fills
      const bulge = Math.min(1.2, 1.0 + (usedPaint / Math.max(1, capacity)) * 0.12);
      rootGroupRef.current.scale.x = (2 - squashRef.current.val) * bulge;
      rootGroupRef.current.scale.z = (2 - squashRef.current.val) * bulge;
    }

    // Cap snap at full
    if (capRef.current) {
      capRef.current.position.y = isFull ? 3.75 : 3.9;
    }
  });

  return (
    <group ref={rootGroupRef} onClick={onClick}>
      {/* 1. Main Lathe Can Body */}
      <mesh geometry={canGeometry} position={[0, 0, 0]}>
        <meshStandardMaterial color="#FFD93D" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* 2. Actuator Nozzle Cap "Hat" */}
      <mesh ref={capRef} geometry={capGeometry} position={[0, 3.9, 0]}>
        <meshStandardMaterial color={isFull ? '#14101F' : '#FFFFFF'} roughness={0.2} />
      </mesh>

      {/* 3. Paint Gauge Window on Belly */}
      <PaintGaugeMesh usedPaint={usedPaint} capacity={capacity} modeColor={modeColor} />

      {/* 4. Expressive Face */}
      <FaceMesh
        emotion={emotion}
        pointerPos={pointerPos}
        isNearTask={isNearTask}
        reducedMotion={reducedMotion}
      />

      {/* 5. Capsule Limbs */}
      <LimbsMesh emotion={emotion} reducedMotion={reducedMotion} />

      {/* 6. Mode Skin Accessories */}
      <AccessoriesMesh mode={skinMode} />

      {/* 7. Sleep Zzz particle indicator */}
      {emotion === 'SLEEPING' && (
        <group position={[0.7, 3.2, 0.4]}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" transparent opacity={0.8} />
          </mesh>
          <mesh position={[0.2, 0.3, 0]}>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" transparent opacity={0.8} />
          </mesh>
        </group>
      )}

      {/* 8. Overload Sweat Drips */}
      {isOver && (
        <group position={[0.65, 2.7, 0.7]}>
          <mesh>
            <coneGeometry args={[0.07, 0.2, 8]} />
            <meshStandardMaterial color="#7DD3FC" roughness={0.1} />
          </mesh>
        </group>
      )}
    </group>
  );
};
