import { CheckCircle2, Clock, Inbox, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type TicketStatus = {
  label: string;
  count: number;
  percent: number;
  icon: LucideIcon;
};

const statuses: TicketStatus[] = [
  { label: "Open", count: 42, percent: 23, icon: Inbox },
  { label: "Pending", count: 18, percent: 10, icon: Clock },
  { label: "Closed", count: 124, percent: 67, icon: CheckCircle2 },
];

const total = statuses.reduce((sum, status) => sum + status.count, 0);

export function TicketsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tickets</CardTitle>
        <CardDescription>Support requests logged this week</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <span className="text-3xl font-semibold">{total}</span>
          <span className="ml-2 text-sm text-muted-foreground">total tickets</span>
        </div>

        <div className="space-y-3">
          {statuses.map((status) => (
            <div key={status.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 font-medium">
                  <status.icon className="size-3.5 text-muted-foreground" />
                  {status.label}
                </span>
                <span className="text-muted-foreground">{status.count}</span>
              </div>
              <Progress value={status.percent} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
