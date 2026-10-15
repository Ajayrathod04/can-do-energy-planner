import React, { useState, useEffect, useRef } from 'react';

export const LandingNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Focus trap for mobile full-screen menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
      if (e.key === 'Tab' && mobileMenuRef.current) {
        const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF6E5]/95 backdrop-blur-xs border-b-[3px] border-[#14101F] px-4 sm:px-8 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="flex items-center gap-2 group min-h-[44px]" aria-label="CAN-DO Home">
          <span className="w-8 h-8 flex items-center justify-center font-display text-base bg-[#FF6B2C] text-[#14101F] border-2 border-[#14101F] shadow-[2px_2px_0_#14101F] group-hover:rotate-6 transition-transform">
            C
          </span>
          <span className="font-display text-xl sm:text-2xl text-[#14101F] tracking-tight">
            CAN-DO.
          </span>
        </a>

        {/* Desktop Nav: Try it | How it works | Moods | Process | Accessibility | Open planner */}
        <nav
          aria-label="Landing Page Navigation"
          className="hidden md:flex items-center gap-5 font-bold text-sm text-[#14101F]"
        >
          <button
            onClick={() => scrollTo('play')}
            className="hover:text-[#FF3D8B] cursor-pointer min-h-[44px] px-1"
          >
            Try it
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="hover:text-[#FF3D8B] cursor-pointer min-h-[44px] px-1"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo('moods')}
            className="hover:text-[#FF3D8B] cursor-pointer min-h-[44px] px-1"
          >
            Moods
          </button>
          <a
            href="#/process"
            className="hover:text-[#FF3D8B] min-h-[44px] flex items-center px-1"
          >
            Process
          </a>
          <button
            onClick={() => scrollTo('accessibility')}
            className="hover:text-[#FF3D8B] cursor-pointer min-h-[44px] px-1"
          >
            Accessibility
          </button>
          <a
            href="#/app"
            className="px-3 py-1.5 bg-[#14101F] text-white font-display text-xs uppercase border-2 border-[#14101F] shadow-[2px_2px_0px_#14101F] hover:bg-neutral-800 rounded min-h-[44px] flex items-center"
          >
            Open planner
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center font-display text-lg border-2 border-[#14101F] bg-white shadow-[2px_2px_0_#14101F]"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu with Focus Trap */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-0 top-[54px] bg-[#FFF6E5] z-50 p-6 flex flex-col justify-between border-b-[3px] border-[#14101F]"
        >
          <nav className="flex flex-col gap-3 font-display text-xl text-[#14101F]">
            <button
              onClick={() => scrollTo('play')}
              className="text-left py-2.5 border-b-2 border-[#14101F]"
            >
              Try it
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-left py-2.5 border-b-2 border-[#14101F]"
            >
              How it works
            </button>
            <button
              onClick={() => scrollTo('moods')}
              className="text-left py-2.5 border-b-2 border-[#14101F]"
            >
              Moods
            </button>
            <a
              href="#/process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b-2 border-[#14101F]"
            >
              Process
            </a>
            <button
              onClick={() => scrollTo('accessibility')}
              className="text-left py-2.5 border-b-2 border-[#14101F]"
            >
              Accessibility
            </button>
            <a
              href="#/app"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b-2 border-[#14101F] text-[#C2410C]"
            >
              Open planner
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-[#14101F] text-white font-display text-center rounded border-2 border-[#14101F]"
          >
            Close Menu ✕
          </button>
        </div>
      )}
    </header>
  );
};
