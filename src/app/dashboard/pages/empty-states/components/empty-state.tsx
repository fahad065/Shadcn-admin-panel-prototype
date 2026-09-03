import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="flex min-h-[70vh] flex-col items-center justify-center gap-2 px-6 py-16 text-center">
        <div className="relative mb-4 flex items-center justify-center">
          <div className="absolute size-32 rounded-full bg-muted/60 blur-2xl" />
          <div className="relative flex size-24 items-center justify-center rounded-full bg-muted">
            <Icon className="size-10 text-muted-foreground" />
          </div>
        </div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="max-w-md text-sm text-muted-foreground">{description}</p>
        {action ? <div className="mt-6">{action}</div> : null}
      </CardContent>
    </Card>
  );
}
