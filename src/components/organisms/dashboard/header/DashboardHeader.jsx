import React from "react";
import DarkModeButton from "../../../atoms/DarkModeButton/DarkModeButton";

const DashboardHeader = () => {
  return (
    <>
      <div className="w-full h-20 bg-background shadow-[0px_50px_100px_0px_#48484829] rounded-3xl">
        <DarkModeButton />
      </div>
    </>
  );
};

export default DashboardHeader;
