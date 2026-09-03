import { Code2, Palette, type LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Track = {
  title: string;
  icon: LucideIcon;
  iconClassName: string;
  completed: number;
  total: number;
};

const tracks: Track[] = [
  {
    title: "Full-Stack Developer",
    icon: Code2,
    iconClassName: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    completed: 4,
    total: 10,
  },
  {
    title: "UX Designer",
    icon: Palette,
    iconClassName: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    completed: 7,
    total: 12,
  },
];

export function LearningPathCard() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Learning Path</CardTitle>
        <CardDescription>Your active learning tracks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {tracks.map((track) => {
          const percent = Math.round((track.completed / track.total) * 100);
          return (
            <div key={track.title} className="space-y-2">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-md",
                    track.iconClassName
                  )}
                >
                  <track.icon className="size-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{track.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {track.completed} of {track.total} modules completed
                  </p>
                </div>
                <span className="text-sm font-medium tabular-nums">
                  {percent}%
                </span>
              </div>
              <Progress value={percent} />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
