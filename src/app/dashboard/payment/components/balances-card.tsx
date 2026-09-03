import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { balances } from "./data";

function formatAmount(amount: number) {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function BalancesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balances</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Plus className="size-3.5" />
            Add currency
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {balances.map((balance) => (
            <div
              key={balance.code}
              className="flex flex-col gap-2 rounded-lg border border-border p-4"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-lg leading-none">{balance.flag}</span>
                <span className="font-medium text-foreground">{balance.code}</span>
                <span>· {balance.label}</span>
              </div>
              <div className="text-xl font-semibold tabular-nums">
                {balance.symbol}
                {formatAmount(balance.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
