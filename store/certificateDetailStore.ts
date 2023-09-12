import { CertificateState } from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCertificateStore = create<CertificateState>()(
    persist(
        (set) => ({
            certificateLink: "",
            setCertificateLink: (payload: string) =>
                set(() => ({ certificateLink: payload })),
        }),
        { name: "certificateLink" }
    )
);
