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

import { CopyButton } from "./copy-button";
import { generateApiKey, maskKey, scopes } from "./data";
import type { ApiKey, Scope } from "./types";

export function CreateApiKeyDialog({
  open,
  onOpenChange,
  onCreate,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (apiKey: ApiKey) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {open ? (
          <CreateApiKeyFlow onCreate={onCreate} onOpenChange={onOpenChange} />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function CreateApiKeyFlow({
  onCreate,
  onOpenChange,
}: {
  onCreate: (apiKey: ApiKey) => void;
  onOpenChange: (open: boolean) => void;
}) {
  // Mounted fresh each time the dialog opens, so state naturally starts blank.
  const [name, setName] = useState("");
  const [scope, setScope] = useState<Scope>(scopes[0]);
  const [createdKey, setCreatedKey] = useState<ApiKey | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;

    const today = new Date().toISOString().slice(0, 10);
    const apiKey: ApiKey = {
      id: crypto.randomUUID(),
      name: name.trim(),
      key: generateApiKey(),
      scope,
      status: "Active",
      createdAt: today,
      updatedAt: today,
    };

    onCreate(apiKey);
    setCreatedKey(apiKey);
  }

  if (createdKey) {
    return (
      <div className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>API key created</DialogTitle>
          <DialogDescription>
            Copy your new key now — for your security, you won&apos;t be able to see
            it again.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-1.5 rounded-lg border bg-muted/50 p-2.5">
          <code className="flex-1 truncate font-mono text-xs">{createdKey.key}</code>
          <CopyButton value={createdKey.key} label="Copy API key" />
        </div>

        <p className="text-xs text-muted-foreground">
          It will be shown as <code className="font-mono">{maskKey(createdKey.key)}</code>{" "}
          everywhere else from now on.
        </p>

        <DialogFooter>
          <Button type="button" onClick={() => onOpenChange(false)}>
            Done
          </Button>
        </DialogFooter>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>Create API key</DialogTitle>
        <DialogDescription>
          Give the key a descriptive name and choose how much access it needs.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="new-key-name">Name</Label>
        <Input
          id="new-key-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="e.g. Production Server"
          autoFocus
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Scope</Label>
        <Select value={scope} onValueChange={(value) => setScope(value as Scope)}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {scopes.map((option) => (
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
        <Button type="submit">Create</Button>
      </DialogFooter>
    </form>
  );
}
