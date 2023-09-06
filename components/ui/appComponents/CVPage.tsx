"use client";
import useFormValues from "@/lib/useFormValues";
import { useProfileImage } from "@/store/personalDetailStore";
import Image from "next/image";
import linkLogo from "@/assets/link.svg";
import {
    useEducationMonthStore,
    useEducationStateStore,
    useEducationYearStore,
} from "@/store/educationDeatilStore";
const CVPage = () => {
    const {
        fullname,
        jobtitle,
        email,
        phone,
        address,
        degree,
        school,
        city,
        country,
        description,
    } = useFormValues();
    const { profileImage } = useProfileImage();
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
            </div>
            <div className="h-full">
                <div className="px-3 pt-3">
                    <h1 className="font-extrabold text-lg">
                        Education
                    </h1>
                    <div className="pt-3 flex gap-1 items-center">
                        <p className="text-xs font-bold">
                            {school
                                ? `${degree},${school}`
                                : `${degree}`}
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
                    } ${
                        selectYear !== 0 && !notShow ? selectYear : ""
                    }${
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
                            : `${
                                  !notShow1 && !onlyYear1
                                      ? selectMonth1
                                      : ""
                              } ${
                                  selectYear1 !== 0 && !notShow1
                                      ? selectYear1
                                      : ""
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
                    }${city}${
                        country && city ? ", " : ""
                    }${country}`}</p>
                    <p className="text-xs pt-1">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CVPage;
