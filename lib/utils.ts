import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const startYear = 1944;
const currentYear = new Date().getFullYear();
export const yearRange = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
);
export const years = Array.from(
    { length: 2027 - 1944 + 1 },
    (_, index) => 2027 - index
);

export const skillLevel = [
    "Novice",
    "Beginner",
    "Skillful",
    "Experienced",
    "Expert",
];
