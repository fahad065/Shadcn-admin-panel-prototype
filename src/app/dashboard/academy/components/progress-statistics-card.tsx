"use client";

import { Cell, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "In Progress", caption: "30 courses", value: 65 },
  { label: "Completed", caption: "18 courses", value: 50 },
  { label: "Total Activity", caption: "Average completion", value: 72.5 },
];

const activityBreakdown = [
  { name: "Mentoring", value: 65.2, fill: "var(--chart-1)" },
  { name: "Organization", value: 25, fill: "var(--chart-2)" },
  { name: "Planning", value: 9.8, fill: "var(--chart-3)" },
];

const chartConfig = activityBreakdown.reduce((config, item) => {
  config[item.name.toLowerCase()] = { label: item.name, color: item.fill };
  return config;
}, {} as ChartConfig);

export function ProgressStatisticsCard() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Progress Statistics</CardTitle>
        <CardDescription>
          Total activity averages 72.5% completion
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-5">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {stat.label} &middot; {stat.caption}
                </span>
                <span className="font-medium tabular-nums">{stat.value}%</span>
              </div>
              <Progress value={stat.value} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <ChartContainer config={chartConfig} className="mx-auto aspect-square h-32">
            <PieChart>
              <Pie
                data={activityBreakdown}
                dataKey="value"
                nameKey="name"
                innerRadius={40}
                outerRadius={60}
                strokeWidth={4}
              >
                {activityBreakdown.map((item) => (
                  <Cell key={item.name} fill={item.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          <div className="grid w-full grid-cols-1 gap-1.5 text-xs">
            {activityBreakdown.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-2"
              >
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  {item.name}
                </span>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
