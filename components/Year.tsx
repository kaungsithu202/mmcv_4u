import Image from "next/image";
import React from "react";
import downArrow from "@/assets/downarrow.svg";
import { YearValue } from "@/interface";

const Year = ({
    clickYear,
    notShow,
    openYearHandler,
    selectYear,
}: YearValue) => {
    return (
        <div
            className={
                clickYear
                    ? `border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-2 ${
                          notShow ? "hidden" : ""
                      } `
                    : `border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-2 ${
                          notShow ? "hidden" : ""
                      } `
            }
        >
            <div
                className="flex justify-between items-center"
                onClick={openYearHandler}
            >
                <span>{selectYear === 0 ? "Year" : selectYear}</span>
                <Image
                    src={downArrow}
                    alt="downArrow"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
};

export default Year;
