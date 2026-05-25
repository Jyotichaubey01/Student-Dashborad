

import { HeroTileSkeleton } from "@/components/ui/Skeletons";
import CoursesLoading from "@/components/dashboard/CoursesLoading";

export default function Loading() {
  return (
    <main className="flex-1 p-4 lg:p-6 pb-20 md:pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="w-40 h-4 rounded skeleton" />
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full skeleton" />
            <div className="w-8 h-8 rounded-full skeleton" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <HeroTileSkeleton />
          </div>
          <div className="col-span-12 lg:col-span-5 rounded-2xl border border-border-subtle bg-bg-card p-5">
            <div className="w-24 h-4 rounded skeleton mb-4" />
            <div className="w-full h-32 rounded-xl skeleton" />
          </div>
          <div className="col-span-12">
            <CoursesLoading />
          </div>
        </div>
      </div>
    </main>
  );
}