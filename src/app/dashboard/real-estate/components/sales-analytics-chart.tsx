"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { month: "Mar", online: 2180, offline: 1960, agent: 1580, marketing: 3240 },
  { month: "Apr", online: 2460, offline: 2080, agent: 1720, marketing: 3680 },
  { month: "May", online: 2720, offline: 2260, agent: 1940, marketing: 4120 },
  { month: "Jun", online: 2950, offline: 2540, agent: 2120, marketing: 4460 },
  { month: "Jul", online: 3180, offline: 2860, agent: 2280, marketing: 4820 },
  { month: "Aug", online: 3425, offline: 3120, agent: 2472, marketing: 5120 },
];

const totals = [
  { key: "online", label: "Online Sale", value: "$3,425" },
  { key: "offline", label: "Offline Sale", value: "$3,120" },
  { key: "agent", label: "Agent Sale", value: "$2,472" },
  { key: "marketing", label: "Marketing Sale", value: "$5,120" },
] as const;

const chartConfig = {
  online: { label: "Online Sale", color: "var(--chart-1)" },
  offline: { label: "Offline Sale", color: "var(--chart-2)" },
  agent: { label: "Agent Sale", color: "var(--chart-3)" },
  marketing: { label: "Marketing Sale", color: "var(--chart-4)" },
} satisfies ChartConfig;

export function SalesAnalyticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Analytics</CardTitle>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {totals.map((total) => (
            <div key={total.key} className="flex items-center gap-1.5 text-sm">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: `var(--color-${total.key})` }}
              />
              <span className="text-muted-foreground">{total.label}</span>
              <span className="font-medium">{total.value}</span>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-72 w-full">
          <BarChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="online" fill="var(--color-online)" radius={4} />
            <Bar dataKey="offline" fill="var(--color-offline)" radius={4} />
            <Bar dataKey="agent" fill="var(--color-agent)" radius={4} />
            <Bar dataKey="marketing" fill="var(--color-marketing)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
