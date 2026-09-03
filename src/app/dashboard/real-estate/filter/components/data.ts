import type { Property } from "../../list/components/data";

export type SearchableProperty = Property & { amenities: string[] };

const gradients = [
  "from-primary/25 via-primary/10 to-transparent",
  "from-chart-1/25 via-chart-1/10 to-transparent",
  "from-chart-2/25 via-chart-2/10 to-transparent",
  "from-chart-3/25 via-chart-3/10 to-transparent",
  "from-chart-4/25 via-chart-4/10 to-transparent",
  "from-chart-5/25 via-chart-5/10 to-transparent",
];

export const searchableProperties: SearchableProperty[] = [
  { id: "s1", title: "Brookfield Family Home", address: "12 Brookfield Rd", city: "Jakarta", price: "$540,000", priceValue: 540000, type: "House", status: "Available", beds: 3, baths: 2, sqft: 2100, gradient: gradients[0], amenities: ["Garage", "Garden", "Air Conditioning"] },
  { id: "s2", title: "Lakeside Apartment", address: "45 Lakeside Ave, Unit 8", city: "Bandung", price: "$268,000", priceValue: 268000, type: "Apartment", status: "Available", beds: 2, baths: 1, sqft: 950, gradient: gradients[1], amenities: ["Pool", "Gym", "Elevator"] },
  { id: "s3", title: "Emerald Hills Villa", address: "3 Emerald Hills Dr", city: "Bali", price: "$1,750,000", priceValue: 1750000, type: "Villa", status: "Pending", beds: 5, baths: 4, sqft: 4300, gradient: gradients[2], amenities: ["Pool", "Garage", "Garden", "Pet Friendly"] },
  { id: "s4", title: "Meadowbrook Lot 2", address: "Lot 2, Meadowbrook", city: "Surabaya", price: "$121,000", priceValue: 121000, type: "Land", status: "Available", beds: 0, baths: 0, sqft: 9000, gradient: gradients[3], amenities: [] },
  { id: "s5", title: "Pinehurst Townhouse", address: "78 Pinehurst St", city: "Yogyakarta", price: "$412,000", priceValue: 412000, type: "House", status: "Available", beds: 3, baths: 3, sqft: 1980, gradient: gradients[4], amenities: ["Garage", "Air Conditioning", "Pet Friendly"] },
  { id: "s6", title: "Skyline Loft", address: "202 Skyline Blvd, Unit 30", city: "Jakarta", price: "$355,000", priceValue: 355000, type: "Apartment", status: "Sold", beds: 2, baths: 2, sqft: 1080, gradient: gradients[5], amenities: ["Gym", "Elevator", "Air Conditioning"] },
  { id: "s7", title: "Whitestone Villa", address: "5 Whitestone Ct", city: "Semarang", price: "$1,980,000", priceValue: 1980000, type: "Villa", status: "Available", beds: 6, baths: 5, sqft: 5100, gradient: gradients[0], amenities: ["Pool", "Garden", "Garage", "Gym"] },
  { id: "s8", title: "Fairview Corner Lot", address: "Lot 7, Fairview", city: "Medan", price: "$176,000", priceValue: 176000, type: "Land", status: "Available", beds: 0, baths: 0, sqft: 7800, gradient: gradients[1], amenities: [] },
  { id: "s9", title: "Cypress Grove House", address: "91 Cypress Grove Rd", city: "Bandung", price: "$625,000", priceValue: 625000, type: "House", status: "Pending", beds: 4, baths: 3, sqft: 2450, gradient: gradients[2], amenities: ["Garden", "Garage", "Pet Friendly"] },
];

export const amenityOptions = [
  "Pool",
  "Garage",
  "Garden",
  "Gym",
  "Elevator",
  "Air Conditioning",
  "Pet Friendly",
] as const;
