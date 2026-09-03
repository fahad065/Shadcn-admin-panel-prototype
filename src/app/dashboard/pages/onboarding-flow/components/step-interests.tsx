"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { OnboardingData } from "./onboarding-wizard";

const interestOptions = [
  { id: "design", label: "Design", emoji: "🎨" },
  { id: "development", label: "Development", emoji: "💻" },
  { id: "marketing", label: "Marketing", emoji: "📈" },
  { id: "analytics", label: "Analytics", emoji: "📊" },
  { id: "writing", label: "Writing", emoji: "✍️" },
  { id: "music", label: "Music", emoji: "🎵" },
  { id: "photography", label: "Photography", emoji: "📷" },
  { id: "gaming", label: "Gaming", emoji: "🎮" },
  { id: "fitness", label: "Fitness", emoji: "🏃" },
  { id: "cooking", label: "Cooking", emoji: "🍳" },
  { id: "travel", label: "Travel", emoji: "✈️" },
  { id: "reading", label: "Reading", emoji: "📚" },
  { id: "film", label: "Film", emoji: "🎬" },
  { id: "wellness", label: "Wellness", emoji: "🧘" },
  { id: "finance", label: "Finance", emoji: "💰" },
  { id: "sustainability", label: "Sustainability", emoji: "🌱" },
] as const;

export function StepInterests({
  data,
  onChange,
  onNext,
}: {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
  onNext: () => void;
}) {
  const selected = React.useMemo(
    () => new Set(data.interests),
    [data.interests]
  );

  const toggleInterest = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    onChange({ interests: Array.from(next) });
  };

  return (
    <>
      <CardHeader className="items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="size-8 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-1.5">
          <CardTitle className="text-xl">What sparks your interest?</CardTitle>
          <CardDescription className="text-balance">
            Pick a few topics you care about so we can tailor your dashboard
            and recommendations around them.
          </CardDescription>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {interestOptions.map((interest) => {
            const isSelected = selected.has(interest.id);

            return (
              <button
                key={interest.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => toggleInterest(interest.id)}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center text-sm font-medium transition-colors",
                  isSelected
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground hover:bg-muted/50"
                )}
              >
                <span className="text-xl" aria-hidden="true">
                  {interest.emoji}
                </span>
                {interest.label}
              </button>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          className="w-full"
          onClick={onNext}
          disabled={selected.size === 0}
        >
          Continue ({selected.size} selected)
          <ArrowRight />
        </Button>
      </CardFooter>
    </>
  );
}
