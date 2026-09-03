import {
  BarChart3,
  BookOpen,
  Cloud,
  Code2,
  Database,
  Layout,
  Megaphone,
  Palette,
  PenTool,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type CourseCategory =
  | "Web Development"
  | "Backend"
  | "Design"
  | "Data Science"
  | "Marketing"
  | "Mobile Development";

export const categories: CourseCategory[] = [
  "Web Development",
  "Backend",
  "Design",
  "Data Science",
  "Marketing",
  "Mobile Development",
];

export const categoryStyles: Record<CourseCategory, string> = {
  "Web Development": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Backend: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Design: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Data Science": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Marketing: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  "Mobile Development": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
};

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  description: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  lessons: number;
  price: number | null;
  icon: LucideIcon;
}

export const courses: Course[] = [
  {
    id: "fullstack-web-dev",
    title: "Full-Stack Web Development",
    category: "Web Development",
    description: "Build and ship production-ready web apps with modern JavaScript tooling.",
    instructor: "Maya Whitfield",
    rating: 4.9,
    reviewCount: 812,
    students: 5240,
    duration: "42h 10m",
    lessons: 96,
    price: 79,
    icon: Code2,
  },
  {
    id: "react-next-mastery",
    title: "React & Next.js Mastery",
    category: "Web Development",
    description: "Go from components to server actions with a deep dive into the App Router.",
    instructor: "Owen Castillo",
    rating: 4.6,
    reviewCount: 534,
    students: 3120,
    duration: "28h 45m",
    lessons: 71,
    price: null,
    icon: Layout,
  },
  {
    id: "advanced-node-apis",
    title: "Advanced Node.js APIs",
    category: "Backend",
    description: "Design resilient REST and GraphQL services with queues and caching layers.",
    instructor: "Priya Ramanathan",
    rating: 4.7,
    reviewCount: 398,
    students: 2210,
    duration: "24h 05m",
    lessons: 58,
    price: 69,
    icon: Server,
  },
  {
    id: "postgres-database-design",
    title: "Database Design with PostgreSQL",
    category: "Backend",
    description: "Model relational schemas, tune indexes, and write query plans that scale.",
    instructor: "Priya Ramanathan",
    rating: 4.5,
    reviewCount: 261,
    students: 1480,
    duration: "18h 30m",
    lessons: 44,
    price: 59,
    icon: Database,
  },
  {
    id: "ui-ux-design-systems",
    title: "UI/UX Design Systems",
    category: "Design",
    description: "Create scalable component libraries with tokens, variants, and documentation.",
    instructor: "Isla Fontaine",
    rating: 4.8,
    reviewCount: 645,
    students: 3960,
    duration: "20h 15m",
    lessons: 52,
    price: null,
    icon: PenTool,
  },
  {
    id: "design-thinking-fundamentals",
    title: "Design Thinking Fundamentals",
    category: "Design",
    description: "Learn a repeatable process for framing problems and prototyping solutions.",
    instructor: "Isla Fontaine",
    rating: 4.9,
    reviewCount: 289,
    students: 2075,
    duration: "9h 40m",
    lessons: 26,
    price: 39,
    icon: Palette,
  },
  {
    id: "python-data-analysis",
    title: "Python for Data Analysis",
    category: "Data Science",
    description: "Wrangle, visualize, and model real-world datasets with pandas and NumPy.",
    instructor: "Derek Sanborn",
    rating: 4.7,
    reviewCount: 456,
    students: 4310,
    duration: "31h 20m",
    lessons: 68,
    price: 74,
    icon: BarChart3,
  },
  {
    id: "machine-learning-foundations",
    title: "Machine Learning Foundations",
    category: "Data Science",
    description: "Understand core algorithms and build your first predictive models from scratch.",
    instructor: "Derek Sanborn",
    rating: 4.6,
    reviewCount: 372,
    students: 2890,
    duration: "36h 00m",
    lessons: 79,
    price: 89,
    icon: Cloud,
  },
  {
    id: "growth-marketing-playbook",
    title: "Growth Marketing Playbook",
    category: "Marketing",
    description: "Run experiments across acquisition channels and read the funnel metrics that matter.",
    instructor: "Renee Ashworth",
    rating: 4.4,
    reviewCount: 198,
    students: 1650,
    duration: "12h 50m",
    lessons: 34,
    price: 49,
    icon: Megaphone,
  },
  {
    id: "seo-content-strategy",
    title: "SEO & Content Strategy",
    category: "Marketing",
    description: "Plan, write, and optimize content that ranks and converts organic traffic.",
    instructor: "Renee Ashworth",
    rating: 4.5,
    reviewCount: 224,
    students: 1920,
    duration: "10h 15m",
    lessons: 29,
    price: null,
    icon: Megaphone,
  },
  {
    id: "ios-swiftui-essentials",
    title: "iOS Development with SwiftUI",
    category: "Mobile Development",
    description: "Build native iOS apps with declarative layouts, state, and animations.",
    instructor: "Marcus Lindqvist",
    rating: 4.8,
    reviewCount: 341,
    students: 2140,
    duration: "26h 30m",
    lessons: 61,
    price: 69,
    icon: Smartphone,
  },
  {
    id: "cross-platform-react-native",
    title: "Cross-Platform Apps with React Native",
    category: "Mobile Development",
    description: "Ship a single codebase to iOS and Android with native modules and navigation.",
    instructor: "Marcus Lindqvist",
    rating: 4.6,
    reviewCount: 187,
    students: 1390,
    duration: "22h 45m",
    lessons: 53,
    price: 64,
    icon: BookOpen,
  },
];

export function formatPrice(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
}
