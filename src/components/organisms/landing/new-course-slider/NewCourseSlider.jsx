import React, { useState } from "react";
import NewCourseCard from "./NewCourseCard";

const NewCourseSlider = () => {
  const [sliderStep, setsliderStep] = useState(1);
  return (
    <>
      <div className="flex flex-col items-center">
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
