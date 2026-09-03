export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
}

export interface PastConversation {
  id: string;
  title: string;
  timestamp: string;
}

export const modelOptions = [
  { value: "gpt-4", label: "GPT-4" },
  { value: "claude", label: "Claude" },
  { value: "gemini", label: "Gemini" },
] as const;

export const pastConversations: PastConversation[] = [
  { id: "conv-1", title: "Weekly report summary", timestamp: "2h ago" },
  { id: "conv-2", title: "Brainstorm onboarding copy", timestamp: "5h ago" },
  { id: "conv-3", title: "Debugging a flaky test", timestamp: "Yesterday" },
  { id: "conv-4", title: "Draft release notes", timestamp: "Yesterday" },
  { id: "conv-5", title: "Explain a SQL query", timestamp: "2 days ago" },
  { id: "conv-6", title: "Plan sprint goals", timestamp: "3 days ago" },
  { id: "conv-7", title: "Rewrite support macro", timestamp: "5 days ago" },
  { id: "conv-8", title: "Compare pricing tiers", timestamp: "1 week ago" },
];

export const suggestedPrompts: string[] = [
  "Summarize a long document into key points",
  "Write a short product description for a new gadget",
  "Explain a complex topic in simple terms",
  "Draft a polite email reply to a customer",
];

export const cannedReplies: string[] = [
  "Got it — here's a quick take: break the problem into smaller steps, tackle the highest-impact one first, and iterate from there.",
  "That's a fair point. One approach is to start with a simple version and refine it once you see how it performs.",
  "Here's a suggestion: document the current behavior first, then compare it against what you'd expect to spot the gap.",
  "I'd recommend double-checking the underlying data before making changes — that usually saves time later on.",
  "Good question. A common pattern here is to separate the logic into smaller, testable pieces.",
  "Sounds reasonable. You could also add a short summary at the top so others can follow the reasoning quickly.",
];
