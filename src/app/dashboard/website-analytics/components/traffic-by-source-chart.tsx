"use client";

import { Cell, Pie, PieChart } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const sources = [
  { name: "Organic Search", value: 42, fill: "var(--chart-1)" },
  { name: "Direct", value: 24, fill: "var(--chart-2)" },
  { name: "Social", value: 17, fill: "var(--chart-3)" },
  { name: "Referral", value: 11, fill: "var(--chart-4)" },
  { name: "Paid", value: 6, fill: "var(--chart-5)" },
];

const chartConfig = sources.reduce((config, s) => {
  config[s.name.toLowerCase()] = { label: s.name, color: s.fill };
  return config;
}, {} as ChartConfig);

export function TrafficBySourceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic by Source</CardTitle>
        <CardDescription>Where this week&apos;s visitors came from</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-40">
          <PieChart>
            <Pie
              data={sources}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={75}
              strokeWidth={4}
            >
              {sources.map((s) => (
                <Cell key={s.name} fill={s.fill} />
              ))}
            </Pie>
            <text
              x="50%"
              y="47%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-2xl font-semibold"
            >
              100%
            </text>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-xs"
            >
              Traffic
            </text>
          </PieChart>
        </ChartContainer>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {sources.map((s) => (
            <div key={s.name} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: s.fill }}
                />
                {s.name}
              </span>
              <span className="font-medium">{s.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
