import React, { useMemo, useState } from "react";
import NewCourseCard from "./NewCourseCard";
import { getAllCourse } from "../../../../core/services/landing/getAllCourse";
import { useAllCourses } from "../../../../core/hooks/queries/courses/useAllCoures";

const NewCourseSlider = () => {
  const [sliderStep, setsliderStep] = useState(0);

  const [params, setparams] = useState({
    PageNumber: 1,
    RowsOfPage: 9,
  });

  const {
    data: courseList = undefined,
    isError: courseListErr,
    isLoading: courseListLoading,
  } = useAllCourses(params);

  const newCourses = useMemo(() => {
    if (courseList) {
      return [...courseList.data.courseFilterDtos]
        .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
        .slice(0, 3);
    }
  }, [courseList]);

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <NewCourseCard detail={newCourses?.[sliderStep]} />
        <div className="flex gap-2.5">
          <div
            className={`${sliderStep == 0 ? "w-8 bg-primary-500" : "w-3 bg-neutral-300"} h-3 transition-[color,width] duration-500 rounded-full`}
            onClick={() => {
              setsliderStep(0);
            }}
          ></div>
          <div
            className={`${sliderStep == 1 ? "w-8 bg-primary-500" : "w-3 bg-neutral-300"} h-3 transition-[color,width] duration-500 rounded-full`}
            onClick={() => {
              setsliderStep(1);
            }}
          ></div>
          <div
            className={`${sliderStep == 2 ? "w-8 bg-primary-500" : "w-3 bg-neutral-300"} h-3 transition-[color,width] duration-500 rounded-full`}
            onClick={() => {
              setsliderStep(2);
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default NewCourseSlider;
