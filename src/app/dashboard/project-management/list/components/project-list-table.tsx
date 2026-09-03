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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

type Status = "Planning" | "In Progress" | "On Hold" | "Delayed" | "Completed";
type Priority = "Low" | "Medium" | "High" | "Urgent";

type ProjectRow = {
  project: string;
  client: string;
  status: Status;
  priority: Priority;
  start: string;
  deadline: string;
  progress: number;
};

const projects: ProjectRow[] = [
  { project: "Atlas CRM Platform Migration", client: "Renata Souza", status: "In Progress", priority: "High", start: "Jan 12, 2026", deadline: "Apr 24, 2026", progress: 64 },
  { project: "Northbay Logistics Portal", client: "Elias Whitfield", status: "Planning", priority: "Medium", start: "Mar 03, 2026", deadline: "Jul 15, 2026", progress: 8 },
  { project: "Summit Health Patient App", client: "Farah Al-Amin", status: "In Progress", priority: "Urgent", start: "Feb 09, 2026", deadline: "Apr 02, 2026", progress: 78 },
  { project: "Beacon Payroll Revamp", client: "Marcus Idowu", status: "Completed", priority: "Medium", start: "Nov 04, 2025", deadline: "Jan 30, 2026", progress: 100 },
  { project: "Coastal Retail POS Rollout", client: "Ingrid Solheim", status: "Delayed", priority: "High", start: "Dec 15, 2025", deadline: "Mar 05, 2026", progress: 46 },
  { project: "Vertex Analytics Dashboard", client: "Dmitri Volkov", status: "In Progress", priority: "Medium", start: "Feb 22, 2026", deadline: "May 18, 2026", progress: 52 },
  { project: "Harbor Fleet Maintenance Tool", client: "Chiara Bianchi", status: "On Hold", priority: "Low", start: "Jan 28, 2026", deadline: "Jun 10, 2026", progress: 22 },
  { project: "Meridian Onboarding Suite", client: "Tariq Farouk", status: "Planning", priority: "Medium", start: "Mar 20, 2026", deadline: "Aug 01, 2026", progress: 4 },
  { project: "Sable Loyalty Rewards Engine", client: "Yeon-Ji Park", status: "Completed", priority: "High", start: "Oct 07, 2025", deadline: "Dec 19, 2025", progress: 100 },
  { project: "Ironwood Compliance Tracker", client: "Bridget O'Connell", status: "In Progress", priority: "Urgent", start: "Feb 02, 2026", deadline: "Mar 28, 2026", progress: 71 },
  { project: "Cobalt Field Service App", client: "Nnamdi Eze", status: "Delayed", priority: "Medium", start: "Jan 05, 2026", deadline: "Apr 10, 2026", progress: 33 },
  { project: "Willowmere Booking Engine", client: "Sofia Marchetti", status: "On Hold", priority: "Low", start: "Dec 01, 2025", deadline: "May 22, 2026", progress: 18 },
];

const statusStyles: Record<Status, string> = {
  Planning: "bg-muted text-muted-foreground",
  "In Progress": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "On Hold": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Delayed: "bg-destructive/10 text-destructive",
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
};

const priorityStyles: Record<Priority, string> = {
  Low: "border-border text-foreground",
  Medium: "border-blue-500/30 text-blue-600 dark:text-blue-400",
  High: "border-amber-500/30 text-amber-600 dark:text-amber-400",
  Urgent: "border-destructive/30 text-destructive",
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="secondary" className={statusStyles[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => (
      <Badge variant="outline" className={priorityStyles[row.original.priority]}>
        {row.original.priority}
      </Badge>
    ),
  },
  {
    accessorKey: "start",
    header: "Start Date",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
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
          <DropdownMenuItem>Duplicate project</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete project</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function ProjectListTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={projects} pageSize={8} itemLabel="projects" />
      </CardContent>
    </Card>
  );
}
