import React from "react";
import img from "../../../../assets/images/news/news-card/70f359fd3b854130662b1c7c8eac71d7e21994e0.jpg";
import user from "../../../../assets/images/icons/news/news-card/user.png";
import book from "../../../../assets/images/icons/news/news-card/book.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ detail, cardView2 = false }) => {
  const { t } = useTranslation("landing");
  const navigate=useNavigate()
  return (
    <>
      <div
        className={`${cardView2 ? "w-full h-90" : "h-110 w-70"} relative rounded-4xl overflow-hidden m-auto`}
        onClick={()=>navigate (`/news-detail/${detail?.id}`)}
      >
        <img
          className="z-0 object-cover w-full h-full object-center"
          src={detail?.currentImageAddress || img}
          alt="news-image"
        />
        <div className="w-full h-full absolute shadow-[inset_0px_-100px_120px_0px_#202020] top-0 right-0 z-10"></div>
        <div className="w-10/12 flex flex-col gap-3 absolute z-10 bottom-5 left-1/2 -translate-x-1/2">
          <h3 className="text-white text-right text-2xl font-bold">
            {detail?.title}
          </h3>
          <p className="text-white line-clamp-3 text-right text-base font-bold">
            {detail?.miniDescribe}
          </p>
          <div className="w-79 flex gap-5">
            <div className="flex gap-2">
              <img className="w-4.5" src={user} alt="" />
              <p className="text-white text-base font-bold">
                {detail?.currentView} {t("NewNews.view")}
              </p>
            </div>
            <div className="flex gap-2">
              <img className="w-4.5" src={book} alt="" />
              <p className="text-white text-base font-bold">
                2 {t("NewNews.lessons")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
