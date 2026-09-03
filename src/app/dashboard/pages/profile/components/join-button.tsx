"use client";

import { useState } from "react";
import { UserCheck2, UserPlus2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function JoinButton() {
  const [joined, setJoined] = useState(false);

  return (
    <Button
      variant={joined ? "outline" : "default"}
      size="sm"
      className="gap-1.5"
      onClick={() => setJoined((prev) => !prev)}
    >
      {joined ? <UserCheck2 className="size-3.5" /> : <UserPlus2 className="size-3.5" />}
      {joined ? "Joined" : "Join"}
    </Button>
  );
}
