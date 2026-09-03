import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TrendingCreator = {
  id: string;
  rank: number;
  name: string;
  handle: string;
  initials: string;
  avatarClassName: string;
  followers: string;
};

const trendingCreators: TrendingCreator[] = [
  {
    id: "1",
    rank: 1,
    name: "Nadia Kessler",
    handle: "nadia.kessler",
    initials: "NK",
    avatarClassName: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400",
    followers: "128k",
  },
  {
    id: "2",
    rank: 2,
    name: "Theo Bramwell",
    handle: "theo.bramwell",
    initials: "TB",
    avatarClassName: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
    followers: "96k",
  },
  {
    id: "3",
    rank: 3,
    name: "Aiko Tanaka",
    handle: "aiko.tanaka.art",
    initials: "AT",
    avatarClassName: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
    followers: "84k",
  },
  {
    id: "4",
    rank: 4,
    name: "Coen Vermeer",
    handle: "coen.vermeer",
    initials: "CV",
    avatarClassName: "bg-lime-500/15 text-lime-600 dark:text-lime-400",
    followers: "71k",
  },
];

export function TrendingCreators() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Creators</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {trendingCreators.map((creator) => (
          <div key={creator.id} className="flex items-center gap-3">
            <span className="w-4 shrink-0 text-center text-xs font-medium text-muted-foreground">
              {creator.rank}
            </span>
            <Avatar>
              <AvatarFallback className={creator.avatarClassName}>
                {creator.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{creator.name}</p>
              <p className="truncate text-xs text-muted-foreground">@{creator.handle}</p>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">
              {creator.followers} followers
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
