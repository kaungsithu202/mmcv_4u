import { SelectMonthProps } from "@/interface";
import { monthNames } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

const MonthSelectBox = ({
    openMonth,
    openMonth1,
    selectMonthHandler,
    setOpenMonth,
    setOpenYear,
    setClickYear,
    setOpenYear1,
    setClickYear1,
    setOpenMonth1,
    setClickMonth,
    setClickMonth1,
}: SelectMonthProps) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                divRef.current &&
                !divRef.current.contains(event.target as Node)
            ) {
                setOpenMonth(false);
                setOpenMonth1(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);
    return (
        <div
            ref={divRef}
            className={
                openMonth || openMonth1
                    ? "mt-2  absolute border border-black z-10 bg-white rounded-lg shadow-xl "
                    : "hidden"
            }
        >
            <div className="grid grid-cols-4 gap-4 px-4 py-3">
                {monthNames.map((month, index) => (
                    <div
                        className="col-span-1 border bg-gray-300 font-bold border-black rounded-lg px-3 py-2 cursor-pointer"
                        key={index}
                        onClick={() => {
                            selectMonthHandler(month);
                            setOpenMonth(false);
                            openMonth
                                ? `${setOpenYear(true)}
                                        ${setClickYear(true)}`
                                : `${setOpenYear1(true)}
                                        ${setClickYear1(true)}`;
                            setOpenMonth1(false);
                            setClickMonth1(false);
                            setClickMonth(false);
                        }}
                    >
                        {month}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthSelectBox;
