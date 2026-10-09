import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export type AppRoute = '/' | '/app' | '/system';

interface RouterContextType {
  route: AppRoute;
  params: URLSearchParams;
  navigate: (to: string) => void;
  isTourActive: boolean;
}

const RouterContext = createContext<RouterContextType>({
  route: '/',
  params: new URLSearchParams(),
  navigate: () => {},
  isTourActive: false,
});

export const HashRouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    if (typeof window === 'undefined') return '#/';
    return window.location.hash || '#/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const { route, params, isTourActive } = useMemo(() => {
    const hash = currentHash.replace(/^#/, '') || '/';
    const [pathPart, queryPart] = hash.split('?');
    const searchParams = new URLSearchParams(queryPart || '');

    let normalizedRoute: AppRoute = '/';
    if (pathPart === '/app' || pathPart === 'app') {
      normalizedRoute = '/app';
    } else if (pathPart === '/system' || pathPart === 'system') {
      normalizedRoute = '/system';
    }

    const tour = searchParams.get('tour') === '1';

    return {
      route: normalizedRoute,
      params: searchParams,
      isTourActive: tour,
    };
  }, [currentHash]);

  const navigate = (to: string) => {
    let cleanPath = to.startsWith('#') ? to : `#${to.startsWith('/') ? to : `/${to}`}`;
    window.location.hash = cleanPath;
  };

  return (
    <RouterContext.Provider value={{ route, params, navigate, isTourActive }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
