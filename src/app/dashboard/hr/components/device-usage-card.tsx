"use client";

import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { Headphones, Keyboard, Laptop, Monitor, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

type Device = {
  label: string;
  count: number;
  icon: LucideIcon;
};

const devices: Device[] = [
  { label: "Laptops", count: 64, icon: Laptop },
  { label: "Monitors", count: 41, icon: Monitor },
  { label: "Keyboards", count: 28, icon: Keyboard },
  { label: "Headphones", count: 19, icon: Headphones },
];

const issued = devices.reduce((sum, d) => sum + d.count, 0);
const pool = 180;
const percent = Math.round((issued / pool) * 100);

const chartData = [{ name: "devices", value: percent, fill: "var(--color-devices)" }];

const chartConfig = {
  devices: {
    label: "Devices",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function DeviceUsageCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Usage</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-24 w-24 shrink-0"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 - 360 * (percent / 100)}
            innerRadius="75%"
            outerRadius="100%"
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" background cornerRadius={10} fill="var(--primary)" />
            <text
              x="50%"
              y="46%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-lg font-semibold"
            >
              {issued}
            </text>
            <text
              x="50%"
              y="63%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-[10px]"
            >
              of {pool} issued
            </text>
          </RadialBarChart>
        </ChartContainer>
        <div className="flex-1 space-y-2">
          {devices.map((device) => (
            <div key={device.label} className="flex items-center justify-between gap-2 text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <device.icon className="size-3.5" />
                {device.label}
              </span>
              <span className="font-medium">{device.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
