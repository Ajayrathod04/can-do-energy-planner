import React from 'react';
import { IconProps } from './iconTypes';

export const EyeIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#38BDF8', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="20" cy="20" rx="14" ry="9" fill={blobColor} />
    <circle cx="20" cy="20" r="4" fill="#111111" />
  </svg>
);

export const HandIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#FFD93D', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="M13 22V12a3 3 0 0 1 6 0v7M19 14a3 3 0 0 1 6 0v6M25 16a3 3 0 0 1 6 0v7c0 7-6 10-12 10s-8-4-8-9v-4a3 3 0 0 1 6 0v2"
      fill={blobColor}
    />
  </svg>
);

export const TimerIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#FF6B2C', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="20" cy="22" r="13" fill={blobColor} />
    <line x1="20" y1="5" x2="20" y2="9" />
    <line x1="16" y1="5" x2="24" y2="5" />
    <polyline points="20 16 20 22 25 22" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({
  size = 32,
  blobColor = '#00E599',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="20" cy="20" r="14" fill={blobColor} stroke="none" />
    <path d="M20 10v16M13 19l7 7 7-7" />
    <line x1="10" y1="31" x2="30" y2="31" />
  </svg>
);

export const SoundIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#FF3D8B', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 15h5l7-6v22l-7-6h-5z" fill={blobColor} />
    <path d="M26 14a8 8 0 0 1 0 12M30 10a14 14 0 0 1 0 20" />
  </svg>
);

export const VibrationIcon: React.FC<IconProps> = ({
  size = 32,
  blobColor = '#FFD93D',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="14" y="9" width="12" height="22" rx="2" fill={blobColor} />
    <path d="M8 15a8 8 0 0 0 0 10M32 15a8 8 0 0 1 0 10" />
    <path d="M5 12a14 14 0 0 0 0 16M35 12a14 14 0 0 1 0 16" />
  </svg>
);

export const HelpIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#C084FC', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="20" cy="20" r="14" fill={blobColor} />
    <path d="M16 16a4 4 0 0 1 7.5-1.5c.8 1.5-.5 2.5-1.5 3.5-.8.8-1 1.5-1 2.5" />
    <circle cx="20" cy="27" r="1.5" fill="#111111" stroke="none" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#00E599', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="#111111"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="20" cy="20" r="14" fill={blobColor} />
    <path d="M12 20l6 6 11-11" strokeWidth="3.5" />
  </svg>
);
