import {
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

export type NotificationCategory = "mention" | "comment" | "task" | "system";

export type NotificationGroup = "Today" | "Yesterday" | "Earlier";

export interface NotificationItem {
  id: string;
  category: NotificationCategory;
  /** Short label rendered as a `Badge` next to the notification text, e.g. "Ticket", "Team". */
  badge: string;
  title: string;
  description?: string;
  time: string;
  group: NotificationGroup;
  read: boolean;
  /** Notifications representing a request (invite, permission, connection) show Accept/Decline actions. */
  actionable?: boolean;
}

export const categoryMeta: Record<
  NotificationCategory,
  { icon: LucideIcon; iconClassName: string }
> = {
  mention: {
    icon: UserPlus,
    iconClassName: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  comment: {
    icon: MessageSquare,
    iconClassName: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  task: {
    icon: CheckCircle,
    iconClassName: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  },
  system: {
    icon: AlertTriangle,
    iconClassName: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
};

export const initialNotifications: NotificationItem[] = [
  {
    id: "n-1",
    category: "mention",
    badge: "Message",
    title: "Priya Patel mentioned you in a comment",
    description: "\"Can you review the new pricing page copy?\"",
    time: "5m ago",
    group: "Today",
    read: false,
  },
  {
    id: "n-2",
    category: "task",
    badge: "Task",
    title: "Elena Novak marked a task as complete",
    description: "\"Migrate billing service to Postgres 16\"",
    time: "22m ago",
    group: "Today",
    read: false,
  },
  {
    id: "n-3",
    category: "comment",
    badge: "Message",
    title: "Marcus Chen replied to your comment",
    description: "\"Good catch — I'll patch that today.\"",
    time: "48m ago",
    group: "Today",
    read: false,
  },
  {
    id: "n-4",
    category: "system",
    badge: "System",
    title: "Scheduled maintenance starts in 2 hours",
    description: "The API and dashboard may be briefly unavailable.",
    time: "1h ago",
    group: "Today",
    read: false,
  },
  {
    id: "n-18",
    category: "mention",
    badge: "Team",
    title: "Jordan Lee invited you to join the Design Ops team",
    description: "You'll get access to shared boards and files.",
    time: "1h ago",
    group: "Today",
    read: false,
    actionable: true,
  },
  {
    id: "n-5",
    category: "mention",
    badge: "Team",
    title: "Sofia Ramirez tagged you on a Kanban card",
    description: "\"Audit third-party API keys\"",
    time: "2h ago",
    group: "Today",
    read: true,
  },
  {
    id: "n-6",
    category: "task",
    badge: "Report",
    title: "Your export is ready to download",
    description: "\"Q3 Sales Report.csv\"",
    time: "3h ago",
    group: "Today",
    read: true,
  },
  {
    id: "n-19",
    category: "system",
    badge: "Access",
    title: "Ava Thompson requested access to the Finance workspace",
    description: "Requesting Editor permissions.",
    time: "3h ago",
    group: "Today",
    read: false,
    actionable: true,
  },
  {
    id: "n-7",
    category: "comment",
    badge: "Deal",
    title: "Toby Belhome commented on the Northwind Traders deal",
    description: "\"Let's schedule a call for Thursday.\"",
    time: "4h ago",
    group: "Today",
    read: true,
  },
  {
    id: "n-8",
    category: "system",
    badge: "Security",
    title: "New sign-in detected from Chrome on macOS",
    description: "San Francisco, CA — if this wasn't you, secure your account.",
    time: "9:41 AM",
    group: "Yesterday",
    read: false,
  },
  {
    id: "n-9",
    category: "mention",
    badge: "Team",
    title: "Elena Novak started following you",
    time: "10:15 AM",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n-20",
    category: "mention",
    badge: "Connection",
    title: "Noah Kim wants to connect with you",
    description: "Sent from the Partner Directory.",
    time: "11:20 AM",
    group: "Yesterday",
    read: false,
    actionable: true,
  },
  {
    id: "n-10",
    category: "task",
    badge: "Task",
    title: "A task you own is due tomorrow",
    description: "\"Write Q3 investor update\"",
    time: "1:30 PM",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n-11",
    category: "comment",
    badge: "Ticket",
    title: "Priya Patel commented on an Acme Inc. ticket",
    description: "\"Reopening — the customer reported the issue again.\"",
    time: "3:05 PM",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n-21",
    category: "task",
    badge: "Project",
    title: "Design team requested review access to Northwind Traders",
    description: "Needed before Friday's client call.",
    time: "2:40 PM",
    group: "Yesterday",
    read: true,
    actionable: true,
  },
  {
    id: "n-12",
    category: "system",
    badge: "Report",
    title: "Your weekly analytics digest is ready",
    description: "Traffic is up 12% week over week.",
    time: "6:47 PM",
    group: "Yesterday",
    read: true,
  },
  {
    id: "n-13",
    category: "task",
    badge: "Task",
    title: "Marcus Chen assigned you a task",
    description: "\"Patch dependency vulnerabilities\"",
    time: "2d ago",
    group: "Earlier",
    read: true,
  },
  {
    id: "n-14",
    category: "mention",
    badge: "Message",
    title: "Sofia Ramirez mentioned you in Notes",
    description: "\"@you can you confirm these numbers?\"",
    time: "3d ago",
    group: "Earlier",
    read: true,
  },
  {
    id: "n-22",
    category: "system",
    badge: "Access",
    title: "Liam Novak requested admin permissions for Billing",
    description: "Approval needed from a workspace owner.",
    time: "2d ago",
    group: "Earlier",
    read: false,
    actionable: true,
  },
  {
    id: "n-15",
    category: "system",
    badge: "Security",
    title: "Two-factor authentication was enabled",
    description: "Your account is now protected with an extra layer of security.",
    time: "4d ago",
    group: "Earlier",
    read: true,
  },
  {
    id: "n-16",
    category: "comment",
    badge: "Ticket",
    title: "Toby Belhome resolved your comment thread",
    description: "\"Fixed checkout timeout on Safari\"",
    time: "6d ago",
    group: "Earlier",
    read: true,
  },
  {
    id: "n-17",
    category: "task",
    badge: "Team",
    title: "Sprint 24 retro notes were published",
    description: "Shared with the Product & Engineering team.",
    time: "1w ago",
    group: "Earlier",
    read: true,
  },
];
