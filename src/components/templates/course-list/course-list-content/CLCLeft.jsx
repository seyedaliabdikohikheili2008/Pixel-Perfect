import React from "react";
import CourseListToping from "./CourseListToping";
import CourseCard from "../../../organisms/course-list/course-card/CourseCard";

const CLCLeft = () => {
  return (
    <>
      <div className="max-w-4/5 w-4/5 border border-red-600">
        {/* <CourseListToping /> */}
        <CourseCard />
      </div>
    </>
  );
};

export default CLCLeft;
