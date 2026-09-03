import { BedDouble, CreditCard, DoorClosed, DoorOpen, Sparkles, Wrench } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Activity = {
  icon: typeof DoorOpen;
  text: string;
  time: string;
  color: string;
};

const activities: Activity[] = [
  { icon: DoorOpen, text: "Room 204 checked in", time: "3 min ago", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500" },
  { icon: Sparkles, text: "Housekeeping completed Room 310", time: "18 min ago", color: "bg-violet-500/10 text-violet-600 dark:text-violet-400" },
  { icon: CreditCard, text: "Payment received for Booking #4821", time: "32 min ago", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { icon: DoorClosed, text: "Room 118 checked out", time: "1 hr ago", color: "bg-secondary text-secondary-foreground" },
  { icon: Wrench, text: "Maintenance ticket opened for Room 412", time: "2 hr ago", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  { icon: BedDouble, text: "New reservation for Suite 502", time: "3 hr ago", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
];

export function RecentActivitiesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full",
                activity.color
              )}
            >
              <activity.icon className="size-3.5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.text}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
