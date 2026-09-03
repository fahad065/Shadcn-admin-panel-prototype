"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

type Period = "3m" | "30d" | "7d";

const datasets: Record<Period, { date: string; mobile: number; desktop: number }[]> = {
  "3m": [
    { date: "Jun 15", mobile: 142, desktop: 268 },
    { date: "Jun 29", mobile: 187, desktop: 241 },
    { date: "Jul 13", mobile: 165, desktop: 312 },
    { date: "Jul 27", mobile: 221, desktop: 289 },
    { date: "Aug 10", mobile: 198, desktop: 334 },
    { date: "Aug 24", mobile: 246, desktop: 301 },
    { date: "Sep 3", mobile: 231, desktop: 356 },
  ],
  "30d": [
    { date: "Aug 4", mobile: 168, desktop: 288 },
    { date: "Aug 8", mobile: 192, desktop: 260 },
    { date: "Aug 12", mobile: 174, desktop: 305 },
    { date: "Aug 16", mobile: 210, desktop: 274 },
    { date: "Aug 20", mobile: 189, desktop: 322 },
    { date: "Aug 24", mobile: 233, desktop: 296 },
    { date: "Aug 28", mobile: 205, desktop: 341 },
    { date: "Sep 1", mobile: 248, desktop: 318 },
  ],
  "7d": [
    { date: "Mon", mobile: 62, desktop: 98 },
    { date: "Tue", mobile: 74, desktop: 87 },
    { date: "Wed", mobile: 58, desktop: 112 },
    { date: "Thu", mobile: 81, desktop: 96 },
    { date: "Fri", mobile: 90, desktop: 121 },
    { date: "Sat", mobile: 47, desktop: 68 },
    { date: "Sun", mobile: 53, desktop: 74 },
  ],
};

const descriptions: Record<Period, string> = {
  "3m": "Total portal visits for the last 3 months",
  "30d": "Total portal visits for the last 30 days",
  "7d": "Total portal visits for the last 7 days",
};

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ProjectsOverviewChart() {
  const [period, setPeriod] = React.useState<Period>("3m");
  const data = datasets[period];

  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Projects Overview</CardTitle>
        <CardDescription>{descriptions[period]}</CardDescription>
        <CardAction>
          <Tabs value={period} onValueChange={(value) => setPeriod(value as Period)}>
            <TabsList>
              <TabsTrigger value="3m">3 months</TabsTrigger>
              <TabsTrigger value="30d">30 days</TabsTrigger>
              <TabsTrigger value="7d">7 days</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <AreaChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="desktop"
              type="monotone"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              strokeWidth={2}
            />
            <Area
              dataKey="mobile"
              type="monotone"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
