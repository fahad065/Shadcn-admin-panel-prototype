"use client";

import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import {
  allNotesFilter,
  archiveFilter,
  noteLabels,
  type NoteFilter,
} from "./notes-data";

interface LabelNavProps {
  selectedFilter: NoteFilter;
  countsByFilter: Record<NoteFilter, number>;
  onSelectFilter: (filter: NoteFilter) => void;
}

export function LabelNav({ selectedFilter, countsByFilter, onSelectFilter }: LabelNavProps) {
  return (
    <div className="flex w-[220px] shrink-0 flex-col gap-4 border-r p-3">
      <nav className="flex flex-col gap-0.5">
        <NavButton
          icon={allNotesFilter.icon}
          label={allNotesFilter.name}
          count={countsByFilter.all}
          isActive={selectedFilter === "all"}
          onClick={() => onSelectFilter("all")}
        />
      </nav>

      <Separator />

      <div>
        <p className="px-2.5 text-xs font-medium text-muted-foreground uppercase">Labels</p>
        <nav className="mt-1.5 flex flex-col gap-0.5">
          {noteLabels.map((label) => {
            const isActive = selectedFilter === label.id;

            return (
              <button
                key={label.id}
                type="button"
                onClick={() => onSelectFilter(label.id)}
                aria-current={isActive}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  isActive && "bg-accent text-accent-foreground hover:bg-accent"
                )}
              >
                <span className={cn("size-2 shrink-0 rounded-full", label.dotClassName)} />
                <span className="flex-1 truncate">{label.name}</span>
                <Badge variant="secondary" className="shrink-0 px-1.5 text-[10px]">
                  {countsByFilter[label.id] ?? 0}
                </Badge>
              </button>
            );
          })}
        </nav>
      </div>

      <Separator />

      <nav className="flex flex-col gap-0.5">
        <NavButton
          icon={archiveFilter.icon}
          label={archiveFilter.name}
          count={countsByFilter.archive}
          isActive={selectedFilter === "archive"}
          onClick={() => onSelectFilter("archive")}
        />
      </nav>
    </div>
  );
}

function NavButton({
  icon: Icon,
  label,
  count,
  isActive,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive}
      className={cn(
        "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        isActive && "bg-accent text-accent-foreground hover:bg-accent"
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span className="flex-1 truncate">{label}</span>
      <Badge variant="secondary" className="shrink-0 px-1.5 text-[10px]">
        {count}
      </Badge>
    </button>
  );
}
