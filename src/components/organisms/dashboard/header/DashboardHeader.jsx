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

  const mode = useSelector((state) => state.DarkFlag.value);

  return (
    <>
      <div className="w-full shrink-0 h-20 max-[500px]:h-16 flex items-center justify-between px-4 max-[500px]:px-3 bg-background shadow-[0px_50px_100px_0px_#48484829] rounded-3xl">
        <div className="flex items-center gap-3 max-[500px]:gap-2 min-w-0">
          <img
            className="w-16 h-16 max-[500px]:w-12 max-[500px]:h-12 rounded-full object-cover shrink-0"
            src={ProfileInfo?.data?.currentPictureAddress || profile}
            alt=""
          />

          <div className="flex flex-col min-w-0">
            <h4 className="text-textC text-xl max-[500px]:text-sm font-bold truncate">
              {ProfileInfo?.data?.fName + " " + ProfileInfo?.data?.lName ||
                "بدون نام"}
            </h4>

            <h5 className="text-neutral-300 text-base max-[500px]:text-xs truncate">
              {ProfileInfo?.data?.userName}
            </h5>
          </div>
        </div>

        <div className="flex items-center gap-2 max-[500px]:gap-1 shrink-0">
          <img
            className="w-10 h-10 lg:hidden cursor-pointer"
            src={mode === "light" ? menuIcon : menuIconDark}
            alt=""
            onClick={() => setmenuFlag((prev) => !prev)}
          />

          <DarkModeButton />
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
