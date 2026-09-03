"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type TransactionCategory =
  | "Rent"
  | "Food"
  | "Transport"
  | "Utilities"
  | "Salary"
  | "Freelance"
  | "Investments"
  | "Other";

type Transaction = {
  description: string;
  category: TransactionCategory;
  amount: number;
  date: string;
};

const transactions: Transaction[] = [
  { description: "Monthly Salary", category: "Salary", amount: 6200, date: "Aug 30, 2026" },
  { description: "Riverside Apartments", category: "Rent", amount: -1800, date: "Aug 28, 2026" },
  { description: "Whole Foods Market", category: "Food", amount: -186.4, date: "Aug 25, 2026" },
  { description: "UX Audit for Northwind", category: "Freelance", amount: 950, date: "Aug 22, 2026" },
  { description: "City Metro Pass", category: "Transport", amount: -95, date: "Aug 20, 2026" },
  { description: "Pacific Power & Light", category: "Utilities", amount: -142.3, date: "Aug 18, 2026" },
  { description: "Streaming Subscriptions", category: "Other", amount: -47.98, date: "Aug 14, 2026" },
  { description: "Dividend Payout", category: "Investments", amount: 212.5, date: "Aug 11, 2026" },
  { description: "Client Retainer", category: "Freelance", amount: 1450, date: "Aug 6, 2026" },
  { description: "Downtown Parking Garage", category: "Transport", amount: -64.5, date: "Aug 4, 2026" },
];

const categoryStyles: Record<TransactionCategory, string> = {
  Rent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Food: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Transport: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Utilities: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  Salary: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Freelance: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Investments: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Other: "bg-muted text-muted-foreground",
};

function formatAmount(amount: number) {
  const formatted = Math.abs(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return amount >= 0 ? `+${formatted}` : `-${formatted}`;
}

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="text-sm font-medium">{row.original.description}</span>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="secondary" className={categoryStyles[row.original.category]}>
        {row.original.category}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span
        className={cn(
          "font-medium tabular-nums",
          row.original.amount >= 0
            ? "text-emerald-600 dark:text-emerald-500"
            : "text-destructive"
        )}
      >
        {formatAmount(row.original.amount)}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <MoreHorizontal className="size-4" />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View transaction</DropdownMenuItem>
          <DropdownMenuItem>Edit transaction</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete transaction</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function TransactionsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={transactions} pageSize={8} itemLabel="transactions" />
      </CardContent>
    </Card>
  );
}
