
import { Code2, Database, Globe, Cpu, Layers, Palette, Terminal, Zap, BookOpen, Brain, BarChart3, Shield, type LucideIcon } from "lucide-react";
import { CSSProperties } from "react";

const iconMap: Record<string, LucideIcon> = {
  Code2, Database, Globe, Cpu, Layers, Palette, Terminal, Zap, BookOpen, Brain, BarChart3, Shield,
};

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export default function DynamicIcon({ name, size = 20, className, style }: DynamicIconProps) {
  const Icon = iconMap[name] || BookOpen;
  return <Icon size={size} className={className} style={style} />;
}