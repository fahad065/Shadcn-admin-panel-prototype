import { Plus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Wallet = {
  symbol: string;
  name: string;
  color: string;
  balance: string;
  value: string;
};

const wallets: Wallet[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    color: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
    balance: "0.842 BTC",
    value: "$61,171.30",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
    balance: "9.140 ETH",
    value: "$31,187.51",
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    color: "bg-red-500/15 text-red-600 dark:text-red-400",
    balance: "128.400 AVAX",
    value: "$3,577.94",
  },
];

export function DigitalWallets({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Digital Wallets</CardTitle>
        <CardDescription>Balances across your connected wallets</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Plus className="size-3.5" />
            Add Wallet
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {wallets.map((wallet) => (
          <div
            key={wallet.symbol}
            className="flex items-center justify-between gap-3 rounded-lg border p-3"
          >
            <div className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback className={cn("text-[11px] font-semibold", wallet.color)}>
                  {wallet.symbol.slice(0, 3)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{wallet.name}</p>
                <p className="text-xs text-muted-foreground">{wallet.balance}</p>
              </div>
            </div>
            <p className="text-sm font-medium">{wallet.value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
