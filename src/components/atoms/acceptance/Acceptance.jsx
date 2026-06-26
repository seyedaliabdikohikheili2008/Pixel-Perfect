import React from "react";
import StarRating from "./starrating/StarRating"; 
import { useTranslation } from "react-i18next";

const Acceptance = ({ courseData , data}) => {
 const rating = courseData?.courseRate || data?.newsRate?.avg || 0;
 if (!rating && !data && !courseData) return null;
const { t } = useTranslation("courseDetail");
  return (
    <div className="bg-background w-full p-5 rounded-2xl shadow-2xl">
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-[18px] text-right text-textC px-5">{t("sidebar.acceptance")}</h1>
        
        <div className="flex items-center justify-between px-5">
          <StarRating rating={Number(rating).toFixed(2)} />
          <span className="font-normal text-[16px] text-[#848484] text-lg">
            {Number(rating).toFixed(2)} {t("sidebar.rate")} 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Acceptance;
