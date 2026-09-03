"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { columns, priorityStyles } from "./data";
import type { Task } from "./types";

export function TaskListView({ tasks }: { tasks: Task[] }) {
  function columnTitle(columnId: string) {
    return columns.find((column) => column.id === columnId)?.title ?? columnId;
  }

  return (
    <Card>
      <CardContent className="flex flex-col divide-y divide-border px-0">
        {tasks.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-muted-foreground">
            No tasks yet.
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="shrink-0">
                  {columnTitle(task.columnId)}
                </Badge>
                <p className="text-sm font-medium">{task.title}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Avatar size="sm">
                    <AvatarFallback className="text-[10px]">
                      {task.assignee.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">
                    {task.assignee.name}
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className={cn("shrink-0", priorityStyles[task.priority])}
                >
                  {task.priority}
                </Badge>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
