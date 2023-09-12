import useFormValues from "@/lib/useFormValues";
import { useInterestStore } from "@/store/interestDetailStore";
import React from "react";
import linkLogo from "@/assets/link.svg";
import Image from "next/image";

const InterestTemplateInfo = () => {
    const { interest, interestInfo } = useFormValues();
    const { interestLink } = useInterestStore();
    // console.log(interestLink);

    return (
        <div>
            <h1 className="font-extrabold text-lg">
                {interest || interestInfo || interestLink
                    ? "INTERESTS"
                    : ""}
            </h1>
            <div className="flex gap-2 items-center pt-3">
                <p className="text-xs font-bold">{interest}</p>
                {interestLink !== "" && (
                    <a href={interestLink} target="_blank">
                        <Image
                            src={linkLogo}
                            alt="link"
                            width={10}
                            height={10}
                        />
                    </a>
                )}
                <p className="text-xs">
                    {interestInfo ? `(${interestInfo})` : ""}
                </p>
            </div>
        </div>
    );
};

export default InterestTemplateInfo;
