import React from 'react';
import { IconProps } from './iconTypes';

export const SunMoonIcon: React.FC<IconProps> = ({
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
    <circle cx="20" cy="20" r="14" fill={blobColor} stroke="none" />
    <circle cx="20" cy="20" r="9" />
    <path d="M20 4v4M20 32v4M4 20h4M32 20h4M8.7 8.7l2.8 2.8M28.5 28.5l2.8 2.8M8.7 31.3l2.8-2.8M28.5 11.5l2.8-2.8" />
  </svg>
);

export const PaintDropIcon: React.FC<IconProps> = ({
  size = 32,
  blobColor = '#FF3D8B',
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
    <path d="M20 6c0 0-11 12-11 19a11 11 0 0 0 22 0c0-7-11-19-11-19z" fill={blobColor} />
    <path d="M20 6c0 0-11 12-11 19a11 11 0 0 0 22 0c0-7-11-19-11-19z" />
    <circle cx="16" cy="26" r="2" fill="#FFFFFF" stroke="none" />
  </svg>
);

export const SprayCanIcon: React.FC<IconProps> = ({
  size = 32,
  blobColor = '#FF6B2C',
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
    <rect x="11" y="14" width="18" height="22" rx="3" fill={blobColor} />
    <rect x="16" y="8" width="8" height="6" fill="#FFFFFF" />
    <circle cx="20" cy="5" r="2" fill="#111111" />
    <line x1="11" y1="23" x2="29" y2="23" />
    <line x1="16" y1="28" x2="24" y2="28" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({
  size = 32,
  blobColor = '#38BDF8',
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
    <rect x="7" y="10" width="26" height="24" rx="2" fill={blobColor} />
    <line x1="7" y1="18" x2="33" y2="18" />
    <line x1="13" y1="6" x2="13" y2="12" />
    <line x1="27" y1="6" x2="27" y2="12" />
    <circle cx="14" cy="24" r="1.5" fill="#111111" />
    <circle cx="20" cy="24" r="1.5" fill="#111111" />
    <circle cx="26" cy="24" r="1.5" fill="#111111" />
  </svg>
);

export const PillowRestIcon: React.FC<IconProps> = ({
  size = 32,
  blobColor = '#C084FC',
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
    <rect x="8" y="12" width="24" height="18" rx="6" fill={blobColor} />
    <path d="M8 12c4 4 12 4 16 0" />
    <path d="M8 30c4-4 12-4 16 0" />
    <path d="M14 18h4l-4 4h4" strokeWidth="2.5" />
    <path d="M22 17h3l-3 3h3" strokeWidth="2" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#FFD93D', ...props }) => (
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
    <path d="M20 4l4.5 10 10.5 1.5-8 7.5 2 11-9-5-9 5 2-11-8-7.5 10.5-1.5z" fill={blobColor} />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ size = 32, blobColor = '#00E599', ...props }) => (
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
    <path d="M20 5s12 3 12 12c0 10-12 18-12 18S8 27 8 17c0-9 12-12 12-12z" fill={blobColor} />
    <path d="M15 19l4 4 7-7" />
  </svg>
);

export const KeyboardIcon: React.FC<IconProps> = ({
  size = 32,
  blobColor = '#E5E5E5',
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
    <rect x="6" y="11" width="28" height="20" rx="3" fill={blobColor} />
    <line x1="11" y1="17" x2="13" y2="17" strokeWidth="3" />
    <line x1="19" y1="17" x2="21" y2="17" strokeWidth="3" />
    <line x1="27" y1="17" x2="29" y2="17" strokeWidth="3" />
    <line x1="14" y1="24" x2="26" y2="24" strokeWidth="3" />
  </svg>
);
