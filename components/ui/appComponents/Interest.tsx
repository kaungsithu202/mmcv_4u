"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import linkLogo from "@/assets/link.svg";
import { useFormContext } from "react-hook-form";
import { InterestInput } from "@/interface";
import { useInterestStore } from "@/store/interestDetailStore";

const Interest = () => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext<InterestInput>();
    const { setInterestLink, interestLink } = useInterestStore();
    const [open, setOpen] = useState(false);
    const [link, setLink] = useState("");
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
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-4">
                    <label className="text-black text-sm ">
                        Interest *
                    </label>
                    <div className="flex flex-row gap-2 items-center">
                        <input
                            type="text"
                            className="p-2.5 bg-gray-100  rounded-lg focus:outline-none w-3/4"
                            placeholder="Enter interest/Hobby"
                            {...register("interest", {
                                required: true,
                            })}
                        />
                        <div className="w-1/4">
                            <div
                                className="border-gray-300 relative border  py-2.5 cursor-pointer rounded-lg"
                                ref={divRef}
                            >
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
                                            ? " block mt-5 right-0 top-[-40px] w-[250px] h-[145px] absolute border border-black z-10 bg-white rounded-lg shadow-xl"
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
                                            defaultValue={
                                                interestLink
                                            }
                                            onChange={(e) =>
                                                setLink(
                                                    e.target.value
                                                )
                                            }
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
                                            <button
                                                className="bg-lime-500 rounded-lg px-4 py-2 w-1/2"
                                                onClick={() => {
                                                    setOpen(false);
                                                    setInterestLink(
                                                        link
                                                    );
                                                }}
                                            >
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
                        Additional information
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                        placeholder="Enter additional information"
                        {...register("interestInfo", {
                            required: false,
                        })}
                    />
                </div>
            </div>
        </div>
    );
};

export default Interest;
