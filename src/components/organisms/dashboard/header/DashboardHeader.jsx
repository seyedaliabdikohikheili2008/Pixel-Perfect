import React from "react";
import DarkModeButton from "../../../atoms/DarkModeButton/DarkModeButton";
import profile from "../../../../assets/images/course-dtail/user.png";

const DashboardHeader = () => {
  return (
    <>
      <div className="w-full h-20 flex items-center justify-between px-4 bg-background shadow-[0px_50px_100px_0px_#48484829] rounded-3xl">
        <div className="flex items-center gap-3">
          <img
            className="w-16 h-16 rounded-full overflow-hidden object-cover"
            src={profile}
            alt=""
          />
          <div className="flex flex-col items-start">
            <h4 className="text-textC text-xl font-bold">امیر محمد</h4>
            <h5 className="text-neutral-300 text-base font-bold">@amirKh</h5>
          </div>
        </div>
        <DarkModeButton />
      </div>
    </>
  );
};

export default DashboardHeader;
