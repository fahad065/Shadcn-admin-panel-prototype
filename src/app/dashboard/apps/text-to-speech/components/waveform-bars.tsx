import { cn } from "@/lib/utils";

export function WaveformBars({
  heights,
  progress,
  className,
}: {
  /** Bar heights as percentages (0-100). */
  heights: number[];
  /** Playback progress as a percentage (0-100) used to color played bars. */
  progress: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex h-12 flex-1 items-center gap-0.5", className)}
      role="img"
      aria-label="Audio waveform"
    >
      {heights.map((height, index) => {
        const barPosition = (index / heights.length) * 100;
        const played = barPosition <= progress;
        return (
          <span
            key={index}
            className={cn(
              "w-full min-w-0.5 flex-1 rounded-full transition-colors",
              played ? "bg-primary" : "bg-muted-foreground/25"
            )}
            style={{ height: `${height}%` }}
          />
        );
      })}
    </div>
  );
}
