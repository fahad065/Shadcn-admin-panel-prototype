import { TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type BreakdownRow = {
  label: string;
  count: number;
  delta: number;
  className: string;
};

const rows: BreakdownRow[] = [
  {
    label: "Full-time Employees",
    count: 918,
    delta: 42,
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  },
  {
    label: "Part-time Employees",
    count: 186,
    delta: -8,
    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    label: "Contract & Freelance",
    count: 100,
    delta: 12,
    className: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
];

export function EmployeeBreakdownCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.label}
            className={cn(
              "flex items-center justify-between gap-3 rounded-lg px-4 py-3",
              row.className
            )}
          >
            <div>
              <p className="text-2xl font-semibold">{row.count}</p>
              <p className="mt-0.5 text-xs font-medium">{row.label}</p>
            </div>
            <span className="flex items-center gap-0.5 text-xs font-medium">
              {row.delta >= 0 ? (
                <TrendingUp className="size-3.5" />
              ) : (
                <TrendingDown className="size-3.5" />
              )}
              {Math.abs(row.delta)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
