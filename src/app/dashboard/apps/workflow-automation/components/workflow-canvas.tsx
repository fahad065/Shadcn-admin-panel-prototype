"use client";

import * as React from "react";
import { Plus, Save } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ConnectorLines } from "./connector-lines";
import { addableNodeTemplates, initialEdges, initialNodes } from "./data";
import { WorkflowNodeCard } from "./workflow-node-card";
import type { WorkflowNode } from "./types";

export function WorkflowCanvas() {
  const [name, setName] = React.useState("New Lead to CRM");
  const [nodes, setNodes] = React.useState<WorkflowNode[]>(initialNodes);
  const canvasRef = React.useRef<HTMLDivElement>(null);
  const nodeCounter = React.useRef(0);

  const updateNodePosition = React.useCallback((id: string, x: number, y: number) => {
    setNodes((prev) => prev.map((node) => (node.id === id ? { ...node, x, y } : node)));
  }, []);

  function addNode(kind: "trigger" | "action") {
    const template = addableNodeTemplates[kind];
    nodeCounter.current += 1;
    const stagger = ((nodeCounter.current - 1) % 5) * 28;

    const newNode: WorkflowNode = {
      id: `node-new-${nodeCounter.current}`,
      type: template.type,
      title: template.title,
      subtitle: template.subtitle,
      icon: template.icon,
      x: 24 + stagger,
      y: 24 + stagger,
    };

    setNodes((prev) => [...prev, newNode]);
    toast.success(kind === "trigger" ? "Trigger node added" : "Action node added", {
      description: "Drag it onto the canvas to wire it up.",
    });
  }

  function handleSave() {
    toast.success("Workflow saved", {
      description: `"${name}" has ${nodes.length} nodes.`,
    });
  }

  return (
    <Card>
      <CardHeader className="flex flex-col gap-3 border-b border-border/60 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="workflow-name" className="sr-only">
            Workflow name
          </Label>
          <Input
            id="workflow-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-8 max-w-56 font-medium sm:max-w-64"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => addNode("trigger")}>
            <Plus className="size-3.5" />
            Add Trigger
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => addNode("action")}>
            <Plus className="size-3.5" />
            Add Action
          </Button>
          <Button size="sm" className="gap-1.5" onClick={handleSave}>
            <Save className="size-3.5" />
            Save
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[70vh] min-h-[520px] w-full overflow-auto rounded-xl border border-dashed border-border">
          <div
            ref={canvasRef}
            className="relative h-full min-w-[820px] bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px]"
          >
            <ConnectorLines nodes={nodes} edges={initialEdges} />
            {nodes.map((node) => (
              <WorkflowNodeCard
                key={node.id}
                node={node}
                canvasRef={canvasRef}
                onPositionChange={updateNodePosition}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
