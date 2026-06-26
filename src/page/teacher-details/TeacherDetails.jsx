import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetTeacherDetail } from "../../core/services/teacher-details/getTeacherDetail";
import Biography from "../../components/templates/teacher-details/biography/Biography";
import SectionTitle from "../../components/molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";
import Loading from "../../components/atoms/loading/Loading";
import FallbackImage from "../../components/atoms/image/FallbackImage";
import CourseListPagination from "../../components/organisms/course-list/pagination/CourseListPagination";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/atoms/Butoon/Button"
const TeacherDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation("teacherDetail");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("PageNumber") || 1);
  const rows = Number(searchParams.get("RowsOfPage") || 4);

  const { data, isLoading, error } = useQuery({
    queryKey: ["teacher-detail", id],
    queryFn: () => GetTeacherDetail(id),
    enabled: !!id,
    staleTime: 0,
  });

  if (isLoading)
    return (
      <div className="m-auto h-150 flex items-center">
        <Loading />
      </div>
    );
  if (error)
    return <div className="font-bold text-danger-500">خطایی رخ داده است.</div>;

  const teacherData = data?.data;
  const hasCourses = teacherData?.courses?.length > 0;

  const startIndex = (page - 1) * rows;
  const currentCourses = teacherData?.courses?.slice(startIndex, startIndex + rows) || [];

  return (
    <div className="pb-10">
      <Biography teacherData={teacherData} />
      {hasCourses && (
        <div className="mt-12">
          <SectionTitle width="w-75" title={t("title")} />
          <div className="w-9/10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8">
            {currentCourses.map((course) => (
              <div
                className="w-70 mx-auto flex flex-col cursor-pointer"
                key={course?.CourseId}
              >
                <FallbackImage
                  src={course?.imageAddress}
                  alt="course-image"
                  className="w-full h-60 rounded-t-[20px] overflow-hidden object-cover object-center"
                />
                <div className="w-full h-35 bg-background shadow-2xl -translate-y-10 flex flex-col justify-between px-3 py-6 rounded-2xl">
                  <h2 className="text-base text-textC font-bold text-right">
                    {course?.title}
                  </h2>
                  <Button children={"مشاهده دوره"}  onClick={() => navigate(`/course-detail/${course?.courseId}`)} buttonClassName="" />
                </div>
                
              </div>
            ))}
          </div>

          <CourseListPagination totalCount={teacherData?.courses?.length || 0} />
        </div>
      )}
    </div>
  );
};

export default TeacherDetails;
