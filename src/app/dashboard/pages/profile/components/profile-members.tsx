import { MessageSquare } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Member = {
  name: string;
  role: string;
  initials: string;
};

const members: Member[] = [
  { name: "Owen Marsh", role: "Moderator", initials: "OM" },
  { name: "Talia Fenwick", role: "Chapter Lead · Austin", initials: "TF" },
  { name: "Devon Okoye", role: "Core Contributor", initials: "DO" },
  { name: "Ruth Castellanos", role: "Chapter Lead · Portland", initials: "RC" },
  { name: "Milo Andersen", role: "Workshop Host", initials: "MA" },
  { name: "Yuki Tanaka", role: "Content Partner", initials: "YT" },
  { name: "Harper Lindqvist", role: "New Member", initials: "HL" },
  { name: "Callum Ibe", role: "Sponsor Liaison", initials: "CI" },
  { name: "Noor Al-Sayed", role: "Community Ambassador", initials: "NA" },
];

export function ProfileMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Members</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 sm:grid-cols-2">
          {members.map((member) => (
            <li
              key={member.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" aria-label={`Message ${member.name}`}>
                <MessageSquare className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
