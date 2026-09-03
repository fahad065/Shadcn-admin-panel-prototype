import { ArrowDownToLine, ArrowUpFromLine, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SummaryItem = {
  label: string;
  value: string;
  icon: LucideIcon;
  tone: string;
};

const summary: SummaryItem[] = [
  {
    label: "Received",
    value: "$18,240.50",
    icon: ArrowDownToLine,
    tone: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  },
  {
    label: "Sent",
    value: "$9,410.00",
    icon: ArrowUpFromLine,
    tone: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    label: "Withdraw",
    value: "$4,825.75",
    icon: Landmark,
    tone: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

export function BalanceSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-3">
        {summary.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full",
                  item.tone
                )}
              >
                <Icon className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-base font-semibold">{item.value}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
