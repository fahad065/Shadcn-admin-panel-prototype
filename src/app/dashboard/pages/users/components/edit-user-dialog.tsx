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
import type { Role, User } from "./types";

export type EditUserInput = {
  name: string;
  email: string;
  role: Role;
};

export function EditUserDialog({
  user,
  onOpenChange,
  onSave,
}: {
  user: User | null;
  onOpenChange: (open: boolean) => void;
  onSave: (id: string, input: EditUserInput) => void;
}) {
  return (
    <Dialog
      open={user !== null}
      onOpenChange={(open) => {
        if (!open) onOpenChange(false);
      }}
    >
      <DialogContent className="sm:max-w-sm">
        {user ? (
          <EditUserForm
            key={user.id}
            user={user}
            onCancel={() => onOpenChange(false)}
            onSave={(input) => onSave(user.id, input)}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function EditUserForm({
  user,
  onCancel,
  onSave,
}: {
  user: User;
  onCancel: () => void;
  onSave: (input: EditUserInput) => void;
}) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState<Role>(user.role);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;

    onSave({ name: name.trim(), email: email.trim(), role });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>Edit user</DialogTitle>
        <DialogDescription>
          Update {user.name.split(" ")[0]}&apos;s profile details.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="edit-user-name">Name</Label>
        <Input
          id="edit-user-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoFocus
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="edit-user-email">Email</Label>
        <Input
          id="edit-user-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
}
