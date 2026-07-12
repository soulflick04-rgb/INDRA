"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail } from "lucide-react";
import { useStore } from "@/store/useStore";

export function CreatorSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useStore((state) => state.reducedMotion);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#04060A] border-t border-brand-white/10 py-24"
    >
      {/* Background Animated Glows */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ y: reducedMotion ? "0%" : yBg }}
      >
        <motion.div 
          animate={reducedMotion ? {} : { 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39E7FF]/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={reducedMotion ? {} : { 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5271FF]/20 rounded-full blur-[120px]" 
        />
      </motion.div>

      <div className="max-w-4xl mx-auto w-full px-6 relative z-10">
        
        <div className="flex flex-col items-start mb-12">
          <motion.span 
            animate={reducedMotion ? {} : { textShadow: ["0 0 5px #39E7FF", "0 0 15px #39E7FF", "0 0 5px #39E7FF"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-mono text-xs text-[#39E7FF] uppercase tracking-[0.3em] mb-2"
          >
            THE CREATOR
          </motion.span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-brand-white">
            About Me
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#0b1016]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#39E7FF]/20 relative group overflow-hidden shadow-[0_0_50px_rgba(57,231,255,0.05)]"
        >
          {/* Subtle inner hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#39E7FF]/10 via-transparent to-[#5271FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex flex-col items-center relative z-10 w-full text-center">
            
            {/* Content Details */}
            <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
              <div className="flex flex-col items-center">
                <motion.h3 
                  animate={reducedMotion ? {} : { textShadow: ["0 0 8px rgba(57,231,255,0.5)", "0 0 20px rgba(57,231,255,0.8)", "0 0 8px rgba(57,231,255,0.5)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="font-heading text-4xl md:text-5xl font-bold text-[#39E7FF] mb-2"
                >
                  Rishi Srivastav
                </motion.h3>
                <p className="font-mono text-xs text-[#5271FF] uppercase tracking-[0.2em]">
                  CREATOR OF MUSEUM 2050
                </p>
              </div>

              <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                Hi, I'm Rishi — I built the Digital Museum of the Future because I believe we need a space to visualize the technologies that will shape our world. No shortcuts, just a deep dive into the possibilities of tomorrow. If this interactive exhibition helps you imagine the future, it has done its job. Now stop scrolling and step into 2050.
              </p>

              <div className="mt-4 mb-8">
                <motion.span 
                  animate={reducedMotion ? {} : { textShadow: ["0 0 10px rgba(57,231,255,0.4)", "0 0 25px rgba(82,113,255,0.7)", "0 0 10px rgba(57,231,255,0.4)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="font-signature text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#39E7FF] to-[#5271FF] block py-2"
                >
                  Rishi Srivastav
                </motion.span>
              </div>

              <div className="flex justify-center">
                <a 
                  href="mailto:contact@example.com" 
                  className="group relative overflow-hidden bg-gradient-to-r from-[#39E7FF] to-[#5271FF] text-[#04060A] px-8 py-3 rounded-full font-heading font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(57,231,255,0.6)] flex items-center gap-3"
                >
                  <Mail size={18} className="group-hover:animate-bounce" />
                  Connect With Me
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
