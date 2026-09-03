import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Event = {
  date: Date;
  label: string;
  title: string;
};

const events: Event[] = [
  { date: new Date(2026, 8, 4), label: "Sep 4", title: "Cardiac bypass surgery — Dr. Amara Kofi" },
  { date: new Date(2026, 8, 9), label: "Sep 9", title: "Knee replacement — Dr. Liam O'Connor" },
  { date: new Date(2026, 8, 14), label: "Sep 14", title: "Pediatric consultation — Dr. Sofia Marín" },
  { date: new Date(2026, 8, 21), label: "Sep 21", title: "MRI-guided biopsy — Dr. Ravi Malhotra" },
];

export function HospitalCalendarCard() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Calendar
          mode="multiple"
          selected={events.map((event) => event.date)}
          defaultMonth={new Date(2026, 8, 1)}
          className="mx-auto"
        />

        <div className="flex w-full flex-col gap-3 sm:pt-2">
          <p className="text-xs font-medium text-muted-foreground">Upcoming events</p>
          {events.map((event) => (
            <div key={event.title} className="flex items-start gap-3 text-sm">
              <span className="w-14 shrink-0 font-medium text-foreground">{event.label}</span>
              <span className="text-muted-foreground">{event.title}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
