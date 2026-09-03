"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { year: "2021", projects: 22 },
  { year: "2022", projects: 34 },
  { year: "2023", projects: 41 },
  { year: "2024", projects: 63 },
  { year: "2025", projects: 58 },
];

const chartConfig = {
  projects: {
    label: "Projects",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AchievementByYearChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievement by Year</CardTitle>
        <CardDescription>Projects delivered per year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Bar dataKey="projects" fill="var(--color-projects)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
