

import { CourseCardSkeleton } from "@/components/ui/Skeletons";

export default function CoursesLoading() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <div className="w-32 h-4 rounded skeleton" />
        <div className="w-14 h-3 rounded skeleton" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => <CourseCardSkeleton key={i} />)}
      </div>
    </section>
  );
}