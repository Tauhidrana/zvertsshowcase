import { motion } from "framer-motion";
import logoAsset from "@/assets/zverts-logo.png.asset.json";

export function Slide10Thanks() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8FF2C]/10 blur-[120px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10"
      >
        <div className="absolute inset-0 rounded-3xl bg-[#B8FF2C]/40 blur-3xl" />
        <img
          src={logoAsset.url}
          alt="ZverTs"
          className="relative h-32 w-32 rounded-3xl shadow-2xl sm:h-44 sm:w-44 lg:h-56 lg:w-56"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="max-w-2xl font-display text-2xl italic leading-relaxed text-white sm:text-3xl lg:text-4xl"
      >
        Others help you <span className="text-[#AEB6C2]">start</span> learning.
        <br />
        ZverTs helps you <span className="text-[#B8FF2C] text-glow">finish</span> it.
      </motion.p>

      <motion.a
        href="https://www.zverts.com"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        whileHover={{ scale: 1.03 }}
        className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#B8FF2C]/30 bg-[#B8FF2C]/10 px-6 py-3 font-mono-num text-sm text-[#B8FF2C] transition-colors hover:bg-[#B8FF2C]/15 sm:text-base"
      >
        www.zverts.com
        <span>→</span>
      </motion.a>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="mt-16 font-display text-5xl font-medium text-white text-glow sm:text-6xl lg:text-8xl"
      >
        Questions?
      </motion.h2>
    </div>
  );
}
