export type Voice = {
  id: string;
  name: string;
  descriptor: string;
};

export const voices: Voice[] = [
  { id: "nova", name: "Nova", descriptor: "Warm, narrative" },
  { id: "atlas", name: "Atlas", descriptor: "Deep, authoritative" },
  { id: "willow", name: "Willow", descriptor: "Soft, calming" },
  { id: "ember", name: "Ember", descriptor: "Bright, energetic" },
  { id: "sable", name: "Sable", descriptor: "Smooth, professional" },
  { id: "juniper", name: "Juniper", descriptor: "Youthful, upbeat" },
];

export const DEFAULT_SPEED = 90;
export const DEFAULT_STABILITY = 20;
export const DEFAULT_SIMILARITY = 60;
export const DEFAULT_STYLE_EXAGGERATION = 0;
export const DEFAULT_SPEAKER_BOOST = true;

export const creditsRemaining = 110_000;

/**
 * Maps the 0-100 "Slower ↔ Faster" slider value onto a playback-rate
 * multiplier used to estimate generated clip duration.
 */
export function speedPercentToMultiplier(percent: number) {
  return 0.7 + (percent / 100) * 0.5;
}

export type RecentGeneration = {
  id: string;
  text: string;
  voiceName: string;
  duration: string;
  createdAt: string;
};

export const recentGenerations: RecentGeneration[] = [
  {
    id: "gen-1",
    text: "Welcome to our quarterly update. We're excited to share the highlights of this season's progress and what's ahead.",
    voiceName: "Nova",
    duration: "0:14",
    createdAt: "2 hours ago",
  },
  {
    id: "gen-2",
    text: "Please remember to submit your feedback form before Friday so we can improve the next release.",
    voiceName: "Sable",
    duration: "0:09",
    createdAt: "5 hours ago",
  },
  {
    id: "gen-3",
    text: "The weather across the coast will stay mild this week, with light winds and clear skies expected through Sunday.",
    voiceName: "Willow",
    duration: "0:12",
    createdAt: "Yesterday",
  },
  {
    id: "gen-4",
    text: "Thank you for calling support. Your estimated wait time is currently under three minutes.",
    voiceName: "Atlas",
    duration: "0:08",
    createdAt: "Yesterday",
  },
  {
    id: "gen-5",
    text: "In today's lesson, we'll explore how simple habits can lead to meaningful long-term change.",
    voiceName: "Juniper",
    duration: "0:10",
    createdAt: "2 days ago",
  },
  {
    id: "gen-6",
    text: "This is a reminder that your appointment has been confirmed for next Tuesday at ten in the morning.",
    voiceName: "Ember",
    duration: "0:11",
    createdAt: "3 days ago",
  },
  {
    id: "gen-7",
    text: "Our new onboarding guide walks new hires through every step of their first week.",
    voiceName: "Nova",
    duration: "0:07",
    createdAt: "4 days ago",
  },
  {
    id: "gen-8",
    text: "Let's take a short break and reconvene in the main hall in fifteen minutes.",
    voiceName: "Sable",
    duration: "0:06",
    createdAt: "5 days ago",
  },
];
