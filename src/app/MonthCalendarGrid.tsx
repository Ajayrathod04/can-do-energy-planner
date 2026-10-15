import React from 'react';
import { Sparkles } from 'lucide-react';
import { WallTag } from '../lib/store';

interface MonthCalendarGridProps {
  paddingTiles: number[];
  dayTiles: number[];
  wallTags: WallTag[];
  currentDay: number;
}

export const MonthCalendarGrid: React.FC<MonthCalendarGridProps> = ({
  paddingTiles,
  dayTiles,
  wallTags,
  currentDay,
}) => {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-7 gap-1 text-center font-mono font-bold text-xs uppercase text-neutral-600 pb-1">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {paddingTiles.map((p) => (
          <div
            key={`pad-${p}`}
            className="aspect-square bg-neutral-200/50 border border-dashed border-neutral-300"
          />
        ))}

        {dayTiles.map((day) => {
          const isToday = day === currentDay;
          const hasTagsToday = isToday && wallTags.length > 0;

          return (
            <div
              key={`day-${day}`}
              className={`min-h-[55px] sm:min-h-[75px] p-1.5 border-2 flex flex-col justify-between transition-all ${
                isToday
                  ? 'border-ink bg-amber-50 shadow-[2px_2px_0px_#0A0A0A] font-bold'
                  : 'border-neutral-300 bg-white hover:border-neutral-500'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono ${isToday ? 'text-[#C2410C] font-bold' : 'text-neutral-500'}`}
                >
                  {day}
                </span>
                {isToday && (
                  <span className="text-[9px] bg-ink text-paper px-1 font-mono uppercase">
                    Today
                  </span>
                )}
              </div>

              {hasTagsToday ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-green-700 font-bold">
                    <Sparkles className="w-3 h-3 text-modeGrind" />
                    <span>
                      {wallTags.length} {wallTags.length === 1 ? 'tag' : 'tags'}
                    </span>
                  </div>
                </div>
              ) : (
                <span className="text-[10px] text-neutral-400 font-mono">—</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
