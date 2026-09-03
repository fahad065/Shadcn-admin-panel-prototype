import { PageHeader } from "@/components/page-header";

import { TextToSpeechApp } from "./components/text-to-speech-app";

export default function TextToSpeechPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Text to Speech"
        description="Turn written text into natural-sounding audio with a choice of voices and speeds."
      />
      <TextToSpeechApp />
    </div>
  );
}
