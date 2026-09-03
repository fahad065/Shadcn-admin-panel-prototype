"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AuthTab } from "./auth-card";

export function ForgotPasswordForm({
  onSwitchTab,
}: {
  onSwitchTab: (tab: AuthTab) => void;
}) {
  const [email, setEmail] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("This is a demo — no reset link was sent.");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Enter the email address associated with your account and we&apos;ll
        send you a link to reset your password.
      </p>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="forgot-password-email">Email</Label>
        <Input
          id="forgot-password-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        <button
          type="button"
          onClick={() => onSwitchTab("sign-in")}
          className="font-medium text-primary hover:underline"
        >
          Back to Sign In
        </button>
      </p>
    </form>
  );
}
