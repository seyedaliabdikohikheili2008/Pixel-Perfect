import React, { useMemo, useState } from "react";
import ImgBg from "../../../assets/images/landing/landing-best-course/Union.png";
import ImgBgDark from "../../../assets/images/landing/landing-best-course/UnionDark.png";
import { useSelector } from "react-redux";
import LBestCourseCard from "../../organisms/landing/best-course/LBestCourseCard";
import Button from "../../atoms/Butoon/Button";
import TitleDesc from "../../molecules/section-title/SectionTitle";
import { useCourseTop } from "../../../core/hooks/queries/courses/useCourseTop";
import { useTranslation } from "react-i18next";
import Loading from "../../atoms/loading/Loading";
import Error from "../../atoms/error/Error";
const LandingBestCourse = () => {
  const { t } = useTranslation("landing");

  const mode = useSelector((state) => state.DarkFlag.value);

  const [params, setparams] = useState({
    Count: 6,
  });
  const {
    data: CourseTopList = undefined,
    isError: CourseTopListErr,
    isLoading: CourseTopListLoading,
  } = useCourseTop(params);

  return (
    <>
      <div className="flex gap-10 w-full pt-50 pb-25 [@media(max-width:840px)]:hidden flex-col items-center mb-24 relative">
        <img
          className="w-full h-full absolute right-0 top-0 z-0"
          src={mode == "light" ? ImgBg : ImgBgDark}
          alt=""
        />
        <TitleDesc
          titleclassName="z-10"
          width="w-75"
          title={t("BestCourse.title")}
        />
        <div className="z-10 w-11/12 justify-between flex flex-wrap ">
          {CourseTopListLoading ? (
            <Loading circleSize={5} size={"text-2xl"} />
          ) : (
            ""
          )}
          {CourseTopListErr ? <Error size={"text-2xl"} /> :""}
          {CourseTopList?.data?.map((item, index) => {
            return (
              <LBestCourseCard
                key={item.courseId + item.title + index}
                detail={item}
              />
            );
          })}
        </div>
        <Button
          children={t("BestCourse.button")}
          buttonClassName="rounded-full z-10 translate-x-60"
        />
      </div>
    </>
  );
};

export default LandingBestCourse;
