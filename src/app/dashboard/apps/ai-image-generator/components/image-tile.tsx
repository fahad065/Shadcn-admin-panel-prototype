"use client";

import { useState, type ReactNode } from "react";
import { Download, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ImageTile({
  gradient,
  label,
  caption,
  className,
}: {
  gradient: string;
  label: string;
  caption?: ReactNode;
  className?: string;
}) {
  const [favorited, setFavorited] = useState(false);

  return (
    <div
      className={cn(
        "group/tile relative aspect-square overflow-hidden rounded-xl ring-1 ring-foreground/10",
        gradient,
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-200 group-hover/tile:opacity-100"
      />

      <span className="sr-only">{label}</span>

      <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover/tile:opacity-100">
        <Button
          type="button"
          variant="secondary"
          size="icon-sm"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={favorited}
          className="bg-white/90 text-foreground shadow-sm hover:bg-white dark:bg-black/60 dark:hover:bg-black/80"
          onClick={() => setFavorited((prev) => !prev)}
        >
          <Heart className={cn("size-3.5", favorited && "fill-rose-500 text-rose-500")} />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon-sm"
          aria-label="Download image"
          className="bg-white/90 text-foreground shadow-sm hover:bg-white dark:bg-black/60 dark:hover:bg-black/80"
        >
          <Download className="size-3.5" />
        </Button>
      </div>

      {caption ? (
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/50 p-2.5 backdrop-blur-sm transition-transform duration-200 group-hover/tile:translate-y-0">
          {caption}
        </div>
      ) : null}
    </div>
  );
}
