"use client";

import { Plus } from "lucide-react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { TaskCard } from "./task-card";
import type { Column, Task } from "./types";

export function KanbanColumn({
  column,
  tasks,
  onAddTask,
}: {
  column: Column;
  tasks: Task[];
  onAddTask: (columnId: string) => void;
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
    data: { type: "column", columnId: column.id },
  });

  return (
    <div className="flex w-72 shrink-0 flex-col gap-3 sm:w-80">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold">{column.title}</h2>
          <Badge variant="secondary" className="rounded-full">
            {tasks.length}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Add task to ${column.title}`}
          onClick={() => onAddTask(column.id)}
        >
          <Plus className="size-4" />
        </Button>
      </div>

      <div
        ref={setNodeRef}
        className={cn(
          "flex min-h-24 flex-1 flex-col gap-2 rounded-lg border border-transparent bg-muted/50 p-2 transition-colors",
          isOver && "border-primary/40 bg-muted"
        )}
      >
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>

        {tasks.length === 0 ? (
          <div className="flex flex-1 items-center justify-center rounded-md border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
            Drop tasks here
          </div>
        ) : null}
      </div>
    </div>
  );
}
