import React from "react";
import DarkModeButton from "../../../atoms/DarkModeButton/DarkModeButton";
import profile from "../../../../assets/images/course-dtail/user.png";
import { useProfileInfo } from "../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import menuIcon from "../../../../assets/images/icons/header/umenuIcon.png";
import menuIconDark from "../../../../assets/images/icons/header/umenuIconDark.png";
import { useSelector } from "react-redux";

const DashboardHeader = ({ setmenuFlag }) => {
  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
  } = useProfileInfo();
  console.log(ProfileInfo);

  const mode = useSelector((state) => state.DarkFlag.value);

  return (
    <>
      <div className="w-full shrink-0 h-20 flex items-center justify-between px-4 bg-background shadow-[0px_50px_100px_0px_#48484829] rounded-3xl">
        <div className="flex items-center gap-3">
          <img
            className="w-16 h-16 rounded-full overflow-hidden object-cover"
            src={ProfileInfo?.data?.currentPictureAddress || profile}
            alt=""
          />
          <div className="flex flex-col items-start">
            <h4 className="text-textC text-xl font-bold">
              {ProfileInfo?.data?.fName || "بدون نام"}
            </h4>
            <h5 className="text-neutral-300 text-base font-bold">
              {ProfileInfo?.data?.userName}
            </h5>
          </div>
        </div>
        <div className="flex gap-3">
          <img
            className="w-10 h-10 lg:hidden"
            src={mode === "light" ? menuIcon : menuIconDark}
            alt=""
            onClick={() => {
              setmenuFlag((prev) => !prev);
            }}
          />
          <DarkModeButton />
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
