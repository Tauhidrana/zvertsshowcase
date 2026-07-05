import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

const shortcuts = [
  { keys: ["→", "↓", "Space"], label: "Next slide" },
  { keys: ["←", "↑"], label: "Previous slide" },
  { keys: ["F"], label: "Fullscreen" },
  { keys: ["Esc"], label: "Exit fullscreen" },
  { keys: ["H"], label: "Hide UI" },
  { keys: ["?"], label: "Show shortcuts" },
];

export function ShortcutsModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card w-full max-w-md rounded-3xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="font-display text-2xl text-white">Keyboard Shortcuts</div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#AEB6C2] transition-colors hover:bg-white/5"
              >
                Close
              </button>
            </div>
            <div className="space-y-3">
              {shortcuts.map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-sm text-[#AEB6C2]">{s.label}</span>
                  <div className="flex gap-1.5">
                    {s.keys.map((k) => (
                      <kbd
                        key={k}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono-num text-xs text-white"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
