"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, MoreHorizontal, SlidersHorizontal } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Role = "Admin" | "Developer" | "Analyst" | "Viewer";

type MemberUsage = {
  name: string;
  email: string;
  role: Role;
  requests: string;
  tokens: string;
  cost: string;
  change: { value: string; positive: boolean };
};

const memberUsage: MemberUsage[] = [
  { name: "Priya Natarajan", email: "priya.n@litware.com", role: "Admin", requests: "18,420", tokens: "6.8M", cost: "$2,614.80", change: { value: "+14.2%", positive: true } },
  { name: "Oscar Bennett", email: "oscar.bennett@northwind.com", role: "Developer", requests: "15,760", tokens: "5.9M", cost: "$2,241.30", change: { value: "+9.6%", positive: true } },
  { name: "Freya Lindqvist", email: "freya.lindqvist@contoso.com", role: "Developer", requests: "12,980", tokens: "4.7M", cost: "$1,806.55", change: { value: "-3.1%", positive: false } },
  { name: "Devon Marsh", email: "devon.marsh@fabrikam.com", role: "Analyst", requests: "9,340", tokens: "3.2M", cost: "$1,214.90", change: { value: "+6.8%", positive: true } },
  { name: "Marisol Rodriguez", email: "marisol.r@contoso.com", role: "Analyst", requests: "7,610", tokens: "2.6M", cost: "$986.40", change: { value: "-1.4%", positive: false } },
  { name: "Silas Johnson", email: "silas.johnson@adventure-works.com", role: "Viewer", requests: "4,280", tokens: "1.4M", cost: "$512.75", change: { value: "+2.3%", positive: true } },
  { name: "Carmella DeVito", email: "carmella.devito@tailspin.com", role: "Developer", requests: "3,915", tokens: "1.2M", cost: "$447.20", change: { value: "-8.7%", positive: false } },
];

const roleStyles: Record<Role, string> = {
  Admin: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Developer: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Analyst: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Viewer: "bg-muted text-muted-foreground",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const columns: ColumnDef<MemberUsage>[] = [
  {
    accessorKey: "name",
    header: "User",
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
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <Badge variant="secondary" className={roleStyles[row.original.role]}>
        {row.original.role}
      </Badge>
    ),
  },
  {
    accessorKey: "requests",
    header: "Requests",
  },
  {
    accessorKey: "tokens",
    header: "Tokens",
  },
  {
    accessorKey: "cost",
    header: "Cost",
  },
  {
    accessorKey: "change",
    header: "Change",
    cell: ({ row }) => {
      const { change } = row.original;
      return (
        <span
          className={cn(
            "flex items-center gap-0.5 text-sm font-medium",
            change.positive ? "text-emerald-600 dark:text-emerald-500" : "text-destructive"
          )}
        >
          {change.positive ? (
            <ArrowUp className="size-3" />
          ) : (
            <ArrowDown className="size-3" />
          )}
          {change.value}
        </span>
      );
    },
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
          <DropdownMenuItem>View usage</DropdownMenuItem>
          <DropdownMenuItem>Export report</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Revoke access</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function MemberUsageTable() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Member Usage</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={memberUsage} pageSize={7} itemLabel="members" />
      </CardContent>
    </Card>
  );
}
