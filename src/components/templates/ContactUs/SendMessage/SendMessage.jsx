import React from 'react'

const SendMessage = () => {
  return (
      <div className="flex flex-col gap-5 w-5/6 xl:w-2/3 m-auto text-textC bg-background rounded-2xl shadow-2xl p-12">
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
  )
}

export default SendMessage