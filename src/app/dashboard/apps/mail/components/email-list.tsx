"use client";

import { Menu, Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import type { Email } from "./data";

interface EmailListProps {
  emails: Email[];
  selectedId: string | null;
  search: string;
  onSearchChange: (value: string) => void;
  onSelect: (id: string) => void;
  onToggleStar: (id: string) => void;
  onOpenFolders?: () => void;
  className?: string;
}

export function EmailList({
  emails,
  selectedId,
  search,
  onSearchChange,
  onSelect,
  onToggleStar,
  onOpenFolders,
  className,
}: EmailListProps) {
  return (
    <div
      className={cn(
        "w-full shrink-0 flex-col border-r md:w-[360px]",
        className
      )}
    >
      <div className="flex shrink-0 items-center gap-2 border-b p-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 md:hidden"
          aria-label="Open folders"
          onClick={onOpenFolders}
        >
          <Menu className="size-4" />
        </Button>
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search mail..."
            className="pl-8"
            aria-label="Search mail"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-0.5 p-2">
          {emails.map((email) => (
            <button
              key={email.id}
              type="button"
              onClick={() => onSelect(email.id)}
              aria-current={selectedId === email.id}
              className={cn(
                "flex flex-col gap-1 rounded-lg p-2.5 text-left transition-colors hover:bg-muted",
                selectedId === email.id && "bg-accent hover:bg-accent"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={cn(
                    "truncate text-sm",
                    !email.read ? "font-semibold text-foreground" : "font-medium text-foreground"
                  )}
                >
                  {email.senderName}
                </span>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="text-[11px] text-muted-foreground">{email.time}</span>
                  <span
                    role="button"
                    tabIndex={0}
                    aria-label={email.starred ? "Unstar email" : "Star email"}
                    aria-pressed={email.starred}
                    onClick={(event) => {
                      event.stopPropagation();
                      onToggleStar(email.id);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        event.stopPropagation();
                        onToggleStar(email.id);
                      }
                    }}
                    className="rounded-sm text-muted-foreground/60 hover:text-foreground"
                  >
                    <Star
                      className={cn(
                        "size-3.5",
                        email.starred && "fill-amber-400 text-amber-400"
                      )}
                    />
                  </span>
                </div>
              </div>

              <span
                className={cn(
                  "truncate text-sm",
                  !email.read ? "font-semibold text-foreground" : "text-foreground"
                )}
              >
                {email.subject}
              </span>
              <span className="truncate text-xs text-muted-foreground">{email.preview}</span>
            </button>
          ))}

          {emails.length === 0 && (
            <p className="p-4 text-center text-sm text-muted-foreground">No emails found.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
