import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  ShoppingCart,
  CreditCard,
  BedDouble,
  FolderKanban,
  Building2,
  TrendingUp,
  Users,
  Contact,
  BarChart3,
  Sparkles,
  FolderOpen,
  Bitcoin,
  GraduationCap,
  Stethoscope,
  Wallet,
  KanbanSquare,
  StickyNote,
  MessageSquare,
  Share2,
  Workflow,
  Mail,
  ListTodo,
  CheckSquare,
  Calendar,
  KeyRound,
  Store,
  Bot,
  BotMessageSquare,
  Image as ImageIcon,
  AudioLines,
  UserCircle,
  IdCard,
  Rocket,
  Inbox,
  Settings,
  Tag,
  Lock,
  Bell,
  AlertTriangle,
} from "lucide-react";

export type NavSubItem = {
  title: string;
  url: string;
};

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  badge?: string;
  items?: NavSubItem[];
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    label: "Dashboards",
    items: [
      { title: "Classic Dashboard", url: "/dashboard/default", icon: LayoutDashboard },
      { title: "E-commerce", url: "/dashboard/e-commerce", icon: ShoppingCart },
      {
        title: "Payment Dashboard",
        url: "/dashboard/payment",
        icon: CreditCard,
        items: [
          { title: "Dashboard", url: "/dashboard/payment" },
          { title: "Transactions", url: "/dashboard/payment/transactions" },
        ],
      },
      {
        title: "Hotel Dashboard",
        url: "/dashboard/hotel",
        icon: BedDouble,
        items: [
          { title: "Dashboard", url: "/dashboard/hotel" },
          { title: "Bookings", url: "/dashboard/hotel/bookings" },
        ],
      },
      {
        title: "Project Management",
        url: "/dashboard/project-management",
        icon: FolderKanban,
        items: [
          { title: "Dashboard", url: "/dashboard/project-management" },
          { title: "Reports", url: "/dashboard/project-management/reports" },
          { title: "Project List", url: "/dashboard/project-management/list" },
          { title: "Project Detail", url: "/dashboard/project-management/detail" },
        ],
      },
      {
        title: "Real Estate",
        url: "/dashboard/real-estate",
        icon: Building2,
        items: [
          { title: "Dashboard", url: "/dashboard/real-estate" },
          { title: "Listings", url: "/dashboard/real-estate/list" },
          { title: "Detail Page", url: "/dashboard/real-estate/detail" },
          { title: "Filter", url: "/dashboard/real-estate/filter" },
        ],
      },
      { title: "Sales", url: "/dashboard/sales", icon: TrendingUp },
      { title: "HR", url: "/dashboard/hr", icon: Users, badge: "New" },
      { title: "CRM", url: "/dashboard/crm", icon: Contact },
      { title: "Website Analytics", url: "/dashboard/website-analytics", icon: BarChart3 },
      { title: "AI Analytics", url: "/dashboard/ai-analytics", icon: Sparkles, badge: "New" },
      { title: "File Manager", url: "/dashboard/file-manager", icon: FolderOpen },
      { title: "Crypto", url: "/dashboard/crypto", icon: Bitcoin },
      {
        title: "Academy / School",
        url: "/dashboard/academy",
        icon: GraduationCap,
        items: [
          { title: "Dashboard", url: "/dashboard/academy" },
          { title: "Course List", url: "/dashboard/academy/courses" },
          { title: "Course Detail", url: "/dashboard/academy/courses/detail" },
        ],
      },
      { title: "Hospital Management", url: "/dashboard/hospital-management", icon: Stethoscope },
      { title: "Finance Dashboard", url: "/dashboard/finance", icon: Wallet },
    ],
  },
  {
    label: "Apps",
    items: [
      { title: "Kanban", url: "/dashboard/apps/kanban", icon: KanbanSquare },
      { title: "Notes", url: "/dashboard/apps/notes", icon: StickyNote },
      { title: "Chats", url: "/dashboard/apps/chat", icon: MessageSquare },
      { title: "Social Media", url: "/dashboard/apps/social-media", icon: Share2 },
      { title: "Workflow Automation", url: "/dashboard/apps/workflow-automation", icon: Workflow, badge: "New" },
      { title: "Mail", url: "/dashboard/apps/mail", icon: Mail },
      { title: "Todo List App", url: "/dashboard/apps/todo-list", icon: ListTodo },
      { title: "Tasks", url: "/dashboard/apps/tasks", icon: CheckSquare },
      { title: "Calendar", url: "/dashboard/apps/calendar", icon: Calendar },
      { title: "File Manager", url: "/dashboard/apps/file-manager", icon: FolderOpen },
      { title: "Api Keys", url: "/dashboard/apps/api-keys", icon: KeyRound },
      {
        title: "POS App",
        url: "/dashboard/apps/pos",
        icon: Store,
        items: [
          { title: "Menu", url: "/dashboard/apps/pos" },
          { title: "Tables", url: "/dashboard/apps/pos/tables" },
        ],
      },
    ],
  },
  {
    label: "AI Apps",
    items: [
      { title: "AI Chat", url: "/dashboard/apps/ai-chat", icon: Bot },
      { title: "AI Chat V2", url: "/dashboard/apps/ai-chat-v2", icon: BotMessageSquare },
      { title: "Image Generator", url: "/dashboard/apps/ai-image-generator", icon: ImageIcon },
      { title: "Text to Speech", url: "/dashboard/apps/text-to-speech", icon: AudioLines, badge: "New" },
    ],
  },
  {
    label: "Pages",
    items: [
      { title: "Users List", url: "/dashboard/pages/users", icon: Users },
      { title: "Profile V1", url: "/dashboard/pages/profile", icon: UserCircle },
      { title: "Profile V2", url: "/dashboard/pages/user-profile", icon: IdCard },
      { title: "Onboarding Flow", url: "/dashboard/pages/onboarding-flow", icon: Rocket },
      {
        title: "Empty States",
        url: "/dashboard/pages/empty-states/01",
        icon: Inbox,
        items: [
          { title: "Empty State 01", url: "/dashboard/pages/empty-states/01" },
          { title: "Empty State 02", url: "/dashboard/pages/empty-states/02" },
          { title: "Empty State 03", url: "/dashboard/pages/empty-states/03" },
          { title: "Empty State 04", url: "/dashboard/pages/empty-states/04" },
        ],
      },
      {
        title: "Settings",
        url: "/dashboard/pages/settings",
        icon: Settings,
        items: [
          { title: "Profile", url: "/dashboard/pages/settings" },
          { title: "Account", url: "/dashboard/pages/settings/account" },
          { title: "Billing", url: "/dashboard/pages/settings/billing" },
          { title: "Appearance", url: "/dashboard/pages/settings/appearance" },
          { title: "Notifications", url: "/dashboard/pages/settings/notifications" },
          { title: "Display", url: "/dashboard/pages/settings/display" },
        ],
      },
      { title: "Pricing", url: "/dashboard/pages/pricing", icon: Tag },
      { title: "Authentication", url: "/dashboard/pages/authentication", icon: Lock },
      { title: "Notifications Page", url: "/dashboard/pages/notifications", icon: Bell },
      { title: "Error Pages", url: "/dashboard/pages/errors", icon: AlertTriangle },
    ],
  },
];
