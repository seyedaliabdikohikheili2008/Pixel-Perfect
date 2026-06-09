import React from "react";
import SectionTitle from "../../../molecules/section-title/SectionTitle";
import { useTranslation } from "react-i18next";

const TeacherListContentToping = () => {
  const { t } = useTranslation("teacherList");
  return (
    <>
      <div className="w-160 hidden lg:block mb-4">
        <SectionTitle
          width="w-50"
          title={t("Toping.title")}
          desc={t("Toping.describe")}
        />
      </div>
    </>
  );
};

export default TeacherListContentToping;
