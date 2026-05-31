import React from "react";
import NewCourseSlider from "../../organisms/landing/new-course-slider/NewCourseSlider";
import TitleDesc from "../../molecules/title-desc/TitleDesc";
const NewCourse = () => {
  return (
    <>
      <div className="w-11/12 hidden mb-24 mx-auto lg:flex flex-col gap-5 items-center">
        <TitleDesc
          width="w-82"
          desc={" محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید"}
          title={"جدیترین دوره های انلاین"}
        />
        <div>
          <NewCourseSlider />
        </div>
      </div>
    </>
  );
};

export default NewCourse;
