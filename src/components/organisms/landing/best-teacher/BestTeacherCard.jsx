import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import teacherImg from "../../../../assets/images/landing/best-teacher/Group 3.png";

const BestTeacherCard = ({ detail }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("teacherList");

  const handleNavigate = () => {
    navigate(`/teacher-detail/${detail?.teacherId}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="w-[296px] flex flex-col gap-4 cursor-pointer group"
    >
      {/* Teacher Image */}
      <div className="overflow-hidden rounded-[30px]">
        <img
          src={teacherImg}
          alt={detail?.fullName}
          className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Teacher Info */}
      <div className="text-right text-textC space-y-2">
        <h2 className="text-[36px] font-extrabold leading-none">
        دکتر بحرالعلوم  {detail?.fullName}
        </h2>

        <p className="text-[28px] font-normal">
          طراحی وب سایت
        </p>

        <p className="text-[24px] font-medium">
          {t("Card.number")} {detail?.courseCounts} {t("Card.course")}
        </p>
      </div>
    </div>
  );
};

export default BestTeacherCard;