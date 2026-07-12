"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, Accessibility } from "lucide-react";
import { useStore } from "@/store/useStore";
import clsx from "clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMuted, setMuted, reducedMotion, setReducedMotion } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        scrolled ? "glass-panel bg-brand-surface/80" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        <span className="font-heading font-bold text-xl tracking-wider text-brand-white">
          MUSEUM <span className="text-brand-cyan">2050</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-brand-muted">
        <a href="#hero" className="hover:text-brand-cyan transition-colors">Entrance</a>
        <a href="#exhibitions" className="hover:text-brand-cyan transition-colors">Exhibitions</a>
        <a href="#archive" className="hover:text-brand-cyan transition-colors">Archive</a>
        <a href="#timeline" className="hover:text-brand-cyan transition-colors">Timeline</a>
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setReducedMotion(!reducedMotion)}
          className="text-brand-muted hover:text-brand-white transition-colors"
          title="Toggle Reduced Motion"
          aria-label="Toggle Reduced Motion"
        >
          <Accessibility size={18} className={clsx(reducedMotion && "text-brand-cyan")} />
        </button>
        <button
          onClick={() => setMuted(!isMuted)}
          className="text-brand-muted hover:text-brand-white transition-colors"
          title="Toggle Sound"
          aria-label="Toggle Sound"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <button
          className="md:hidden text-brand-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel-heavy p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#hero" onClick={() => setMenuOpen(false)} className="font-heading text-lg">Entrance</a>
            <a href="#exhibitions" onClick={() => setMenuOpen(false)} className="font-heading text-lg">Exhibitions</a>
            <a href="#archive" onClick={() => setMenuOpen(false)} className="font-heading text-lg">Archive</a>
            <a href="#timeline" onClick={() => setMenuOpen(false)} className="font-heading text-lg">Timeline</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
