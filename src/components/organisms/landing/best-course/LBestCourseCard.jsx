import React from "react";
import Img from "../../../../assets/images/landing/landing-best-course/9498d001b5371fcca7906cf1c5b4f32b96d476cf.jpg";
import Star from "../../../../assets/images/landing/landing-best-course/Frame106.png";
import Button from "../../../atoms/Butoon/Button";
import teacher from "../../../../assets/images/icons/landing/teaching.png";
import student from "../../../../assets/images/icons/landing/student-card.png";

const LBestCourseCard = () => {
  return (
    <>
      <div className="w-90 relative flex flex-col items-center">
        <img
          className="rounded-2xl w-full max-h-50 overflow-hidden"
          src={Img}
          alt=""
        />
        <div className="w-11/12 -translate-y-15 flex p-4 flex-col gap-5 bg-rootBg rounded-2xl">
          <h2 className="text-right text-xl text-textC font-bold">
            آموزش Node.js
          </h2>
          <div className="flex justify-between items-center pb-3 border-b-1-5 border-neutral-100">
            <div>
              <img src={Star} alt="" />
            </div>
            <div>
              <Button children={"دکتر بحرالعلوl"} iconSrc={teacher} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex p-2 rounded-lg gap-2 bg-neutral-100 text-primary-400">
              <img src={student} alt="" />
              22
            </div>
            <div className="flex text-xs font-bold gap-2">
              <span className="text-danger-300 before:w-full before:absolute relative before:-rotate-12 before:top-2 before:h-0.5 before:bg-danger-300">
                500.000 تومان
              </span>
              <span className="text-saccess-500">400.000 تومان</span>
            </div>
          </div>
        </div>
        <span className="w-20 z-10 text-sm font-black text-white flex flex-col justify-center items-center rotate-[-30deg] absolute -top-5 -left-5 h-20 bg-[url('/best-course-card/Star5.png')] bg-no-repeat bg-center bg-contain">
          20% <br /> تخفیف
        </span>
      </div>
    </>
  );
};

export default LBestCourseCard;
