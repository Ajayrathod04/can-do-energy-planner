import * as THREE from 'three';
import { ModePattern } from '../data/modes';

export interface LabelParams {
  modeName: string;
  accentColor: string;
  pattern?: ModePattern;
  multiplier: number;
  capacity: number;
  usedCapacity: number;
}

export function drawLabelCanvas(params: LabelParams): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const { modeName, accentColor, pattern = 'stripes', multiplier, capacity, usedCapacity } = params;

  // 1. Dark matte paper background
  ctx.fillStyle = '#161616';
  ctx.fillRect(0, 0, 1024, 1024);

  // 2. Halftone / subtle dot grid
  ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
  for (let x = 0; x < 1024; x += 32) {
    for (let y = 0; y < 1024; y += 32) {
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 3. Top color band with color-independent pattern overlay
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, 40, 1024, 40);

  // Draw pattern inside top band
  ctx.save();
  ctx.strokeStyle = '#0A0A0A';
  ctx.lineWidth = 4;
  if (pattern === 'stripes') {
    for (let i = -40; i < 1060; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 40);
      ctx.lineTo(i + 20, 80);
      ctx.stroke();
    }
  } else if (pattern === 'dots') {
    ctx.fillStyle = '#0A0A0A';
    for (let x = 10; x < 1024; x += 24) {
      for (let y = 50; y < 80; y += 14) {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (pattern === 'zigzag') {
    ctx.beginPath();
    for (let x = 0; x < 1024; x += 30) {
      ctx.lineTo(x + 15, 50);
      ctx.lineTo(x + 30, 70);
    }
    ctx.stroke();
  } else if (pattern === 'waves') {
    ctx.beginPath();
    for (let x = 0; x < 1024; x += 5) {
      const y = 60 + Math.sin(x * 0.05) * 8;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  } else if (pattern === 'checks') {
    ctx.fillStyle = '#0A0A0A';
    for (let x = 0; x < 1024; x += 30) {
      ctx.fillRect(x, 40, 15, 20);
      ctx.fillRect(x + 15, 60, 15, 20);
    }
  }
  ctx.restore();

  // 4. Stencil brand stamp
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px "Space Grotesk", sans-serif';
  ctx.fillText('CAN-DO AEROSOL ENERGY CO.', 60, 130);
  ctx.font = '18px monospace';
  ctx.fillStyle = '#888888';
  ctx.fillText(`SPEC: FINITE-DAY-V1 // PATTERN: [${pattern.toUpperCase()}]`, 60, 160);

  // 5. Large Mode Name banner
  ctx.fillStyle = accentColor;
  ctx.fillRect(40, 190, 944, 250);

  ctx.fillStyle = '#0A0A0A';
  ctx.font = '900 125px "Archivo Black", sans-serif';
  ctx.fillText(modeName, 70, 365);

  // Multiplier badge on right
  ctx.fillStyle = '#0A0A0A';
  ctx.fillRect(720, 215, 240, 60);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 26px "Space Grotesk", sans-serif';
  ctx.fillText(`${multiplier}x MULTIPLIER`, 740, 255);

  // 6. Dynamic Capacity Meter
  ctx.fillStyle = '#222222';
  ctx.fillRect(60, 500, 904, 180);
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4;
  ctx.strokeRect(60, 500, 904, 180);

  // Fill percentage
  const fillPct = Math.min(1.0, usedCapacity / Math.max(1, capacity));
  const isOverflow = usedCapacity > capacity;
  ctx.fillStyle = isOverflow ? '#FF3D8B' : accentColor;
  ctx.fillRect(68, 508, Math.max(12, 888 * fillPct), 164);

  // Meter text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px "Space Grotesk", sans-serif';
  ctx.fillText(`CAPACITY: ${usedCapacity} / ${capacity} PAINT UNITS`, 90, 605);

  if (isOverflow) {
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px monospace';
    ctx.fillText('⚠ OVERFLOW DETECTED', 620, 605);
  }

  // 7. Warning Text
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '20px monospace';
  ctx.fillText('CAUTION: ENERGY IS STRICTLY CONSERVED. RESTING ACCUMULATES TOMORROW’S PSI.', 60, 740);
  ctx.fillText('DIGITAL WALL: PLEASE PAINT LEGAL WALLS ONLY.', 60, 775);

  // 8. Procedural Barcode
  const barcodeX = 60;
  const barcodeY = 825;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(barcodeX, barcodeY, 500, 110);
  ctx.fillStyle = '#000000';
  let curX = barcodeX + 20;
  for (let i = 0; i < 48; i++) {
    const barW = (i % 3 === 0) ? 6 : (i % 2 === 0) ? 10 : 3;
    ctx.fillRect(curX, barcodeY + 10, barW, 75);
    curX += barW + ((i % 5 === 0) ? 6 : 4);
    if (curX > barcodeX + 480) break;
  }
  ctx.font = '16px monospace';
  ctx.fillText('CAN-DO-2024-OCTOBER-DEVPOST', barcodeX + 70, barcodeY + 102);

  return canvas;
}

export function createLabelTexture(params: LabelParams): THREE.CanvasTexture {
  const canvas = drawLabelCanvas(params);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);
  texture.needsUpdate = true;
  return texture;
}
