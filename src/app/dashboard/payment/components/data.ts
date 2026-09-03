export function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    signDisplay: "exceptZero",
  }).format(amount);
}

export type Balance = {
  code: string;
  label: string;
  flag: string;
  symbol: string;
  amount: number;
};

export const balances: Balance[] = [
  { code: "USD", label: "US Dollar", flag: "🇺🇸", symbol: "$", amount: 24850.32 },
  { code: "EUR", label: "Euro", flag: "🇪🇺", symbol: "€", amount: 18230.1 },
  { code: "GBP", label: "British Pound", flag: "🇬🇧", symbol: "£", amount: 9120.75 },
  { code: "JPY", label: "Japanese Yen", flag: "🇯🇵", symbol: "¥", amount: 452300 },
];

export type Transaction = {
  id: string;
  description: string;
  counterparty: string;
  date: string;
  amount: number;
  currency: string;
};

export const latestTransactions: Transaction[] = [
  { id: "TXN-7042", description: "Client payment", counterparty: "Meridian Studio", date: "Sep 2, 2026", amount: 3200, currency: "USD" },
  { id: "TXN-7038", description: "Software subscription", counterparty: "Cloudline Inc.", date: "Sep 1, 2026", amount: -89.0, currency: "USD" },
  { id: "TXN-7031", description: "Freelance invoice", counterparty: "Nordholm AB", date: "Aug 30, 2026", amount: 1450.5, currency: "EUR" },
  { id: "TXN-7024", description: "Office supplies", counterparty: "Staples UK", date: "Aug 29, 2026", amount: -212.4, currency: "GBP" },
  { id: "TXN-7016", description: "Consulting fee", counterparty: "Havenworks Ltd.", date: "Aug 27, 2026", amount: 980.0, currency: "USD" },
  { id: "TXN-7009", description: "Currency exchange", counterparty: "Wallet transfer", date: "Aug 25, 2026", amount: -500.0, currency: "USD" },
];

export type UpcomingTransaction = {
  id: string;
  description: string;
  counterparty: string;
  date: string;
  amount: number;
  currency: string;
};

export const upcomingTransactions: UpcomingTransaction[] = [
  { id: "SCH-2214", description: "Payroll transfer", counterparty: "Team payroll", date: "Sep 5, 2026", amount: -12400.0, currency: "USD" },
  { id: "SCH-2209", description: "Office rent", counterparty: "Cascadia Properties", date: "Sep 6, 2026", amount: -3100.0, currency: "USD" },
  { id: "SCH-2201", description: "Client retainer", counterparty: "Brightloop Co.", date: "Sep 9, 2026", amount: 2500.0, currency: "EUR" },
  { id: "SCH-2196", description: "SaaS renewal", counterparty: "Ironforge Dev", date: "Sep 12, 2026", amount: -149.0, currency: "GBP" },
];
