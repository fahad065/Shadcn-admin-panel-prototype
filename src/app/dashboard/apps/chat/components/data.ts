export interface ChatMessage {
  id: string;
  from: "me" | "them";
  text: string;
  time: string;
}

export interface Conversation {
  id: string;
  name: string;
  initials: string;
  role: string;
  online: boolean;
  lastMessage: string;
  time: string;
  unread: number;
  messages: ChatMessage[];
}

export const initialConversations: Conversation[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    initials: "SM",
    role: "Product Designer",
    online: true,
    lastMessage: "I'll send over the new mockups in a bit",
    time: "9:41 AM",
    unread: 3,
    messages: [
      { id: "sm-1", from: "them", text: "Morning! Do you have a sec to look at the onboarding flow?", time: "9:02 AM" },
      { id: "sm-2", from: "me", text: "Sure, pull it up whenever you're ready", time: "9:05 AM" },
      { id: "sm-3", from: "them", text: "Just pushed the new version to Figma", time: "9:22 AM" },
      { id: "sm-4", from: "them", text: "Let me know what you think of the empty states", time: "9:23 AM" },
      { id: "sm-5", from: "me", text: "Looking now, the step indicator is a nice touch", time: "9:30 AM" },
      { id: "sm-6", from: "them", text: "I'll send over the new mockups in a bit", time: "9:41 AM" },
    ],
  },
  {
    id: "jordan-lee",
    name: "Jordan Lee",
    initials: "JL",
    role: "Frontend Engineer",
    online: false,
    lastMessage: "Deployed to staging, should be live now",
    time: "8:15 AM",
    unread: 0,
    messages: [
      { id: "jl-1", from: "me", text: "Any blockers on the sidebar refactor?", time: "7:50 AM" },
      { id: "jl-2", from: "them", text: "Nope, just finishing up tests", time: "7:58 AM" },
      { id: "jl-3", from: "them", text: "Deployed to staging, should be live now", time: "8:15 AM" },
    ],
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    initials: "PN",
    role: "Marketing Lead",
    online: true,
    lastMessage: "Campaign numbers are looking great this week",
    time: "Yesterday",
    unread: 0,
    messages: [
      { id: "pn-1", from: "them", text: "Have you seen the click-through rate on the new banner?", time: "Yesterday" },
      { id: "pn-2", from: "me", text: "Not yet, is it up from last week?", time: "Yesterday" },
      { id: "pn-3", from: "them", text: "Campaign numbers are looking great this week", time: "Yesterday" },
    ],
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    initials: "MC",
    role: "Backend Engineer",
    online: false,
    lastMessage: "Can you review the migration script before I merge?",
    time: "Yesterday",
    unread: 1,
    messages: [
      { id: "mc-1", from: "them", text: "Working on the database migration for the new billing table", time: "Yesterday" },
      { id: "mc-2", from: "them", text: "Can you review the migration script before I merge?", time: "Yesterday" },
    ],
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    initials: "ER",
    role: "Customer Success",
    online: false,
    lastMessage: "Thanks for the quick turnaround on that ticket",
    time: "Mon",
    unread: 0,
    messages: [
      { id: "er-1", from: "me", text: "The refund for that customer went through", time: "Mon" },
      { id: "er-2", from: "them", text: "Thanks for the quick turnaround on that ticket", time: "Mon" },
    ],
  },
  {
    id: "tom-baxter",
    name: "Tom Baxter",
    initials: "TB",
    role: "Sales Manager",
    online: true,
    lastMessage: "Let's sync before the call with Northwind",
    time: "Mon",
    unread: 0,
    messages: [
      { id: "tb-1", from: "them", text: "Are we still good for the Northwind demo Thursday?", time: "Mon" },
      { id: "tb-2", from: "me", text: "Yep, deck is ready on my end", time: "Mon" },
      { id: "tb-3", from: "them", text: "Let's sync before the call with Northwind", time: "Mon" },
    ],
  },
  {
    id: "aisha-khan",
    name: "Aisha Khan",
    initials: "AK",
    role: "QA Engineer",
    online: false,
    lastMessage: "Found a regression on the checkout page",
    time: "Sun",
    unread: 5,
    messages: [
      { id: "ak-1", from: "them", text: "Running the full regression suite now", time: "Sun" },
      { id: "ak-2", from: "them", text: "Found a regression on the checkout page", time: "Sun" },
      { id: "ak-3", from: "them", text: "Screenshots incoming", time: "Sun" },
    ],
  },
  {
    id: "diego-fernandez",
    name: "Diego Fernandez",
    initials: "DF",
    role: "DevOps",
    online: false,
    lastMessage: "Rotated the API keys, updated the vault entry",
    time: "Sat",
    unread: 0,
    messages: [
      { id: "df-1", from: "me", text: "Did the key rotation go out okay?", time: "Sat" },
      { id: "df-2", from: "them", text: "Rotated the API keys, updated the vault entry", time: "Sat" },
    ],
  },
  {
    id: "grace-kim",
    name: "Grace Kim",
    initials: "GK",
    role: "UX Researcher",
    online: true,
    lastMessage: "Session recordings are in the shared drive",
    time: "Fri",
    unread: 0,
    messages: [
      { id: "gk-1", from: "them", text: "Wrapped up the usability sessions this morning", time: "Fri" },
      { id: "gk-2", from: "them", text: "Session recordings are in the shared drive", time: "Fri" },
      { id: "gk-3", from: "me", text: "Great, I'll go through them today", time: "Fri" },
    ],
  },
  {
    id: "noah-williams",
    name: "Noah Williams",
    initials: "NW",
    role: "Support Lead",
    online: false,
    lastMessage: "Queue is clear for now, nice work everyone",
    time: "Thu",
    unread: 0,
    messages: [
      { id: "nw-1", from: "them", text: "Ticket backlog is down to zero", time: "Thu" },
      { id: "nw-2", from: "them", text: "Queue is clear for now, nice work everyone", time: "Thu" },
    ],
  },
];
