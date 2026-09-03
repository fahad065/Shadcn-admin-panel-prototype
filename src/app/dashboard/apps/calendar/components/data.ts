import { getDaysInMonth, setDate, startOfMonth } from "date-fns";

import type { CalendarEvent, EventColor } from "./types";

export const eventColorStyles: Record<EventColor, string> = {
  blue: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  emerald: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  violet: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  amber: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  rose: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
  sky: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
};

const eventColorOrder: EventColor[] = ["blue", "emerald", "violet", "amber", "rose", "sky"];

type EventSeed = {
  day: number;
  title: string;
  color: EventColor;
};

// Day-of-month offsets are clamped to the length of whichever month is
// rendered, so the same seed list produces a full, evenly spread set of
// sample events for any month the calendar shows.
const eventSeeds: EventSeed[] = [
  { day: 1, title: "Quarterly planning kickoff", color: "blue" },
  { day: 2, title: "Design review with Priya", color: "violet" },
  { day: 3, title: "Standup notes cleanup", color: "sky" },
  { day: 4, title: "1:1 with Marcus", color: "emerald" },
  { day: 5, title: "Product sync", color: "blue" },
  { day: 5, title: "Send investor update", color: "amber" },
  { day: 7, title: "Client onboarding call", color: "rose" },
  { day: 9, title: "Sprint retro", color: "violet" },
  { day: 11, title: "Budget review", color: "amber" },
  { day: 12, title: "Team lunch", color: "emerald" },
  { day: 14, title: "Marketing sync", color: "sky" },
  { day: 15, title: "Board meeting prep", color: "blue" },
  { day: 15, title: "Interview: Frontend Engineer", color: "rose" },
  { day: 15, title: "Payroll cutoff", color: "amber" },
  { day: 18, title: "Roadmap review", color: "violet" },
  { day: 20, title: "Customer feedback session", color: "sky" },
  { day: 22, title: "Security audit walkthrough", color: "emerald" },
  { day: 25, title: "All-hands meeting", color: "blue" },
  { day: 27, title: "Vendor contract renewal", color: "rose" },
  { day: 29, title: "Month-end reporting", color: "amber" },
];

export function generateEventsForMonth(monthDate: Date): CalendarEvent[] {
  const daysInMonth = getDaysInMonth(monthDate);
  const firstOfMonth = startOfMonth(monthDate);

  return eventSeeds.map((seed, index) => ({
    id: `event-${index}`,
    title: seed.title,
    color: seed.color,
    date: setDate(firstOfMonth, Math.min(seed.day, daysInMonth)),
  }));
}

const newEventTitlePool = [
  "Follow-up call",
  "Project check-in",
  "Coffee chat",
  "Strategy huddle",
  "Client demo",
  "Design critique",
  "Team sync",
  "Performance review",
];

export function createSyntheticEvent(date: Date, index: number): CalendarEvent {
  return {
    id: `event-new-${index}`,
    title: newEventTitlePool[index % newEventTitlePool.length],
    color: eventColorOrder[index % eventColorOrder.length],
    date,
  };
}
