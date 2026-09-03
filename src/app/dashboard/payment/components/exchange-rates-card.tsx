"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CurrencyConverter } from "./currency-converter";
import { RATE_RANGES, rateHistory } from "./exchange-rate-data";

const chartConfig = {
  rate: {
    label: "EUR / USD",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ExchangeRatesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exchange Rates</CardTitle>
        <CardDescription>EUR / USD</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Tabs defaultValue="7D">
          <TabsList>
            {RATE_RANGES.map((range) => (
              <TabsTrigger key={range} value={range}>
                {range}
              </TabsTrigger>
            ))}
          </TabsList>

          {RATE_RANGES.map((range) => (
            <TabsContent key={range} value={range} className="mt-4">
              <ChartContainer config={chartConfig} className="aspect-auto h-48 w-full">
                <AreaChart data={rateHistory[range]} margin={{ left: 0, right: 12, top: 12 }}>
                  <defs>
                    <linearGradient id="fillRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-rate)" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="var(--color-rate)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                  <Area
                    dataKey="rate"
                    type="monotone"
                    fill="url(#fillRate)"
                    stroke="var(--color-rate)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </TabsContent>
          ))}
        </Tabs>

        <Separator />

        <CurrencyConverter />
      </CardContent>
    </Card>
  );
}
