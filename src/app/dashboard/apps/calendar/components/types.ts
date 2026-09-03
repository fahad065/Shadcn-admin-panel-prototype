export type EventColor = "blue" | "emerald" | "violet" | "amber" | "rose" | "sky";

export type CalendarEvent = {
  id: string;
  title: string;
  date: Date;
  color: EventColor;
};
