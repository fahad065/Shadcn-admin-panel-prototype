import { PageHeader } from "@/components/page-header";

import { SearchForm } from "./components/search-form";

export default function RealEstateFilterPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Filter"
        description="Search properties by price, type, location, and amenities."
      />

      <SearchForm />
    </div>
  );
}
