"use client";

import { AudioWaveform, Loader2 } from "lucide-react";

import { PercentSlider } from "@/components/percent-slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import { creditsRemaining, voices, type RecentGeneration } from "../data";
import { RecentGenerations } from "./recent-generations";

const MAX_LENGTH = 500;

export function GenerateSpeechCard({
  text,
  onTextChange,
  voiceId,
  onVoiceChange,
  speed,
  onSpeedChange,
  stability,
  onStabilityChange,
  similarity,
  onSimilarityChange,
  styleExaggeration,
  onStyleExaggerationChange,
  speakerBoost,
  onSpeakerBoostChange,
  onReset,
  isGenerating,
  onGenerate,
  recentGenerationItems,
  onRecentGenerationItemsChange,
}: {
  text: string;
  onTextChange: (value: string) => void;
  voiceId: string;
  onVoiceChange: (value: string) => void;
  speed: number;
  onSpeedChange: (value: number) => void;
  stability: number;
  onStabilityChange: (value: number) => void;
  similarity: number;
  onSimilarityChange: (value: number) => void;
  styleExaggeration: number;
  onStyleExaggerationChange: (value: number) => void;
  speakerBoost: boolean;
  onSpeakerBoostChange: (value: boolean) => void;
  onReset: () => void;
  isGenerating: boolean;
  onGenerate: () => void;
  recentGenerationItems: RecentGeneration[];
  onRecentGenerationItemsChange: (items: RecentGeneration[]) => void;
}) {
  const canGenerate = text.trim().length > 0 && !isGenerating;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Speech</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="tts-input">Text</Label>
            <span className="text-xs text-muted-foreground">
              {text.length} / {MAX_LENGTH}
            </span>
          </div>
          <Textarea
            id="tts-input"
            placeholder="Type or paste the text you'd like to convert to speech..."
            value={text}
            maxLength={MAX_LENGTH}
            onChange={(event) => onTextChange(event.target.value)}
            className="min-h-32"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="tts-voice">Voice</Label>
          <Select
            value={voiceId}
            onValueChange={(value) => onVoiceChange(String(value))}
          >
            <SelectTrigger id="tts-voice" className="w-full">
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent>
              {voices.map((voice) => (
                <SelectItem key={voice.id} value={voice.id}>
                  {voice.name}
                  <span className="text-muted-foreground">
                    — {voice.descriptor}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="settings">
          <TabsList>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="settings" className="mt-4 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {creditsRemaining.toLocaleString()} credits remaining
              </span>
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-medium text-primary underline-offset-4 hover:underline"
              >
                Reset values
              </button>
            </div>

            <PercentSlider
              label="Speed"
              value={speed}
              onChange={onSpeedChange}
              minLabel="Slower"
              maxLabel="Faster"
            />

            <PercentSlider
              label="Stability"
              value={stability}
              onChange={onStabilityChange}
              minLabel="More variable"
              maxLabel="More stable"
            />

            <PercentSlider
              label="Similarity"
              value={similarity}
              onChange={onSimilarityChange}
              minLabel="Low"
              maxLabel="High"
            />

            <PercentSlider
              label="Style Exaggeration"
              value={styleExaggeration}
              onChange={onStyleExaggerationChange}
              minLabel="None"
              maxLabel="Exaggerated"
            />

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex flex-col gap-0.5">
                <Label htmlFor="tts-speaker-boost">Speaker Boost</Label>
                <span className="text-xs text-muted-foreground">
                  Sharpens similarity to the original voice.
                </span>
              </div>
              <Switch
                id="tts-speaker-boost"
                checked={speakerBoost}
                onCheckedChange={onSpeakerBoostChange}
              />
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            <RecentGenerations
              items={recentGenerationItems}
              onItemsChange={onRecentGenerationItemsChange}
            />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
          <Button onClick={onGenerate} disabled={!canGenerate}>
            {isGenerating ? (
              <Loader2 className="animate-spin" />
            ) : (
              <AudioWaveform />
            )}
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
