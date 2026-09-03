"use client";

import { useState, type FormEvent } from "react";
import { format, parseISO } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { assignees, priorities } from "./data";
import type { Column, Priority } from "./types";

export type NewTaskInput = {
  title: string;
  description: string;
  priority: Priority;
  assigneeName: string;
  dueDate?: string;
  columnId: string;
};

export function NewTaskDialog({
  open,
  onOpenChange,
  columns,
  defaultColumnId,
  onCreate,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  columns: Column[];
  defaultColumnId: string;
  onCreate: (input: NewTaskInput) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {open ? (
          <NewTaskForm
            columns={columns}
            defaultColumnId={defaultColumnId}
            onCreate={onCreate}
            onOpenChange={onOpenChange}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function NewTaskForm({
  columns,
  defaultColumnId,
  onCreate,
  onOpenChange,
}: {
  columns: Column[];
  defaultColumnId: string;
  onCreate: (input: NewTaskInput) => void;
  onOpenChange: (open: boolean) => void;
}) {
  // Mounted fresh each time the dialog opens, so state naturally starts blank.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [assigneeName, setAssigneeName] = useState(assignees[0].name);
  const [dueDate, setDueDate] = useState("");
  const [columnId, setColumnId] = useState(defaultColumnId);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim()) return;

    onCreate({
      title: title.trim(),
      description: description.trim() || "No description provided.",
      priority,
      assigneeName,
      dueDate: dueDate ? format(parseISO(dueDate), "MMM d") : undefined,
      columnId,
    });
    onOpenChange(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>New Task</DialogTitle>
        <DialogDescription>
          Add a task to your board. You can drag it between columns afterward.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="task-title">Title</Label>
        <Input
          id="task-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Design empty states"
          autoFocus
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="task-description">Description</Label>
        <Textarea
          id="task-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Add a short description..."
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label>Column</Label>
          <Select
            value={columnId}
            onValueChange={(value) => setColumnId(String(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {columns.map((column) => (
                <SelectItem key={column.id} value={column.id}>
                  {column.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Priority</Label>
          <Select
            value={priority}
            onValueChange={(value) => setPriority(value as Priority)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {priorities.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label>Assignee</Label>
          <Select
            value={assigneeName}
            onValueChange={(value) => setAssigneeName(String(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {assignees.map((person) => (
                <SelectItem key={person.name} value={person.name}>
                  {person.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="task-due-date">Due date</Label>
          <Input
            id="task-due-date"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
          Cancel
        </Button>
        <Button type="submit">Create Task</Button>
      </DialogFooter>
    </form>
  );
}
