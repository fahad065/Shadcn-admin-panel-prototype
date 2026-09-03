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

type PaymentStatus = "Paid" | "Pending" | "Refunded" | "Failed";

type Payment = {
  name: string;
  email: string;
  amount: string;
  status: PaymentStatus;
};

const payments: Payment[] = [
  { name: "Kenneth Thompson", email: "ken.thompson@northwind.com", amount: "$1,240.00", status: "Paid" },
  { name: "Abigail Reyes", email: "abigail.reyes@fabrikam.com", amount: "$680.50", status: "Paid" },
  { name: "Marisol Rodriguez", email: "marisol.r@contoso.com", amount: "$2,315.00", status: "Pending" },
  { name: "Silas Johnson", email: "silas.johnson@adventure-works.com", amount: "$412.90", status: "Paid" },
  { name: "Carmella DeVito", email: "carmella.devito@tailspin.com", amount: "$156.00", status: "Refunded" },
  { name: "Maria Garcia", email: "maria.garcia@wideworld.com", amount: "$899.00", status: "Failed" },
  { name: "James Wilson", email: "james.wilson@proseware.com", amount: "$1,050.25", status: "Paid" },
  { name: "Priya Natarajan", email: "priya.n@litware.com", amount: "$540.00", status: "Pending" },
];

const statusStyles: Record<PaymentStatus, string> = {
  Paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Refunded: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Failed: "bg-destructive/10 text-destructive",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">
            {initials(row.original.name)}
          </AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">{row.original.name}</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.email}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
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
          <DropdownMenuItem>View payment</DropdownMenuItem>
          <DropdownMenuItem>Send receipt</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Refund payment</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function LatestPaymentsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Payments</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={payments} pageSize={8} itemLabel="payments" />
      </CardContent>
    </Card>
  );
}
