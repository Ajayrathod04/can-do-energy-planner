import React from 'react';
import { useAppStore } from '../lib/store';
import { Download, CheckCircle } from 'lucide-react';
import { sound } from '../lib/sound';

export const TheWall: React.FC = () => {
  const wallTags = useAppStore(s => s.wallTags);

  // Native Canvas PNG Exporter (zero html2canvas dependency!)
  const handleExportPNG = () => {
    sound.playSpray(0.3);

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Concrete background
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, 1200, 800);

    // 2. Texture grid & noise
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    for (let x = 0; x < 1200; x += 20) {
      for (let y = 0; y < 800; y += 20) {
        if ((x + y) % 3 === 0) {
          ctx.fillRect(x, y, 2, 2);
        }
      }
    }

    // 3. Stencil Border & Header
    ctx.strokeStyle = '#F4EFE6';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 1140, 740);

    ctx.fillStyle = '#F4EFE6';
    ctx.font = '900 54px "Archivo Black", sans-serif';
    ctx.fillText('CAN-DO // THE WALL', 60, 100);

    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#FFD93D';
    ctx.fillText('PERSONAL GRAFFITI PROOF OF DELIBERATE CAPACITY', 60, 135);

    ctx.fillStyle = '#888888';
    ctx.font = '16px monospace';
    ctx.fillText(`EXPORTED: ${new Date().toLocaleDateString()} // PIECES: ${wallTags.length}`, 60, 165);

    // 4. Render tags in a brick pattern
    const startX = 60;
    let curX = startX;
    let curY = 220;

    wallTags.forEach((tag) => {
      const cardWidth = 340;
      const cardHeight = 140;

      // Tag background plaque
      ctx.fillStyle = '#1E1E1E';
      ctx.strokeStyle = tag.modeColor;
      ctx.lineWidth = 3;
      ctx.fillRect(curX, curY, cardWidth, cardHeight);
      ctx.strokeRect(curX, curY, cardWidth, cardHeight);

      // Shadow splat
      ctx.fillStyle = tag.modeColor;
      ctx.beginPath();
      ctx.arc(curX + 24, curY + 24, 12, 0, Math.PI * 2);
      ctx.fill();

      // Tag Mode
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 14px monospace';
      ctx.fillText(`[${tag.modeName}]`, curX + 44, curY + 28);

      // Title in Tag Stencil
      ctx.fillStyle = '#F4EFE6';
      ctx.font = 'bold 18px "Space Grotesk", sans-serif';
      const truncatedTitle = tag.title.length > 28 ? tag.title.substring(0, 26) + '...' : tag.title;
      ctx.fillText(truncatedTitle, curX + 20, curY + 70);

      // Cost badge
      ctx.fillStyle = tag.modeColor;
      ctx.font = 'bold 14px monospace';
      ctx.fillText(`${tag.cost} PAINT UNITS COMPLETED`, curX + 20, curY + 110);

      // Time
      ctx.fillStyle = '#777777';
      ctx.font = '12px monospace';
      ctx.fillText(tag.completedAt, curX + cardWidth - 90, curY + 110);

      // Advance layout
      curX += cardWidth + 24;
      if (curX + cardWidth > 1140) {
        curX = startX;
        curY += cardHeight + 24;
      }
    });

    // 5. Watermark attribution
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px "Space Grotesk", sans-serif';
    ctx.fillText('Crafted by AJRathod // CAN-DO Energy Planner', 60, 740);

    // 6. Trigger native download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `CAN-DO-Wall-${Date.now()}.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  return (
    <div className="brutal-card p-5 space-y-4 bg-neutral-900 text-paper border-3 border-paper shadow-[6px_6px_0px_#FFFFFF]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-neutral-700 pb-3">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-yellow-300">
            Step 4 // The Permanent Record
          </span>
          <h2 className="font-display text-xl sm:text-2xl uppercase text-paper">The Wall (Graffiti Gallery)</h2>
          <p className="text-xs text-neutral-400 font-body">
            Completed tasks convert into permanent graffiti tags on your wall. Resting counts as capacity renewal.
          </p>
        </div>

        <button
          onClick={handleExportPNG}
          className="brutal-btn px-4 py-2 text-xs font-bold bg-yellow-400 text-ink flex items-center gap-1.5 self-start sm:self-center hover:bg-yellow-300"
          title="Export complete graffiti wall as high-res PNG using native Canvas 2D API"
          aria-label="Export Wall as PNG"
        >
          <Download className="w-4 h-4 stroke-[3]" />
          <span>Export Wall PNG</span>
        </button>
      </div>

      {/* Gallery Grid */}
      {wallTags.length === 0 ? (
        <div className="p-8 text-center text-neutral-400 font-mono text-xs border border-dashed border-neutral-700">
          No tags sprayed yet. Finish a task or log a recovery session to leave your mark.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          {wallTags.map(tag => (
            <div
              key={tag.id}
              className="p-4 bg-neutral-950 border-2 border-neutral-700 relative overflow-hidden group hover:border-paper transition-all shadow-[3px_3px_0px_#000000]"
            >
              {/* Accent colored spray rim */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: tag.modeColor }}
              />

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1">
                <span className="font-bold uppercase" style={{ color: tag.modeColor }}>
                  {tag.modeName}
                </span>
                <span>{tag.completedAt}</span>
              </div>

              <p className="font-tag text-lg text-paper mt-2 leading-snug tracking-wide group-hover:text-yellow-300 transition-colors">
                "{tag.title}"
              </p>

              <div className="mt-3 flex items-center justify-between text-xs font-mono">
                <span className="bg-neutral-800 border border-neutral-700 px-2 py-0.5 text-neutral-300">
                  {tag.cost} Paint Units
                </span>
                <span className="text-green-400 flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" /> Stenciled
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
