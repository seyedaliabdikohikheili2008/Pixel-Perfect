import React from "react";
import NewCourseSlider from "../../organisms/landing/new-course-slider/NewCourseSlider";
const NewCourse = () => {
  return (
    <>
      <div className="w-11/12 mb-24 mx-auto flex flex-col gap-5 items-center">
        <h1 className="w-82 py-3.5 text-3xl font-bold bg-[url('/text-line/line-6.png')] text-textC bg-no-repeat bg-bottom-right bg-auto">
          جدیترین دوره های انلاین
        </h1>
        <h5 className="text-neutral-400 text-base font-medium">محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید.</h5>
        <div>
            <NewCourseSlider />
        </div>
      </div>
    </>
  );
};

export default NewCourse;
