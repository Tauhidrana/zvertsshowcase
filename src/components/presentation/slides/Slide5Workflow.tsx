import { motion } from "framer-motion";
import { User, ClipboardPaste, BrainCircuit, Layers, PlayCircle, HelpCircle, Zap, Award } from "lucide-react";
import { SlideShell } from "../SlideShell";

const pipeline = [
  { icon: User, label: "User" },
  { icon: ClipboardPaste, label: "Paste Playlist" },
  { icon: BrainCircuit, label: "AI Analysis" },
  { icon: Layers, label: "Course Generation" },
  { icon: PlayCircle, label: "Watch Lessons" },
  { icon: HelpCircle, label: "Auto Quiz" },
  { icon: Zap, label: "XP" },
  { icon: Award, label: "Certificate" },
];

export function Slide5Workflow() {
  return (
    <SlideShell eyebrow="Live Workflow" title="An engine that runs end to end.">
      <div className="relative overflow-x-auto no-scrollbar">
        <div className="mx-auto flex min-w-max items-center gap-3 py-6 sm:gap-4">
          {pipeline.map((n, i) => (
            <div key={n.label} className="flex items-center gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card flex w-32 flex-col items-center rounded-2xl px-4 py-5 sm:w-36"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8FF2C]/10">
                  <n.icon className="h-5 w-5 text-[#B8FF2C]" strokeWidth={1.75} />
                </div>
                <div className="text-center font-display text-sm text-white">{n.label}</div>
              </motion.div>
              {i < pipeline.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
                  className="relative h-px w-6 origin-left bg-white/15 sm:w-10"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#B8FF2C] to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-10 text-center text-sm text-[#AEB6C2]"
      >
        Every stage is measured. Every learner is guided.
      </motion.div>
    </SlideShell>
  );
}
