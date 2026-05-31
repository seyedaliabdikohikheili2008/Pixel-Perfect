import React from "react";
import ImgBg from "../../../assets/images/landing/landing-best-course/Union.png";
import ImgBgDark from "../../../assets/images/landing/landing-best-course/UnionDark.png";
import { useSelector } from "react-redux";
import LBestCourseCard from "../../organisms/landing/best-course/LBestCourseCard";
import Button from "../../atoms/Butoon/Button";
const LandingBestCourse = () => {
  const mode = useSelector((state) => state.DarkFlag.value);

  return (
    <>
      <div className="flex gap-10 w-full pt-50 pb-25 [@media(max-width:840px)]:hidden flex-col items-center mb-24 relative">
        <img
          className="w-full h-full absolute right-0 top-0 z-0"
          src={mode == "light" ? ImgBg : ImgBgDark}
          alt=""
        />
        <h2 className="w-75 z-10 py-3.5 text-3xl font-bold bg-[url('/text-line/line-6.png')] text-textC bg-no-repeat bg-bottom-right bg-auto">
          برترین دوره ها
        </h2>
        <div className="z-10 w-11/12 justify-between flex flex-wrap ">
            <LBestCourseCard />
            <LBestCourseCard />
            <LBestCourseCard />
            <LBestCourseCard />
            <LBestCourseCard />
            <LBestCourseCard />
        </div>
        <Button children={"دوست داری ببیشتر ببینی"} buttonClassName="rounded-full z-10 translate-x-60" />
      </div>
    </>
  );
};

export default LandingBestCourse;
