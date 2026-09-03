"use client";

import { useState } from "react";
import { Download, MoreHorizontal, Pause, Play, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { RecentGeneration } from "../data";

export function RecentGenerations({
  items,
  onItemsChange,
}: {
  items: RecentGeneration[];
  onItemsChange: (items: RecentGeneration[]) => void;
}) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  function setItems(updater: (current: RecentGeneration[]) => RecentGeneration[]) {
    onItemsChange(updater(items));
  }

  function handleDelete(item: RecentGeneration) {
    setItems((current) => current.filter((entry) => entry.id !== item.id));
    if (playingId === item.id) setPlayingId(null);
    toast.success("Generation deleted");
  }

  function handleDownload(item: RecentGeneration) {
    toast.success(`Downloading "${item.text.slice(0, 24)}..."`);
  }

  return (
    <div className="flex flex-col gap-1">
      {items.length === 0 ? (
        <p className="py-6 text-center text-sm text-muted-foreground">
          No generations yet.
        </p>
      ) : (
        items.map((item) => {
          const isPlaying = playingId === item.id;
          return (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-muted/50"
            >
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="shrink-0 rounded-full"
                aria-label={isPlaying ? "Pause" : "Play"}
                onClick={() =>
                  setPlayingId((current) =>
                    current === item.id ? null : item.id
                  )
                }
              >
                {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
              </Button>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm">{item.text}</p>
                <p className="text-xs text-muted-foreground">
                  {item.createdAt}
                </p>
              </div>

              <Badge variant="outline" className="shrink-0">
                {item.voiceName}
              </Badge>

              <span className="w-10 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
                {item.duration}
              </span>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Open menu"
                      className="shrink-0"
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleDownload(item)}>
                    <Download />
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => handleDelete(item)}
                  >
                    <Trash2 />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })
      )}
    </div>
  );
}
