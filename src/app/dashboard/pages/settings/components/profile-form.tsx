"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProfileForm() {
  const [name, setName] = React.useState("Toby Belhome");
  const [dob, setDob] = React.useState("1994-03-12");
  const [language, setLanguage] = React.useState("en");

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <p className="text-sm text-muted-foreground">
          This is the name that will be displayed on your profile and in emails.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dob">Date of birth</Label>
        <Input
          id="dob"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="max-w-xs"
        />
        <p className="text-sm text-muted-foreground">
          This is used to calculate your age.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="language">Language</Label>
        <Select value={language} onValueChange={(value) => setLanguage(String(value))}>
          <SelectTrigger id="language" className="max-w-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
            <SelectItem value="pt">Portuguese</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          This is the language that will be used in the dashboard.
        </p>
      </div>

      <Button type="submit">Update account</Button>
    </form>
  );
}
