"use client";

import { format } from "date-fns";

import { cn } from "@/lib/utils";

import { eventColorStyles } from "./data";
import type { CalendarEvent } from "./types";

const MAX_CHIPS = 3;

export function DayCell({
  date,
  events,
  isCurrentMonth,
  isToday,
}: {
  date: Date;
  events: CalendarEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
}) {
  const hasOverflow = events.length > MAX_CHIPS;
  const visibleEvents = hasOverflow ? events.slice(0, MAX_CHIPS - 1) : events;
  const overflowCount = events.length - visibleEvents.length;

  return (
    <div
      className={cn(
        "flex min-h-[7rem] flex-col gap-1 border-r border-b border-border p-1.5 last:border-r-0 sm:min-h-[8rem] sm:p-2",
        !isCurrentMonth && "bg-muted/30"
      )}
    >
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
          isToday
            ? "bg-primary text-primary-foreground"
            : isCurrentMonth
              ? "text-foreground"
              : "text-muted-foreground/50"
        )}
      >
        {format(date, "d")}
      </span>

      <div className="flex flex-col gap-1 overflow-hidden">
        {visibleEvents.map((event) => (
          <div
            key={event.id}
            title={event.title}
            className={cn(
              "truncate rounded-sm px-1.5 py-0.5 text-[11px] leading-normal font-medium",
              eventColorStyles[event.color]
            )}
          >
            {event.title}
          </div>
        ))}
        {overflowCount > 0 ? (
          <span className="px-1.5 text-[11px] text-muted-foreground">
            +{overflowCount} more
          </span>
        ) : null}
      </div>
    </div>
  );
}
