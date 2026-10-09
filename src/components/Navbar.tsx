import React from 'react';
import { useRouter } from '../lib/router';
import { useAppStore, selectActiveMode } from '../lib/store';
import { MODES } from '../data/modes';
import { Volume2, VolumeX, Eye, Compass } from 'lucide-react';
import { sound } from '../lib/sound';

export const Navbar: React.FC = () => {
  const { route, navigate } = useRouter();
  const activeMode = useAppStore(selectActiveMode);
  const setActiveMode = useAppStore(s => s.setActiveMode);
  const soundEnabled = useAppStore(s => s.soundEnabled);
  const toggleSound = useAppStore(s => s.toggleSound);
  const highContrast = useAppStore(s => s.highContrast);
  const setA11ySetting = useAppStore(s => s.setA11ySetting);

  const handleSoundToggle = () => {
    toggleSound();
    if (!soundEnabled) {
      // Just turned on, play brief test pop
      setTimeout(() => sound.playPop(), 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-concrete/95 backdrop-blur-md border-b-3 border-ink px-4 py-3 text-paper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="font-display text-2xl tracking-tight hover:text-modeGrind transition-colors flex items-center gap-2 text-left"
            aria-label="CAN-DO Home"
          >
            <span>CAN-DO.</span>
          </button>
          <div
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 border-2 border-paper text-xs font-bold"
            style={{ backgroundColor: activeMode.accentColor, color: '#0A0A0A' }}
            title={`Active Mode: ${activeMode.name}`}
          >
            <span className="w-2 h-2 rounded-full bg-ink inline-block animate-pulse"></span>
            <span>{activeMode.name} ({activeMode.multiplier}x)</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 sm:gap-3" aria-label="Main Navigation">
          <button
            onClick={() => navigate('/')}
            className={`px-3 py-1.5 font-bold text-xs sm:text-sm uppercase tracking-wide border-2 transition-all ${
              route === '/'
                ? 'bg-paper text-ink border-paper shadow-[3px_3px_0px_#FFFFFF]'
                : 'border-transparent text-paper hover:border-neutral-500'
            }`}
          >
            Story
          </button>

          <button
            onClick={() => navigate('/app')}
            className={`px-3 py-1.5 font-bold text-xs sm:text-sm uppercase tracking-wide border-2 transition-all ${
              route === '/app'
                ? 'bg-modeGrind text-ink border-modeGrind shadow-[3px_3px_0px_#FFFFFF]'
                : 'border-paper text-paper bg-neutral-900 hover:bg-neutral-800'
            }`}
          >
            App
          </button>

          <button
            onClick={() => navigate('/system')}
            className={`px-3 py-1.5 font-bold text-xs sm:text-sm uppercase tracking-wide border-2 transition-all ${
              route === '/system'
                ? 'bg-paper text-ink border-paper shadow-[3px_3px_0px_#FFFFFF]'
                : 'border-transparent text-neutral-300 hover:border-neutral-500'
            }`}
          >
            /system
          </button>

          {/* Quick Tour Link */}
          <button
            onClick={() => navigate('/#/?tour=1')}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 text-yellow-300"
            title="Start guided demo tour"
          >
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Tour</span>
          </button>
        </nav>

        {/* Quick Mode & A11y Controls */}
        <div className="flex items-center gap-2">
          {/* Mode Selector */}
          <label htmlFor="nav-mode-select" className="sr-only">Select Energy Mode</label>
          <select
            id="nav-mode-select"
            value={activeMode.id}
            onChange={(e) => {
              setActiveMode(e.target.value);
              sound.playSpray(0.2);
            }}
            className="bg-neutral-900 text-paper text-xs font-bold border-2 border-neutral-600 px-2 py-1.5 cursor-pointer uppercase focus:border-modeGrind"
          >
            {MODES.map(m => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.multiplier}x)
              </option>
            ))}
          </select>

          {/* Sound Toggle (OFF by default) */}
          <button
            onClick={handleSoundToggle}
            className={`p-2 border-2 transition-colors ${
              soundEnabled
                ? 'bg-yellow-400 text-ink border-yellow-400'
                : 'bg-neutral-900 text-neutral-400 border-neutral-700 hover:text-paper'
            }`}
            aria-label={soundEnabled ? 'Sound effects enabled. Click to mute.' : 'Sound effects muted. Click to enable sound.'}
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound (Procedural Web Audio)'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Contrast Toggle */}
          <button
            onClick={() => setA11ySetting('highContrast', !highContrast)}
            className={`hidden sm:inline-flex p-2 border-2 transition-colors ${
              highContrast
                ? 'bg-white text-ink border-white'
                : 'bg-neutral-900 text-neutral-400 border-neutral-700 hover:text-paper'
            }`}
            aria-label="Toggle high contrast mode"
            title="Toggle High Contrast"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
