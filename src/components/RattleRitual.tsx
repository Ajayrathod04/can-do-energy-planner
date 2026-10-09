import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useAppStore, selectActiveMode } from '../lib/store';
import { sound } from '../lib/sound';
import { Sparkles, CheckCircle2, Smartphone } from 'lucide-react';

export const RattleRitual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const activeMode = useAppStore(selectActiveMode);
  const reducedMotion = useAppStore(s => s.reducedMotion);

  const [pressureCharge, setPressureCharge] = useState(0); // 0 to 100%
  const [isPrimed, setIsPrimed] = useState(false);
  const [shakeIntensity, setShakeIntensity] = useState(0); // For CSS shake displacement
  const [deviceMotionSupported, setDeviceMotionSupported] = useState(false);

  const lastPosRef = useRef({ x: 0, time: 0 });
  const isDraggingRef = useRef(false);

  // Trigger rattle effect
  const triggerRattle = useCallback((energy: number) => {
    sound.playRattle(Math.min(1.5, Math.max(0.4, energy)));
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(25);
      } catch {
        // Haptics optional
      }
    }
  }, []);

  // Update pressure charge
  const addCharge = useCallback((amount: number) => {
    setPressureCharge(prev => {
      const next = Math.min(100, prev + amount);
      if (next >= 100 && !isPrimed) {
        setIsPrimed(true);
        sound.playPop();
        if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
          try {
            navigator.vibrate([20, 50, 30]);
          } catch {
            // Haptics optional
          }
        }
      }
      return next;
    });
  }, [isPrimed]);

  // Pointer drag event handlers (Desktop & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    lastPosRef.current = { x: e.clientX, time: performance.now() };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastPosRef.current.time);
    const dx = e.clientX - lastPosRef.current.x;
    const velocity = Math.abs(dx) / dt; // Pixels per ms

    lastPosRef.current = { x: e.clientX, time: now };

    if (velocity > 0.4) {
      const energy = Math.min(2.0, velocity * 0.8);
      setShakeIntensity(dx > 0 ? 8 : -8);
      triggerRattle(energy);
      addCharge(velocity * 4);
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setShakeIntensity(0);
  };

  // Accessible Keyboard Prime Button
  const handleKeyboardPrime = () => {
    triggerRattle(1.2);
    addCharge(25);
  };

  // DeviceMotion on mobile
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
          triggerRattle(1.0);
          addCharge(8);
        }
      };

      window.addEventListener('devicemotion', handleMotion);
      return () => window.removeEventListener('devicemotion', handleMotion);
    }
  }, [addCharge, triggerRattle]);

  const requestMotionPermission = () => {
    if (typeof window !== 'undefined' && typeof (DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
      (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission()
        .then(response => {
          if (response === 'granted') {
            sound.playPop();
          }
        })
        .catch(() => {});
    }
  };

  return (
    <div className={`brutal-card p-4 space-y-3 bg-neutral-100 border-3 border-ink select-none ${className}`}>
      <div className="flex items-center justify-between border-b-2 border-ink pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-modeGrind" />
          <span className="font-display text-xs uppercase tracking-wide">
            Aerosol Ritual // Prime The Mixing Ball
          </span>
        </div>
        <span className="text-[10px] font-mono bg-neutral-200 px-1.5 py-0.5 border border-ink text-neutral-600">
          Ritual Only
        </span>
      </div>

      {/* Interactive Shake Stage */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="cursor-ew-resize bg-white border-2 border-ink p-4 flex flex-col items-center justify-center gap-2 relative overflow-hidden group touch-none"
        style={{
          transform: reducedMotion ? 'none' : `translateX(${shakeIntensity}px)`,
          transition: 'transform 0.05s ease-out',
        }}
        role="region"
        aria-label="Shake zone: Drag pointer side to side to shake spray can"
      >
        {/* Fill Indicator Ring / Bar */}
        <div className="w-full flex items-center justify-between text-xs font-mono font-bold">
          <span>MIXING BALL PRESSURE:</span>
          <span style={{ color: isPrimed ? '#16A34A' : activeMode.accentColor }}>
            {pressureCharge}% {isPrimed ? '(PRIMED!)' : ''}
          </span>
        </div>

        <div className="w-full h-3 bg-neutral-200 border-2 border-ink overflow-hidden">
          <div
            className="h-full transition-all duration-75"
            style={{
              width: `${pressureCharge}%`,
              backgroundColor: isPrimed ? '#16A34A' : activeMode.accentColor,
            }}
          />
        </div>

        <p className="text-xs text-neutral-700 font-body text-center pt-1">
          {isPrimed ? (
            <span className="text-green-700 font-bold flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Aerosol pigment fully agitated. Can ready to allocate.
            </span>
          ) : (
            <span>⇄ Drag side-to-side or shake phone to hear the steel ball rattle</span>
          )}
        </p>
      </div>

      {/* Accessible & Mobile Control Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <button
          type="button"
          onClick={handleKeyboardPrime}
          className="brutal-btn px-3 py-1.5 text-xs bg-paper text-ink border-2 border-ink font-bold hover:bg-neutral-200 active:translate-y-0.5"
          aria-label="Prime the can using keyboard or click"
        >
          Prime Can (Key / Click)
        </button>

        {deviceMotionSupported && (
          <button
            type="button"
            onClick={requestMotionPermission}
            className="text-[11px] font-mono text-neutral-600 hover:text-ink underline flex items-center gap-1"
            title="Enable iOS shake accelerometer permission"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Enable Mobile Motion</span>
          </button>
        )}

        {isPrimed && (
          <button
            type="button"
            onClick={() => {
              setPressureCharge(0);
              setIsPrimed(false);
            }}
            className="text-[11px] font-mono text-neutral-500 hover:text-neutral-800 underline"
          >
            Reset Ritual
          </button>
        )}
      </div>
    </div>
  );
};
