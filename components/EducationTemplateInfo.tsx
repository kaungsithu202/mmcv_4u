import useFormValues from "@/lib/useFormValues";
import {
    useEducationMonthStore,
    useEducationStateStore,
    useEducationYearStore,
} from "@/store/educationDeatilStore";
import Image from "next/image";
import linkLogo from "@/assets/link.svg";
import React from "react";

const EducationTemplateInfo = () => {
    const { degree, school, city, country, description } =
        useFormValues();
    const {
        schoolLink,
        notShow,
        notShow1,
        onlyYear,
        onlyYear1,
        present,
    } = useEducationStateStore();
    const { selectMonth, selectMonth1 } = useEducationMonthStore();
    const { selectYear, selectYear1 } = useEducationYearStore();
    return (
        <div>
            <h1 className="font-extrabold text-lg">
                {selectMonth ||
                selectMonth1 ||
                selectYear !== 0 ||
                selectYear1 !== 0 ||
                school ||
                city ||
                country ||
                schoolLink ||
                degree ||
                country ||
                description
                    ? "EDUCATION"
                    : ""}
            </h1>
            <div className="pt-3 flex gap-1 items-center">
                <p className="text-sm font-bold">
                    {school ? `${degree},${school}` : `${degree}`}
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
    ${
        (present ||
            selectMonth ||
            selectMonth1 ||
            selectYear !== 0 ||
            selectYear1 !== 0) &&
        (city || country)
            ? " | "
            : ""
    }${city}${country && city ? ", " : ""}${country}`}</p>
            <p className="text-xs pt-1">{description}</p>
        </div>
    );
};

export default EducationTemplateInfo;
