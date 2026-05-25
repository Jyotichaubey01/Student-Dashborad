
"use client";

import { motion } from "framer-motion";
import { Flame, Star, Clock, TrendingUp } from "lucide-react";

interface HeroTileProps {
  name?: string;
  streak?: number;
}

export default function HeroTile({ name = "Alex Chen", streak = 14 }: HeroTileProps) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  const stats = [
    { icon: Clock, label: "Study Time", value: "3.2h", color: "text-accent-cyan" },
    { icon: Star, label: "XP Earned", value: "2,840", color: "text-accent-purple" },
    { icon: TrendingUp, label: "Rank", value: "#142", color: "text-accent-blue" },
  ];

  return (
    <article className="relative rounded-2xl overflow-hidden border border-border-subtle bg-bg-card shadow-card group">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-cyan/8 rounded-full blur-3xl group-hover:bg-accent-cyan/12 transition-all duration-700" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent-purple/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 p-6 lg:p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-text-secondary text-sm mb-1">{greeting} 👋</p>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
            <p className="text-text-secondary text-sm mt-2">You&apos;re on a roll! Keep the momentum going.</p>
          </div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex-shrink-0 relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex flex-col items-center justify-center">
              <Flame size={22} className="text-orange-400 mb-0.5" />
              <span className="font-display font-bold text-orange-400 text-lg leading-none">{streak}</span>
            </div>
            <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-mono px-1.5 py-0.5 rounded-full font-bold">
              STREAK
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-bg-secondary/60 rounded-xl p-3 border border-border-subtle/50"
            >
              <stat.icon size={14} className={`${stat.color} mb-2`} />
              <p className={`font-display font-bold text-lg leading-none mb-1 ${stat.color}`}>{stat.value}</p>
              <p className="text-text-muted text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-secondary text-xs">Daily Goal</span>
            <span className="text-accent-cyan text-xs font-mono">68% complete</span>
          </div>
          <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "68%" }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
            />
          </div>
        </div>
      </div>
    </article>
  );
}