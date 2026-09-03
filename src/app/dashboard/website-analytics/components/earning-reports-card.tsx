"use client";

import { Bar, BarChart } from "recharts";
import { ArrowDown, ArrowUp, DollarSign, TrendingUp, Wallet, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const data = [
  { day: "Mon", earnings: 620 },
  { day: "Tue", earnings: 780 },
  { day: "Wed", earnings: 540 },
  { day: "Thu", earnings: 910 },
  { day: "Fri", earnings: 860 },
  { day: "Sat", earnings: 1040 },
  { day: "Sun", earnings: 970 },
];

const chartConfig = {
  earnings: { label: "Earnings", color: "var(--chart-1)" },
} satisfies ChartConfig;

type EarningRow = {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  icon: LucideIcon;
  color: string;
};

const rows: EarningRow[] = [
  {
    label: "Earnings",
    value: "$5,720",
    delta: "+12.4%",
    positive: true,
    icon: Wallet,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  },
  {
    label: "Profit",
    value: "$3,180",
    delta: "+8.1%",
    positive: true,
    icon: TrendingUp,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    label: "Expense",
    value: "$1,940",
    delta: "-3.6%",
    positive: false,
    icon: DollarSign,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

export function EarningReportsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earning Reports</CardTitle>
        <CardDescription>Revenue generated from site traffic this week</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer config={chartConfig} className="aspect-auto h-24 w-full">
          <BarChart data={data} margin={{ left: 0, right: 0, top: 4 }}>
            <ChartTooltip content={<ChartTooltipContent indicator="dot" hideLabel />} />
            <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4} />
          </BarChart>
        </ChartContainer>

        <div className="space-y-3 border-t pt-4">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-sm font-medium">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full",
                    row.color
                  )}
                >
                  <row.icon className="size-3.5" />
                </span>
                {row.label}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sm font-medium">{row.value}</span>
                <span
                  className={cn(
                    "flex items-center gap-0.5 text-xs font-medium",
                    row.positive ? "text-emerald-600 dark:text-emerald-500" : "text-destructive"
                  )}
                >
                  {row.positive ? (
                    <ArrowUp className="size-3" />
                  ) : (
                    <ArrowDown className="size-3" />
                  )}
                  {row.delta}
                </span>
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
