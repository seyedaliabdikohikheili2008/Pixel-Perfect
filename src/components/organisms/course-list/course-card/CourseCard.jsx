import React from "react";
import Img from "../../../../assets/images/courses/course-card/38bdd9e8afe89a72aeaf82a4cb63301c8ca9bb7b.jpg";
import star from "../../../../assets/images/icons/courses/star.png";
import Button from "../../../atoms/Butoon/Button";
import teaching from "../../../../assets/images/icons/courses/teaching.png";
import student from "../../../../assets/images/icons/landing/student-card.png";
const CourseCard = ({ cardView2 }) => {
  const renderStars = (count) => {
    if (0 <= count <= 5) {
      return Array.from({ length: count }, (item, index) => (
        <img key={index} src={star} alt="star" className="w-4 h-4" />
      ));
    }
  };

  return (
    <>
      <div
        className={`${cardView2 ? "w-full flex-row items-center p-4 gap-5 shadow-2xl h-75 bg-background rounded-4xl" : "w-70 flex-col"}  flex `}
      >
        <img
          className={`${cardView2 ? "w-2/5 h-5/6 rounded-[100px]" : "w-full h-60 rounded-t-[20px]"}  overflow-hidden object-cover object-center`}
          src={Img}
          alt=""
        />
        <div
          className={`${cardView2 ? "w-3/5 h-full" : "w-full h-55.5  bg-background shadow-2xl -translate-y-10"} flex flex-col justify-between px-3 py-6 rounded-2xl`}
        >
          <h2
            className={`${cardView2 ? "text-xl" : "text-base"} text-textC font-bold text-right`}
          >
            دوره آموزش جامع HTML5
          </h2>
          <p
            className={`${cardView2 ? "line-clamp-4" : "line-clamp-2"} text-sm font-normal text-textC text-right`}
          >
            Node.js یک پلتفرم قدرتمند برای توسعهٔ برنامههای سرور با استفاده از
            جاوااسکریپت است. با استفاده از Node.js، میتوانید اپلیکیشنهای سریع و
            مقیاسپذیر بسازید. یادگیری آن آسان است، بهخصوص اگر با جاوااسکریپت
            آشنا باشید.
          </p>
          <div className="flex items-center justify-between gap-0.5">
            <div className="flex gap-0.5">{renderStars(5)}</div>
            <Button
              children={"دکتر بحرالعلوم"}
              iconSrc={teaching}
              buttonClassName="h-8 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-neutral-100 p-2 rounded-lg gap-1 text-xs text-primary-400 items-center font-bold flex ">
              <img className="w-5 h-5" src={student} alt="" />
              22
            </div>
            <div className="flex font-bold gap-2 text-xs">
              <span className="text-danger-300 before:w-full before:absolute relative before:-rotate-12 before:top-2 before:h-px before:bg-danger-300">
                500.000 تومان
              </span>
              <span className="text-saccess-500">400.000 تومان</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
