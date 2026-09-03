"use client";

import { PanelLeft, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { modelOptions } from "./data";

interface ChatHeaderProps {
  model: string;
  onModelChange: (value: string) => void;
  onOpenSidebar?: () => void;
}

export function ChatHeader({ model, onModelChange, onOpenSidebar }: ChatHeaderProps) {
  return (
    <div className="flex shrink-0 items-center justify-between gap-3 border-b p-3">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="-ml-1 md:hidden"
          aria-label="Open chat history"
          onClick={onOpenSidebar}
        >
          <PanelLeft className="size-4" />
        </Button>
        <Sparkles className="size-4 text-muted-foreground" />
        <p className="text-sm font-medium">AI Assistant</p>
      </div>
      <Select value={model} onValueChange={(value) => onModelChange(String(value))}>
        <SelectTrigger aria-label="Select model">
          <SelectValue placeholder="Select model" />
        </SelectTrigger>
        <SelectContent>
          {modelOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
