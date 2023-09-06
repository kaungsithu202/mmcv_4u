import React from "react";

export interface MonthValue {
    clickMonth: boolean;
    notShow: boolean;
    onlyYear: boolean;
    openMonthHandler: React.MouseEventHandler;
    selectMonth: string;
}

export interface SelectMonthProps {
    openMonth: boolean;
    openMonth1: boolean;
    selectMonthHandler: (month: string) => void;
    setOpenMonth: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenYear: React.Dispatch<React.SetStateAction<boolean>>;
    setClickYear: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenYear1: React.Dispatch<React.SetStateAction<boolean>>;
    setClickYear1: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenMonth1: React.Dispatch<React.SetStateAction<boolean>>;
    setClickMonth: React.Dispatch<React.SetStateAction<boolean>>;
    setClickMonth1: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface YearValue {
    clickYear: boolean;
    notShow: boolean;
    openYearHandler: React.MouseEventHandler;
    selectYear: number;
}

export interface SelectYearProps {
    openYear: boolean;
    openYear1: boolean;
    selectYearHandler: (year: number) => void;
    setOpenYear1: React.Dispatch<React.SetStateAction<boolean>>;
    setClickYear1: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenYear: React.Dispatch<React.SetStateAction<boolean>>;
    setClickYear: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EducationInput {
    degree: string;
    school: string;
    schoolLink: string;
    city: string;
    country: string;
    description: string;
}
export interface EducationMonthStoreState {
    selectMonth: string;
    selectMonth1: string;
    setSelectMonth: (month: string) => void;
    setSelectMonth1: (month: string) => void;
}

export interface EducationYearStoreState {
    selectYear: number;
    selectYear1: number;
    setSelectYear: (year: number) => void;
    setSelectYear1: (year: number) => void;
}

export interface EducationStoreState {
    notShow: boolean;
    notShow1: boolean;
    onlyYear: boolean;
    onlyYear1: boolean;
    present: boolean;
    schoolLink: string;
    setPresent: (s: boolean) => void;
    setNotShow: (s: boolean) => void;
    setNotShow1: (s: boolean) => void;
    setOnlyYear: (s: boolean) => void;
    setOnlyYear1: (s: boolean) => void;
    setSchoolLink: (link: string) => void;
}
