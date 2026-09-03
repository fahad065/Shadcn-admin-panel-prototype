"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Alert>
      <Sparkles />
      <AlertTitle>Unlock every template in the kit</AlertTitle>
      <AlertDescription>
        Enjoy unlimited access to every dashboard template for a small one-time fee — no
        subscription required.
      </AlertDescription>
      <AlertAction className="flex items-center gap-1.5">
        <Button size="sm">See plans</Button>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
        >
          <X />
        </Button>
      </AlertAction>
    </Alert>
  );
}
