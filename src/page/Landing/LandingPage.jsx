import React from "react";
import Header from "../../components/organisms/header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import LandingHeroSection from "../../components/templates/landing/LandingHeroSection";
import NewCourse from "../../components/templates/landing/NewCourse";
import LandingBestTeacher from "../../components/templates/landing/LandingBestTeacher";
import LandingAboutMe from "../../components/templates/landing/LandingAboutMe";
import Roadmap from "../../components/templates/landing/RoadMap";
import LandingBestCourse from "../../components/templates/landing/LandingBestCourse";
import PopularCtegory from "../../components/templates/landing/PopularCtegory";
import LandingNewNews from "../../components/templates/landing/LandingNewNews";
import { isAuthenticated } from "../../core/utils/auth/IsAuthenticated";
import { useAllCourses } from "../../core/hooks/queries/courses/useAllCoures";
import { useCourseTop } from "../../core/hooks/queries/courses/useCourseTop";
import { useAllTechnologies } from "../../core/hooks/queries/technologies/useAllTechnologies";
import { useAllNews } from "../../core/hooks/queries/news/useAllNews";
import Error from "../../components/atoms/error/Error";

const LandingPage = () => {
  const CourseParams = {
    PageNumber: 1,
    RowsOfPage: 100,
  };
  const { isError: courseListErr, error: courseListError } =
    useAllCourses(CourseParams);
  const CourseTopParams = {
    Count: 6,
  };
  const { isError: CourseTopListErr, error: CourseTopListError } =
    useCourseTop(CourseTopParams);
  const { isError: TechnologyListErr, error: TechnologyListError } =
    useAllTechnologies();
  const { isError: NewsListErr, error: NewsListError } = useAllNews();
  const serverDown =
    NewsListError?.message === "Network Error" &&
    TechnologyListError?.message === "Network Error" &&
    CourseTopListError?.message === "Network Error" &&
    courseListError?.message === "Network Error";

  console.log(serverDown);
  return (
    <>
      {serverDown ? (
        <div className="my-100 mx-auto">
          <Error />
        </div>
      ) : (
        <>
          <LandingHeroSection />
          <NewCourse />
          <LandingBestTeacher />
          <LandingAboutMe />
          <Roadmap />
          <LandingBestCourse />
          <PopularCtegory />
          <LandingNewNews />
        </>
      )}
    </>
  );
};

export default LandingPage;
