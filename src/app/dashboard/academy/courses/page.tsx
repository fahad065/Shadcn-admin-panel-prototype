"use client";

import { useMemo, useState } from "react";

import { PageHeader } from "@/components/page-header";
import { CourseCard } from "./components/course-card";
import { CourseFilters } from "./components/course-filters";
import { courses, type CourseCategory } from "./components/data";

export default function CourseListPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CourseCategory | "all">("all");

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = category === "all" || course.category === category;
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Course List"
        description="Browse the academy catalog and pick up where you left off."
      />

      <CourseFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />

      {filteredCourses.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed py-16 text-center">
          <p className="text-sm font-medium">No courses found</p>
          <p className="text-xs text-muted-foreground">
            Try adjusting your search or category filter.
          </p>
        </div>
      )}
    </div>
  );
}
