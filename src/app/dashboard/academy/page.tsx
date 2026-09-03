import { Award, BookOpen, Clock, Flame } from "lucide-react";

import { StatCard } from "@/components/stat-card";
import { CourseProgressChart } from "./components/course-progress-chart";
import { GreetingBanner } from "./components/greeting-banner";
import { LeaderboardCard } from "./components/leaderboard-card";
import { LearningPathCard } from "./components/learning-path-card";
import { PopularCoursesTable } from "./components/popular-courses-table";
import { ProgressStatisticsCard } from "./components/progress-statistics-card";
import { SuccessRateCard } from "./components/success-rate-card";

export default function AcademyDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <GreetingBanner />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Courses in Progress" value="12" icon={BookOpen} />
        <StatCard label="Hours This Month" value="48h" icon={Clock} />
        <StatCard label="Certificates Earned" value="3" icon={Award} />
        <StatCard label="Day Streak" value="5" icon={Flame} />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <LearningPathCard />
        <LeaderboardCard />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <SuccessRateCard />
        <ProgressStatisticsCard />
      </div>

      <CourseProgressChart />

      <PopularCoursesTable />
    </div>
  );
}
