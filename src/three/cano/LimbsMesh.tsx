import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CanoEmotion } from './types';

interface LimbsMeshProps {
  emotion: CanoEmotion;
  reducedMotion?: boolean;
}

export const LimbsMesh: React.FC<LimbsMeshProps> = ({ emotion, reducedMotion = false }) => {
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (reducedMotion) return;
    const t = clock.getElapsedTime();

    if (emotion === 'HAPPY') {
      if (rightArmRef.current) {
        rightArmRef.current.rotation.z = Math.sin(t * 6) * 0.35 + 0.5;
      }
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z = -0.2 + Math.sin(t * 2) * 0.05;
      }
    } else if (emotion === 'PROUD' || emotion === 'EATING') {
      if (rightArmRef.current && leftArmRef.current) {
        rightArmRef.current.rotation.z = Math.sin(t * 8) * 0.2 + 0.6;
        leftArmRef.current.rotation.z = -Math.sin(t * 8) * 0.2 - 0.6;
      }
    } else if (emotion === 'SLEEPING') {
      if (rightArmRef.current && leftArmRef.current) {
        rightArmRef.current.rotation.z = 0.1;
        leftArmRef.current.rotation.z = -0.1;
      }
    } else {
      // Idle breath arms
      if (rightArmRef.current && leftArmRef.current) {
        rightArmRef.current.rotation.z = 0.2 + Math.sin(t * 2) * 0.05;
        leftArmRef.current.rotation.z = -0.2 - Math.sin(t * 2) * 0.05;
      }
    }
  });

  return (
    <group>
      {/* Left Arm Capsule */}
      <group ref={leftArmRef} position={[-1.02, 1.8, 0]}>
        <mesh position={[-0.25, -0.3, 0]} rotation={[0, 0, 0.4]}>
          <capsuleGeometry args={[0.08, 0.5, 8, 16]} />
          <meshStandardMaterial color="#FFD93D" roughness={0.4} />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.45, -0.6, 0]}>
          <sphereGeometry args={[0.11, 12, 12]} />
          <meshStandardMaterial color="#FF6B2C" roughness={0.4} />
        </mesh>
      </group>

      {/* Right Arm Capsule */}
      <group ref={rightArmRef} position={[1.02, 1.8, 0]}>
        <mesh position={[0.25, -0.3, 0]} rotation={[0, 0, -0.4]}>
          <capsuleGeometry args={[0.08, 0.5, 8, 16]} />
          <meshStandardMaterial color="#FFD93D" roughness={0.4} />
        </mesh>
        {/* Hand */}
        <mesh position={[0.45, -0.6, 0]}>
          <sphereGeometry args={[0.11, 12, 12]} />
          <meshStandardMaterial color="#FF6B2C" roughness={0.4} />
        </mesh>
      </group>

      {/* Rounded Left Foot */}
      <mesh position={[-0.42, -0.1, 0.15]}>
        <capsuleGeometry args={[0.14, 0.35, 12, 16]} />
        <meshStandardMaterial color="#FF6B2C" roughness={0.3} />
      </mesh>

      {/* Rounded Right Foot */}
      <mesh position={[0.42, -0.1, 0.15]}>
        <capsuleGeometry args={[0.14, 0.35, 12, 16]} />
        <meshStandardMaterial color="#FF6B2C" roughness={0.3} />
      </mesh>
    </group>
  );
};
