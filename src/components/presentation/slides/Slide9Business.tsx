import { motion } from "framer-motion";
import { Compass, Telescope, Users, Globe2, Wallet } from "lucide-react";
import { SlideShell } from "../SlideShell";

const items = [
  {
    icon: Compass,
    title: "Mission",
    desc: "Make structured learning accessible to everyone, everywhere.",
  },
  {
    icon: Telescope,
    title: "Vision",
    desc: "A world where every learner finishes what they start.",
  },
  {
    icon: Users,
    title: "Target Users",
    desc: "Students, self-learners, professionals upskilling.",
    stat: "500M+",
    statLabel: "Global online learners",
  },
  {
    icon: Globe2,
    title: "Market Opportunity",
    desc: "The global EdTech market is scaling fast.",
    stat: "$400B",
    statLabel: "EdTech by 2030",
  },
  {
    icon: Wallet,
    title: "Revenue Model",
    desc: "Freemium tier, Pro subscriptions, institutional licensing.",
  },
];

export function Slide9Business() {
  return (
    <SlideShell eyebrow="Business Vision" title="A category-defining opportunity.">
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 + i * 0.08 }}
            className={`glass-card flex flex-col rounded-2xl p-6 ${
              i >= 3 ? "lg:col-span-1" : ""
            }`}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8FF2C]/10">
                <it.icon className="h-5 w-5 text-[#B8FF2C]" strokeWidth={1.75} />
              </div>
              <div className="font-display text-lg text-white">{it.title}</div>
            </div>
            <div className="text-sm leading-relaxed text-[#AEB6C2]">{it.desc}</div>
            {it.stat && (
              <div className="mt-6 border-t border-white/5 pt-4">
                <div className="font-display text-4xl font-medium text-white text-glow">{it.stat}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-[#AEB6C2]">
                  {it.statLabel}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
