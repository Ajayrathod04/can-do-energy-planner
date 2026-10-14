import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CanoEmotion } from './types';

interface FaceMeshProps {
  emotion: CanoEmotion;
  pointerPos?: { x: number; y: number };
  isNearTask?: boolean;
  reducedMotion?: boolean;
}

export const FaceMesh: React.FC<FaceMeshProps> = ({
  emotion,
  pointerPos = { x: 0, y: 0 },
  isNearTask = false,
  reducedMotion = false,
}) => {
  const pupilLeftRef = useRef<THREE.Mesh>(null);
  const pupilRightRef = useRef<THREE.Mesh>(null);
  const eyelidLeftRef = useRef<THREE.Mesh>(null);
  const eyelidRightRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Group>(null);

  const blinkTimerRef = useRef(0);
  const isBlinkingRef = useRef(false);

  useFrame((_, delta) => {
    // Pointer pupil tracking
    const targetX = Math.max(-0.06, Math.min(0.06, pointerPos.x * 0.08));
    const targetY = Math.max(-0.05, Math.min(0.05, pointerPos.y * 0.06));

    if (pupilLeftRef.current && pupilRightRef.current) {
      pupilLeftRef.current.position.x = -0.32 + targetX;
      pupilLeftRef.current.position.y = 2.3 + targetY;
      pupilRightRef.current.position.x = 0.32 + targetX;
      pupilRightRef.current.position.y = 2.3 + targetY;
    }

    // Blinking animation
    if (!reducedMotion && emotion !== 'SLEEPING') {
      blinkTimerRef.current += delta;
      if (blinkTimerRef.current > 3.5 + Math.sin(blinkTimerRef.current) * 1.5) {
        isBlinkingRef.current = true;
        if (blinkTimerRef.current > 3.7) {
          isBlinkingRef.current = false;
          blinkTimerRef.current = 0;
        }
      }
    } else {
      isBlinkingRef.current = emotion === 'SLEEPING';
    }

    const blinkScale = isBlinkingRef.current ? 1.0 : 0.05;
    if (eyelidLeftRef.current && eyelidRightRef.current) {
      eyelidLeftRef.current.scale.y = blinkScale;
      eyelidRightRef.current.scale.y = blinkScale;
    }
  });

  const isMouthOpen = emotion === 'EATING' || isNearTask;
  const isWorried = emotion === 'WORRIED';
  const isSmiling = emotion === 'HAPPY' || emotion === 'PROUD' || emotion === 'RESTING';

  return (
    <group>
      {/* Sclera (White eye spheres) */}
      <mesh position={[-0.32, 2.3, 0.94]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
      </mesh>
      <mesh position={[0.32, 2.3, 0.94]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
      </mesh>

      {/* Pupils */}
      <mesh ref={pupilLeftRef} position={[-0.32, 2.3, 1.05]}>
        <sphereGeometry args={[0.075, 12, 12]} />
        <meshStandardMaterial color="#14101F" roughness={0.1} />
      </mesh>
      <mesh ref={pupilRightRef} position={[0.32, 2.3, 1.05]}>
        <sphereGeometry args={[0.075, 12, 12]} />
        <meshStandardMaterial color="#14101F" roughness={0.1} />
      </mesh>

      {/* Eyelids */}
      <mesh ref={eyelidLeftRef} position={[-0.32, 2.34, 1.04]}>
        <sphereGeometry args={[0.16, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFD93D" roughness={0.4} />
      </mesh>
      <mesh ref={eyelidRightRef} position={[0.32, 2.34, 1.04]}>
        <sphereGeometry args={[0.16, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFD93D" roughness={0.4} />
      </mesh>

      {/* Pink Cheeks */}
      <mesh position={[-0.52, 2.12, 0.88]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color="#FF3D8B" roughness={0.5} transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.52, 2.12, 0.88]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color="#FF3D8B" roughness={0.5} transparent opacity={0.7} />
      </mesh>

      {/* Mouth */}
      <group ref={mouthRef} position={[0, 2.05, 0.98]}>
        {isMouthOpen ? (
          // Open jaw / eating chomp mouth
          <mesh rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.08, 16]} />
            <meshStandardMaterial color="#FF3D8B" roughness={0.2} />
          </mesh>
        ) : isWorried ? (
          // Worried squiggle
          <mesh rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.15, 0.035, 8, 16, Math.PI * 0.7]} />
            <meshStandardMaterial color="#14101F" />
          </mesh>
        ) : isSmiling ? (
          // Smile arc
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[0.16, 0.035, 8, 16, Math.PI * 0.8]} />
            <meshStandardMaterial color="#14101F" />
          </mesh>
        ) : (
          // Neutral line
          <mesh>
            <boxGeometry args={[0.22, 0.04, 0.02]} />
            <meshStandardMaterial color="#14101F" />
          </mesh>
        )}
      </group>
    </group>
  );
};
