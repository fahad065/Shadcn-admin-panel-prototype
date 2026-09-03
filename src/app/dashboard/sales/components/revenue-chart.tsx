"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
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
  { date: "Aug 06", mobile: 517, desktop: 526 },
  { date: "Aug 07", mobile: 544, desktop: 529 },
  { date: "Aug 08", mobile: 501, desktop: 533 },
  { date: "Aug 09", mobile: 521, desktop: 463 },
  { date: "Aug 10", mobile: 547, desktop: 554 },
  { date: "Aug 11", mobile: 606, desktop: 506 },
  { date: "Aug 12", mobile: 615, desktop: 582 },
  { date: "Aug 13", mobile: 606, desktop: 576 },
  { date: "Aug 14", mobile: 485, desktop: 487 },
  { date: "Aug 15", mobile: 550, desktop: 565 },
  { date: "Aug 16", mobile: 468, desktop: 514 },
  { date: "Aug 17", mobile: 479, desktop: 514 },
  { date: "Aug 18", mobile: 565, desktop: 454 },
  { date: "Aug 19", mobile: 533, desktop: 528 },
  { date: "Aug 20", mobile: 451, desktop: 515 },
  { date: "Aug 21", mobile: 390, desktop: 527 },
  { date: "Aug 22", mobile: 426, desktop: 433 },
  { date: "Aug 23", mobile: 471, desktop: 426 },
  { date: "Aug 24", mobile: 381, desktop: 486 },
  { date: "Aug 25", mobile: 413, desktop: 397 },
  { date: "Aug 26", mobile: 508, desktop: 411 },
  { date: "Aug 27", mobile: 411, desktop: 498 },
  { date: "Aug 28", mobile: 362, desktop: 465 },
  { date: "Aug 29", mobile: 334, desktop: 400 },
  { date: "Aug 30", mobile: 392, desktop: 489 },
  { date: "Aug 31", mobile: 470, desktop: 448 },
  { date: "Sep 01", mobile: 477, desktop: 430 },
  { date: "Sep 02", mobile: 557, desktop: 490 },
];

const totalMobile = data.reduce((sum, item) => sum + item.mobile, 0);
const totalDesktop = data.reduce((sum, item) => sum + item.desktop, 0);

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Mobile vs. desktop revenue for the last 28 days</CardDescription>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-muted-foreground">Mobile</p>
            <p className="text-lg font-semibold">${totalMobile.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Desktop</p>
            <p className="text-lg font-semibold">${totalDesktop.toLocaleString()}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[280px] w-full">
          <AreaChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <defs>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={3}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={40}
              tickFormatter={(value: number) => `$${value}`}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="mobile"
              type="monotone"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              strokeWidth={2}
            />
            <Area
              dataKey="desktop"
              type="monotone"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
