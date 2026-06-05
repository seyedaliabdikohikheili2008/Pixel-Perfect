import React from "react";
import BestTeacherCard from "../../organisms/landing/best-teacher/BestTeacherCard";
import Button from "../../atoms/Butoon/Button";
import TitleDesc from "../../molecules/section-title/SectionTitle";

const LandingBestTeacher = () => {
  return (
    <>
      <div className="w-11/12 mb-24 flex flex-col gap-5 items-center mx-auto">
        <div className="w-1/2 flex flex-col items-center gap-2.5">
          <TitleDesc
            width="w-50"
            desc={
              "کلاس های مسترلایف توسط رهبران صنعت آموزش داده می شود که  هیجان زده هستند ابزارها، تکنیک ها و سفرهای حرفه ای خود را با شما به  اشتراک بگذارند."
            }
            title={"اساتید برتر"}
          />
        </div>
        <div className="w-full flex-wrap gap-5 mb-4 [@media(max-width:1370px)]:justify-evenly flex justify-between">
          <BestTeacherCard />
          <BestTeacherCard />
          <BestTeacherCard />
          <BestTeacherCard />
        </div>
        <Button
          children={"دوست داری ببیشتر ببینی"}
          buttonClassName="rounded-full"
        />
      </div>
    </>
  );
};

export default LandingBestTeacher;
