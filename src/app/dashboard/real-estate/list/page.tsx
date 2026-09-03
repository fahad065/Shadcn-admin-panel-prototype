"use client";

import { useMemo, useState } from "react";

import { PageHeader } from "@/components/page-header";

import { properties } from "./components/data";
import { ListingToolbar, type ListingFilters } from "./components/listing-toolbar";
import { PropertyCard } from "./components/property-card";

export default function RealEstateListingsPage() {
  const [filters, setFilters] = useState<ListingFilters>({
    type: "all",
    status: "all",
    search: "",
  });

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesType = filters.type === "all" || property.type === filters.type;
      const matchesStatus = filters.status === "all" || property.status === filters.status;
      const matchesSearch =
        query.length === 0 ||
        property.title.toLowerCase().includes(query) ||
        property.address.toLowerCase().includes(query) ||
        property.city.toLowerCase().includes(query);

      return matchesType && matchesStatus && matchesSearch;
    });
  }, [filters]);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Listings"
        description="Browse and manage every active property listing across your portfolio."
      />

      <ListingToolbar filters={filters} onChange={setFilters} />

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed py-16 text-center">
          <p className="text-sm font-medium">No listings match your filters</p>
          <p className="text-sm text-muted-foreground">
            Try adjusting the type, status, or search term.
          </p>
        </div>
      )}
    </div>
  );
}
