"use client";

import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday as isDateToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import { DayCell } from "./day-cell";
import type { CalendarEvent } from "./types";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarGrid({
  currentMonth,
  eventsByDate,
}: {
  currentMonth: Date;
  eventsByDate: Map<string, CalendarEvent[]>;
}) {
  const gridStart = startOfWeek(startOfMonth(currentMonth));
  const gridEnd = endOfWeek(endOfMonth(currentMonth));
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  return (
    <div>
      <div className="grid grid-cols-7 border-t border-border">
        {WEEKDAY_LABELS.map((label) => (
          <div
            key={label}
            className="border-r border-b border-border p-2 text-center text-xs font-medium text-muted-foreground last:border-r-0"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days.map((day) => {
          const key = format(day, "yyyy-MM-dd");
          return (
            <DayCell
              key={key}
              date={day}
              events={eventsByDate.get(key) ?? []}
              isCurrentMonth={isSameMonth(day, currentMonth)}
              isToday={isDateToday(day)}
            />
          );
        })}
      </div>
    </div>
  );
}
