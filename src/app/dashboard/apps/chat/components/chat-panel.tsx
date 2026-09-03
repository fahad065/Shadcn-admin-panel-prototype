"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, Send } from "lucide-react";

import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import type { Conversation } from "./data";

interface ChatPanelProps {
  conversation: Conversation;
  onSendMessage: (conversationId: string, text: string) => void;
  onBack?: () => void;
  className?: string;
}

export function ChatPanel({ conversation, onSendMessage, onBack, className }: ChatPanelProps) {
  const [draft, setDraft] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [conversation.id, conversation.messages.length]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onSendMessage(conversation.id, text);
    setDraft("");
  }

  return (
    <div className={cn("min-w-0 flex-1 flex-col", className)}>
      <div className="flex shrink-0 items-center gap-3 border-b p-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="-ml-1 md:hidden"
          aria-label="Back to conversations"
          onClick={onBack}
        >
          <ArrowLeft className="size-4" />
        </Button>
        <Avatar>
          <AvatarFallback>{conversation.initials}</AvatarFallback>
          {conversation.online && <AvatarBadge className="bg-emerald-500" />}
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{conversation.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {conversation.online ? "Active now" : conversation.role}
          </p>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-3 p-4">
          {conversation.messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex flex-col",
                message.from === "me" ? "items-end" : "items-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-3.5 py-2 text-sm break-words",
                  message.from === "me"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                {message.text}
              </div>
              <span className="mt-1 px-1 text-[11px] text-muted-foreground">{message.time}</span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="flex shrink-0 items-center gap-2 border-t p-3">
        <Input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={`Message ${conversation.name}...`}
          aria-label="Message"
          className="flex-1"
        />
        <Button type="submit" size="icon" aria-label="Send message">
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}
