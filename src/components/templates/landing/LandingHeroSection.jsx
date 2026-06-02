import React from "react";
import Button from "../../atoms/Butoon/Button";
import img1 from "../../../assets/images/landing/herosection/1.png";
import img2 from "../../../assets/images/landing/herosection/2.png";
import img3 from "../../../assets/images/landing/herosection/3.png";
import img4 from "../../../assets/images/landing/herosection/4.png";
import img5 from "../../../assets/images/landing/herosection/5.png";
const LandingHeroSection = () => {
  return (
    <>
      <div className="w-full my-24 flex gap-5 flex-col">
        <div className="text-textC xl:w-1/2 lg:w-2/3 md:w-11/12 w-2/3 mx-auto flex flex-col items-center gap-5">
          <h1 className="md:text-5xl mb-5 text-2xl text-nowrap font-bold">
            آموزش{" "}
            <span className="bg-primary-300 mx-2 text-white p-2 rounded-[40px]">
              برنامه‌نویسی
            </span>{" "}
            آنلاین آسان
          </h1>
          <h3 className="text-textC md:text-5xl mb-8 font-normal text-2xl">
            سریع و همیشه همراه شما
          </h3>
          <h5 className="text-neutral-800 mb-4 md:text-lg text-base">
            در وب‌سایت ما می‌توانید دوره‌ها و کلاس‌هایی را پیدا کنید که به شما
            کمک می‌کنند مهارت بیاموزید پیشرفت کنید و در مسیر رشد شخصی و حرفه‌ای
            سرزنده بمانید.
          </h5>
          <Button children={"اموزش رو شروع کنیم"} buttonClassName="w-62 rounded-full text-xl" />
        </div>
        <div className="flex [@media(max-width:1200px)]:justify-evenly items-center gap-4 sm:gap-0 flex-col sm:flex-row w-11/12 justify-between sm:items-end mx-auto">
          <img className="[@media(max-width:1200px)]:hidden object-contain" src={img1} alt="img" />
          <img className="object-contain" src={img2} alt="img" />
          <img className="[@media(max-width:1450px)]:hidden object-contain" src={img3} alt="img" />
          <img className="object-contain" src={img4} alt="img" />
          <img className="[@media(max-width:1200px)]:hidden object-contain" src={img5} alt="img" />
        </div>
      </div>
    </>
  );
};

export default LandingHeroSection;
