import React, { useEffect } from 'react';
import { HashRouterProvider, useRouter } from './lib/router';
import { useAppStore, selectActiveMode } from './lib/store';
import { JudgeTour } from './components/JudgeTour';
import { NozzleCursor } from './components/NozzleCursor';
import { LandingPage } from './pages/LandingPage';
import { AppPage } from './pages/AppPage';
import { SystemPage } from './pages/SystemPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { route } = useRouter();
  const activeMode = useAppStore(selectActiveMode);
  const highContrast = useAppStore((s) => s.highContrast);
  const dyslexiaFont = useAppStore((s) => s.dyslexiaFont);

  // Synchronize CSS custom property for active mode color
  useEffect(() => {
    document.documentElement.style.setProperty('--active-mode-color', activeMode.accentColor);
  }, [activeMode.accentColor]);

  const renderRoute = () => {
    switch (route) {
      case '/':
        return <LandingPage />;
      case '/app':
        return <AppPage />;
      case '/system':
        return <SystemPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        highContrast ? 'contrast-125 saturate-150' : ''
      } ${dyslexiaFont ? 'font-dyslexic' : ''}`}
    >
      <NozzleCursor />

      <main id="main-content" className="flex-1 flex flex-col">
        {renderRoute()}
      </main>

      <JudgeTour />
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
