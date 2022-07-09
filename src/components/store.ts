import create from "zustand";

type Store = {
  items: string[];
  setItems: (text: string) => void;
};

export const userStore = create<Store>((set) => ({
  items: [],
  setItems: (text: string) => {
    set((state) => [...state.items, text]);
  },
}));
