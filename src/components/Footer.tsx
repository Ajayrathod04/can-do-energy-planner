import React, { useState } from 'react';
import { useAppStore } from '../lib/store';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { sound } from '../lib/sound';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useAppStore(s => s.reducedMotion);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ajaybr2021@gmail.com');
      setCopied(true);
      sound.playPop();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
    }
  };

  return (
    <footer
      className="w-full bg-[#FFD93D] text-[#0A0A0A] border-t-4 border-[#0A0A0A] pt-12 pb-10 px-4 sm:px-8 mt-auto relative overflow-hidden select-none"
      role="contentinfo"
      aria-label="Author attribution and contact footer"
    >
      {/* Halftone / grain background overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#0A0A0A 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
        aria-hidden="true"
      />

      {/* Screen Reader Live Announcement for Copy Action */}
      <div aria-live="polite" className="sr-only">
        {copied ? 'Email copied to clipboard' : ''}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        {/* Rotated (-2deg) Permanent Marker sticker reading "MADE BY" */}
        <div
          className={`inline-block px-4 py-1.5 bg-[#0A0A0A] text-[#FFD93D] font-tag text-xl sm:text-2xl shadow-[4px_4px_0px_#FF3D8B] border-2 border-[#0A0A0A] ${
            reducedMotion ? '' : 'transform -rotate-2'
          }`}
        >
          MADE BY
        </div>

        {/* Name rendered EXACTLY as "AJRathod" (casing preserved; no uppercase transform) */}
        <div className="w-full overflow-hidden">
          <h2
            className="font-display tracking-tight text-[#0A0A0A] leading-none"
            style={{
              fontSize: 'clamp(3rem, 12vw, 9rem)',
              textShadow: '6px 6px 0px #FF3D8B',
            }}
          >
            AJRathod
          </h2>
        </div>

        {/* Contact links & Copy Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Email link inside black button-style card */}
          <a
            href="mailto:ajaybr2021@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0A0A0A] text-[#FFD93D] font-body font-bold text-base sm:text-lg border-3 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0A0A0A] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none focus-visible:outline-3 focus-visible:outline-[#0A0A0A]"
            aria-label="Send email to AJRathod at ajaybr2021@gmail.com"
          >
            <Mail className="w-5 h-5 text-[#FFD93D]" aria-hidden="true" />
            <span className="font-mono">ajaybr2021@gmail.com</span>
          </a>

          {/* COPY EMAIL Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#FFFFFF] text-[#0A0A0A] font-body font-bold text-sm sm:text-base border-3 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0A0A0A] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none focus-visible:outline-3 focus-visible:outline-[#0A0A0A]"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-700 stroke-[3]" />
                <span className="text-green-800 font-bold">COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#0A0A0A]" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>

          {/* GitHub Source Link */}
          <a
            href="https://github.com/Ajayrathod04/can-do-energy-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#FFFFFF] text-[#0A0A0A] font-body font-bold text-sm sm:text-base border-3 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0A0A0A] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none"
            aria-label="View source repository on GitHub"
          >
            <ExternalLink className="w-4 h-4 text-[#0A0A0A]" />
            <span>GITHUB REPO</span>
          </a>
        </div>

        {/* Small line below with legal and hackathon declaration */}
        <div className="pt-4 border-t-2 border-[#0A0A0A]/20 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono font-bold text-[#0A0A0A]/90">
          <span>Built for Hyperbloom October: UI/UX & Web Design</span>
          <span className="bg-[#0A0A0A] text-[#FFD93D] px-2 py-0.5 font-bold">
            Digital wall. Please paint legal walls only.
          </span>
        </div>
      </div>
    </footer>
  );
};
