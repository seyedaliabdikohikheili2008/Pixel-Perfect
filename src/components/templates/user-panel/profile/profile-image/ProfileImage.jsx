import React, { useRef, useState } from "react";
import img from "../../../../../assets/images/contactUs/person.png";
import { IoCheckmark } from "react-icons/io5";
import { SlTrash } from "react-icons/sl";
import { LuImagePlus } from "react-icons/lu";

const ProfileImage = () => {
  const inputRef = useRef(null);
  const [imageFile, setimageFile] = useState(null);

  console.log(imageFile);

  const handleFileChange = (e) => {
    setimageFile(e.target.files[0]);
  };

  return (
    <>
      <div className="w-full flex flex-wrap gap-4">
        <div className="w-50 h-50 p-1 border-4 border-primary-500 rounded-2xl relative">
          <img
            className="w-full h-full border-2 border-primary-500 rounded-2xl overflow-hidden object-center object-cover"
            src={img}
            alt="use-image"
          />
          <div className="flex gap-2 bg-background w-fit h-fit p-1 rounded-full absolute bottom-2 left-2">
            <div className="p-1 text-danger-600 bg-[#ED053F1A] rounded-full border border-[#ED053F4D]">
              <SlTrash size={20} />
            </div>
            <div className="p-1 rounded-full bg-primary-500">
              <IoCheckmark color="white" size={20} />
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            inputRef.current.click();
          }}
          className="w-50 h-50 flex flex-col gap-3 items-center justify-center text-textC text-base font-bold border-4 border-dashed border-primary-500 rounded-2xl"
        >
          <LuImagePlus className="text-primary-500" size={32} />
          اضافه کردن عکس
        </div>

        <input
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>
    </>
  );
};

export default ProfileImage;
