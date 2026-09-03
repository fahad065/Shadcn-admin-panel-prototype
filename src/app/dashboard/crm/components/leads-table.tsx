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

type LeadStatus = "Success" | "Processing" | "Failed" | "Pending";

type Lead = {
  name: string;
  email: string;
  company: string;
  source: string;
  status: LeadStatus;
  amount: string;
  date: string;
};

const leads: Lead[] = [
  { name: "Kenneth Thompson", email: "ken.thompson@northwind.com", company: "Northwind Traders", source: "Website", status: "Success", amount: "$316.00", date: "Aug 19, 2026" },
  { name: "Abigail Reyes", email: "abigail.reyes@fabrikam.com", company: "Fabrikam Inc.", source: "Referral", status: "Success", amount: "$242.00", date: "Aug 17, 2026" },
  { name: "Marisol Rodriguez", email: "marisol.r@contoso.com", company: "Contoso Ltd.", source: "LinkedIn", status: "Processing", amount: "$837.00", date: "Aug 15, 2026" },
  { name: "Silas Johnson", email: "silas.johnson@adventure-works.com", company: "Adventure Works", source: "Ads", status: "Success", amount: "$874.00", date: "Aug 12, 2026" },
  { name: "Carmella DeVito", email: "carmella.devito@tailspin.com", company: "Tailspin Toys", source: "Website", status: "Failed", amount: "$721.00", date: "Aug 10, 2026" },
  { name: "Maria Garcia", email: "maria.garcia@wideworld.com", company: "Wide World Importers", source: "Referral", status: "Pending", amount: "$529.00", date: "Aug 8, 2026" },
  { name: "James Wilson", email: "james.wilson@proseware.com", company: "Proseware Inc.", source: "LinkedIn", status: "Processing", amount: "$438.00", date: "Aug 5, 2026" },
];

const statusStyles: Record<LeadStatus, string> = {
  Success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Processing: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Failed: "bg-destructive/10 text-destructive",
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

const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "Lead",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">
            {initials(row.original.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{row.original.name}</p>
          <p className="text-xs text-muted-foreground">{row.original.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "source",
    header: "Source",
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
          <DropdownMenuItem>View lead</DropdownMenuItem>
          <DropdownMenuItem>Edit lead</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete lead</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function LeadsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={leads} pageSize={7} itemLabel="leads" />
      </CardContent>
    </Card>
  );
}
