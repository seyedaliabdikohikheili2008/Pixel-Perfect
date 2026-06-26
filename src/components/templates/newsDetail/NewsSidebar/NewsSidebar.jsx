import React, { useState } from "react";
import Profile from "../../../atoms/profile/Profile";
import Acceptance from "../../../atoms/acceptance/Acceptance";
import bazdid from "../../../../assets/images/icons/newsDetail/bazdid.svg";
import tarikh from "../../../../assets/images/icons/newsDetail/tarikh.png";
import darkbazdid from "../../../../assets/images/icons/newsDetail/darkbazdid.png";
import darktarikh from "../../../../assets/images/icons/newsDetail/darktarikh.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import StarRating from "../../../atoms/acceptance/starrating/StarRating";
import { postNewsRate } from "../../../../core/services/news-detail/addRate/addRage";

const NewsSideBar = ({ news }) => {
  const { t } = useTranslation("newsDetail");
  const mode = useSelector((state) => state.DarkFlag.value);
  const [userRating, setUserRating] = useState(news.currentUserRateNumber || 0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRate = async (rating) => {
    if (loading) return;

    setUserRating(rating);
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const newsId = news.id;
      const result = await postNewsRate(newsId, rating);

      if (result.success && result.message === "نظر شما قبلا ثبت شده است") {
        setError("شما قبلاً به این خبر امتیاز داده‌اید");
        setUserRating(news.currentUserRateNumber || 0);
      } else {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
       const errorData = err.response?.data;
        if (errorData?.message === "نظر شما قبلا ثبت شده است") {
            setError("شما قبلاً به این خبر امتیاز داده‌اید");
        } else {
            setError("خطا در ثبت امتیاز");
        }
      setUserRating(news.currentUserRateNumber || 0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full xl:w-3/10 md:w-3/4 mx-auto flex flex-col items-center gap-8">
      <div className="bg-background w-full p-8 rounded-2xl shadow-2xl">
        <div className="w-11/12 m-auto">
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? bazdid : darkbazdid} alt="" />
              <p className="text-md text-neutral-300">{t("sidebar.view")}</p>
            </div>
            <p className="font-bold text-[16px] text-textC">
              {news.currentView}
            </p>
          </div>
          <div className="flex justify-between items-center p-2.5 ">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? tarikh : darktarikh} alt="" />
              <p className="text-md text-neutral-300">{t("sidebar.date")}</p>
            </div>
            <p className="font-bold text-[16px] text-textC">
              {new Date(news.insertDate).toLocaleDateString("fa-IR")}
            </p>
          </div>
        </div>
      </div>
      <Profile data={news} />
      <Acceptance data={news} />

      <div className="bg-background w-full p-5 rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[18px] text-right text-textC px-5">
            به این خبر امتیاز دهید
          </h1>

          <div className="flex items-center justify-center px-5">
            <StarRating
              rating={userRating}
              onRate={handleRate}
              interactive={!loading}
              disabled={loading}
            />
          </div>

          {loading && (
            <p className="text-center text-sm text-blue-500">
              در حال ثبت امتیاز...
            </p>
          )}

          {success && (
            <p className="text-center text-sm text-green-500">
              ✅ امتیاز شما با موفقیت ثبت شد
            </p>
          )}

          {error && (
            <p className="text-center text-sm text-red-500">❌ {error}</p>
          )}

          {userRating > 0 && !loading && !success && !error && (
            <p className="text-center text-sm text-textC">
              امتیاز شما: {userRating} از ۵
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSideBar;
