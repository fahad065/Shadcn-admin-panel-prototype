"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { NODE_HEIGHT, NODE_WIDTH, nodeTypeConfig } from "./data";
import type { WorkflowNode } from "./types";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

export function WorkflowNodeCard({
  node,
  canvasRef,
  onPositionChange,
  onDraggingChange,
}: {
  node: WorkflowNode;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  onPositionChange: (id: string, x: number, y: number) => void;
  onDraggingChange?: (id: string | null) => void;
}) {
  const [isDragging, setIsDragging] = React.useState(false);
  const dragState = React.useRef<{
    pointerId: number;
    startClientX: number;
    startClientY: number;
    startNodeX: number;
    startNodeY: number;
  } | null>(null);

  const style = nodeTypeConfig[node.type];
  const Icon = node.icon;

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startNodeX: node.x,
      startNodeY: node.y,
    };
    setIsDragging(true);
    onDraggingChange?.(node.id);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const bounds = canvasRef.current;
    const maxX = bounds ? Math.max(0, bounds.clientWidth - NODE_WIDTH) : Infinity;
    const maxY = bounds ? Math.max(0, bounds.clientHeight - NODE_HEIGHT) : Infinity;

    const nextX = clamp(drag.startNodeX + (event.clientX - drag.startClientX), 0, maxX);
    const nextY = clamp(drag.startNodeY + (event.clientY - drag.startClientY), 0, maxY);

    onPositionChange(node.id, nextX, nextY);
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (dragState.current?.pointerId !== event.pointerId) return;
    dragState.current = null;
    setIsDragging(false);
    onDraggingChange?.(null);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${style.label} node: ${node.title}. Draggable.`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={cn(
        "absolute flex touch-none select-none flex-col justify-center gap-1 rounded-xl border border-border/60 border-t-4 bg-card px-3.5 py-3 text-left shadow-sm ring-1 ring-foreground/5 transition-shadow",
        style.border,
        isDragging ? "z-10 cursor-grabbing shadow-lg" : "z-0 cursor-grab hover:shadow-md"
      )}
      style={{ left: node.x, top: node.y, width: NODE_WIDTH, height: NODE_HEIGHT }}
    >
      <div className="flex items-center gap-2">
        <span className={cn("flex size-7 shrink-0 items-center justify-center rounded-lg", style.iconWrap)}>
          <Icon className={cn("size-3.5", style.iconColor)} />
        </span>
        <span className={cn("text-[0.65rem] font-medium tracking-wide uppercase", style.iconColor)}>
          {style.label}
        </span>
      </div>
      <p className="truncate text-sm font-medium text-foreground">{node.title}</p>
      <p className="truncate text-xs text-muted-foreground">{node.subtitle}</p>
    </div>
  );
}
