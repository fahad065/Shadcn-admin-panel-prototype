"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Priority = "High" | "Medium" | "Low";

type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  due: string;
  done: boolean;
};

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Follow up with Acme Inc.",
    description: "Send proposal and schedule meeting",
    priority: "High",
    due: "Due Today",
    done: false,
  },
  {
    id: "2",
    title: "Prepare quarterly report",
    description: "Compile sales data and forecasts",
    priority: "Medium",
    due: "Due Tomorrow",
    done: false,
  },
  {
    id: "3",
    title: "Update customer profiles",
    description: "Verify contact information and preferences",
    priority: "Low",
    due: "Due Oct 15",
    done: true,
  },
];

const priorityStyles: Record<Priority, string> = {
  High: "bg-destructive/10 text-destructive",
  Medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Low: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
};

export function TasksCard() {
  const [tasks, setTasks] = React.useState(initialTasks);

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardAction>
          <Button size="sm" className="gap-1.5">
            <Plus className="size-3.5" />
            Add Task
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3">
            <Checkbox
              checked={task.done}
              onCheckedChange={() => toggle(task.id)}
              className="mt-0.5"
            />
            <div className="flex-1">
              <p
                className={cn(
                  "text-sm font-medium",
                  task.done && "text-muted-foreground line-through"
                )}
              >
                {task.title}
              </p>
              <p
                className={cn(
                  "text-xs text-muted-foreground",
                  task.done && "line-through"
                )}
              >
                {task.description}
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <Badge variant="secondary" className={cn("text-[11px]", priorityStyles[task.priority])}>
                  {task.priority}
                </Badge>
                <span className="text-xs text-muted-foreground">{task.due}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
