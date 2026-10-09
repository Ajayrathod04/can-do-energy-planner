import * as THREE from 'three';

export interface LabelParams {
  modeName: string;
  accentColor: string;
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

  const { modeName, accentColor, multiplier, capacity, usedCapacity } = params;

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

  // 3. Top color band
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, 40, 1024, 20);

  // 4. Stencil brand stamp
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px "Space Grotesk", sans-serif';
  ctx.fillText('CAN-DO AEROSOL ENERGY CO.', 60, 110);
  ctx.font = '18px monospace';
  ctx.fillStyle = '#888888';
  ctx.fillText('SPEC: FINITE-DAY-V1 // NON-INFINITE BUDGET', 60, 140);

  // 5. Large Mode Name banner
  ctx.fillStyle = accentColor;
  ctx.fillRect(40, 180, 944, 260);

  ctx.fillStyle = '#0A0A0A';
  ctx.font = '900 130px "Archivo Black", sans-serif';
  ctx.fillText(modeName, 70, 370);

  // Multiplier badge on right
  ctx.fillStyle = '#0A0A0A';
  ctx.fillRect(720, 210, 240, 60);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 26px "Space Grotesk", sans-serif';
  ctx.fillText(`${multiplier}x MULTIPLIER`, 740, 250);

  // 6. Procedural paint splatters around the mode name
  ctx.fillStyle = accentColor;
  const splatters = [
    { x: 120, y: 520, r: 24 },
    { x: 145, y: 550, r: 12 },
    { x: 105, y: 560, r: 8 },
    { x: 880, y: 490, r: 35 },
    { x: 920, y: 530, r: 16 },
    { x: 850, y: 525, r: 10 },
    { x: 520, y: 470, r: 18 },
  ];
  splatters.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // 7. Dynamic Capacity Meter
  ctx.fillStyle = '#222222';
  ctx.fillRect(60, 520, 904, 180);
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4;
  ctx.strokeRect(60, 520, 904, 180);

  // Fill percentage
  const fillPct = Math.min(1.0, usedCapacity / Math.max(1, capacity));
  const isOverflow = usedCapacity > capacity;
  ctx.fillStyle = isOverflow ? '#FF3D8B' : accentColor;
  ctx.fillRect(68, 528, Math.max(12, 888 * fillPct), 164);

  // Meter text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px "Space Grotesk", sans-serif';
  ctx.fillText(`CAPACITY: ${usedCapacity} / ${capacity} PAINT UNITS`, 90, 625);

  if (isOverflow) {
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px monospace';
    ctx.fillText('⚠ OVERFLOW DETECTED', 620, 625);
  }

  // 8. Warning Text
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '20px monospace';
  ctx.fillText('CAUTION: ENERGY IS STRICTLY CONSERVED. RESTING ACCUMULATES TOMORROW’S PSI.', 60, 760);
  ctx.fillText('DO NOT FORCE TASKS BEYOND GAUGE LIMITS.', 60, 790);

  // 9. Procedural Barcode
  const barcodeX = 60;
  const barcodeY = 840;
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
