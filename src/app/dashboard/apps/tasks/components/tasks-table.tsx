"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { Task, TaskPriority, TaskStatus } from "./tasks-view";

export type TaskColumnKey = "assignee" | "priority" | "dueDate";

const priorityStyles: Record<TaskPriority, string> = {
  Low: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  High: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  Urgent: "bg-destructive/10 text-destructive",
};

const statusStyles: Record<TaskStatus, string> = {
  Todo: "bg-muted text-muted-foreground",
  "In Progress": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "In Review": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Done: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
};

// Fixed reference date, matching the one used in tasks-view.tsx, so due
// dates render consistently against the sample data.
const TODAY_ISO = "2026-09-02";

function isOverdue(task: Task) {
  return task.status !== "Done" && task.dueDateISO < TODAY_ISO;
}

export function TasksTable({
  tasks,
  columnVisibility,
  onToggleComplete,
  onDuplicate,
  onDelete,
}: {
  tasks: Task[];
  columnVisibility: Record<TaskColumnKey, boolean>;
  onToggleComplete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const columns: ColumnDef<Task>[] = [
    {
      id: "complete",
      header: "",
      cell: ({ row }) => (
        <Checkbox
          checked={row.original.status === "Done"}
          onCheckedChange={() => onToggleComplete(row.original.id)}
          aria-label={
            row.original.status === "Done"
              ? `Mark "${row.original.title}" as not done`
              : `Mark "${row.original.title}" as done`
          }
        />
      ),
    },
    {
      accessorKey: "taskId",
      header: "Task",
      cell: ({ row }) => (
        <span className="font-mono text-xs text-muted-foreground">
          {row.original.taskId}
        </span>
      ),
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <p
          className={cn(
            "max-w-64 truncate text-sm font-medium",
            row.original.status === "Done" && "text-muted-foreground line-through"
          )}
        >
          {row.original.title}
        </p>
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
    ...(columnVisibility.priority
      ? [
          {
            accessorKey: "priority",
            header: "Priority",
            cell: ({ row }) => (
              <Badge variant="secondary" className={priorityStyles[row.original.priority]}>
                {row.original.priority}
              </Badge>
            ),
          } satisfies ColumnDef<Task>,
        ]
      : []),
    ...(columnVisibility.assignee
      ? [
          {
            accessorKey: "assignee",
            header: "Assignee",
            cell: ({ row }) => (
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback className="text-xs">
                    {row.original.assignee.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">{row.original.assignee.name}</span>
              </div>
            ),
          } satisfies ColumnDef<Task>,
        ]
      : []),
    ...(columnVisibility.dueDate
      ? [
          {
            accessorKey: "dueDate",
            header: "Due Date",
            cell: ({ row }) => (
              <div>
                <p className="text-sm">{row.original.dueDate}</p>
                {isOverdue(row.original) ? (
                  <p className="text-xs text-destructive">Overdue</p>
                ) : null}
              </div>
            ),
          } satisfies ColumnDef<Task>,
        ]
      : []),
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MoreHorizontal className="size-4" />
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Pencil className="size-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDuplicate(row.original.id)}>
              <Copy className="size-4" />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onClick={() => onDelete(row.original.id)}
            >
              <Trash2 className="size-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return <DataTable columns={columns} data={tasks} pageSize={25} itemLabel="tasks" />;
}
