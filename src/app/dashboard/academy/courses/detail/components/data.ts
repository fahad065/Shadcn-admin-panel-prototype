import { Code2 } from "lucide-react";

export const courseDetail = {
  title: "Full-Stack Web Development",
  category: "Web Development",
  level: "Intermediate",
  language: "English",
  instructor: "Maya Whitfield",
  instructorTitle: "Senior Software Engineer, ex-Stripe",
  rating: 4.9,
  reviewCount: 812,
  students: 5240,
  lastUpdated: "August 2026",
  duration: "42h 10m",
  lessons: 96,
  price: 79,
  originalPrice: 129,
  icon: Code2,
  description:
    "This course takes you from HTML fundamentals to shipping a production-ready full-stack application. You'll build real projects with a modern JavaScript stack, wire up a database and authentication, and deploy your work so it's live on the web. Along the way you'll pick up the debugging habits and code review practices used by working engineering teams.",
  learningPoints: [
    "Structure a full-stack app with a typed API layer and a component-driven UI",
    "Model relational data and write efficient queries against a real database",
    "Implement authentication, authorization, and session handling from scratch",
    "Write automated tests and set up a CI pipeline that blocks broken builds",
    "Deploy and monitor an app in a production environment",
    "Debug performance issues using browser and server profiling tools",
  ],
};

export interface CurriculumModule {
  title: string;
  duration: string;
  status: "completed" | "in-progress" | "locked";
}

export const curriculum: CurriculumModule[] = [
  { title: "Setting Up Your Development Environment", duration: "38m", status: "completed" },
  { title: "HTML, CSS & Modern Layout Fundamentals", duration: "2h 15m", status: "completed" },
  { title: "JavaScript Deep Dive & Async Patterns", duration: "4h 40m", status: "completed" },
  { title: "Building the API Layer", duration: "6h 05m", status: "in-progress" },
  { title: "Database Modeling & Persistence", duration: "5h 20m", status: "locked" },
  { title: "Authentication & Deployment", duration: "4h 50m", status: "locked" },
];

export interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export const reviews: Review[] = [
  {
    name: "Jordan Ellis",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "The pacing is excellent and every module ends with a project that ties directly back to what was just taught. Best investment I've made this year.",
  },
  {
    name: "Camille Ndiaye",
    rating: 5,
    date: "1 month ago",
    comment:
      "Maya explains the 'why' behind every decision, not just the 'how'. I finally understand how the pieces of a full-stack app fit together.",
  },
  {
    name: "Tobias Reinholt",
    rating: 4,
    date: "2 months ago",
    comment:
      "Really solid course overall. The database section could use a couple more examples, but the deployment walkthrough alone was worth it.",
  },
];

export const included: string[] = [
  "42 hours of on-demand video",
  "96 downloadable lessons and resources",
  "12 hands-on coding projects",
  "Full lifetime access",
  "Certificate of completion",
  "Access on mobile, desktop, and TV",
];

export function formatPrice(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
}
