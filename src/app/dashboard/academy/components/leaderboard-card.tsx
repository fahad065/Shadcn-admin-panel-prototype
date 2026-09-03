import { Crown } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Student = {
  rank: number;
  name: string;
  points: number;
};

const students: Student[] = [
  { rank: 1, name: "Liam Smith", points: 5000 },
  { rank: 2, name: "Ava Chen", points: 4650 },
  { rank: 3, name: "Noah Bennett", points: 4320 },
  { rank: 4, name: "Priya Nair", points: 3980 },
  { rank: 5, name: "Marcus Webb", points: 3640 },
];

const rankStyles: Record<number, string> = {
  1: "bg-amber-400 text-amber-950",
  2: "bg-neutral-300 text-neutral-800 dark:bg-neutral-600 dark:text-neutral-100",
  3: "bg-orange-400/80 text-orange-950",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function LeaderboardCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>Top students by points this month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {students.map((student) => (
          <div
            key={student.rank}
            className="flex items-center gap-3 rounded-lg px-2 py-2"
          >
            <span
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                rankStyles[student.rank] ?? "bg-muted text-muted-foreground"
              )}
            >
              {student.rank}
            </span>
            <Avatar className="size-8">
              <AvatarFallback className="text-xs">
                {initials(student.name)}
              </AvatarFallback>
            </Avatar>
            <p className="min-w-0 flex-1 truncate text-sm font-medium">
              {student.name}
            </p>
            {student.rank === 1 ? (
              <Crown className="size-4 shrink-0 text-amber-500" />
            ) : null}
            <span className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
              {student.points.toLocaleString()} pts
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
