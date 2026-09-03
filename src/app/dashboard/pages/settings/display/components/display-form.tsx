"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const sidebarItems = ["Recents", "Home", "Applications", "Desktop", "Downloads", "Documents"];

export function DisplayForm() {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({
    Recents: true,
    Home: true,
    Applications: false,
    Desktop: true,
    Downloads: false,
    Documents: false,
  });

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium">Sidebar</p>
          <p className="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>
        </div>
        <div className="space-y-3">
          {sidebarItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Checkbox
                id={`sidebar-${item}`}
                checked={checked[item]}
                onCheckedChange={(value) =>
                  setChecked((prev) => ({ ...prev, [item]: value === true }))
                }
              />
              <Label htmlFor={`sidebar-${item}`} className="font-normal">
                {item}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button type="submit">Update display</Button>
    </form>
  );
}
