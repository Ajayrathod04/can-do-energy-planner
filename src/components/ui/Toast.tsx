import React from 'react';
import clsx from 'clsx';

export interface ToastProps {
  message: string;
  isVisible: boolean;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onAction,
  actionLabel = 'Undo',
  className,
}) => {
  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'fixed bottom-6 right-6 z-50 flex items-center gap-4 p-4 bg-white text-[#111111]',
        'border-[3px] border-[#111111] shadow-[6px_6px_0_#111111]',
        'animate-in slide-in-from-bottom duration-200',
        className
      )}
    >
      <span className="font-bold text-sm">{message}</span>
      {onAction && (
        <button
          onClick={onAction}
          className="font-display text-xs px-3 py-1 bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111] hover:bg-[#FF3D8B]"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
