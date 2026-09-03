"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { roles } from "./data";
import type { Role } from "./types";

export type InviteInput = {
  email: string;
  role: Role;
};

export function InviteUserDialog({
  open,
  onOpenChange,
  onInvite,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInvite: (input: InviteInput) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        {open ? (
          <InviteForm onInvite={onInvite} onOpenChange={onOpenChange} />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function InviteForm({
  onInvite,
  onOpenChange,
}: {
  onInvite: (input: InviteInput) => void;
  onOpenChange: (open: boolean) => void;
}) {
  // Mounted fresh each time the dialog opens, so state naturally starts blank.
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("Member");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    onInvite({ email: email.trim(), role });
    onOpenChange(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>Invite user</DialogTitle>
        <DialogDescription>
          Send an invite by email. They&apos;ll show up as pending until they
          accept.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="invite-email">Email</Label>
        <Input
          id="invite-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@company.com"
          autoFocus
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Role</Label>
        <Select value={role} onValueChange={(value) => setRole(value as Role)}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {roles.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
          Cancel
        </Button>
        <Button type="submit">Send Invite</Button>
      </DialogFooter>
    </form>
  );
}
