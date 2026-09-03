"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, Columns3, ListChecks, Loader2 } from "lucide-react";

import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TasksTable, type TaskColumnKey } from "./tasks-table";

export type TaskPriority = "Low" | "Medium" | "High" | "Urgent";
export type TaskStatus = "Todo" | "In Progress" | "In Review" | "Done";

export type Task = {
  id: string;
  taskId: string;
  title: string;
  assignee: { name: string; initials: string };
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  dueDateISO: string;
};

// Signed-in user (matches the account shown in the site header), used for the
// "My Tasks" filter below.
const CURRENT_USER = "Toby Belhome";

// Fixed reference date for the sample data's "Overdue" calculation.
const TODAY_ISO = "2026-09-02";

const ASSIGNEES: { name: string; initials: string }[] = [
  { name: "Toby Belhome", initials: "TB" },
  { name: "Priya Patel", initials: "PP" },
  { name: "Marcus Chen", initials: "MC" },
  { name: "Elena Novak", initials: "EN" },
  { name: "Sofia Ramirez", initials: "SR" },
  { name: "Liam Okafor", initials: "LO" },
  { name: "Nadia Larsson", initials: "NL" },
  { name: "Kenji Tanaka", initials: "KT" },
  { name: "Isabella Rossi", initials: "IR" },
];

const TASK_VERBS = [
  "Redesign",
  "Fix",
  "Write",
  "Migrate",
  "Audit",
  "Publish",
  "Set up",
  "Review",
  "Consolidate",
  "Prepare",
  "Patch",
  "Update",
  "Investigate",
  "Refactor",
  "Optimize",
  "Document",
  "Test",
  "Deploy",
  "Integrate",
  "Automate",
];

const TASK_SUBJECTS = [
  "onboarding flow",
  "checkout timeout on Safari",
  "Q3 investor update",
  "billing service database",
  "third-party API keys",
  "changelog for v4.2",
  "staging environment for mobile app",
  "accessibility audit findings",
  "duplicate customer records",
  "enterprise demo environment",
  "dependency vulnerabilities",
  "on-call runbook",
  "search indexing pipeline",
  "email notification templates",
  "mobile push permissions",
  "GraphQL schema",
  "CI pipeline caching",
  "dark mode theming",
  "rate limiting middleware",
  "user permission roles",
  "Stripe webhook handler",
  "marketing landing page",
  "analytics dashboard",
  "PDF export feature",
  "session timeout handling",
  "Slack integration",
  "onboarding email sequence",
  "feature flag rollout",
  "database backup strategy",
  "SSO login flow",
  "image upload pipeline",
  "customer feedback survey",
  "release notes for v5.0",
  "internal design system docs",
  "load testing suite",
  "checkout cart persistence",
  "two-factor authentication flow",
];

function statusForIndex(index: number): TaskStatus {
  const bucket = index % 8;
  if (bucket < 3) return "Todo";
  if (bucket < 5) return "In Progress";
  if (bucket < 7) return "In Review";
  return "Done";
}

function priorityForIndex(index: number): TaskPriority {
  const bucket = (index * 5) % 7;
  if (bucket < 1) return "Urgent";
  if (bucket < 3) return "High";
  if (bucket < 6) return "Medium";
  return "Low";
}

function addDays(iso: string, days: number): string {
  const date = new Date(`${iso}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDueDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

// Builds a large, varied dataset from small template arrays (verbs, subjects,
// assignees) combined via the row index, rather than hand-typing every row.
function generateTasks(count: number): Task[] {
  return Array.from({ length: count }, (_, index) => {
    const verb = TASK_VERBS[index % TASK_VERBS.length];
    const subject = TASK_SUBJECTS[index % TASK_SUBJECTS.length];
    const assignee = ASSIGNEES[(index * 5 + 3) % ASSIGNEES.length];
    const dueDateISO = addDays(TODAY_ISO, ((index * 11) % 60) - 20);
    const tagNumber = 1000 + ((index * 137 + 421) % 9000);

    return {
      id: String(index + 1),
      taskId: `TASK-${tagNumber}`,
      title: `${verb} ${subject}`,
      assignee,
      priority: priorityForIndex(index),
      status: statusForIndex(index),
      dueDate: formatDueDate(dueDateISO),
      dueDateISO,
    };
  });
}

const initialTasks: Task[] = generateTasks(100);

function isOverdue(task: Task) {
  return task.status !== "Done" && task.dueDateISO < TODAY_ISO;
}

type FilterValue = "all" | "mine" | "completed" | "overdue";

const COLUMN_TOGGLES: { key: TaskColumnKey; label: string }[] = [
  { key: "assignee", label: "Assignee" },
  { key: "priority", label: "Priority" },
  { key: "dueDate", label: "Due Date" },
];

export function TasksView() {
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [filter, setFilter] = React.useState<FilterValue>("all");
  const [columnVisibility, setColumnVisibility] = React.useState<
    Record<TaskColumnKey, boolean>
  >({
    assignee: true,
    priority: true,
    dueDate: true,
  });

  const total = tasks.length;
  const completed = tasks.filter((task) => task.status === "Done").length;
  const inProgress = tasks.filter((task) => task.status === "In Progress").length;
  const overdue = tasks.filter(isOverdue).length;
  const mine = tasks.filter((task) => task.assignee.name === CURRENT_USER).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "mine") return task.assignee.name === CURRENT_USER;
    if (filter === "completed") return task.status === "Done";
    if (filter === "overdue") return isOverdue(task);
    return true;
  });

  function toggleComplete(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Done" ? "Todo" : "Done" }
          : task
      )
    );
  }

  function duplicateTask(id: string) {
    setTasks((prev) => {
      const index = prev.findIndex((task) => task.id === id);
      if (index === -1) return prev;
      const original = prev[index];
      const copy: Task = {
        ...original,
        id: crypto.randomUUID(),
        taskId: `TASK-${1000 + Math.floor(Math.random() * 9000)}`,
        title: `${original.title} (Copy)`,
        status: "Todo",
      };
      return [...prev.slice(0, index + 1), copy, ...prev.slice(index + 1)];
    });
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Tasks" value={String(total)} icon={ListChecks} />
        <StatCard label="Completed" value={String(completed)} icon={CheckCircle2} />
        <StatCard label="In Progress" value={String(inProgress)} icon={Loader2} />
        <StatCard label="Overdue" value={String(overdue)} icon={AlertCircle} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tasks</CardTitle>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Tabs value={filter} onValueChange={(value) => setFilter(value as FilterValue)}>
              <TabsList>
                <TabsTrigger value="all">All ({total})</TabsTrigger>
                <TabsTrigger value="mine">My Tasks ({mine})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({completed})</TabsTrigger>
                <TabsTrigger value="overdue">Overdue ({overdue})</TabsTrigger>
              </TabsList>
            </Tabs>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Columns3 className="size-3.5" />
                    Columns
                  </Button>
                }
              />
              <DropdownMenuContent align="end">
                {COLUMN_TOGGLES.map(({ key, label }) => (
                  <DropdownMenuCheckboxItem
                    key={key}
                    checked={columnVisibility[key]}
                    onCheckedChange={(checked) =>
                      setColumnVisibility((prev) => ({ ...prev, [key]: checked }))
                    }
                  >
                    {label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <TasksTable
            tasks={filteredTasks}
            columnVisibility={columnVisibility}
            onToggleComplete={toggleComplete}
            onDuplicate={duplicateTask}
            onDelete={deleteTask}
          />
        </CardContent>
      </Card>
    </div>
  );
}
