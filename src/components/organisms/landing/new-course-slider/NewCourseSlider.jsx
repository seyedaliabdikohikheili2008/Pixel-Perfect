import React, { useState } from "react";
import NewCourseCard from "./NewCourseCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCourse } from "../../../../core/services/landing/getAllCourse";

const NewCourseSlider = () => {
  const [sliderStep, setsliderStep] = useState(1);

  const [params, setparams] = useState({
    PageNumber: 1,
    RowsOfPage: 9,
  });

  const {
    data: courseList = [],
    isError: courseListErr,
    isLoading: courseListLoading,
  } = useQuery({
    queryKey: ["courseList", params],
    queryFn: () => getAllCourse(params),
  });

  return (
    <>
      <div className="flex flex-col items-center">
        {courseList ? console.log("courses ", courseList) : ""}
        {sliderStep == 1 ? <NewCourseCard /> : ""}
        {sliderStep == 2 ? <NewCourseCard /> : ""}
        {sliderStep == 3 ? <NewCourseCard /> : ""}
        <div className="flex gap-2.5">
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
          <div
            className={`${sliderStep == 3 ? "w-8 bg-primary-500" : "w-3 bg-neutral-300"} h-3 transition-[color,width] duration-500 rounded-full`}
            onClick={() => {
              setsliderStep(3);
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default NewCourseSlider;
