"use client";

import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CalendarToolbar({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  onToday,
}: {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 pb-4">
      <Button variant="outline" size="sm" onClick={onToday}>
        Today
      </Button>

      <div className="flex items-center justify-center gap-1">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={onPrevMonth}
          aria-label="Previous month"
        >
          <ChevronLeft />
        </Button>
        <h2 className="min-w-36 text-center text-sm font-semibold sm:text-base">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={onNextMonth}
          aria-label="Next month"
        >
          <ChevronRight />
        </Button>
      </div>

      <div aria-hidden className="w-[72px]" />
    </div>
  );
}
