"use client";

import { useMemo, useState } from "react";

import { ChatPanel } from "./components/chat-panel";
import { ConversationList } from "./components/conversation-list";
import { initialConversations, type ChatMessage, type Conversation } from "./components/data";

export default function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [selectedId, setSelectedId] = useState(initialConversations[0].id);
  const [search, setSearch] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");

  const filteredConversations = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return conversations;
    return conversations.filter(
      (conversation) =>
        conversation.name.toLowerCase().includes(query) ||
        conversation.lastMessage.toLowerCase().includes(query)
    );
  }, [conversations, search]);

  const selectedConversation =
    conversations.find((conversation) => conversation.id === selectedId) ?? conversations[0];

  function handleSendMessage(conversationId: string, text: string) {
    const time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const newMessage: ChatMessage = {
      id: `${conversationId}-${Date.now()}`,
      from: "me",
      text,
      time,
    };

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              lastMessage: text,
              time,
              messages: [...conversation.messages, newMessage],
            }
          : conversation
      )
    );
  }

  return (
    <div className="h-[calc(100vh-5.5rem)] overflow-hidden md:h-[calc(100vh-6.5rem)]">
      <div className="flex h-full overflow-hidden rounded-xl border bg-background">
        <ConversationList
          conversations={filteredConversations}
          selectedId={selectedConversation.id}
          search={search}
          onSearchChange={setSearch}
          onSelect={(id) => {
            setSelectedId(id);
            setMobileView("chat");
          }}
          className={mobileView === "list" ? "flex" : "hidden md:flex"}
        />
        <ChatPanel
          conversation={selectedConversation}
          onSendMessage={handleSendMessage}
          onBack={() => setMobileView("list")}
          className={mobileView === "chat" ? "flex" : "hidden md:flex"}
        />
      </div>
    </div>
  );
}
