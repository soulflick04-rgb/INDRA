"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Exhibition } from "@/lib/data/exhibitions";
import { ArtifactViewer } from "./ArtifactViewer";
import { useStore } from "@/store/useStore";

export function ExhibitionSection({ exhibition, index }: { exhibition: Exhibition; index: number }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const reducedMotion = useStore((state) => state.reducedMotion);
  
  // Parallax calculations
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  const yBgActual = reducedMotion ? "0%" : yBg;
  const yContentActual = reducedMotion ? "0%" : yContent;

  return (
    <section 
      ref={containerRef}
      id={`exhibition-${exhibition.number}`}
      className="relative w-full min-h-screen flex items-center py-24 overflow-hidden"
      style={{ backgroundColor: exhibition.theme.background }}
    >
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          y: yBgActual,
          backgroundImage: `radial-gradient(circle at center, ${exhibition.theme.accent} 0%, transparent 70%)` 
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Content */}
        <motion.div 
          style={{ y: yContentActual }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <span className="font-mono text-4xl text-brand-white/20">
                {exhibition.number}
              </span>
              <div 
                className="h-[1px] w-12" 
                style={{ backgroundColor: exhibition.theme.accent }}
              />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase" style={{ color: exhibition.theme.accent }}>
              {exhibition.title}
            </h2>
            <h3 className="text-xl md:text-2xl text-brand-white font-light">
              {exhibition.subtitle}
            </h3>
          </div>

          <p className="text-brand-muted text-lg leading-relaxed">
            {exhibition.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exhibition.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <div 
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" 
                  style={{ backgroundColor: exhibition.theme.accent }}
                />
                <span className="text-sm text-brand-muted">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4 p-6 glass-panel rounded-xl">
            {exhibition.statistics.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-mono text-xs text-brand-muted uppercase tracking-wider">{stat.label}</span>
                <span className="font-heading text-2xl font-bold text-brand-white">{stat.value}</span>
              </div>
            ))}
            <div className="col-span-2 mt-2">
              <span className="text-[10px] text-brand-muted/50 font-mono uppercase tracking-widest">
                * Projected data for year 2050
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Artifact */}
        <motion.div 
          className="h-[500px] lg:h-[700px] w-full relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <ArtifactViewer exhibition={exhibition} />
        </motion.div>

      </div>
    </section>
  );
}
