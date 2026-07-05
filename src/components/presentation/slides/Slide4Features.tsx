import { motion } from "framer-motion";
import { BookOpen, Bot, Activity, Target, HelpCircle, Trophy, Award, LifeBuoy } from "lucide-react";
import { SlideShell } from "../SlideShell";

const features = [
  { icon: BookOpen, title: "Structured Learning", desc: "Turn any playlist into a full course." },
  { icon: Bot, title: "AI Tutor", desc: "Ask questions, get instant clarity." },
  { icon: Activity, title: "Progress Tracking", desc: "See every step you take." },
  { icon: Target, title: "Daily Missions", desc: "Streaks that keep you moving." },
  { icon: HelpCircle, title: "Quiz", desc: "Auto-generated checks per module." },
  { icon: Trophy, title: "Gamification", desc: "XP, levels, and rewards." },
  { icon: Award, title: "Certificates", desc: "Proof of what you finished." },
  { icon: LifeBuoy, title: "Learner Support", desc: "Guidance when you're stuck." },
];

export function Slide4Features() {
  return (
    <SlideShell eyebrow="Core Features" title="Everything a learner actually needs.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass-card group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#B8FF2C]/8 blur-2xl" />
            </div>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] group-hover:bg-[#B8FF2C]/10"
              >
                <f.icon className="h-5 w-5 text-[#B8FF2C]" strokeWidth={1.75} />
              </motion.div>
              <div className="font-display text-lg text-white">{f.title}</div>
              <div className="mt-1.5 text-sm leading-relaxed text-[#AEB6C2]">{f.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
