import React from "react";
import Logo from "../../atoms/Logo/Logo";
import samandehi from "../../../assets/images/icons/samandehi-logo/samandehi.png";
import copyright from "../../../assets/images/icons/copyright/copyright.png";
import instagram from "../../../assets/images/icons/social medias/instagram.png"
import whatsapp from "../../../assets/images/icons/social medias/whatsapp.png"
import linkdin from "../../../assets/images/icons/social medias/linkdin.png"
import facebook from "../../../assets/images/icons/social medias/facebook.png"
import twitter from "../../../assets/images/icons/social medias/twitter.png"
const Footer = () => {
  return (
    <>
      <div className=" w-[450px] h-183.5 flex flex-col  md:w-full md:h-117  bg-neutral-50 dark:bg-dark-bg-2 rounded-tl-[40px] rounded-tr-[40px]">
        <div className="w-9/10 h-71.25 mt-20 m-auto flex-col flex items-center gap-10 md:justify-between md:flex-row">
          <div className="w-71 flex flex-col items-center gap-6.25 h-53.75">
            <Logo variant={"linear"} className={""} responsive="true" />
            <p className="font-sans font-normal text-xs leading-normal text-right">
              گروه بازرگانی آهن یک با بیش از یک دهه سابقه ، با نگاهی متفاوت
              پاسخگوی نیاز تمامی مشتریان در زمینه تامین و توزیع انواع مقاطع و
              ورق فولادی ، اتصالات ، شیرآلات صنعتی و سایر تجهیزات در صنایع نفت و
              گاز و پتروشیمی ، ساختمانی و آبرسانی با دو شعبه فعال در بازار آهن
              شاد آباد و پونک ، به دو صورت آنلاین و حضوری ، امکان تامین کالاهای
              مورد نیاز صنایع مطابق با استاندارد های روز دنیا را فراهم نموده
              است.
            </p>
          </div>
          <div className="flex gap-8">
            <div className=" hidden md:w-42.75 md:h-71.25 text-neutral-600 md:flex flex-col gap-2 ">
              <h1 className="font-sans font-semibold text-textC text-right leading-5 dark:text-white">
                لینک های مفید
              </h1>
              <div className="w-7.5 h-1 bg-primary-500"></div>
              <p className="font-medium text-[16px] text-right leading-7">
                ارزش های ما
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                هیئت مشاوران ما
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                شرکای ما
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                شریک شدن
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                در Future Learn کار کنید
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                Quizlet Plus
              </p>
            </div>
            <div className=" hidden md:w-42.75 md:h-71.25 text-neutral-600 md:flex flex-col gap-2 ">
              <h1 className="font-sans font-semibold text-textC text-right leading-5 dark:text-white">
                شرکت ما
              </h1>
              <div className="w-7.5 h-1 bg-primary-500"></div>
              <p className="font-medium text-[16px] text-right leading-7">
                با ما تماس بگیرید
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                معلم شوید
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                وبلاگ
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                مربی
              </p>
              <p className="font-medium text-[16px] text-right leading-7">
                مناسبت ها
              </p>
            </div>
            <div className="w-62.75 h-31.75 text-neutral-600 flex flex-col gap-2 ">
              <h1 className="font-sans font-semibold text-textC text-right leading-5 dark:text-white">
                در تماس باشید
              </h1>
              <div className="w-7.5 h-1 bg-primary-500"></div>
              <p className="font-normal text-[16px] text-right leading-7">
                هنگامی که یک چاپگر ناشناس گرفت نوع گالی و درهم
              </p>
            </div>
          </div>
          <div className="md:w-27.75 md:h-27.75">
            <img src={samandehi} alt="logo samandehi.ir" />
          </div>
        </div>
        <div className="w-64 mb-10 md:w-300 mx-auto h-14 rounded-2xl bg-dark-300 flex items-center justify-between">
            <div className=" hidden md:w-101 md:h-5 md:flex items-center gap-2.5 px-1">
                <img src={copyright} alt="copyright" />
                <p className="font-sans font-normal text-[12px] text-right text-white">تمام حقوق مادی و معنوی این طراحی متعلق به امیر محمد خیرابادی میباشد</p>
            </div>
            <div className="flex items-center gap-4 px-2">
                <img src={linkdin} alt="linkdin" />
                <img src={whatsapp} alt="whatsapp" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
