"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", completion: 58 },
  { month: "Feb", completion: 61 },
  { month: "Mar", completion: 63 },
  { month: "Apr", completion: 60 },
  { month: "May", completion: 66 },
  { month: "Jun", completion: 69 },
  { month: "Jul", completion: 71 },
  { month: "Aug", completion: 72.5 },
];

const chartConfig = {
  completion: {
    label: "Avg. Course Progress",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function CourseProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Progress by Month</CardTitle>
        <CardDescription>
          Average completion rate across all enrolled courses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <LineChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={36}
              tickFormatter={(value: number) => `${value}%`}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <Line
              dataKey="completion"
              type="monotone"
              stroke="var(--color-completion)"
              strokeWidth={2}
              dot={{ fill: "var(--color-completion)", r: 3 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-1.5 text-sm font-medium">
          Trending up by 2.5% this month
          <TrendingUp className="size-4 text-emerald-600 dark:text-emerald-500" />
        </div>
      </CardFooter>
    </Card>
  );
}
