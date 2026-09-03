import { Pin, PinOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { noteLabelMap, type Note } from "./notes-data";

export function NoteCard({
  note,
  onTogglePin,
}: {
  note: Note;
  onTogglePin: (id: string) => void;
}) {
  const label = noteLabelMap[note.label];

  return (
    <Card className="mb-4 break-inside-avoid">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{note.title}</CardTitle>
          <Button
            variant="ghost"
            size="icon-sm"
            className="-mt-1 -mr-1 shrink-0"
            aria-label={note.pinned ? "Unpin note" : "Pin note"}
            aria-pressed={note.pinned}
            onClick={() => onTogglePin(note.id)}
          >
            {note.pinned ? <Pin className="fill-current" /> : <PinOff />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {note.hasImage ? (
          <div
            className={cn(
              "h-20 w-full rounded-lg bg-gradient-to-br",
              label.thumbnailClassName
            )}
          />
        ) : null}
        <p className="line-clamp-4 text-sm whitespace-pre-line text-muted-foreground">
          {note.body}
        </p>
      </CardContent>
      <CardFooter className="justify-between border-t-0 bg-transparent text-xs text-muted-foreground">
        <Badge variant="outline" className="gap-1.5 font-normal">
          <span className={cn("size-1.5 rounded-full", label.dotClassName)} />
          {label.name}
        </Badge>
        <span>{note.updatedAt}</span>
      </CardFooter>
    </Card>
  );
}
