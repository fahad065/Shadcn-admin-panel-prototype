"use client";

import { Archive, ArrowLeft, Mail, Reply, Star, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import type { Email } from "./data";

interface EmailViewProps {
  email: Email | null;
  onToggleStar: (id: string) => void;
  onDelete: (id: string) => void;
  onBack?: () => void;
  className?: string;
}

export function EmailView({ email, onToggleStar, onDelete, onBack, className }: EmailViewProps) {
  if (!email) {
    return (
      <div
        className={cn(
          "min-w-0 flex-1 flex-col items-center justify-center gap-3 text-center",
          className
        )}
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-muted">
          <Mail className="size-6 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">No message selected</p>
          <p className="text-xs text-muted-foreground">Select a conversation to read</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-w-0 flex-1 flex-col", className)}>
      <div className="flex shrink-0 flex-col gap-3 border-b p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="-ml-1 shrink-0 md:hidden"
              aria-label="Back to inbox"
              onClick={onBack}
            >
              <ArrowLeft className="size-4" />
            </Button>
            <h2 className="truncate text-lg font-semibold text-foreground">{email.subject}</h2>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Reply">
              <Reply />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Archive">
              <Archive />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Delete"
              onClick={() => onDelete(email.id)}
            >
              <Trash2 />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={email.starred ? "Unstar email" : "Star email"}
              aria-pressed={email.starred}
              onClick={() => onToggleStar(email.id)}
            >
              <Star className={cn(email.starred && "fill-amber-400 text-amber-400")} />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <Avatar>
              <AvatarFallback>{email.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{email.senderName}</p>
              <p className="truncate text-xs text-muted-foreground">{email.senderEmail}</p>
            </div>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">{email.fullDate}</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 p-6">
          {email.body.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed whitespace-pre-line text-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
