export type Plan = {
  id: "starter" | "pro" | "enterprise";
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  priceSuffix: string;
  cta: string;
  featured?: boolean;
  featuresLeadIn?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For individuals and small teams just getting off the ground.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceSuffix: "/month",
    cta: "Choose Plan",
    features: [
      "Up to 3 team members",
      "5 active projects",
      "10 GB of storage",
      "Basic analytics dashboard",
      "Standard integrations (Slack, Zapier)",
      "Email notifications",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For growing teams that need more power and priority support.",
    monthlyPrice: 29,
    yearlyPrice: 23,
    priceSuffix: "/month",
    cta: "Choose Plan",
    featured: true,
    featuresLeadIn: "Everything in Starter, plus:",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "100 GB of storage",
      "Advanced analytics & custom reports",
      "Custom integrations & API access",
      "Role-based permissions",
      "Priority email & chat support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large organizations with advanced security and support needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    priceSuffix: "",
    cta: "Contact Sales",
    featuresLeadIn: "Everything in Pro, plus:",
    features: [
      "Unlimited storage",
      "Single sign-on (SSO) & SAML",
      "Dedicated account manager",
      "Custom SLA & uptime guarantee",
      "Advanced audit logs",
      "Onboarding & migration assistance",
      "24/7 phone support",
    ],
  },
];
