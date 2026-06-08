import React, { useEffect, useMemo, useState } from "react";
import NewsCard from "../../../../organisms/news/news-card/NewsCard";
import CourseListToping from "../../../course-list/course-list-content/CourseListToping";
import CourseListPagination from "../../../../organisms/course-list/pagination/CourseListPagination";
import { useSearchParams } from "react-router-dom";
import { useAllNews } from "../../../../../core/hooks/queries/news/useAllNews";

const NewsListContent = () => {
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
      SortType: obj.SortType || "desc",
      SortingCol: obj.SortingCol || "currentView",
      Query: obj.Query || "",
      PageNumber: Number(obj.PageNumber || 1),
      NewsCategoryId: obj.NewsCategoryId || "",
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
    data: NewsList = undefined,
    isError: NewsListErr,
    isLoading: NewsListLoading,
  } = useAllNews(params);

  return (
    <>
      <div className="w-11/12 md:w-4/5 flex flex-col items-center gap-10">
        <CourseListToping
          news={true}
          cardView2={cardView2}
          setcardView2={setcardView2}
        />
        <div
          className={`w-full [@media(max-width:1340px)]:justify-evenly flex ${cardView2 ? "flex-col gap-10" : "flex-row justify-between gap-3 flex-wrap"}`}
        >
          {NewsList?.data?.news.map((item, index) => {
            return <NewsCard cardView2={cardView2} detail={item} key={index} />;
          })}
        </div>
        <CourseListPagination totalCount={NewsList?.data?.totalCount} />
      </div>
    </>
  );
};

export default NewsListContent;
