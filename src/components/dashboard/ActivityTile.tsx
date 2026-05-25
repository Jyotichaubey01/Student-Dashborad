
"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { useMemo } from "react";

function generateActivityData() {
  const days = [];
  const today = new Date();
  for (let i = 7 * 15 - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push({
      date: d.toISOString().split("T")[0],
      count: Math.random() > 0.45 ? Math.floor(Math.random() * 5) + 1 : 0,
    });
  }
  return days;
}

const COLORS = [
  "bg-bg-secondary border-border-subtle",
  "bg-cyan-900/40 border-cyan-800/40",
  "bg-cyan-700/40 border-cyan-600/40",
  "bg-cyan-500/50 border-cyan-500/60",
  "bg-accent-cyan border-accent-cyan",
];

export default function ActivityTile() {
  const data = useMemo(() => generateActivityData(), []);
  const weeks = useMemo(() => {
    const result = [];
    for (let i = 0; i < data.length; i += 7) result.push(data.slice(i, i + 7));
    return result;
  }, [data]);

  return (
    <article className="rounded-2xl overflow-hidden border border-border-subtle bg-bg-card shadow-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
            <Activity size={14} className="text-accent-cyan" />
          </div>
          <span className="font-display font-semibold text-sm text-text-primary">Activity</span>
        </div>
        <span className="text-xs text-text-muted font-mono">
          <span className="text-accent-cyan font-bold">{data.filter(d => d.count > 0).length}</span> active days
        </span>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="flex gap-0.5" style={{ minWidth: "fit-content" }}>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map((day, di) => (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: (wi * 7 + di) * 0.004,
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  title={`${day.date}: ${day.count} sessions`}
                  className={`w-2.5 h-2.5 rounded-sm border cursor-pointer hover:scale-125 transition-transform ${COLORS[Math.min(day.count, 4)]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <span className="text-[10px] text-text-muted">Less</span>
        <div className="flex gap-1">
          {COLORS.map((color, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-sm border ${color}`} />
          ))}
        </div>
        <span className="text-[10px] text-text-muted">More</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border-subtle">
        {[
          { label: "Best Streak", value: "14d", color: "text-orange-400" },
          { label: "This Week", value: "5/7", color: "text-accent-cyan" },
          { label: "Avg/Day", value: "2.4h", color: "text-accent-purple" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className={`font-display font-bold text-base ${s.color}`}>{s.value}</p>
            <p className="text-[10px] text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </article>
  );
}