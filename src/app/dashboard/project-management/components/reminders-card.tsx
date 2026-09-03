import { ArrowRight, CircleCheck, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Priority = "Low" | "Medium" | "High";

type Reminder = {
  priority: Priority;
  time: string;
  note: string;
  tag: string;
  done?: boolean;
};

const reminders: Reminder[] = [
  {
    priority: "Low",
    time: "Today, 9:15 AM",
    note: "Draft the onboarding checklist for new hires.",
    tag: "Onboarding",
  },
  {
    priority: "Medium",
    time: "Today, 1:30 PM",
    note: "Review wireframes with the product team.",
    tag: "Design Review",
    done: true,
  },
  {
    priority: "High",
    time: "Tomorrow, 11:00 AM",
    note: "Escalate the vendor contract renewal.",
    tag: "Procurement",
  },
];

const dotStyles: Record<Priority, string> = {
  Low: "bg-muted-foreground/50",
  Medium: "bg-amber-500",
  High: "bg-destructive",
};

export function RemindersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
        <CardAction>
          <Button size="sm" className="gap-1.5">
            <Plus className="size-3.5" />
            Set Reminder
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        {reminders.map((reminder) => (
          <div key={reminder.note} className="rounded-lg border p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-sm font-medium">
                <span className={cn("size-1.5 rounded-full", dotStyles[reminder.priority])} />
                {reminder.priority}
              </span>
              <CircleCheck
                className={cn(
                  "size-4",
                  reminder.done ? "text-emerald-500" : "text-muted-foreground/40"
                )}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{reminder.time}</p>
            <p className="mt-1 text-sm">{reminder.note}</p>
            <Badge variant="outline" className="mt-2">
              {reminder.tag}
            </Badge>
          </div>
        ))}
        <button
          type="button"
          className="flex w-full items-center justify-end gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          Show 10 more reminders
          <ArrowRight className="size-3.5" />
        </button>
      </CardContent>
    </Card>
  );
}
