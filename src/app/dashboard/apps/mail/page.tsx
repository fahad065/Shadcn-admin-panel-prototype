"use client";

import { useMemo, useState } from "react";

import { EmailList } from "./components/email-list";
import { EmailView } from "./components/email-view";
import { FolderNav } from "./components/folder-nav";
import {
  initialEmails,
  type Email,
  type FolderId,
  type MailboxFolderId,
} from "./components/data";

export default function MailPage() {
  const [emails, setEmails] = useState<Email[]>(initialEmails);
  const [selectedFolder, setSelectedFolder] = useState<FolderId>("inbox");
  const [search, setSearch] = useState("");
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<"folders" | "list" | "view">("list");

  const folderEmails = useMemo(() => {
    if (selectedFolder === "starred") {
      return emails.filter((email) => email.starred);
    }
    return emails.filter((email) => email.folder === selectedFolder);
  }, [emails, selectedFolder]);

  const filteredEmails = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return folderEmails;
    return folderEmails.filter(
      (email) =>
        email.senderName.toLowerCase().includes(query) ||
        email.subject.toLowerCase().includes(query) ||
        email.preview.toLowerCase().includes(query)
    );
  }, [folderEmails, search]);

  const selectedEmail =
    filteredEmails.find((email) => email.id === selectedEmailId) ?? null;

  const unreadCounts = useMemo(() => {
    const counts: Partial<Record<MailboxFolderId, number>> = {};
    for (const email of emails) {
      if (!email.read) {
        counts[email.folder] = (counts[email.folder] ?? 0) + 1;
      }
    }
    return counts;
  }, [emails]);

  function handleSelectFolder(folder: FolderId) {
    setSelectedFolder(folder);
    setSearch("");
    setMobileView("list");
  }

  function handleSelectEmail(id: string) {
    setSelectedEmailId(id);
    setMobileView("view");
    setEmails((previous) =>
      previous.map((email) => (email.id === id ? { ...email, read: true } : email))
    );
  }

  function handleToggleStar(id: string) {
    setEmails((previous) =>
      previous.map((email) => (email.id === id ? { ...email, starred: !email.starred } : email))
    );
  }

  function handleDelete(id: string) {
    setEmails((previous) => {
      const target = previous.find((email) => email.id === id);
      if (!target) return previous;
      if (target.folder === "trash") {
        return previous.filter((email) => email.id !== id);
      }
      return previous.map((email) => (email.id === id ? { ...email, folder: "trash" } : email));
    });
  }

  return (
    <div className="h-[calc(100vh-5.5rem)] overflow-hidden md:h-[calc(100vh-6.5rem)]">
      <div className="flex h-full overflow-hidden rounded-xl border bg-background">
        <FolderNav
          selectedFolder={selectedFolder}
          unreadCounts={unreadCounts}
          onSelectFolder={handleSelectFolder}
          className={mobileView === "folders" ? "flex" : "hidden md:flex"}
        />
        <EmailList
          emails={filteredEmails}
          selectedId={selectedEmail?.id ?? null}
          search={search}
          onSearchChange={setSearch}
          onSelect={handleSelectEmail}
          onToggleStar={handleToggleStar}
          onOpenFolders={() => setMobileView("folders")}
          className={mobileView === "list" ? "flex" : "hidden md:flex"}
        />
        <EmailView
          email={selectedEmail}
          onToggleStar={handleToggleStar}
          onDelete={handleDelete}
          onBack={() => setMobileView("list")}
          className={mobileView === "view" ? "flex" : "hidden md:flex"}
        />
      </div>
    </div>
  );
}
