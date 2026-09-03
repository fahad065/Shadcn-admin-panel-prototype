"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PropertyCard } from "../../list/components/property-card";
import { amenityOptions, searchableProperties } from "./data";

type Criteria = {
  priceMin: string;
  priceMax: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  location: string;
  amenities: string[];
};

const initialCriteria: Criteria = {
  priceMin: "",
  priceMax: "",
  type: "all",
  bedrooms: "any",
  bathrooms: "any",
  location: "",
  amenities: [],
};

export function SearchForm() {
  const [criteria, setCriteria] = useState<Criteria>(initialCriteria);

  const results = useMemo(() => {
    const min = criteria.priceMin.trim() ? Number(criteria.priceMin) : undefined;
    const max = criteria.priceMax.trim() ? Number(criteria.priceMax) : undefined;
    const location = criteria.location.trim().toLowerCase();

    return searchableProperties.filter((property) => {
      if (min !== undefined && !Number.isNaN(min) && property.priceValue < min) return false;
      if (max !== undefined && !Number.isNaN(max) && property.priceValue > max) return false;
      if (criteria.type !== "all" && property.type !== criteria.type) return false;
      if (criteria.bedrooms !== "any" && property.beds < Number(criteria.bedrooms)) return false;
      if (criteria.bathrooms !== "any" && property.baths < Number(criteria.bathrooms)) return false;
      if (
        location.length > 0 &&
        !property.city.toLowerCase().includes(location) &&
        !property.address.toLowerCase().includes(location)
      ) {
        return false;
      }
      if (
        criteria.amenities.length > 0 &&
        !criteria.amenities.every((amenity) => property.amenities.includes(amenity))
      ) {
        return false;
      }

      return true;
    });
  }, [criteria]);

  function toggleAmenity(amenity: string, checked: boolean) {
    setCriteria((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, amenity]
        : prev.amenities.filter((item) => item !== amenity),
    }));
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Search Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="price-min">Min Price</Label>
                <Input
                  id="price-min"
                  inputMode="numeric"
                  placeholder="$0"
                  value={criteria.priceMin}
                  onChange={(event) =>
                    setCriteria((prev) => ({ ...prev, priceMin: event.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="price-max">Max Price</Label>
                <Input
                  id="price-max"
                  inputMode="numeric"
                  placeholder="No limit"
                  value={criteria.priceMax}
                  onChange={(event) =>
                    setCriteria((prev) => ({ ...prev, priceMax: event.target.value }))
                  }
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="property-type">Property Type</Label>
                <Select
                  value={criteria.type}
                  onValueChange={(value) =>
                    setCriteria((prev) => ({ ...prev, type: String(value) }))
                  }
                >
                  <SelectTrigger id="property-type" className="w-full">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Type</SelectItem>
                    <SelectItem value="House">House</SelectItem>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Select
                  value={criteria.bedrooms}
                  onValueChange={(value) =>
                    setCriteria((prev) => ({ ...prev, bedrooms: String(value) }))
                  }
                >
                  <SelectTrigger id="bedrooms" className="w-full">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Select
                  value={criteria.bathrooms}
                  onValueChange={(value) =>
                    setCriteria((prev) => ({ ...prev, bathrooms: String(value) }))
                  }
                >
                  <SelectTrigger id="bathrooms" className="w-full">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="City or address..."
                value={criteria.location}
                onChange={(event) =>
                  setCriteria((prev) => ({ ...prev, location: event.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Amenities</p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {amenityOptions.map((amenity) => (
                  <Label
                    key={amenity}
                    htmlFor={`amenity-${amenity}`}
                    className="font-normal"
                  >
                    <Checkbox
                      id={`amenity-${amenity}`}
                      checked={criteria.amenities.includes(amenity)}
                      onCheckedChange={(checked) => toggleAmenity(amenity, checked === true)}
                    />
                    {amenity}
                  </Label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{results.length}</span>{" "}
                {results.length === 1 ? "property matches" : "properties match"} your search
              </p>
              <Button type="submit" className="gap-1.5 sm:w-auto">
                <Search className="size-3.5" />
                Search Properties
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {results.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {results.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed py-16 text-center">
          <p className="text-sm font-medium">No properties match your criteria</p>
          <p className="text-sm text-muted-foreground">
            Try widening the price range or clearing an amenity filter.
          </p>
        </div>
      )}
    </div>
  );
}
