import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { RECENT_GENERATIONS } from "./data";
import { ImageTile } from "./image-tile";

export function RecentGenerations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Generations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {RECENT_GENERATIONS.map((image) => (
            <ImageTile
              key={image.id}
              gradient={image.gradient}
              label={`${image.prompt} — generated ${image.timestamp}`}
              caption={
                <div className="flex flex-col gap-0.5">
                  <p className="line-clamp-2 text-xs font-medium text-white">{image.prompt}</p>
                  <p className="text-[11px] text-white/70">
                    {image.style} • {image.timestamp}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
