import { PiggyBank } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const current = 32400;
const target = 50000;
const percent = Math.round((current / target) * 1000) / 10;

function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export function SavingGoalCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saving Goal</CardTitle>
        <CardDescription>Emergency Fund · Target Dec 2026</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <PiggyBank className="size-5 text-primary" />
          </span>
          <div className="flex flex-1 flex-wrap items-end justify-between gap-x-6 gap-y-1">
            <div>
              <p className="text-xs text-muted-foreground">Saved so far</p>
              <p className="text-2xl font-semibold tabular-nums">{formatCurrency(current)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Goal</p>
              <p className="text-lg font-semibold tabular-nums">{formatCurrency(target)}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Progress value={percent} />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{percent}% complete</span>
            <span>{formatCurrency(target - current)} to go</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
