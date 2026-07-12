"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { useStore } from "@/store/useStore";
import { siteConfig } from "@/config/site";

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
                  {siteConfig.creator.name}
                </motion.h3>
                <p className="font-mono text-xs text-[#5271FF] uppercase tracking-[0.2em]">
                  {siteConfig.creator.role}
                </p>
              </div>

              <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                I built the Digital Museum of the Future to bridge the gap between imagination and reality. This interactive archive is a playground for the technologies that will shape our world. Step inside, explore the possibilities, and experience 2050 today.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="font-mono text-xs text-brand-white/40 border border-brand-white/10 px-3 py-1 rounded-full">React</span>
                <span className="font-mono text-xs text-brand-white/40 border border-brand-white/10 px-3 py-1 rounded-full">Three.js</span>
                <span className="font-mono text-xs text-brand-white/40 border border-brand-white/10 px-3 py-1 rounded-full">Framer Motion</span>
                <span className="font-mono text-xs text-brand-white/40 border border-brand-white/10 px-3 py-1 rounded-full">GSAP</span>
              </div>

              <div className="mt-4 mb-8">
                <motion.span 
                  animate={reducedMotion ? {} : { textShadow: ["0 0 10px rgba(57,231,255,0.4)", "0 0 25px rgba(82,113,255,0.7)", "0 0 10px rgba(57,231,255,0.4)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="font-signature text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#39E7FF] to-[#5271FF] block py-2"
                >
                  Rishi Srivastav
                </motion.span>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                <a 
                  href={siteConfig.creator.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-white/5 hover:bg-brand-white/10 text-brand-muted hover:text-brand-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a 
                  href={siteConfig.creator.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-white/5 hover:bg-brand-white/10 text-brand-muted hover:text-brand-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href={siteConfig.creator.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-white/5 hover:bg-brand-white/10 text-brand-muted hover:text-brand-white transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
                <a 
                  href={`mailto:${siteConfig.creator.links.email}`} 
                  className="group relative overflow-hidden bg-gradient-to-r from-[#39E7FF] to-[#5271FF] text-[#04060A] px-8 py-3 rounded-full font-heading font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(57,231,255,0.6)] flex items-center gap-3 ml-2"
                >
                  <Mail size={18} className="group-hover:animate-bounce" />
                  Connect
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
