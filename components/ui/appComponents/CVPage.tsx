"use client";
import useFormValues from "@/lib/useFormValues";
import { useFormContext } from "react-hook-form";
const CVPage = () => {
  const { fullname, jobtitle, email, phone, address } = useFormValues();

  //   const { register,  } = useFormContext();
  // //   const ASD = getValues(["fullname", "jobtitle", "email", "phone", "address"]);
  //   console.log("ASD", ASD);
  return (
    <div className="w-full h-full bg-red-50">
      <div className="w-[45%] h-full bg-violet-900 p-3 text-white">
        <p>{fullname}</p>
        <p>{jobtitle}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
      <div className="h-full">2</div>
    </div>
  );
};

export default CVPage;
