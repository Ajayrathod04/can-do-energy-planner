import { useState, useEffect } from 'react';
import { sound } from '../lib/sound';

export function useRattleSensor(
  onRattle: (energy: number) => void,
  onAddCharge: (amount: number) => void
) {
  const [deviceMotionSupported, setDeviceMotionSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('DeviceMotionEvent' in window) {
      setDeviceMotionSupported(true);

      let lastAcc = { x: 0, y: 0, z: 0 };
      const handleMotion = (e: DeviceMotionEvent) => {
        const acc = e.accelerationIncludingGravity;
        if (!acc) return;

        const delta = Math.abs((acc.x || 0) - lastAcc.x) + Math.abs((acc.y || 0) - lastAcc.y);
        lastAcc = { x: acc.x || 0, y: acc.y || 0, z: acc.z || 0 };

        if (delta > 12) {
          onRattle(1.0);
          onAddCharge(8);
        }
      };

      window.addEventListener('devicemotion', handleMotion);
      return () => window.removeEventListener('devicemotion', handleMotion);
    }
  }, [onAddCharge, onRattle]);

  const requestMotionPermission = () => {
    if (
      typeof window !== 'undefined' &&
      typeof (DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> })
        .requestPermission === 'function'
    ) {
      (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> })
        .requestPermission()
        .then((response) => {
          if (response === 'granted') {
            sound.playPop();
          }
        })
        .catch(() => {});
    }
  };

  return { deviceMotionSupported, requestMotionPermission };
}
