import { Search } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function GreetingBanner() {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-transparent">
      <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Welcome, Toby 👋 What do you want to learn today?
          </h2>
          <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
            Discover courses, track progress, and achieve your learning goals
            seamlessly.
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-8"
            aria-label="Search courses"
          />
        </div>
      </CardContent>
    </Card>
  );
}
