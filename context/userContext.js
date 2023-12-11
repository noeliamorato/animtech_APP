import { create } from "zustand";

const userContext = create((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
}));

export default userContext;
