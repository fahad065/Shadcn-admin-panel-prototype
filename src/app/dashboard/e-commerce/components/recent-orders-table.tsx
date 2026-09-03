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

type OrderStatus = "Delivered" | "Processing" | "Cancelled" | "Pending";

type Order = {
  id: string;
  customer: string;
  email: string;
  product: string;
  status: OrderStatus;
  amount: string;
  date: string;
};

const orders: Order[] = [
  { id: "ORD-8231", customer: "Renata Voss", email: "renata.voss@brightloop.io", product: "Aurora Wireless Earbuds", status: "Delivered", amount: "$129.00", date: "Aug 28, 2026" },
  { id: "ORD-8230", customer: "Desmond Okafor", email: "d.okafor@meridianco.com", product: "Nimbus Standing Desk", status: "Processing", amount: "$449.00", date: "Aug 27, 2026" },
  { id: "ORD-8229", customer: "Priya Chandrasekaran", email: "priya.c@fernwaydesign.com", product: "Drift Ceramic Mug Set ×2", status: "Delivered", amount: "$60.00", date: "Aug 26, 2026" },
  { id: "ORD-8228", customer: "Mateo Alaniz", email: "mateo.alaniz@sundriftlabs.com", product: "Pulse Fitness Tracker", status: "Pending", amount: "$89.00", date: "Aug 25, 2026" },
  { id: "ORD-8227", customer: "Ingrid Bosch", email: "ingrid.bosch@cloverfield.co", product: "Solace Weighted Blanket", status: "Cancelled", amount: "$79.00", date: "Aug 24, 2026" },
  { id: "ORD-8226", customer: "Tobias Reinholt", email: "t.reinholt@northgatehq.com", product: "Aurora Wireless Earbuds ×2", status: "Delivered", amount: "$258.00", date: "Aug 23, 2026" },
  { id: "ORD-8225", customer: "Yumi Sato", email: "yumi.sato@paperlanternco.com", product: "Nimbus Standing Desk", status: "Processing", amount: "$449.00", date: "Aug 22, 2026" },
  { id: "ORD-8224", customer: "Callum Ferreira", email: "callum.f@brightloop.io", product: "Pulse Fitness Tracker ×2", status: "Delivered", amount: "$178.00", date: "Aug 20, 2026" },
];

const statusStyles: Record<OrderStatus, string> = {
  Delivered: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Processing: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Cancelled: "bg-destructive/10 text-destructive",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order",
    cell: ({ row }) => <span className="font-medium">{row.original.id}</span>,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">
            {initials(row.original.customer)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{row.original.customer}</p>
          <p className="text-xs text-muted-foreground">{row.original.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "product",
    header: "Product",
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
    accessorKey: "amount",
    header: "Amount",
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
          <DropdownMenuItem>View order</DropdownMenuItem>
          <DropdownMenuItem>Edit order</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete order</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function RecentOrdersTable() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={orders} pageSize={8} itemLabel="orders" />
      </CardContent>
    </Card>
  );
}
