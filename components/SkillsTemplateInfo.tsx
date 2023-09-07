import useFormValues from "@/lib/useFormValues";
import { useSkillStore } from "@/store/SkillDetailStore";
import React from "react";

const SkillsTemplateInfo = () => {
    const { skill, subSkill } = useFormValues();
    const { select } = useSkillStore();
    return (
        <div>
            <h1 className="font-extrabold text-lg">
                {skill || subSkill || select ? "SKILLS" : ""}
            </h1>
            <div className="flex justify-between items-center pt-3">
                <div>
                    <p className="text-xs font-bold">{skill}</p>
                    <p className="text-xs">{subSkill}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">{select}</p>
                </div>
            </div>
        </div>
    );
};

export default SkillsTemplateInfo;
