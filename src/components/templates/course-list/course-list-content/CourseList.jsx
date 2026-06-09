import React, { useEffect, useMemo, useState } from "react";
import CourseListToping from "./CourseListToping";
import CourseCard from "../../../organisms/course-list/course-card/CourseCard";
import CourseListPagination from "../../../organisms/course-list/pagination/CourseListPagination";
import { useSearchParams } from "react-router-dom";
import { useAllCourses } from "../../../../core/hooks/queries/courses/useAllCoures";
import NotFound from "../../../atoms/not-found/NotFound";
import Loading from "../../../atoms/loading/Loading";

const CourseList = () => {
  const [cardView2, setcardView2] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [searchParams, setSearchParams] = useSearchParams();

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

  const params = useMemo(() => {
    const obj = Object.fromEntries([...searchParams]);
    const getPath = {
      RowsOfPage: Number(obj.RowsOfPage || 9),
      SortType: obj.SortType || "asc",
      SortingCol: obj.SortingCol || "cost",
      Query: obj.Query || "",
      CostDown: Number(obj.CostDown || 0),
      CostUp: Number(obj.CostUp || 10000000),
      TechCount: Number(obj.TechCount || 1),
      ListTech: obj.ListTech || "",
      courseLevelId: obj.courseLevelId || "",
      CourseTypeId: obj.CourseTypeId || "",
      StartDate: obj.StartDate || "",
      EndDate: obj.EndDate || "",
      TeacherId: obj.TeacherId || "",
      PageNumber: Number(obj.PageNumber || 1),
    };

    const cleaner = Object.fromEntries(
      Object.entries(getPath).filter(
        ([_, v]) => v !== "" && v !== null && v !== undefined,
      ),
    );

    return cleaner;
  }, [searchParams]);

  useEffect(() => {
    setSearchParams(params);
  }, []);

  const {
    data: CoursesList = undefined,
    isError: CoursesListErr,
    isLoading: CoursesListLoading,
  } = useAllCourses(params);

  return (
    <>
      <div className="w-11/12 md:w-4/5 flex flex-col items-center gap-10">
        <CourseListToping cardView2={cardView2} setcardView2={setcardView2} />
        <div
          className={`w-full [@media(max-width:1340px)]:justify-evenly flex ${cardView2 ? "flex-col gap-10" : "flex-row justify-between gap-3 flex-wrap"}`}
        >
          {CoursesListLoading ? <Loading /> : ""}
          {CoursesList?.data?.totalCount == 0 ? <NotFound /> : ""}
          {CoursesList?.data?.courseFilterDtos.map((item, index) => {
            return (
              <CourseCard cardView2={cardView2} detail={item} key={index} />
            );
          })}
        </div>
        <CourseListPagination totalCount={CoursesList?.data?.totalCount} />
      </div>
    </>
  );
};

export default CourseList;
