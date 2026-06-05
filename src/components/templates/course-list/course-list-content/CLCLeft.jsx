import React, { useState } from "react";
import CourseListToping from "./CourseListToping";
import CourseCard from "../../../organisms/course-list/course-card/CourseCard";
import CourseListPagination from "../../../organisms/course-list/pagination/CourseListPagination";

const CLCLeft = () => {
  const [cardView2, setcardView2] = useState(false);

  return (
    <>
      <div className="max-w-4/5 w-4/5 flex flex-col gap-10">
        <CourseListToping cardView2={cardView2} setcardView2={setcardView2} />
        <div
          className={`w-full flex ${cardView2 ? "flex-col gap-10" : "flex-row justify-between gap-3 flex-wrap"}`}
        >
          <CourseCard cardView2={cardView2} />
          <CourseCard cardView2={cardView2} />
          <CourseCard cardView2={cardView2} />
          <CourseCard cardView2={cardView2} />
          <CourseCard cardView2={cardView2} />
          <CourseCard cardView2={cardView2} />
        </div>
        <CourseListPagination />
      </div>
    </>
  );
};

export default CLCLeft;
