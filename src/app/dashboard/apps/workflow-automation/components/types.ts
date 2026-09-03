import type { LucideIcon } from "lucide-react";

export type NodeType = "trigger" | "condition" | "action";

export type WorkflowNode = {
  id: string;
  type: NodeType;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  x: number;
  y: number;
};

export type WorkflowEdge = {
  id: string;
  source: string;
  target: string;
};
