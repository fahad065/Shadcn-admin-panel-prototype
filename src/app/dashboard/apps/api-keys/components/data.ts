import type { ApiKey, ApiKeyStatus, Scope } from "./types";

export const scopes: Scope[] = ["Read Only", "Read & Write", "Full Access"];

export const scopeStyles: Record<Scope, string> = {
  "Read Only": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Read & Write": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Full Access": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
};

export const statusStyles: Record<ApiKeyStatus, string> = {
  Active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Revoked: "bg-destructive/10 text-destructive",
  Expired: "bg-muted text-muted-foreground",
};

/** Current billing-period usage shown in the quota banner above the table. */
export const apiUsage = {
  plan: "Developer Plan",
  used: 215,
  limit: 2000,
};

export const initialApiKeys: ApiKey[] = [
  {
    id: "key-1",
    name: "Production Server",
    key: "demo_key_51NqT8vXpKzR3mWj0hYc6dLf9aQeB4f2a",
    scope: "Full Access",
    status: "Active",
    createdAt: "2026-01-14",
    updatedAt: "2026-09-01",
  },
  {
    id: "key-2",
    name: "CI/CD Pipeline",
    key: "demo_key_29HpZ6wLbNc4jXk1tRe8oYm5vDgU7q3s",
    scope: "Read & Write",
    status: "Active",
    createdAt: "2026-02-02",
    updatedAt: "2026-09-01",
  },
  {
    id: "key-3",
    name: "Staging Environment",
    key: "demo_key_73MvB2nDpXq9yTh5cRk0eWz6jLaG8f1u",
    scope: "Full Access",
    status: "Active",
    createdAt: "2026-03-20",
    updatedAt: "2026-08-30",
  },
  {
    id: "key-4",
    name: "Analytics Dashboard",
    key: "demo_key_04CxU7rNfBk2wPm9eDvL5tYq8hSj3a6z",
    scope: "Read Only",
    status: "Active",
    createdAt: "2026-04-05",
    updatedAt: "2026-08-19",
  },
  {
    id: "key-5",
    name: "Mobile App (iOS)",
    key: "demo_key_88WkE3pQmXd6vNc1jRt7yLb4oHz9f0g2",
    scope: "Read Only",
    status: "Active",
    createdAt: "2026-05-18",
    updatedAt: "2026-09-01",
  },
  {
    id: "key-6",
    name: "Backup Script",
    key: "demo_key_16TfY9mBkPc3xQw8eVn2dLj5rGa7h4s0",
    scope: "Read & Write",
    status: "Revoked",
    createdAt: "2026-06-30",
    updatedAt: "2026-08-12",
  },
  {
    id: "key-7",
    name: "Zapier Integration",
    key: "demo_key_52QnD8vXpZk1mWc6jYt3oRb9eLf4a7u2",
    scope: "Read Only",
    status: "Active",
    createdAt: "2026-07-22",
    updatedAt: "2026-08-05",
  },
  {
    id: "key-8",
    name: "Legacy Webhook",
    key: "demo_key_37XpC5nQmBk8vTd2jWr6yLa9oEf1h3g0",
    scope: "Full Access",
    status: "Expired",
    createdAt: "2025-11-03",
    updatedAt: "2026-05-03",
  },
];

const KEY_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/** Generates an original, synthetic fake API key string for demo purposes only. */
export function generateApiKey() {
  let random = "";
  for (let i = 0; i < 32; i++) {
    random += KEY_CHARSET[Math.floor(Math.random() * KEY_CHARSET.length)];
  }
  return `demo_key_${random}`;
}

export function maskKey(key: string) {
  const prefix = key.slice(0, 8);
  const last4 = key.slice(-4);
  return `${prefix}${"•".repeat(12)}${last4}`;
}
