"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";
import clsx from "clsx";
import { ChevronRight, Cpu, CloudLightning, Rocket, BrainCircuit, Blocks, Wind, X } from "lucide-react";

const archiveItems = [
  { id: 1, title: "Quantum Comm Devices", category: "Communication", number: "M-104", desc: "Instantaneous data transfer without latency.", fullDesc: "By leveraging quantum entanglement, these early prototypes bypassed the speed of light for data transmission. Initially used for deep space communication, they eventually formed the backbone of the Neural City OS. This artifact is a first-generation transceiver from 2038.", icon: Cpu, color: "#39E7FF" },
  { id: 2, title: "Artificial Weather", category: "Environment", number: "M-218", desc: "Targeted atmospheric control systems.", fullDesc: "Atmospheric ionizers and localized pressure manipulators developed to mitigate extreme climate events. While highly regulated, they allowed cities to prevent catastrophic storms by dispersing energy before it could coalesce. The device shown is a decentralized node.", icon: CloudLightning, color: "#65F5B5" },
  { id: 3, title: "Lunar Construction Robots", category: "Space", number: "M-342", desc: "Automated swarm builders for off-world habitats.", fullDesc: "Operating in zero-gravity and extreme vacuum, these autonomous drones use lunar regolith to 3D print habitable structures. They paved the way for the commercial Orbital Havens by proving automated off-world manufacturing was viable.", icon: Rocket, color: "#FFB86B" },
  { id: 4, title: "Memory Preservation", category: "Neurotech", number: "M-405", desc: "Digital backups of lived human experiences.", fullDesc: "Controversial yet groundbreaking, this neural interface can record sensory input and emotional states directly from the hippocampus. Originally developed for dementia patients, it evolved into a way to literally experience another person's life.", icon: BrainCircuit, color: "#9A6BFF" },
  { id: 5, title: "Self-Repairing Materials", category: "Materials", number: "M-512", desc: "Infrastructure that heals its own structural damage.", fullDesc: "Biomimetic concrete and smart alloys embedded with micro-vascular networks of healing agents. When a crack forms, the agents are released and harden upon contact with air, completely restoring the structural integrity.", icon: Blocks, color: "#5271FF" },
  { id: 6, title: "Climate Drones", category: "Environment", number: "M-622", desc: "Swarm technology for atmospheric carbon capture.", fullDesc: "A swarm of millions of solar-powered micro-drones that continuously filter carbon dioxide and other greenhouse gases from the upper atmosphere, compressing them into solid blocks for safe disposal or industrial reuse.", icon: Wind, color: "#65F5B5" },
];

export function HorizontalArchive() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useStore((state) => state.reducedMotion);
  const [selectedArtifact, setSelectedArtifact] = useState<typeof archiveItems[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    // Defer the initial check to avoid synchronous state update in effect
    setTimeout(handleResize, 0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Convert vertical scroll to horizontal
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  
  // Disable horizontal scroll if reduced motion is on or on mobile devices
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
            shouldAnimate ? "w-max" : "flex-nowrap overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full"
          )}
        >
          {archiveItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id} 
                onClick={() => setSelectedArtifact(item)}
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

      {/* Artifact Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/90 backdrop-blur-sm"
            onClick={() => setSelectedArtifact(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1016] border border-brand-white/10 rounded-2xl w-full max-w-2xl overflow-hidden relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedArtifact(null)}
                className="absolute top-4 right-4 text-brand-muted hover:text-brand-white transition-colors z-10 bg-brand-black/50 p-2 rounded-full"
              >
                <X size={20} />
              </button>

              <div 
                className="h-48 w-full relative flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: `${selectedArtifact.color}10` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div 
                  className="absolute w-32 h-32 rounded-full blur-[50px] opacity-40 animate-pulse" 
                  style={{ backgroundColor: selectedArtifact.color }} 
                />
                {(() => {
                  const Icon = selectedArtifact.icon;
                  return <Icon size={64} color={selectedArtifact.color} className="relative z-10 drop-shadow-[0_0_20px_currentColor]" />;
                })()}
              </div>

              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-mono uppercase tracking-widest" style={{ color: selectedArtifact.color }}>
                    {selectedArtifact.category}
                  </span>
                  <span className="text-sm font-mono text-brand-muted bg-brand-white/5 px-3 py-1 rounded-full">
                    {selectedArtifact.number}
                  </span>
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-brand-white mt-2">
                  {selectedArtifact.title}
                </h3>
                
                <p className="text-lg text-brand-white/80 leading-relaxed font-light mt-2">
                  {selectedArtifact.desc}
                </p>

                <div className="w-full h-[1px] bg-brand-white/10 my-4" />

                <p className="text-brand-muted leading-relaxed">
                  {selectedArtifact.fullDesc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
