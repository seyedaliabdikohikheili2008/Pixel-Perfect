import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UnderMenu = ({ flag }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("header");

  return (
    <>
      <div
        className={`${flag ? "opacity-100 visible" : "invisible opacity-0"} z-50 bg-background rounded-b-2xl lg:opacity-100 lg:visible transition-[visibility,opacity] duration-300 ease-out top-21 lg:top-0 right-0 absolute lg:relative w-full lg:w-100 flex flex-col shadow-[0px_50px_100px_0px_#48484829] lg:shadow-none items-center`}
      >
        <ul className="w-11/12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4.5 py-4 mb-4 lg:mb-0 lg:border-0 border-b border-neutral-300">
          <li
            onClick={() => {
              navigate("/");
            }}
            className="w-full cursor-pointer lg:w-auto flex justify-between"
          >
            <h3 className="font-normal text-xl lg:text-base lg:font-bold text-textC">
              {t("home")}
            </h3>
            <h3 className="font-normal text-base lg:hidden text-neutral-500">
              {t("homepage")}
            </h3>
          </li>
          <li
            onClick={() => {
              navigate("/courses");
            }}
            className="w-full cursor-pointer lg:w-auto flex justify-between"
          >
            <h3 className="font-normal text-xl lg:text-base lg:font-bold text-textC">
              {t("courses")}
            </h3>
            <h3 className="font-normal text-base lg:hidden text-neutral-500">
              {t("ourCourses")}
            </h3>
          </li>
          <li
            onClick={() => {
              navigate("Instructors");
            }}
            className="w-full cursor-pointer lg:w-auto flex justify-between"
          >
            <h3 className="font-normal text-xl lg:text-base lg:font-bold text-textC">
              {t("instructors")}
            </h3>
            <h3 className="font-normal text-base lg:hidden text-neutral-500">
              {t("topInstructors")}
            </h3>
          </li>
          <li
            onClick={() => {
              navigate("news-list");
            }}
            className="w-full cursor-pointer lg:w-auto flex justify-between"
          >
            <h3 className="font-normal text-xl lg:text-base lg:font-bold text-textC text-nowrap">
              {t("newsAndArticles")}
            </h3>
            <h3 className="font-normal text-base lg:hidden text-neutral-500  text-nowrap">
              {t("newsAndArticles")}
            </h3>
          </li>
          <li className="w-full cursor-pointer lg:w-auto flex justify-between"  onClick={() => {
              navigate("/contactUs");
            }}>
            
            <h3 className="font-normal text-xl lg:text-base lg:font-bold text-textC  text-nowrap">
              {t("contactUs")}
            </h3>
            <h3 className="font-normal text-base lg:hidden text-neutral-500  text-nowrap">
              {t("getInTouch")}
            </h3>
          </li>
        </ul>
        <div className="lg:hidden mb-3">
          <Logo variant={"linear"} Exception={true} />
        </div>
      </div>
    </>
  );
};

export default UnderMenu;
