"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

type Period = "day" | "week" | "month" | "year";

const datasets: Record<Period, { label: string; online: number; offline: number }[]> = {
  day: [
    { label: "12am", online: 4, offline: 2 },
    { label: "4am", online: 2, offline: 1 },
    { label: "8am", online: 9, offline: 5 },
    { label: "12pm", online: 16, offline: 8 },
    { label: "4pm", online: 21, offline: 11 },
    { label: "8pm", online: 14, offline: 7 },
  ],
  week: [
    { label: "Mon", online: 38, offline: 19 },
    { label: "Tue", online: 42, offline: 22 },
    { label: "Wed", online: 35, offline: 18 },
    { label: "Thu", online: 47, offline: 24 },
    { label: "Fri", online: 61, offline: 31 },
    { label: "Sat", online: 74, offline: 39 },
    { label: "Sun", online: 58, offline: 27 },
  ],
  month: [
    { label: "Week 1", online: 210, offline: 108 },
    { label: "Week 2", online: 246, offline: 121 },
    { label: "Week 3", online: 268, offline: 134 },
    { label: "Week 4", online: 312, offline: 149 },
  ],
  year: [
    { label: "Jan", online: 820, offline: 410 },
    { label: "Feb", online: 780, offline: 390 },
    { label: "Mar", online: 940, offline: 460 },
    { label: "Apr", online: 1020, offline: 505 },
    { label: "May", online: 1180, offline: 560 },
    { label: "Jun", online: 1340, offline: 640 },
    { label: "Jul", online: 1460, offline: 700 },
    { label: "Aug", online: 1390, offline: 665 },
    { label: "Sep", online: 1120, offline: 540 },
    { label: "Oct", online: 980, offline: 470 },
    { label: "Nov", online: 1050, offline: 505 },
    { label: "Dec", online: 1280, offline: 615 },
  ],
};

const chartConfig = {
  online: { label: "Online", color: "var(--chart-1)" },
  offline: { label: "Offline", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function BookingsChart() {
  const [period, setPeriod] = React.useState<Period>("week");
  const data = datasets[period];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookings</CardTitle>
        <CardAction>
          <Tabs value={period} onValueChange={(value) => setPeriod(value as Period)}>
            <TabsList>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-72 w-full">
          <AreaChart data={data} margin={{ left: 0, right: 0 }}>
            <defs>
              <linearGradient id="fillOnline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-online)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-online)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="fillOffline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-offline)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-offline)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="online"
              type="monotone"
              stroke="var(--color-online)"
              fill="url(#fillOnline)"
              strokeWidth={2}
            />
            <Area
              dataKey="offline"
              type="monotone"
              stroke="var(--color-offline)"
              fill="url(#fillOffline)"
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
