import { MessageSquare, UserPlus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Connection = {
  name: string;
  role: string;
  initials: string;
  mutual: number;
  connected: boolean;
};

const connections: Connection[] = [
  { name: "Marcus Webb", role: "Design Lead, Northlight Labs", initials: "MW", mutual: 12, connected: true },
  { name: "Sofia Reyes", role: "Product Manager, Fieldnote", initials: "SR", mutual: 8, connected: true },
  { name: "Amara Okafor", role: "UX Researcher, Contoso", initials: "AO", mutual: 5, connected: false },
  { name: "Liam Chen", role: "Frontend Engineer, Lumen Studio", initials: "LC", mutual: 20, connected: true },
  { name: "Nadia Petrov", role: "Design Systems Lead, Fabrikam", initials: "NP", mutual: 6, connected: true },
  { name: "Théo Girard", role: "Motion Designer, Studio Aperture", initials: "TG", mutual: 3, connected: false },
  { name: "Hana Kobayashi", role: "Design Ops Manager, Northwind", initials: "HK", mutual: 9, connected: true },
  { name: "Elena Marquez", role: "VP of Design, Litware", initials: "EM", mutual: 15, connected: true },
  { name: "Ravi Deshmukh", role: "Accessibility Specialist, Contoso", initials: "RD", mutual: 4, connected: false },
];

export function ProfileConnections() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {connections.map((connection) => (
        <Card key={connection.name}>
          <CardContent className="flex items-center gap-3">
            <Avatar size="lg">
              <AvatarFallback>{connection.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{connection.name}</p>
              <p className="truncate text-xs text-muted-foreground">{connection.role}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {connection.mutual} mutual connections
              </p>
            </div>
            <Button
              variant={connection.connected ? "outline" : "default"}
              size="sm"
              className="shrink-0 gap-1.5"
            >
              {connection.connected ? (
                <MessageSquare className="size-3.5" />
              ) : (
                <UserPlus className="size-3.5" />
              )}
              {connection.connected ? "Message" : "Connect"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
