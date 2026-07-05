import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SlideShell } from "./SlideShell";

export interface FeatureItem {
  icon: ReactNode;
  label: string;
}

interface UIShowcaseProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  screenshotUrl: string;
  screenshotAlt: string;
  features: FeatureItem[];
  note?: string;
}

export function UIShowcase({
  eyebrow,
  title,
  subtitle,
  screenshotUrl,
  screenshotAlt,
  features,
  note,
}: UIShowcaseProps) {
  return (
    <SlideShell eyebrow={eyebrow} title={title}>
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(184,255,44,0.18),transparent_70%)] blur-2xl" />
          <div className="glass-card relative overflow-hidden rounded-2xl p-2 sm:p-3">
            <div className="flex items-center gap-1.5 px-2 pb-2 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono-num text-[10px] tracking-wider text-[#AEB6C2]">
                zverts.com
              </span>
            </div>
            <img
              src={screenshotUrl}
              alt={screenshotAlt}
              className="w-full rounded-xl border border-white/5"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Features */}
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8 max-w-md text-lg leading-relaxed text-[#AEB6C2]"
          >
            {subtitle}
          </motion.p>

          <ul className="space-y-3">
            {features.map((f, i) => (
              <motion.li
                key={f.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.25 + i * 0.04 }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#B8FF2C]/10 text-[#B8FF2C]">
                  {f.icon}
                </span>
                <span className="text-sm text-white/90 sm:text-base">{f.label}</span>
              </motion.li>
            ))}
          </ul>

          {note && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-6 border-l-2 border-[#B8FF2C]/40 pl-4 text-sm italic text-[#AEB6C2]"
            >
              {note}
            </motion.p>
          )}
        </div>
      </div>
    </SlideShell>
  );
}
