import { Clock3, UserCheck, UserX, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type AttendanceRow = {
  label: string;
  count: number;
  percent: number;
  icon: LucideIcon;
};

const rows: AttendanceRow[] = [
  { label: "Present", count: 1046, percent: 87, icon: UserCheck },
  { label: "Late", count: 94, percent: 8, icon: Clock3 },
  { label: "Absent", count: 64, percent: 5, icon: UserX },
];

export function AttendanceOverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-3xl font-semibold">91.4%</p>
            <p className="text-xs text-muted-foreground">
              This week&apos;s attendance rate
            </p>
          </div>
          <Badge
            variant="secondary"
            className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-500"
          >
            +1.6%
          </Badge>
        </div>

        <div className="space-y-3">
          {rows.map((row) => (
            <div key={row.label} className="space-y-1.5">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-1.5 font-medium">
                  <row.icon className="size-4 text-muted-foreground" />
                  {row.label}
                </span>
                <span className="text-muted-foreground">{row.count} employees</span>
              </div>
              <Progress value={row.percent} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
