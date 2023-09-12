"use client";
import CVPage from "@/components/ui/appComponents/CVPage";
import Certificate from "@/components/ui/appComponents/Certificate";
import EducatioForm from "@/components/ui/appComponents/EducatioForm";
import Experience from "@/components/ui/appComponents/Experience";
import Interest from "@/components/ui/appComponents/Interest";
import Language from "@/components/ui/appComponents/Language";
import PersonalDetailsInfo from "@/components/ui/appComponents/PersonalDetailsInfo";
import Project from "@/components/ui/appComponents/Project";
import Reference from "@/components/ui/appComponents/Reference";
import Skill from "@/components/ui/appComponents/Skill";
import {
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import { useRef } from "react";
import CustomAccordion from "./ui/CustomAccordion";

// import { useAccordionState } from "@/store/educationDeatilStore";
const SECTIONS = [
  {
    id: 1,
    title: "Personal Info",
    element: <PersonalDetailsInfo />,
  },
  {
    id: 2,
    title: "Create Education",
    element: <EducatioForm />,
  },
  {
    id: 3,
    title: "Create Professional Experience",
    element: <Experience />,
  },
  {
    id: 4,
    title: "Create Skill",
    element: <Skill />,
  },
  {
    id: 5,
    title: "Create Language",
    element: <Language />,
  },
  {
    id: 6,
    title: "Create Certificate",
    element: <Certificate />,
  },
  {
    id: 7,
    title: "Create Interest",
    element: <Interest />,
  },
  {
    id: 8,
    title: "Create Project",
    element: <Project />,
  },
  {
    id: 9,
    title: "Create Reference",
    element: <Reference />,
  },
];

const FormSection = () => {
  const cvPageRef = useRef<HTMLElement | null>(null);
  return (
    <div className="min-h-screen container mx-auto">
      <div className="grid grid-cols-12 gap-3">
        <h1 className="col-span-2">DashBoard</h1>
        <div className="col-span-5 grid gap-3 h-screen overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl drop-shadow-md sticky top-0 z-10">
            <h2 className="text-2xl font-bold">KST CV</h2>
            <button
              className="bg-slate-700 text-white rounded-full px-6 py-2"
              onClick={() => exportComponentAsPNG(cvPageRef)}
            >
              Download
            </button>
          </div>
          {/* <PersonalDetails /> */}
          {SECTIONS.map((section) => (
            <div key={section.id}>
              <CustomAccordion title={section.title}>
                {section.element}
              </CustomAccordion>
            </div>
          ))}
        </div>
        <div className="col-span-5">
          <CVPage ref={cvPageRef} />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
