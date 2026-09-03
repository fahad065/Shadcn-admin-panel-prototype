import { CreditCard, Landmark, PiggyBank, Plane, type LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type WalletCard = {
  name: string;
  purpose: string;
  masked: string;
  balance: string;
  network: string;
  icon: LucideIcon;
  bg: string;
  badge: string;
};

const wallets: WalletCard[] = [
  {
    name: "Primary Checking",
    purpose: "Everyday spending",
    masked: "•••• 4521",
    balance: "$8,240.50",
    network: "Visa",
    icon: CreditCard,
    bg: "from-blue-500/10",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Business Account",
    purpose: "Client invoices",
    masked: "•••• 7734",
    balance: "$15,120.00",
    network: "Mastercard",
    icon: Landmark,
    bg: "from-violet-500/10",
    badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    name: "Savings Pocket",
    purpose: "Rainy-day fund",
    masked: "•••• 2290",
    balance: "$22,900.75",
    network: "Visa",
    icon: PiggyBank,
    bg: "from-emerald-500/10",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  },
  {
    name: "Travel Card",
    purpose: "Trips & bookings",
    masked: "•••• 9081",
    balance: "$1,340.25",
    network: "Mastercard",
    icon: Plane,
    bg: "from-amber-500/10",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-500",
  },
];

export function MyWallet() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Wallet</CardTitle>
        <CardDescription>Balances across your linked cards and accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {wallets.map((wallet) => {
            const Icon = wallet.icon;
            return (
              <div
                key={wallet.name}
                className={cn(
                  "flex flex-col gap-4 rounded-xl border border-border bg-gradient-to-br to-transparent p-4",
                  wallet.bg
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-md",
                      wallet.badge
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {wallet.network}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{wallet.name}</p>
                  <p className="text-xs text-muted-foreground">{wallet.purpose}</p>
                </div>
                <div>
                  <p className="font-mono text-sm tracking-widest text-muted-foreground">
                    {wallet.masked}
                  </p>
                  <p className="mt-1 text-xl font-semibold tabular-nums">{wallet.balance}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
