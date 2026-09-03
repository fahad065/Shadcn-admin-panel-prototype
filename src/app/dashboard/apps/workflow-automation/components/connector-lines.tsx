import * as React from "react";

import { NODE_HEIGHT, NODE_WIDTH } from "./data";
import type { WorkflowEdge, WorkflowNode } from "./types";

function buildPath(source: WorkflowNode, target: WorkflowNode) {
  const startX = source.x + NODE_WIDTH;
  const startY = source.y + NODE_HEIGHT / 2;
  const endX = target.x;
  const endY = target.y + NODE_HEIGHT / 2;

  const horizontalReach = Math.max(48, Math.abs(endX - startX) / 2);
  const cp1X = startX + horizontalReach;
  const cp2X = endX - horizontalReach;

  return `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`;
}

export function ConnectorLines({
  nodes,
  edges,
}: {
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}) {
  const nodesById = React.useMemo(() => {
    return new Map(nodes.map((node) => [node.id, node]));
  }, [nodes]);

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
      <defs>
        <marker
          id="workflow-arrowhead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary/70" />
        </marker>
      </defs>
      {edges.map((edge) => {
        const source = nodesById.get(edge.source);
        const target = nodesById.get(edge.target);
        if (!source || !target) return null;

        return (
          <path
            key={edge.id}
            d={buildPath(source, target)}
            fill="none"
            className="stroke-primary/70"
            strokeWidth={2}
            markerEnd="url(#workflow-arrowhead)"
          />
        );
      })}
    </svg>
  );
}
