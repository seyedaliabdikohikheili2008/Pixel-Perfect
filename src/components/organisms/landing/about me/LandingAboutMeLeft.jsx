import React from "react";
import Button from "../../../atoms/Butoon/Button";
import textIcon from "../../../../assets/images/icons/landing/btn-icon.png";
import textIcon2 from "../../../../assets/images/icons/landing/btn-icon2.png";
import { useTranslation } from "react-i18next";
const LandingAboutMeLeft = () => {
  const { t } = useTranslation("landing");

  return (
    <>
      <div className="w-full lg:w-3/5 flex flex-col gap-2.5 text-right items-center">
        <h1 className="text-textC text-3xl font-black w-full">
          {t("AboutMe.titleOne")}
        </h1>
        <p className="text-neutral-600 font-normal text-lg">
          {t("AboutMe.describeOne")}
        </p>
        <h3 className="flex items-center w-full gap-2 text-lg font-bold text-textC">
          <img className="w-10" src={textIcon} alt="" />
          {t("AboutMe.titleTwo")}
        </h3>
        <p className="text-neutral-600 text-lg">{t("AboutMe.describeTwo")}</p>
        <h3 className="flex items-center w-full gap-2 text-lg font-bold text-textC">
          <img className="w-10" src={textIcon2} alt="" />
          {t("AboutMe.titleThree")}
        </h3>
        <p className="text-neutral-600 text-lg">{t("AboutMe.describeThree")}</p>
        <Button buttonClassName="mt-5" children={t("AboutMe.button")} />
      </div>
    </>
  );
};

export default LandingAboutMeLeft;
