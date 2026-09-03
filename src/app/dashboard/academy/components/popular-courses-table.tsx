"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  BookOpen,
  Code2,
  Database,
  Layout,
  PenTool,
  Server,
  Star,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Category = "Web Development" | "Backend" | "Design";

type Course = {
  name: string;
  category: Category;
  icon: LucideIcon;
  iconClassName: string;
  score: number;
  progress: number;
};

const categoryStyles: Record<Category, string> = {
  "Web Development": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Backend: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Design: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
};

const courses: Course[] = [
  {
    name: "Full-Stack Web Development",
    category: "Web Development",
    icon: Code2,
    iconClassName: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    score: 4.9,
    progress: 82,
  },
  {
    name: "React & Next.js Mastery",
    category: "Web Development",
    icon: Layout,
    iconClassName: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    score: 4.6,
    progress: 55,
  },
  {
    name: "Advanced Node.js APIs",
    category: "Backend",
    icon: Server,
    iconClassName: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
    score: 4.7,
    progress: 64,
  },
  {
    name: "Database Design with PostgreSQL",
    category: "Backend",
    icon: Database,
    iconClassName: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    score: 4.5,
    progress: 38,
  },
  {
    name: "UI/UX Design Systems",
    category: "Design",
    icon: PenTool,
    iconClassName: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    score: 4.8,
    progress: 91,
  },
  {
    name: "Design Thinking Fundamentals",
    category: "Design",
    icon: BookOpen,
    iconClassName: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    score: 4.9,
    progress: 70,
  },
];

const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: "Course",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-md",
            row.original.iconClassName
          )}
        >
          <row.original.icon className="size-4.5" />
        </div>
        <p className="text-sm font-medium">{row.original.name}</p>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="secondary" className={categoryStyles[row.original.category]}>
        {row.original.category}
      </Badge>
    ),
  },
  {
    accessorKey: "score",
    header: "Score",
    cell: ({ row }) => (
      <span className="flex items-center gap-1 text-sm font-medium tabular-nums">
        <Star className="size-3.5 fill-amber-400 text-amber-400" />
        {row.original.score.toFixed(1)}
      </span>
    ),
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => (
      <div className="flex w-32 items-center gap-2">
        <Progress value={row.original.progress} className="w-20" />
        <span className="text-xs text-muted-foreground tabular-nums">
          {row.original.progress}%
        </span>
      </div>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <Button variant="outline" size="sm">
        Continue
      </Button>
    ),
  },
];

export function PopularCoursesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Courses</CardTitle>
        <CardDescription>Trending courses across the academy</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={courses} pageSize={6} itemLabel="courses" />
      </CardContent>
    </Card>
  );
}
