import {
    MonthStoreState,
    StoreState,
    YearStoreState,
} from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExperienceMonthStore = create<MonthStoreState>()(
    persist(
        (set) => ({
            selectMonth: "",
            selectMonth1: "",
            setSelectMonth: (payload: string) =>
                set(() => ({ selectMonth: payload })),
            setSelectMonth1: (payload: string) =>
                set(() => ({ selectMonth1: payload })),
        }),
        { name: "experienceSelectMonth" }
    )
);

export const useExperienceYearStore = create<YearStoreState>()(
    persist(
        (set) => ({
            selectYear: 0,
            selectYear1: 0,
            setSelectYear: (payload: number) =>
                set(() => ({ selectYear: payload })),
            setSelectYear1: (payload: number) =>
                set(() => ({ selectYear1: payload })),
        }),
        { name: "experienceSelectYear" }
    )
);

export const useExperienceStateStore = create<StoreState>()(
    persist(
        (set) => ({
            notShow: false,
            notShow1: false,
            onlyYear: false,
            onlyYear1: false,
            present: false,
            schoolLink: "",
            setNotShow: (payload: boolean) =>
                set(() => ({ notShow: payload })),
            setNotShow1: (payload: boolean) =>
                set(() => ({ notShow1: payload })),
            setOnlyYear: (payload: boolean) =>
                set(() => ({ onlyYear: payload })),
            setOnlyYear1: (payload: boolean) =>
                set(() => ({ onlyYear1: payload })),
            setPresent: (payload: boolean) =>
                set(() => ({ present: payload })),
            setSchoolLink: (payload: string) => {
                set(() => ({ schoolLink: payload }));
            },
        }),
        { name: "experience" }
    )
);
