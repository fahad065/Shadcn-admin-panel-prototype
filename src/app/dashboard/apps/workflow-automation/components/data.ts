import {
  Filter,
  Mail,
  MessageSquare,
  UserPlus,
  Webhook,
  type LucideIcon,
} from "lucide-react";

import type { NodeType, WorkflowEdge, WorkflowNode } from "./types";

export const NODE_WIDTH = 216;
export const NODE_HEIGHT = 88;

export const nodeTypeConfig: Record<
  NodeType,
  { label: string; border: string; iconWrap: string; iconColor: string }
> = {
  trigger: {
    label: "Trigger",
    border: "border-t-emerald-500",
    iconWrap: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  condition: {
    label: "Condition",
    border: "border-t-amber-500",
    iconWrap: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  action: {
    label: "Action",
    border: "border-t-sky-500",
    iconWrap: "bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
};

export const initialNodes: WorkflowNode[] = [
  {
    id: "node-1",
    type: "trigger",
    title: "New Form Submission",
    subtitle: "Website contact form",
    icon: Webhook,
    x: 24,
    y: 190,
  },
  {
    id: "node-2",
    type: "condition",
    title: "Filter: Status = New",
    subtitle: "Only unqualified leads",
    icon: Filter,
    x: 300,
    y: 190,
  },
  {
    id: "node-3",
    type: "action",
    title: "Create CRM Contact",
    subtitle: "Add to Xantory CRM",
    icon: UserPlus,
    x: 576,
    y: 40,
  },
  {
    id: "node-4",
    type: "action",
    title: "Send Slack Message",
    subtitle: "Notify #sales-leads",
    icon: MessageSquare,
    x: 576,
    y: 190,
  },
  {
    id: "node-5",
    type: "action",
    title: "Send Email",
    subtitle: "Welcome + next steps",
    icon: Mail,
    x: 576,
    y: 340,
  },
];

export const initialEdges: WorkflowEdge[] = [
  { id: "edge-1", source: "node-1", target: "node-2" },
  { id: "edge-2", source: "node-2", target: "node-3" },
  { id: "edge-3", source: "node-2", target: "node-4" },
  { id: "edge-4", source: "node-2", target: "node-5" },
];

export const addableNodeTemplates: Record<
  "trigger" | "action",
  { title: string; subtitle: string; icon: LucideIcon; type: NodeType }
> = {
  trigger: {
    title: "New Trigger",
    subtitle: "Configure trigger source",
    icon: Webhook,
    type: "trigger",
  },
  action: {
    title: "New Action",
    subtitle: "Configure this step",
    icon: MessageSquare,
    type: "action",
  },
};
