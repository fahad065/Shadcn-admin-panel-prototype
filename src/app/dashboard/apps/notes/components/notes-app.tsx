"use client";

import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LabelNav } from "./label-nav";
import { NoteCard } from "./note-card";
import {
  initialNotes,
  noteLabels,
  type Note,
  type NoteFilter,
} from "./notes-data";

export function NotesApp() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<NoteFilter>("all");

  const countsByFilter = useMemo(() => {
    const counts: Record<NoteFilter, number> = {
      all: 0,
      archive: 0,
      family: 0,
      tasks: 0,
      personal: 0,
      meetings: 0,
      shopping: 0,
      planning: 0,
      travel: 0,
    };

    for (const note of notes) {
      if (note.archived) {
        counts.archive += 1;
        continue;
      }
      counts.all += 1;
      counts[note.label] += 1;
    }

    return counts;
  }, [notes]);

  const filteredNotes = useMemo(() => {
    const scoped = notes.filter((note) => {
      if (selectedFilter === "all") return !note.archived;
      if (selectedFilter === "archive") return note.archived;
      return note.label === selectedFilter && !note.archived;
    });

    const normalized = query.trim().toLowerCase();
    const searched = normalized
      ? scoped.filter(
          (note) =>
            note.title.toLowerCase().includes(normalized) ||
            note.body.toLowerCase().includes(normalized)
        )
      : scoped;

    return [...searched].sort((a, b) => Number(b.pinned) - Number(a.pinned));
  }, [notes, selectedFilter, query]);

  const scopeCounts = useMemo(() => {
    const inScope = (note: Note) =>
      selectedFilter === "all" || selectedFilter === "archive"
        ? true
        : note.label === selectedFilter;

    let active = 0;
    let archived = 0;
    for (const note of notes) {
      if (!inScope(note)) continue;
      if (note.archived) archived += 1;
      else active += 1;
    }

    return { active, archived };
  }, [notes, selectedFilter]);

  function togglePin(id: string) {
    setNotes((current) =>
      current.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  }

  function addNote() {
    const nextId = `note-${Date.now()}`;
    const label = selectedFilter === "all" || selectedFilter === "archive"
      ? noteLabels[notes.length % noteLabels.length].id
      : selectedFilter;
    const newNote: Note = {
      id: nextId,
      title: "New note",
      body: "Start typing to capture your thoughts…",
      label,
      updatedAt: "Just now",
      pinned: false,
      archived: false,
      hasImage: false,
    };
    setNotes((current) => [newNote, ...current]);
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Notes"
        description="Capture quick thoughts, lists, and reminders in one place."
      />

      <div className="flex overflow-hidden rounded-xl border bg-background">
        <LabelNav
          selectedFilter={selectedFilter}
          countsByFilter={countsByFilter}
          onSelectFilter={setSelectedFilter}
        />

        <div className="flex min-w-0 flex-1 flex-col gap-4 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search notes…"
                className="pl-8"
                aria-label="Search notes"
              />
            </div>
            <Button size="sm" onClick={addNote}>
              <Plus />
              New Note
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Notes {scopeCounts.active} / Archive {scopeCounts.archived}
          </p>

          {filteredNotes.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
              {filteredNotes.map((note) => (
                <NoteCard key={note.id} note={note} onTogglePin={togglePin} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No notes match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
