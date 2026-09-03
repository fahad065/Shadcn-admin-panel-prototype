import { FileText, FolderPlus, Pin, Trophy, UserCheck, Video, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityItem = {
  icon: LucideIcon;
  text: string;
  time: string;
};

const activity: ActivityItem[] = [
  {
    icon: Video,
    text: 'Hosted the "Pricing Your First Product" AMA livestream',
    time: "5 hours ago",
  },
  {
    icon: FileText,
    text: 'Published "5 lessons from our first in-person meetup"',
    time: "1 day ago",
  },
  {
    icon: UserCheck,
    text: "Approved 14 new member applications",
    time: "2 days ago",
  },
  {
    icon: FolderPlus,
    text: 'Started a new project, "Spring Meetup Tour"',
    time: "4 days ago",
  },
  {
    icon: Trophy,
    text: "Crossed 4,500 members in the Forge Collective",
    time: "1 week ago",
  },
  {
    icon: Pin,
    text: 'Pinned "Community Playbook v2" for moderators',
    time: "2 weeks ago",
  },
];

export function ProfileActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent activities</CardTitle>
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
