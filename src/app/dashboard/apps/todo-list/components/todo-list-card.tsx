"use client";

import * as React from "react";
import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Priority = "High" | "Medium" | "Low";

type Status = "pending" | "in-progress" | "completed";

type Todo = {
  id: string;
  text: string;
  status: Status;
  priority: Priority;
};

type Filter = "all" | Status;

// The live app starts with an empty list — this is only kept around as a
// reference for what synthetic seed data could look like, it is not used
// to initialize state.
// const SAMPLE_TODOS: Todo[] = [
//   { id: "1", text: "Draft agenda for Monday standup", status: "pending", priority: "Medium" },
//   { id: "2", text: "Review pull requests from the team", status: "in-progress", priority: "High" },
//   { id: "3", text: "Water the office plants", status: "completed", priority: "Low" },
// ];

const initialTodos: Todo[] = [];

const priorityDotStyles: Record<Priority, string> = {
  High: "bg-destructive",
  Medium: "bg-amber-500",
  Low: "bg-emerald-500",
};

const statusMeta: Record<Status, { label: string; dotClassName: string }> = {
  pending: { label: "Pending", dotClassName: "bg-muted-foreground" },
  "in-progress": { label: "In Progress", dotClassName: "bg-amber-500" },
  completed: { label: "Completed", dotClassName: "bg-emerald-500" },
};

const filterLabels: Record<Filter, string> = {
  all: "tasks",
  pending: "pending tasks",
  "in-progress": "in-progress tasks",
  completed: "completed tasks",
};

export function TodoListCard() {
  const [todos, setTodos] = React.useState<Todo[]>(initialTodos);
  const [filter, setFilter] = React.useState<Filter>("all");
  const [draft, setDraft] = React.useState("");

  const pendingCount = todos.filter((todo) => todo.status === "pending").length;
  const inProgressCount = todos.filter((todo) => todo.status === "in-progress").length;
  const completedCount = todos.filter((todo) => todo.status === "completed").length;
  const remainingCount = pendingCount + inProgressCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    return todo.status === filter;
  });

  function addTodo() {
    const text = draft.trim();
    if (!text) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      status: "pending",
      priority: "Medium",
    };
    setTodos((prev) => [newTodo, ...prev]);
    setDraft("");
  }

  function updateStatus(id: string, status: Status) {
    setTodos((prev) => (prev.map((todo) => (todo.id === id ? { ...todo, status } : todo))));
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => todo.status !== "completed"));
  }

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addTodo();
              }
            }}
            placeholder="Add a new task..."
            aria-label="Add a new task"
          />
          <Button onClick={addTodo} className="gap-1.5" disabled={!draft.trim()}>
            <Plus className="size-3.5" />
            Add
          </Button>
        </div>

        <Tabs value={filter} onValueChange={(value) => setFilter(value as Filter)}>
          <TabsList>
            <TabsTrigger value="all">All ({todos.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({pendingCount})</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress ({inProgressCount})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedCount})</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>

      <CardContent className="flex flex-col gap-1">
        {filteredTodos.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            {filter === "all"
              ? "No tasks found — add a new task to get started."
              : `No ${filterLabels[filter]} found.`}
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="group flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-muted/50"
            >
              <span
                className={cn(
                  "size-1.5 shrink-0 rounded-full",
                  priorityDotStyles[todo.priority]
                )}
                title={`${todo.priority} priority`}
              />
              <p
                className={cn(
                  "flex-1 truncate text-sm",
                  todo.status === "completed" && "text-muted-foreground line-through"
                )}
              >
                {todo.text}
              </p>
              <Select
                value={todo.status}
                onValueChange={(value) => updateStatus(todo.id, value as Status)}
              >
                <SelectTrigger size="sm" className="w-[130px] shrink-0" aria-label={`Status for "${todo.text}"`}>
                  <span
                    className={cn("size-1.5 shrink-0 rounded-full", statusMeta[todo.status].dotClassName)}
                  />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="icon-sm"
                className="shrink-0 text-muted-foreground opacity-0 focus-visible:opacity-100 group-hover:opacity-100"
                onClick={() => deleteTodo(todo.id)}
                aria-label={`Delete "${todo.text}"`}
              >
                <X className="size-3.5" />
              </Button>
            </div>
          ))
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {remainingCount} {remainingCount === 1 ? "item" : "items"} left
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearCompleted}
          disabled={completedCount === 0}
        >
          Clear completed
        </Button>
      </CardFooter>
    </Card>
  );
}
