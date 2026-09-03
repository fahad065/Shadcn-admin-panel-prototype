"use client";

import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const usedGb = 342.6;
const totalGb = 500;
const usedPercent = Math.round((usedGb / totalGb) * 100);

const chartData = [
  { name: "storage", value: usedPercent, fill: "var(--color-storage)" },
];

const chartConfig = {
  storage: {
    label: "Storage",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function OverallStorageWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Storage</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            You have used{" "}
            <span className="font-medium text-foreground">{usedGb} GB</span> of your{" "}
            <span className="font-medium text-foreground">{totalGb} GB</span> plan
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {(totalGb - usedGb).toFixed(1)} GB remaining across your workspace
          </p>
        </div>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-32 w-32 shrink-0">
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 - 360 * (usedPercent / 100)}
            innerRadius="75%"
            outerRadius="100%"
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" background cornerRadius={10} fill="var(--primary)" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-lg font-semibold"
            >
              {usedPercent}%
            </text>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
