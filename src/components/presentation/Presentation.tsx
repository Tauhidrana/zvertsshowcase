import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Slide1Hero } from "./slides/Slide1Hero";
import { Slide2Problem } from "./slides/Slide2Problem";
import { Slide3Solution } from "./slides/Slide3Solution";
import { SlideDashboard } from "./slides/SlideDashboard";
import { SlideCourses } from "./slides/SlideCourses";
import { SlideGrowth } from "./slides/SlideGrowth";
import { SlidePayments } from "./slides/SlidePayments";
import { SlideSettings } from "./slides/SlideSettings";
import { SlideNotifications } from "./slides/SlideNotifications";
import { Slide8Future } from "./slides/Slide8Future";
import { Slide10Thanks } from "./slides/Slide10Thanks";
import { ShortcutsModal } from "./ShortcutsModal";

const slides = [
  { id: "hero", title: "Hero", Component: Slide1Hero },
  { id: "problem", title: "Problem", Component: Slide2Problem },
  { id: "solution", title: "Solution", Component: Slide3Solution },
  { id: "dashboard", title: "Dashboard", Component: SlideDashboard },
  { id: "courses", title: "Courses", Component: SlideCourses },
  { id: "growth", title: "Growth", Component: SlideGrowth },
  { id: "payments", title: "Payments", Component: SlidePayments },
  { id: "settings", title: "Settings", Component: SlideSettings },
  { id: "notifications", title: "Notifications", Component: SlideNotifications },
  { id: "future", title: "Future Vision", Component: Slide8Future },
  { id: "thanks", title: "Thank You", Component: Slide10Thanks },
];

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hideUI, setHideUI] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const wheelLock = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const total = slides.length;

  const go = useCallback(
    (to: number) => {
      setIndex((prev) => {
        const next = Math.max(0, Math.min(total - 1, to));
        setDirection(next > prev ? 1 : -1);
        return next;
      });
    },
    [total],
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      } else if (e.key === "h" || e.key === "H") {
        setHideUI((v) => !v);
      } else if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        setShowShortcuts((v) => !v);
      } else if (e.key === "Escape") {
        setShowShortcuts(false);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, total]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (wheelLock.current) return;
      if (Math.abs(e.deltaY) < 30) return;
      wheelLock.current = true;
      if (e.deltaY > 0) next();
      else prev();
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 800);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };
    const onEnd = (e: TouchEvent) => {
      if (touchStartY.current == null || touchStartX.current == null) return;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.max(Math.abs(dy), Math.abs(dx)) < 50) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy < 0) next();
        else prev();
      } else {
        if (dx < 0) next();
        else prev();
      }
      touchStartY.current = null;
      touchStartX.current = null;
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  const Current = slides[index].Component;
  const pad = (n: number) => n.toString().padStart(2, "0");
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0B0F14] text-white">
      {/* Slide */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slides[index].id}
            custom={direction}
            initial={{ opacity: 0, y: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Current />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* UI overlay */}
      <AnimatePresence>
        {!hideUI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute inset-0 z-40"
          >
            {/* Counter */}
            <div className="pointer-events-auto absolute right-6 top-6 flex items-center gap-3 sm:right-10 sm:top-10">
              <div className="glass-card flex items-center gap-2 rounded-full px-4 py-1.5">
                <span className="font-mono-num text-sm text-white">{pad(index + 1)}</span>
                <span className="text-xs text-[#AEB6C2]">/</span>
                <span className="font-mono-num text-xs text-[#AEB6C2]">{pad(total)}</span>
              </div>
            </div>

            {/* Nav arrows */}
            <div className="pointer-events-auto absolute bottom-16 right-6 flex gap-2 sm:right-10">
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous slide"
                className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-30 hover:bg-white/10"
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={index === total - 1}
                aria-label="Next slide"
                className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-30 hover:bg-white/10"
              >
                →
              </button>
            </div>

            {/* Shortcut hint */}
            <div className="pointer-events-auto absolute bottom-16 left-6 hidden items-center gap-2 sm:left-10 md:flex">
              <button
                onClick={() => setShowShortcuts(true)}
                className="glass-card flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-[#AEB6C2] hover:text-white"
              >
                <kbd className="rounded bg-white/10 px-1.5 font-mono-num text-[10px] text-white">?</kbd>
                Shortcuts
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
              <motion.div
                className="h-full bg-[#B8FF2C] shadow-[0_0_20px_#B8FF2C]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Slide dots */}
            <div className="pointer-events-auto absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Go to ${s.title}`}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#B8FF2C]" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ShortcutsModal open={showShortcuts} onClose={() => setShowShortcuts(false)} />
    </div>
  );
}
