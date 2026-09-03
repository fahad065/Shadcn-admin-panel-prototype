import { CalendarCheck, DoorClosed, DoorOpen } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type StatusRow = {
  label: string;
  count: number;
  percent: number;
  icon: typeof CalendarCheck;
};

const statuses: StatusRow[] = [
  { label: "Confirmed", count: 186, percent: 62, icon: CalendarCheck },
  { label: "Checked In", count: 74, percent: 25, icon: DoorOpen },
  { label: "Checked Out", count: 39, percent: 13, icon: DoorClosed },
];

export function ReservationStatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reservation Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {statuses.map((status) => (
          <div key={status.label} className="space-y-1.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <status.icon className="size-4 text-muted-foreground" />
                <span className="text-sm font-medium">{status.label}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {status.count}
              </span>
            </div>
            <Progress value={status.percent} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
