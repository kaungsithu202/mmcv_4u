"use client";
import useFormValues from "@/lib/useFormValues";
import {
  useExperienceMonthStore,
  useExperienceStateStore,
  useExperienceYearStore,
} from "@/store/experienceDetailStore";
import linkLogo from "@/assets/link.svg";
import Image from "next/image";
const ExperienceTemplateInfo = () => {
  const {
    employer,
    jobTitle,
    experienceCity,
    experienceCountry,
    experienceDescription,
  } = useFormValues();
  const { schoolLink, notShow, notShow1, onlyYear, onlyYear1, present } =
    useExperienceStateStore();
  const { selectMonth, selectMonth1 } = useExperienceMonthStore();
  const { selectYear, selectYear1 } = useExperienceYearStore();
  return (
    <div>
      <h1 className="font-extrabold">
        {selectMonth ||
        selectMonth1 ||
        selectYear !== 0 ||
        selectYear1 !== 0 ||
        employer ||
        experienceCity ||
        schoolLink ||
        jobTitle ||
        experienceCountry ||
        experienceDescription
          ? "PROFESSIONAL EXPERIENCE"
          : ""}
      </h1>
      <div className="pt-3 flex gap-1 items-center">
        <p className="text-sm font-bold">
          {jobTitle ? `${employer},${jobTitle}` : `${employer}`}
        </p>
        {schoolLink !== "" && (
          <a href={schoolLink} target="_blank">
            <Image src={linkLogo} alt="link" width={10} height={10} />
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
      (experienceCity || experienceCountry)
        ? " | "
        : ""
    }${experienceCity}${
        experienceCountry && experienceCity ? ", " : ""
      }${experienceCountry}`}</p>
      <p className="text-xs pt-1">{experienceDescription}</p>
    </div>
  );
};

export default ExperienceTemplateInfo;
