import React from "react";
import CoursesFilter from "../../../organisms/course-list/filters/CoursesFilter";
import CLCLeft from "./CLCLeft";

const CourseListContent = () => {
  return (
    <>
      <div className="w-11/12 mx-auto flex justify-evenly gap-9 mb-24">
        <CoursesFilter />
        <CLCLeft />
      </div>
    </>
  );
};

export default CourseListContent;
