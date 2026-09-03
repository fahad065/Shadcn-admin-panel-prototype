import { researchSources } from "./data";

export function ResearchTab() {
  return (
    <div className="flex flex-col gap-3">
      {researchSources.map((source, index) => (
        <div key={source.id} className="flex gap-3 rounded-lg border p-3">
          <span className="mt-0.5 shrink-0 text-xs font-medium text-muted-foreground">
            [{index + 1}]
          </span>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium">{source.title}</p>
            <p className="text-sm text-muted-foreground">{source.snippet}</p>
            <p className="text-xs text-muted-foreground/70">{source.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
