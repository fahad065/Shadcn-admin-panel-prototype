"use client";

import { useState } from "react";
import { MailPlus, ShieldCheck, UserCheck, Users as UsersIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";

import { countries, initialUsers } from "./data";
import type { EditUserInput } from "./edit-user-dialog";
import { InviteUserDialog, type InviteInput } from "./invite-user-dialog";
import type { Role, User } from "./types";
import { UsersTable } from "./users-table";

let nextInviteId = initialUsers.length + 1;

export function UsersView() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [inviteOpen, setInviteOpen] = useState(false);

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const adminUsers = users.filter((user) => user.role === "Admin").length;
  const pendingInvites = users.filter((user) => user.status === "Invited").length;

  function handleInvite({ email, role }: InviteInput) {
    const newUser: User = {
      id: `user-invite-${nextInviteId++}`,
      name: email.split("@")[0].replace(/[._]/g, " "),
      email,
      role,
      plan: "Free",
      country: countries[0],
      status: "Invited",
    };
    setUsers((current) => [newUser, ...current]);
  }

  function handleEdit(id: string, input: EditUserInput) {
    setUsers((current) =>
      current.map((user) =>
        user.id === id
          ? { ...user, name: input.name, email: input.email, role: input.role }
          : user
      )
    );
  }

  function handleChangeRole(id: string, role: Role) {
    setUsers((current) =>
      current.map((user) => (user.id === id ? { ...user, role } : user))
    );
  }

  function handleRemove(id: string) {
    setUsers((current) => current.filter((user) => user.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Users"
        description="Manage your team's members, roles, and pending invitations."
        actions={
          <Button size="sm" onClick={() => setInviteOpen(true)}>
            Invite User
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Users" value={String(totalUsers)} icon={UsersIcon} />
        <StatCard label="Active" value={String(activeUsers)} icon={UserCheck} />
        <StatCard label="Admins" value={String(adminUsers)} icon={ShieldCheck} />
        <StatCard
          label="Pending Invites"
          value={String(pendingInvites)}
          icon={MailPlus}
        />
      </div>

      <UsersTable
        users={users}
        onEdit={handleEdit}
        onChangeRole={handleChangeRole}
        onRemove={handleRemove}
      />

      <InviteUserDialog
        open={inviteOpen}
        onOpenChange={setInviteOpen}
        onInvite={handleInvite}
      />
    </div>
  );
}
