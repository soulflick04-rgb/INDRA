"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { useStore } from "@/store/useStore";

export function AmbientSound() {
  const isMuted = useStore((state) => state.isMuted);
  const soundEnabled = !isMuted;
  const { scrollYProgress } = useScroll();
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize the audio element once
    if (!audioRef.current && typeof window !== "undefined") {
      const audio = new Audio("/om-chanting.mp3");
      audio.loop = true;
      audio.volume = 0; // Start at 0, fade in manually
      audioRef.current = audio;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (soundEnabled) {
      // Play and fade in
      audio.play().catch(e => console.warn("Audio play blocked by browser:", e));
      
      // Smooth fade in
      let vol = 0;
      audio.volume = 0;
      const fadeInterval = setInterval(() => {
        if (vol < 0.4) {
          vol += 0.02;
          audio.volume = Math.min(vol, 0.4);
        } else {
          clearInterval(fadeInterval);
        }
      }, 100);
    } else {
      // Fade out and pause
      let vol = audio.volume;
      const fadeInterval = setInterval(() => {
        if (vol > 0) {
          vol -= 0.05;
          audio.volume = Math.max(vol, 0);
        } else {
          clearInterval(fadeInterval);
          audio.pause();
        }
      }, 50);
    }

    // Cleanup on unmount
    return () => {
      // We don't want to destroy the audio on unmount if it's meant to be persistent,
      // but since it's global, it's fine.
    };
  }, [soundEnabled]);

  // Handle Scroll to gently modulate the volume, making it feel like it's responding to exploration
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const audio = audioRef.current;
      if (!soundEnabled || !audio) return;
      
      // Base volume is 0.3, it swells up to 0.7 as you scroll deeper into the site
      // This gives the "variation becomes more charismatic/immersive" effect without being irritating
      const targetVolume = 0.3 + (latest * 0.4);
      
      // Smooth transition to target volume
      audio.volume = targetVolume;
    });
  }, [scrollYProgress, soundEnabled]);

  return null; // This component does not render anything
}
