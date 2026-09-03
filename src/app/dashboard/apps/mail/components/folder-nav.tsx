"use client";

import { SquarePen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  folders,
  type FolderId,
  type FolderConfig,
  type MailboxFolderId,
} from "./data";

interface FolderNavProps {
  selectedFolder: FolderId;
  unreadCounts: Partial<Record<MailboxFolderId, number>>;
  onSelectFolder: (folder: FolderId) => void;
  className?: string;
}

export function FolderNav({
  selectedFolder,
  unreadCounts,
  onSelectFolder,
  className,
}: FolderNavProps) {
  const primaryFolders = folders.filter((folder) => folder.group === "primary");
  const categoryFolders = folders.filter((folder) => folder.group === "category");

  function renderFolder(folder: FolderConfig) {
    const Icon = folder.icon;
    const isActive = folder.id === selectedFolder;
    const unreadCount = folder.id === "starred" ? 0 : (unreadCounts[folder.id] ?? 0);

    return (
      <button
        key={folder.id}
        type="button"
        onClick={() => onSelectFolder(folder.id)}
        aria-current={isActive}
        className={cn(
          "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          isActive && "bg-accent text-accent-foreground hover:bg-accent"
        )}
      >
        <Icon className="size-4 shrink-0" />
        <span className="flex-1 truncate">{folder.label}</span>
        {unreadCount > 0 && (
          <Badge className="shrink-0 px-1.5 text-[10px]">{unreadCount}</Badge>
        )}
      </button>
    );
  }

  return (
    <div
      className={cn(
        "w-full shrink-0 flex-col gap-3 border-r p-3 md:w-[200px]",
        className
      )}
    >
      <Button className="w-full justify-center">
        <SquarePen className="size-3.5" />
        Compose
      </Button>

      <nav className="flex flex-col gap-0.5">{primaryFolders.map(renderFolder)}</nav>

      <div className="flex flex-col gap-0.5">
        <span className="px-2.5 pb-1 text-xs font-semibold text-muted-foreground">
          Categories
        </span>
        <nav className="flex flex-col gap-0.5">{categoryFolders.map(renderFolder)}</nav>
      </div>
    </div>
  );
}
