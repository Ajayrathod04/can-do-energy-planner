import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouterProvider, useRouter } from './lib/router';
import { useAppStore, selectActiveMode } from './lib/store';
import { JudgeTour } from './components/JudgeTour';
import { NozzleCursor } from './components/NozzleCursor';
import { LandingPage } from './pages/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppPage = lazy(() => import('./pages/AppPage').then((m) => ({ default: m.AppPage })));
const SystemPage = lazy(() => import('./pages/SystemPage').then((m) => ({ default: m.SystemPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then((m) => ({ default: m.ProcessPage })));

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
        return (
          <Suspense fallback={<div className="p-8 font-mono text-center">Loading planner...</div>}>
            <AppPage />
          </Suspense>
        );
      case '/system':
        return (
          <Suspense fallback={<div className="p-8 font-mono text-center">Loading design system...</div>}>
            <SystemPage />
          </Suspense>
        );
      case '/process':
        return (
          <Suspense fallback={<div className="p-8 font-mono text-center">Loading case study...</div>}>
            <ProcessPage />
          </Suspense>
        );
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
