"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

type ActivityType = "Buy" | "Sell" | "Send" | "Receive";
type ActivityStatus = "Completed" | "Pending" | "Failed";

type Activity = {
  type: ActivityType;
  asset: string;
  symbol: string;
  amount: string;
  value: string;
  date: string;
  status: ActivityStatus;
};

const activities: Activity[] = [
  { type: "Buy", asset: "Bitcoin", symbol: "BTC", amount: "0.042 BTC", value: "$3,051.30", date: "Sep 2, 2026", status: "Completed" },
  { type: "Sell", asset: "Ethereum", symbol: "ETH", amount: "1.250 ETH", value: "$4,265.25", date: "Sep 1, 2026", status: "Completed" },
  { type: "Receive", asset: "Avalanche", symbol: "AVAX", amount: "42.000 AVAX", value: "$1,169.70", date: "Aug 31, 2026", status: "Pending" },
  { type: "Send", asset: "Bitcoin", symbol: "BTC", amount: "0.015 BTC", value: "$1,089.75", date: "Aug 29, 2026", status: "Completed" },
  { type: "Buy", asset: "Tether", symbol: "USDT", amount: "5,000.00 USDT", value: "$5,000.00", date: "Aug 27, 2026", status: "Failed" },
  { type: "Sell", asset: "Avalanche", symbol: "AVAX", amount: "18.400 AVAX", value: "$512.44", date: "Aug 24, 2026", status: "Completed" },
  { type: "Receive", asset: "Ethereum", symbol: "ETH", amount: "0.680 ETH", value: "$2,320.30", date: "Aug 22, 2026", status: "Completed" },
  { type: "Send", asset: "Tether", symbol: "USDT", amount: "1,200.00 USDT", value: "$1,200.00", date: "Aug 19, 2026", status: "Pending" },
];

const typeStyles: Record<ActivityType, string> = {
  Buy: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Sell: "bg-destructive/10 text-destructive",
  Send: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Receive: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

const statusStyles: Record<ActivityStatus, string> = {
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Failed: "bg-destructive/10 text-destructive",
};

const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <Badge variant="secondary" className={typeStyles[row.original.type]}>
        {row.original.type}
      </Badge>
    ),
  },
  {
    accessorKey: "asset",
    header: "Asset",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-[11px] font-semibold">
            {row.original.symbol.slice(0, 3)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{row.original.asset}</p>
          <p className="text-xs text-muted-foreground">{row.original.symbol}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="secondary" className={cn(statusStyles[row.original.status])}>
        {row.original.status}
      </Badge>
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
          <DropdownMenuItem>View details</DropdownMenuItem>
          <DropdownMenuItem>Download receipt</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function RecentActivitiesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={activities} pageSize={8} itemLabel="activities" />
      </CardContent>
    </Card>
  );
}
