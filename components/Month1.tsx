import React from "react";
import downArrow from "@/assets/downarrow.svg";
import Image from "next/image";
import { MonthValue } from "@/interface";

const Month1 = ({
    clickMonth,
    notShow,
    onlyYear,
    openMonthHandler,
    selectMonth,
}: MonthValue) => {
    return (
        <div
            className={
                clickMonth
                    ? `border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-3 ${
                          notShow ? "hidden" : ""
                      } ${onlyYear ? "hidden" : ""} `
                    : `border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-3 ${
                          notShow ? "hidden" : ""
                      } ${onlyYear ? "hidden" : ""}`
            }
        >
            <div
                className="flex justify-between items-start"
                onClick={openMonthHandler}
            >
                <span>
                    {selectMonth === "" ? "Month" : selectMonth}
                </span>
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

export default Month1;
