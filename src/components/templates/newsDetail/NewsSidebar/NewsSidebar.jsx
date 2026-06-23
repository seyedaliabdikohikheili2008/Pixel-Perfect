import React from "react";
import Profile from "../../../atoms/profile/Profile";
import Acceptance from "../../../atoms/acceptance/Acceptance";
import bazdid from "../../../../assets/images/icons/newsDetail/bazdid.svg";
import tarikh from "../../../../assets/images/icons/newsDetail/tarikh.png";
import darkbazdid from "../../../../assets/images/icons/newsDetail/darkbazdid.png";
import darktarikh from "../../../../assets/images/icons/newsDetail/darktarikh.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const NewsSideBar = ({ news }) => {
    const { t } = useTranslation("newsDetail");
    const mode = useSelector((state) => state.DarkFlag.value);
  return (
    <div className=" w-full xl:w-3/10 md:w-3/4 mx-auto flex flex-col items-center gap-8">
      <div className="bg-background w-full p-8 rounded-2xl shadow-2xl">
        <div className="w-11/12 m-auto">
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? bazdid : darkbazdid} alt="" />
              <p className="text-md text-neutral-300">{t("sidebar.view")}</p>
            </div>
            <p className="font-bold text-[16px] text-textC">
              {news.currentView}
            </p>
          </div>
          <div className="flex justify-between items-center p-2.5 ">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? tarikh : darktarikh} alt="" />
              <p className="text-md text-neutral-300">{t("sidebar.date")}</p>
            </div>
            <p className="font-bold text-[16px] text-textC">
              {new Date(news.insertDate).toLocaleDateString('fa-IR')}
            </p>
          </div>
        </div>
      </div>
      <Profile />
      <Acceptance data={news}/>
    </div>
  );
};

export default NewsSideBar;
