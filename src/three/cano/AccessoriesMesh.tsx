import React from 'react';
import { CanoSkinMode } from './types';

export const AccessoriesMesh: React.FC<{ mode: CanoSkinMode }> = ({ mode }) => {
  if (mode === 'focus') {
    // FOCUS glasses
    return (
      <group position={[0, 2.3, 0.95]}>
        <mesh position={[-0.32, 0, 0]}>
          <torusGeometry args={[0.22, 0.035, 12, 24]} />
          <meshStandardMaterial color="#14101F" roughness={0.3} />
        </mesh>
        <mesh position={[0.32, 0, 0]}>
          <torusGeometry args={[0.22, 0.035, 12, 24]} />
          <meshStandardMaterial color="#14101F" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.22, 0.04, 0.03]} />
          <meshStandardMaterial color="#14101F" />
        </mesh>
      </group>
    );
  }

  if (mode === 'grind') {
    // GRIND headband
    return (
      <group position={[0, 2.58, 0]}>
        <mesh>
          <cylinderGeometry args={[1.02, 1.02, 0.22, 32]} />
          <meshStandardMaterial color="#FF6B2C" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, 1.03]}>
          <boxGeometry args={[0.35, 0.12, 0.04]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      </group>
    );
  }

  if (mode === 'create') {
    // CREATE beret
    return (
      <group position={[0.25, 3.5, 0]} rotation={[0.2, 0, -0.3]}>
        <mesh>
          <cylinderGeometry args={[0.7, 0.35, 0.22, 24]} />
          <meshStandardMaterial color="#FF3D8B" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.1, 8]} />
          <meshStandardMaterial color="#14101F" />
        </mesh>
      </group>
    );
  }

  if (mode === 'chill') {
    // CHILL sunhat
    return (
      <group position={[0, 3.4, 0]}>
        <mesh rotation={[-0.05, 0, 0]}>
          <cylinderGeometry args={[1.4, 1.4, 0.06, 32]} />
          <meshStandardMaterial color="#B6FF3B" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.65, 0.75, 0.3, 32]} />
          <meshStandardMaterial color="#B6FF3B" roughness={0.4} />
        </mesh>
      </group>
    );
  }

  if (mode === 'social') {
    // SOCIAL headphones
    return (
      <group position={[0, 2.5, 0]}>
        <mesh position={[0, 0.7, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[1.05, 0.06, 12, 32, Math.PI]} />
          <meshStandardMaterial color="#14101F" roughness={0.2} />
        </mesh>
        <mesh position={[-1.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.2, 16]} />
          <meshStandardMaterial color="#FFD93D" roughness={0.4} />
        </mesh>
        <mesh position={[1.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.2, 16]} />
          <meshStandardMaterial color="#FFD93D" roughness={0.4} />
        </mesh>
      </group>
    );
  }

  if (mode === 'recover') {
    // RECOVER blanket / cape
    return (
      <group position={[0, 1.6, -0.3]}>
        <mesh>
          <cylinderGeometry args={[1.15, 1.25, 1.8, 24, 1, true, -Math.PI * 0.75, Math.PI * 1.5]} />
          <meshStandardMaterial color="#C084FC" roughness={0.7} side={2} />
        </mesh>
      </group>
    );
  }

  return null;
};
