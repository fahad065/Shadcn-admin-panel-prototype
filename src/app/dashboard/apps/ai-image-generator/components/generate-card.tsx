"use client";

import { useState } from "react";
import { Dices, Download, Loader2, Wand2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

import {
  ASPECT_RATIO_OPTIONS,
  COUNT_OPTIONS,
  GRADIENTS,
  NEGATIVE_PROMPT_PLACEHOLDER,
  QUALITY_OPTIONS,
  QUICK_PROMPT_PRESETS,
  SAMPLE_PROMPT_PLACEHOLDER,
  STYLE_OPTIONS,
} from "./data";
import { ImageTile } from "./image-tile";

type GeneratedBatch = {
  prompt: string;
  gradients: (typeof GRADIENTS)[number][];
};

function pickRandomGradients(count: number) {
  return Array.from({ length: count }, () => GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]);
}

function randomSeed() {
  return String(Math.floor(Math.random() * 1_000_000_000));
}

export function GenerateCard() {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [style, setStyle] = useState<string>(STYLE_OPTIONS[0].value);
  const [aspectRatio, setAspectRatio] = useState<string>(ASPECT_RATIO_OPTIONS[0].value);
  const [quality, setQuality] = useState<string>(QUALITY_OPTIONS[1].value);
  const [count, setCount] = useState<string>(COUNT_OPTIONS[2].value);
  const [seed, setSeed] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [batch, setBatch] = useState<GeneratedBatch | null>(null);

  const canGenerate = prompt.trim().length > 0 && !isGenerating;
  const imageCount = Number(count);

  function handleGenerate() {
    if (!canGenerate) return;
    setIsGenerating(true);
    setBatch(null);

    const submittedPrompt = prompt.trim();
    window.setTimeout(() => {
      setBatch({ prompt: submittedPrompt, gradients: pickRandomGradients(imageCount) });
      setIsGenerating(false);
    }, 1200);
  }

  function handleDownloadAll() {
    if (!batch) return;
    const total = batch.gradients.length;
    toast.success(`Downloading ${total} image${total === 1 ? "" : "s"}...`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate an image</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {QUICK_PROMPT_PRESETS.map((preset) => (
              <Button
                key={preset.label}
                type="button"
                variant="outline"
                size="xs"
                onClick={() => setPrompt(preset.prompt)}
              >
                {preset.label}
              </Button>
            ))}
          </div>

          <Textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder={SAMPLE_PROMPT_PLACEHOLDER}
            className="min-h-24"
            aria-label="Image prompt"
          />

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="image-negative-prompt">Negative prompt (optional)</Label>
            <Textarea
              id="image-negative-prompt"
              value={negativePrompt}
              onChange={(event) => setNegativePrompt(event.target.value)}
              placeholder={NEGATIVE_PROMPT_PLACEHOLDER}
              className="min-h-16"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="image-style">Style</Label>
            <Select value={style} onValueChange={(value) => setStyle(String(value))}>
              <SelectTrigger id="image-style" className="w-40">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                {STYLE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="image-aspect-ratio">Aspect Ratio</Label>
            <Select value={aspectRatio} onValueChange={(value) => setAspectRatio(String(value))}>
              <SelectTrigger id="image-aspect-ratio" className="w-44">
                <SelectValue placeholder="Select an aspect ratio" />
              </SelectTrigger>
              <SelectContent>
                {ASPECT_RATIO_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="image-quality">Quality</Label>
            <Select value={quality} onValueChange={(value) => setQuality(String(value))}>
              <SelectTrigger id="image-quality" className="w-36">
                <SelectValue placeholder="Select a quality" />
              </SelectTrigger>
              <SelectContent>
                {QUALITY_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="image-count">Count</Label>
            <Select value={count} onValueChange={(value) => setCount(String(value))}>
              <SelectTrigger id="image-count" className="w-32">
                <SelectValue placeholder="Select a count" />
              </SelectTrigger>
              <SelectContent>
                {COUNT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="image-seed">Seed (optional)</Label>
            <InputGroup className="w-36">
              <InputGroupInput
                id="image-seed"
                inputMode="numeric"
                value={seed}
                onChange={(event) => setSeed(event.target.value.replace(/[^0-9]/g, ""))}
                placeholder="Random"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  size="icon-xs"
                  aria-label="Randomize seed"
                  onClick={() => setSeed(randomSeed())}
                >
                  <Dices />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <Button
            type="button"
            className="ml-auto gap-1.5"
            disabled={!canGenerate}
            onClick={handleGenerate}
          >
            {isGenerating ? <Loader2 className="size-3.5 animate-spin" /> : <Wand2 className="size-3.5" />}
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>

        {isGenerating ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: imageCount }, (_, index) => (
              <Skeleton key={index} className="aspect-square w-full rounded-xl" />
            ))}
          </div>
        ) : null}

        {!isGenerating && batch ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-end">
              <Button type="button" variant="outline" size="sm" className="gap-1.5" onClick={handleDownloadAll}>
                <Download className="size-3.5" />
                Download All
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {batch.gradients.map((gradient, index) => (
                <ImageTile
                  key={`${batch.prompt}-${index}`}
                  gradient={gradient}
                  label={`Generated image ${index + 1} for prompt: ${batch.prompt}`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
