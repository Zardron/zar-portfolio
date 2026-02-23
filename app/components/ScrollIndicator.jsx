"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Fixed scroll indicator on the right side.
 * Only shows when the page is scrollable AND the user is not near the bottom.
 */
export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const { innerHeight } = window;
      const { scrollTop, scrollHeight } = document.documentElement;

      const threshold = 32; // px from bottom before we hide the indicator

      const hasOverflow = scrollHeight > innerHeight + 16;
      const notAtBottom = scrollTop + innerHeight < scrollHeight - threshold;

      setVisible(hasOverflow && notAtBottom);
    };

    // Run once on mount and then on scroll / resize
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed right-8 bottom-10 z-40 pointer-events-none select-none"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
        >
          <div className="glass border border-white/10 rounded-full px-3 py-2 flex items-center gap-2 bg-black/30 backdrop-blur">
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted/70">
              Scroll
            </span>
            <div className="relative w-px h-8 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="absolute inset-x-0 h-4 bg-primary/80"
                initial={{ y: -16 }}
                animate={{ y: [ -16, 16, -16 ] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

