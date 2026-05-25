import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#080C14",
          secondary: "#0D1220",
          card: "#0F1629",
        },
        accent: {
          cyan: "#00D4FF",
          purple: "#7C3AED",
          blue: "#3B82F6",
          green: "#10B981",
          orange: "#F59E0B",
          pink: "#EC4899",
        },
        text: {
          primary: "#F0F4FF",
          secondary: "#8B9CBB",
          muted: "#4B5563",
        },
        border: {
          subtle: "#1E2D4A",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(155, 118, 88, 0.15), 0 0 40px rgba(0,212,255,0.05)",
        "glow-purple": "0 0 20px rgba(124,58,237,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;