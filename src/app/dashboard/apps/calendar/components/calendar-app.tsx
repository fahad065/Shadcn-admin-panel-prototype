"use client";

import { useMemo, useState } from "react";
import { addMonths, format, startOfMonth, subMonths } from "date-fns";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { CalendarGrid } from "./calendar-grid";
import { CalendarToolbar } from "./calendar-toolbar";
import { createSyntheticEvent, generateEventsForMonth } from "./data";
import type { CalendarEvent } from "./types";

export function CalendarApp() {
  const [currentMonth, setCurrentMonth] = useState(() => startOfMonth(new Date()));
  const [events, setEvents] = useState<CalendarEvent[]>(() =>
    generateEventsForMonth(new Date())
  );

  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const key = format(event.date, "yyyy-MM-dd");
      const existing = map.get(key);
      if (existing) {
        existing.push(event);
      } else {
        map.set(key, [event]);
      }
    }
    return map;
  }, [events]);

  function handlePrevMonth() {
    setCurrentMonth((month) => subMonths(month, 1));
  }

  function handleNextMonth() {
    setCurrentMonth((month) => addMonths(month, 1));
  }

  function handleToday() {
    setCurrentMonth(startOfMonth(new Date()));
  }

  function handleNewEvent() {
    const today = new Date();
    setEvents((current) => [...current, createSyntheticEvent(today, current.length)]);
    setCurrentMonth(startOfMonth(today));
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Calendar"
        description="Keep track of meetings and events across the month."
        actions={
          <Button size="sm" onClick={handleNewEvent}>
            <Plus />
            New Event
          </Button>
        }
      />

      <Card>
        <CalendarToolbar
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onToday={handleToday}
        />
        <CalendarGrid currentMonth={currentMonth} eventsByDate={eventsByDate} />
      </Card>
    </div>
  );
}
