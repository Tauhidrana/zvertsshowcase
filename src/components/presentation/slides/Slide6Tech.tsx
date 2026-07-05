import { motion } from "framer-motion";
import { Code2, Server, Database, KeyRound, Sparkles, Cloud } from "lucide-react";
import { SlideShell } from "../SlideShell";

const stack = [
  { icon: Code2, title: "Frontend", tech: "React · Vite · Tailwind" },
  { icon: Server, title: "Backend", tech: "Node · Edge Functions" },
  { icon: Database, title: "Database", tech: "PostgreSQL" },
  { icon: KeyRound, title: "Authentication", tech: "OAuth · JWT" },
  { icon: Sparkles, title: "AI", tech: "LLM Orchestration" },
  { icon: Cloud, title: "Deployment", tech: "Global CDN" },
];

export function Slide6Tech() {
  return (
    <SlideShell eyebrow="Technology Stack" title="Built on a modern, resilient stack.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
            whileHover={{ y: -3 }}
            className="glass-card group flex items-center gap-5 rounded-2xl p-6"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B8FF2C]/10 transition-transform group-hover:scale-110">
              <s.icon className="h-6 w-6 text-[#B8FF2C]" strokeWidth={1.5} />
            </div>
            <div className="min-w-0">
              <div className="font-mono-num text-[10px] uppercase tracking-[0.2em] text-[#AEB6C2]">
                Layer 0{i + 1}
              </div>
              <div className="mt-1 font-display text-lg text-white">{s.title}</div>
              <div className="text-sm text-[#AEB6C2]">{s.tech}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
