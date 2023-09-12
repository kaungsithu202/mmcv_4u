"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import downArrow from "@/assets/downarrow.svg";
import { skillLevel } from "@/lib/utils";
import cross from "@/assets/crossSmall.svg";
import { useFormContext } from "react-hook-form";
import { SkillsInput } from "@/interface";
import { useSkillStore } from "@/store/SkillDetailStore";

const Skill = () => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext<SkillsInput>();
    const { select, setSelect } = useSkillStore();
    const [dropdownWidth, setDropdownWidth] = useState(0);
    const [dropDown, setDropDown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (dropdownRef.current) {
            const containerWidth = dropdownRef.current.offsetWidth;
            setDropdownWidth(containerWidth);
        }
    }, []);
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-4">
                    <label className="text-black text-sm ">
                        Skill *
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                        placeholder="Enter Skill"
                        {...register("skill", {
                            required: true,
                        })}
                    />
                </div>
                <div className="col-span-4">
                    <label className="text-black text-sm ">
                        Information / Sub-skills
                        <span className="text-xs text-gray-500 pl-3">
                            recommended
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                        placeholder="Enter Information or sub-skills"
                        {...register("subSkill", {
                            required: false,
                        })}
                    />
                </div>
                <div className="col-span-4" ref={dropdownRef}>
                    <label className="text-black text-sm ">
                        Select skill level
                    </label>
                    {select === "" ? (
                        <div
                            className="p-2.5  bg-gray-100 w-full rounded-lg focus:outline-none mt-1 cursor-pointer"
                            onClick={() => {
                                setDropDown((prev) => !prev);
                            }}
                        >
                            <div className="flex justify-between items-start">
                                <span className="opacity-50">
                                    Skill Level
                                </span>
                                <Image
                                    src={downArrow}
                                    alt="downArrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none mt-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div
                                    className="w-full"
                                    onClick={() =>
                                        setDropDown((prev) => !prev)
                                    }
                                >
                                    {select}
                                </div>
                                <Image
                                    src={cross}
                                    alt="cross"
                                    width={25}
                                    height={25}
                                    onClick={() => setSelect("")}
                                />
                            </div>
                        </div>
                    )}
                    <div
                        className={
                            dropDown
                                ? "mt-1 block  border border-black z-10 bg-white rounded-lg shadow-xl"
                                : "none"
                        }
                        style={{ width: dropdownWidth }}
                    >
                        <div
                            className={
                                dropDown
                                    ? "grid grid-cols-4 gap-1 "
                                    : "none"
                            }
                        >
                            {dropDown &&
                                skillLevel.map((level, index) => (
                                    <div
                                        key={index}
                                        className={
                                            dropDown
                                                ? "col-span-4 cursor-pointer px-2 py-1 hover:bg-blue-200 rounded-lg font-bold block"
                                                : "none"
                                        }
                                        onClick={() => {
                                            setDropDown(false);
                                            setSelect(level);
                                        }}
                                    >
                                        {level}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
