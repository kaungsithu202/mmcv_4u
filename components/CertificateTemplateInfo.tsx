import useFormValues from "@/lib/useFormValues";
import { useCertificateStore } from "@/store/certificateDetailStore";
import Image from "next/image";
import React from "react";
import linkLogo from "@/assets/link.svg";

const CertificateTemplateInfo = () => {
    const { certificate, certificateInfo } = useFormValues();
    const { certificateLink } = useCertificateStore();
    return (
        <div>
            <h1 className="font-extrabold text-lg">
                {certificate || certificateInfo || certificateLink
                    ? "CERTIFICATES"
                    : ""}
            </h1>
            <div className="pt-3">
                <div className="flex gap-1 items-center">
                    <p className="text-xs font-bold">{certificate}</p>
                    {certificateLink && (
                        <a href={certificateLink} target="_blank">
                            <Image
                                src={linkLogo}
                                alt="link"
                                width={10}
                                height={10}
                            />
                        </a>
                    )}
                </div>
                <p className="text-xs">{certificateInfo}</p>
            </div>
        </div>
    );
};

export default CertificateTemplateInfo;
