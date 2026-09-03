"use client";

import { Send } from "lucide-react";
import { type KeyboardEvent } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatComposerProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export function ChatComposer({ value, onChange, onSend, disabled }: ChatComposerProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  }

  return (
    <div className="shrink-0 border-t p-3">
      <div className="flex items-end gap-2">
        <Textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message the assistant..."
          aria-label="Message"
          rows={1}
          className="max-h-40 flex-1 resize-none"
        />
        <Button
          type="button"
          size="icon"
          aria-label="Send message"
          disabled={disabled || value.trim().length === 0}
          onClick={onSend}
        >
          <Send className="size-4" />
        </Button>
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        AI Assistant can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}
