import React, { useEffect } from 'react';
import { HashRouterProvider, useRouter } from './lib/router';
import { useAppStore, selectActiveMode } from './lib/store';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TourGuide } from './components/TourGuide';
import { LandingPage } from './scenes/LandingPage';
import { AppView } from './app/AppView';
import { SystemShowcase } from './scenes/SystemShowcase';

const AppContent: React.FC = () => {
  const { route } = useRouter();
  const activeMode = useAppStore(selectActiveMode);
  const highContrast = useAppStore(s => s.highContrast);
  const dyslexiaFont = useAppStore(s => s.dyslexiaFont);

  // Synchronize CSS custom property for active mode color
  useEffect(() => {
    document.documentElement.style.setProperty('--active-mode-color', activeMode.accentColor);
  }, [activeMode.accentColor]);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        highContrast ? 'contrast-125 saturate-150' : ''
      } ${dyslexiaFont ? 'font-dyslexic' : ''}`}
    >
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        {route === '/' && <LandingPage />}
        {route === '/app' && <AppView />}
        {route === '/system' && <SystemShowcase />}
      </main>

      <TourGuide />
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <HashRouterProvider>
      <AppContent />
    </HashRouterProvider>
  );
};

export default App;
