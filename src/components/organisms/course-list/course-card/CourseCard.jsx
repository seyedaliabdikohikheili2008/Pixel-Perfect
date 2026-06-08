import React from "react";
import Img from "../../../../assets/images/courses/course-card/38bdd9e8afe89a72aeaf82a4cb63301c8ca9bb7b.jpg";
import star from "../../../../assets/images/icons/courses/star.png";
import Button from "../../../atoms/Butoon/Button";
import teaching from "../../../../assets/images/icons/courses/teaching.png";
import student from "../../../../assets/images/icons/landing/student-card.png";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const CourseCard = ({ cardView2, detail }) => {
  const { t } = useTranslation("courses");

  const renderStars = (count) => {
    const arr = Array.from({ length: 5 });
    arr.map((_, index) => {
      if (index < count) {
        arr.push(<FaStar key={index} className="text-warning-500 w-4 h-4" />);
      } else {
        arr.push(
          <FaRegStar key={index} className="text-warning-500 w-4 h-4" />,
        );
      }
    });
    return arr;
  };

  return (
    <>
      <div
        className={`${cardView2 ? "w-full flex-row items-center p-4 gap-5 shadow-2xl h-75 bg-background rounded-4xl" : "w-70 flex-col"}  flex `}
      >
        <img
          className={`${cardView2 ? "w-2/5 h-5/6 rounded-[100px]" : "w-full h-60 rounded-t-[20px]"}  overflow-hidden object-cover object-center`}
          src={detail?.imageAddress || Img}
          alt=""
        />
        <div
          className={`${cardView2 ? "w-3/5 h-full" : "w-full h-55.5  bg-background shadow-2xl -translate-y-10"} flex flex-col justify-between px-3 py-6 rounded-2xl`}
        >
          <h2
            className={`${cardView2 ? "text-xl" : "text-base"} text-textC font-bold text-right`}
          >
            {detail?.title}
          </h2>
          <p
            className={`${cardView2 ? "line-clamp-4" : "line-clamp-2"} text-sm font-normal text-textC text-right`}
          >
            {detail?.describe}
          </p>
          <div className="flex items-center justify-between gap-0.5">
            <div className="flex gap-0.5">
              {renderStars(detail?.courseRate.avg)}
            </div>
            <Button
              children={detail?.teacherName}
              iconSrc={teaching}
              buttonClassName="h-8 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-neutral-100 p-2 rounded-lg gap-1 text-xs text-primary-400 items-center font-bold flex ">
              <img className="w-5 h-5" src={student} alt="" />
              {detail?.capacity}
            </div>
            <div className="flex font-bold gap-2 text-xs">
              {/* <span className="text-danger-300 before:w-full before:absolute relative before:-rotate-12 before:top-2 before:h-px before:bg-danger-300">
                500.000 تومان
              </span> */}
              <span className="text-saccess-500">
                {detail?.cost} {t("price")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
