"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const emailPrefs = [
  { key: "communication", title: "Communication emails", description: "Receive emails about your account activity." },
  { key: "marketing", title: "Marketing emails", description: "Receive emails about new products, features, and more." },
  { key: "social", title: "Social emails", description: "Receive emails for friend requests, follows, and more." },
  { key: "security", title: "Security emails", description: "Receive emails about your account activity and security." },
];

export function NotificationsForm() {
  const [notifyAbout, setNotifyAbout] = React.useState("all");
  const [toggles, setToggles] = React.useState<Record<string, boolean>>({
    communication: true,
    marketing: false,
    social: false,
    security: true,
  });
  const [mobileOverride, setMobileOverride] = React.useState(false);

  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-3">
        <p className="text-sm font-medium">Notify me about...</p>
        <RadioGroup value={notifyAbout} onValueChange={(value) => setNotifyAbout(String(value))}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="all" id="notify-all" />
            <Label htmlFor="notify-all" className="font-normal">All new messages</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="mentions" id="notify-mentions" />
            <Label htmlFor="notify-mentions" className="font-normal">Direct messages and mentions</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="none" id="notify-none" />
            <Label htmlFor="notify-none" className="font-normal">Nothing</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <p className="text-sm font-medium">Email Notifications</p>
        {emailPrefs.map((pref) => (
          <div key={pref.key} className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">{pref.title}</p>
              <p className="text-sm text-muted-foreground">{pref.description}</p>
            </div>
            <Switch
              checked={toggles[pref.key]}
              onCheckedChange={(checked) =>
                setToggles((prev) => ({ ...prev, [pref.key]: checked }))
              }
            />
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="mobile-override"
          checked={mobileOverride}
          onCheckedChange={(checked) => setMobileOverride(checked === true)}
        />
        <Label htmlFor="mobile-override" className="font-normal text-sm">
          Use different settings for my mobile devices.{" "}
          <Link href="/dashboard/pages/settings/notifications" className="text-foreground underline underline-offset-4">
            Set mobile settings
          </Link>
        </Label>
      </div>

      <Button type="submit">Update notifications</Button>
    </form>
  );
}
