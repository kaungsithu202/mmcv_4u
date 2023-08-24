"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import linkLogo from "@/assets/link.svg";
import Month from "@/components/Month";
import cross from "@/assets/crossSmall.svg";
import Year from "@/components/Year";
import MonthSelectBox from "@/components/MonthSelectBox";
import YearSelectBox from "@/components/YearSelectBox";
import Month1 from "@/components/Month1";

const Experience = () => {
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
    const [notShow, setNotShow] = useState(false);
    const [onlyYear, setOnlyYear] = useState(false);
    const [notShow1, setNotShow1] = useState(false);
    const [onlyYear1, setOnlyYear1] = useState(false);
    const [present, setPresent] = useState(false);
    const [presentValue, setpresentVlue] = useState("present");
    const [description, setDescription] = useState("");
    const divRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                divRef.current &&
                !divRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
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
                        Employer
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <div className="flex flex-row gap-2 items-center">
                        <input
                            type="text"
                            className="p-2.5 bg-gray-100  rounded-lg focus:outline-none w-3/4"
                            placeholder="Enter employer"
                        />
                        <div className="w-1/4">
                            <div className="border-gray-300 border  py-2.5 cursor-pointer rounded-lg">
                                <div
                                    className="flex flex-row gap-3 item-center justify-center"
                                    onClick={() => setOpen(true)}
                                    ref={divRef}
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
                <div className="col-span-4">
                    <label className="text-black text-sm ">
                        Job Title
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                        placeholder="Enter Job Title"
                    />
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
                        placeholder="Enter City"
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
                        placeholder="Enter Country"
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
                        {selectMonth === "" ? (
                            <Month
                                clickMonth={clickMonth}
                                notShow={notShow}
                                onlyYear={onlyYear}
                                openMonthHandler={openMonthHandler}
                                selectMonth={selectMonth}
                            />
                        ) : (
                            <div
                                className={
                                    clickMonth
                                        ? `border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-3 ${
                                              notShow ? "hidden" : ""
                                          } ${
                                              onlyYear ? "hidden" : ""
                                          } `
                                        : `border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-3 ${
                                              notShow ? "hidden" : ""
                                          } ${
                                              onlyYear ? "hidden" : ""
                                          }`
                                }
                            >
                                <div className="flex items-center justify-between">
                                    <div
                                        onClick={openMonthHandler}
                                        className="w-full"
                                    >
                                        {selectMonth}
                                    </div>
                                    <Image
                                        src={cross}
                                        alt="cross"
                                        width={25}
                                        height={25}
                                        onClick={() =>
                                            setSelectMonth("")
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        {selectYear === 0 ? (
                            <Year
                                clickYear={clickYear}
                                notShow={notShow}
                                openYearHandler={openYearHandler}
                                selectYear={selectYear}
                            />
                        ) : (
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
                                <div className="flex items-center justify-between">
                                    <div
                                        onClick={openYearHandler}
                                        className="w-full"
                                    >
                                        {selectYear}
                                    </div>
                                    <Image
                                        src={cross}
                                        alt="cross"
                                        width={25}
                                        height={25}
                                        onClick={() =>
                                            setSelectYear(0)
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <MonthSelectBox
                        openMonth={openMonth}
                        openMonth1={openMonth1}
                        selectMonthHandler={selectMonthHandler}
                        setOpenMonth={setOpenMonth}
                        setOpenYear={setOpenYear}
                        setClickYear={setClickYear}
                        setOpenYear1={setOpenYear1}
                        setClickYear1={setClickYear1}
                        setOpenMonth1={setOpenMonth1}
                        setClickMonth={setClickMonth}
                        setClickMonth1={setClickMonth1}
                    />
                    <YearSelectBox
                        openYear={openYear}
                        openYear1={openYear1}
                        selectYearHandler={selectYearHandler}
                        setOpenYear={setOpenYear}
                        setOpenYear1={setOpenYear1}
                        setClickYear={setClickYear}
                        setClickYear1={setClickYear1}
                    />
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-5 gap-2">
                        <label className="text-black text-sm col-span-5">
                            End Date
                            <span className="text-xs text-gray-500 pl-3">
                                optional
                            </span>
                        </label>
                        {present ? (
                            <div className="col-span-5">
                                <input
                                    type="text"
                                    className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                                    value={presentValue}
                                    onChange={(e) => {
                                        setpresentVlue(
                                            e.target.value
                                        );
                                    }}
                                />
                            </div>
                        ) : (
                            <>
                                {selectMonth1 === "" ? (
                                    <Month1
                                        clickMonth={clickMonth1}
                                        notShow={notShow1}
                                        onlyYear={onlyYear1}
                                        openMonthHandler={
                                            openMonth1Handler
                                        }
                                        selectMonth={selectMonth1}
                                    />
                                ) : (
                                    <div
                                        className={
                                            clickMonth1
                                                ? `border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-3 ${
                                                      notShow1
                                                          ? "hidden"
                                                          : ""
                                                  } ${
                                                      onlyYear1
                                                          ? "hidden"
                                                          : ""
                                                  } `
                                                : `border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-3 ${
                                                      notShow1
                                                          ? "hidden"
                                                          : ""
                                                  } ${
                                                      onlyYear1
                                                          ? "hidden"
                                                          : ""
                                                  }`
                                        }
                                    >
                                        <div className="flex items-center justify-between">
                                            <div
                                                onClick={
                                                    openMonth1Handler
                                                }
                                                className="w-full"
                                            >
                                                {selectMonth1}
                                            </div>
                                            <Image
                                                src={cross}
                                                alt="cross"
                                                width={25}
                                                height={25}
                                                onClick={() =>
                                                    setSelectMonth1(
                                                        ""
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                                {selectYear1 === 0 ? (
                                    <Year
                                        clickYear={clickYear1}
                                        notShow={notShow1}
                                        openYearHandler={
                                            openYear1Handler
                                        }
                                        selectYear={selectYear1}
                                    />
                                ) : (
                                    <div
                                        className={
                                            clickYear1
                                                ? `border-blue-500 border-2 px-2  py-2.5 cursor-pointer rounded-lg col-span-2 ${
                                                      notShow1
                                                          ? "hidden"
                                                          : ""
                                                  } `
                                                : `border-gray-300 border px-2  py-2.5 cursor-pointer rounded-lg col-span-2 ${
                                                      notShow1
                                                          ? "hidden"
                                                          : ""
                                                  } `
                                        }
                                    >
                                        <div className="flex items-center justify-between">
                                            <div
                                                onClick={
                                                    openYear1Handler
                                                }
                                                className="w-full"
                                            >
                                                {selectYear1}
                                            </div>
                                            <Image
                                                src={cross}
                                                alt="cross"
                                                width={25}
                                                height={25}
                                                onClick={() =>
                                                    setSelectYear1(0)
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex gap-2 mb-2">
                        <input
                            type="checkbox"
                            id="notShow"
                            name="notShow"
                            className="cursor-pointer"
                            checked={notShow}
                            onChange={(e) =>
                                setNotShow(e.target.checked)
                            }
                        />
                        <label
                            htmlFor="notShow"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {"Dont't Show"}
                        </label>
                    </div>
                    <div
                        className={
                            !notShow
                                ? "flex gap-2 col-span-2"
                                : "hidden"
                        }
                    >
                        <input
                            type="checkbox"
                            id="onlyYear"
                            name="onlyYear"
                            className="cursor-pointer"
                            checked={onlyYear}
                            onChange={(e) =>
                                setOnlyYear(e.target.checked)
                            }
                        />
                        <label
                            htmlFor="onlyYear"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {"Only Year"}
                        </label>
                    </div>
                </div>
                <div className="col-span-2">
                    <div
                        className={
                            notShow1 ? "hidden" : "flex gap-2 mb-2"
                        }
                    >
                        <input
                            type="checkbox"
                            id="present"
                            name="present"
                            className="cursor-pointer"
                            checked={present}
                            onChange={(e) =>
                                setPresent(e.target.checked)
                            }
                        />
                        <label
                            htmlFor="present"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {"Present(Current)"}
                        </label>
                    </div>
                    <div className="flex gap-2 mb-2">
                        <input
                            type="checkbox"
                            id="notShow"
                            name="notShow"
                            className="cursor-pointer"
                            checked={notShow1}
                            onChange={(e) =>
                                setNotShow1(e.target.checked)
                            }
                        />
                        <label
                            htmlFor="notShow"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {"Dont't Show"}
                        </label>
                    </div>
                    <div
                        className={
                            !notShow1
                                ? "flex gap-2 col-span-2"
                                : "hidden"
                        }
                    >
                        <input
                            type="checkbox"
                            id="onlyYear"
                            name="onlyYear"
                            className="cursor-pointer"
                            checked={onlyYear1}
                            onChange={(e) =>
                                setOnlyYear1(e.target.checked)
                            }
                        />
                        <label
                            htmlFor="onlyYear"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {"Only Year"}
                        </label>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="flex flex-col gap-3">
                        <label className="text-black text-sm ">
                            Description
                            <span className="text-xs text-gray-500 pl-3">
                                optional
                            </span>
                        </label>
                        <textarea
                            rows={4}
                            className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                            placeholder="Describe your role & achievements"
                        >
                            {description}
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
