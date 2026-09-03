"use client";

import { Search } from "lucide-react";

import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import type { Conversation } from "./data";

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  search: string;
  onSearchChange: (value: string) => void;
  onSelect: (id: string) => void;
  className?: string;
}

export function ConversationList({
  conversations,
  selectedId,
  search,
  onSearchChange,
  onSelect,
  className,
}: ConversationListProps) {
  return (
    <div
      className={cn(
        "w-full shrink-0 flex-col border-r md:w-[300px] lg:w-[320px]",
        className
      )}
    >
      <div className="shrink-0 border-b p-3">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search messages..."
            className="pl-8"
            aria-label="Search conversations"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-0.5 p-2">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              type="button"
              onClick={() => onSelect(conversation.id)}
              aria-current={selectedId === conversation.id}
              className={cn(
                "flex items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-muted",
                selectedId === conversation.id && "bg-accent hover:bg-accent"
              )}
            >
              <Avatar className="mt-0.5">
                <AvatarFallback>{conversation.initials}</AvatarFallback>
                {conversation.online && <AvatarBadge className="bg-emerald-500" />}
              </Avatar>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-medium">{conversation.name}</span>
                  <span className="shrink-0 text-[11px] text-muted-foreground">
                    {conversation.time}
                  </span>
                </div>
                <div className="mt-0.5 flex items-center justify-between gap-2">
                  <span className="truncate text-xs text-muted-foreground">
                    {conversation.lastMessage}
                  </span>
                  {conversation.unread > 0 && (
                    <Badge className="shrink-0 px-1.5 text-[10px]">{conversation.unread}</Badge>
                  )}
                </div>
              </div>
            </button>
          ))}

          {conversations.length === 0 && (
            <p className="p-4 text-center text-sm text-muted-foreground">
              No conversations found.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
