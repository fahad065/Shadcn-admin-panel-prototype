import type { LucideIcon } from "lucide-react";
import { Building2, Home, Landmark, Trees } from "lucide-react";

export type PropertyType = "House" | "Apartment" | "Villa" | "Land";
export type ListingStatus = "Available" | "Pending" | "Sold";

export type Property = {
  id: string;
  title: string;
  address: string;
  city: string;
  price: string;
  priceValue: number;
  type: PropertyType;
  status: ListingStatus;
  beds: number;
  baths: number;
  sqft: number;
  gradient: string;
};

export const typeIcons: Record<PropertyType, LucideIcon> = {
  House: Home,
  Apartment: Building2,
  Villa: Landmark,
  Land: Trees,
};

export const statusStyles: Record<ListingStatus, string> = {
  Available: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Sold: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

const gradients = [
  "from-primary/25 via-primary/10 to-transparent",
  "from-chart-1/25 via-chart-1/10 to-transparent",
  "from-chart-2/25 via-chart-2/10 to-transparent",
  "from-chart-3/25 via-chart-3/10 to-transparent",
  "from-chart-4/25 via-chart-4/10 to-transparent",
  "from-chart-5/25 via-chart-5/10 to-transparent",
];

export const properties: Property[] = [
  { id: "p1", title: "The Somerset House", address: "482 Somerset Ln", city: "Jakarta", price: "$980,000", priceValue: 980000, type: "House", status: "Available", beds: 4, baths: 3, sqft: 2850, gradient: gradients[0] },
  { id: "p2", title: "Maple Court Residence", address: "17 Maple Court, Unit 5B", city: "Bandung", price: "$312,000", priceValue: 312000, type: "Apartment", status: "Available", beds: 2, baths: 2, sqft: 1120, gradient: gradients[1] },
  { id: "p3", title: "Cobalt Bay Villa", address: "9 Cobalt Bay Rd", city: "Bali", price: "$2,150,000", priceValue: 2150000, type: "Villa", status: "Pending", beds: 5, baths: 5, sqft: 4600, gradient: gradients[2] },
  { id: "p4", title: "Greenfield Estate Lot 4", address: "Lot 4, Greenfield Estate", city: "Surabaya", price: "$198,000", priceValue: 198000, type: "Land", status: "Available", beds: 0, baths: 0, sqft: 8500, gradient: gradients[3] },
  { id: "p5", title: "Riverside Heights #12B", address: "12B Riverside Heights", city: "Yogyakarta", price: "$276,000", priceValue: 276000, type: "Apartment", status: "Sold", beds: 3, baths: 2, sqft: 1340, gradient: gradients[4] },
  { id: "p6", title: "Hillcrest Manor", address: "6 Hillcrest Dr", city: "Semarang", price: "$1,420,000", priceValue: 1420000, type: "Villa", status: "Pending", beds: 6, baths: 5, sqft: 5200, gradient: gradients[5] },
  { id: "p7", title: "Orchard Lane Plot 9", address: "Plot 9, Orchard Lane", city: "Medan", price: "$142,000", priceValue: 142000, type: "Land", status: "Sold", beds: 0, baths: 0, sqft: 6200, gradient: gradients[0] },
  { id: "p8", title: "Cedarwood Family Home", address: "231 Cedarwood Ave", city: "Jakarta", price: "$715,000", priceValue: 715000, type: "House", status: "Available", beds: 4, baths: 3, sqft: 2400, gradient: gradients[1] },
  { id: "p9", title: "Harborview Loft", address: "88 Harborview St, Unit 14", city: "Surabaya", price: "$389,000", priceValue: 389000, type: "Apartment", status: "Pending", beds: 2, baths: 1, sqft: 980, gradient: gradients[2] },
  { id: "p10", title: "Silverpine Villa", address: "3 Silverpine Way", city: "Bali", price: "$1,890,000", priceValue: 1890000, type: "Villa", status: "Available", beds: 5, baths: 4, sqft: 4100, gradient: gradients[3] },
  { id: "p11", title: "Willowbrook Cottage", address: "54 Willowbrook Ln", city: "Bandung", price: "$468,000", priceValue: 468000, type: "House", status: "Sold", beds: 3, baths: 2, sqft: 1780, gradient: gradients[4] },
  { id: "p12", title: "Northgate Vacant Lot", address: "Lot 12, Northgate", city: "Medan", price: "$165,000", priceValue: 165000, type: "Land", status: "Available", beds: 0, baths: 0, sqft: 7300, gradient: gradients[5] },
];
