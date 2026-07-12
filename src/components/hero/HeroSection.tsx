"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { HeroArtifact } from "./HeroArtifact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { useStore } from "@/store/useStore";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useStore((state) => state.reducedMotion);

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;
    
    // Parallax effect on scroll
    gsap.to(".hero-content", {
      y: 200,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".hero-bg-text", {
      y: -100,
      scale: 1.1,
      opacity: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef, dependencies: [reducedMotion] });

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background year */}
      <div className="hero-bg-text absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
        <h2 className="text-[25vw] font-heading font-black text-brand-surface tracking-tighter select-none">
          2050
        </h2>
      </div>

      <HeroArtifact />

      <div className="hero-content relative z-10 text-center flex flex-col items-center gap-6 px-4 w-full max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="border border-brand-cyan/30 bg-brand-cyan/5 px-4 py-1 rounded-full text-brand-cyan font-mono text-xs tracking-widest uppercase mb-4"
        >
          Interactive Exhibition
        </motion.div>

        <motion.h1 
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="block text-brand-white text-glow">DIGITAL MUSEUM</span>
          <span className="block text-brand-muted">OF THE FUTURE</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-brand-muted max-w-2xl mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Explore five inventions that could transform the way humanity travels, heals, builds, lives, and produces food.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#timeline" className="group relative overflow-hidden glass-panel px-8 py-4 rounded-none font-mono text-sm tracking-widest uppercase transition-all hover:bg-brand-white hover:text-brand-black">
            <span className="relative z-10 flex items-center gap-2">
              Enter the Museum
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          <a href="#exhibitions" className="px-8 py-4 font-mono text-sm tracking-widest uppercase text-brand-muted hover:text-brand-cyan transition-colors">
            View Exhibitions
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-mono text-[10px] tracking-widest text-brand-muted uppercase">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-brand-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-cyan"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Creator Signature Badge */}
      <motion.div 
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-end pointer-events-none"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="font-mono text-[9px] text-brand-muted uppercase tracking-[0.3em] mb-1 opacity-70">
          DESIGNED & DEVELOPED BY
        </span>
        <span className="font-signature text-3xl text-brand-cyan text-glow drop-shadow-[0_0_10px_rgba(57,231,255,0.8)]">
          Rishi Srivastav
        </span>
      </motion.div>
    </section>
  );
}
