import { create } from "zustand";

export const useProfileImage = create((set) => ({
  profileImage: "",
  setProfileImage: (payload) => set(() => ({ profileImage: payload })),
}));
