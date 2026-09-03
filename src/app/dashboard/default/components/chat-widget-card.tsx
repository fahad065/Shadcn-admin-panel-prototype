"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  from: "them" | "me";
  author: string;
  text: string;
};

const initialMessages: Message[] = [
  { id: "1", from: "them", author: "Harriet Voss", text: "Hey, can you review the latest deck?" },
  { id: "2", from: "me", author: "You", text: "Sure, sending feedback in a few minutes." },
  { id: "3", from: "them", author: "Harriet Voss", text: "Perfect, thank you!" },
];

export function ChatWidgetCard() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  function sendMessage() {
    if (!draft.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), from: "me", author: "You", text: draft.trim() },
    ]);
    setDraft("");
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <Avatar>
          <AvatarFallback>HV</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-sm">Harriet Voss</CardTitle>
          <CardDescription>Active now</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "max-w-[80%] rounded-lg px-3 py-2 text-sm",
              message.from === "me"
                ? "ml-auto bg-primary text-primary-foreground"
                : "bg-muted text-foreground"
            )}
          >
            {message.text}
          </div>
        ))}
        <form
          className="mt-1 flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          <Input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Type a message..."
            aria-label="Type a message"
          />
          <Button type="submit" size="icon" aria-label="Send message">
            <Send className="size-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
