import React from 'react';
import { Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-3 border-ink bg-paper text-ink py-8 px-4 sm:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-display text-lg tracking-wider">
            <span>CAN-DO.</span>
            <span className="text-xs bg-ink text-paper px-2 py-0.5 font-body font-bold uppercase rounded-none">
              Hyperbloom '24
            </span>
          </div>
          <p className="text-xs text-neutral-700 font-body">
            "Your day has a capacity. Spend it on purpose."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-body">
          <span className="flex items-center gap-1.5 font-bold">
            Crafted with deliberate capacity by
            <span className="underline decoration-modeGrind decoration-2 underline-offset-2">AJRathod</span>
            <Heart className="w-3.5 h-3.5 fill-modeCreate text-modeCreate inline" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <a
            href="mailto:ajrathod.dev@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-ink shadow-[2px_2px_0px_#0A0A0A] hover:bg-neutral-100 font-bold transition-transform active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Send email to AJRathod at ajrathod.dev@gmail.com"
          >
            <Mail className="w-4 h-4 text-ink" aria-hidden="true" />
            <span>ajrathod.dev@gmail.com</span>
          </a>
          <a
            href="https://github.com/Ajayrathod04/can-do-energy-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-ink shadow-[2px_2px_0px_#0A0A0A] hover:bg-neutral-100 font-bold transition-transform active:translate-x-0.5 active:translate-y-0.5"
            aria-label="View source repository on GitHub"
          >
            <svg className="w-4 h-4 fill-ink" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
