import { motion } from "framer-motion";
import { Brain, Smartphone, Users, Waypoints, Briefcase, Mic, MessageSquare } from "lucide-react";
import { SlideShell } from "../SlideShell";

const items = [
  { icon: Brain, title: "AI Mentor", desc: "Personal guidance across your journey." },
  { icon: Smartphone, title: "Mobile App", desc: "Learn anywhere, everywhere." },
  { icon: Users, title: "Community", desc: "Peer study groups and cohorts." },
  { icon: Waypoints, title: "Adaptive Learning", desc: "A path that adjusts to you." },
  { icon: Briefcase, title: "Placement Roadmap", desc: "From skills to career outcomes." },
  { icon: Mic, title: "Voice Tutor", desc: "Talk with your AI teacher." },
  { icon: MessageSquare, title: "Interview Practice", desc: "Rehearse. Get feedback. Improve." },
];

export function Slide8Future() {
  return (
    <SlideShell eyebrow="Future Vision" title={<>What's <em className="font-display italic text-[#B8FF2C]">next</em>.</>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
            whileHover={{ y: -3 }}
            className="glass-card rounded-2xl p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8FF2C]/10">
              <it.icon className="h-5 w-5 text-[#B8FF2C]" strokeWidth={1.75} />
            </div>
            <div className="font-display text-base text-white">{it.title}</div>
            <div className="mt-1 text-sm text-[#AEB6C2]">{it.desc}</div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
