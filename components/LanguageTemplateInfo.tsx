import useFormValues from "@/lib/useFormValues";
import { useLanguageStore } from "@/store/languageDetailStore";
import React from "react";

const LanguageTemplateInfo = () => {
    const { language, subLanguage } = useFormValues();
    const { select } = useLanguageStore();
    return (
        <div>
            <h1 className="font-extrabold text-lg">
                {language || subLanguage || select ? "LANGUAGES" : ""}
            </h1>
            <div className="flex justify-between items-center pt-3">
                <div>
                    <p className="text-xs font-bold">{language}</p>
                    <p className="text-xs">{subLanguage}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">{select}</p>
                </div>
            </div>
        </div>
    );
};

export default LanguageTemplateInfo;
