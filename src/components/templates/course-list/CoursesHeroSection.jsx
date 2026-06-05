import React from "react";
import TitleDesc from "../../molecules/title-desc/TitleDesc";
import heroImg from "../../../assets/images/courses/hero-section/c19ee31dd14b93b01aac9ea5fd5518ca382a41fb.png";
import icon from "../../../assets/images/icons/courses/command-line.png";

const CoursesHeroSection = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-center gap-3 w-5/6 my-12 mx-auto">
        <div className="w-11/12 lg:w-1/2">
          <TitleDesc
            width="w-110"
            desc={
              "آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. "
            }
            title={"اموزش برنامه نویسی با بهترین ها"}
          />
        </div>
        <div className="w-11/12 lg:w-1/2 relative">
          <img src={heroImg} alt="" />
          <div className="hidden lg:w-18 xl:w-22 lg:h-18 xl:h-22 absolute -bottom-1 -left-3 bg-primary-300 rounded-3xl lg:flex justify-center items-center">
            <img className="w-5 h-5 xl:w-7.5 xl:h-7.5" src={icon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesHeroSection;
