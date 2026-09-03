export type Role = "Admin" | "Editor" | "Member" | "Viewer";

export type UserStatus = "Active" | "Invited" | "Suspended";

export type Plan = "Free" | "Pro" | "Enterprise";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  plan: Plan;
  /** Country name prefixed with its flag emoji, e.g. "🇺🇸 United States". */
  country: string;
  status: UserStatus;
};
