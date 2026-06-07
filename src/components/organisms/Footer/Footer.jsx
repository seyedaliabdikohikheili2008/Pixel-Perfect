import React from "react";
import Logo from "../../atoms/Logo/Logo";
import samandehi from "../../../assets/images/icons/samandehi-logo/samandehi.png";
import Copyright from "../../molecules/footer/CopyrightFooter";
import ScrollToTopButton from "../../atoms/ScrollToTopButton/ScrollToTopButton";
const Footer = () => {
  return (
    <>
      <div className="after:content-[''] after:w-29 after:h-27 after:bg-rootBg after:absolute after:-top-4 after:rounded-2xl after:left-21.5 relative   flex flex-col w-full bg-neutral-50  rounded-tl-[40px] rounded-tr-[40px]">
        <ScrollToTopButton />
        <div className="w-11/12 h-71.25 mt-20 mb-10 m-auto flex-col flex items-center gap-10 md:justify-between md:flex-row">
          <div className="flex w-70 flex-col items-center gap-6.25 h-53.75">
            <Logo variant={"linear"} className={""} responsive="true" />
            <p className="font-sans font-normal text-neutral-600 text-xs leading-normal text-right">
              گروه بازرگانی آهن یک با بیش از یک دهه سابقه ، با نگاهی متفاوت
              پاسخگوی نیاز تمامی مشتریان در زمینه تامین و توزیع انواع مقاطع و
              ورق فولادی ، اتصالات ، شیرآلات صنعتی و سایر تجهیزات در صنایع نفت و
              گاز و پتروشیمی ، ساختمانی و آبرسانی با دو شعبه فعال در بازار آهن
              شاد آباد و پونک ، به دو صورت آنلاین و حضوری ، امکان تامین کالاهای
              مورد نیاز صنایع مطابق با استاندارد های روز دنیا را فراهم نموده
              است.
            </p>
          </div>

          <div className="hidden min-w-2/4 lg:flex gap-8">
            <div className=" hidden md:h-71.25 text-neutral-600 md:flex flex-col gap-2 ">
              <h1 className="font-sans font-semibold text-textC text-right leading-5">
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

            <div className=" hidden md:h-71.25 text-neutral-600 md:flex flex-col gap-2 ">

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
            <div className="h-31.75 text-neutral-600 flex flex-col gap-2 ">

              <h1 className="font-sans font-semibold text-textC text-right leading-5 dark:text-white">
                در تماس باشید
              </h1>
              <div className="w-7.5 h-1 bg-primary-500"></div>
              <p className="font-normal text-[16px] text-right leading-7">
                هنگامی که یک چاپگر ناشناس گرفت نوع گالی و درهم
              </p>
            </div>
          </div>
          <div className="min-w-27.75 h-27.75">
            <img className="w-full" src={samandehi} alt="logo samandehi.ir" />
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
