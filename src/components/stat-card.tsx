import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta?: { value: string; positive: boolean; caption?: string };
  icon?: LucideIcon;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <span className="text-sm text-muted-foreground">{label}</span>
        {Icon ? <Icon className="size-4 text-muted-foreground" /> : null}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
        {delta ? (
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <span
              className={cn(
                "flex items-center gap-0.5 font-medium",
                delta.positive ? "text-emerald-600 dark:text-emerald-500" : "text-destructive"
              )}
            >
              {delta.positive ? (
                <ArrowUp className="size-3" />
              ) : (
                <ArrowDown className="size-3" />
              )}
              {delta.value}
            </span>
            {delta.caption ?? "from last month"}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
