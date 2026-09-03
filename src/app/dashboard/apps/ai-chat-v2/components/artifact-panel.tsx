"use client";

import { useState } from "react";
import { Check, Copy, Download, FileCode2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { CodeBlock } from "./code-block";
import type { ArtifactState } from "./data";

interface ArtifactPanelProps {
  artifact: ArtifactState;
}

export function ArtifactPanel({ artifact }: ArtifactPanelProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(artifact.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can be denied by the browser; fail silently.
    }
  }

  function handleDownload() {
    const blob = new Blob([artifact.content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = artifact.title;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border">
      <div className="flex shrink-0 items-center gap-2 border-b p-2.5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
          <FileCode2 className="size-4 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{artifact.title}</p>
          <p className="truncate text-xs text-muted-foreground">{artifact.language}</p>
        </div>
        <Badge variant="secondary">{artifact.type}</Badge>
        <Badge variant="outline">v{artifact.version}</Badge>
        <div className="ml-1 flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Copy artifact content"
            onClick={handleCopy}
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Download artifact"
            onClick={handleDownload}
          >
            <Download className="size-3.5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="min-h-0 flex-1">
        <CodeBlock code={artifact.content} />
      </ScrollArea>
    </div>
  );
}
