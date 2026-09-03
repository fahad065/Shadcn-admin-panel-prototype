"use client";

import { Bot } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import type { Message } from "./data";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex flex-col items-end">
        <div className="max-w-[75%] rounded-2xl bg-primary px-3.5 py-2 text-sm break-words text-primary-foreground">
          {message.content}
        </div>
        <span className="mt-1 px-1 text-[11px] text-muted-foreground">{message.time}</span>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <Avatar className="shrink-0">
        <AvatarFallback>
          <Bot className="size-4" />
        </AvatarFallback>
      </Avatar>
      <div className={cn("flex max-w-[75%] flex-col items-start")}>
        <div className="text-sm break-words text-foreground">{message.content}</div>
        <span className="mt-1 px-1 text-[11px] text-muted-foreground">{message.time}</span>
      </div>
    </div>
  );
}
