"use client";

import { Pie, PieChart, Cell } from "recharts";
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
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const categories = [
  { name: "Rent", value: 1800, fill: "var(--chart-1)" },
  { name: "Food & Groceries", value: 620, fill: "var(--chart-2)" },
  { name: "Transport", value: 340, fill: "var(--chart-3)" },
  { name: "Utilities", value: 260, fill: "var(--chart-4)" },
  { name: "Other", value: 480, fill: "var(--chart-5)" },
];

const total = categories.reduce((sum, c) => sum + c.value, 0);

const chartConfig = categories.reduce((config, c) => {
  config[c.name.toLowerCase()] = { label: c.name, color: c.fill };
  return config;
}, {} as ChartConfig);

export function MonthlyExpensesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Expenses</CardTitle>
        <CardDescription>Spending by category this month</CardDescription>
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
              data={categories}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={75}
              strokeWidth={4}
            >
              {categories.map((c) => (
                <Cell key={c.name} fill={c.fill} />
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
              This Month
            </text>
          </PieChart>
        </ChartContainer>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {categories.map((c) => (
            <div key={c.name} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: c.fill }}
                />
                {c.name}
              </span>
              <span className="font-medium">
                {Math.round((c.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
