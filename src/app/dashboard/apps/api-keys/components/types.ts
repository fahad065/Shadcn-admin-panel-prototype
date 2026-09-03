export type Scope = "Read Only" | "Read & Write" | "Full Access";

export type ApiKeyStatus = "Active" | "Revoked" | "Expired";

export type ApiKey = {
  id: string;
  name: string;
  /** Full, unmasked key value. Only ever shown once, right after creation. */
  key: string;
  scope: Scope;
  status: ApiKeyStatus;
  /** ISO date string, e.g. "2026-01-14". */
  createdAt: string;
  /** ISO date string, e.g. "2026-01-14". */
  updatedAt: string;
};
