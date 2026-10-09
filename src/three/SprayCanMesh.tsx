import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createSprayCanGeometry, createSprayCapGeometry } from './SprayCanGeometry';
import { createLabelTexture } from './LabelCanvas';
import { EnergyMode } from '../data/modes';

interface SprayCanMeshProps {
  mode: EnergyMode;
  capacity: number;
  usedCapacity: number;
  isInteractive?: boolean;
}

export const SprayCanMesh: React.FC<SprayCanMeshProps> = ({
  mode,
  capacity,
  usedCapacity,
  isInteractive = true,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Lathe geometry for aerosol body
  const canGeometry = useMemo(() => createSprayCanGeometry(), []);
  const capGeometry = useMemo(() => createSprayCapGeometry(), []);

  // Dynamic label texture updated when mode or capacity changes
  const labelTexture = useMemo(() => {
    return createLabelTexture({
      modeName: mode.name,
      accentColor: mode.accentColor,
      multiplier: mode.multiplier,
      capacity,
      usedCapacity,
    });
  }, [mode.name, mode.accentColor, mode.multiplier, capacity, usedCapacity]);

  // Metallic materials
  const canMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: labelTexture,
      roughness: 0.35,
      metalness: 0.6,
      envMapIntensity: 1.2,
    });
  }, [labelTexture]);

  const metalRimMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#D8D8D8',
      roughness: 0.2,
      metalness: 0.92,
      envMapIntensity: 1.5,
    });
  }, []);

  const capMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#1A1A1A',
      roughness: 0.5,
      metalness: 0.1,
    });
  }, []);

  const nozzleDotMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: mode.accentColor,
      roughness: 0.2,
      metalness: 0.1,
      emissive: mode.accentColor,
      emissiveIntensity: 0.6,
    });
  }, [mode.accentColor]);

  // Gentle idle rotation & float
  useFrame((state, delta) => {
    if (groupRef.current && isInteractive) {
      groupRef.current.rotation.y += delta * 0.45;
      groupRef.current.position.y = -1.8 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.8, 0]} scale={[1.1, 1.1, 1.1]}>
      {/* Main Lathe Body with Label Texture */}
      <mesh geometry={canGeometry} material={canMaterial} castShadow receiveShadow />

      {/* Top Metallic Chime Rim Collar */}
      <mesh position={[0, 3.55, 0]} material={metalRimMaterial}>
        <cylinderGeometry args={[0.54, 0.54, 0.08, 32]} />
      </mesh>

      {/* Bottom Metallic Chime Rim */}
      <mesh position={[0, 0.15, 0]} material={metalRimMaterial}>
        <cylinderGeometry args={[1.02, 1.02, 0.08, 32]} />
      </mesh>

      {/* Actuator Spray Cap */}
      <group position={[0, 3.82, 0]}>
        <mesh geometry={capGeometry} material={capMaterial} castShadow />
        {/* Spray Nozzle Orifice (front colored dot) */}
        <mesh position={[0, 0.05, 0.32]} material={nozzleDotMaterial}>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
        </mesh>
      </group>
    </group>
  );
};
