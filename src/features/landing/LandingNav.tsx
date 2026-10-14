import React, { useState } from 'react';

export const LandingNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF6E5]/95 backdrop-blur-xs border-b-[3px] border-[#111111] px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 flex items-center justify-center font-display text-base bg-[#FF6B2C] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0_#111111] group-hover:rotate-6 transition-transform">
            C
          </span>
          <span className="font-display text-xl sm:text-2xl text-[#111111] tracking-tight">
            CAN-DO.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Landing Page Navigation"
          className="hidden md:flex items-center gap-6 font-bold text-sm text-[#111111]"
        >
          <button
            onClick={() => scrollTo('how-it-works')}
            className="hover:text-[#FF3D8B] cursor-pointer"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo('try-it')}
            className="hover:text-[#FF3D8B] cursor-pointer"
          >
            Try it
          </button>
          <button onClick={() => scrollTo('modes')} className="hover:text-[#FF3D8B] cursor-pointer">
            Modes
          </button>
          <button
            onClick={() => scrollTo('accessibility')}
            className="hover:text-[#FF3D8B] cursor-pointer"
          >
            Accessibility
          </button>
          <a href="#/system" className="hover:text-[#FF3D8B]">
            Design system
          </a>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#/app"
            className="hidden sm:inline-flex items-center justify-center font-display text-sm px-5 py-2.5 bg-[#FFD93D] text-[#111111] border-[2px] border-[#111111] shadow-[3px_3px_0_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#111111] active:translate-x-[1px] active:translate-y-[1px]"
          >
            Open the app →
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center font-display text-lg border-2 border-[#111111] bg-white shadow-[2px_2px_0_#111111]"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#FFF6E5] z-50 p-6 flex flex-col gap-6 border-b-[3px] border-[#111111] animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col gap-4 font-display text-2xl text-[#111111]">
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-left py-2 border-b-2 border-[#111111]"
            >
              How it works
            </button>
            <button
              onClick={() => scrollTo('try-it')}
              className="text-left py-2 border-b-2 border-[#111111]"
            >
              Try it
            </button>
            <button
              onClick={() => scrollTo('modes')}
              className="text-left py-2 border-b-2 border-[#111111]"
            >
              Modes
            </button>
            <button
              onClick={() => scrollTo('accessibility')}
              className="text-left py-2 border-b-2 border-[#111111]"
            >
              Accessibility
            </button>
            <a
              href="#/system"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b-2 border-[#111111]"
            >
              Design system
            </a>
          </nav>
          <a
            href="#/app"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-4 bg-[#FFD93D] font-display text-lg border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]"
          >
            Open the app →
          </a>
        </div>
      )}
    </header>
  );
};
