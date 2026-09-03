import { Boxes, Briefcase, LineChart, MoreHorizontal, type LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type IncomeSource = {
  name: string;
  amount: number;
  percent: number;
  icon: LucideIcon;
  accent: string;
};

const sources: IncomeSource[] = [
  {
    name: "Product Sales",
    amount: 11000,
    percent: 55,
    icon: Boxes,
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Services",
    amount: 5000,
    percent: 25,
    icon: Briefcase,
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    name: "Investments",
    amount: 2400,
    percent: 12,
    icon: LineChart,
    accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  },
  {
    name: "Other",
    amount: 1600,
    percent: 8,
    icon: MoreHorizontal,
    accent: "bg-amber-500/10 text-amber-600 dark:text-amber-500",
  },
];

const total = sources.reduce((sum, source) => sum + source.amount, 0);

function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
}

export function IncomeSourcesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Income Sources</CardTitle>
        <CardDescription>{formatCurrency(total)} earned this month</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {sources.map((source) => {
          const Icon = source.icon;
          return (
            <div key={source.name} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-md",
                      source.accent
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{source.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium tabular-nums">
                    {formatCurrency(source.amount)}
                  </p>
                  <p className="text-xs text-muted-foreground">{source.percent}%</p>
                </div>
              </div>
              <Progress value={source.percent} />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
