"use client";

import { useEffect, useRef, type FormEvent, type KeyboardEvent } from "react";
import { Sparkles } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import type { ChatMessage } from "./data";

interface ChatThreadProps {
  messages: ChatMessage[];
  draft: string;
  isReplying: boolean;
  onDraftChange: (value: string) => void;
  onSend: () => void;
}

export function ChatThread({ messages, draft, isReplying, onDraftChange, onSend }: ChatThreadProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length, isReplying]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.trim() || isReplying) return;
    onSend();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!draft.trim() || isReplying) return;
      onSend();
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col border-t">
      <ScrollArea className="min-h-0 flex-1">
        <div className="flex flex-col gap-3 p-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-end gap-2",
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              {message.role === "assistant" && (
                <Avatar size="sm" className="mb-4">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <Sparkles className="size-3" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "flex max-w-[80%] flex-col",
                  message.role === "user" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl px-3 py-2 text-sm break-words",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  {message.text}
                </div>
                <span className="mt-1 px-1 text-[11px] text-muted-foreground">{message.time}</span>
              </div>
            </div>
          ))}

          {isReplying && (
            <div className="flex items-end gap-2">
              <Avatar size="sm" className="mb-4">
                <AvatarFallback className="bg-primary/10 text-primary">
                  <Sparkles className="size-3" />
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 rounded-2xl bg-muted px-3 py-2.5">
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="flex shrink-0 flex-col gap-2 border-t p-3">
        <Textarea
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message this session..."
          aria-label="Message"
          className="max-h-32 min-h-16 resize-none text-sm"
        />
        <Button type="submit" size="sm" className="self-end" disabled={!draft.trim() || isReplying}>
          Send
        </Button>
      </form>
    </div>
  );
}
