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
import { Progress } from "@/components/ui/progress";

type Status = "Active" | "Completed" | "Pending" | "Cancelled";

type ProjectRow = {
  project: string;
  client: string;
  start: string;
  deadline: string;
  status: Status;
  progress: number;
};

const projects: ProjectRow[] = [
  { project: "Storefront Redesign", client: "Anita Kapoor", start: "Mar 02, 2026", deadline: "Apr 18, 2026", status: "Active", progress: 55 },
  { project: "Warehouse Expansion", client: "Derek Holloway", start: "Feb 20, 2026", deadline: "May 30, 2026", status: "Active", progress: 40 },
  { project: "Mobile Banking App", client: "Yuki Tanaka", start: "Jan 15, 2026", deadline: "Mar 10, 2026", status: "Completed", progress: 100 },
  { project: "Brand Refresh", client: "Lucia Fernandez", start: "Feb 28, 2026", deadline: "Mar 22, 2026", status: "Completed", progress: 100 },
  { project: "Internal Wiki Migration", client: "Tom Bradley", start: "Mar 10, 2026", deadline: "Apr 05, 2026", status: "Pending", progress: 15 },
  { project: "Customer Loyalty Portal", client: "Priya Nair", start: "Jan 28, 2026", deadline: "Jun 12, 2026", status: "Active", progress: 62 },
  { project: "Regional Ad Campaign", client: "Noah Bennett", start: "Mar 05, 2026", deadline: "Mar 25, 2026", status: "Cancelled", progress: 20 },
  { project: "Vendor Onboarding Tool", client: "Hana Kimura", start: "Feb 12, 2026", deadline: "Apr 30, 2026", status: "Active", progress: 48 },
  { project: "Data Center Migration", client: "Samuel Osei", start: "Jan 08, 2026", deadline: "Feb 20, 2026", status: "Completed", progress: 100 },
  { project: "Employee Wellness App", client: "Claire Dubois", start: "Mar 18, 2026", deadline: "May 05, 2026", status: "Pending", progress: 10 },
  { project: "Quarterly Audit Prep", client: "Victor Lindqvist", start: "Feb 01, 2026", deadline: "Feb 28, 2026", status: "Cancelled", progress: 35 },
  { project: "Loyalty Rewards Revamp", client: "Meera Chandrasekaran", start: "Mar 22, 2026", deadline: "Jun 30, 2026", status: "Active", progress: 25 },
];

const statusStyles: Record<Status, string> = {
  Active: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Cancelled: "bg-destructive/10 text-destructive",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const columns: ColumnDef<ProjectRow>[] = [
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => <span className="text-sm font-medium">{row.original.project}</span>,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">{initials(row.original.client)}</AvatarFallback>
        </Avatar>
        <span className="text-sm">{row.original.client}</span>
      </div>
    ),
  },
  {
    accessorKey: "start",
    header: "Start",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
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
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Progress value={row.original.progress} className="w-20" />
        <span className="text-xs text-muted-foreground">{row.original.progress}%</span>
      </div>
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
          <DropdownMenuItem>View project</DropdownMenuItem>
          <DropdownMenuItem>Edit project</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Delete project</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function RecentProjectsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={projects} pageSize={6} itemLabel="projects" />
      </CardContent>
    </Card>
  );
}
