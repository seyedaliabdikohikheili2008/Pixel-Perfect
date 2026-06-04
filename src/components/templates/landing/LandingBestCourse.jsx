import React, { useMemo, useState } from "react";
import ImgBg from "../../../assets/images/landing/landing-best-course/Union.png";
import ImgBgDark from "../../../assets/images/landing/landing-best-course/UnionDark.png";
import { useSelector } from "react-redux";
import LBestCourseCard from "../../organisms/landing/best-course/LBestCourseCard";
import Button from "../../atoms/Butoon/Button";
import TitleDesc from "../../molecules/title-desc/TitleDesc";
import { useAllCourses } from "../../../core/hooks/queries/courses/useAllCoures";
const LandingBestCourse = () => {
  const mode = useSelector((state) => state.DarkFlag.value);

  const [params, setparams] = useState({
    PageNumber: 1,
    RowsOfPage: 9,
  });
  const {
    data: courseList = undefined,
    isError: courseListErr,
    isLoading: courseListLoading,
  } = useAllCourses(params);

  const bestCourse = useMemo(() => {
    if (courseList) {
      return [...courseList.data.courseFilterDtos]
        .sort((a, b) => b.courseRate.avg - a.courseRate.avg)
        .slice(0, 6);
    }
  }, [courseList]);

  return (
    <>
      <div className="flex gap-10 w-full pt-50 pb-25 [@media(max-width:840px)]:hidden flex-col items-center mb-24 relative">
        {console.log(bestCourse)}
        <img
          className="w-full h-full absolute right-0 top-0 z-0"
          src={mode == "light" ? ImgBg : ImgBgDark}
          alt=""
        />
        <TitleDesc
          titleclassName="z-10"
          width="w-75"
          title={" برترین دوره ها"}
        />
        <div className="z-10 w-11/12 justify-between flex flex-wrap ">
          {bestCourse?.map((item, index) => {
            return (
              <LBestCourseCard key={item.courseId + item.title} detail={item} />
            );
          })}
          {/* <LBestCourseCard />
          <LBestCourseCard />
          <LBestCourseCard />
          <LBestCourseCard />
          <LBestCourseCard />
          <LBestCourseCard /> */}
        </div>
        <Button
          children={"دوست داری ببیشتر ببینی"}
          buttonClassName="rounded-full z-10 translate-x-60"
        />
      </div>
    </>
  );
};

export default LandingBestCourse;
