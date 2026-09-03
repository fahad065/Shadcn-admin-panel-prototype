"use client";

import { Compass, Library, Plus, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuickAccessPanelProps {
  onNewChat: () => void;
  className?: string;
}

export function QuickAccessPanel({ onNewChat, className }: QuickAccessPanelProps) {
  return (
    <div className={cn("w-full shrink-0 flex-col border-l md:w-[260px]", className)}>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <Button variant="ghost" className="justify-start" onClick={onNewChat}>
          <Plus className="size-4" />
          New Chat
        </Button>
        <Button variant="ghost" className="justify-start">
          <Compass className="size-4" />
          Explore
        </Button>
        <Button variant="ghost" className="justify-start">
          <Library className="size-4" />
          Library
        </Button>
      </div>

      <div className="shrink-0 p-3">
        <Card className="gap-2 bg-primary/5 p-4 ring-primary/15">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="size-4 text-primary" />
          </div>
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock longer sessions, higher usage limits, and priority responses.
          </CardDescription>
          <Button size="sm" className="mt-1 w-full">
            Upgrade
          </Button>
        </Card>
      </div>
    </div>
  );
}
