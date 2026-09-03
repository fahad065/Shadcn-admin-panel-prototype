import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

import { designPreview } from "./data";

export function DesignTab() {
  return (
    <Card size="sm" className="overflow-hidden">
      <div className="flex aspect-[16/7] w-full items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-6">
        <div className="flex w-full max-w-sm flex-col gap-2 rounded-lg border border-dashed border-foreground/15 bg-background/60 p-4">
          <div className="h-2.5 w-1/3 rounded-full bg-foreground/20" />
          <div className="h-2 w-full rounded-full bg-foreground/10" />
          <div className="h-2 w-5/6 rounded-full bg-foreground/10" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-md bg-foreground/10" />
            <div className="h-12 rounded-md bg-foreground/10" />
            <div className="h-12 rounded-md bg-foreground/10" />
          </div>
        </div>
      </div>
      <CardContent className="flex flex-col gap-1">
        <CardTitle>{designPreview.title}</CardTitle>
        <CardDescription>{designPreview.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
