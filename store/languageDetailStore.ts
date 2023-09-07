import { SkillState } from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create<SkillState>()(
    persist(
        (set) => ({
            select: "",
            setSelect: (payload: string) =>
                set(() => ({ select: payload })),
        }),
        { name: "selectLanguageLevel" }
    )
);
