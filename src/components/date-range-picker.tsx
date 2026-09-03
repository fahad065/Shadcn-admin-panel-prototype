"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function DateRangePicker({
  defaultRange,
}: {
  defaultRange?: DateRange;
}) {
  const [range, setRange] = React.useState<DateRange | undefined>(
    defaultRange ?? {
      from: new Date(2026, 7, 6),
      to: new Date(2026, 8, 2),
    }
  );

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="sm" className="gap-2">
            <CalendarIcon className="size-4" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "dd MMM yyyy")} -{" "}
                  {format(range.to, "dd MMM yyyy")}
                </>
              ) : (
                format(range.from, "dd MMM yyyy")
              )
            ) : (
              "Pick a date range"
            )}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          defaultMonth={range?.from}
        />
      </PopoverContent>
    </Popover>
  );
}
