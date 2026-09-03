"use client";

import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const chartData = [{ name: "target", value: 48, fill: "var(--color-target)" }];

const chartConfig = {
  target: {
    label: "Target",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function TargetWidget() {
  return (
    <Card>
      <CardContent className="flex items-center gap-4">
        <div className="max-w-[140px]">
          <p className="font-medium">Your target is incomplete</p>
          <p className="mt-1 text-sm text-muted-foreground">
            You have completed{" "}
            <span className="font-medium text-foreground">48%</span> of the
            given target, you can also check your status
          </p>
        </div>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-28 w-28">
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 - 360 * 0.48}
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
              48%
            </text>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
