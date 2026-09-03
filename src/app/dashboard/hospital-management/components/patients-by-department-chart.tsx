"use client";

import { Pie, PieChart, Cell } from "recharts";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const departments = [
  { name: "Cardiology", value: 48, fill: "var(--chart-1)" },
  { name: "Neurology", value: 31, fill: "var(--chart-2)" },
  { name: "Pediatrics", value: 39, fill: "var(--chart-3)" },
  { name: "Orthopedics", value: 27, fill: "var(--chart-4)" },
  { name: "General", value: 22, fill: "var(--chart-5)" },
];

const total = departments.reduce((sum, d) => sum + d.value, 0);

const chartConfig = departments.reduce((config, d) => {
  config[d.name.toLowerCase()] = { label: d.name, color: d.fill };
  return config;
}, {} as ChartConfig);

export function PatientsByDepartmentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patients by Department</CardTitle>
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
              data={departments}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={75}
              strokeWidth={4}
            >
              {departments.map((d) => (
                <Cell key={d.name} fill={d.fill} />
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
              Patients
            </text>
          </PieChart>
        </ChartContainer>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {departments.map((d) => (
            <div key={d.name} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: d.fill }}
                />
                {d.name.toUpperCase()}
              </span>
              <span className="font-medium">{d.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
