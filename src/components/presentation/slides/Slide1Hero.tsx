import { motion } from "framer-motion";
import logoAsset from "@/assets/zverts-logo.png.asset.json";

export function Slide1Hero() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Animated background orbs */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#B8FF2C]/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#B8FF2C]/5 blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10"
      >
        <div className="absolute inset-0 rounded-3xl bg-[#B8FF2C]/30 blur-3xl" />
        <img
          src={logoAsset.url}
          alt="ZverTs"
          className="relative h-28 w-28 rounded-3xl shadow-2xl sm:h-36 sm:w-36 lg:h-44 lg:w-44"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-6xl font-medium tracking-tight text-white text-glow sm:text-7xl lg:text-8xl xl:text-9xl"
      >
        ZverTs
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 max-w-2xl text-lg font-light text-[#AEB6C2] sm:text-xl lg:text-2xl"
      >
        AI-Powered Structured Learning Platform
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="mt-14 max-w-2xl"
      >
        <p className="font-display text-2xl italic leading-relaxed text-white/90 sm:text-3xl lg:text-4xl">
          Others help you <span className="text-[#AEB6C2]">start</span> learning.
          <br />
          ZverTs helps you <span className="text-[#B8FF2C] text-glow">finish</span> it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#AEB6C2]/60"
      >
        <span className="font-mono-num">Scroll</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          ↓
        </motion.span>
      </motion.div>
    </div>
  );
}
