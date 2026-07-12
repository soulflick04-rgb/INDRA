import { create } from "zustand";

interface AppState {
  isMuted: boolean;
  reducedMotion: boolean;
  currentExhibition: number;
  totalExhibitions: number;
  isLoaderComplete: boolean;
  setMuted: (isMuted: boolean) => void;
  setReducedMotion: (reducedMotion: boolean) => void;
  setCurrentExhibition: (index: number) => void;
  setLoaderComplete: (complete: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  isMuted: true, // Default to true (sound disabled by default as requested)
  reducedMotion: false,
  currentExhibition: 0,
  totalExhibitions: 5,
  isLoaderComplete: false,
  setMuted: (isMuted) => set({ isMuted }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setCurrentExhibition: (index) => set({ currentExhibition: index }),
  setLoaderComplete: (complete) => set({ isLoaderComplete: complete }),
}));
