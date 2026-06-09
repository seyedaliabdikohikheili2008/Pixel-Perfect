import React from "react";
import usermultipate from "../../../../assets/images/icons/course-detail/usermultipate.svg";
import situation from "../../../../assets/images/icons/course-detail/situation .svg";
import end from "../../../../assets/images/icons/course-detail/end.svg";
import start from "../../../../assets/images/icons/course-detail/start.svg";
import Button from "../../../atoms/Butoon/Button";
import Profile from "../../../atoms/profile/Profile";
import Acceptance from "../../../atoms/acceptance/Acceptance";
const CourseSideBar = ({course}) => {
  return (
    <div className=" w-full xl:w-3/10 md:w-3/4 mx-auto flex flex-col items-center gap-8">
      <div className="bg-background w-full p-8 rounded-2xl shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-textC pb-8 ">
          {course.title}
        </h1>
        <div className="w-11/12 m-auto">
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={usermultipate} alt="usermultipate" />
              <p className="text-md text-neutral-300">دانشجویان</p>
            </div>
            <p className="font-bold text-[16px] text-textC">{course.studentCount}</p>
          </div>

          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={situation} alt="situation" />
              <p className="text-md text-neutral-300">وضعیت</p>
            </div>
            <p className="font-normal text-[16px] text-textC">{course.courseStatusName}</p>
          </div>
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={start} alt="start" />
              <p className="text-md text-neutral-300">شروع</p>
            </div>
            <p className="font-normal text-[16px] text-textC">
              {new Date(course.startTime).toLocaleDateString('fa-IR')}
            </p>
          </div>
          <div className="flex justify-between items-center border-b p-2.5 border-solid border-neutral-100">
            <div className="flex justify-center items-center gap-2">
              <img src={end} alt="end" />
              <p className="text-md text-neutral-300">پایان</p>
            </div>
            <p className="font-normal text-[16px] text-textC">
               {new Date(course.endTime).toLocaleDateString('fa-IR')}
            </p>
          </div>
          <div className="flex justify-between items-center pt-5">
            <Button children={"شروع یادگیری"}/>
            <div className="flex items-center gap-2 justify-center">
                <p className="font-bold text-xl md:text-2xl text-primary-300">{course.cost}</p>
                <p className="text-xl md:text-2xl font-normal text-textC">تومان</p>
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
