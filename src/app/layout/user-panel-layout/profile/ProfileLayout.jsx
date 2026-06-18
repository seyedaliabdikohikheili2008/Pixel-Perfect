import React from "react";
import profile from "../../../../assets/images/course-dtail/user.png";
import { MdOutlineEmail } from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProfileLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      <div className="flex flex-col gap-6">
        <div className="bg-neutral-50 py-5 px-8 rounded-3xl">
          <ul className="text-neutral-500 flex items-center justify-start gap-6 text-xs md:text-sm font-medium">
            <li
              onClick={() => {
                navigate("/user-panel/profile");
              }}
              className={`${location.pathname == "/user-panel/profile" ? "bg-primary-300 rounded-full text-white" : ""} p-2 cursor-pointer`}
            >
              اطلاعات شخصی
            </li>
            <li
              onClick={() => {
                navigate("/user-panel/profile/image");
              }}
              className={`${location.pathname == "/user-panel/profile/image" ? "bg-primary-300 rounded-full text-white" : ""} p-2 cursor-pointer`}
            >
              عکس پروفایل
            </li>
            <li className="cursor-pointer">آدرس سکونت</li>
            <li className="cursor-pointer">لینک ها</li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ProfileLayout;
