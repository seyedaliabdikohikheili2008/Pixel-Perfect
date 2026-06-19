import React from "react";
import img from "../../../../../assets/images/contactUs/person.png";
import { IoCheckmark } from "react-icons/io5";
import { SlTrash } from "react-icons/sl";

const ProfileImage = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-50 h-50 p-1 border-4 border-primary-500 rounded-2xl">
          <img
            className="w-full h-full border-2 border-primary-500 rounded-2xl overflow-hidden object-center object-cover"
            src={img}
            alt="use-image"
          />
          <div className="flex">
            <div className="">
              <SlTrash size={20} />
            </div>
            <div>
              <IoCheckmark />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
