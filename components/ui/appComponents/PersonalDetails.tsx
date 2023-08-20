import React from "react";
import emailIcon from "@/assets/emailIcon.svg";
import phoneIcon from "@/assets/phoneIcon.svg";
import locationIcon from "@/assets/locationIcon.svg";
import treeIcon from "@/assets/treeIcon.svg";
import editIcon from "@/assets/editIcon.svg";
import Image from "next/image";

const PersonalDetails = () => {
  return (
    <>
      <div className="bg-white rounded-xl  px-6 py-4 flex flex-col gap-3 relative cursor-pointer opacity-50">
        <p className="text-lg font-semibold">Your Name</p>

        <div className="flex items-center gap-3">
          <Image src={emailIcon} alt="" width={18} height={18} />
          <p>Email</p>
        </div>
        <div className="flex items-center gap-3">
          <Image src={phoneIcon} alt="" width={18} height={20} />
          <p>Phone</p>
        </div>
        <div className="flex items-center gap-3">
          <Image src={locationIcon} alt="" width={18} height={18} />
          <p>Address</p>
        </div>
        <Image
          src={treeIcon}
          alt="treeIcon"
          width={75}
          height={75}
          className="absolute right-0 top-16"
        />
        <Image
          src={editIcon}
          alt="editIcon"
          width={18}
          height={18}
          className="absolute right-4"
        />
      </div>
    </>
  );
};

export default PersonalDetails;
