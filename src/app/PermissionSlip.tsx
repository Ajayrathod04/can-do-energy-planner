import React, { useState } from 'react';
import { useAppStore } from '../lib/store';
import { sound } from '../lib/sound';
import { Heart, Download, X, Award } from 'lucide-react';

export const PermissionSlip: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setActiveMode = useAppStore(s => s.setActiveMode);
  const logRestSession = useAppStore(s => s.logRestSession);

  const handleClaimRest = () => {
    sound.playSpray(0.3);
    setActiveMode('recover');
    logRestSession('Official Permission to Rest claimed');
    setIsOpen(true);
  };

  const handleDownloadPNG = () => {
    sound.playPop();

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Warm parchment background
    ctx.fillStyle = '#F4EFE6';
    ctx.fillRect(0, 0, 1080, 1080);

    // 2. Texture & borders
    ctx.strokeStyle = '#0A0A0A';
    ctx.lineWidth = 12;
    ctx.strokeRect(40, 40, 1000, 1000);

    ctx.lineWidth = 4;
    ctx.setLineDash([16, 12]);
    ctx.strokeRect(60, 60, 960, 960);
    ctx.setLineDash([]);

    // 3. Stencil Header
    ctx.fillStyle = '#8B5CF6';
    ctx.fillRect(80, 100, 920, 140);

    ctx.fillStyle = '#F4EFE6';
    ctx.font = '900 68px "Archivo Black", sans-serif';
    ctx.fillText('PERMISSION TO REST', 110, 195);

    ctx.fillStyle = '#0A0A0A';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('OFFICIAL SANCTION OF DELIBERATE CAPACITY', 100, 290);
    ctx.fillText(`DATE OF ISSUANCE: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`, 100, 325);

    // 4. Affirmation Body
    ctx.font = '32px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#1A1A1A';
    const lines = [
      'This document confirms that you do not need to',
      'earn the right to be a human being.',
      '',
      'Your daily energy budget is zero paint units today,',
      'and that is an act of deliberate courage.',
      '',
      'Rest is not the absence of productivity.',
      'Rest is the biological manufacturing of tomorrow\'s stamina.',
      '',
      'Put down the tools. You are officially excused.'
    ];

    let startY = 410;
    lines.forEach(line => {
      ctx.fillText(line, 100, startY);
      startY += 44;
    });

    // 5. Official Rubber Stamp
    ctx.save();
    ctx.translate(820, 840);
    ctx.rotate(-0.15);
    ctx.strokeStyle = '#8B5CF6';
    ctx.lineWidth = 8;
    ctx.strokeRect(-180, -60, 360, 120);

    ctx.fillStyle = '#8B5CF6';
    ctx.font = '900 36px "Archivo Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('VALIDATED', 0, -10);
    ctx.font = 'bold 20px monospace';
    ctx.fillText('BIO-RECOVERY APPROVED', 0, 28);
    ctx.restore();

    // 6. Sign-off Watermark
    ctx.textAlign = 'left';
    ctx.fillStyle = '#666666';
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    ctx.fillText('CAN-DO Energy Budgeting System · Crafted by AJRathod', 100, 960);

    // 7. Download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = `CAN-DO-Permission-To-Rest-${Date.now()}.png`;
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  return (
    <>
      <div className="brutal-card p-4 bg-purple-50 border-3 border-ink shadow-[4px_4px_0px_#0A0A0A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-modeRecover fill-modeRecover" />
            1.6 Bio-Recovery Protocol
          </span>
          <h3 className="font-display text-lg uppercase text-ink">
            Need to shut down today?
          </h3>
          <p className="text-xs text-neutral-700 font-body">
            Resting is not wasted time. It is replenishing your aerosol canister's PSI.
          </p>
        </div>

        <button
          type="button"
          onClick={handleClaimRest}
          className="brutal-btn px-4 py-2 text-xs bg-modeRecover text-paper border-2 border-ink font-bold whitespace-nowrap self-stretch sm:self-auto hover:bg-purple-600"
          aria-label="Claim official permission to rest today"
        >
          <Award className="w-4 h-4 mr-1.5 inline" />
          <span>Claim Permission to Rest</span>
        </button>
      </div>

      {/* Stencil Certificate Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="permission-slip-title"
          className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
        >
          <div className="brutal-card max-w-xl w-full p-6 space-y-5 bg-paper border-3 border-ink shadow-[10px_10px_0px_#0A0A0A]">
            <div className="flex items-center justify-between border-b-3 border-ink pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-modeRecover" />
                <h3 id="permission-slip-title" className="font-display text-2xl uppercase">
                  PERMISSION TO REST
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-neutral-200 border-2 border-ink"
                aria-label="Close certificate dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Stencil Plaque */}
            <div className="p-6 bg-purple-100/70 border-2 border-dashed border-ink space-y-4 font-body">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-600">
                <span>OFFICIAL CAN-DO CERTIFICATE</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>

              <p className="font-tag text-2xl text-purple-900 leading-tight">
                "You do not have to earn the right to rest."
              </p>

              <p className="text-xs text-neutral-800 leading-relaxed font-body">
                Today’s target is zero paint units. The world will wait. Your nervous system is recalibrating, and this recovery session counts as legitimate progress.
              </p>

              <div className="p-2.5 bg-white border border-ink text-[11px] font-mono text-purple-800 flex items-center justify-between">
                <span>MODE SHIFT: RECOVER (0.6x)</span>
                <span className="font-bold">STATUS: PROTECTED</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t-2 border-ink">
              <button
                onClick={handleDownloadPNG}
                className="brutal-btn px-4 py-2 text-xs bg-yellow-400 text-ink font-bold flex items-center gap-1.5"
                title="Download certificate as 1080x1080 PNG"
              >
                <Download className="w-4 h-4" />
                <span>Export Certificate PNG</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="brutal-btn px-5 py-2 text-xs bg-ink text-paper font-bold"
              >
                Close & Relax
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
