
export function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-card p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl skeleton" />
        <div className="w-10 h-8 rounded-lg skeleton" />
      </div>
      <div className="w-3/4 h-4 rounded skeleton mb-2" />
      <div className="w-1/2 h-3 rounded skeleton mb-4" />
      <div className="w-full h-1.5 rounded-full skeleton" />
      <div className="flex justify-between mt-3">
        <div className="w-16 h-3 rounded skeleton" />
        <div className="w-4 h-4 rounded skeleton" />
      </div>
    </div>
  );
}

export function HeroTileSkeleton() {
  return (
    <div className="col-span-12 lg:col-span-7 rounded-2xl border border-border-subtle bg-bg-card p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="w-24 h-3 rounded skeleton mb-2" />
          <div className="w-64 h-10 rounded-lg skeleton mb-2" />
          <div className="w-48 h-3 rounded skeleton" />
        </div>
        <div className="w-16 h-16 rounded-2xl skeleton" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl p-3 bg-bg-secondary/60 border border-border-subtle">
            <div className="w-5 h-5 rounded skeleton mb-2" />
            <div className="w-16 h-5 rounded skeleton mb-1" />
            <div className="w-12 h-3 rounded skeleton" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 col-span-12">
      {[1, 2, 3, 4].map((i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </div>
  );
}