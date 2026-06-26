import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UnderMenu = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("header");

  return (
    <div className="hidden lg:flex w-100">
      <ul className="w-full flex items-center justify-between">
        <li onClick={() => navigate("/")} className="cursor-pointer">
          <h3 className="font-bold text-base text-textC">{t("home")}</h3>
        </li>

        <li onClick={() => navigate("/courses")} className="cursor-pointer">
          <h3 className="font-bold text-base text-textC">{t("courses")}</h3>
        </li>

        <li onClick={() => navigate("/Instructors")} className="cursor-pointer">
          <h3 className="font-bold text-base text-textC">{t("instructors")}</h3>
        </li>

        <li onClick={() => navigate("/news-list")} className="cursor-pointer">
          <h3 className="font-bold text-base text-textC">
            {t("newsAndArticles")}
          </h3>
        </li>

        <li onClick={() => navigate("/contactUs")} className="cursor-pointer">
          <h3 className="font-bold text-base text-textC">{t("contactUs")}</h3>
        </li>
      </ul>
    </div>
  );
};

export default UnderMenu;
