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

type CampaignStatus = "Active" | "Completed" | "Scheduled";

type Campaign = {
  name: string;
  sent: string;
  opens: string;
  clicks: string;
  subscriptions: string;
  status: CampaignStatus;
};

const campaigns: Campaign[] = [
  { name: "Autumn Product Launch", sent: "24,600", opens: "11,480", clicks: "3,240", subscriptions: "486", status: "Completed" },
  { name: "Weekly Newsletter #42", sent: "18,920", opens: "9,860", clicks: "2,150", subscriptions: "214", status: "Completed" },
  { name: "Black Friday Teaser", sent: "32,140", opens: "17,760", clicks: "6,480", subscriptions: "892", status: "Active" },
  { name: "Customer Win-back", sent: "9,480", opens: "3,120", clicks: "640", subscriptions: "78", status: "Completed" },
  { name: "Feature Announcement", sent: "15,260", opens: "7,940", clicks: "2,010", subscriptions: "165", status: "Scheduled" },
  { name: "Holiday Gift Guide", sent: "21,780", opens: "10,340", clicks: "3,860", subscriptions: "312", status: "Scheduled" },
];

const statusStyles: Record<CampaignStatus, string> = {
  Active: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Scheduled: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "name",
    header: "Campaign",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.name}</span>
    ),
  },
  {
    accessorKey: "opens",
    header: "Opens",
  },
  {
    accessorKey: "clicks",
    header: "Clicks",
  },
  {
    accessorKey: "subscriptions",
    header: "Subscriptions",
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
          <DropdownMenuItem>View campaign</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Archive campaign</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function CampaignMetricsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Metrics</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={campaigns} pageSize={6} itemLabel="campaigns" />
      </CardContent>
    </Card>
  );
}
