"use client";

import { useState } from "react";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ChatComposer } from "./components/chat-composer";
import { ChatHeader } from "./components/chat-header";
import { ChatSidebar } from "./components/chat-sidebar";
import { cannedReplies, pastConversations, type Message } from "./components/data";
import { ChatWelcome } from "./components/chat-welcome";
import { MessageThread } from "./components/message-thread";

export default function AiChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [model, setModel] = useState("gpt-4");
  const [activeConversationId, setActiveConversationId] = useState(pastConversations[0].id);
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleSend(promptOverride?: string) {
    const text = (promptOverride ?? draft).trim();
    if (!text || isTyping) return;

    const time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      time,
    };

    setMessages((previous) => [...previous, userMessage]);
    setDraft("");
    setIsTyping(true);

    const reply = cannedReplies[Math.floor(Math.random() * cannedReplies.length)];
    const delay = 500 + Math.random() * 300;

    setTimeout(() => {
      const replyTime = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: reply,
        time: replyTime,
      };
      setMessages((previous) => [...previous, assistantMessage]);
      setIsTyping(false);
    }, delay);
  }

  function handleNewChat() {
    setMessages([]);
    setDraft("");
    setIsTyping(false);
  }

  return (
    <div className="h-[calc(100vh-5.5rem)] overflow-hidden md:h-[calc(100vh-6.5rem)]">
      <div className="flex h-full overflow-hidden rounded-xl border bg-background">
        <ChatSidebar
          activeId={activeConversationId}
          onSelect={setActiveConversationId}
          onNewChat={handleNewChat}
          className="hidden md:flex"
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <ChatHeader
            model={model}
            onModelChange={setModel}
            onOpenSidebar={() => setSidebarOpen(true)}
          />
          {messages.length === 0 ? (
            <ChatWelcome onSelectPrompt={(prompt) => handleSend(prompt)} />
          ) : (
            <MessageThread messages={messages} isTyping={isTyping} />
          )}
          <ChatComposer value={draft} onChange={setDraft} onSend={() => handleSend()} disabled={isTyping} />
        </div>
      </div>

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" showCloseButton={false} className="w-full gap-0 p-0 sm:max-w-xs">
          <SheetTitle className="sr-only">Chat History</SheetTitle>
          <ChatSidebar
            activeId={activeConversationId}
            onSelect={(id) => {
              setActiveConversationId(id);
              setSidebarOpen(false);
            }}
            onNewChat={() => {
              handleNewChat();
              setSidebarOpen(false);
            }}
            className="flex h-full w-full"
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
