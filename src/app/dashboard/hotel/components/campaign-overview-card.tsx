"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Megaphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

const data = [
  { day: "Mon", clicks: 142 },
  { day: "Tue", clicks: 168 },
  { day: "Wed", clicks: 154 },
  { day: "Thu", clicks: 201 },
  { day: "Fri", clicks: 238 },
  { day: "Sat", clicks: 276 },
  { day: "Sun", clicks: 219 },
];

const chartConfig = {
  clicks: { label: "Clicks", color: "var(--chart-1)" },
} satisfies ChartConfig;

const stats = [
  { label: "Impressions", value: "48.2K" },
  { label: "Clicks", value: "1,398" },
  { label: "Conversions", value: "162" },
];

export function CampaignOverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Overview</CardTitle>
        <CardAction>
          <Badge variant="secondary" className="gap-1">
            <Megaphone className="size-3" />
            Autumn Escape
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer config={chartConfig} className="aspect-auto h-24 w-full">
          <BarChart data={data} margin={{ left: 0, right: 0, top: 4 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={6} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" hideLabel />} />
            <Bar dataKey="clicks" fill="var(--color-clicks)" radius={4} />
          </BarChart>
        </ChartContainer>

        <div className="grid grid-cols-3 gap-2 border-t pt-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
