"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Pause, Play } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatTime } from "./format-time";
import { generateHeights } from "./generate-heights";
import { WaveformBars } from "./waveform-bars";

const BAR_COUNT = 36;
const TICK_MS = 100;

export function AudioPlayerCard({
  id,
  text,
  voiceName,
  durationSeconds,
}: {
  id: string;
  text: string;
  voiceName: string;
  durationSeconds: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const heights = useMemo(() => generateHeights(id, BAR_COUNT), [id]);

  useEffect(() => {
    if (!isPlaying) return;

    const stepsToFinish = Math.max(1, (durationSeconds * 1000) / TICK_MS);
    const increment = 100 / stepsToFinish;

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = current + increment;
        if (next >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [isPlaying, durationSeconds]);

  const elapsedSeconds = (progress / 100) * durationSeconds;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Audio</CardTitle>
        <CardDescription className="line-clamp-1">{text}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{voiceName}</Badge>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="default"
            size="icon"
            className="shrink-0 rounded-full"
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>

          <WaveformBars heights={heights} progress={progress} />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0"
            aria-label="Download audio"
            onClick={() => toast.success("Download started")}
          >
            <Download />
          </Button>
        </div>

        <div className="flex justify-end text-xs tabular-nums text-muted-foreground">
          {formatTime(elapsedSeconds)} / {formatTime(durationSeconds)}
        </div>
      </CardContent>
    </Card>
  );
}
