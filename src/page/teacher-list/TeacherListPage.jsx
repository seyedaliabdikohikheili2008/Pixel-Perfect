import React from "react";
import TeacherHeroSection from "../../components/templates/teacher-list/TeacherHeroSection";
import TeacherListContentToping from "../../components/templates/teacher-list/teacher-list-content/TeacherListContentToping";
import TeacherList from "../../components/templates/teacher-list/teacher-list-content/TeacherList";

const TeacherListPage = () => {
  return (
    <>
      <TeacherHeroSection />
      <div className="w-11/12 mx-auto flex flex-col items-center mb-24">
        <TeacherListContentToping />
        <TeacherList />
      </div>
    </>
  );
};

export default TeacherListPage;
