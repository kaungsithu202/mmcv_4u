"use client";
import cameraIcon from "@/assets/cameraIcon.svg";
import { fileToBase64 } from "@/lib/utils";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { SubmitHandler, useFormContext, useWatch } from "react-hook-form";
import useFormValues from "@/lib/useFormValues";
type Inputs = {
  fullname: string;
  image: string;
  jobtitle: string;
  email: string;
  phone: string;
  address: string;
};

const PersonalDetailsInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    getValues,
  } = useFormContext<Inputs>();

  // console.log("asd", asd);
  // const watchPersonalDetails = useWatch({
  //   control,
  //   name: ["fullname", "jobtitle", "email", "phone", "address"],
  // });
  // const personalValues = getValues([
  //   "fullname",
  //   "jobtitle",
  //   "email",
  //   "phone",
  //   "address",
  // ]);
  // console.log("personalValues", personalValues);

  // const setPersonalDetails = usePersonalDetail(
  //   (state) => state.setPersonalDetails
  // );

  // console.log("watchPersonalDetails", watchPersonalDetails);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const imageRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState("");

  const handleClickRef = () => {
    imageRef?.current?.click();
  };

  const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();
      const base64 = await fileToBase64(selectedFile);
      setProfileImage(base64);
    }
  };

  return (
    <div className="bg-white rounded-xl  px-6 py-4 flex flex-col gap-3 relative cursor-pointer ">
      <h1 className="text-lg font-bold">Edit personal details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
          <div className="col-span-2 ">
            <label className="text-black text-sm ">Full name</label>
            <input
              type="text"
              className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
              {...register("fullname", {
                required: "required full name",
              })}
            />
          </div>
          <div className="col-span-2 row-span-2 ">
            <div
              className="bg-gray-100 p-6 rounded-full absolute translate-x-20 translate-y-4"
              onClick={handleClickRef}
            >
              <Image src={cameraIcon} alt="cameraIcon" width={70} height={70} />
              <input
                ref={imageRef}
                type="file"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-black text-sm ">Job title</label>
            <input
              type="text"
              className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
              {...register("jobtitle")}
            />
          </div>
          <div className="col-span-2">
            <label className="text-black text-sm ">Email</label>
            <input
              type="text"
              className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
              {...register("email")}
            />
          </div>
          <div className="col-span-2">
            <label className="text-black text-sm ">Phone</label>
            <input
              type="text"
              className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
              {...register("phone")}
            />
          </div>
          <div className="col-span-4">
            <label className="text-black text-sm ">Address</label>
            <input
              type="text"
              className="p-2.5 bg-gray-100 w-full rounded-lg focus:outline-none"
              {...register("address")}
            />
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default PersonalDetailsInfo;
