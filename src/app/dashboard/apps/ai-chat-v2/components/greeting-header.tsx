import { Menu, PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface GreetingHeaderProps {
  name: string;
  onOpenSidebar?: () => void;
  onOpenQuickAccess?: () => void;
}

export function GreetingHeader({ name, onOpenSidebar, onOpenQuickAccess }: GreetingHeaderProps) {
  return (
    <div className="flex shrink-0 items-start justify-between gap-2 border-b p-4">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="-ml-1 shrink-0 md:hidden"
        aria-label="Open chat history"
        onClick={onOpenSidebar}
      >
        <PanelLeft className="size-4" />
      </Button>
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-xl font-semibold tracking-tight">Good Morning, {name}</h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s your current session — summary, code, design, and research in one place.
        </p>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="-mr-1 shrink-0 md:hidden"
        aria-label="Open quick access"
        onClick={onOpenQuickAccess}
      >
        <Menu className="size-4" />
      </Button>
    </div>
  );
}
