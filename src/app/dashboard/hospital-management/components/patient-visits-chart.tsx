"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { week: "Jul 14", male: 210, female: 245, other: 18 },
  { week: "Jul 21", male: 198, female: 232, other: 15 },
  { week: "Jul 28", male: 225, female: 258, other: 20 },
  { week: "Aug 04", male: 240, female: 271, other: 22 },
  { week: "Aug 11", male: 232, female: 265, other: 19 },
  { week: "Aug 18", male: 255, female: 289, other: 24 },
  { week: "Aug 25", male: 248, female: 276, other: 21 },
  { week: "Sep 01", male: 262, female: 298, other: 26 },
];

const chartConfig = {
  male: { label: "Male", color: "var(--chart-1)" },
  female: { label: "Female", color: "var(--chart-2)" },
  other: { label: "Other", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function PatientVisitsChart() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Patient Visits by Gender</CardTitle>
        <CardDescription>Outpatient visits over the last 8 weeks</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="size-3.5" />
            Export
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-72 w-full">
          <BarChart data={data} margin={{ left: 0, right: 12, top: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={32} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="male" fill="var(--color-male)" radius={4} />
            <Bar dataKey="female" fill="var(--color-female)" radius={4} />
            <Bar dataKey="other" fill="var(--color-other)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
