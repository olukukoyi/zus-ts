import create from "zustand";

type ItemStore = {
  itemArray: string[];
  item: string;
  setItems: (text: string) => void;
};

const addText = (text: string, list: string[]) => [...list, text];

export const userStore = create<ItemStore>((set) => ({
  item: "",
  setItems: (text: string) => {
    set((state) => ({
      itemArray: addText(text, state.itemArray),
    }));
  },
  itemArray: [],
}));
