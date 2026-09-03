"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AppearanceForm() {
  const { setTheme } = useTheme();
  const [font, setFont] = React.useState("dm-sans");

  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2">
        <label className="text-sm font-medium">Font</label>
        <Select value={font} onValueChange={(value) => setFont(String(value))}>
          <SelectTrigger className="max-w-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dm-sans">DM Sans</SelectItem>
            <SelectItem value="inter">Inter</SelectItem>
            <SelectItem value="system">System UI</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Set the font you want to use in the dashboard.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Theme</p>
        <p className="text-sm text-muted-foreground">
          Select the theme for the dashboard.
        </p>
        <div className="grid max-w-sm grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className="flex flex-col items-center gap-2 rounded-lg border-2 p-3 text-sm font-medium transition-colors border-primary dark:border-transparent dark:bg-muted dark:hover:bg-muted/70"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-background shadow-sm">
              <Sun className="size-4" />
            </span>
            Light
          </button>
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className="flex flex-col items-center gap-2 rounded-lg border-2 p-3 text-sm font-medium transition-colors border-transparent bg-muted hover:bg-muted/70 dark:border-primary dark:bg-transparent"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-foreground shadow-sm">
              <Moon className="size-4 text-background" />
            </span>
            Dark
          </button>
        </div>
      </div>

      <Button type="submit">Update preferences</Button>
    </form>
  );
}
