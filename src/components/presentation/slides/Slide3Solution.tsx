import { motion } from "framer-motion";
import { ClipboardPaste, Sparkles, Layers, Bot, Target, GraduationCap } from "lucide-react";
import { SlideShell } from "../SlideShell";

const steps = [
  { icon: ClipboardPaste, label: "Paste Playlist", desc: "Any YouTube playlist link." },
  { icon: Sparkles, label: "AI Organizes Modules", desc: "Auto-structured chapters." },
  { icon: Layers, label: "Structured Course", desc: "A clear learning path." },
  { icon: Bot, label: "AI Tutor", desc: "Answers you on the spot." },
  { icon: Target, label: "Daily Missions", desc: "Small wins, every day." },
  { icon: GraduationCap, label: "Course Completion", desc: "Finish. Certified." },
];

export function Slide3Solution() {
  return (
    <SlideShell eyebrow="The Solution" title={<>One flow. From <em className="font-display italic text-[#B8FF2C]">chaos</em> to completion.</>}>
      <div className="relative">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-card flex h-full flex-col rounded-2xl p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B8FF2C]/10 text-[#B8FF2C]">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono-num text-xs text-[#AEB6C2]">
                    0{i + 1}
                  </span>
                </div>
                <div className="font-display text-base text-white">{s.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-[#AEB6C2]">{s.desc}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-10px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    className="h-px w-5 bg-gradient-to-r from-[#B8FF2C]/60 to-transparent"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
