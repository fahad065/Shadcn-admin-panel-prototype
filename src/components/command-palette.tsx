"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { navSections } from "@/config/nav";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useCommandPalette } from "@/components/command-palette-provider";

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();

  function go(url: string) {
    setOpen(false);
    router.push(url);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Search for a command to run..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {navSections.map((section, index) => (
            <React.Fragment key={section.label}>
              <CommandGroup heading={section.label}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.url}
                    value={item.title}
                    onSelect={() => go(item.url)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              {index < navSections.length - 1 ? <CommandSeparator /> : null}
            </React.Fragment>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
