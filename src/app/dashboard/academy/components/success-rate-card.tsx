"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const passRate = 88;
const previousRate = 85;
const totalStudents = 1500;
const passingStudents = 1320;

const chartData = [
  { name: "passRate", value: passRate, fill: "var(--color-passRate)" },
];

const chartConfig = {
  passRate: {
    label: "Passing Rate",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function SuccessRateCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Overall Success Rate</CardTitle>
        <CardDescription>Passing rate across all courses</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-36 w-36"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 - 360 * (passRate / 100)}
            innerRadius="75%"
            outerRadius="100%"
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              dataKey="value"
              background
              cornerRadius={10}
              fill="var(--color-passRate)"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-2xl font-semibold"
            >
              {passRate}%
            </text>
          </RadialBarChart>
        </ChartContainer>
        <p className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-500">
          <TrendingUp className="size-3.5" />
          Up 3% from {previousRate}% last term
        </p>
        <p className="text-center text-xs text-muted-foreground">
          {passingStudents.toLocaleString()} of {totalStudents.toLocaleString()}{" "}
          students passing
        </p>
      </CardContent>
    </Card>
  );
}
