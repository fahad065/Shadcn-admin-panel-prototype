"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const items = [
  { title: "Profile", href: "/dashboard/pages/settings" },
  { title: "Account", href: "/dashboard/pages/settings/account" },
  { title: "Billing", href: "/dashboard/pages/settings/billing" },
  { title: "Appearance", href: "/dashboard/pages/settings/appearance" },
  { title: "Notifications", href: "/dashboard/pages/settings/notifications" },
  { title: "Display", href: "/dashboard/pages/settings/display" },
];

export function SettingsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
