"use client";

import { Cell, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const sources = [
  { name: "Direct", value: 38, fill: "var(--chart-1)" },
  { name: "Search", value: 29, fill: "var(--chart-2)" },
  { name: "Social", value: 21, fill: "var(--chart-3)" },
  { name: "Referral", value: 12, fill: "var(--chart-4)" },
];

const chartConfig = sources.reduce((config, source) => {
  config[source.name.toLowerCase()] = { label: source.name, color: source.fill };
  return config;
}, {} as ChartConfig);

export function StoreVisitsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Visits by Source</CardTitle>
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
              {sources.map((source) => (
                <Cell key={source.name} fill={source.fill} />
              ))}
            </Pie>
            <text
              x="50%"
              y="47%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-2xl font-semibold"
            >
              24.8k
            </text>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-xs"
            >
              Visits
            </text>
          </PieChart>
        </ChartContainer>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {sources.map((source) => (
            <div key={source.name} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: source.fill }}
                />
                {source.name}
              </span>
              <span className="font-medium">{source.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
