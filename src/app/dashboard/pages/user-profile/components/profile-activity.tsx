import { Award, FileText, FolderPlus, MessageCircle, Users, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityItem = {
  icon: LucideIcon;
  text: string;
  time: string;
};

const activity: ActivityItem[] = [
  {
    icon: FileText,
    text: 'Published a new case study, "Redesigning the fintech dashboard"',
    time: "2 days ago",
  },
  {
    icon: MessageCircle,
    text: 'Commented on "Design tokens v3 rollout"',
    time: "4 days ago",
  },
  {
    icon: FolderPlus,
    text: 'Joined the "Atlas Design System" project',
    time: "1 week ago",
  },
  {
    icon: Award,
    text: 'Earned the "Accessibility Champion" badge',
    time: "2 weeks ago",
  },
  {
    icon: Users,
    text: "Followed 12 new members in the Product Design community",
    time: "3 weeks ago",
  },
];

export function ProfileActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col">
          {activity.map((item, index) => (
            <li key={item.text} className="relative flex gap-3 pb-5 last:pb-0">
              {index < activity.length - 1 ? (
                <span className="absolute top-8 left-4 h-[calc(100%-1.25rem)] w-px -translate-x-1/2 bg-border" />
              ) : null}
              <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground ring-4 ring-card">
                <item.icon className="size-4" />
              </span>
              <div className="flex flex-1 flex-col gap-0.5 pt-1">
                <p className="text-sm">{item.text}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
