"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";

export function MuseumLoader() {
  const [progress, setProgress] = useState(0);
  const setLoaderComplete = useStore((state) => state.setLoaderComplete);

  useEffect(() => {
    // Check if we've already loaded this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('museum_loaded')) {
      // Defer state update
      setTimeout(() => {
        setLoaderComplete(true);
        setProgress(100);
      }, 0);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('museum_loaded', 'true');
            }
            setLoaderComplete(true);
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [setLoaderComplete]);

  const isComplete = progress >= 100;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center text-brand-white"
        >
          <div className="w-64 max-w-[80vw]">
            <div className="flex justify-between items-end mb-2 font-mono text-xs text-brand-muted tracking-widest uppercase">
              <span>Preparing the future archive</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            <div className="h-[1px] w-full bg-brand-surface relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-brand-cyan shadow-[0_0_10px_rgba(57,231,255,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
