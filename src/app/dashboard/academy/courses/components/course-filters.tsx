"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categories, type CourseCategory } from "./data";

interface CourseFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: CourseCategory | "all";
  onCategoryChange: (category: CourseCategory | "all") => void;
}

export function CourseFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: CourseFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Select
        value={category}
        onValueChange={(value) => onCategoryChange(value as CourseCategory | "all")}
      >
        <SelectTrigger className="w-full sm:w-56" aria-label="Filter by category">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="relative w-full sm:max-w-xs">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search courses or instructors..."
          className="pl-8"
          aria-label="Search courses"
        />
      </div>
    </div>
  );
}
