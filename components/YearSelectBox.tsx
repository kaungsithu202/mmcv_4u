import { SelectYearProps } from "@/interface";
import { yearRange, years } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

const YearSelectBox = ({
    openYear,
    openYear1,
    selectYearHandler,
    setOpenYear1,
    setClickYear1,
    setOpenYear,
    setClickYear,
}: SelectYearProps) => {
    const divRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                divRef.current &&
                !divRef.current.contains(event.target as Node)
            ) {
                setOpenYear(false);
                setOpenYear1(false);
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
                openYear || openYear1
                    ? "mt-2 h-[200px] overflow-y-auto  absolute border border-black z-10 bg-white rounded-lg shadow-xl "
                    : "hidden"
            }
        >
            <div className="grid grid-cols-6 gap-4 px-3 py-3">
                {openYear1 ? (
                    <>
                        {years.map((year, index) => (
                            <div
                                className="col-span-1 border bg-gray-300 font-bold border-black rounded-lg px-3 py-2 cursor-pointer"
                                key={index}
                                onClick={() => {
                                    selectYearHandler(year);
                                    setOpenYear1(false);
                                    setClickYear1(false);
                                }}
                            >
                                {year}
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {yearRange.map((year, index) => (
                            <div
                                className="col-span-1 border bg-gray-300 font-bold border-black rounded-lg px-3 py-2 cursor-pointer"
                                key={index}
                                onClick={() => {
                                    selectYearHandler(year);
                                    setOpenYear(false);
                                    setClickYear(false);
                                }}
                            >
                                {year}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default YearSelectBox;
