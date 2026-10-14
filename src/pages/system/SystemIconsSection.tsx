import React from 'react';
import { SectionHeading } from '@/components/ui';
import {
  SunMoonIcon,
  PaintDropIcon,
  SprayCanIcon,
  CalendarIcon,
  PillowRestIcon,
  StarIcon,
  ShieldIcon,
  KeyboardIcon,
  EyeIcon,
  HandIcon,
  TimerIcon,
  DownloadIcon,
  SoundIcon,
  VibrationIcon,
  HelpIcon,
  CheckIcon,
} from '@/components/icons';

const ICON_LIST = [
  { name: 'SunMoon', Icon: SunMoonIcon, color: '#FFD93D' },
  { name: 'PaintDrop', Icon: PaintDropIcon, color: '#FF3D8B' },
  { name: 'SprayCan', Icon: SprayCanIcon, color: '#FF6B2C' },
  { name: 'Calendar', Icon: CalendarIcon, color: '#38BDF8' },
  { name: 'PillowRest', Icon: PillowRestIcon, color: '#C084FC' },
  { name: 'Star', Icon: StarIcon, color: '#FFD93D' },
  { name: 'Shield', Icon: ShieldIcon, color: '#00E599' },
  { name: 'Keyboard', Icon: KeyboardIcon, color: '#E5E5E5' },
  { name: 'Eye', Icon: EyeIcon, color: '#38BDF8' },
  { name: 'Hand', Icon: HandIcon, color: '#FFD93D' },
  { name: 'Timer', Icon: TimerIcon, color: '#FF6B2C' },
  { name: 'Download', Icon: DownloadIcon, color: '#00E599' },
  { name: 'Sound', Icon: SoundIcon, color: '#FF3D8B' },
  { name: 'Vibration', Icon: VibrationIcon, color: '#FFD93D' },
  { name: 'Help', Icon: HelpIcon, color: '#C084FC' },
  { name: 'Check', Icon: CheckIcon, color: '#00E599' },
];

export const SystemIconsSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="CUSTOM VECTOR ASSETS"
        title="2. 16 Chunky Inline SVG Icons"
        description="Original 3px stroke vector icons with rounded caps and colored blob backdrops."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {ICON_LIST.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 p-3 bg-white border-[2px] border-[#111111] shadow-[2px_2px_0_#111111] text-center"
          >
            <Icon size={36} blobColor={color} />
            <span className="font-mono text-[10px] font-bold text-[#444444]">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
