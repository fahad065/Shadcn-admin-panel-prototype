"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArtifactPanel } from "./artifact-panel";
import { DesignTab } from "./design-tab";
import { ResearchTab } from "./research-tab";
import { SummaryTab } from "./summary-tab";
import type { ArtifactState } from "./data";

interface SessionTabsProps {
  artifact: ArtifactState;
}

export function SessionTabs({ artifact }: SessionTabsProps) {
  return (
    <Tabs defaultValue="summary" className="shrink-0 gap-0 border-b p-3">
      <TabsList className="w-fit">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="design">Design</TabsTrigger>
        <TabsTrigger value="research">Research</TabsTrigger>
      </TabsList>

      <TabsContent value="summary" className="mt-3 h-64 overflow-y-auto md:h-72">
        <SummaryTab />
      </TabsContent>
      <TabsContent value="code" className="mt-3 h-64 md:h-72">
        <ArtifactPanel artifact={artifact} />
      </TabsContent>
      <TabsContent value="design" className="mt-3 h-64 overflow-y-auto md:h-72">
        <DesignTab />
      </TabsContent>
      <TabsContent value="research" className="mt-3 h-64 overflow-y-auto md:h-72">
        <ResearchTab />
      </TabsContent>
    </Tabs>
  );
}
