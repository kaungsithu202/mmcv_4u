import { ReferenceState } from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useReferenceStore = create<ReferenceState>()(
    persist(
        (set) => ({
            referenceLink: "",
            setReferenceLink: (payload: string) =>
                set(() => ({ referenceLink: payload })),
        }),
        { name: "reference" }
    )
);
