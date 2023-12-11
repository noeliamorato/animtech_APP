import { create } from "zustand";

const TopContext = create((set) => ({
  textoTop: null,
  setTextoTop: (data) => set({ textoTop: data }),
}));

export default TopContext;
