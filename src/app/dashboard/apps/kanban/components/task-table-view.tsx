"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { cn } from "@/lib/utils";

import { columns, priorityStyles } from "./data";
import type { Task } from "./types";

function columnTitle(columnId: string) {
  return columns.find((column) => column.id === columnId)?.title ?? columnId;
}

const tableColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Task",
    cell: ({ row }) => (
      <div>
        <p className="text-sm font-medium">{row.original.title}</p>
        <p className="line-clamp-1 text-xs text-muted-foreground">
          {row.original.description}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "columnId",
    header: "Column",
    cell: ({ row }) => (
      <Badge variant="secondary">{columnTitle(row.original.columnId)}</Badge>
    ),
  },
  {
    id: "assignee",
    header: "Assignee",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <Avatar size="sm">
          <AvatarFallback className="text-[10px]">
            {row.original.assignee.initials}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm">{row.original.assignee.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => (
      <Badge variant="secondary" className={cn(priorityStyles[row.original.priority])}>
        {row.original.priority}
      </Badge>
    ),
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.dueDate ?? "—"}
      </span>
    ),
  },
];

export function TaskTableView({ tasks }: { tasks: Task[] }) {
  return (
    <Card>
      <CardContent>
        <DataTable columns={tableColumns} data={tasks} pageSize={10} itemLabel="tasks" />
      </CardContent>
    </Card>
  );
}
