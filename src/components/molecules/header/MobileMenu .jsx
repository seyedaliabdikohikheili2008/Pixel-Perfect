import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({ flag, setFlag }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("header");

  const menuItems = [
    {
      title: t("home"),
      subTitle: t("homepage"),
      path: "/",
    },
    {
      title: t("courses"),
      subTitle: t("ourCourses"),
      path: "/courses",
    },
    {
      title: t("instructors"),
      subTitle: t("topInstructors"),
      path: "/Instructors",
    },
    {
      title: t("newsAndArticles"),
      subTitle: t("newsAndArticles"),
      path: "/news-list",
    },
    {
      title: t("contactUs"),
      subTitle: t("getInTouch"),
      path: "/contactUs",
    },
  ];

  return (
    <>
      <div
        onClick={() => setFlag(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 lg:hidden ${flag ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-background shadow-2xl z-50 lg:hidden transition-transform duration-300 ${flag ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-200">
          <Logo variant="linear" Exception />
          <button className="text-danger-500" onClick={() => setFlag(false)}>
            <RxCross2 size={28} />
          </button>
        </div>
        <ul className="p-5 flex  flex-col gap-6">
          {menuItems.map((item) => (
            <li
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setFlag(false);
              }}
              className="cursor-pointer flex gap-2 justify-between"
            >
              <h3 className="text-xl text-textC text-nowrap">{item.title}</h3>

              <p className="text-neutral-500 mt-1">{item.subTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
