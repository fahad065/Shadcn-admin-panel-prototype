"use client";

import { Bot, FileText, Lightbulb, Mail, PenLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { suggestedPrompts } from "./data";

const promptIcons: LucideIcon[] = [FileText, PenLine, Lightbulb, Mail];

interface ChatWelcomeProps {
  onSelectPrompt: (prompt: string) => void;
}

export function ChatWelcome({ onSelectPrompt }: ChatWelcomeProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 overflow-y-auto p-6 text-center">
      <Avatar className="size-12">
        <AvatarFallback>
          <Bot className="size-6" />
        </AvatarFallback>
      </Avatar>

      <div className="space-y-1">
        <h1 className="text-xl font-semibold">How can I help you today?</h1>
        <p className="text-sm text-muted-foreground">Ask a question or try one of these to get started.</p>
      </div>

      <div className="grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
        {suggestedPrompts.map((prompt, index) => {
          const Icon = promptIcons[index % promptIcons.length];
          return (
            <button
              key={prompt}
              type="button"
              onClick={() => onSelectPrompt(prompt)}
              className="flex items-start gap-2.5 rounded-xl border p-3 text-left text-sm transition-colors hover:bg-muted"
            >
              <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span>{prompt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
