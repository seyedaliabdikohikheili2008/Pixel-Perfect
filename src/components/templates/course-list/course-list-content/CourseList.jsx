import React, { useEffect, useState } from "react";
import CourseListToping from "./CourseListToping";
import CourseCard from "../../../organisms/course-list/course-card/CourseCard";
import CourseListPagination from "../../../organisms/course-list/pagination/CourseListPagination";

const CourseList = () => {
  const [cardView2, setcardView2] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setcardView2(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-11/12 md:w-4/5 flex flex-col items-center gap-10">
        <CourseListToping cardView2={cardView2} setcardView2={setcardView2} />
        <div
          className={`w-full [@media(max-width:1340px)]:justify-evenly flex ${cardView2 ? "flex-col gap-10" : "flex-row justify-between gap-3 flex-wrap"}`}
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

export default CourseList;
