import React from 'react';
import { useAppStore } from '../lib/store';
import { sound } from '../lib/sound';
import { Calendar, Download } from 'lucide-react';
import { MonthCalendarGrid } from './MonthCalendarGrid';

export const MonthMural: React.FC = () => {
  const wallTags = useAppStore((s) => s.wallTags);

  const now = new Date();
  const currentMonthName = now.toLocaleString('default', { month: 'long' });
  const currentYear = now.getFullYear();

  const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, now.getMonth(), 1).getDay();

  const dayTiles = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingTiles = Array.from({ length: firstDayIndex }, (_, i) => i);

  const handleExportMonthPoster = () => {
    sound.playSpray(0.35);

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Concrete Dark background
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, 1080, 1350);

    // 2. Texture pebble grid
    ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
    for (let x = 0; x < 1080; x += 24) {
      for (let y = 0; y < 1350; y += 24) {
        ctx.fillRect(x, y, 2, 2);
      }
    }

    // 3. Stencil Poster Border
    ctx.strokeStyle = '#F4EFE6';
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, 1000, 1270);

    // 4. Header block
    ctx.fillStyle = '#FF6B2C';
    ctx.fillRect(60, 60, 960, 140);

    ctx.fillStyle = '#0A0A0A';
    ctx.font = '900 68px "Archivo Black", sans-serif';
    ctx.fillText('CAN-DO // MONTH MURAL', 90, 155);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(`${currentMonthName.toUpperCase()} ${currentYear} // CAPACITY RECORD`, 90, 240);

    ctx.fillStyle = '#888888';
    ctx.font = '16px monospace';
    ctx.fillText(`TOTAL PIECES SPRAYED: ${wallTags.length} // BIO-STAMINA LOGGED`, 90, 270);

    // 5. Calendar 7-column layout
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const colWidth = 134;
    const startX = 70;
    const startY = 320;

    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = '#FFD93D';
    daysOfWeek.forEach((day, idx) => {
      ctx.fillText(day, startX + idx * colWidth + 40, startY);
    });

    const gridY = startY + 20;
    const rowHeight = 150;
    let col = firstDayIndex;
    let row = 0;

    dayTiles.forEach((day) => {
      const tileX = startX + col * colWidth;
      const tileY = gridY + row * rowHeight;

      ctx.fillStyle = '#1A1A1A';
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 2;
      ctx.fillRect(tileX, tileY, colWidth - 8, rowHeight - 8);
      ctx.strokeRect(tileX, tileY, colWidth - 8, rowHeight - 8);

      const isToday = day === now.getDate();
      ctx.fillStyle = isToday ? '#FF6B2C' : '#AAAAAA';
      ctx.font = isToday ? 'bold 18px "Archivo Black", sans-serif' : '14px monospace';
      ctx.fillText(`${day}`, tileX + 8, tileY + 22);

      if (isToday && wallTags.length > 0) {
        wallTags.slice(0, 2).forEach((tag, tIdx) => {
          ctx.fillStyle = tag.modeColor;
          ctx.fillRect(tileX + 8, tileY + 36 + tIdx * 45, colWidth - 24, 38);

          ctx.fillStyle = '#0A0A0A';
          ctx.font = 'bold 11px "Space Grotesk", sans-serif';
          const title = tag.title.length > 12 ? tag.title.substring(0, 10) + '..' : tag.title;
          ctx.fillText(title, tileX + 12, tileY + 54 + tIdx * 45);

          ctx.font = '9px monospace';
          ctx.fillText(`${tag.cost}u`, tileX + 12, tileY + 68 + tIdx * 45);
        });
      }

      col++;
      if (col >= 7) {
        col = 0;
        row++;
      }
    });

    // 6. Footer attribution
    ctx.fillStyle = '#F4EFE6';
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    ctx.fillText('AJRathod / ajaybr2021@gmail.com', 70, 1270);

    ctx.fillStyle = '#888888';
    ctx.font = '14px monospace';
    ctx.fillText(
      'Hyperbloom October: UI/UX & Web Design // Digital wall. Paint legal walls only.',
      70,
      1295
    );

    // 7. Trigger download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = `CAN-DO-Month-Mural-${currentMonthName}-${currentYear}.png`;
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  return (
    <div className="brutal-card p-5 space-y-4 bg-paper text-ink border-3 border-ink shadow-[6px_6px_0px_#0A0A0A]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-ink pb-3">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-modeGrind" />
            1.5 Month Mural Calendar
          </span>
          <h3 className="font-display text-xl sm:text-2xl uppercase">
            {currentMonthName} {currentYear} Energy Wall
          </h3>
        </div>

        <button
          type="button"
          onClick={handleExportMonthPoster}
          className="brutal-btn px-4 py-2 text-xs bg-modeGrind text-ink font-bold flex items-center gap-1.5 self-start sm:self-auto hover:bg-orange-500"
          title="Export high-resolution 1080x1350 PNG poster of monthly mural"
        >
          <Download className="w-4 h-4 stroke-[3]" />
          <span>Export 1080x1350 Poster</span>
        </button>
      </div>

      <MonthCalendarGrid
        paddingTiles={paddingTiles}
        dayTiles={dayTiles}
        wallTags={wallTags}
        currentDay={now.getDate()}
      />
    </div>
  );
};
