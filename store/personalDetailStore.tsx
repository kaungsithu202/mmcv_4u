import { create } from "zustand";

type Store = {
  profileImage: string;
  setProfileImage: (payload: string) => void;
};

export const useProfileImage = create<Store>((set) => ({
  profileImage: "",
  setProfileImage: (payload) => set(() => ({ profileImage: payload })),
}));
