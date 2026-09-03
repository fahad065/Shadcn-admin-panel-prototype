"use client";

import { useState } from "react";
import { UserCheck, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <Button
      variant={following ? "outline" : "default"}
      size="sm"
      className="gap-1.5"
      onClick={() => setFollowing((prev) => !prev)}
    >
      {following ? (
        <UserCheck className="size-3.5" />
      ) : (
        <UserPlus className="size-3.5" />
      )}
      {following ? "Following" : "Follow"}
    </Button>
  );
}
