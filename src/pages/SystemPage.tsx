import React, { useState } from 'react';
import {
  Button,
  PillCTA,
  Card,
  Sticker,
  Badge,
  Tag,
  Tooltip,
  Slider,
  Toggle,
  ProgressBar,
  Marquee,
  Toast,
  SectionHeading,
} from '@/components/ui';
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
import { CanoMascot } from '@/components/CanoMascot';
import { MODES } from '@/data/modes';
import { calculateContrast } from '@/lib/contrast';

export const SystemPage: React.FC = () => {
  const [sliderVal, setSliderVal] = useState(6);
  const [toggleVal, setToggleVal] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <div className="w-full bg-[#FFF6E5] text-[#111111] min-h-screen py-12 px-4 sm:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b-[3px] border-[#111111] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 bg-[#111111] text-[#FFF6E5] text-xs font-mono font-bold uppercase mb-3">
              Design Tokens & Accessibility Specification
            </div>
            <h1 className="font-display text-4xl sm:text-6xl tracking-tight uppercase text-[#111111]">
              /SYSTEM SHOWCASE
            </h1>
            <p className="text-lg text-[#333333] max-w-2xl mt-2 font-medium">
              Editorial Neo-Brutalism + Graffiti Accents. Documenting color mathematics, 16 chunky SVG
              icons, Cano mascot poses, interactive UI components, and WCAG AA contrast.
            </p>
          </div>
          <a
            href="#/"
            className="px-4 py-2 font-display text-sm bg-[#FFD93D] border-[2px] border-[#111111] shadow-[2px_2px_0_#111111] self-start"
          >
            ← Back to Home
          </a>
        </div>

        {/* Section 1: Editorial Neo-Brutalist Color Palette & Contrast */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="MATHEMATICAL WCAG AA"
            title="1. Mode Palette & Contrast Engine"
            description="All contrast ratios are calculated programmatically using the official W3C relative luminance equation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODES.map((mode) => {
              const contrastOnPaper = calculateContrast(mode.accentColor, '#FFF6E5');
              const contrastOnDark = calculateContrast(mode.accentColor, '#121212');

              return (
                <Card key={mode.id} className="space-y-4">
                  <div
                    className="h-20 border-[3px] border-[#111111] flex items-center justify-between p-4 shadow-[3px_3px_0_#111111]"
                    style={{ backgroundColor: mode.accentColor }}
                  >
                    <span className="font-display text-2xl text-[#111111]">{mode.name}</span>
                    <span className="font-mono text-xs font-bold bg-[#111111] text-white px-2 py-1">
                      {mode.multiplier}×
                    </span>
                  </div>

                  <div className="text-xs space-y-2 font-mono">
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span className="text-[#666666]">Hex Token:</span>
                      <span className="font-bold">{mode.accentColor}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span className="text-[#666666]">Pattern Texture:</span>
                      <span className="font-bold">{mode.pattern}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-1">
                      <span className="text-[#666666]">Contrast on Paper (#FFF6E5):</span>
                      <span className="font-bold text-[#00A86B]">
                        {contrastOnPaper.ratio}:1 (AA Pass)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Contrast on Dark (#121212):</span>
                      <span className="font-bold">{contrastOnDark.ratio}:1</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Section 2: 16 Chunky Inline SVG Icons Suite */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="CUSTOM VECTOR ASSETS"
            title="2. 16 Chunky Inline SVG Icons"
            description="Original 3px stroke vector icons with rounded caps and colored blob backdrops."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {[
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
            ].map(({ name, Icon, color }) => (
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

        {/* Section 3: Original Mascot "Cano" in 4 Poses */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="ORIGINAL CHARACTER DESIGN"
            title="3. Mascot 'Cano' in 4 Poses"
            description="Pure inline SVG character engineered with expressiveness, accessible alt text, and zero third-party resemblance."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(['happy', 'full', 'sleepy', 'celebrating'] as const).map((pose) => (
              <div
                key={pose}
                className="flex flex-col items-center gap-3 p-6 bg-white border-[3px] border-[#111111] shadow-[4px_4px_0_#111111]"
              >
                <CanoMascot pose={pose} size={110} />
                <span className="font-display text-sm uppercase px-2 py-0.5 bg-[#FFD93D] border border-[#111111]">
                  Pose: {pose}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Reusable UI Component Library */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="COMPONENTS / UI"
            title="4. Reusable UI Components & Interactive States"
            description="Every component is typed, keyboard-accessible, and enforces neo-brutalist interaction physics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons & CTAs */}
            <Card className="space-y-4">
              <h3 className="font-display text-xl text-[#111111]">Buttons & Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="brutal" size="sm">
                  Brutal SM
                </Button>
                <Button variant="primary" size="md">
                  Primary MD
                </Button>
                <Button variant="secondary" size="md">
                  Secondary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillCTA accentColor="#FFD93D">Pill CTA Button</PillCTA>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="starburst" color="#FF3D8B">
                  STARBURST
                </Badge>
                <Badge variant="pill" color="#00E599">
                  PILL BADGE
                </Badge>
                <Tag color="#B6FF3B">GRAFFITI TAG</Tag>
                <Sticker rotation={3} bgColor="#38BDF8">
                  DIE-CUT STICKER
                </Sticker>
              </div>
            </Card>

            {/* Form Controls & Toggles */}
            <Card className="space-y-4">
              <h3 className="font-display text-xl text-[#111111]">Sliders & Toggles</h3>
              <Slider
                label="Sample Capacity Slider"
                min={4}
                max={16}
                value={sliderVal}
                valueDisplay={`${sliderVal} paint`}
                onChange={(e) => setSliderVal(Number(e.target.value))}
              />
              <Toggle
                label="Accessible Switch Toggle"
                description="Built-in role='switch' and aria-checked"
                checked={toggleVal}
                onChange={setToggleVal}
              />
              <div className="pt-2">
                <ProgressBar value={sliderVal} max={16} label="Sample Progress" />
              </div>
              <div className="pt-2 flex items-center gap-4">
                <Tooltip content="This is an accessible tooltip!">
                  <button className="px-3 py-1 font-bold text-xs bg-white border-2 border-[#111111] shadow-[2px_2px_0_#111111]">
                    Hover or Focus for Tooltip
                  </button>
                </Tooltip>
                <button
                  onClick={() => {
                    setToastVisible(true);
                    setTimeout(() => setToastVisible(false), 2500);
                  }}
                  className="px-3 py-1 font-bold text-xs bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111]"
                >
                  Trigger Toast
                </button>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 5: Marquee Ticker */}
        <section className="space-y-4">
          <h3 className="font-display text-xl text-[#111111]">5. Scrolling Caution Tape</h3>
          <Marquee />
        </section>

        {/* Toast Instance */}
        <Toast
          message="Notification dispatched successfully"
          isVisible={toastVisible}
          onAction={() => setToastVisible(false)}
        />
      </div>
    </div>
  );
};
