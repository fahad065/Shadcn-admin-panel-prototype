import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Event = {
  date: Date;
  label: string;
  title: string;
};

const events: Event[] = [
  { date: new Date(2026, 8, 9), label: "Sep 9", title: "Client visit — The Somerset House" },
  { date: new Date(2026, 8, 15), label: "Sep 15", title: "Client visit — Cobalt Bay Villa" },
];

export function ScheduleCalendarCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar &amp; Schedule</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Calendar
          mode="multiple"
          selected={events.map((event) => event.date)}
          defaultMonth={new Date(2026, 8, 1)}
          className="mx-auto"
        />

        <div className="flex w-full flex-col gap-2">
          {events.map((event) => (
            <div key={event.title} className="flex items-center gap-3 text-sm">
              <span className="w-14 shrink-0 font-medium text-foreground">{event.label}</span>
              <span className="text-muted-foreground">{event.title}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
