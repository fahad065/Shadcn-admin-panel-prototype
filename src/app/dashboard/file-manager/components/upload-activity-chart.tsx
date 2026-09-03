"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
  { day: "Aug 20", uploads: 86 },
  { day: "Aug 21", uploads: 104 },
  { day: "Aug 22", uploads: 78 },
  { day: "Aug 23", uploads: 121 },
  { day: "Aug 24", uploads: 96 },
  { day: "Aug 25", uploads: 133 },
  { day: "Aug 26", uploads: 149 },
  { day: "Aug 27", uploads: 112 },
  { day: "Aug 28", uploads: 138 },
  { day: "Aug 29", uploads: 164 },
  { day: "Aug 30", uploads: 142 },
  { day: "Aug 31", uploads: 171 },
  { day: "Sep 1", uploads: 158 },
  { day: "Sep 2", uploads: 189 },
];

const chartConfig = {
  uploads: {
    label: "Files Uploaded",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function UploadActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Upload Activity</CardTitle>
        <CardDescription>Files uploaded by your team over the last 14 days</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="size-3.5" />
            Export
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[280px] w-full">
          <AreaChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <defs>
              <linearGradient id="fillUploads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-uploads)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-uploads)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="uploads"
              type="monotone"
              fill="url(#fillUploads)"
              stroke="var(--color-uploads)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
