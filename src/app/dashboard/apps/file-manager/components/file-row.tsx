"use client";

import type { KeyboardEvent } from "react";
import { Download, MoreVertical, Pencil, Share2, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { FsNode } from "./data";
import { FileTypeIcon } from "./file-type-icon";

export type FileRowAction = "rename" | "share" | "download" | "delete";

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function FileRow({
  node,
  onOpen,
  onAction,
}: {
  node: FsNode;
  onOpen: () => void;
  onAction: (action: FileRowAction, node: FsNode) => void;
}) {
  const isFolder = node.type === "folder";

  function handleKeyDown(event: KeyboardEvent<HTMLTableRowElement>) {
    if (!isFolder) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  }

  return (
    <TableRow
      role={isFolder ? "button" : undefined}
      tabIndex={isFolder ? 0 : undefined}
      onClick={isFolder ? onOpen : undefined}
      onKeyDown={handleKeyDown}
      className={cn(isFolder && "cursor-pointer")}
    >
      <TableCell>
        <div className="flex items-center gap-2.5">
          <FileTypeIcon node={node} className="size-5 shrink-0" />
          <span className="truncate text-sm font-medium" title={node.name}>
            {node.name}
          </span>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">{node.modified}</TableCell>
      <TableCell className="text-muted-foreground">
        {node.type === "file" ? node.size : `${node.children.length} items`}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarFallback>{initials(node.owner)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{node.owner}</span>
        </div>
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label={`Open menu for ${node.name}`}
                onClick={(event) => event.stopPropagation()}
              />
            }
          >
            <MoreVertical className="size-3.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" onClick={(event) => event.stopPropagation()}>
            <DropdownMenuItem onClick={() => onAction("rename", node)}>
              <Pencil />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onAction("share", node)}>
              <Share2 />
              Share
            </DropdownMenuItem>
            {!isFolder && (
              <DropdownMenuItem onClick={() => onAction("download", node)}>
                <Download />
                Download
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onClick={() => onAction("delete", node)}>
              <Trash2 />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
