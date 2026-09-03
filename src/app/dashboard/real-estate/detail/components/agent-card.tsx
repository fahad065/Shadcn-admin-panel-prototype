import { Mail, Phone } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { listingAgent } from "./data";

export function AgentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Listing Agent</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback>{listingAgent.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{listingAgent.name}</p>
            <p className="text-xs text-muted-foreground">{listingAgent.role}</p>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Phone className="size-3.5 shrink-0" />
            {listingAgent.phone}
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <Mail className="size-3.5 shrink-0" />
            {listingAgent.email}
          </span>
        </div>

        <Button className="w-full">Contact Agent</Button>
      </CardContent>
    </Card>
  );
}
