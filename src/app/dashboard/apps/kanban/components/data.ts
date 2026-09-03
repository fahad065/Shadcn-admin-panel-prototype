import type { Assignee, Column, Priority, Task } from "./types";

export const columns: Column[] = [
  { id: "backlog", title: "Backlog" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export const priorities: Priority[] = ["Low", "Medium", "High", "Urgent"];

export const priorityStyles: Record<Priority, string> = {
  Low: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  High: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  Urgent: "bg-destructive/10 text-destructive",
};

export const assignees: Assignee[] = [
  { name: "Priya Chandran", initials: "PC" },
  { name: "Marcus Webb", initials: "MW" },
  { name: "Elena Ortiz", initials: "EO" },
  { name: "Daniel Kim", initials: "DK" },
  { name: "Sophie Laurent", initials: "SL" },
  { name: "Omar Haddad", initials: "OH" },
  { name: "Grace Liu", initials: "GL" },
  { name: "Nathan Brooks", initials: "NB" },
];

function assignee(name: string): Assignee {
  return assignees.find((a) => a.name === name) ?? assignees[0];
}

export const initialTasks: Task[] = [
  {
    id: "task-1",
    columnId: "backlog",
    title: "Explore dark mode theming",
    description: "Audit components for contrast issues and propose a dark color palette.",
    priority: "Low",
    assignee: assignee("Sophie Laurent"),
    dueDate: "Sep 20",
  },
  {
    id: "task-2",
    columnId: "backlog",
    title: "Draft Q4 roadmap",
    description: "Collect stakeholder input and outline the major Q4 initiatives.",
    priority: "Medium",
    assignee: assignee("Daniel Kim"),
    dueDate: "Sep 25",
  },
  {
    id: "task-3",
    columnId: "backlog",
    title: "Design onboarding flow v2",
    description: "Simplify the five-step signup wizard down to three focused screens.",
    priority: "High",
    assignee: assignee("Priya Chandran"),
    dueDate: "Sep 8",
  },
  {
    id: "task-4",
    columnId: "in-progress",
    title: "Rebuild notifications service",
    description: "Move from polling to WebSocket push for real-time delivery.",
    priority: "High",
    assignee: assignee("Marcus Webb"),
    dueDate: "Sep 6",
  },
  {
    id: "task-5",
    columnId: "in-progress",
    title: "Implement two-factor authentication",
    description: "Add TOTP support alongside the existing email magic links.",
    priority: "Urgent",
    assignee: assignee("Omar Haddad"),
    dueDate: "Sep 4",
  },
  {
    id: "task-6",
    columnId: "in-progress",
    title: "Redesign billing dashboard",
    description: "Consolidate invoices, usage, and plan details into a single view.",
    priority: "High",
    assignee: assignee("Priya Chandran"),
    dueDate: "Sep 7",
  },
  {
    id: "task-7",
    columnId: "in-progress",
    title: "Fix checkout race condition",
    description: "Duplicate charges occur when users double-click the pay button.",
    priority: "Urgent",
    assignee: assignee("Elena Ortiz"),
    dueDate: "Sep 3",
  },
  {
    id: "task-8",
    columnId: "done",
    title: "Upgrade to Next.js 16",
    description: "Adopt the new App Router caching defaults across the app.",
    priority: "Low",
    assignee: assignee("Grace Liu"),
    dueDate: "Aug 28",
  },
  {
    id: "task-9",
    columnId: "done",
    title: "Ship password strength meter",
    description: "Give real-time feedback on the signup and reset password forms.",
    priority: "Low",
    assignee: assignee("Nathan Brooks"),
    dueDate: "Aug 30",
  },
];
