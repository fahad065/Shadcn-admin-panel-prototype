"use client";

import { useState } from "react";

import {
  DEFAULT_SIMILARITY,
  DEFAULT_SPEAKER_BOOST,
  DEFAULT_SPEED,
  DEFAULT_STABILITY,
  DEFAULT_STYLE_EXAGGERATION,
  recentGenerations,
  speedPercentToMultiplier,
  voices,
  type RecentGeneration,
} from "../data";
import { AudioPlayerCard } from "./audio-player-card";
import { formatTime } from "./format-time";
import { GenerateSpeechCard } from "./generate-speech-card";

const SAMPLE_TEXT =
  "Hi there! This is a short sample sentence you can use to preview how a generated voice sounds.";

type Generated = {
  id: string;
  text: string;
  voiceName: string;
  durationSeconds: number;
};

function estimateDurationSeconds(text: string, speedMultiplier: number) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const baseSeconds = Math.max(2, Math.round(wordCount / 2.2));
  return Math.min(60, Math.max(1, Math.round(baseSeconds / speedMultiplier)));
}

export function TextToSpeechApp() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const [voiceId, setVoiceId] = useState(voices[0].id);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [stability, setStability] = useState(DEFAULT_STABILITY);
  const [similarity, setSimilarity] = useState(DEFAULT_SIMILARITY);
  const [styleExaggeration, setStyleExaggeration] = useState(
    DEFAULT_STYLE_EXAGGERATION
  );
  const [speakerBoost, setSpeakerBoost] = useState(DEFAULT_SPEAKER_BOOST);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState<Generated | null>(null);
  const [items, setItems] = useState<RecentGeneration[]>(recentGenerations);

  function handleReset() {
    setSpeed(DEFAULT_SPEED);
    setStability(DEFAULT_STABILITY);
    setSimilarity(DEFAULT_SIMILARITY);
    setStyleExaggeration(DEFAULT_STYLE_EXAGGERATION);
    setSpeakerBoost(DEFAULT_SPEAKER_BOOST);
  }

  function handleGenerate() {
    if (!text.trim() || isGenerating) return;

    setIsGenerating(true);
    const delay = 800 + Math.random() * 400;

    window.setTimeout(() => {
      const voiceName =
        voices.find((voice) => voice.id === voiceId)?.name ?? voices[0].name;
      const speedMultiplier = speedPercentToMultiplier(speed);
      const durationSeconds = estimateDurationSeconds(text, speedMultiplier);
      const id = `gen-${Date.now()}`;

      setGenerated({ id, text, voiceName, durationSeconds });
      setItems((current) => [
        {
          id,
          text,
          voiceName,
          duration: formatTime(durationSeconds),
          createdAt: "Just now",
        },
        ...current,
      ]);
      setIsGenerating(false);
    }, delay);
  }

  return (
    <div className="flex flex-col gap-6">
      <GenerateSpeechCard
        text={text}
        onTextChange={setText}
        voiceId={voiceId}
        onVoiceChange={setVoiceId}
        speed={speed}
        onSpeedChange={setSpeed}
        stability={stability}
        onStabilityChange={setStability}
        similarity={similarity}
        onSimilarityChange={setSimilarity}
        styleExaggeration={styleExaggeration}
        onStyleExaggerationChange={setStyleExaggeration}
        speakerBoost={speakerBoost}
        onSpeakerBoostChange={setSpeakerBoost}
        onReset={handleReset}
        isGenerating={isGenerating}
        onGenerate={handleGenerate}
        recentGenerationItems={items}
        onRecentGenerationItemsChange={setItems}
      />

      {generated ? (
        <AudioPlayerCard
          key={generated.id}
          id={generated.id}
          text={generated.text}
          voiceName={generated.voiceName}
          durationSeconds={generated.durationSeconds}
        />
      ) : null}
    </div>
  );
}
