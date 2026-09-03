"use client";

import { useState } from "react";
import { ShieldAlert, X } from "lucide-react";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function VerificationAlert() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Alert>
      <ShieldAlert />
      <AlertTitle>Verify your account</AlertTitle>
      <AlertDescription>
        Confirm your identity to increase your sending limits and unlock same-day
        transfers.
      </AlertDescription>
      <AlertAction className="flex items-center gap-1.5">
        <Button size="sm">Verify now</Button>
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
