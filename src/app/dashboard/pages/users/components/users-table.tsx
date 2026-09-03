"use client";

import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, ShieldCheck, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EditUserDialog, type EditUserInput } from "./edit-user-dialog";
import { planStyles, roles, roleStyles, statusStyles } from "./data";
import type { Role, User } from "./types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function UsersTable({
  users,
  onEdit,
  onChangeRole,
  onRemove,
}: {
  users: User[];
  onEdit: (id: string, input: EditUserInput) => void;
  onChangeRole: (id: string, role: Role) => void;
  onRemove: (id: string) => void;
}) {
  const [editTarget, setEditTarget] = useState<User | null>(null);
  const [removeTarget, setRemoveTarget] = useState<User | null>(null);

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarFallback className="text-xs">
              {initials(row.original.name)}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">{row.original.name}</p>
        </div>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <Badge variant="secondary" className={roleStyles[row.original.role]}>
          {row.original.role}
        </Badge>
      ),
    },
    {
      accessorKey: "plan",
      header: "Plan",
      cell: ({ row }) => (
        <Badge variant="secondary" className={planStyles[row.original.plan]}>
          {row.original.plan}
        </Badge>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <span className="text-sm text-muted-foreground">{row.original.email}</span>
      ),
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => (
        <span className="text-sm text-muted-foreground">{row.original.country}</span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="secondary" className={statusStyles[row.original.status]}>
          {row.original.status}
        </Badge>
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MoreHorizontal className="size-4" />
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setEditTarget(row.original)}>
              <Pencil className="size-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <ShieldCheck className="size-4" />
                Change Role
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Assign role</DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuRadioGroup
                  value={row.original.role}
                  onValueChange={(value) =>
                    onChangeRole(row.original.id, value as Role)
                  }
                >
                  {roles.map((role) => (
                    <DropdownMenuRadioItem key={role} value={role}>
                      {role}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => setRemoveTarget(row.original)}
            >
              <Trash2 className="size-4" />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={users} pageSize={8} itemLabel="users" />

      <EditUserDialog
        user={editTarget}
        onOpenChange={(open) => {
          if (!open) setEditTarget(null);
        }}
        onSave={(id, input) => {
          onEdit(id, input);
          setEditTarget(null);
        }}
      />

      <AlertDialog
        open={removeTarget !== null}
        onOpenChange={(open) => {
          if (!open) setRemoveTarget(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove user?</AlertDialogTitle>
            <AlertDialogDescription>
              {removeTarget ? (
                <>
                  This will permanently remove{" "}
                  <span className="font-medium text-foreground">
                    {removeTarget.name}
                  </span>{" "}
                  and revoke their access. This action cannot be undone.
                </>
              ) : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                if (!removeTarget) return;
                onRemove(removeTarget.id);
                setRemoveTarget(null);
              }}
            >
              Remove user
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
