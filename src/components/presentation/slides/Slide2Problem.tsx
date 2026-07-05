import { motion } from "framer-motion";
import { Youtube, Map, LineChart, ShieldAlert, BatteryLow } from "lucide-react";
import { SlideShell } from "../SlideShell";

const problems = [
  { icon: Youtube, title: "YouTube distraction", desc: "Endless recommendations pull learners away." },
  { icon: Map, title: "No roadmap", desc: "Scattered videos with no clear direction." },
  { icon: LineChart, title: "No progress tracking", desc: "You never really know how far you've come." },
  { icon: ShieldAlert, title: "No accountability", desc: "Nothing keeps you consistent day after day." },
  { icon: BatteryLow, title: "Low motivation", desc: "Courses started, courses forgotten." },
];

export function Slide2Problem() {
  return (
    <SlideShell eyebrow="The Problem" title={<>Learning online is <em className="font-display italic text-[#B8FF2C]">broken</em>.</>}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass-card group flex items-start gap-4 rounded-2xl p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] transition-colors group-hover:bg-[#B8FF2C]/10">
                <p.icon className="h-5 w-5 text-[#B8FF2C]" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg text-white">{p.title}</div>
                <div className="mt-1 text-sm leading-relaxed text-[#AEB6C2]">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card relative hidden overflow-hidden rounded-3xl p-8 lg:flex lg:flex-col lg:justify-center"
        >
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#B8FF2C]/10 blur-3xl" />
          <div className="relative">
            <div className="mb-6 font-mono-num text-xs uppercase tracking-[0.2em] text-[#AEB6C2]">
              Average completion rate
            </div>
            <div className="font-display text-8xl font-medium leading-none text-white">
              3<span className="text-[#B8FF2C]">%</span>
            </div>
            <div className="mt-4 text-sm text-[#AEB6C2]">
              of learners finish the free courses they start online.
            </div>
            <div className="mt-8 space-y-3">
              {[
                { label: "Started", pct: 100 },
                { label: "Engaged Week 2", pct: 22 },
                { label: "Completed", pct: 3 },
              ].map((s, i) => (
                <div key={s.label}>
                  <div className="mb-1 flex justify-between text-xs text-[#AEB6C2]">
                    <span>{s.label}</span>
                    <span className="font-mono-num">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{ duration: 1.2, delay: 0.9 + i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#B8FF2C]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
