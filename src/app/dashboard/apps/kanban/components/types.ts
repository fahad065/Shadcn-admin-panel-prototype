export type Priority = "Low" | "Medium" | "High" | "Urgent";

export type Assignee = {
  name: string;
  initials: string;
};

export type Task = {
  id: string;
  columnId: string;
  title: string;
  description: string;
  priority: Priority;
  assignee: Assignee;
  dueDate?: string;
};

export type Column = {
  id: string;
  title: string;
};
