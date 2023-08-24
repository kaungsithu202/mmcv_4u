"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import linkLogo from "@/assets/link.svg";

const Reference = () => {
    const [open, setOpen] = useState(false);
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
            <div className="grid grid-cols-4 grid-rows-4 gap-2">
                <div className="col-span-4">
                    <label className="text-black text-sm ">
                        Name *
                    </label>
                    <div className="flex flex-row gap-2 items-center">
                        <input
                            type="text"
                            className="p-2.5 bg-gray-100  rounded-lg focus:outline-none w-3/4"
                            placeholder="Enter the full name"
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
                <div className="col-span-2">
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
                        Organisation
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                        placeholder="Enter Organization"
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-black text-sm ">
                        Email
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-black text-sm ">
                        Phone
                        <span className="text-xs text-gray-500 pl-3">
                            optional
                        </span>
                    </label>
                    <input
                        type="text"
                        className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
                        placeholder="Enter a Phone number"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reference;
