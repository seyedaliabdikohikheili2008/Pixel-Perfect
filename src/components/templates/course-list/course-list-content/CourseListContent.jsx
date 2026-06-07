import React from "react";
import CoursesFilter from "../../../organisms/course-list/filters/CoursesFilter";
import CourseList from "./CourseList";
import { useSearchParams } from "react-router-dom";

const CourseListContent = () => {
  
  return (
    <>
      <div className="w-11/12 relative mx-auto flex justify-evenly gap-9 mb-24">
        <CoursesFilter />
        <CourseList />
      </div>
    </>
  );
};

export default CourseListContent;
