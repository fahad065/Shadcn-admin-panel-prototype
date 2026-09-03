import { ArrowDownLeft, ArrowUpRight, Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { formatCurrency, latestTransactions, upcomingTransactions } from "./data";

export function TransactionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="latest">
          <TabsList>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>

          <TabsContent value="latest" className="mt-4">
            <div className="flex flex-col divide-y divide-border">
              {latestTransactions.map((transaction) => {
                const isCredit = transaction.amount >= 0;
                return (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full",
                          isCredit
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {isCredit ? (
                          <ArrowDownLeft className="size-4" />
                        ) : (
                          <ArrowUpRight className="size-4" />
                        )}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.counterparty} · {transaction.date}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium tabular-nums",
                        isCredit
                          ? "text-emerald-600 dark:text-emerald-500"
                          : "text-foreground"
                      )}
                    >
                      {formatCurrency(transaction.amount, transaction.currency)}
                    </span>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-4">
            <div className="flex flex-col divide-y divide-border">
              {upcomingTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Clock className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.counterparty} · Scheduled {transaction.date}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium tabular-nums text-foreground">
                    {formatCurrency(transaction.amount, transaction.currency)}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
