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
    city: string;
    country: string;
    description: string;
}
export interface ExperienceInput {
    employer: string;
    jobTitle: string;
    experienceCity: string;
    experienceCountry: string;
    experienceDescription: string;
}
export interface SkillsInput {
    skill: string;
    subSkill: string;
}

export interface SkillState {
    select: string;
    setSelect: (level: string) => void;
}

export interface LanguageInput {
    language: string;
    subLanguage: string;
}

export interface CertificateInput {
    certificate: string;
    certificateInfo: string;
}

export interface CertificateState {
    certificateLink: string;
    setCertificateLink: (link: string) => void;
}

export interface InterestInput {
    interest: string;
    interestInfo: string;
}
export interface ProjectInput {
    project: string;
    subProject: string;
    projectDescription: string;
}

export interface ReferenceInput {
    refName: string;
    refJobTitle: string;
    refOrganization: string;
    refEmail: string;
    refPhone: string;
}

export interface ReferenceState {
    referenceLink: string;
    setReferenceLink: (link: string) => void;
}
export interface InterestState {
    interestLink: string;
    setInterestLink: (link: string) => void;
}
export interface MonthStoreState {
    selectMonth: string;
    selectMonth1: string;
    setSelectMonth: (month: string) => void;
    setSelectMonth1: (month: string) => void;
}

export interface YearStoreState {
    selectYear: number;
    selectYear1: number;
    setSelectYear: (year: number) => void;
    setSelectYear1: (year: number) => void;
}

export interface StoreState {
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
