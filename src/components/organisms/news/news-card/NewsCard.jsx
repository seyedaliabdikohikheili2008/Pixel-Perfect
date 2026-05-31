import React from "react";
import img from "../../../../assets/images/news/news-card/70f359fd3b854130662b1c7c8eac71d7e21994e0.jpg";
import user from "../../../../assets/images/icons/news/news-card/user.png";
import book from "../../../../assets/images/icons/news/news-card/book.png";

const NewsCard = () => {
  return (
    <>
      <div className="w-79 h-120 relative rounded-4xl overflow-hidden">
        <img
          className="z-0 object-cover w-full h-full object-center"
          src={img}
          alt=""
        />
        <div className="w-full h-full absolute shadow-[inset_0px_-100px_120px_0px_#202020] top-0 right-0 z-10"></div>
        <div className="w-10/12 flex flex-col gap-3 absolute z-10 bottom-5 left-1/2 -translate-x-1/2">
          <h3 className="text-white text-right text-2xl font-bold">پایتون</h3>
          <p className="text-white text-right text-base font-bold">
            دوره های ما مرتباً به روز می شوند، بنابراین شما همیشه از آخرین
            اطلاعات کار می کنید.
          </p>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <img className="w-4.5" src={user} alt="" />
              <p className="text-white text-base font-bold">13 بازدید</p>
            </div>
            <div className="flex gap-2">
              <img className="w-4.5" src={book} alt="" />
              <p className="text-white text-base font-bold">2 دروس</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
