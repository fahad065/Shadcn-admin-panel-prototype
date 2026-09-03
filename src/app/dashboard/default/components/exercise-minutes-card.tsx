"use client";

import { Line, LineChart } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

const data = [
  { day: "Mon", minutes: 18 },
  { day: "Tue", minutes: 24 },
  { day: "Wed", minutes: 15 },
  { day: "Thu", minutes: 32 },
  { day: "Fri", minutes: 21 },
  { day: "Sat", minutes: 44 },
  { day: "Sun", minutes: 38 },
];

const chartConfig = {
  minutes: {
    label: "Minutes",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const totalMinutes = data.reduce((sum, d) => sum + d.minutes, 0);

export function ExerciseMinutesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Minutes</CardTitle>
        <CardDescription>Your activity for the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex items-baseline gap-1.5">
          <span className="text-2xl font-semibold">{totalMinutes}</span>
          <span className="text-xs text-muted-foreground">minutes this week</span>
        </div>
        <ChartContainer config={chartConfig} className="aspect-auto h-24 w-full">
          <LineChart data={data} margin={{ left: 4, right: 4, top: 4, bottom: 0 }}>
            <ChartTooltip content={<ChartTooltipContent indicator="line" hideLabel />} />
            <Line
              dataKey="minutes"
              type="monotone"
              stroke="var(--color-minutes)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
        <p className="mt-2 text-xs text-muted-foreground">
          You&apos;re ahead of your usual weekly pace by 12%.
        </p>
      </CardContent>
    </Card>
  );
}
