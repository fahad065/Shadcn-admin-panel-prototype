import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Loader,
  PackagePlus,
  Undo2,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type OrderStatus = {
  label: string;
  value: number;
  delta: string;
  positive: boolean;
  icon: LucideIcon;
};

const statuses: OrderStatus[] = [
  { label: "New Order", value: 43, delta: "0.5%", positive: true, icon: PackagePlus },
  { label: "On Progress", value: 12, delta: "0.3%", positive: true, icon: Loader },
  { label: "Completed", value: 40, delta: "0.5%", positive: true, icon: CheckCircle2 },
  { label: "Return", value: 2, delta: "0.3%", positive: false, icon: Undo2 },
];

export function OrderStatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Status</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {statuses.map((status) => (
          <div key={status.label} className="rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <status.icon className="size-4 text-muted-foreground" />
              <span
                className={cn(
                  "flex items-center gap-0.5 text-xs font-medium",
                  status.positive ? "text-emerald-600 dark:text-emerald-500" : "text-destructive"
                )}
              >
                {status.positive ? (
                  <ArrowUp className="size-3" />
                ) : (
                  <ArrowDown className="size-3" />
                )}
                {status.delta}
              </span>
            </div>
            <p className="mt-2 text-xl font-semibold">{status.value}</p>
            <p className="text-xs text-muted-foreground">{status.label}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
