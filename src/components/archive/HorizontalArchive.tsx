"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useStore } from "@/store/useStore";
import clsx from "clsx";
import { ChevronRight, Cpu, CloudLightning, Rocket, BrainCircuit, Blocks, Wind } from "lucide-react";

const archiveItems = [
  { id: 1, title: "Quantum Comm Devices", category: "Communication", number: "M-104", desc: "Instantaneous data transfer without latency.", icon: Cpu, color: "#39E7FF" },
  { id: 2, title: "Artificial Weather", category: "Environment", number: "M-218", desc: "Targeted atmospheric control systems.", icon: CloudLightning, color: "#65F5B5" },
  { id: 3, title: "Lunar Construction Robots", category: "Space", number: "M-342", desc: "Automated swarm builders for off-world habitats.", icon: Rocket, color: "#FFB86B" },
  { id: 4, title: "Memory Preservation", category: "Neurotech", number: "M-405", desc: "Digital backups of lived human experiences.", icon: BrainCircuit, color: "#9A6BFF" },
  { id: 5, title: "Self-Repairing Materials", category: "Materials", number: "M-512", desc: "Infrastructure that heals its own structural damage.", icon: Blocks, color: "#5271FF" },
  { id: 6, title: "Climate Drones", category: "Environment", number: "M-622", desc: "Swarm technology for atmospheric carbon capture.", icon: Wind, color: "#65F5B5" },
];

export function HorizontalArchive() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useStore((state) => state.reducedMotion);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Convert vertical scroll to horizontal
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  
  // Disable horizontal scroll if reduced motion is on or on mobile devices
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const shouldAnimate = !reducedMotion && !isMobile;

  return (
    <section 
      ref={containerRef}
      id="archive" 
      className={clsx(
        "bg-[#04060A] border-t border-brand-white/10 relative",
        shouldAnimate ? "h-[300vh]" : "min-h-screen py-24"
      )}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />

      <div className={clsx(
        "flex flex-col h-full relative z-10",
        shouldAnimate ? "sticky top-0 h-screen overflow-hidden justify-center" : ""
      )}>
        <div className="max-w-7xl mx-auto w-full px-6 mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-white">
            THE 2050 INVENTION ARCHIVE
          </h2>
          <p className="text-brand-muted mt-2 max-w-xl">
            Explore additional concepts, prototypes, and technologies shaping the world of tomorrow.
          </p>
        </div>

        <motion.div 
          style={shouldAnimate ? { x } : {}}
          className={clsx(
            "flex gap-8 px-6 pb-12",
            shouldAnimate ? "w-max" : "flex-wrap justify-center overflow-x-auto snap-x hide-scrollbar"
          )}
        >
          {archiveItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id} 
                className={clsx(
                  "bg-[#0b1016] rounded-xl p-8 flex flex-col gap-6 relative group transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-xl",
                  shouldAnimate ? "w-[400px]" : "w-[300px] md:w-[350px] shrink-0 snap-center"
                )}
              >
                {/* Glowing border effect */}
                <div 
                  className="absolute inset-0 border rounded-xl transition-colors duration-500"
                  style={{ 
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'inset 0 0 0px transparent'
                  }}
                />
                
                {/* Dynamic hover ring */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"
                  style={{ boxShadow: `inset 0 0 30px ${item.color}20`, border: `1px solid ${item.color}50` }}
                />
                
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: item.color }}>{item.category}</span>
                  <span className="text-xs font-mono text-brand-muted">{item.number}</span>
                </div>
                
                {/* Futuristic Visual Container */}
                <div className="h-40 w-full flex items-center justify-center border border-brand-white/10 rounded-lg bg-[#070b10] relative overflow-hidden z-10">
                  {/* Grid lines inside container */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Glowing background blob behind icon */}
                  <div 
                    className="absolute w-24 h-24 rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-700" 
                    style={{ backgroundColor: item.color }} 
                  />

                  {/* Icon with orbital rings */}
                  <div className="relative flex items-center justify-center w-20 h-20">
                    <motion.div 
                      className="absolute inset-0 border border-dashed rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ borderColor: item.color }}
                      animate={reducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: 15 + index, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="absolute inset-[-10px] border border-dotted rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ borderColor: item.color }}
                      animate={reducedMotion ? {} : { rotate: -360 }}
                      transition={{ duration: 20 + index, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <Icon 
                      size={32} 
                      color={item.color} 
                      className="relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_currentColor]" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="font-heading text-xl font-bold text-brand-white group-hover:text-glow transition-all duration-500"
                      style={{ textShadow: `0 0 0px ${item.color}` }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-brand-white/10 relative z-10 text-brand-muted group-hover:text-brand-white transition-colors">
                  <span className="text-xs uppercase tracking-widest font-mono">Open Artifact</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
