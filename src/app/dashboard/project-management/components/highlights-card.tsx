import { ArrowDownLeft, ArrowUpRight, Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Highlight = {
  label: string;
  value: string;
  positive: boolean;
  icon?: "star" | null;
};

const highlights: Highlight[] = [
  { label: "Avg. Client Rating", value: "7.8 / 10", positive: true, icon: "star" },
  { label: "Avg. Quotes", value: "730", positive: false },
  { label: "Avg. Agent Earnings", value: "$2,309", positive: true },
];

export function HighlightsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Highlights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 divide-y">
        {highlights.map((highlight) => (
          <div
            key={highlight.label}
            className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
          >
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              {highlight.icon === "star" ? (
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
              ) : null}
              {highlight.label}
            </span>
            <span
              className={cn(
                "flex items-center gap-1 text-sm font-medium",
                highlight.positive ? "text-emerald-600 dark:text-emerald-500" : "text-destructive"
              )}
            >
              {highlight.positive ? (
                <ArrowUpRight className="size-3.5" />
              ) : (
                <ArrowDownLeft className="size-3.5" />
              )}
              {highlight.value}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
