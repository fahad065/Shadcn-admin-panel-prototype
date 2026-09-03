"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { SlidersHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";

type OrderStatus = "New Order" | "On Progress" | "Completed" | "Return";

type Order = {
  id: string;
  customer: string;
  qty: number;
  amount: string;
  payment: string;
  status: OrderStatus;
};

const orders: Order[] = [
  { id: "#ORD-7241", customer: "Nathaniel Cross", qty: 3, amount: "$214.00", payment: "Credit Card", status: "Completed" },
  { id: "#ORD-7242", customer: "Bianca Alcaraz", qty: 1, amount: "$58.00", payment: "PayPal", status: "New Order" },
  { id: "#ORD-7243", customer: "Owen Delacroix", qty: 5, amount: "$342.50", payment: "Bank Transfer", status: "On Progress" },
  { id: "#ORD-7244", customer: "Freya Lindholm", qty: 2, amount: "$126.00", payment: "Credit Card", status: "Completed" },
  { id: "#ORD-7245", customer: "Desmond Okoye", qty: 1, amount: "$74.99", payment: "Debit Card", status: "Return" },
  { id: "#ORD-7246", customer: "Camille Fontaine", qty: 4, amount: "$268.00", payment: "PayPal", status: "New Order" },
  { id: "#ORD-7247", customer: "Rutger van Dijk", qty: 2, amount: "$149.00", payment: "Credit Card", status: "Completed" },
  { id: "#ORD-7248", customer: "Aiyana Whitehorse", qty: 6, amount: "$412.30", payment: "Bank Transfer", status: "On Progress" },
  { id: "#ORD-7249", customer: "Kenneth Thompson", qty: 1, amount: "$39.90", payment: "Debit Card", status: "Completed" },
  { id: "#ORD-7250", customer: "Abigail Reyes", qty: 3, amount: "$187.50", payment: "Credit Card", status: "New Order" },
  { id: "#ORD-7251", customer: "Marisol Rodriguez", qty: 2, amount: "$96.00", payment: "PayPal", status: "Completed" },
  { id: "#ORD-7252", customer: "Silas Johnson", qty: 4, amount: "$301.20", payment: "Credit Card", status: "On Progress" },
  { id: "#ORD-7253", customer: "Carmella DeVito", qty: 1, amount: "$54.00", payment: "Debit Card", status: "Return" },
  { id: "#ORD-7254", customer: "Maria Garcia", qty: 3, amount: "$228.75", payment: "Bank Transfer", status: "Completed" },
  { id: "#ORD-7255", customer: "James Wilson", qty: 2, amount: "$118.40", payment: "Credit Card", status: "New Order" },
  { id: "#ORD-7256", customer: "Priya Nair", qty: 5, amount: "$356.00", payment: "PayPal", status: "Completed" },
];

const statusStyles: Record<OrderStatus, string> = {
  "New Order": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "On Progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Return: "bg-destructive/10 text-destructive",
};

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <span className="font-medium">{row.original.id}</span>,
  },
  {
    accessorKey: "customer",
    header: "Customer Name",
  },
  {
    accessorKey: "qty",
    header: "Qty Items",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "payment",
    header: "Payment Method",
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
];

export function OrdersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={orders} pageSize={6} itemLabel="orders" />
      </CardContent>
    </Card>
  );
}
