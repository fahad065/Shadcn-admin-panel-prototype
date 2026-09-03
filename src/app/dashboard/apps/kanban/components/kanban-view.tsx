"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { assignees, columns, initialTasks } from "./data";
import { KanbanBoard } from "./kanban-board";
import { NewTaskDialog, type NewTaskInput } from "./new-task-dialog";
import { TaskListView } from "./task-list-view";
import { TaskTableView } from "./task-table-view";
import type { Task } from "./types";

type ViewMode = "board" | "list" | "table";

export function KanbanView() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [view, setView] = useState<ViewMode>("board");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [targetColumnId, setTargetColumnId] = useState(columns[0].id);

  function openDialogForColumn(columnId: string) {
    setTargetColumnId(columnId);
    setDialogOpen(true);
  }

  function handleCreateTask(input: NewTaskInput) {
    const assignee =
      assignees.find((person) => person.name === input.assigneeName) ?? assignees[0];

    const newTask: Task = {
      id: crypto.randomUUID(),
      columnId: input.columnId,
      title: input.title,
      description: input.description,
      priority: input.priority,
      assignee,
      dueDate: input.dueDate,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Kanban Board"
        description="Plan, prioritize, and track your team's work from backlog to done."
        actions={
          <Button
            size="sm"
            className="gap-1.5"
            onClick={() => openDialogForColumn(columns[0].id)}
          >
            <Plus className="size-4" />
            New Task
          </Button>
        }
      />

      <Tabs value={view} onValueChange={(value) => setView(value as ViewMode)}>
        <TabsList>
          <TabsTrigger value="board">Board</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
        </TabsList>
      </Tabs>

      {view === "board" ? (
        <KanbanBoard tasks={tasks} setTasks={setTasks} onAddTask={openDialogForColumn} />
      ) : view === "list" ? (
        <TaskListView tasks={tasks} />
      ) : (
        <TaskTableView tasks={tasks} />
      )}

      <NewTaskDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        columns={columns}
        defaultColumnId={targetColumnId}
        onCreate={handleCreateTask}
      />
    </div>
  );
}
