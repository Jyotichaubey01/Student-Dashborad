
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  value: number;
  color?: string;
  delay?: number;
}

export default function ProgressBar({ value, color = "#00D4FF", delay = 0 }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-1.5 w-full bg-bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ delay, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
        className="h-full rounded-full relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          boxShadow: `0 0 8px ${color}66`,
        }}
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, delay: delay + 1.2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </motion.div>
    </div>
  );
}