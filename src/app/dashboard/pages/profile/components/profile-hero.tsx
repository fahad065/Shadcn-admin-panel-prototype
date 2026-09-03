import { CalendarDays, Flag, Link as LinkIcon, MapPin, MessageSquare, MoreHorizontal, Share2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { JoinButton } from "./join-button";

export function ProfileHero() {
  return (
    <div>
      <div className="h-40 rounded-xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 md:h-48" />

      <div className="px-4 sm:px-6">
        <div className="-mt-12 flex flex-col gap-4 md:-mt-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-4">
            <Avatar className="size-24 border-4 border-background md:size-28">
              <AvatarFallback className="bg-primary text-2xl font-semibold text-primary-foreground">
                SK
              </AvatarFallback>
            </Avatar>
            <div className="sm:pb-1">
              <h1 className="text-xl font-semibold md:text-2xl">Sasha Kim</h1>
              <p className="text-sm text-muted-foreground">
                Community Lead &amp; Creator &middot; The Forge Collective
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  Portland, OR
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="size-3.5" />
                  Joined January 2021
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:pb-1">
            <Button variant="outline" size="sm" className="gap-1.5">
              <MessageSquare className="size-3.5" />
              Message
            </Button>
            <JoinButton />
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" size="icon" aria-label="More options">
                    <MoreHorizontal className="size-4" />
                  </Button>
                }
              />
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <LinkIcon className="size-4" />
                  Copy profile link
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="size-4" />
                  Share profile
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <Flag className="size-4" />
                  Report profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
