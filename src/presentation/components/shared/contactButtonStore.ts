import { create } from 'zustand';

interface ContactButtonStore {
  hoverCount: number;
  incrementHover: () => void;
  decrementHover: () => void;
  hasHover: () => boolean;
}

export const useContactButtonStore = create<ContactButtonStore>((set, get) => ({
  hoverCount: 0,
  incrementHover: () => set((state) => ({ hoverCount: state.hoverCount + 1 })),
  decrementHover: () => set((state) => ({ hoverCount: Math.max(0, state.hoverCount - 1) })),
  hasHover: () => get().hoverCount > 0,
}));

