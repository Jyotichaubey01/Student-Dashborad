import { Suspense } from "react";
import { Search, Bell } from "lucide-react";
import HeroTile from "@/components/dashboard/HeroTile";
import ActivityTile from "@/components/dashboard/ActivityTile";
import CoursesSection from "@/components/dashboard/CoursesSection";
import CoursesLoading from "@/components/dashboard/CoursesLoading";
import QuickStatsTile from "@/components/dashboard/QuickStatsTile";
import { BentoGrid, BentoItem } from "@/components/dashboard/BentoGrid";

export default async function DashboardPage() {
  return (
    <main className="flex-1 p-4 lg:p-6 pb-20 md:pb-6 overflow-auto">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <p className="text-text-muted text-xs font-mono tracking-widest uppercase mb-0.5">Dashboard</p>
            <h2 className="font-display font-semibold text-text-secondary text-sm">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long", year: "numeric", month: "long", day: "numeric",
              })}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-secondary border border-border-subtle text-text-muted text-sm hover:border-accent-cyan/30 transition-colors">
              <Search size={14} />
              <span className="text-xs">Search...</span>
              <kbd className="text-[10px] bg-bg-primary/50 border border-border-subtle rounded px-1.5 py-0.5 font-mono">⌘K</kbd>
            </button>
            <button className="relative w-9 h-9 rounded-xl bg-bg-secondary border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent-cyan/30 transition-all">
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse-slow" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-xs font-display font-bold text-white shadow-glow-cyan">
              AC
            </div>
          </div>
        </header>

        <BentoGrid>
          <BentoItem className="col-span-12 lg:col-span-7">
            <HeroTile name="Alex Chen" streak={14} />
          </BentoItem>

          <BentoItem className="col-span-12 lg:col-span-5">
            <ActivityTile />
          </BentoItem>

          <BentoItem className="col-span-12">
            <QuickStatsTile />
          </BentoItem>

          <BentoItem className="col-span-12">
            <Suspense fallback={<CoursesLoading />}>
              <CoursesSection />
            </Suspense>
          </BentoItem>
        </BentoGrid>
      </div>
    </main>
  );
}