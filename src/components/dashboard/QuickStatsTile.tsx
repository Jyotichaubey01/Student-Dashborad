
"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Zap, Target } from "lucide-react";

const STATS = [
  { icon: Trophy, label: "Certificates", value: "3", sub: "Earned", color: "#F59E0B", bg: "from-amber-500/10" },
  { icon: Users, label: "Community", value: "1.2k", sub: "Peers", color: "#10B981", bg: "from-emerald-500/10" },
  { icon: Target, label: "Goals", value: "4/5", sub: "Monthly", color: "#EC4899", bg: "from-pink-500/10" },
  { icon: Zap, label: "Power Ups", value: "12", sub: "Available", color: "#3B82F6", bg: "from-blue-500/10" },
];

export default function QuickStatsTile() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {STATS.map((stat) => (
        <motion.article
          key={stat.label}
          whileHover={{ scale: 1.03, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-2xl border border-border-subtle bg-bg-card p-4 overflow-hidden cursor-pointer group shadow-card"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} to-transparent opacity-60 group-hover:opacity-100 transition-opacity`} />
          <div className="relative z-10">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}33` }}>
              <stat.icon size={15} style={{ color: stat.color }} />
            </div>
            <p className="font-display font-bold text-xl leading-none mb-0.5" style={{ color: stat.color }}>{stat.value}</p>
            <p className="text-text-muted text-[11px]">{stat.sub}</p>
            <p className="text-text-secondary text-xs mt-1 font-medium">{stat.label}</p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}