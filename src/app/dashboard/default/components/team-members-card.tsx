"use client";

import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type Role = "Owner" | "Member" | "Viewer" | "Billing";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

const initialMembers: TeamMember[] = [
  { id: "1", name: "Priya Natarajan", email: "priya.n@litware.com", role: "Owner" },
  { id: "2", name: "Oscar Bennett", email: "oscar.bennett@northwind.com", role: "Member" },
  { id: "3", name: "Freya Lindqvist", email: "freya.lindqvist@contoso.com", role: "Viewer" },
  { id: "4", name: "Devon Marsh", email: "devon.marsh@fabrikam.com", role: "Billing" },
];

const roles: Role[] = ["Owner", "Member", "Viewer", "Billing"];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamMembersCard() {
  const [members, setMembers] = useState(initialMembers);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Invite your team members to collaborate.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{initials(member.name)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium">{member.name}</p>
              <p className="truncate text-xs text-muted-foreground">{member.email}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" size="sm" className="gap-1">
                    {member.role}
                    <ChevronDown className="size-3.5" />
                  </Button>
                }
              />
              <DropdownMenuContent align="end">
                {roles.map((role) => (
                  <DropdownMenuItem
                    key={role}
                    onClick={() =>
                      setMembers((prev) =>
                        prev.map((m) => (m.id === member.id ? { ...m, role } : m))
                      )
                    }
                  >
                    {role}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
