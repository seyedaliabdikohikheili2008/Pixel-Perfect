import React, { useState, useEffect } from "react";
import usermultipate from "../../../../assets/images/icons/course-detail/usermultipate.svg";
import darkusermultipate from "../../../../assets/images/icons/course-detail/darkusermultipate.png";
import situation from "../../../../assets/images/icons/course-detail/situation .svg";
import darksituation from "../../../../assets/images/icons/course-detail/darksituation.png";
import end from "../../../../assets/images/icons/course-detail/end.svg";
import darkend from "../../../../assets/images/icons/course-detail/darlend.png";
import start from "../../../../assets/images/icons/course-detail/start.svg";
import darkstart from "../../../../assets/images/icons/course-detail/darkstart.png";
import Button from "../../../atoms/Butoon/Button";
import Profile from "../../../atoms/profile/Profile";
import Acceptance from "../../../atoms/acceptance/Acceptance";
import { useTranslation } from "react-i18next";
import { AddRate } from "../../../../core/services/Course-detail/addRate/addRate";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import StarRating from "../../../atoms/acceptance/starrating/StarRating";

const CourseSideBar = ({ course }) => {
  const { t } = useTranslation("courseDetail");
  const [isReserving, setIsReserving] = useState(false);
  const mode = useSelector((state) => state.DarkFlag.value);
  const [userRating, setUserRating] = useState(
    course.currentUserRateNumber || 0,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  if (course.currentUserRateNumber) {
    setUserRating(course.currentUserRateNumber);
  }
}, [course.currentUserRateNumber]);

  const handleReserveClick = async () => {
    console.log("course.id:", course.courseId);
    setIsReserving(true);
    try {
      const response = await AddRate(course.courseId);
      toast.success("دوره با موفقیت رزرو شد!");
      console.log(response);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "خطایی در رزرو رخ داد.";
      toast.error(errorMessage);
      console.error(error);
    } finally {
      setIsReserving(false);
    }
  };

  const handleRate = async (rating) => {
    if (loading) return;

    setUserRating(rating);
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      console.log("Sending rating:", { courseId: course.courseId, rating });
      const result = await AddRate(course.courseId, rating);

      if (result.data?.message === "نظر شما قبلا ثبت شده است") {
        setError("شما قبلاً به این دوره امتیاز داده‌اید");
        setUserRating(course.currentUserRateNumber || 0);
      } else {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData?.message === "نظر شما قبلا ثبت شده است") {
        setError("شما قبلاً به این دوره امتیاز داده‌اید");
      } else {
        setError("خطا در ثبت امتیاز");
      }
      setUserRating(course.currentUserRateNumber || 0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full xl:w-3/10 md:w-3/4 mx-auto flex flex-col items-center gap-8">
      <Toaster />
      <div className="bg-background w-full p-8 rounded-2xl shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-textC pb-8 ">
          {course.title}
        </h1>
        <div className="w-11/12 m-auto">
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img
                src={mode == "light" ? usermultipate : darkusermultipate}
                alt="usermultipate"
              />
              <p className="text-md text-neutral-300">
                {t("sidebar.Students")}
              </p>
            </div>
            <p className="font-bold text-[16px] text-textC">
              {course.studentCount}
            </p>
          </div>

          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img
                src={mode == "light" ? situation : darksituation}
                alt="situation"
              />
              <p className="text-md text-neutral-300">{t("sidebar.status")}</p>
            </div>
            <p className="font-normal text-[16px] text-textC">
              {course.courseStatusName}
            </p>
          </div>
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? start : darkstart} alt="start" />
              <p className="text-md text-neutral-300">{t("sidebar.start")}</p>
            </div>
            <p className="font-normal text-[16px] text-textC">
              {new Date(course.startTime).toLocaleDateString("fa-IR")}
            </p>
          </div>
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? end : darkend} alt="end" />
              <p className="text-md text-neutral-300">{t("sidebar.end")}</p>
            </div>
            <p className="font-normal text-[16px] text-textC">
              {new Date(course.endTime).toLocaleDateString("fa-IR")}
            </p>
          </div>
          <div className="flex justify-between items-center pt-5">
            <Button
              onClick={handleReserveClick}
              disabled={isReserving}
              children={isReserving ? "در حال رزرو..." : t("sidebar.button")}
            />
            <div className="flex items-center gap-2 justify-center">
              <p className="font-bold text-xl md:text-2xl text-primary-300">
                {course.cost}
              </p>
              <p className="text-xl md:text-2xl font-normal text-textC">
                {t("sidebar.price")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Profile courseData={course} />
      <Acceptance courseData={course} />
      <div className="bg-background w-full p-5 rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[18px] text-right text-textC px-5">
            به این دوره امتیاز دهید
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

export default CourseSideBar;
