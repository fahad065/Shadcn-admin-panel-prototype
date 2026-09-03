"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { columns } from "./data";
import { KanbanColumn } from "./kanban-column";
import { TaskCardContent } from "./task-card";
import type { Task } from "./types";

export function KanbanBoard({
  tasks,
  setTasks,
  onAddTask,
}: {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  onAddTask: (columnId: string) => void;
}) {
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function handleDragStart(event: DragStartEvent) {
    const task = tasks.find((item) => item.id === event.active.id);
    setActiveTask(task ?? null);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);
    if (activeId === overId) return;
    if (active.data.current?.type !== "task") return;

    setTasks((prev) => {
      const activeIndex = prev.findIndex((item) => item.id === activeId);
      if (activeIndex === -1) return prev;

      const overIsColumn = over.data.current?.type === "column";
      const overColumnId = overIsColumn
        ? overId
        : prev.find((item) => item.id === overId)?.columnId;
      if (!overColumnId) return prev;

      const activeItem = prev[activeIndex];

      if (activeItem.columnId === overColumnId) {
        if (overIsColumn) return prev;

        const withoutActive = prev.filter((item) => item.id !== activeId);
        const overIndex = withoutActive.findIndex((item) => item.id === overId);
        const next = [...withoutActive];
        next.splice(overIndex, 0, activeItem);
        return next;
      }

      const withoutActive = prev.filter((item) => item.id !== activeId);
      const movedTask: Task = { ...activeItem, columnId: overColumnId };

      if (overIsColumn) {
        return [...withoutActive, movedTask];
      }

      const overIndex = withoutActive.findIndex((item) => item.id === overId);
      const next = [...withoutActive];
      next.splice(overIndex, 0, movedTask);
      return next;
    });
  }

  function handleDragEnd() {
    setActiveTask(null);
  }

  function handleDragCancel() {
    setActiveTask(null);
  }

  return (
    <DndContext
      id="kanban-board"
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.columnId === column.id)}
            onAddTask={onAddTask}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask ? (
          <div className="w-72 rotate-2 sm:w-80">
            <TaskCardContent task={activeTask} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
