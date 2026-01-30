"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

const STORAGE_KEY = "zar_portfolio_loaded";
const TOTAL_DURATION_MS = 4500;
const PROGRESS_DURATION_MS = 3200;
const SHARD_COLS = 20;
const SHARD_ROWS = 16;
const SHARD_COUNT = SHARD_COLS * SHARD_ROWS;

const BOOT_LINES = [
  "[ 0.00 ] Loading portfolio",
  "[ 0.12 ] Fetching projects",
  "[ 0.24 ] Loading experience",
  "[ 0.36 ] Preparing skills & stack",
  "[ 0.48 ] Building layout",
  "[ 0.60 ] Ready to explore",
];

export default function FirstLoadLoader() {
  const [showLoader, setShowLoader] = useState(null);
  const [progress, setProgress] = useState(1);
  const [visibleLines, setVisibleLines] = useState(0);
  const lastProgressRef = useRef(1);

  const shardExits = useMemo(
    () =>
      Array.from({ length: SHARD_COUNT }, () => ({
        x: (Math.random() - 0.5) * 320,
        y: (Math.random() - 0.5) * 320,
        scale: 0.15 + Math.random() * 0.35,
        rotate: (Math.random() - 0.5) * 72,
        delay: Math.random() * 0.45,
      })),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setShowLoader(false);
      return;
    }
    setShowLoader(true);
  }, []);

  useEffect(() => {
    if (showLoader !== true) return;

    const progressControls = animate(1, 100, {
      duration: PROGRESS_DURATION_MS / 1000,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => {
        const r = Math.round(v);
        if (r !== lastProgressRef.current) {
          lastProgressRef.current = r;
          setProgress(r);
        }
      },
    });

    const lineInterval = setInterval(() => {
      setVisibleLines((n) => Math.min(n + 1, BOOT_LINES.length));
    }, PROGRESS_DURATION_MS / BOOT_LINES.length);

    const exitTimer = setTimeout(() => {
      setShowLoader(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, TOTAL_DURATION_MS);

    return () => {
      progressControls.stop();
      clearInterval(lineInterval);
      clearTimeout(exitTimer);
    };
  }, [showLoader]);

  return (
    <AnimatePresence>
      {showLoader === true && (
        <motion.div
          className="fixed inset-0 z-100 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ transition: { duration: 1.1 } }}
        >
          {/* Shatter grid — each shard flies away on exit */}
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${SHARD_COLS}, 1fr)`,
              gridTemplateRows: `repeat(${SHARD_ROWS}, 1fr)`,
            }}
          >
            {shardExits.map((e, i) => (
              <motion.div
                key={i}
                className="bg-background min-w-0 min-h-0"
                initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                exit={{
                  opacity: 0,
                  x: e.x,
                  y: e.y,
                  scale: e.scale,
                  rotate: e.rotate,
                  transition: {
                    duration: 0.6,
                    delay: e.delay,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
              />
            ))}
          </div>

          {/* Content — fades out first, then shards scatter */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <motion.div
              className="relative w-full max-w-sm mx-8 border border-white/6 bg-white/2 px-8 py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-px bg-primary/40" />
              <div className="absolute top-0 left-0 w-px h-6 bg-primary/40" />
              <div className="absolute top-0 right-0 w-6 h-px bg-primary/40" />
              <div className="absolute top-0 right-0 w-px h-6 bg-primary/40" />
              <div className="absolute bottom-0 left-0 w-6 h-px bg-primary/40" />
              <div className="absolute bottom-0 left-0 w-px h-6 bg-primary/40" />
              <div className="absolute bottom-0 right-0 w-6 h-px bg-primary/40" />
              <div className="absolute bottom-0 right-0 w-px h-6 bg-primary/40" />

              <div className="font-mono text-xs tracking-wide">
                <motion.div
                  className="text-text-muted/70 uppercase tracking-widest mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  System
                </motion.div>

                {/* Fixed height for 6 lines so container doesn't resize when last line appears */}
                <div className="space-y-1.5 mb-8 h-[8rem]">
                  {BOOT_LINES.slice(0, visibleLines).map((line) => (
                    <motion.div
                      key={line}
                      className="text-text-muted/90"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <span className="text-primary/60 select-none">$ </span>
                      {line}
                    </motion.div>
                  ))}
                  {visibleLines < BOOT_LINES.length && (
                    <motion.span
                      className="inline-block w-2 h-3.5 bg-primary/80 align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-text-muted/60 uppercase tracking-wider">
                      Progress
                    </span>
                    <span className="text-primary tabular-nums font-medium min-w-[3ch] inline-block text-right">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-px w-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "1%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{
                        type: "tween",
                        duration: 0.15,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
