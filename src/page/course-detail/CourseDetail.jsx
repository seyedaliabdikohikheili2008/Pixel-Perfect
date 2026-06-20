import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourseDetail } from "../../core/services/Course-detail/course-detail";
import Description from "../../components/templates/course-detail/Description/Description";
import CourseSideBar from "../../components/templates/course-detail/CourseSideBar/CourseSideBar";
import SectionTitle from "../../components/molecules/section-title/SectionTitle";
import { TopCourse } from "../../core/services/Course-detail/SimilarCourse/SimilarCourse";
import CourseCard from "../../components/organisms/course-list/course-card/CourseCard";
import { useTranslation } from "react-i18next";
import Loading from "../../components/atoms/loading/Loading";

const CourseDetail = () => {
  const { id } = useParams();
const { t } = useTranslation("courseDetail");
  const { data, isLoading, error } = useQuery({
    queryKey: ["course-detail", id],
    queryFn: () => getCourseDetail(id),
    enabled: !!id,
    staleTime: 0,
  });

  const { data: topCoursesData, isLoading: isTopLoading } = useQuery({
    queryKey: ["top-courses", 4],
    queryFn: () => TopCourse(4),
  });

  if (isLoading || isLoading) return <div className="m-auto h-500 flex items-center"><Loading/></div>;
  if (error) return <div>خطایی رخ داده است.</div>;

  const courseData = data?.data;
  return (
    <>
      <div className="w-11/12 flex-col flex gap-10 xl:flex-row md:flex-col justify-between m-auto py-10">
        <Description course={courseData} />
        <CourseSideBar course={courseData} />
      </div>

      
        <div className="w-11/12 mx-auto py-10">
          <SectionTitle width="w-75" title={t("similar")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-8">
    {isTopLoading ? (
      <Loading/>
    ) : (
      topCoursesData?.data?.map((detail) => (
        <CourseCard key={detail.CourseId} detail={detail}/>
      ))
    )}
  </div>
        </div>
    </>
  );
};

export default CourseDetail;
