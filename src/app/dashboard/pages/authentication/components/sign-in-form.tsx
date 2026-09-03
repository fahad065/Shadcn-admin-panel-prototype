"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type { AuthTab } from "./auth-card";
import { GitHubIcon, GoogleIcon } from "./social-icons";

export function SignInForm({
  onSwitchTab,
}: {
  onSwitchTab: (tab: AuthTab) => void;
}) {
  const [email, setEmail] = React.useState("demo@xantory.com");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("This is a demo — no account was signed in.");
  }

  function handleSocialSignIn(provider: string) {
    toast.success(`This is a demo — ${provider} sign-in isn't connected.`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="sign-in-email">Email</Label>
        <Input
          id="sign-in-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="sign-in-password">Password</Label>
        <Input
          id="sign-in-password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="remember-me" className="font-normal">
          <Checkbox
            id="remember-me"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked)}
          />
          Remember me
        </Label>
        <button
          type="button"
          onClick={() => onSwitchTab("forgot-password")}
          className="text-sm font-medium text-primary hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">OR</span>
        <Separator className="flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialSignIn("Google")}
        >
          <GoogleIcon className="size-4" />
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialSignIn("GitHub")}
        >
          <GitHubIcon className="size-4" />
          GitHub
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={() => onSwitchTab("sign-up")}
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </button>
      </p>
    </form>
  );
}
