"use client";

import type { KeyboardEvent } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { categoryMeta, type NotificationItem } from "./data";

interface NotificationRowProps {
  notification: NotificationItem;
  onRead: (id: string) => void;
  onResolve: (id: string) => void;
}

export function NotificationRow({ notification, onRead, onResolve }: NotificationRowProps) {
  const { id, title, description, time, read, category, badge, actionable } = notification;
  const { icon: Icon, iconClassName } = categoryMeta[category];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onRead(id);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onRead(id)}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex w-full cursor-pointer items-start gap-3 px-4 py-3.5 text-left transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-none",
        !read && "bg-muted/30"
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full",
          iconClassName
        )}
      >
        <Icon className="size-4" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "text-sm text-foreground",
              !read ? "font-semibold" : "font-normal"
            )}
          >
            {title}
          </span>
          <Badge variant="secondary" className="shrink-0">
            {badge}
          </Badge>
        </span>
        {description ? (
          <span className="mt-0.5 block truncate text-sm text-muted-foreground">
            {description}
          </span>
        ) : null}

        {actionable ? (
          <span
            className="mt-2 flex items-center gap-2"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            <Button
              type="button"
              size="sm"
              onClick={() => onResolve(id)}
            >
              Accept
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => onResolve(id)}
            >
              Decline
            </Button>
          </span>
        ) : null}
      </span>

      <span className="flex shrink-0 items-center gap-2 pt-0.5 pl-2">
        <span className="text-xs whitespace-nowrap text-muted-foreground">{time}</span>
        <span
          className={cn("size-2 shrink-0 rounded-full bg-primary", read && "opacity-0")}
          aria-hidden
        />
      </span>
    </div>
  );
}
