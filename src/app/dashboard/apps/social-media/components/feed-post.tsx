"use client";

import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type FeedPostData = {
  id: string;
  name: string;
  handle: string;
  initials: string;
  avatarClassName: string;
  timestamp: string;
  content: string;
  photoGradient?: string;
  likes: number;
  comments: number;
  shares: number;
};

function formatCount(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k` : `${value}`;
}

export function FeedPost({ post }: { post: FeedPostData }) {
  const [liked, setLiked] = useState(false);

  const likeCount = post.likes + (liked ? 1 : 0);

  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className={post.avatarClassName}>{post.initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{post.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              @{post.handle} · {post.timestamp}
            </p>
          </div>
        </div>

        <p className="text-sm text-foreground/90">{post.content}</p>

        {post.photoGradient ? (
          <div className={cn("aspect-video w-full rounded-lg", post.photoGradient)} />
        ) : null}

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={() => setLiked((prev) => !prev)}
            aria-pressed={liked}
            className={cn(
              "flex items-center gap-1.5 transition-colors hover:text-rose-500",
              liked && "text-rose-500"
            )}
          >
            <Heart className={cn("size-3.5", liked && "fill-rose-500")} />
            {formatCount(likeCount)}
          </button>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="size-3.5" />
            {formatCount(post.comments)}
          </span>
          <span className="flex items-center gap-1.5">
            <Share2 className="size-3.5" />
            {formatCount(post.shares)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
