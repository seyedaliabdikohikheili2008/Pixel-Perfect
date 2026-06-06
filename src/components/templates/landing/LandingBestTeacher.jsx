import React from "react";
import BestTeacherCard from "../../organisms/landing/best-teacher/BestTeacherCard";
import Button from "../../atoms/Butoon/Button";
import TitleDesc from "../../molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";

const LandingBestTeacher = () => {
  const { t } = useTranslation("landing");

  return (
    <>
      <div className="w-11/12 mb-24 flex flex-col gap-5 items-center mx-auto">
        <div className="w-1/2 flex flex-col items-center gap-2.5">
          <TitleDesc
            width="w-50"
            desc={t("BestTeachers.describe")}
            title={t("BestTeachers.title")}
          />
        </div>
        <div className="w-full flex-wrap gap-5 mb-4 [@media(max-width:1370px)]:justify-evenly flex justify-between">
          <BestTeacherCard />
          <BestTeacherCard />
          <BestTeacherCard />
          <BestTeacherCard />
        </div>
        <Button
          children={t("BestTeachers.button")}
          buttonClassName="rounded-full text-nowrap"
        />
      </div>
    </>
  );
};

export default LandingBestTeacher;
