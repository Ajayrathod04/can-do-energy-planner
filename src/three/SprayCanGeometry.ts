import * as THREE from 'three';

/**
 * Procedural Spray Can Geometry Generator
 * Generates an accurate aerosol spray can cross-section profile for THREE.LatheGeometry.
 */
export function createSprayCanProfile(): THREE.Vector2[] {
  const points: THREE.Vector2[] = [];

  // 1. Bottom concave chime (pressure safety dome)
  points.push(new THREE.Vector2(0.0, 0.2));
  points.push(new THREE.Vector2(0.4, 0.15));
  points.push(new THREE.Vector2(0.8, 0.05));
  points.push(new THREE.Vector2(0.95, 0.0));
  
  // 2. Bottom chime rim crimp
  points.push(new THREE.Vector2(1.02, 0.05));
  points.push(new THREE.Vector2(0.98, 0.15));
  points.push(new THREE.Vector2(1.0, 0.3));

  // 3. Main cylindrical container body
  points.push(new THREE.Vector2(1.0, 1.0));
  points.push(new THREE.Vector2(1.0, 2.0));
  points.push(new THREE.Vector2(1.0, 2.8));

  // 4. Inward chiseled shoulder taper
  points.push(new THREE.Vector2(0.98, 3.0));
  points.push(new THREE.Vector2(0.90, 3.2));
  points.push(new THREE.Vector2(0.75, 3.4));
  points.push(new THREE.Vector2(0.55, 3.52));

  // 5. Crimp collar / valve mounting cup
  points.push(new THREE.Vector2(0.52, 3.58));
  points.push(new THREE.Vector2(0.55, 3.62));
  points.push(new THREE.Vector2(0.48, 3.65));

  // 6. Center closure
  points.push(new THREE.Vector2(0.2, 3.66));
  points.push(new THREE.Vector2(0.0, 3.66));

  return points;
}

export function createSprayCanGeometry(): THREE.LatheGeometry {
  const points = createSprayCanProfile();
  return new THREE.LatheGeometry(points, 48);
}

export function createSprayCapGeometry(): THREE.CylinderGeometry {
  // Actuator cap sits on the valve stem
  return new THREE.CylinderGeometry(0.32, 0.35, 0.45, 32);
}
