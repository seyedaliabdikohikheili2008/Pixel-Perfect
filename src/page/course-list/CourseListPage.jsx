import React from "react";
import Header from "../../components/organisms/header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import CoursesHeroSection from "../../components/templates/course-list/CoursesHeroSection";
import CourseListContent from "../../components/templates/course-list/course-list-content/CourseListContent";

const CourseListPage = () => {
  return (
    <>
      <CoursesHeroSection />
      <CourseListContent />

    </>
  );
};

export default CourseListPage;
