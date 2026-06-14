import React from "react";
import top from "../../assets/images/contactUs/top.png";
import person from "../../assets/images/contactUs/person.png";
const ContactUsPage = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col items-center gap-10">
      <div className=" mt-12">
        <img src={top} alt="" />
        <div></div>
      </div>
      <div className="flex items-center flex-col w-11/12 m-auto gap-8 justify-between xl:flex-row">
        <img src={person} alt="" />
        <div className=" flex flex-col text-right gap-8">
          <h2 className="text-textC font-bold text-3xl">
            اکادمی بحر همیشه در کنار شما
          </h2>
          <p className="font-normal text-neutral-300 text-xl">
            آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور
            برای تحریک ذهنیت خلاق در طول فرآیند آموزشآشنایی با پشته ای تکنولوژیک
            از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول
            فرآیند آموزشآشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی
            عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزشآشنایی با پشته ای
            تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت
            خلاق در طول فرآیند آموزش=
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-5/6 xl:w-2/3 m-auto bg-background rounded-2xl shadow-2xl p-12">
        <div className="text-right flex flex-col gap-2">
          <h1 className="font-semibold text-textC text-2xl sm:text-[30px] text-nowrap">
            برای ما پیام ارسال کنید
          </h1>
          <p className="font-normal hidden text-[16px] xl:block text-neutral-300">
            آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="متن پیام"
              className="w-full pb-50 p-2 rounded-xl bg-neutral-50 border border-solid border-[#E1E4E7]"
            />
          </div>
          <div className="flex flex-col gap-3 items-center md:flex-row md:justify-between">
            <input
              type="text"
              placeholder="نام *"
              className=" w-11/12 rounded-xl xl:w-3/10 bg-neutral-50 border border-solid border-[#E1E4E7] p-2"
            />
            <input
              type="text"
              placeholder="پست الکترونیک *"
              className="w-11/12 xl:w-3/10 rounded-xl bg-neutral-50 border border-solid border-[#E1E4E7] p-2"
            />
            <input
              type="text"
              placeholder="سایت اینترنتی *"
              className="w-11/12 xl:w-3/10 rounded-xl bg-neutral-50 border border-solid border-[#E1E4E7] p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
