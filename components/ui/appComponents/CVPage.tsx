"use client";
import CertificateTemplateInfo from "@/components/CertificateTemplateInfo";
import EducationTemplateInfo from "@/components/EducationTemplateInfo";
import ExperienceTemplateInfo from "@/components/ExperienceTemplateInfo";
import InterestTemplateInfo from "@/components/InterestTemplateInfo";
import LanguageTemplateInfo from "@/components/LanguageTemplateInfo";
import ProjectTemplateInfo from "@/components/ProjectTemplateInfo";
import ReferenceTemplateInfo from "@/components/ReferenceTemplateInfo";
import SkillsTemplateInfo from "@/components/SkillsTemplateInfo";
import useFormValues from "@/lib/useFormValues";
import { useProfileImage } from "@/store/personalDetailStore";
import Image from "next/image";

const CVPage = () => {
    const { fullname, jobtitle, email, phone, address } =
        useFormValues();
    const { profileImage } = useProfileImage();

    return (
        <div className="w-full h-full bg-red-50 flex">
            <div className="w-[45%] h-full bg-violet-900 py-3 px-6 text-white">
                <h3 className="text-2xl">{fullname}</h3>
                <h3 className="text-lg">{jobtitle}</h3>
                {profileImage && (
                    <Image
                        src={profileImage}
                        width={80}
                        height={80}
                        alt="profile"
                        className="w-20 h-20 rounded-full"
                    />
                )}
                <h3 className="text-md">{email}</h3>
                <h3 className="text-md">{phone}</h3>
                <h3 className="text-md">{address}</h3>
                <div className="pt-5 w-full">
                    <ExperienceTemplateInfo />
                </div>
                <div className="pt-5 w-full">
                    <LanguageTemplateInfo />
                </div>
                <div className="pt-5 w-full">
                    <InterestTemplateInfo />
                </div>
                <div className="pt-5 w-full">
                    <ProjectTemplateInfo />
                </div>
            </div>
            <div className="h-full w-[55%]">
                <div className="px-4 pt-5">
                    <EducationTemplateInfo />
                </div>
                <div className="px-4 pt-5">
                    <SkillsTemplateInfo />
                </div>
                <div className="px-4 pt-5">
                    <ReferenceTemplateInfo />
                </div>
            </div>
        </div>
    );
};

export default CVPage;
