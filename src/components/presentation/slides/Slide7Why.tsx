import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SlideShell } from "../SlideShell";

const rows = [
  { feat: "Structured Roadmap", youtube: false, udemy: true, coursera: true, zverts: true },
  { feat: "AI Tutor", youtube: false, udemy: false, coursera: false, zverts: true },
  { feat: "Daily Missions", youtube: false, udemy: false, coursera: false, zverts: true },
  { feat: "Progress Tracking", youtube: false, udemy: true, coursera: true, zverts: true },
  { feat: "Free Content", youtube: true, udemy: false, coursera: false, zverts: true },
  { feat: "Gamified XP", youtube: false, udemy: false, coursera: false, zverts: true },
  { feat: "Completion Focus", youtube: false, udemy: false, coursera: false, zverts: true },
];

const cols = ["YouTube", "Udemy", "Coursera", "ZverTs"] as const;

function Cell({ ok, highlight }: { ok: boolean; highlight?: boolean }) {
  return (
    <div className="flex justify-center">
      {ok ? (
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${highlight ? "bg-[#B8FF2C] text-[#0B0F14] green-glow" : "bg-white/5 text-[#AEB6C2]"}`}>
          <Check className="h-4 w-4" strokeWidth={3} />
        </div>
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-white/20">
          <X className="h-4 w-4" strokeWidth={2} />
        </div>
      )}
    </div>
  );
}

export function Slide7Why() {
  return (
    <SlideShell eyebrow="Why ZverTs" title="Not another course platform.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="glass-card overflow-x-auto rounded-3xl p-4 sm:p-6"
      >
        <div className="min-w-[640px]">
          <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-center gap-2 border-b border-white/10 pb-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#AEB6C2]">Feature</div>
            {cols.map((c) => (
              <div key={c} className="text-center">
                <div
                  className={`inline-flex rounded-full px-3 py-1 font-display text-sm ${
                    c === "ZverTs"
                      ? "bg-[#B8FF2C]/15 text-[#B8FF2C] border border-[#B8FF2C]/30"
                      : "text-white"
                  }`}
                >
                  {c}
                </div>
              </div>
            ))}
          </div>
          <div className="divide-y divide-white/5">
            {rows.map((r, i) => (
              <motion.div
                key={r.feat}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-center gap-2 py-4"
              >
                <div className="text-sm text-white">{r.feat}</div>
                <Cell ok={r.youtube} />
                <Cell ok={r.udemy} />
                <Cell ok={r.coursera} />
                <Cell ok={r.zverts} highlight />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SlideShell>
  );
}
