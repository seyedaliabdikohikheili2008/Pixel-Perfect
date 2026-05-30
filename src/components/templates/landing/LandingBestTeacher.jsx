import React from "react";
import BestTeacherCard from "../../organisms/landing/best-teacher/BestTeacherCard";
import Button from "../../atoms/Butoon/Button";

const LandingBestTeacher = () => {
  return (
    <>
      <div className="w-11/12 mb-24 flex flex-col gap-5 items-center mx-auto">
        <div className="w-1/2 flex flex-col items-center gap-2.5">
          <h1 className="w-50 py-3.5 text-3xl font-bold bg-[url('/text-line/line-6.png')] text-textC bg-no-repeat bg-bottom-right bg-auto">
            اساتید برتر
          </h1>
          <h5 className="text-base font-medium text-neutral-500">
            کلاس های مسترلایف توسط رهبران صنعت آموزش داده می شود که هیجان زده
            هستند ابزارها، تکنیک ها و سفرهای حرفه ای خود را با شما به اشتراک
            بگذارند.
          </h5>
        </div>
        <div className="w-full flex-wrap gap-5 mb-4 [@media(max-width:1370px)]:justify-evenly flex justify-between">
            <BestTeacherCard />
            <BestTeacherCard />
            <BestTeacherCard />
            <BestTeacherCard />
        </div>
        <Button children={"دوست داری ببیشتر ببینی"} buttonClassName="rounded-full" />
      </div>
    </>
  );
};

export default LandingBestTeacher;
