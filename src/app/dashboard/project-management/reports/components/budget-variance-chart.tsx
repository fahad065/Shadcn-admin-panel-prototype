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
  { quarter: "Q3 '25", budget: 210, actual: 198 },
  { quarter: "Q4 '25", budget: 236, actual: 244 },
  { quarter: "Q1 '26", budget: 224, actual: 212 },
  { quarter: "Q2 '26", budget: 258, actual: 249 },
  { quarter: "Q3 '26", budget: 241, actual: 233 },
];

const chartConfig = {
  budget: {
    label: "Budgeted ($k)",
    color: "var(--chart-3)",
  },
  actual: {
    label: "Actual ($k)",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function BudgetVarianceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget vs. Actual</CardTitle>
        <CardDescription>Quarterly spend against approved budget</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="quarter" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="budget" fill="var(--color-budget)" radius={4} />
            <Bar dataKey="actual" fill="var(--color-actual)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
