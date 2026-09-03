"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

type Period = "week" | "month" | "year";

const datasets: Record<Period, { label: string; revenue: number; visit: number }[]> = {
  week: [
    { label: "Mon", revenue: 320, visit: 210 },
    { label: "Tue", revenue: 280, visit: 180 },
    { label: "Wed", revenue: 410, visit: 260 },
    { label: "Thu", revenue: 360, visit: 240 },
    { label: "Fri", revenue: 480, visit: 300 },
    { label: "Sat", revenue: 520, visit: 340 },
    { label: "Sun", revenue: 390, visit: 220 },
  ],
  month: [
    { label: "Week 1", revenue: 1620, visit: 980 },
    { label: "Week 2", revenue: 1840, visit: 1120 },
    { label: "Week 3", revenue: 1710, visit: 1050 },
    { label: "Week 4", revenue: 2040, visit: 1260 },
  ],
  year: [
    { label: "Jan", revenue: 6200, visit: 3800 },
    { label: "Feb", revenue: 5800, visit: 3500 },
    { label: "Mar", revenue: 7100, visit: 4200 },
    { label: "Apr", revenue: 6900, visit: 4050 },
    { label: "May", revenue: 7600, visit: 4400 },
    { label: "Jun", revenue: 8200, visit: 4800 },
    { label: "Jul", revenue: 7900, visit: 4650 },
    { label: "Aug", revenue: 8600, visit: 5100 },
  ],
};

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  visit: { label: "Visit", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function PerformanceChart() {
  const [period, setPeriod] = React.useState<Period>("week");
  const data = datasets[period];

  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Performance</CardTitle>
        <CardAction>
          <Tabs value={period} onValueChange={(value) => setPeriod(value as Period)}>
            <TabsList>
              <TabsTrigger value="week">W</TabsTrigger>
              <TabsTrigger value="month">M</TabsTrigger>
              <TabsTrigger value="year">Y</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-72 w-full">
          <BarChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            <Bar dataKey="visit" fill="var(--color-visit)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
