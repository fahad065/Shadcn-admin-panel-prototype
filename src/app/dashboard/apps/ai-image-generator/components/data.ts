export const GRADIENTS = [
  "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500",
  "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400",
  "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
  "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
  "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600",
  "bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600",
  "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600",
] as const;

export const STYLE_OPTIONS = [
  { value: "photorealistic", label: "Photorealistic" },
  { value: "illustration", label: "Illustration" },
  { value: "3d-render", label: "3D Render" },
  { value: "anime", label: "Anime" },
] as const;

export const ASPECT_RATIO_OPTIONS = [
  { value: "square", label: "Square (1:1)" },
  { value: "portrait", label: "Portrait (3:4)" },
  { value: "landscape", label: "Landscape (4:3)" },
] as const;

export const QUALITY_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "standard", label: "Standard" },
  { value: "high", label: "High" },
] as const;

export const COUNT_OPTIONS = [
  { value: "1", label: "1 image" },
  { value: "2", label: "2 images" },
  { value: "4", label: "4 images" },
] as const;

export const NEGATIVE_PROMPT_PLACEHOLDER =
  "Things to keep out of the image — e.g. \"blurry, watermark, extra fingers, low contrast\"";

export const QUICK_PROMPT_PRESETS = [
  {
    label: "Cinematic portrait",
    prompt:
      "A cinematic close-up portrait under moody rim lighting, shallow depth of field, subtle film grain",
  },
  {
    label: "Isometric icon",
    prompt:
      "A minimal isometric icon of a potted plant on a soft pastel gradient background, clean vector shading",
  },
  {
    label: "Product photography",
    prompt:
      "A studio product photo of a ceramic coffee mug on a marble surface, softbox lighting, subtle reflection",
  },
  {
    label: "Fantasy landscape",
    prompt:
      "A sprawling fantasy landscape with floating islands, distant waterfalls, and a castle silhouette at sunset",
  },
  {
    label: "Retro poster",
    prompt:
      "A retro travel poster of a coastal town, bold flat colors, sun-faded texture, 1960s print style",
  },
] as const;

export type GeneratedImage = {
  id: string;
  prompt: string;
  gradient: (typeof GRADIENTS)[number];
  style: string;
  timestamp: string;
};

export const RECENT_GENERATIONS: GeneratedImage[] = [
  {
    id: "recent-1",
    prompt: "A lighthouse on a cliff overlooking a stormy teal ocean at dusk",
    gradient: GRADIENTS[7],
    style: "Photorealistic",
    timestamp: "2 hours ago",
  },
  {
    id: "recent-2",
    prompt: "A cozy reading nook with a cat curled up on a velvet armchair",
    gradient: GRADIENTS[2],
    style: "Illustration",
    timestamp: "4 hours ago",
  },
  {
    id: "recent-3",
    prompt: "A low-poly fox running through a snowy pine forest",
    gradient: GRADIENTS[3],
    style: "3D Render",
    timestamp: "6 hours ago",
  },
  {
    id: "recent-4",
    prompt: "A samurai standing under falling cherry blossoms at sunrise",
    gradient: GRADIENTS[5],
    style: "Anime",
    timestamp: "9 hours ago",
  },
  {
    id: "recent-5",
    prompt: "A floating city of glass towers above the clouds",
    gradient: GRADIENTS[0],
    style: "3D Render",
    timestamp: "Yesterday",
  },
  {
    id: "recent-6",
    prompt: "A vintage typewriter surrounded by scattered autumn leaves",
    gradient: GRADIENTS[6],
    style: "Photorealistic",
    timestamp: "Yesterday",
  },
  {
    id: "recent-7",
    prompt: "A jellyfish drifting through a bioluminescent deep-sea trench",
    gradient: GRADIENTS[1],
    style: "Illustration",
    timestamp: "2 days ago",
  },
  {
    id: "recent-8",
    prompt: "A hot air balloon festival over a lavender field at golden hour",
    gradient: GRADIENTS[4],
    style: "Photorealistic",
    timestamp: "3 days ago",
  },
];

export const SAMPLE_PROMPT_PLACEHOLDER =
  "Describe the image you want to create — e.g. \"A cabin in a misty pine forest, morning light, ultra detailed\"";
