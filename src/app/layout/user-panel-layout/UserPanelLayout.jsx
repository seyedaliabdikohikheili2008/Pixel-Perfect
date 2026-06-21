import React, { useState } from "react";
import DashboardHeader from "../../../components/organisms/dashboard/header/DashboardHeader";
import logo from "../../../assets/images/LogoImages/linear.png";
import { RxDashboard } from "react-icons/rx";
import { LuBookText, LuShield } from "react-icons/lu";
import { TbClockHour10 } from "react-icons/tb";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineBook } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { Toaster } from "react-hot-toast";

const UserPanelLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuFlag, setmenuFlag] = useState(false);

  return (
    <>
      <Toaster />
      <div className="w-full min-h-178 relative overflow-x-hidden bg-dashboardBg flex items-start gap-5 p-4">
        <div
          className={`lg:w-73 w-11/12 absolute ${menuFlag ? "flex" : "hidden"} top-24 lg:top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 lg:relative bg-background lg:flex flex-col gap-10 z-40 items-center h-177 py-6 rounded-3xl shadow-[0px_50px_100px_0px_#48484829]`}
        >
          <img
            onClick={() => {
              navigate("/");
            }}
            className="w-60"
            src={logo}
            alt=""
          />
          <ul className="w-11/12 h-90">
            <li
              onClick={() => {
                navigate("/user-panel");
              }}
              className={`flex cursor-pointer items-center gap-4 p-4 ${location.pathname == "/user-panel" ? "bg-primary-500 text-white" : "text-textC"} rounded-[38px]`}
            >
              <RxDashboard size={24} />
              <h3 className="text-lg">داشبورد</h3>
            </li>
            <li
              onClick={() => {
                navigate("/user-panel/my-course");
              }}
              className={`flex cursor-pointer items-center gap-4 p-4 ${location.pathname == "/user-panel/my-course" ? "bg-primary-500 text-white" : "text-textC"} rounded-[38px]`}
            >
              <LuBookText size={24} />
              <h3 className="text-lg">دوره من</h3>
            </li>
            <li
              onClick={() => {
                navigate("/user-panel/my-reservation");
              }}
              className={`flex cursor-pointer items-center gap-4 p-4 ${location.pathname == "/user-panel/my-reservation" ? "bg-primary-500 text-white" : "text-textC"} rounded-[38px]`}
            >
              <TbClockHour10 size={24} />
              <h3 className="text-lg">رزرو من</h3>
            </li>
            <li
              onClick={() => {
                navigate("/user-panel/my-favorites");
              }}
              className={`flex cursor-pointer items-center gap-4 p-4 ${location.pathname == "/user-panel/my-favorites" ? "bg-primary-500 text-white" : "text-textC"} rounded-[38px]`}
            >
              <LuBookMarked size={24} />
              <h3 className="text-lg">علاقه‌مندی های من</h3>
            </li>
            <li
              onClick={() => {
                navigate("/user-panel/Security");
              }}
              className={`flex cursor-pointer items-center gap-4 p-4 ${location.pathname == "/user-panel/Security" ? "bg-primary-500 text-white" : "text-textC"} rounded-[38px]`}
            >
              <LuShield size={24} />
              <h3 className="text-lg">تنظیمات امنیتی</h3>
            </li>
            <li
              onClick={() => {
                navigate("/user-panel/profile");
              }}
              className={`flex cursor-pointer items-center gap-4 p-4 ${location.pathname.startsWith("/user-panel/profile") ? "bg-primary-500 text-white" : "text-textC"} rounded-[38px]`}
            >
              <LiaUserEditSolid size={24} />
              <h3 className="text-lg">پروفایل</h3>
            </li>
          </ul>
          <div
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="absolute cursor-pointer bottom-5 gap-4 text-danger-500 text-lg rounded-[38px] items-center justify-center w-50 py-3 flex border border-neutral-200"
          >
            <IoLogOutOutline size={24} />
            <h3>خروج از حساب</h3>
          </div>
        </div>
        <div className="flex-1 w-11/12 flex flex-col gap-5 justify-start">
          <DashboardHeader setmenuFlag={setmenuFlag} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserPanelLayout;
