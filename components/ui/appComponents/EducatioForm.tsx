"use client";
import React, { useState } from "react";
import linkLogo from "@/assets/link.svg";
import downArrow from "@/assets/downarrow.svg";
import upArrow from "@/assets/uparrow.svg";
import Image from "next/image";

const EducatioForm = () => {
    const [open, setOpen] = useState(false);
    const [openMonth, setOpenMonth] = useState(false);
    const [selectMonth, setSelectMonth] = useState("");
    const [selectMonth1, setSelectMonth1] = useState("");
    const [openYear, setOpenYear] = useState(false);
    const [selectYear, setSelectYear] = useState(0);
    const [selectYear1, setSelectYear1] = useState(0);
    const [clickMonth, setClickMonth] = useState(false);
    const [clickYear, setClickYear] = useState(false);
    const [openMonth1, setOpenMonth1] = useState(false);
    const [openYear1, setOpenYear1] = useState(false);
    const [clickMonth1, setClickMonth1] = useState(false);
    const [clickYear1, setClickYear1] = useState(false);
    const startYear = 1944;
    const currentYear = new Date().getFullYear();
    const yearRange = Array.from(
        { length: currentYear - startYear + 1 },
        (_, index) => startYear + index
    );
    const years = Array.from(
        { length: 2027 - 1944 + 1 },
        (_, index) => 2027 - index
    );
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const openMonthHandler = () => {
        setOpenMonth((prev) => !prev);
        setClickMonth((prev) => !prev);
        setClickMonth1(false);
        setClickYear(false);
        setClickYear1(false);
        setOpenYear(false);
        setOpenYear1(false);
        setOpenMonth1(false);
    };
    const openMonth1Handler = () => {
        setOpenMonth1((prev) => !prev);
        setClickMonth1((prev) => !prev);
        setClickMonth(false);
        setClickYear(false);
        setClickYear1(false);
        setOpenYear(false);
        setOpenYear1(false);
        setOpenMonth(false);
    };
    const openYearHandler = () => {
        setOpenYear((prev) => !prev);
        setClickYear((prev) => !prev);
        setClickYear1(false);
        setClickMonth(false);
        setClickMonth1(false);
        setOpenMonth(false);
        setOpenMonth1(false);
        setOpenYear1(false);
    };
    const openYear1Handler = () => {
        setOpenYear1((prev) => !prev);
        setClickYear1((prev) => !prev);
        setClickYear(false);
        setClickMonth(false);
        setClickMonth1(false);
        setOpenMonth(false);
        setOpenMonth1(false);
        setOpenYear(false);
    };
    const selectMonthHandler = (month: string) => {
        openMonth ? setSelectMonth(month) : setSelectMonth1(month);
    };
    const selectYearHandler = (year: number) => {
        openYear ? setSelectYear(year) : setSelectYear1(year);
    };
    return (
        <div>
            <div className="grid grid-cols-4 grid-rows-4 gap-2">
                <div className="col-span-4">
                    <label className="text-black text-sm ">
                        Degree{" "}
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                    />
                </div>
                <div className="col-span-4">
                    <label className="text-black text-sm ">
                        School
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <div className="flex flex-row gap-2 items-center">
                        <input
                            type="text"
                            className="p-2.5 bg-gray-100  rounded-lg focus:outline-none w-3/4"
                        />
                        <div className="w-1/4">
                            <div className="border-gray-300 border  py-2.5 cursor-pointer rounded-lg">
                                <div
                                    className="flex flex-row gap-3 item-center justify-center"
                                    onClick={() => setOpen(true)}
                                >
                                    <Image
                                        src={linkLogo}
                                        alt="linkLogo"
                                        width={15}
                                        height={15}
                                    />
                                    <span>Link</span>
                                </div>
                                <div
                                    className={
                                        open
                                            ? " block mt-5 w-[250px] h-[150px] absolute border border-black z-10 bg-white rounded-lg shadow-xl"
                                            : "hidden"
                                    }
                                >
                                    <div className="px-6 py-4">
                                        <label className="text-black text-sm ">
                                            Link URL
                                        </label>
                                        <input
                                            type="text"
                                            className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                                        />
                                        <div className="mt-5 flex justify-between gap-2">
                                            <button
                                                className="border-5 border rounded-lg px-4 py-2 w-1/2"
                                                onClick={() =>
                                                    setOpen(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                            <button className="bg-lime-500 rounded-lg px-4 py-2 w-1/2">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <label className="text-black text-sm ">
                        City
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-black text-sm ">
                        Country
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                    />
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-5 gap-2">
                        <label className="text-black text-sm col-span-5">
                            Start Date
                            <span className="text-xs text-gray-500 pl-3">
                                optional
                            </span>
                        </label>
                        <div
                            className={
                                clickMonth
                                    ? "border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-3"
                                    : "border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-3"
                            }
                        >
                            <div
                                className="flex justify-between items-start"
                                onClick={openMonthHandler}
                            >
                                <span>
                                    {selectMonth === ""
                                        ? "Month"
                                        : selectMonth}
                                </span>

                                <Image
                                    src={downArrow}
                                    alt="downArrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                clickYear
                                    ? "border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-2"
                                    : "border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-2"
                            }
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={openYearHandler}
                            >
                                <span>
                                    {selectYear === 0
                                        ? "Year"
                                        : selectYear}
                                </span>
                                <Image
                                    src={downArrow}
                                    alt="downArrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>
                    <div
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
                    <div
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
                                                selectYearHandler(
                                                    year
                                                );
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
                                                selectYearHandler(
                                                    year
                                                );
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
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-5 gap-2">
                        <label className="text-black text-sm col-span-5">
                            End Date
                            <span className="text-xs text-gray-500 pl-3">
                                optional
                            </span>
                        </label>
                        <div
                            className={
                                clickMonth1
                                    ? "border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-3"
                                    : "border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-3"
                            }
                        >
                            <div
                                className="flex justify-between items-start"
                                onClick={openMonth1Handler}
                            >
                                <span>
                                    {selectMonth1 === ""
                                        ? "Month"
                                        : selectMonth1}
                                </span>
                                <Image
                                    src={downArrow}
                                    alt="downArrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                clickYear1
                                    ? "border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-2"
                                    : "border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-2"
                            }
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={openYear1Handler}
                            >
                                <span>
                                    {selectYear1 === 0
                                        ? "Year"
                                        : selectYear1}
                                </span>
                                <Image
                                    src={downArrow}
                                    alt="downArrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducatioForm;
