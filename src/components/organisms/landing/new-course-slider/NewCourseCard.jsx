import React from "react";
import Button from "../../../atoms/Butoon/Button";
import cardimg from "../../../../assets/images/landing/new-course-slider/Vector.png";
import credit from "../../../../assets/images/icons/courses/credit-card.png";
import { useTranslation } from "react-i18next";

const NewCourseCard = ({ detail }) => {
  const { t } = useTranslation("landing");
  return (
    <>
      <div className="flex justify-between w-full gap-5 ">
        <img src={cardimg} alt="" />
        <div className="flex w-2/3 flex-col items-end gap-5">
          <div className="text-right w-full flex flex-col gap-5">
            <h3 className="text-xl font-bold text-textC">{detail?.title}</h3>
            <p className="text-sm text-textC font-bold line-clamp-2">
              {/* Node.js یک پلتفرم قدرتمند برای توسعهٔ برنامههای سرور با استفاده از
              جاوااسکریپت است. با استفاده از Node.js، میتوانید اپلیکیشنهای سریع
              و مقیاسپذیر بسازید. یادگیری آن آسان است، بهخصوص اگر با جاوااسکریپت
              آشنا باشید. */}
              {detail?.describe}
            </p>
            <div className="flex gap-13">
              <div className="relative">
                <div className="bg-danger-100 flex items-center justify-center text-danger-600 line-through text-base font-bold w-32 h-10 rounded-r-full">
                  50000 تومان
                </div>
                <div className="absolute flex justify-center items-center text-xl font-bold text-danger-500 -top-1 -left-10 w-13 h-13 rounded-full bg-white border border-primary-900">
                  10%
                </div>
              </div>
              <div className="bg-saccess-100 flex items-center justify-center text-saccess-700 text-base font-bold w-32 h-10 rounded-full">
                40.000 تومان
              </div>
            </div>
          </div>
          <Button
            children={t("NewCourseSection.button")}
            iconSrc={credit}
            buttonClassName="rounded-full w-42 text-nowrap"
          />
        </div>
      </div>
    </>
  );
};

export default NewCourseCard;
