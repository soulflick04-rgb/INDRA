"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useStore } from "@/store/useStore";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: 2028, text: "Autonomous mobility networks expand" },
  { year: 2032, text: "AI-assisted healthcare becomes widespread" },
  { year: 2037, text: "First large-scale adaptive cities" },
  { year: 2043, text: "Commercial orbital tourism grows" },
  { year: 2047, text: "Ocean-based agriculture expands" },
  { year: 2050, text: "Museum archive unlocked" }
];

export function YearCounter() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentYear, setCurrentYear] = useState(2026);
  const [activeMilestone, setActiveMilestone] = useState(-1);
  const reducedMotion = useStore((state) => state.reducedMotion);

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;

    // Pin the section and animate the year
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2500", // Increased scroll duration
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate year smoothly and clamp to prevent flickering
          const year = Math.min(2050, Math.max(2026, Math.round(2026 + (progress * 24))));
          setCurrentYear(year);
          
          // Determine active milestone
          const activeIndex = milestones.findIndex(m => m.year === year);
          if (activeIndex !== -1) {
            setActiveMilestone(activeIndex);
          } else {
            // Find closest milestone that has passed
            const passed = milestones.filter(m => m.year <= year);
            setActiveMilestone(passed.length > 0 ? passed.length - 1 : -1);
          }
        }
      }
    });

    // Animate environment changes as we go into the future
    tl.to(containerRef.current, {
      backgroundColor: "#07111F",
      duration: 0.8,
    }, 0);
    
    tl.to(".timeline-grid", {
      opacity: 0.3,
      scale: 1.2,
      duration: 0.8,
    }, 0);

    // Fade out the main content just before the welcome overlay
    tl.to(".timeline-content", {
      opacity: 0,
      scale: 0.95,
      duration: 0.1,
      ease: "power2.inOut"
    }, 0.8);

    // Cinematic Welcome to 2050 transition at the very end
    tl.to(".welcome-overlay", {
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut"
    }, 0.8);
    
    tl.fromTo(".welcome-text", {
      scale: 0.8,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "power2.out"
    }, 0.8);

  }, { scope: containerRef, dependencies: [reducedMotion] });

  return (
    <section 
      ref={containerRef}
      id="timeline" 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black border-y border-brand-white/5"
    >
      <div className="timeline-grid absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 transition-all duration-1000" />
      
      <div className="timeline-content relative z-10 text-center w-full max-w-4xl px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Year Display */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div ref={textRef} className="font-heading font-bold text-8xl md:text-[12rem] leading-none text-glow text-brand-white transition-opacity duration-300">
            {currentYear}
          </div>
        </div>

        {/* Milestones List */}
        <div className="flex-1 w-full flex flex-col gap-6 text-left">
          {milestones.map((m, idx) => {
            const isActive = idx === activeMilestone;
            const isPassed = idx < activeMilestone;

            return (
              <div 
                key={m.year} 
                className={clsx(
                  "flex items-start gap-4 transition-all duration-500",
                  isActive ? "opacity-100 translate-x-4" : 
                  isPassed ? "opacity-40" : "opacity-10 translate-x-0"
                )}
              >
                <div className={clsx(
                  "mt-1 w-2 h-2 rounded-full shrink-0 transition-colors duration-500",
                  isActive ? "bg-brand-cyan shadow-[0_0_10px_#39E7FF]" : 
                  isPassed ? "bg-brand-muted" : "bg-brand-surface border border-brand-muted"
                )} />
                <div>
                  <div className={clsx("font-mono text-sm mb-1", isActive ? "text-brand-cyan" : "text-brand-muted")}>
                    {m.year}
                  </div>
                  <div className={clsx("text-sm md:text-base", isActive ? "text-brand-white" : "text-brand-muted")}>
                    {m.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-brand-white/10 z-10">
        <div 
          className="w-full bg-brand-cyan" 
          style={{ height: `${((currentYear - 2026) / 24) * 100}%` }}
        />
      </div>

      {/* Cinematic Transition Overlay */}
      <div className="welcome-overlay absolute inset-0 z-50 bg-[#07111F] flex items-center justify-center pointer-events-none opacity-0">
        <div className="welcome-text font-heading text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple tracking-wider text-center px-4 drop-shadow-[0_0_30px_rgba(57,231,255,0.4)]">
          WELCOME TO 2050
        </div>
      </div>
    </section>
  );
}
