import React from "react";
import NewCourseSlider from "../../organisms/landing/new-course-slider/NewCourseSlider";
import TitleDesc from "../../molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";
const NewCourse = () => {
  const { t } = useTranslation("landing");
  return (
    <>
      <div className="w-11/12 hidden mb-24 mx-auto lg:flex flex-col gap-5 items-center">
        <TitleDesc width="w-82" desc={t("NewCourseSection.describe")} title={t("NewCourseSection.title")} />
        <div className="w-3/4">
          <NewCourseSlider />
        </div>
      </div>
    </>
  );
};

export default NewCourse;
