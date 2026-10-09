export function registerPWA() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then((reg) => {
          reg.onupdatefound = () => {
            const installing = reg.installing;
            if (installing) {
              installing.onstatechange = () => {
                if (installing.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('CAN-DO update available. Refresh for latest features.');
                }
              };
            }
          };
        })
        .catch((err) => {
          console.warn('PWA service worker registration failed:', err);
        });
    });
  }
}
