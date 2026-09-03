"use client";

import { Pie, PieChart, Cell } from "recharts";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const sources = [
  { name: "Social", value: 275, fill: "var(--chart-1)" },
  { name: "Email", value: 200, fill: "var(--chart-2)" },
  { name: "Call", value: 287, fill: "var(--chart-3)" },
  { name: "Others", value: 173, fill: "var(--chart-4)" },
];

const total = sources.reduce((sum, s) => sum + s.value, 0);

const chartConfig = sources.reduce((config, s) => {
  config[s.name.toLowerCase()] = { label: s.name, color: s.fill };
  return config;
}, {} as ChartConfig);

export function LeadsBySourceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads by Source</CardTitle>
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
              {total}
            </text>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-xs"
            >
              Leads
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
                {s.name.toUpperCase()}
              </span>
              <span className="font-medium">{s.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
