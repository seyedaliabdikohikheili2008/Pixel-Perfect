import React from "react";
import image from "../../../../assets/images/landing/about-me/d6388bfbaf47c0d0880306da30adb34b5d8e25ac.jpg";
import { useTranslation } from "react-i18next";
const LandingAboutMeRight = () => {
  const { t } = useTranslation("landing");
  return (
    <>
      <div className="w-2/5 relative">
        <img
          className="object-cover h-194 rounded-[40px] overflow-hidden"
          src={image}
          alt=""
        />
        <div className="rounded-[40px] bg-rootBg p-5 -bottom-10 -left-10 absolute">
          <div className="w-60 xl:w-70 h-60 xl:h-70 flex flex-col justify-center gap-2.5 items-center bg-primary-500 rounded-[40px]">
            <h2 className="text-white text-5xl font-bold">+20</h2>
            <h5 className="text-2xl font-bold text-white">
              {t("AboutMe.card")}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingAboutMeRight;
