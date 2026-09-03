"use client";

import { CalendarIcon } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { priorityStyles } from "./data";
import type { Task } from "./types";

export function TaskCardContent({ task }: { task: Task }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-card p-3 text-card-foreground shadow-xs ring-1 ring-foreground/10">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium leading-snug">{task.title}</p>
        <Badge
          variant="secondary"
          className={cn("shrink-0", priorityStyles[task.priority])}
        >
          {task.priority}
        </Badge>
      </div>

      <p className="line-clamp-2 text-xs text-muted-foreground">
        {task.description}
      </p>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5">
          <Avatar size="sm">
            <AvatarFallback className="text-[10px]">
              {task.assignee.initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">
            {task.assignee.name.split(" ")[0]}
          </span>
        </div>

        {task.dueDate ? (
          <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] text-muted-foreground ring-1 ring-border">
            <CalendarIcon className="size-3" />
            {task.dueDate}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function TaskCard({ task }: { task: Task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: { type: "task", columnId: task.columnId },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "touch-none cursor-grab active:cursor-grabbing",
        isDragging && "opacity-50"
      )}
    >
      <TaskCardContent task={task} />
    </div>
  );
}
