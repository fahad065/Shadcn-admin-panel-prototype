"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { pastConversations } from "./data";

interface ChatSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  onNewChat: () => void;
  className?: string;
}

export function ChatSidebar({ activeId, onSelect, onNewChat, className }: ChatSidebarProps) {
  return (
    <div className={cn("w-full shrink-0 flex-col border-r md:w-[260px]", className)}>
      <div className="shrink-0 p-3">
        <Button variant="outline" className="w-full justify-start" onClick={onNewChat}>
          <Plus className="size-4" />
          New Chat
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-0.5 p-2 pt-0">
          {pastConversations.map((conversation) => (
            <button
              key={conversation.id}
              type="button"
              onClick={() => onSelect(conversation.id)}
              aria-current={activeId === conversation.id}
              className={cn(
                "flex flex-col items-start gap-0.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-muted",
                activeId === conversation.id && "bg-accent hover:bg-accent"
              )}
            >
              <span className="w-full truncate text-sm font-medium">{conversation.title}</span>
              <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
