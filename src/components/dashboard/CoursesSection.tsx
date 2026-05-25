

import { getCourses } from "@/lib/supabase";
import CourseCard from "./CourseCard";
import type { Course } from "@/types";

const FALLBACK: Course[] = [
  { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code2", created_at: new Date().toISOString() },
  { id: "2", title: "Supabase & PostgreSQL", progress: 42, icon_name: "Database", created_at: new Date().toISOString() },
  { id: "3", title: "Next.js App Router", progress: 88, icon_name: "Globe", created_at: new Date().toISOString() },
  { id: "4", title: "Framer Motion Mastery", progress: 30, icon_name: "Layers", created_at: new Date().toISOString() },
];

export default async function CoursesSection() {
  let courses: Course[] = [];
  let usingFallback = false;

  try {
    const fetched = await getCourses();
    courses = fetched.length > 0 ? fetched : FALLBACK;
    if (fetched.length === 0) usingFallback = true;
  } catch {
    courses = FALLBACK;
    usingFallback = true;
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <h2 className="font-display font-semibold text-text-primary">Active Courses</h2>
          {usingFallback && (
            <span className="text-[10px] font-mono bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">
              DEMO DATA
            </span>
          )}
        </div>
        <button className="text-xs text-accent-cyan hover:underline">View all →</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}