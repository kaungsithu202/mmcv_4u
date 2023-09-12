import useFormValues from "@/lib/useFormValues";
import {
    useProjectMonthStore,
    useProjectStateStore,
    useProjectYearStore,
} from "@/store/projectDetailStore";
import Image from "next/image";
import React from "react";
import linkLogo from "@/assets/link.svg";

const ProjectTemplateInfo = () => {
    const { project, subProject, projectDescription } =
        useFormValues();
    const {
        schoolLink,
        notShow,
        notShow1,
        onlyYear,
        onlyYear1,
        present,
    } = useProjectStateStore();
    const { selectMonth, selectMonth1 } = useProjectMonthStore();
    const { selectYear, selectYear1 } = useProjectYearStore();
    return (
        <div>
            <h1 className="font-extrabold text-lg">
                {selectMonth ||
                selectMonth1 ||
                selectYear !== 0 ||
                selectYear1 !== 0 ||
                project ||
                subProject ||
                projectDescription ||
                schoolLink
                    ? "PROJECTS"
                    : ""}
            </h1>
            <div className="pt-3 flex gap-1 items-center">
                <p className="text-sm font-bold">
                    {project
                        ? `${project},${subProject}`
                        : `${project}`}
                </p>
                {schoolLink !== "" && (
                    <a href={schoolLink} target="_blank">
                        <Image
                            src={linkLogo}
                            alt="link"
                            width={10}
                            height={10}
                        />
                    </a>
                )}
            </div>
            <p className="text-xs pt-1">{`${
                !notShow && !onlyYear ? selectMonth : ""
            } ${selectYear !== 0 && !notShow ? selectYear : ""}${
                (selectMonth || selectYear !== 0) &&
                (selectMonth1 || selectYear1 !== 0) &&
                !notShow &&
                !notShow1
                    ? "-"
                    : ""
            }
    ${
        present
            ? "present"
            : `${!notShow1 && !onlyYear1 ? selectMonth1 : ""} ${
                  selectYear1 !== 0 && !notShow1 ? selectYear1 : ""
              }`
    }
    `}</p>
            <p className="text-xs pt-1">{projectDescription}</p>
        </div>
    );
};

export default ProjectTemplateInfo;
