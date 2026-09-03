import {
  Archive,
  CalendarRange,
  ListChecks,
  Plane,
  Presentation,
  ShoppingCart,
  StickyNote,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NoteLabel =
  | "family"
  | "tasks"
  | "personal"
  | "meetings"
  | "shopping"
  | "planning"
  | "travel";

export type NoteFilter = "all" | "archive" | NoteLabel;

export type Note = {
  id: string;
  title: string;
  body: string;
  label: NoteLabel;
  updatedAt: string;
  pinned: boolean;
  archived: boolean;
  hasImage: boolean;
};

export interface NoteLabelConfig {
  id: NoteLabel;
  name: string;
  icon: LucideIcon;
  dotClassName: string;
  thumbnailClassName: string;
}

export const noteLabels: NoteLabelConfig[] = [
  {
    id: "family",
    name: "Family",
    icon: Users,
    dotClassName: "bg-pink-400 dark:bg-pink-500",
    thumbnailClassName: "from-pink-200 to-rose-300 dark:from-pink-500/40 dark:to-rose-500/30",
  },
  {
    id: "tasks",
    name: "Tasks",
    icon: ListChecks,
    dotClassName: "bg-sky-400 dark:bg-sky-500",
    thumbnailClassName: "from-sky-200 to-blue-300 dark:from-sky-500/40 dark:to-blue-500/30",
  },
  {
    id: "personal",
    name: "Personal",
    icon: User,
    dotClassName: "bg-violet-400 dark:bg-violet-500",
    thumbnailClassName: "from-violet-200 to-purple-300 dark:from-violet-500/40 dark:to-purple-500/30",
  },
  {
    id: "meetings",
    name: "Meetings",
    icon: Presentation,
    dotClassName: "bg-amber-400 dark:bg-amber-500",
    thumbnailClassName: "from-amber-200 to-orange-300 dark:from-amber-500/40 dark:to-orange-500/30",
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: ShoppingCart,
    dotClassName: "bg-emerald-400 dark:bg-emerald-500",
    thumbnailClassName: "from-emerald-200 to-teal-300 dark:from-emerald-500/40 dark:to-teal-500/30",
  },
  {
    id: "planning",
    name: "Planning",
    icon: CalendarRange,
    dotClassName: "bg-indigo-400 dark:bg-indigo-500",
    thumbnailClassName: "from-indigo-200 to-blue-300 dark:from-indigo-500/40 dark:to-blue-500/30",
  },
  {
    id: "travel",
    name: "Travel",
    icon: Plane,
    dotClassName: "bg-orange-400 dark:bg-orange-500",
    thumbnailClassName: "from-orange-200 to-amber-300 dark:from-orange-500/40 dark:to-amber-500/30",
  },
];

export const noteLabelMap: Record<NoteLabel, NoteLabelConfig> = noteLabels.reduce(
  (acc, label) => {
    acc[label.id] = label;
    return acc;
  },
  {} as Record<NoteLabel, NoteLabelConfig>
);

export const allNotesFilter = {
  id: "all" as const,
  name: "All Notes",
  icon: StickyNote,
};

export const archiveFilter = {
  id: "archive" as const,
  name: "Archive",
  icon: Archive,
};

export const initialNotes: Note[] = [
  {
    id: "note-1",
    title: "Grocery list",
    body: "Oat milk, sourdough bread, avocados, cherry tomatoes, olive oil, and the good coffee beans from the corner shop.",
    label: "shopping",
    updatedAt: "10 minutes ago",
    pinned: true,
    archived: false,
    hasImage: true,
  },
  {
    id: "note-2",
    title: "Q3 roadmap notes",
    body: "Sync with design on the onboarding revamp before Friday. Confirm API rate limits with the backend team. Draft the changelog for the v2.4 release.",
    label: "planning",
    updatedAt: "1 hour ago",
    pinned: true,
    archived: false,
    hasImage: false,
  },
  {
    id: "note-3",
    title: "Book recs from Mom",
    body: "Project Hail Mary, The Overstory, Klara and the Sun. She said start with Project Hail Mary.",
    label: "family",
    updatedAt: "3 hours ago",
    pinned: false,
    archived: false,
    hasImage: true,
  },
  {
    id: "note-4",
    title: "Standup talking points",
    body: "Finished the auth refactor. Blocked on design review for the settings page. Picking up the notifications ticket next.",
    label: "tasks",
    updatedAt: "Yesterday",
    pinned: false,
    archived: false,
    hasImage: false,
  },
  {
    id: "note-5",
    title: "Apartment hunting",
    body: "Two-bed near the park, budget under $2,200. Ask about parking and whether utilities are included. Tour scheduled Saturday at 11am.",
    label: "planning",
    updatedAt: "Yesterday",
    pinned: false,
    archived: false,
    hasImage: true,
  },
  {
    id: "note-6",
    title: "Password manager migration",
    body: "Move remaining logins out of the browser vault. Enable two-factor authentication on email and banking first.",
    label: "tasks",
    updatedAt: "2 days ago",
    pinned: false,
    archived: false,
    hasImage: false,
  },
  {
    id: "note-7",
    title: "Gift ideas for Mom's birthday",
    body: "Noise-cancelling headphones, a pour-over kettle, or that ceramics class she mentioned last month.",
    label: "shopping",
    updatedAt: "3 days ago",
    pinned: false,
    archived: false,
    hasImage: false,
  },
  {
    id: "note-8",
    title: "Meeting notes: vendor call",
    body: "Renewal quote came in 12% higher than last year. Ask for a multi-year discount. Get legal to review the updated SLA terms before we sign anything.",
    label: "meetings",
    updatedAt: "4 days ago",
    pinned: false,
    archived: false,
    hasImage: false,
  },
  {
    id: "note-9",
    title: "Family dinner: weeknight pasta",
    body: "Garlic, chili flakes, anchovy, pangrattato. Toss with whatever greens are in the fridge. Everyone's home by seven.",
    label: "family",
    updatedAt: "5 days ago",
    pinned: false,
    archived: false,
    hasImage: false,
  },
  {
    id: "note-10",
    title: "Workout plan",
    body: "Mon: upper body. Wed: legs. Fri: full body plus 20 min zone 2 cardio. Rest days: short walk, stretch.",
    label: "personal",
    updatedAt: "1 week ago",
    pinned: false,
    archived: false,
    hasImage: false,
  },
  {
    id: "note-11",
    title: "Conference takeaways",
    body: "The talk on edge caching was worth the trip alone. Follow up with the two founders from the accessibility panel.",
    label: "travel",
    updatedAt: "1 week ago",
    pinned: false,
    archived: false,
    hasImage: true,
  },
];
