import { motion } from "framer-motion";
import type { ReactNode } from "react";
import logoAsset from "@/assets/zverts-logo.png.asset.json";

interface SlideShellProps {
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  showLogo?: boolean;
}

export function SlideShell({ eyebrow, title, children, showLogo = true }: SlideShellProps) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden px-6 py-10 sm:px-12 sm:py-14 lg:px-24 lg:py-20">
      {showLogo && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute left-6 top-6 flex items-center gap-2 sm:left-12 sm:top-10 lg:left-24"
        >
          <img src={logoAsset.url} alt="ZverTs" className="h-8 w-8 rounded-lg sm:h-9 sm:w-9" />
          <span className="font-display text-lg tracking-tight text-white">ZverTs</span>
        </motion.div>
      )}

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        {(eyebrow || title) && (
          <div className="mb-8 sm:mb-12">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#B8FF2C] shadow-[0_0_10px_#B8FF2C]" />
                <span className="font-mono-num text-[11px] uppercase tracking-[0.2em] text-[#AEB6C2]">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
