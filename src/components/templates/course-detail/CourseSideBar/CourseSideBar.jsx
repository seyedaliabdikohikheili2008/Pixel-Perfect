import React, { useState } from "react";
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
import { Reserve } from "../../../../core/services/Course-detail/reserve/reserve";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const CourseSideBar = ({course}) => {
  const { t } = useTranslation("courseDetail");
  const [isReserving, setIsReserving] = useState(false);
  const mode = useSelector((state) => state.DarkFlag.value);

  const handleReserveClick = async () => {
    console.log("course.id:", course.courseId);
    setIsReserving(true);
    try {
      const response = await Reserve(course.courseId);
      toast.success("دوره با موفقیت رزرو شد!");
      console.log(response);
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "خطایی در رزرو رخ داد.";
      toast.error(errorMessage);
      console.error(error);
    } finally {
      setIsReserving(false);
    }
  };

  return (
    <div className=" w-full xl:w-3/10 md:w-3/4 mx-auto flex flex-col items-center gap-8">
      <Toaster/>
      <div className="bg-background w-full p-8 rounded-2xl shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-textC pb-8 ">
          {course.title}
        </h1>
        <div className="w-11/12 m-auto">
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? usermultipate: darkusermultipate} alt="usermultipate" />
              <p className="text-md text-neutral-300">{t("sidebar.Students")}</p>
            </div>
            <p className="font-bold text-[16px] text-textC">{course.studentCount}</p>
          </div>

          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ?situation : darksituation} alt="situation" />
              <p className="text-md text-neutral-300">{t("sidebar.status")}</p>
            </div>
            <p className="font-normal text-[16px] text-textC">{course.courseStatusName}</p>
          </div>
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? start: darkstart} alt="start" />
              <p className="text-md text-neutral-300">{t("sidebar.start")}</p>
            </div>
            <p className="font-normal text-[16px] text-textC">
              {new Date(course.startTime).toLocaleDateString('fa-IR')}
            </p>
          </div>
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={mode == "light" ? end: darkend} alt="end" />
              <p className="text-md text-neutral-300">{t("sidebar.end")}</p>
            </div>
            <p className="font-normal text-[16px] text-textC">
               {new Date(course.endTime).toLocaleDateString('fa-IR')}
            </p>
          </div>
          <div className="flex justify-between items-center pt-5">
            <Button 
              onClick={handleReserveClick}
              disabled={isReserving}
              children={isReserving ? "در حال رزرو..." : t("sidebar.button")}
            />
            <div className="flex items-center gap-2 justify-center">
                <p className="font-bold text-xl md:text-2xl text-primary-300">{course.cost}</p>
                <p className="text-xl md:text-2xl font-normal text-textC">{t("sidebar.price")}</p>
            </div>
          </div>
        </div> 
      </div>
      <Profile/>
      <Acceptance courseData={course}/>
    </div>
  );
};

export default CourseSideBar;
