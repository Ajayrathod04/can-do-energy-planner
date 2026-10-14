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
  SectionHeading,
} from '@/components/ui';

interface SystemComponentsSectionProps {
  onTriggerToast: () => void;
}

export const SystemComponentsSection: React.FC<SystemComponentsSectionProps> = ({
  onTriggerToast,
}) => {
  const [sliderVal, setSliderVal] = useState(6);
  const [toggleVal, setToggleVal] = useState(true);

  return (
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
              onClick={onTriggerToast}
              className="px-3 py-1 font-bold text-xs bg-[#FFD93D] border-2 border-[#111111] shadow-[2px_2px_0_#111111]"
            >
              Trigger Toast
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};
