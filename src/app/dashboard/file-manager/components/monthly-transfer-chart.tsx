"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
  { month: "Jan", uploads: 412, downloads: 298 },
  { month: "Feb", uploads: 468, downloads: 336 },
  { month: "Mar", uploads: 389, downloads: 361 },
  { month: "Apr", uploads: 521, downloads: 402 },
  { month: "May", uploads: 574, downloads: 447 },
  { month: "Jun", uploads: 498, downloads: 419 },
  { month: "Jul", uploads: 632, downloads: 486 },
  { month: "Aug", uploads: 705, downloads: 523 },
];

const chartConfig = {
  uploads: {
    label: "Uploads",
    color: "var(--chart-1)",
  },
  downloads: {
    label: "Downloads",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function MonthlyTransferChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly File Transfer</CardTitle>
        <CardDescription>Uploads and downloads across your workspace</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="size-3.5" />
            Export
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[280px] w-full">
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={36} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Bar dataKey="uploads" fill="var(--color-uploads)" radius={4} />
            <Bar dataKey="downloads" fill="var(--color-downloads)" radius={4} />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
