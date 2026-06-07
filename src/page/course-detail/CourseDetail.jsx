import React from "react";
import Description from "../../components/templates/course-detail/Description/Description";
import CourseSideBar from "../../components/templates/course-detail/CourseSideBar/CourseSideBar";
import SectionTitle from "../../components/molecules/section-title/SectionTitle";

const CourseDetail = () => {
  return (
    <>
      <div className="w-11/12 flex-col flex gap-10 xl:flex-row md:flex-col justify-between m-auto py-10">
        <Description />
        <CourseSideBar />
      </div>
      <div>
        <SectionTitle width="w-75" title={"دوره های مشابه"} />
      </div>
    </>
  );
};

export default CourseDetail;
