import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { summaryHighlights, summaryOverview } from "./data";

export function SummaryTab() {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Session recap</CardTitle>
        <CardDescription>{summaryOverview}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          {summaryHighlights.map((item) => (
            <li key={item.id} className="flex items-start gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
