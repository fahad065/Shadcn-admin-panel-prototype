import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ErrorScreen({
  code,
  icon: Icon,
  iconWrapperClassName,
  iconClassName,
  glowClassName,
  title,
  description,
  actions,
}: {
  code?: string;
  icon?: LucideIcon;
  iconWrapperClassName?: string;
  iconClassName?: string;
  glowClassName?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="relative mb-6 flex items-center justify-center">
        <div
          className={cn(
            "absolute size-28 rounded-full blur-2xl",
            glowClassName ?? "bg-primary/10"
          )}
        />
        {code ? (
          <span className="relative bg-gradient-to-b from-foreground to-foreground/30 bg-clip-text text-7xl font-bold text-transparent md:text-8xl">
            {code}
          </span>
        ) : Icon ? (
          <div
            className={cn(
              "relative flex size-20 items-center justify-center rounded-full",
              iconWrapperClassName ?? "bg-muted"
            )}
          >
            <Icon className={cn("size-9", iconClassName ?? "text-foreground")} />
          </div>
        ) : null}
      </div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actions ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {actions}
        </div>
      ) : null}
    </div>
  );
}
