import { FeedPost, type FeedPostData } from "./feed-post";

const posts: FeedPostData[] = [
  {
    id: "1",
    name: "Mira Ashworth",
    handle: "mira.ashworth",
    initials: "MA",
    avatarClassName: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
    timestamp: "2h ago",
    content: "Golden hour on the rooftop deck. Perfect way to wrap up the week.",
    photoGradient: "bg-gradient-to-br from-orange-400 via-rose-400 to-purple-500",
    likes: 482,
    comments: 36,
    shares: 12,
  },
  {
    id: "2",
    name: "Dev Kapoor",
    handle: "devkapoor",
    initials: "DK",
    avatarClassName: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    timestamp: "4h ago",
    content: "Finally hit inbox zero for the first time this year. Small wins count too.",
    likes: 128,
    comments: 14,
    shares: 3,
  },
  {
    id: "3",
    name: "Wren Okafor",
    handle: "wren.codes",
    initials: "WO",
    avatarClassName: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
    timestamp: "6h ago",
    content: "New standing desk setup — finally have room to spread out my sketches.",
    photoGradient: "bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-600",
    likes: 356,
    comments: 29,
    shares: 8,
  },
  {
    id: "4",
    name: "Priya Lindqvist",
    handle: "priya.lindqvist",
    initials: "PL",
    avatarClassName: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    timestamp: "9h ago",
    content: "Reminder: taking breaks is part of the work, not a distraction from it.",
    likes: 812,
    comments: 63,
    shares: 41,
  },
  {
    id: "5",
    name: "Sana Okoye",
    handle: "sana.creates",
    initials: "SO",
    avatarClassName: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400",
    timestamp: "Yesterday",
    content: "Three days in, and this city already feels like a second home.",
    photoGradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-rose-600",
    likes: 1204,
    comments: 88,
    shares: 54,
  },
  {
    id: "6",
    name: "Leo Marchetti",
    handle: "leo.marchetti",
    initials: "LM",
    avatarClassName: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    timestamp: "2 days ago",
    content: "Shoutout to the team for shipping the new onboarding flow ahead of schedule.",
    likes: 245,
    comments: 19,
    shares: 6,
  },
];

export function Feed() {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
}
