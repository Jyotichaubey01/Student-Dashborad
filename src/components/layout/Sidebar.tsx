"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart3, Trophy, Settings, LogOut, Zap, ChevronLeft, ChevronRight, Bell } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "My Courses", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "notifications", label: "Notifications", icon: Bell },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <motion.nav
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden md:flex flex-col h-screen bg-bg-secondary border-r border-border-subtle sticky top-0 overflow-hidden z-40"
        style={{ minWidth: collapsed ? 72 : 240 }}
      >
        <div className="flex items-center gap-3 px-4 py-5 border-b border-border-subtle">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center shadow-glow-cyan">
              <Zap size={18} className="text-white" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent-cyan rounded-full animate-pulse-slow" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-display font-bold text-sm text-text-primary">LearnFlow</p>
                <p className="text-[10px] text-accent-cyan font-mono tracking-wider">PRO EDITION</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1 py-4 px-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group w-full text-left"
            >
              {active === item.id && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/5 rounded-xl border border-accent-cyan/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <item.icon
                size={18}
                className={`flex-shrink-0 relative z-10 transition-colors ${
                  active === item.id ? "text-accent-cyan" : "text-text-secondary group-hover:text-text-primary"
                }`}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className={`text-sm font-body relative z-10 whitespace-nowrap ${
                      active === item.id ? "text-text-primary font-medium" : "text-text-secondary group-hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        <div className="px-2 py-4 border-t border-border-subtle flex flex-col gap-1">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary hover:text-text-primary transition-colors group w-full">
            <Settings size={18} className="flex-shrink-0 group-hover:rotate-45 transition-transform duration-300" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm whitespace-nowrap">
                  Settings
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary hover:text-red-400 transition-colors group w-full">
            <LogOut size={18} className="flex-shrink-0" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm whitespace-nowrap">
                  Sign Out
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mt-2 flex items-center justify-center w-full py-2 rounded-xl border border-border-subtle text-text-muted hover:text-text-secondary hover:border-accent-cyan/30 transition-all"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>
      </motion.nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-lg border-t border-border-subtle px-2 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-colors ${
                active === item.id ? "text-accent-cyan" : "text-text-secondary"
              }`}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-body">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}