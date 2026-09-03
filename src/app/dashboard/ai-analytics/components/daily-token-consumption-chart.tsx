"use client";

import { Bar, ComposedChart, CartesianGrid, Line, XAxis, YAxis } from "recharts";
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
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { day: "Aug 20", requests: 4120, tokens: 1840 },
  { day: "Aug 21", requests: 4310, tokens: 1920 },
  { day: "Aug 22", requests: 3980, tokens: 1760 },
  { day: "Aug 23", requests: 4650, tokens: 2080 },
  { day: "Aug 24", requests: 4890, tokens: 2210 },
  { day: "Aug 25", requests: 4520, tokens: 2040 },
  { day: "Aug 26", requests: 5180, tokens: 2360 },
  { day: "Aug 27", requests: 5460, tokens: 2510 },
  { day: "Aug 28", requests: 5290, tokens: 2430 },
  { day: "Aug 29", requests: 5720, tokens: 2680 },
  { day: "Aug 30", requests: 5940, tokens: 2790 },
  { day: "Aug 31", requests: 6180, tokens: 2920 },
  { day: "Sep 1", requests: 6410, tokens: 3050 },
  { day: "Sep 2", requests: 6730, tokens: 3220 },
];

const chartConfig = {
  requests: {
    label: "Requests",
    color: "var(--chart-1)",
  },
  tokens: {
    label: "Tokens (K)",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function DailyTokenConsumptionChart() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Daily Token Consumption</CardTitle>
        <CardDescription>Requests and token volume per day</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="size-3.5" />
            Export
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ComposedChart data={data} margin={{ left: 0, right: 0, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={40}
              tickFormatter={(value: number) => `${value / 1000}k`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={40}
              tickFormatter={(value: number) => `${value / 1000}k`}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Bar
              yAxisId="left"
              dataKey="requests"
              fill="var(--color-requests)"
              radius={4}
              barSize={18}
            />
            <Line
              yAxisId="right"
              dataKey="tokens"
              type="monotone"
              stroke="var(--color-tokens)"
              strokeWidth={2}
              dot={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
