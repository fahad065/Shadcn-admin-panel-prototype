import { CourseHeader } from "./components/course-header";
import { CourseHero } from "./components/course-hero";
import { CourseTabs } from "./components/course-tabs";
import { EnrollmentCard } from "./components/enrollment-card";

export default function CourseDetailPage() {
  return (
    <div className="flex flex-col gap-6">
      <CourseHeader />
      <CourseHero />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CourseTabs />
        </div>
        <div className="lg:self-start">
          <EnrollmentCard />
        </div>
      </div>
    </div>
  );
}
