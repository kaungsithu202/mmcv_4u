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
