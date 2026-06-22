import React from "react";
import Biography from "../../components/templates/teacher-details/biography/Biography";
import SectionTitle from "../../components/molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";

const TeacherDetails = () => {
    const { t } = useTranslation("teacherDetail");
  return (
    <div>
      <Biography />
      <div className="mt-12">
        <SectionTitle width="w-75" title={t("title")} />
      </div>
    </div>
  );
};

export default TeacherDetails;
