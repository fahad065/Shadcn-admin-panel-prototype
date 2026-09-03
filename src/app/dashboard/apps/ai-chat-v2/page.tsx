"use client";

import { useRef, useState } from "react";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ChatSidebar } from "./components/chat-sidebar";
import { ChatThread } from "./components/chat-thread";
import { GreetingHeader } from "./components/greeting-header";
import { QuickAccessPanel } from "./components/quick-access-panel";
import { SessionTabs } from "./components/session-tabs";
import {
  fallbackReplies,
  followUpRevisions,
  initialArtifact,
  initialMessages,
  makeMessage,
  pastConversations,
  type ArtifactState,
  type ChatMessage,
} from "./components/data";

const REPLY_DELAY_MS = 1100;

export default function AiChatV2Page() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [artifact, setArtifact] = useState<ArtifactState>(initialArtifact);
  const [draft, setDraft] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [activeConversationId, setActiveConversationId] = useState(pastConversations[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quickAccessOpen, setQuickAccessOpen] = useState(false);
  const revisionIndexRef = useRef(0);

  function handleSend() {
    const text = draft.trim();
    if (!text || isReplying) return;

    setMessages((previous) => [...previous, makeMessage("user", text)]);
    setDraft("");
    setIsReplying(true);

    setTimeout(() => {
      const index = revisionIndexRef.current;
      const revision = followUpRevisions[index];

      if (revision) {
        revisionIndexRef.current += 1;
        setArtifact((previous) => ({
          ...previous,
          version: previous.version + 1,
          content: revision.content,
        }));
        setMessages((previous) => [...previous, makeMessage("assistant", revision.reply)]);
      } else {
        const fallback =
          fallbackReplies[(index - followUpRevisions.length) % fallbackReplies.length];
        setArtifact((previous) => ({ ...previous, version: previous.version + 1 }));
        setMessages((previous) => [...previous, makeMessage("assistant", fallback)]);
        revisionIndexRef.current += 1;
      }

      setIsReplying(false);
    }, REPLY_DELAY_MS);
  }

  function handleNewChat() {
    setMessages([]);
    setArtifact(initialArtifact);
    setDraft("");
    setIsReplying(false);
    revisionIndexRef.current = 0;
    setActiveConversationId(pastConversations[0].id);
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
          <GreetingHeader
            name="Toby"
            onOpenSidebar={() => setSidebarOpen(true)}
            onOpenQuickAccess={() => setQuickAccessOpen(true)}
          />
          <SessionTabs artifact={artifact} />
          <ChatThread
            messages={messages}
            draft={draft}
            isReplying={isReplying}
            onDraftChange={setDraft}
            onSend={handleSend}
          />
        </div>

        <QuickAccessPanel onNewChat={handleNewChat} className="hidden md:flex" />
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

      <Sheet open={quickAccessOpen} onOpenChange={setQuickAccessOpen}>
        <SheetContent side="right" showCloseButton={false} className="w-full gap-0 p-0 sm:max-w-xs">
          <SheetTitle className="sr-only">Quick Access</SheetTitle>
          <QuickAccessPanel
            onNewChat={() => {
              handleNewChat();
              setQuickAccessOpen(false);
            }}
            className="flex h-full w-full border-l-0"
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
