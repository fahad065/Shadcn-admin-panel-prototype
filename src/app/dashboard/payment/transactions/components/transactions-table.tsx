"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Ban, Download, Eye, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import {
  currencyMeta,
  formatAmount,
  transactions,
  type LedgerTransaction,
  type TransactionCurrency,
  type TransactionStatus,
} from "./data";

const statusStyles: Record<TransactionStatus, string> = {
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Failed: "bg-destructive/10 text-destructive",
};

const currencyCodes = Object.keys(currencyMeta) as TransactionCurrency[];

const columns: ColumnDef<LedgerTransaction>[] = [
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div>
        <p className="text-sm font-medium">{row.original.description}</p>
        <p className="text-xs text-muted-foreground">{row.original.counterparty}</p>
      </div>
    ),
  },
  {
    accessorKey: "currency",
    header: "Currency",
    cell: ({ row }) => (
      <Badge variant="secondary" className="gap-1">
        <span>{currencyMeta[row.original.currency].flag}</span>
        {row.original.currency}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const isCredit = row.original.amount >= 0;
      return (
        <span
          className={cn(
            "text-sm font-medium tabular-nums",
            isCredit ? "text-emerald-600 dark:text-emerald-500" : "text-destructive"
          )}
        >
          {formatAmount(row.original.amount, row.original.currency)}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="secondary" className={statusStyles[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.date}</span>
    ),
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
          <DropdownMenuItem>
            <Eye className="size-4" />
            View transaction
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Download className="size-4" />
            Download receipt
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Ban className="size-4" />
            Flag as disputed
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function TransactionsTable() {
  const [statusFilter, setStatusFilter] = useState<"all" | TransactionStatus>("all");
  const [currencyFilter, setCurrencyFilter] = useState<"all" | TransactionCurrency>("all");

  const filteredData = useMemo(
    () =>
      transactions.filter(
        (transaction) =>
          (statusFilter === "all" || transaction.status === statusFilter) &&
          (currencyFilter === "all" || transaction.currency === currencyFilter)
      ),
    [statusFilter, currencyFilter]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Transactions</CardTitle>
        <CardAction className="flex flex-wrap items-center gap-2">
          <Tabs
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value as "all" | TransactionStatus)}
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Completed">Completed</TabsTrigger>
              <TabsTrigger value="Pending">Pending</TabsTrigger>
              <TabsTrigger value="Failed">Failed</TabsTrigger>
            </TabsList>
          </Tabs>
          <Select
            value={currencyFilter}
            onValueChange={(value) => setCurrencyFilter(value as "all" | TransactionCurrency)}
          >
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All currencies</SelectItem>
              {currencyCodes.map((code) => (
                <SelectItem key={code} value={code}>
                  {currencyMeta[code].flag} {code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={filteredData} pageSize={10} itemLabel="transactions" />
      </CardContent>
    </Card>
  );
}
