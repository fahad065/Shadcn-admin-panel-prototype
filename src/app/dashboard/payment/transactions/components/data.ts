export type TransactionStatus = "Completed" | "Pending" | "Failed";

export type TransactionCurrency = "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD";

export type LedgerTransaction = {
  id: string;
  description: string;
  counterparty: string;
  currency: TransactionCurrency;
  amount: number;
  status: TransactionStatus;
  date: string;
};

export const currencyMeta: Record<TransactionCurrency, { flag: string; label: string }> = {
  USD: { flag: "🇺🇸", label: "US Dollar" },
  EUR: { flag: "🇪🇺", label: "Euro" },
  GBP: { flag: "🇬🇧", label: "British Pound" },
  JPY: { flag: "🇯🇵", label: "Japanese Yen" },
  AUD: { flag: "🇦🇺", label: "Australian Dollar" },
  CAD: { flag: "🇨🇦", label: "Canadian Dollar" },
};

export function formatAmount(amount: number, currency: TransactionCurrency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    signDisplay: "exceptZero",
    maximumFractionDigits: currency === "JPY" ? 0 : 2,
  }).format(amount);
}

export const transactions: LedgerTransaction[] = [
  { id: "TXN-8241", description: "Client payment - Q3 retainer", counterparty: "Meridian Studio", currency: "USD", amount: 4200, status: "Completed", date: "Sep 2, 2026" },
  { id: "TXN-8238", description: "Cloud hosting invoice", counterparty: "Nimbus Cloud Services", currency: "USD", amount: -128.5, status: "Completed", date: "Sep 2, 2026" },
  { id: "TXN-8235", description: "Freelance design invoice", counterparty: "Nordholm AB", currency: "EUR", amount: 1875, status: "Pending", date: "Sep 1, 2026" },
  { id: "TXN-8230", description: "Office supplies order", counterparty: "Staples UK", currency: "GBP", amount: -212.4, status: "Completed", date: "Sep 1, 2026" },
  { id: "TXN-8227", description: "Consulting fee", counterparty: "Havenworks Ltd.", currency: "USD", amount: 980, status: "Completed", date: "Aug 31, 2026" },
  { id: "TXN-8221", description: "Wallet currency exchange", counterparty: "Internal transfer", currency: "USD", amount: -500, status: "Completed", date: "Aug 30, 2026" },
  { id: "TXN-8219", description: "SaaS subscription renewal", counterparty: "Ironforge Dev", currency: "GBP", amount: -149, status: "Failed", date: "Aug 29, 2026" },
  { id: "TXN-8214", description: "Client payment - Website revamp", counterparty: "Brightloop Co.", currency: "EUR", amount: 2500, status: "Completed", date: "Aug 28, 2026" },
  { id: "TXN-8209", description: "Payroll transfer", counterparty: "Team payroll", currency: "USD", amount: -12400, status: "Completed", date: "Aug 27, 2026" },
  { id: "TXN-8203", description: "Marketing campaign invoice", counterparty: "Orbit Media Group", currency: "AUD", amount: -890, status: "Pending", date: "Aug 26, 2026" },
  { id: "TXN-8198", description: "Equipment purchase", counterparty: "TechSource Japan", currency: "JPY", amount: -68000, status: "Failed", date: "Aug 25, 2026" },
  { id: "TXN-8192", description: "Client payment - Support contract", counterparty: "Calderon & Co.", currency: "USD", amount: 1560, status: "Completed", date: "Aug 24, 2026" },
  { id: "TXN-8187", description: "Refund issued", counterparty: "Wide World Importers", currency: "CAD", amount: -340, status: "Completed", date: "Aug 23, 2026" },
  { id: "TXN-8181", description: "Affiliate payout", counterparty: "Growthline Partners", currency: "USD", amount: -215.75, status: "Pending", date: "Aug 22, 2026" },
  { id: "TXN-8176", description: "Client payment - Retainer renewal", counterparty: "Fabrikam Inc.", currency: "EUR", amount: 3100, status: "Completed", date: "Aug 20, 2026" },
];
