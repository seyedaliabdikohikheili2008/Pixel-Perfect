import React from "react";
import view1 from "../../../../assets/images/icons/courses/view1.png";
import view2 from "../../../../assets/images/icons/courses/view2.png";
import view1dark from "../../../../assets/images/icons/courses/view1Dark.png";
import view2dark from "../../../../assets/images/icons/courses/view2Dark.png";
import { useSelector } from "react-redux";
import Input from "../../../atoms/Input/Input";
import search from "../../../../assets/images/icons/courses/search.png";
import sortIcon from "../../../../assets/images/icons/courses/listsort.png";
import sortIcondark from "../../../../assets/images/icons/courses/listsortdark.png";

const CourseListToping = ({ cardView2, setcardView2 }) => {
  const mode = useSelector((state) => state.DarkFlag.value);

  return (
    <>
      <div className="w-full h-12 flex justify-between gap-4">
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
        <Input
          icon={search}
          placeholder={"جستوجو دوره ها"}
          iconClassname={"pr-2"}
          boxClassname={"w-1/2 flex-1 gap-2"}
        />
        <div className="flex relative items-center gap-2 w-45 bg-neutral-50 rounded-2xl justify-evenly p-2">
          <img className="absolute w-5 h-5 right-2" src={mode == "light" ? sortIcon : sortIcondark} alt="" />
          <select
            className="w-full text-center outline-0 text-textC text-lg"
            defaultValue={"popular"}
          >
            <option value="popular">محبوب ترین</option>
            <option value="best">بهترین</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CourseListToping;
