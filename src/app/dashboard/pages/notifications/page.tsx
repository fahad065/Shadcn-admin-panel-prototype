"use client";

import { useMemo, useState } from "react";
import { CheckCheck } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { initialNotifications, type NotificationItem } from "./components/data";
import { NotificationList } from "./components/notification-list";

type FilterTab = "all" | "unread" | "mention" | "system";

const FILTER_TABS: { value: FilterTab; label: string }[] = [
  { value: "all", label: "All" },
  { value: "unread", label: "Unread" },
  { value: "mention", label: "Mentions" },
  { value: "system", label: "System" },
];

const PAGE_SIZE = 10;

function filterNotifications(notifications: NotificationItem[], tab: FilterTab) {
  switch (tab) {
    case "unread":
      return notifications.filter((notification) => !notification.read);
    case "mention":
      return notifications.filter((notification) => notification.category === "mention");
    case "system":
      return notifications.filter((notification) => notification.category === "system");
    default:
      return notifications;
  }
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [page, setPage] = useState(1);
  const [tabAtLastPageReset, setTabAtLastPageReset] = useState<FilterTab>("all");

  if (activeTab !== tabAtLastPageReset) {
    setTabAtLastPageReset(activeTab);
    setPage(1);
  }

  const unreadCount = useMemo(
    () => notifications.filter((notification) => !notification.read).length,
    [notifications]
  );

  const filteredNotifications = useMemo(
    () => filterNotifications(notifications, activeTab),
    [notifications, activeTab]
  );

  const totalCount = filteredNotifications.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const start = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const end = Math.min(totalCount, currentPage * PAGE_SIZE);

  const paginatedNotifications = useMemo(
    () => filteredNotifications.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [filteredNotifications, currentPage]
  );

  function markAllAsRead() {
    setNotifications((previous) =>
      previous.map((notification) => ({ ...notification, read: true }))
    );
  }

  function markAsRead(id: string) {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }

  function resolveNotification(id: string) {
    setNotifications((previous) => previous.filter((notification) => notification.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Notifications"
        description="Stay on top of mentions, comments, task updates, and system alerts."
        actions={
          <Button
            variant="outline"
            size="sm"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <CheckCheck className="size-4" />
            Mark all as read
          </Button>
        }
      />

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as FilterTab)}
      >
        <TabsList>
          {FILTER_TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <NotificationList
        notifications={paginatedNotifications}
        onRead={markAsRead}
        onResolve={resolveNotification}
      />

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Showing {start} to {end} of {totalCount} notification(s)
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((previous) => Math.max(1, previous - 1))}
            disabled={currentPage <= 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((previous) => Math.min(totalPages, previous + 1))}
            disabled={currentPage >= totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
