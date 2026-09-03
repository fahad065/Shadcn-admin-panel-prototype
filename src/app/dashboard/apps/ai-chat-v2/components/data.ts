export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  time: string;
}

export type ArtifactType = "Code" | "Document" | "Markdown";

export interface ArtifactState {
  title: string;
  type: ArtifactType;
  language: string;
  version: number;
  content: string;
}

export interface Revision {
  /** Assistant reply shown in the chat thread once the revision "lands". */
  reply: string;
  /** Full replacement content for the artifact panel. */
  content: string;
}

function currentTime() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export const initialMessages: ChatMessage[] = [
  {
    id: "msg-1",
    role: "user",
    text: "Can you write a debounce utility in TypeScript? I need it for a search input.",
    time: "10:02 AM",
  },
  {
    id: "msg-2",
    role: "assistant",
    text: "Sure — here's a typed debounce helper with a cancel method. It's in the panel on the right.",
    time: "10:02 AM",
  },
  {
    id: "msg-3",
    role: "user",
    text: "Nice. Can it also support a leading-edge option, so it fires immediately on the first call?",
    time: "10:04 AM",
  },
  {
    id: "msg-4",
    role: "assistant",
    text: "Done — added an `immediate` flag. When it's true, the function fires on the leading edge and then stays quiet until the wait period elapses.",
    time: "10:04 AM",
  },
];

const V2_CONTENT = `/**
 * Delays invoking \`fn\` until \`wait\` ms have elapsed since the last call.
 * Pass \`immediate\` to fire on the leading edge instead of the trailing edge.
 */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  wait: number,
  immediate = false
) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  function debounced(...args: Args) {
    const callNow = immediate && timer === null;

    if (timer !== null) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn(...args);
    }, wait);

    if (callNow) fn(...args);
  }

  debounced.cancel = () => {
    if (timer !== null) clearTimeout(timer);
    timer = null;
  };

  return debounced;
}`;

export const initialArtifact: ArtifactState = {
  title: "debounce.ts",
  type: "Code",
  language: "TypeScript",
  version: 2,
  content: V2_CONTENT,
};

const V3_CONTENT = `${V2_CONTENT}

// Usage
const handleSearch = debounce((query: string) => {
  runSearch(query);
}, 300);

searchInput.addEventListener("input", (event) => {
  handleSearch((event.target as HTMLInputElement).value);
});`;

const V4_CONTENT = V3_CONTENT.replace(
  `  debounced.cancel = () => {
    if (timer !== null) clearTimeout(timer);
    timer = null;
  };

  return debounced;`,
  `  debounced.cancel = () => {
    if (timer !== null) clearTimeout(timer);
    timer = null;
  };

  debounced.flush = (...args: Args) => {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
      fn(...args);
    }
  };

  return debounced;`
);

const V5_CONTENT = `// Reviewed for edge cases: rapid repeated calls, a zero-millisecond wait,
// and calling cancel() more than once in a row.
${V4_CONTENT}`;

/** Scripted follow-up revisions, applied in order as the user keeps chatting. */
export const followUpRevisions: Revision[] = [
  {
    reply:
      "Added a quick usage example at the bottom, showing how you'd wire it up to an input's `input` event.",
    content: V3_CONTENT,
  },
  {
    reply:
      "Added a `flush` method too, so you can force a pending call to run immediately if you ever need to.",
    content: V4_CONTENT,
  },
  {
    reply:
      "Took another pass and left a note about the edge cases this handles — rapid repeated calls, a zero-millisecond wait, and calling `cancel()` multiple times in a row.",
    content: V5_CONTENT,
  },
];

/** Generic replies once every scripted revision has already been applied. */
export const fallbackReplies: string[] = [
  "Looks solid overall — let me know if you'd like another change.",
  "Nothing else stood out on review. Happy to adjust anything else.",
  "I don't have further edits queued up, but tell me what to tweak next.",
];

export function makeMessage(role: MessageRole, text: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
    time: currentTime(),
  };
}

// --- Left panel: navigation + chat history -------------------------------

export interface PastConversation {
  id: string;
  title: string;
  timestamp: string;
}

export const pastConversations: PastConversation[] = [
  { id: "session-1", title: "Debounce utility for search", timestamp: "Active now" },
  { id: "session-2", title: "Paginate a REST endpoint", timestamp: "1h ago" },
  { id: "session-3", title: "Explain a regex capture group", timestamp: "Yesterday" },
  { id: "session-4", title: "Refactor a reducer to hooks", timestamp: "Yesterday" },
  { id: "session-5", title: "Draft a changelog entry", timestamp: "2 days ago" },
  { id: "session-6", title: "Compare two sorting approaches", timestamp: "4 days ago" },
];

// --- Center panel: Summary tab --------------------------------------------

export interface SummaryHighlight {
  id: string;
  label: string;
}

export const summaryOverview =
  "This session started with a request for a typed debounce helper and has gone through a few follow-up revisions. The Code tab always reflects the latest version.";

export const summaryHighlights: SummaryHighlight[] = [
  { id: "sum-1", label: "Wrote a typed debounce helper with a cancel method" },
  { id: "sum-2", label: "Added an immediate flag for leading-edge invocation" },
  { id: "sum-3", label: "Attached a usage example wired to an input's input event" },
  { id: "sum-4", label: "Documented the edge cases the implementation handles" },
];

// --- Center panel: Design tab ----------------------------------------------

export interface DesignPreview {
  title: string;
  description: string;
}

export const designPreview: DesignPreview = {
  title: "Search input — debounced state",
  description: "A rough layout of how the debounced search field could look once wired into the UI.",
};

// --- Center panel: Research tab --------------------------------------------

export interface ResearchSource {
  id: string;
  title: string;
  source: string;
  snippet: string;
}

export const researchSources: ResearchSource[] = [
  {
    id: "src-1",
    title: "Debouncing vs. throttling",
    source: "internal-notes/perf-patterns.md",
    snippet:
      "Debouncing waits for a pause in events before firing; throttling guarantees a steady interval no matter how often the event fires.",
  },
  {
    id: "src-2",
    title: "Leading vs. trailing edge invocation",
    source: "internal-notes/timing-functions.md",
    snippet:
      "Leading-edge calls fire immediately and then ignore further calls until the wait period elapses; trailing-edge calls wait out the full period first.",
  },
  {
    id: "src-3",
    title: "Cleaning up pending timers",
    source: "internal-notes/component-lifecycle.md",
    snippet:
      "A debounced call tied to a component should expose a way to cancel it, so it is never invoked after the component unmounts.",
  },
];
