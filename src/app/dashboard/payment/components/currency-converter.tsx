"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CONVERSION_RATES, CURRENCY_CODES } from "./exchange-rate-data";

function convert(amount: number, from: string, to: string) {
  const usdAmount = amount / CONVERSION_RATES[from];
  return usdAmount * CONVERSION_RATES[to];
}

export function CurrencyConverter() {
  const [amount, setAmount] = useState("1,000.00");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const numericAmount = Number(amount.replace(/,/g, "")) || 0;

  const converted = useMemo(
    () => convert(numericAmount, from, to),
    [numericAmount, from, to]
  );

  function handleSwap() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium">Currency converter</p>

      <div className="flex items-end gap-2">
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="convert-from-amount" className="text-xs text-muted-foreground">
            Amount
          </label>
          <Input
            id="convert-from-amount"
            inputMode="decimal"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <Select value={from} onValueChange={(value) => setFrom(String(value))}>
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CURRENCY_CODES.map((code) => (
              <SelectItem key={code} value={code}>
                {code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Swap currencies"
          onClick={handleSwap}
        >
          <ArrowLeftRight className="size-3.5" />
        </Button>
      </div>

      <div className="flex items-end gap-2">
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="convert-to-amount" className="text-xs text-muted-foreground">
            Converted
          </label>
          <Input
            id="convert-to-amount"
            readOnly
            value={converted.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
        </div>
        <Select value={to} onValueChange={(value) => setTo(String(value))}>
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CURRENCY_CODES.map((code) => (
              <SelectItem key={code} value={code}>
                {code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        1 {from} = {convert(1, from, to).toFixed(4)} {to}
      </p>
    </div>
  );
}
