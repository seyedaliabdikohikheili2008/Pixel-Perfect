import React from "react";
import heroImg from "../../../assets/images/teacher-list/Group-97131.png";
import SectionTitle from "../../molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";
const TeacherHeroSection = () => {
  const { t } = useTranslation("teacherList");
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-center gap-3 w-5/6 my-12 mx-auto">
        <div className="w-11/12 lg:w-1/2">
          <SectionTitle
            width="w-85"
            desc={t("HeroSection.describe")}
            title={t("HeroSection.title")}
          />
        </div>
        <div className="w-11/12 lg:w-1/2 flex items-center justify-center">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default TeacherHeroSection;
