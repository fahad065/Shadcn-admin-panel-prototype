"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { quarter: "Q3 '25", completed: 18, planned: 22 },
  { quarter: "Q4 '25", completed: 24, planned: 26 },
  { quarter: "Q1 '26", completed: 21, planned: 24 },
  { quarter: "Q2 '26", completed: 27, planned: 28 },
  { quarter: "Q3 '26", completed: 25, planned: 27 },
];

const chartConfig = {
  completed: {
    label: "Completed",
    color: "var(--chart-1)",
  },
  planned: {
    label: "Planned",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ReportsOverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Completed vs. Planned</CardTitle>
        <CardDescription>Delivered projects against the quarterly plan</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="quarter" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
            <Bar dataKey="planned" fill="var(--color-planned)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
