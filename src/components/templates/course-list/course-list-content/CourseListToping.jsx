import React, { useRef } from "react";
import view1 from "../../../../assets/images/icons/courses/view1.png";
import view2 from "../../../../assets/images/icons/courses/view2.png";
import view1dark from "../../../../assets/images/icons/courses/view1Dark.png";
import view2dark from "../../../../assets/images/icons/courses/view2Dark.png";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../atoms/Input/Input";
import search from "../../../../assets/images/icons/courses/search.png";
import sortIcon from "../../../../assets/images/icons/courses/listsort.png";
import sortIcondark from "../../../../assets/images/icons/courses/listsortdark.png";
import Button from "../../../atoms/Butoon/Button";
import { ToggleCourseFilter } from "../../../../core/feature/courses/CoursesFilterMenu";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CourseListToping = ({
  cardView2,
  setcardView2,
  updateQuery,
  news = false,
}) => {
  const { t } = useTranslation("courses");

  const mode = useSelector((state) => state.DarkFlag.value);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const sortType = searchParams.get("SortType") || "desc";
  const handleSortType = (e) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("SortType", e.target.value);
      return newParams;
    });
  };

  const timeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("Query", value);
        return newParams;
      });
    }, 1500);
  };

  return (
    <>
      <div className="w-full h-12 flex justify-between gap-4">
        <div className="w-24 h-full hidden lg:flex items-center justify-between p-1 bg-neutral-50 rounded-2xl">
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
          onChange={handleChange}
          placeholder={t("Toping.search")}
          boxClassname={"w-1/2 px-3 flex-1 gap-2"}
        />
        <div className="[@media(max-width:1280px)]:hidden flex relative items-center gap-2 w-45 bg-neutral-50 rounded-2xl justify-evenly p-2">
          <img
            className="w-5 h-5"
            src={mode == "light" ? sortIcon : sortIcondark}
            alt=""
          />
          <select
            className="w-full text-center outline-0 text-textC text-lg"
            value={sortType}
            onChange={handleSortType}
          >
            <option value="asc" className="bg-background">
              {!news ? t("Toping.sortOne") : t("Toping.sortOneNews")}
            </option>
            <option value="desc" className="bg-background">
              {!news ? t("Toping.sortTwo") : t("Toping.sortTwoNews")}
            </option>
          </select>
        </div>
        <Button
          children={t("Toping.FilterButton")}
          buttonClassName="flex md:hidden"
          onClick={() => {
            dispatch(ToggleCourseFilter());
          }}
        />
      </div>
    </>
  );
};

export default CourseListToping;
