"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type CountrySales = {
  country: string;
  flag: string;
  sales: string;
  orders: string;
  share: string;
};

const countries: CountrySales[] = [
  { country: "United States", flag: "🇺🇸", sales: "$48,920", orders: "1,284", share: "34%" },
  { country: "Brazil", flag: "🇧🇷", sales: "$27,340", orders: "812", share: "19%" },
  { country: "India", flag: "🇮🇳", sales: "$22,980", orders: "940", share: "16%" },
  { country: "Germany", flag: "🇩🇪", sales: "$18,760", orders: "526", share: "13%" },
  { country: "United Kingdom", flag: "🇬🇧", sales: "$14,320", orders: "398", share: "10%" },
  { country: "Canada", flag: "🇨🇦", sales: "$11,480", orders: "344", share: "8%" },
];

const columns: ColumnDef<CountrySales>[] = [
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => (
      <span className="flex items-center gap-2 font-medium">
        <span className="text-base">{row.original.flag}</span>
        {row.original.country}
      </span>
    ),
  },
  {
    accessorKey: "sales",
    header: "Sales",
  },
  {
    accessorKey: "orders",
    header: "Orders",
  },
  {
    accessorKey: "share",
    header: "Share",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.share}</span>
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
          <DropdownMenuItem>View country report</DropdownMenuItem>
          <DropdownMenuItem>Export data</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Exclude region</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function SalesByCountriesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Countries</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={countries} pageSize={6} itemLabel="countries" />
      </CardContent>
    </Card>
  );
}
