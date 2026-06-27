import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMyFavoriteCourse } from "../../../../core/hooks/queries/user-panel/dashboard/useMyFavoriteCourse";
import { LiaSearchSolid } from "react-icons/lia";
import Input from "../../../atoms/Input/Input";
import Loading from "../../../atoms/loading/Loading";
import NotFound from "../../../atoms/not-found/NotFound";
import TeacherListPagination from "../../teacher-list/teacher-list-content/TeacherListPagination";
import Search from "../../../../core/utils/search/Search";
import Button from "../../../atoms/Butoon/Button";
import { RxCross1 } from "react-icons/rx";
import { useMyCourse } from "../../../../core/hooks/queries/user-panel/dashboard/useMyCourse";
import { useSearchParams } from "react-router-dom";
import CourseListPagination from "../../../organisms/course-list/pagination/CourseListPagination";
import FallbackImage from "../../../atoms/image/FallbackImage";

const MyCourse = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    const obj = Object.fromEntries([...searchParams]);
    const getPath = {
      RowsOfPage: Number(obj.RowsOfPage || 4),
      SortType: obj.SortType || "LastUpdate",
      SortingCol: obj.SortingCol || "desc",
      Query: obj.Query || "",
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
    data: MyCourse = undefined,
    isError: MyCourseErr,
    isLoading: MyCourseLoading,
  } = useMyCourse(params);

  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">دوره های من</h2>
        <div className="w-full min-h-137 p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="w-full flex flex-col gap-4">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-10 w-full px-4 py-3 text-xs font-semibold text-neutral-500 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="col-span-2">تصویر</div>
              <div className="col-span-2">نام دوره</div>
              <div className="col-span-2">توضیحات</div>
              <div className="col-span-2">وضعیت</div>
              <div className="col-span-2 text-left pl-10">عملیات</div>
            </div>

            <div className="flex flex-col gap-3">
              {MyCourse?.data?.listOfMyCourses?.map((item, index) => (
                <div
                  key={index}
                  className="w-full border border-neutral-200 rounded-2xl p-4 bg-background hover:shadow-md transition"
                >
                  <div className="hidden md:grid grid-cols-10 items-center gap-4">
                    <div className="col-span-2">
                      <FallbackImage
                        src={item?.tumbImageAddress}
                        alt={item?.courseTitle}
                        className="w-20 h-14 rounded-xl object-cover"
                      />
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <h3 className="text-sm font-semibold text-textC line-clamp-1">
                        {item?.courseTitle}
                      </h3>
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <p className="text-xs text-neutral-500 line-clamp-2">
                        {item?.desc}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs border ${
                          item?.paymentStatus == "پرداخت نشده"
                            ? "bg-danger-50 border-danger-500 text-danger-500"
                            : "bg-saccess-50 border-saccess-700 text-saccess-700"
                        }`}
                      >
                        {item?.paymentStatus}
                      </span>
                    </div>
                    <div className="col-span-2 flex justify-end items-center gap-3">
                      <Button
                        onClick={() =>
                          navigate(`/course-detail/${item.course.courseId}`)
                        }
                        buttonClassName="h-10 text-sm text-nowrap"
                      >
                        مشاهده دوره
                      </Button>
                    </div>
                  </div>
                  <div className="md:hidden flex flex-col gap-4">
                    <div className="flex gap-3">
                      <FallbackImage
                        src={item?.tumbImageAddress}
                        alt={item?.courseTitle}
                        className="w-30 h-20 rounded-xl object-cover"
                      />
                      <div className="flex-1 flex flex-col items-center justify-center gap-1">
                        <h3 className="text-sm font-semibold text-textC line-clamp-1">
                          {item?.courseTitle}
                        </h3>
                      </div>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                      <p className="text-xs text-neutral-500 line-clamp-2">
                        {item?.desc}
                      </p>
                    </div>
                    <div className="flex-1 flex">
                      <span
                        className={`px-3 py-1 inline-flex flex-1 justify-center rounded-full text-xs border ${
                          item?.paymentStatus == "پرداخت نشده"
                            ? "bg-danger-50 border-danger-500 text-danger-500"
                            : "bg-saccess-50 border-saccess-700 text-saccess-700"
                        }`}
                      >
                        {item?.paymentStatus}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={() =>
                          navigate(`/course-detail/${item.course.courseId}`)
                        }
                        buttonClassName="h-10 flex-1 text-sm"
                      >
                        مشاهده دوره
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {MyCourseLoading && (
              <div className="py-6 flex justify-center">
                <Loading size={"text-3xl"} circleSize={"8"} />
              </div>
            )}

            {!MyCourseLoading && MyCourse?.data?.totalCount === 0 && (
              <div className="py-6 flex justify-center">
                <NotFound size={"text-xl"} />
              </div>
            )}
            {!MyCourse || MyCourseLoading ? (
              ""
            ) : (
              <div className="mx-auto">
                <CourseListPagination totalCount={MyCourse?.data?.totalCount} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
