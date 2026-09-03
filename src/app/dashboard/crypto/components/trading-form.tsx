"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Side = "buy" | "sell";

const coins = [
  { symbol: "BTC", name: "Bitcoin", price: 72650.0 },
  { symbol: "ETH", name: "Ethereum", price: 3412.2 },
  { symbol: "AVAX", name: "Avalanche", price: 27.85 },
  { symbol: "USDT", name: "Tether", price: 1.0 },
] as const;

export function TradingForm({ className }: { className?: string }) {
  const [side, setSide] = useState<Side>("buy");
  const [symbol, setSymbol] = useState<string>("BTC");
  const [amount, setAmount] = useState("0.05");

  const coin = coins.find((c) => c.symbol === symbol) ?? coins[0];

  const total = useMemo(() => {
    const qty = Number.parseFloat(amount);
    if (Number.isNaN(qty)) return 0;
    return qty * coin.price;
  }, [amount, coin.price]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Buy / Sell</CardTitle>
        <CardDescription>Trade your favorite coins instantly</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Tabs value={side} onValueChange={(value) => setSide(value as Side)}>
          <TabsList className="w-full">
            <TabsTrigger value="buy" className="flex-1">
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="flex-1">
              Sell
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="trade-coin">Coin</Label>
          <Select value={symbol} onValueChange={(value) => setSymbol(String(value))}>
            <SelectTrigger id="trade-coin" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {coins.map((c) => (
                <SelectItem key={c.symbol} value={c.symbol}>
                  {c.name} ({c.symbol})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="trade-amount">Amount</Label>
          <Input
            id="trade-amount"
            inputMode="decimal"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div className="flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-sm">
          <span className="text-muted-foreground">Estimated total</span>
          <span className="font-medium">
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>

        <Button
          className="w-full"
          variant={side === "buy" ? "default" : "destructive"}
        >
          {side === "buy" ? "Buy" : "Sell"} {symbol}
        </Button>
      </CardContent>
    </Card>
  );
}
