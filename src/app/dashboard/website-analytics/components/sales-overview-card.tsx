"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ArrowUp, Link2, Share2, ShoppingBag, Users, type LucideIcon } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";

const data = [
  { week: "W1", sales: 7800 },
  { week: "W2", sales: 8100 },
  { week: "W3", sales: 8420 },
  { week: "W4", sales: 8650 },
  { week: "W5", sales: 9040 },
  { week: "W6", sales: 9260 },
  { week: "W7", sales: 9480 },
  { week: "W8", sales: 9550 },
];

const chartConfig = {
  sales: { label: "Sales", color: "var(--chart-1)" },
} satisfies ChartConfig;

type Channel = {
  name: string;
  value: string;
  percent: number;
  icon: LucideIcon;
};

const channels: Channel[] = [
  { name: "Online Store", value: "$32,480", percent: 46, icon: ShoppingBag },
  { name: "Affiliate", value: "$14,920", percent: 21, icon: Users },
  { name: "Direct", value: "$12,360", percent: 18, icon: Link2 },
  { name: "Social", value: "$10,540", percent: 15, icon: Share2 },
];

export function SalesOverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>Revenue generated from site traffic over the last 8 weeks</CardDescription>
        <CardAction>
          <div className="text-right">
            <p className="text-2xl font-semibold">$70,300</p>
            <p className="flex items-center justify-end gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-500">
              <ArrowUp className="size-3" />
              +11.6% vs last period
            </p>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 lg:grid-cols-3">
          <ChartContainer config={chartConfig} className="h-56 w-full lg:col-span-2">
            <AreaChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
              <defs>
                <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={44}
                tickFormatter={(value: number) => `$${value / 1000}k`}
              />
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              <Area
                dataKey="sales"
                type="monotone"
                fill="url(#fillSales)"
                stroke="var(--color-sales)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>

          <div className="space-y-4">
            {channels.map((channel) => (
              <div key={channel.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 font-medium">
                    <channel.icon className="size-3.5 text-muted-foreground" />
                    {channel.name}
                  </span>
                  <span className="text-muted-foreground">{channel.value}</span>
                </div>
                <Progress value={channel.percent} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
