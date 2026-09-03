"use client";

import { Pie, PieChart, Cell } from "recharts";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const costs = [
  { key: "gpt4", name: "GPT-4o", value: 7860, percent: 43, fill: "var(--chart-1)" },
  { key: "claude", name: "Claude 3.5 Sonnet", value: 5540, percent: 30, fill: "var(--chart-2)" },
  { key: "gemini", name: "Gemini 1.5 Pro", value: 3120, percent: 17, fill: "var(--chart-3)" },
  { key: "others", name: "Others", value: 1830, percent: 10, fill: "var(--chart-4)" },
];

const total = costs.reduce((sum, m) => sum + m.value, 0);

const chartConfig = costs.reduce((config, m) => {
  config[m.key] = { label: m.name, color: m.fill };
  return config;
}, {} as ChartConfig);

export function CostBreakdownChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Breakdown</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="size-3.5" />
            Export
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-40">
          <PieChart>
            <Pie
              data={costs}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={75}
              strokeWidth={4}
            >
              {costs.map((m) => (
                <Cell key={m.key} fill={m.fill} />
              ))}
            </Pie>
            <text
              x="50%"
              y="47%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-2xl font-semibold"
            >
              ${(total / 1000).toFixed(1)}k
            </text>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-xs"
            >
              Total Cost
            </text>
          </PieChart>
        </ChartContainer>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {costs.map((m) => (
            <div key={m.key} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: m.fill }}
                />
                {m.name}
              </span>
              <span className="font-medium">{m.percent}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
