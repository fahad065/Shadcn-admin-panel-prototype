import { MapPin } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Contact = {
  name: string;
  location: string;
};

const contacts: Contact[] = [
  { name: "Priya Chandrasekaran", location: "Seattle, WA" },
  { name: "Marcus Delgado", location: "Austin, TX" },
  { name: "Elena Kowalski", location: "San Diego, CA" },
  { name: "Owen Bracewell", location: "Nashville, TN" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function LeadsContactCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads Contact</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {contacts.map((contact) => (
          <div key={contact.name} className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarFallback className="text-xs">{initials(contact.name)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{contact.name}</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" />
                {contact.location}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
