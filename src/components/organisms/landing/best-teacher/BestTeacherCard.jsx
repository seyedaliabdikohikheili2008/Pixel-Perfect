import React from "react";
import teacherImg from "../../../../assets/images/landing/best-teacher/Group 3.png";
import { useTranslation } from "react-i18next";
const BestTeacherCard = ({ detail }) => {
  const { t } = useTranslation("teacherList");
  return (
    <>
      <div className="w-74 flex flex-col gap-2">
        <img className="w-full h-95 object-cover" src={teacherImg} alt="" />
        <div className="w-full text-right text-textC">
          <h2 className="text-3xl font-bold">{detail?.fullName}</h2>
          <p className="text-2xl font-normal">طراحی وب سایت</p>
          <p className="text-xl">
            {t("Card.number")} {detail?.courseCounts} {t("Card.course")}
          </p>
        </div>
      </div>
    </>
  );
};

export default BestTeacherCard;
