import React from "react";
import profile from "../../../../assets/images/course-dtail/user.png";
import { MdOutlineEmail } from "react-icons/md";

const ProfileLayout = () => {
  return (
    <>
      <div className="bg-primary-400 rounded-3xl w-full h-75 relative">
        <div className="w-fit h-fit p-3 rounded-full absolute right-15 -bottom-15 flex justify-center items-center bg-dashboardBg">
          <img
            className="w-30 h-30 rounded-full overflow-hidden object-cover"
            src={profile}
            alt=""
          />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center lg:flex-nowrap gap-10 lg:justify-between px-7">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-textC text-3xl font-bold">امیر محمد</h2>
            <p className="text-[#787878] text-base">( دانشجو )</p>
          </div>
          <div className="flex items-center gap-1 text-[#787878]">
            <MdOutlineEmail color="#787878" size={20} />
            <p>Example@gmail.com</p>
          </div>
        </div>
        <div className="w-90 flex flex-col gap-3 items-start text-base text-textC">
          <h5 className="text-[#787878]">درباره من</h5>
          <p className="text-justify">
            من امیر محمد دانشجوی نوب سگ هستم که اخیرا دارم یاد میگیرم برنامه
            نویسی رو و امیدوارم از نوبیت دربیام و بتونم یه کاری پیدا کنم تو
            دنیای دیجیتال ، ممنون از همه
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
