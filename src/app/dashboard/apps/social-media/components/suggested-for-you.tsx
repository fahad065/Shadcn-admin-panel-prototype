"use client";

import { useState } from "react";
import { UserCheck, UserPlus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SuggestedAccount = {
  id: string;
  name: string;
  handle: string;
  initials: string;
  avatarClassName: string;
  followingByDefault?: boolean;
};

const suggestedAccounts: SuggestedAccount[] = [
  {
    id: "1",
    name: "Ivy Sutherland",
    handle: "ivy.sutherland",
    initials: "IS",
    avatarClassName: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
    followingByDefault: true,
  },
  {
    id: "2",
    name: "Marcus Feld",
    handle: "marcus.feld",
    initials: "MF",
    avatarClassName: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  },
  {
    id: "3",
    name: "Talia Novak",
    handle: "talia.novak",
    initials: "TN",
    avatarClassName: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  {
    id: "4",
    name: "Ren Osei",
    handle: "ren.osei",
    initials: "RO",
    avatarClassName: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "5",
    name: "Camille Voss",
    handle: "camille.voss",
    initials: "CV",
    avatarClassName: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
  },
  {
    id: "6",
    name: "Jonas Ekberg",
    handle: "jonas.ekberg",
    initials: "JE",
    avatarClassName: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
  },
];

function SuggestedRow({ account }: { account: SuggestedAccount }) {
  const [following, setFollowing] = useState(Boolean(account.followingByDefault));

  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback className={account.avatarClassName}>{account.initials}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{account.name}</p>
        <p className="truncate text-xs text-muted-foreground">@{account.handle}</p>
      </div>
      <Button
        variant={following ? "outline" : "default"}
        size="sm"
        className="gap-1.5"
        aria-pressed={following}
        onClick={() => setFollowing((prev) => !prev)}
      >
        {following ? <UserCheck className="size-3.5" /> : <UserPlus className="size-3.5" />}
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}

export function SuggestedForYou() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested For You</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {suggestedAccounts.map((account) => (
          <SuggestedRow key={account.id} account={account} />
        ))}
      </CardContent>
    </Card>
  );
}
