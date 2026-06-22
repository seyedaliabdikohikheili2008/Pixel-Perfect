import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetTeacherDetail } from "../../core/services/teacher-details/getTeacherDetail";
import Biography from "../../components/templates/teacher-details/biography/Biography";
import SectionTitle from "../../components/molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";
import Loading from "../../components/atoms/loading/Loading";
import CourseCard from "../../components/organisms/course-list/course-card/CourseCard";

const TeacherDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation("teacherDetail");
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

  return (
    <div>
      <Biography teacherData={teacherData} />
      {hasCourses && (
        <div className="mt-12">
          <SectionTitle width="w-75" title={t("title")} />
          <div className="w-9/10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  mt-8">
            {teacherData.courses.map((course) => (
              <CourseCard
                key={course.courseId}
                detail={{
                  ...course,
                  courseRate: { avg: 0 },
                  cost: 0,
                  capacity: 0,
                  teacherName: teacherData.fullName,
                  describe: course.miniDescribe || "",
                }}
                cardView2={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDetails;
