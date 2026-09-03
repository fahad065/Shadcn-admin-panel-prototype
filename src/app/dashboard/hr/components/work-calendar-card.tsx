"use client";

import * as React from "react";
import { MapPin, Video, type LucideIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AgendaItem = {
  title: string;
  time: string;
  location: string;
  icon: LucideIcon;
};

const today = new Date(2026, 8, 3);

const agenda: AgendaItem[] = [
  { title: "Employee Safety Workshop", time: "1:30 PM", location: "Online", icon: Video },
  { title: "Quarterly Performance Review", time: "3:00 PM", location: "Conference Room B", icon: MapPin },
  { title: "New Hire Orientation", time: "4:30 PM", location: "Online", icon: Video },
];

export function WorkCalendarCard() {
  const [date, setDate] = React.useState<Date | undefined>(today);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Calendar</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={today}
            className="p-0"
          />
        </div>

        <div className="space-y-3 border-t pt-4">
          <p className="text-xs font-medium text-muted-foreground">
            Today&apos;s schedule
          </p>
          {agenda.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <item.icon className="size-4 text-muted-foreground" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  {item.location} &middot; {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
