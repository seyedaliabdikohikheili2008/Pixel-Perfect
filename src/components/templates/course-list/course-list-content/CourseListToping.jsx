import React from "react";
import view1 from "../../../../assets/images/icons/courses/view1.png";
import view2 from "../../../../assets/images/icons/courses/view2.png";
import view1dark from "../../../../assets/images/icons/courses/view1Dark.png";
import view2dark from "../../../../assets/images/icons/courses/view2Dark.png";
import { useSelector } from "react-redux";

const CourseListToping = ({ cardView2, setcardView2 }) => {
  const mode = useSelector((state) => state.DarkFlag.value);

  return (
    <>
      <div className="w-full h-12">
        <div className="w-24 h-full flex items-center justify-between p-1 bg-neutral-50 rounded-2xl">
          <div
            onClick={() => {
              setcardView2(false);
            }}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center ${cardView2 ? "" : "bg-rootBg"}`}
          >
            <img src={mode == "light" ? view1 : view1dark} alt="" />
          </div>
          <div
            onClick={() => {
              setcardView2(true);
            }}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center ${cardView2 ? "bg-rootBg" : ""}`}
          >
            <img src={mode == "light" ? view2 : view2dark} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseListToping;
