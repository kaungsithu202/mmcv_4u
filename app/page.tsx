"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import CVPage from "@/components/ui/appComponents/CVPage";
import Certificate from "@/components/ui/appComponents/Certificate";
import EducatioForm from "@/components/ui/appComponents/EducatioForm";
import Experience from "@/components/ui/appComponents/Experience";
import Interest from "@/components/ui/appComponents/Interest";
import Language from "@/components/ui/appComponents/Language";
import PersonalDetails from "@/components/ui/appComponents/PersonalDetails";
import PersonalDetailsInfo from "@/components/ui/appComponents/PersonalDetailsInfo";
import Project from "@/components/ui/appComponents/Project";
import Reference from "@/components/ui/appComponents/Reference";
import Skill from "@/components/ui/appComponents/Skill";
import { useAccordionState } from "@/store/educationDeatilStore";
import { FormProvider, set, useForm } from "react-hook-form";

export default function Home() {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <div className="min-h-screen container mx-auto">
                <div className="grid grid-cols-12 gap-3">
                    <h1 className="col-span-2">DashBoard</h1>
                    <div className="col-span-5 grid gap-3 h-screen overflow-x-auto scrollbar-hide">
                        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl drop-shadow-md sticky top-0 z-10">
                            <h2 className="text-2xl font-bold">
                                KST CV
                            </h2>
                            <button className="bg-slate-700 text-white rounded-full px-6 py-2">
                                Download
                            </button>
                        </div>
                        {/* <PersonalDetails /> */}
                        <PersonalDetailsInfo />
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Education
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <EducatioForm />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Professional Experience
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Experience />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Skill
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Skill />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Language
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Language />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Certificate
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Certificate />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Interest
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Interest />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Project
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Project />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-white rounded-xl  px-6 py-4"
                                >
                                    <AccordionTrigger>
                                        Create Reference
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Reference />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <CVPage />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
