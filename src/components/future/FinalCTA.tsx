"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-brand-black border-t border-brand-white/10 py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-cyan/10 via-brand-black to-brand-black" />
      
      <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-brand-white mb-6">
          WHAT WOULD YOU <br /> BUILD FOR 2050?
        </h2>
        
        <p className="text-brand-muted text-lg md:text-xl max-w-2xl mb-12">
          The future begins as an idea, becomes a prototype, and eventually changes how people live.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#hero" className="group relative overflow-hidden glass-panel px-8 py-4 font-mono text-sm tracking-widest uppercase transition-all hover:bg-brand-white hover:text-brand-black">
            <span className="relative z-10 flex items-center gap-2">
              Restart the Journey
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
          
          <a href="#archive" className="px-8 py-4 font-mono text-sm tracking-widest uppercase text-brand-muted hover:text-brand-cyan transition-colors">
            Explore the Archive
          </a>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 bg-brand-cyan/50 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
}
