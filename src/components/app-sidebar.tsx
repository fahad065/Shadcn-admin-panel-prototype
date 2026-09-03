"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, LayoutGrid, Search } from "lucide-react";

import { useCommandPalette } from "@/components/command-palette-provider";
import { navSections, type NavItem } from "@/config/nav";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

function NavLeaf({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.title}
        isActive={isActive}
        render={<Link href={item.url} />}
      >
        <item.icon />
        <span>{item.title}</span>
      </SidebarMenuButton>
      {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
    </SidebarMenuItem>
  );
}

function NavGroup({ item, pathname }: { item: NavItem; pathname: string }) {
  const isChildActive = item.items!.some((sub) => pathname === sub.url);
  const [open, setOpen] = React.useState(isChildActive);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger
          render={
            <SidebarMenuButton
              tooltip={item.title}
              isActive={isChildActive}
              className="group/collapsible"
            >
              <item.icon />
              <span>{item.title}</span>
              <ChevronRight className="ml-auto transition-transform group-data-[panel-open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          }
        />
        {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items!.map((sub) => (
              <SidebarMenuSubItem key={sub.url}>
                <SidebarMenuSubButton
                  isActive={pathname === sub.url}
                  render={<Link href={sub.url} />}
                >
                  <span>{sub.title}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpen } = useCommandPalette();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/dashboard/default" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <LayoutGrid className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Admin Kit</span>
                <span className="truncate text-xs text-sidebar-foreground/70">
                  shadcn/ui
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="group-data-[collapsible=icon]:hidden mt-1 w-full justify-start gap-2 bg-sidebar text-sidebar-foreground/70 hover:text-sidebar-foreground"
        >
          <Search className="size-4" />
          Search...
          <kbd className="ml-auto rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            ⌘K
          </kbd>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(true)}
          aria-label="Search"
          className="hidden group-data-[collapsible=icon]:flex"
        >
          <Search className="size-4" />
        </Button>
      </SidebarHeader>

      <SidebarContent>
        {navSections.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) =>
                  item.items ? (
                    <NavGroup key={item.url} item={item} pathname={pathname} />
                  ) : (
                    <NavLeaf
                      key={item.url}
                      item={item}
                      isActive={pathname === item.url}
                    />
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
