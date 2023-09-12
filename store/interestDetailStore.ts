import { InterestState } from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useInterestStore = create<InterestState>()(
    persist(
        (set) => ({
            interestLink: "",
            setInterestLink: (payload: string) =>
                set(() => ({ interestLink: payload })),
        }),
        { name: "interestLink" }
    )
);
