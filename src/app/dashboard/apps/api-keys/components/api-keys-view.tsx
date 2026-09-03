"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

import { ApiKeysTable } from "./api-keys-table";
import { ApiUsageBanner } from "./api-usage-banner";
import { CreateApiKeyDialog } from "./create-api-key-dialog";
import { initialApiKeys } from "./data";
import type { ApiKey } from "./types";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function ApiKeysView() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(initialApiKeys);
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleCreate(apiKey: ApiKey) {
    setApiKeys((prev) => [apiKey, ...prev]);
  }

  function handleRename(id: string, name: string) {
    setApiKeys((prev) =>
      prev.map((key) => (key.id === id ? { ...key, name, updatedAt: today() } : key))
    );
  }

  function handleRevoke(id: string) {
    setApiKeys((prev) =>
      prev.map((key) =>
        key.id === id ? { ...key, status: "Revoked", updatedAt: today() } : key
      )
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="API Keys"
        description="Create and manage API keys to authenticate requests to your account."
        actions={
          <Button size="sm" className="gap-1.5" onClick={() => setDialogOpen(true)}>
            <Plus className="size-4" />
            Create API Key
          </Button>
        }
      />

      <ApiUsageBanner />

      <ApiKeysTable apiKeys={apiKeys} onRename={handleRename} onRevoke={handleRevoke} />

      <CreateApiKeyDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onCreate={handleCreate}
      />
    </div>
  );
}
