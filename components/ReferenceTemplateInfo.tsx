import useFormValues from "@/lib/useFormValues";
import { useReferenceStore } from "@/store/referenceDetailStore";
import React from "react";

const ReferenceTemplateInfo = () => {
    const {
        refName,
        refJobTitle,
        refOrganization,
        refEmail,
        refPhone,
    } = useFormValues();
    const { referenceLink } = useReferenceStore();
    return (
        <div>
            <h1 className="font-extrabold text-lg">
                {refName ||
                refJobTitle ||
                refOrganization ||
                refEmail ||
                refPhone ||
                referenceLink
                    ? "REFERENCES"
                    : ""}
            </h1>
            <p className="pt-3 text-xs">{`${refName}${
                refJobTitle ? "," : ""
            } ${refJobTitle}${
                refOrganization ? "," : ""
            } ${refOrganization} `}</p>
            <div className="flex pt-1 text-xs gap-1">
                <p>{refEmail}</p>
                {refPhone ? "," : ""}
                <p>{refPhone}</p>
            </div>
        </div>
    );
};

export default ReferenceTemplateInfo;
