
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Course } from "@/types";
import DynamicIcon from "@/components/ui/DynamicIcon";
import ProgressBar from "@/components/ui/ProgressBar";

const THEMES = [
  { gradient: "from-cyan-500/15 via-transparent to-transparent", accent: "#00D4FF", border: "border-cyan-500/20" },
  { gradient: "from-violet-500/15 via-transparent to-transparent", accent: "#7C3AED", border: "border-violet-500/20" },
  { gradient: "from-emerald-500/15 via-transparent to-transparent", accent: "#10B981", border: "border-emerald-500/20" },
  { gradient: "from-amber-500/15 via-transparent to-transparent", accent: "#F59E0B", border: "border-amber-500/20" },
];

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const theme = THEMES[index % THEMES.length];

  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl overflow-hidden border ${theme.border} bg-bg-card shadow-card cursor-pointer group`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} pointer-events-none`} />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${theme.accent}44, 0 0 24px ${theme.accent}22` }}
      />

      <div className="relative z-10 p-5">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${theme.accent}18`, border: `1px solid ${theme.accent}33` }}
          >
            <DynamicIcon
              name={course.icon_name}
              size={18}
              className="transition-transform group-hover:scale-110 duration-300"
              style={{ color: theme.accent }}
            />
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-bold" style={{ color: theme.accent }}>
              {course.progress}%
            </span>
            <p className="text-[10px] text-text-muted">Complete</p>
          </div>
        </div>

        <h3 className="font-display font-semibold text-text-primary text-sm leading-snug mb-3 group-hover:text-white transition-colors">
          {course.title}
        </h3>

        <ProgressBar value={course.progress} color={theme.accent} delay={index * 0.15 + 0.5} />

        <div className="flex items-center justify-between mt-3">
          <span className="text-text-muted text-xs">
            {course.progress < 30 ? "Just started" : course.progress < 70 ? "In progress" : "Almost done!"}
          </span>
          <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
            <ChevronRight size={14} className="text-text-muted group-hover:text-text-secondary transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}