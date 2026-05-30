import React from "react";
import Button from "../../../atoms/Butoon/Button";
import textIcon from "../../../../assets/images/icons/landing/btn-icon.png"
import textIcon2 from "../../../../assets/images/icons/landing/btn-icon2.png"
const LandingAboutMeLeft = () => {
  return (
    <>
      <div className="w-full lg:w-3/5 flex flex-col gap-2.5 text-right items-center">
        <h1 className="text-textC text-3xl font-black w-full">چرا به یک جامعه‌ی یادگیرندگان مادام‌العمر نیاز داریم؟</h1>
        <p className="text-neutral-600 font-normal text-lg">
          زیرا برنامه‌نویسی فقط یک مهارت فنی نیست؛ راهی است برای تقویت تفکر
          منطقی، حل مسئله و ساختن آینده‌ای روشن‌تر. با همراهی یک جامعه فعال و
          پشتیبان، می‌توانی بر چالش‌ها مسلط شوی و مسیر رشد خود را با اعتماد
          بیشتری طی کنی.
        </p>
        <h3 className="flex items-center w-full gap-2 text-lg font-bold text-textC">
          <img className="w-10" src={textIcon} alt="" />
          رهبرِ مؤثرِ آینده باش
        </h3>
        <p className="text-neutral-600 text-lg">
          کلاس‌های برنامه‌نویسی ما طوری طراحی شده‌اند که بتوانی در هر سطحی که
          هستی، مهارت‌هایی واقعی و کاربردی کسب کنی. یاد می‌گیری چگونه بر
          ایده‌هایت مسلط شوی، پروژه بسازی و قدم‌به‌قدم آینده شغلی‌ات را متحول
          کنی.
        </p>
        <h3 className="flex items-center w-full gap-2 text-lg font-bold text-textC">
          <img className="w-10" src={textIcon2} alt="" />
          مسیر پیشرفت شفاف و قابل اندازه‌گیری
        </h3>
        <p className="text-neutral-600 text-lg">
          در هر مرحله می‌توانی رشد خود را ببینی، پروژه‌هایت را توسعه دهی و نتایج
          واقعی به دست بیاوری. هدف ما این است که تو نه فقط برنامه‌نویسی، بلکه
          طرز فکر یک سازنده و خالق را به دست بیاوری.
        </p>
        <Button buttonClassName="mt-5" children={"درباره سفر ما بیشتر بدانید"} />
      </div>
    </>
  );
};

export default LandingAboutMeLeft;
