import React from "react";
import Biography from "../../components/templates/teacher-details/biography/Biography";
import SectionTitle from "../../components/molecules/section-title/SectionTitle";

const TeacherDetails = () => {
  return (
    <div>
      <Biography />
      <div className="mt-12">
        <SectionTitle width="w-75" title={"دوره های استاد"} />
      </div>
    </div>
  );
};

export default TeacherDetails;
