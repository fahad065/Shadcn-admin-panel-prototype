"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
  { day: "Mon", rate: 89 },
  { day: "Tue", rate: 92 },
  { day: "Wed", rate: 90 },
  { day: "Thu", rate: 94 },
  { day: "Fri", rate: 87 },
  { day: "Sat", rate: 96 },
  { day: "Sun", rate: 91 },
];

const chartConfig = {
  rate: {
    label: "Attendance Rate",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AttendanceReportChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Report</CardTitle>
        <CardDescription>Daily attendance rate for the current week</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="size-3.5" />
            Export
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <LineChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={40}
              domain={[70, 100]}
              tickFormatter={(value: number) => `${value}%`}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <Line
              dataKey="rate"
              type="monotone"
              stroke="var(--color-rate)"
              strokeWidth={2}
              dot={{ fill: "var(--color-rate)", r: 3 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
