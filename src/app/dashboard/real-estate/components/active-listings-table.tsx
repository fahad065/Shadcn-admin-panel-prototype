"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Building2, Home, Landmark, MoreHorizontal, SlidersHorizontal, Trees } from "lucide-react";

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

type PropertyType = "House" | "Apartment" | "Villa" | "Land";
type ListingStatus = "Available" | "Pending" | "Sold";

type Listing = {
  property: string;
  location: string;
  type: PropertyType;
  cost: string;
  activeLeads: number;
  views: number;
  status: ListingStatus;
};

const listings: Listing[] = [
  { property: "Summer House", location: "Jakarta", type: "House", cost: "$655K", activeLeads: 18, views: 267, status: "Available" },
  { property: "Maple Court Apartments", location: "Bandung", type: "Apartment", cost: "$312K", activeLeads: 11, views: 184, status: "Available" },
  { property: "Cobalt Bay Villa", location: "Bali", type: "Villa", cost: "$2.1M", activeLeads: 24, views: 512, status: "Pending" },
  { property: "Greenfield Estate Lot 4", location: "Surabaya", type: "Land", cost: "$198K", activeLeads: 6, views: 96, status: "Available" },
  { property: "Riverside Heights #12B", location: "Yogyakarta", type: "Apartment", cost: "$276K", activeLeads: 9, views: 143, status: "Sold" },
  { property: "The Somerset House", location: "Jakarta", type: "House", cost: "$980K", activeLeads: 32, views: 645, status: "Available" },
  { property: "Hillcrest Manor", location: "Semarang", type: "Villa", cost: "$1.4M", activeLeads: 15, views: 298, status: "Pending" },
  { property: "Orchard Lane Plot 9", location: "Medan", type: "Land", cost: "$142K", activeLeads: 4, views: 71, status: "Sold" },
];

const statusStyles: Record<ListingStatus, string> = {
  Available: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Sold: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

const typeIcons: Record<PropertyType, typeof Home> = {
  House: Home,
  Apartment: Building2,
  Villa: Landmark,
  Land: Trees,
};

const columns: ColumnDef<Listing>[] = [
  {
    accessorKey: "property",
    header: "Property",
    cell: ({ row }) => {
      const Icon = typeIcons[row.original.type];
      return (
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-transparent">
            <Icon className="size-4 text-primary/70" />
          </span>
          <p className="text-sm font-medium">{row.original.property}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <Badge variant="outline">{row.original.type}</Badge>,
  },
  {
    accessorKey: "cost",
    header: "Cost",
  },
  {
    accessorKey: "activeLeads",
    header: "Active Leads",
  },
  {
    accessorKey: "views",
    header: "Views",
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
          <DropdownMenuItem>View listing</DropdownMenuItem>
          <DropdownMenuItem>Edit listing</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete listing</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function ActiveListingsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Listings</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={listings} pageSize={8} itemLabel="listings" />
      </CardContent>
    </Card>
  );
}
