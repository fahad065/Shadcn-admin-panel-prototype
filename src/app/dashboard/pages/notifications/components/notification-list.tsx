"use client";

import { Card, CardContent } from "@/components/ui/card";

import type { NotificationGroup, NotificationItem } from "./data";
import { NotificationRow } from "./notification-row";

const GROUP_ORDER: NotificationGroup[] = ["Today", "Yesterday", "Earlier"];

interface NotificationListProps {
  notifications: NotificationItem[];
  onRead: (id: string) => void;
  onResolve: (id: string) => void;
}

export function NotificationList({ notifications, onRead, onResolve }: NotificationListProps) {
  if (notifications.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-sm text-muted-foreground">
          No notifications here.
        </CardContent>
      </Card>
    );
  }

  const groups = GROUP_ORDER.map((group) => ({
    group,
    items: notifications.filter((notification) => notification.group === group),
  })).filter((entry) => entry.items.length > 0);

  return (
    <Card className="py-0">
      <div className="divide-y">
        {groups.map(({ group, items }) => (
          <div key={group}>
            <p className="bg-muted/40 px-4 py-2 text-xs font-medium text-muted-foreground">
              {group}
            </p>
            <div className="divide-y">
              {items.map((notification) => (
                <NotificationRow
                  key={notification.id}
                  notification={notification}
                  onRead={onRead}
                  onResolve={onResolve}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
