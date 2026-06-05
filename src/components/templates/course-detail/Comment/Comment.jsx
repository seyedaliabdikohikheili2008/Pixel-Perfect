import React from "react";
import user from "../../../../assets/images/course-dtail/user.png";
const Comment = () => {
  return (
    <div className="w-full rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-background py-5">
      <div className="flex flex-col gap-5">
        <div className="flex items-center w-9/10 m-auto gap-2 p-5 border-b border-solid border-neutral-100">
          <img src={user} alt="" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-xl text-textC">امیر محمد</h1>
            <p className="font-bold text-md text-neutral-300">@amirKh</p>
          </div>
        </div>
        <div className="px-5 text-right pb-5">
          <p className="font-normal text-sm text-neutral-500 px-5">
            سلام عزیز. حدودا 9 روز دیگه (1 اردیبهشت) برای این دوره تخفیف خواهیم
            داشت. برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت و سوشال
            های سبزلرن رو دنبال کنین 👌❤️
          </p>
        </div>
      </div>
      <div className="flex flex-col w-9/10 m-auto gap-5 bg-neutral-50 rounded-2xl border-r-4 border-solid border-primary-300">
        <div className="flex items-center w-9/10 m-auto gap-2 p-5 border-b border-solid border-neutral-100">
          <img src={user} alt="" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-xl text-textC">امیر محمد</h1>
            <p className="font-bold text-md text-neutral-300">@amirKh</p>
          </div>
        </div>
        <div className="px-5 text-right pb-5">
          <p className="font-normal text-sm text-neutral-500 px-5">
            سلام عزیز. حدودا 9 روز دیگه (1 اردیبهشت) برای این دوره تخفیف خواهیم
            داشت. برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت و سوشال
            های سبزلرن رو دنبال کنین 👌❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
