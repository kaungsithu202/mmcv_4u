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
export const languageLevel = [
    "Beginner(A1,0/0+)",
    "Elementary proficiency(A2,1)",
    "Limited working proficiency(B1,1+)",
    "Highly proficient in speaking and writing(B2-C1,2/2+,3/3+)",
    "Native / full working proficiency (C2,4/4+)",
];
